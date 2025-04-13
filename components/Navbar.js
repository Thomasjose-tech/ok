// "use client";

import { useState, useEffect } from "react";
import { User, LogOut, Trash2, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = ({ onMenuClick }) => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set mounted to true when component mounts
  useEffect(() => {
    setMounted(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically the md breakpoint in Tailwind
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  const handleLogout = () => {
    // Clear all authentication data from storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("checkedAuth");

    // Redirect to login page
    router.push("/login");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-gray-900 text-white p-2 pb-4 fixed w-full top-0 z-50">
      <div className="flex flex-wrap items-center justify-between w-full gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          {/* Mobile Menu Button - Only visible on mobile */}
          {isMobile && (
            <button
              onClick={onMenuClick}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}

          {/* Profile Image */}
          <div className="relative group">
            <label className="cursor-pointer block w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 hover:ring-2 hover:ring-red-500">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
                  <User className="text-white" size={16} />
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
            {profileImage && (
              <button
                onClick={handleDeleteImage}
                className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={12} className="text-white" />
              </button>
            )}
          </div>

          <h1 className="text-sm sm:text-lg font-bold whitespace-nowrap">
            Welcome back, Trainer!
          </h1>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded flex items-center text-xs sm:text-base whitespace-nowrap"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="mr-1 sm:mr-2" size={16} />
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="mr-1 sm:mr-2" size={16} />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded flex items-center text-xs sm:text-base whitespace-nowrap"
          >
            <LogOut className="mr-1 sm:mr-2" size={14} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;