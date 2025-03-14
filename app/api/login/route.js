import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const adminEmail = "email.test@gmail.com";
  const adminPassword = "123456";

  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({ message: "Admin Login Successful" });
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
