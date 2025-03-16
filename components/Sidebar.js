
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const pathname = usePathname();

//   // Detect screen width and update state
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768); // Using md breakpoint (768px)
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navItems = [
//     { href: "/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
//     { href: "/members", icon: <Users size={20} />, text: "Members" },
//     { href: "/trainers", icon: <Dumbbell size={20} />, text: "Trainers" },
//     { href: "/payment-history", icon: <CreditCard size={20} />, text: "Payment History" },
//     { href: "/attendance", icon: <CalendarCheck size={20} />, text: "Attendance" },
//   ];

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button - always visible on small/medium screens */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed bg-gray-800 p-4 sm:p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
//           ${isOpen ? "left-0 w-64" : "-left-64"} 
//           md:w-64 md:left-0 
//           top-0 pt-24`}
//       >
//         <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
//         <nav className="space-y-3 sm:space-y-5 text-white">
//           {navItems.map((item, index) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className={`flex items-center px-3 sm:px-4 py-2 rounded-lg w-full transition transform hover:scale-105 text-sm sm:text-base font-semibold
//                   ${isActive
//                     ? "bg-red-600"
//                     : "hover:bg-red-600"}`}
//                 onClick={() => {
//                   if (!isDesktop) closeSidebar();
//                 }}
//               >
//                 <span className={isActive ? "text-white" : "text-red-600"}>
//                   {item.icon}
//                 </span>
//                 <span className="ml-3">{item.text}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* Overlay for mobile/tablet */}
//       {isOpen && !isDesktop && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
//           onClick={closeSidebar}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // Detect screen width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Using md breakpoint (768px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
    { href: "/members", icon: <Users size={20} />, text: "Members" },
    { href: "/trainers", icon: <Dumbbell size={20} />, text: "Trainers" },
    { href: "/payment-history", icon: <CreditCard size={20} />, text: "Payment History" },
    { href: "/attendance", icon: <CalendarCheck size={20} />, text: "Attendance" },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle Button - always visible on small/medium screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed bg-gray-800 p-4 sm:p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
          ${isOpen ? "left-0 w-64" : "-left-64"} 
          md:w-64 md:left-0 
          top-0 pt-24`}
      >
        <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
        <nav className="space-y-3 sm:space-y-5 text-white">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-lg w-full transition transform hover:scale-105 text-sm sm:text-base font-semibold
                  ${isActive
                    ? "bg-red-600 border-2 border-black hover:border-black"
                    : "hover:bg-red-600 hover:border-2 hover:border-black"}`}
                onClick={() => {
                  if (!isDesktop) closeSidebar();
                }}
              >
                <span className={isActive ? "text-white" : "text-red-600"}>
                  {item.icon}
                </span>
                <span className="ml-3">{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile/tablet */}
      {isOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;