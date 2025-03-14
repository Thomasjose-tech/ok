"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    setTimeout(() => {
      setMessage("Password reset successfully!");
      setLoading(false);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
      <div 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-red-600 shadow-lg transition-all duration-300 
        focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500 active:border-red-500 active:ring-2 active:ring-red-500
        hover:shadow-red-600/40 hover:shadow-xl hover:border-2"
      >
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">RESET PASSWORD</h1>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4 sm:mb-6">
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 
              focus:border-red-500 focus:ring-0 focus:ring-red-500 outline-none 
              transition-all duration-200"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 sm:mb-8">
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 
              focus:border-red-500 focus:ring-0 focus:ring-red-500 outline-none 
              transition-all duration-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 sm:w-40 md:w-48 lg:w-56 bg-red-600 text-white p-3 sm:p-4 rounded font-medium hover:bg-red-700 active:bg-red-800 focus:bg-red-700 
                transform active:translate-y-0 transition-all duration-200 text-base sm:text-lg relative overflow-hidden hover:shadow-lg hover:shadow-red-600/20"
              disabled={loading}
            >
              <span className="relative z-10 flex justify-center items-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </span>
            </button>
          </div>
          {message && <p className="text-green-400 mt-4 text-center">{message}</p>}
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
          <div className="text-center mt-4 sm:mt-6">
            <Link href="/login" className="text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors duration-200 hover:underline inline-block">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );  
}