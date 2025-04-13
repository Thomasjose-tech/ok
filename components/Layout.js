

// "use client"
// import { useState, useEffect,useRef } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { useTheme } from "next-themes";

// export default function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     if (!theme) setTheme("dark");
//   }, [theme, setTheme]);

//   useEffect(() => {
//     if (mounted) {
//       document.documentElement.classList.toggle("light-mode", resolvedTheme === "light");
//     }
//   }, [mounted, resolvedTheme]);

//   // Prevent scrolling when sidebar is open
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isSidebarOpen]);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div className={`${resolvedTheme === "light" ? "light-mode" : ""} fixed inset-0`}>
//       <div className="flex flex-col min-h-screen w-full">
//         {/* Navbar */}
//         <Navbar
//           onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           onLogout={() => console.log("Logging out...")}
//           onRegister={() => console.log("Registering new member...")}
//         />

//         {/* Theme Toggle Button */}
//         <button
//           onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
//           className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition-all duration-300 light-mode:bg-white light-mode:text-black light-mode:border light-mode:border-gray-300 z-50"
//         >
//           {resolvedTheme === "light" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Main Content */}
//         <div className="flex flex-1 w-full">
//           <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
//           <main className="flex-1 bg-gray-900 ml-0 md:ml-64 overflow-hidden light-mode:bg-white w-full">
//             <div className="mt-24 h-[calc(100vh-6rem)] overflow-y-auto">
//               {children}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"
// import { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { useTheme } from "next-themes";
// import { usePathname } from "next/navigation";

// export default function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();

//   const isLoginPage = pathname === '/login'; // Adjust this path to match your login route

//   useEffect(() => {
//     setMounted(true);
//     if (!theme) setTheme("dark");
//   }, [theme, setTheme]);

//   useEffect(() => {
//     if (mounted) {
//       document.documentElement.classList.toggle("light-mode", resolvedTheme === "light");
//     }
//   }, [mounted, resolvedTheme]);

//   // Prevent scrolling when sidebar is open
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isSidebarOpen]);

//   if (!mounted) {
//     return null;
//   }

//   // Special layout for login page
//   if (isLoginPage) {
//     return (
//       <div className="fixed inset-0 bg-white">
//         <main className="h-screen w-full overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     );
//   }

//   // Default layout for all other pages
//   return (
//     <div className={`${resolvedTheme === "light" ? "light-mode" : ""} fixed inset-0`}>
//       <div className="flex flex-col min-h-screen w-full">
//         {/* Navbar */}
//         <Navbar
//           onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           onLogout={() => console.log("Logging out...")}
//           onRegister={() => console.log("Registering new member...")}
//         />

//         {/* Theme Toggle Button */}
//         <button
//           onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
//           className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition-all duration-300 light-mode:bg-white light-mode:text-black light-mode:border light-mode:border-gray-300 z-50"
//         >
//           {resolvedTheme === "light" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Main Content */}
//         <div className="flex flex-1 w-full">
//           <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
//           <main className="flex-1 bg-gray-900 ml-0 md:ml-64 overflow-hidden light-mode:bg-white w-full">
//             <div className="mt-24 h-[calc(100vh-6rem)] overflow-y-auto">
//               {children}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isLoginPage = pathname === '/login'; // Adjust this path to match your login route

  useEffect(() => {
    setMounted(true);
    // Set default theme to light if no theme is set
    if (!theme) setTheme("light");
  }, [theme, setTheme]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("light-mode", resolvedTheme === "light");
      // Set initial background color to white
      document.body.style.backgroundColor = resolvedTheme === "light" ? "#ffffff" : "#1a202c";
    }
  }, [mounted, resolvedTheme]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  if (!mounted) {
    return null;
  }

  // Special layout for login page
  if (isLoginPage) {
    return (
      <div className="fixed inset-0 bg-white">
        <main className="h-screen w-full overflow-y-auto">
          {children}
        </main>
      </div>
    );
  }

  // Default layout for all other pages
  return (
    <div className={`${resolvedTheme === "light" ? "light-mode bg-white" : "bg-gray-900"} fixed inset-0`}>
      <div className="flex flex-col min-h-screen w-full">
        {/* Navbar */}
        <Navbar
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={() => console.log("Logging out...")}
          onRegister={() => console.log("Registering new member...")}
        />

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full text-white shadow-lg hover:bg-gray-700 transition-all duration-300 light-mode:bg-white light-mode:text-black light-mode:border light-mode:border-gray-300 z-50"
        >
          {resolvedTheme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>

        {/* Main Content */}
        <div className="flex flex-1 w-full">
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
          <main className={`flex-1 ${resolvedTheme === "light" ? "bg-white" : "bg-gray-900"} ml-0 md:ml-64 overflow-hidden w-full`}>
            <div className="mt-24 h-[calc(100vh-6rem)] overflow-y-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}