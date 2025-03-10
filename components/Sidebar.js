// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";

// const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button */}
//       <button
//         onClick={() => setMobileOpen(!mobileOpen)}
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-full text-white"
//       >
//         {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:relative bg-gray-800 p-6 space-y-4 h-screen transition-all duration-300 z-40
//           ${mobileOpen ? "left-0 w-64" : "-left-64"} md:w-64 md:left-0`}
//       >
//         <h2 className="text-xl font-bold text-center md:text-left">FLEX ZONE GYM</h2>
//         <nav className="space-y-5">
//           <Link
//             href="/dashboard"
//             className="mt-10 flex items-center px-4 py-2 rounded-lg w-full text-left transition transform hover:scale-105 font-semibold hover:bg-red-600"
//             onClick={() => {
//               closeSidebar();
//               setMobileOpen(false);
//             }}
//           >
//             <LayoutDashboard className="mr-3" size={20} /> Dashboard
//           </Link>

//           <Link
//             href="/members"
//             className="mt-7 flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//             onClick={() => {
//               closeSidebar();
//               setMobileOpen(false);
//             }}
//           >
//             <Users className="mr-3" size={20} /> Members
//           </Link>

//           <Link
//             href="/trainers"
//             className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//             onClick={() => {
//               closeSidebar();
//               setMobileOpen(false);
//             }}
//           >
//             <Dumbbell className="mr-3" size={20} /> Trainers
//           </Link>

//           <Link
//             href="/payment-history"
//             className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//             onClick={() => {
//               closeSidebar();
//               setMobileOpen(false);
//             }}
//           >
//             <CreditCard className="mr-3" size={20} /> Payment History
//           </Link>

//           <Link
//             href="/attendance"
//             className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//             onClick={() => {
//               closeSidebar();
//               setMobileOpen(false);
//             }}
//           >
//             <CalendarCheck className="mr-3" size={20} /> Attendance
//           </Link>
//         </nav>
//       </aside>

//       {/* Overlay for mobile */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";

// const Sidebar = ({ isOpen, closeSidebar }) => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Detect screen width and update state
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 519);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button */}
//       {!isDesktop && (
//         <button
//           onClick={closeSidebar}
//           className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed bg-gray-800 p-6 space-y-4 h-screen transition-all duration-300 z-40 overflow-y-auto shadow-lg
//           ${isOpen ? "left-0 w-64" : "-left-64"} md:w-64 md:left-0 mt-16`} // Add mt-16 for top margin
//       >
//         <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
//         <nav className="space-y-5 text-white">
//           {[
//             { href: "/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
//             { href: "/members", icon: <Users size={20} />, text: "Members" },
//             { href: "/trainers", icon: <Dumbbell size={20} />, text: "Trainers" },
//             { href: "/payment-history", icon: <CreditCard size={20} />, text: "Payment History" },
//             { href: "/attendance", icon: <CalendarCheck size={20} />, text: "Attendance" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//               onClick={closeSidebar}
//             >
//               {item.icon} <span className="ml-3">{item.text}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Overlay for mobile */}
//       {isOpen && !isDesktop && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
//           onClick={closeSidebar}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";

// const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Detect screen width and update state
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 519);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button */}
//       {!isDesktop && (
//         <button
//           onClick={toggleSidebar} // Use toggleSidebar instead of closeSidebar
//           className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed bg-gray-800 p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
//           ${isOpen ? "left-0 w-64" : "-left-64"} md:w-64 md:left-0 mt-16`} // Add mt-16 for top margin
//       >
//         <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
//         <nav className="space-y-5 text-white">
//           {[
//             { href: "/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
//             { href: "/members", icon: <Users size={20} />, text: "Members" },
//             { href: "/trainers", icon: <Dumbbell size={20} />, text: "Trainers" },
//             { href: "/payment-history", icon: <CreditCard size={20} />, text: "Payment History" },
//             { href: "/attendance", icon: <CalendarCheck size={20} />, text: "Attendance" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//               onClick={closeSidebar}
//             >
//               {item.icon} <span className="ml-3">{item.text}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Overlay for mobile */}
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
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { LayoutDashboard, Users, Dumbbell, CreditCard, CalendarCheck, Menu, X } from "lucide-react";

// const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Detect screen width and update state
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 519);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button */}
//       {!isDesktop && (
//         <button
//           onClick={toggleSidebar} // Use toggleSidebar instead of closeSidebar
//           className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed bg-gray-800 p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
//           ${isOpen ? "left-0 w-64" : "-left-64"} md:w-64 md:left-0 mt-24`} // Changed mt-16 to mt-24
//       >
//         <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
//         <nav className="space-y-5 text-white">
//           {[
//             { href: "/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
//             { href: "/members", icon: <Users size={20} />, text: "Members" },
//             { href: "/trainers", icon: <Dumbbell size={20} />, text: "Trainers" },
//             { href: "/payment-history", icon: <CreditCard size={20} />, text: "Payment History" },
//             { href: "/attendance", icon: <CalendarCheck size={20} />, text: "Attendance" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className="flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold hover:bg-red-600"
//               onClick={closeSidebar}
//             >
//               {item.icon} <span className="ml-3">{item.text}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Overlay for mobile */}
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
      setIsDesktop(window.innerWidth >= 519);
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
      {/* Mobile Sidebar Toggle Button */}
      {!isDesktop && (
        <button
          onClick={toggleSidebar} // Use toggleSidebar instead of closeSidebar
          className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed bg-gray-800 p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
          ${isOpen ? "left-0 w-64" : "-left-64"} md:w-64 md:left-0 mt-24`} // Changed mt-16 to mt-24
      >
        <h2 className="text-xl font-bold text-white text-center md:text-left">FLEX ZONE GYM</h2>
        <nav className="space-y-5 text-white">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-lg w-full transition transform hover:scale-105 font-semibold
                  ${isActive 
                    ? "bg-red-600" 
                    : "hover:bg-red-600"}`}
                onClick={closeSidebar}
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

      {/* Overlay for mobile */}
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