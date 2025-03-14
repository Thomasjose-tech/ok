import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendPasswordResetEmail } from "../../../lib/email";
import validator from "validator";

export async function POST(req) {
  const { email } = await req.json();
  
  // Validate email format
  if (!validator.isEmail(email)) {
    console.error("Invalid email format:", email);
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  
  const client = await clientPromise;
  const db = client.db("gym"); // Replace with your actual database name
  const users = db.collection("users");
  
  try {
    // Check if the email exists
    const user = await users.findOne({ email });
    if (!user) {
      console.log(`Password reset requested for non-existent email: ${email}`);
      // Don't reveal if the email exists or not for security reasons
      return NextResponse.json({ message: "If the email exists, you will receive a password reset link." });
    }
    
    // Generate a password reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    
    // Save the token and expiry in the database
    await users.updateOne(
      { email },
      { $set: { resetToken, resetTokenExpiry } }
    );
    
    // Send the reset token to the user's email
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}&userId=${user._id.toString()}`;
    
    try {
      await sendPasswordResetEmail(email, resetLink);
      console.log(`Password reset email sent to: ${email}`);
      return NextResponse.json({ message: "If the email exists, you will receive a password reset link." });
    } catch (error) {
      console.error("Error sending email:", error.message, error.stack);
      return NextResponse.json({ error: "Failed to send email: " + error.message }, { status: 500 });
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}