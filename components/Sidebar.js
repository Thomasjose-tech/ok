// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import { useState, useEffect } from "react";
// // // // // import { Users, Menu, X } from "lucide-react";
// // // // // import { usePathname } from "next/navigation";

// // // // // const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
// // // // //   const [isDesktop, setIsDesktop] = useState(false);
// // // // //   const pathname = usePathname();

// // // // //   // Detect screen width and update state
// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       setIsDesktop(window.innerWidth >= 768); // Using md breakpoint (768px)
// // // // //     };

// // // // //     handleResize(); // Initial check
// // // // //     window.addEventListener("resize", handleResize);
// // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // //   }, []);

// // // // //   const navItems = [
// // // // //     { href: "/members", icon: <Users size={20} />, text: "Members" },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       {/* Mobile Sidebar Toggle Button - always visible on small/medium screens */}
// // // // //       <button
// // // // //         onClick={toggleSidebar}
// // // // //         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
// // // // //       >
// // // // //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// // // // //       </button>

// // // // //       {/* Sidebar */}
// // // // //       <aside
// // // // //         className={`fixed bg-gray-800 p-4 sm:p-6 space-y-4 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
// // // // //           ${isOpen ? "left-0 w-64" : "-left-64"} 
// // // // //           md:w-64 md:left-0 
// // // // //           top-0 pt-24`}
// // // // //       >
// // // // //         <h2 className="text-xl font-bold text-white text-center md:text-left">
// // // // //           FLEX ZONE GYM
// // // // //         </h2>
// // // // //         <nav className="space-y-3 sm:space-y-5 text-white">
// // // // //           {navItems.map((item, index) => {
// // // // //             const isActive = pathname === item.href;
// // // // //             return (
// // // // //               <Link
// // // // //                 key={index}
// // // // //                 href={item.href}
// // // // //                 className={`flex items-center px-3 sm:px-4 py-2 rounded-lg w-full transition transform hover:scale-105 text-sm sm:text-base font-semibold
// // // // //                   ${
// // // // //                     isActive
// // // // //                       ? "bg-red-600 border-2 border-black hover:border-black"
// // // // //                       : "hover:bg-red-600 hover:border-2 hover:border-black"
// // // // //                   }`}
// // // // //                 onClick={() => {
// // // // //                   if (!isDesktop) closeSidebar();
// // // // //                 }}
// // // // //               >
// // // // //                 <span className={isActive ? "text-white" : "text-red-600"}>
// // // // //                   {item.icon}
// // // // //                 </span>
// // // // //                 <span className="ml-3">{item.text}</span>
// // // // //               </Link>
// // // // //             );
// // // // //           })}
// // // // //         </nav>
// // // // //       </aside>

// // // // //       {/* Overlay for mobile/tablet */}
// // // // //       {isOpen && !isDesktop && (
// // // // //         <div
// // // // //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// // // // //           onClick={closeSidebar}
// // // // //         />
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Sidebar;
// // // // "use client";

// // // // import Link from "next/link";
// // // // import { useState, useEffect } from "react";
// // // // import { Users, Menu, X, LogOut } from "lucide-react";
// // // // import { usePathname } from "next/navigation";
// // // // import { useRouter } from "next/navigation";

// // // // const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
// // // //   const [isDesktop, setIsDesktop] = useState(false);
// // // //   const pathname = usePathname();
// // // //   const router = useRouter();

// // // //   const navItems = [
// // // //     { href: "/members", icon: <Users size={20} />, text: "Members" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       setIsDesktop(window.innerWidth >= 768);
// // // //     };

// // // //     handleResize();
// // // //     window.addEventListener("resize", handleResize);
// // // //     return () => window.removeEventListener("resize", handleResize);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (isOpen && !isDesktop) {
// // // //       document.body.classList.add('sidebar-open');
// // // //     } else {
// // // //       document.body.classList.remove('sidebar-open');
// // // //     }
    
// // // //     return () => {
// // // //       document.body.classList.remove('sidebar-open');
// // // //     };
// // // //   }, [isOpen, isDesktop]);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("user");
// // // //     localStorage.removeItem("token");
// // // //     localStorage.removeItem("authToken");
// // // //     sessionStorage.removeItem("checkedAuth");
// // // //     router.push("/login");
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Mobile toggle button - hidden on desktop */}
// // // //       <button
// // // //         onClick={toggleSidebar}
// // // //         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
// // // //       >
// // // //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// // // //       </button>

// // // //       {/* Sidebar - consistent styling for all screens */}
// // // //       <aside
// // // //         className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
// // // //           ${isOpen ? "left-0 w-64" : "-left-64"} 
// // // //           md:left-0 md:w-64 
// // // //           top-0 pt-24`}
// // // //       >
// // // //         {/* Title with consistent spacing */}
// // // //         <div className="mb-8"> {/* 2cm gap below title */}
// // // //           <h2 className="text-xl font-bold text-white text-center md:text-left">
// // // //             FLEX ZONE GYM
// // // //           </h2>
// // // //         </div>

// // // //         {/* Navigation items with consistent spacing */}
// // // //         <nav className="space-y-4"> {/* 1cm gap between items */}
// // // //           {navItems.map((item, index) => {
// // // //             const isActive = pathname === item.href;
// // // //             return (
// // // //               <Link
// // // //                 key={index}
// // // //                 href={item.href}
// // // //                 className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
// // // //                   text-base font-semibold
// // // //                   ${
// // // //                     isActive
// // // //                       ? "bg-red-600 text-white border-2 border-black"
// // // //                       : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
// // // //                   }`}
// // // //                 onClick={() => {
// // // //                   if (!isDesktop) closeSidebar();
// // // //                 }}
// // // //               >
// // // //                 <span className="mr-3">
// // // //                   {item.icon}
// // // //                 </span>
// // // //                 <span>{item.text}</span>
// // // //               </Link>
// // // //             );
// // // //           })}
// // // //         </nav>
// // // //       </aside>

// // // //       {/* Overlay - only for mobile */}
// // // //       {isOpen && !isDesktop && (
// // // //         <div
// // // //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// // // //           onClick={closeSidebar}
// // // //         />
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default Sidebar;
// // // "use client";

// // // import Link from "next/link";
// // // import { useState, useEffect } from "react";
// // // import { Users, Menu, X, LogOut } from "lucide-react";
// // // import { usePathname } from "next/navigation";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";

// // // const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
// // //   const [isDesktop, setIsDesktop] = useState(false);
// // //   const pathname = usePathname();
// // //   const router = useRouter();

// // //   const navItems = [
// // //     { href: "/members", icon: <Users size={20} />, text: "Members" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       setIsDesktop(window.innerWidth >= 768);
// // //     };

// // //     handleResize();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (isOpen && !isDesktop) {
// // //       document.body.classList.add('sidebar-open');
// // //     } else {
// // //       document.body.classList.remove('sidebar-open');
// // //     }

// // //     return () => {
// // //       document.body.classList.remove('sidebar-open');
// // //     };
// // //   }, [isOpen, isDesktop]);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("user");
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("authToken");
// // //     sessionStorage.removeItem("checkedAuth");
// // //     router.push("/login");
// // //   };

// // //   return (
// // //     <>
// // //       {/* Mobile toggle button - hidden on desktop */}
// // //       <button
// // //         onClick={toggleSidebar}
// // //         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
// // //       >
// // //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// // //       </button>

// // //       {/* Sidebar - consistent styling for all screens */}
// // //       <aside
// // //         className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
// // //           ${isOpen ? "left-0 w-64" : "-left-64"} 
// // //           md:left-0 md:w-64 
// // //           top-0 pt-24`}
// // //       >
// // //         {/* Title */}
// // //         <div className="mb-8">
// // //           <h2 className="text-xl font-bold text-white text-center md:text-left">
// // //             FLEX ZONE GYM
// // //           </h2>
// // //         </div>

// // //         {/* Navigation */}
// // //         <nav className="space-y-4">
// // //           {navItems.map((item, index) => {
// // //             const isActive = pathname === item.href;
// // //             return (
// // //               <Link
// // //                 key={index}
// // //                 href={item.href}
// // //                 className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
// // //                   text-base font-semibold
// // //                   ${
// // //                     isActive
// // //                       ? "bg-red-600 text-white border-2 border-black"
// // //                       : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
// // //                   }`}
// // //                 onClick={() => {
// // //                   if (!isDesktop) closeSidebar();
// // //                 }}
// // //               >
// // //                 <span className="mr-3">
// // //                   {item.icon}
// // //                 </span>
// // //                 <span>{item.text}</span>
// // //               </Link>
// // //             );
// // //           })}
// // //         </nav>

// // //         {/* Logo at the bottom */}
// // //         <div className="mt-10 flex justify-center">
// // // <Image
// // //   src="/logo.png"
// // //   alt="Logo"
// // //   width={100}
// // //   height={100}
// // //   className="rounded-lg"
// // // />


// // //         </div>
// // //       </aside>

// // //       {/* Overlay - only for mobile */}
// // //       {isOpen && !isDesktop && (
// // //         <div
// // //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// // //           onClick={closeSidebar}
// // //         />
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Sidebar;
// // "use client";

// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import { Users, Menu, X, LogOut } from "lucide-react";
// // import { usePathname } from "next/navigation";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";

// // const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
// //   const [isDesktop, setIsDesktop] = useState(false);
// //   const pathname = usePathname();
// //   const router = useRouter();

// //   const navItems = [
// //     { href: "/members", icon: <Users size={20} />, text: "Members" },
// //   ];

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsDesktop(window.innerWidth >= 768);
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   useEffect(() => {
// //     if (isOpen && !isDesktop) {
// //       document.body.classList.add('sidebar-open');
// //     } else {
// //       document.body.classList.remove('sidebar-open');
// //     }

// //     return () => {
// //       document.body.classList.remove('sidebar-open');
// //     };
// //   }, [isOpen, isDesktop]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("authToken");
// //     sessionStorage.removeItem("checkedAuth");
// //     router.push("/login");
// //   };

// //   return (
// //     <>
// //       {/* Mobile toggle button - hidden on desktop */}
// //       <button
// //         onClick={toggleSidebar}
// //         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
// //       >
// //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// //       </button>

// //       {/* Sidebar - consistent styling for all screens */}
// //       <aside
// //         className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
// //           ${isOpen ? "left-0 w-64" : "-left-64"} 
// //           md:left-0 md:w-64
// //           top-0 pt-24 flex flex-col justify-between`}
// //       >
// //         <div>
// //           {/* Title */}
// //           <div className="mb-8">
// //             <h2 className="text-xl font-bold text-white text-center md:text-left">
// //               FLEX ZONE GYM
// //             </h2>
// //           </div>

// //           {/* Navigation */}
// //           <nav className="space-y-4">
// //             {navItems.map((item, index) => {
// //               const isActive = pathname === item.href;
// //               return (
// //                 <Link
// //                   key={index}
// //                   href={item.href}
// //                   className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
// //                     text-base font-semibold
// //                     ${
// //                       isActive
// //                         ? "bg-red-600 text-white border-2 border-black"
// //                         : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
// //                     }`}
// //                   onClick={() => {
// //                     if (!isDesktop) closeSidebar();
// //                   }}
// //                 >
// //                   <span className="mr-3">
// //                     {item.icon}
// //                   </span>
// //                   <span>{item.text}</span>
// //                 </Link>
// //               );
// //             })}
// //           </nav>
// //         </div>

// //         {/* Logo section - pushed to bottom with enhanced styling */}
// //         <div className="mt-auto mb-8 flex flex-col items-center">
// //           <div className="w-32 h-32 relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl p-1 shadow-lg border border-gray-600">
// //             <Image
// //               src="/logo.png"
// //               alt="Flex Zone Gym Logo"
// //               fill
// //               className="object-contain p-2"
// //               style={{
// //                 filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))"
// //               }}
// //             />
// //           </div>
// //           <p className="text-gray-400 text-xs mt-3 font-semibold tracking-wider uppercase">Premium Fitness</p>
// //         </div>
// //       </aside>

// //       {/* Overlay - only for mobile */}
// //       {isOpen && !isDesktop && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// //           onClick={closeSidebar}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Sidebar;
// // "use client";

// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import { Users, Menu, X, LogOut } from "lucide-react";
// // import { usePathname } from "next/navigation";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";

// // const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
// //   const [isDesktop, setIsDesktop] = useState(false);
// //   const pathname = usePathname();
// //   const router = useRouter();

// //   const navItems = [
// //     { href: "/members", icon: <Users size={20} />, text: "Members" },
// //   ];

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsDesktop(window.innerWidth >= 768);
// //     };

// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   useEffect(() => {
// //     if (isOpen && !isDesktop) {
// //       document.body.classList.add('sidebar-open');
// //     } else {
// //       document.body.classList.remove('sidebar-open');
// //     }

// //     return () => {
// //       document.body.classList.remove('sidebar-open');
// //     };
// //   }, [isOpen, isDesktop]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("authToken");
// //     sessionStorage.removeItem("checkedAuth");
// //     router.push("/login");
// //   };

// //   return (
// //     <>
// //       {/* Mobile toggle button - hidden on desktop */}
// //       <button
// //         onClick={toggleSidebar}
// //         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
// //       >
// //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// //       </button>

// //       {/* Sidebar - consistent styling for all screens */}
// //       <aside
// //         className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
// //           ${isOpen ? "left-0 w-64" : "-left-64"} 
// //           md:left-0 md:w-64
// //           top-0 pt-24 flex flex-col justify-between`}
// //       >
// //         <div>
// //           {/* Title */}
// //           <div className="mb-8">
// //             <h2 className="text-xl font-bold text-white text-center md:text-left">
// //               FLEX ZONE GYM
// //             </h2>
// //           </div>

// //           {/* Navigation */}
// //           <nav className="space-y-4">
// //             {navItems.map((item, index) => {
// //               const isActive = pathname === item.href;
// //               return (
// //                 <Link
// //                   key={index}
// //                   href={item.href}
// //                   className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
// //                     text-base font-semibold
// //                     ${
// //                       isActive
// //                         ? "bg-red-600 text-white border-2 border-black"
// //                         : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
// //                     }`}
// //                   onClick={() => {
// //                     if (!isDesktop) closeSidebar();
// //                   }}
// //                 >
// //                   <span className="mr-3">
// //                     {item.icon}
// //                   </span>
// //                   <span>{item.text}</span>
// //                 </Link>
// //               );
// //             })}
// //           </nav>
// //         </div>

// //         {/* Logo section - wider box and logo */}
// //         {/* <div className="mt-auto mb-8 flex flex-col items-center"> */}
// //         <div className="mt-auto mb-0 flex flex-col items-center">
// //           {/* Increased the width to take up most of the sidebar width */}
// //           <div className="w-62 h-40 relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl p-1 shadow-lg border border-gray-600">
// //             <Image
// //               src="/logo.png"
// //               alt="Flex Zone Gym Logo"
// //               fill
// //               className="object-contain p-2"
// //               style={{
// //                 filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))"
// //               }}
// //             />
// //           </div>
// //           <p className="text-gray-400 text-sm mt-3 font-semibold tracking-wider uppercase">PREMIUM FITNESS</p>
// //         </div>
// //       </aside>

// //       {/* Overlay - only for mobile */}
// //       {isOpen && !isDesktop && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// //           onClick={closeSidebar}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Sidebar;
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Users, Menu, X, LogOut } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const navItems = [
//     { href: "/members", icon: <Users size={20} />, text: "Members" },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (isOpen && !isDesktop) {
//       document.body.classList.add('sidebar-open');
//     } else {
//       document.body.classList.remove('sidebar-open');
//     }

//     return () => {
//       document.body.classList.remove('sidebar-open');
//     };
//   }, [isOpen, isDesktop]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     localStorage.removeItem("authToken");
//     sessionStorage.removeItem("checkedAuth");
//     router.push("/login");
//   };

//   return (
//     <>
//       {/* Mobile toggle button - hidden on desktop */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar - consistent styling for all screens */}
//       <aside
//         className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
//           ${isOpen ? "left-0 w-64" : "-left-64"} 
//           md:left-0 md:w-64
//           top-0 pt-24 flex flex-col justify-between`}
//       >
//         <div>
//           {/* Title */}
//           <div className="mb-8">
//             <h2 className="text-xl font-bold text-white text-center md:text-left">
//               FLEX ZONE GYM
//             </h2>
//           </div>

//           {/* Navigation */}
//           <nav className="space-y-4">
//             {navItems.map((item, index) => {
//               const isActive = pathname === item.href;
//               return (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
//                     text-base font-semibold
//                     ${
//                       isActive
//                         ? "bg-red-600 text-white border-2 border-black"
//                         : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
//                     }`}
//                   onClick={() => {
//                     if (!isDesktop) closeSidebar();
//                   }}
//                 >
//                   <span className="mr-3">
//                     {item.icon}
//                   </span>
//                   <span>{item.text}</span>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Logo section - without the box */}
//         <div className="mt-auto mb-0 flex flex-col items-center">
//           <div className="w-62 h-40 relative">
//             <Image
//               src="/logo.png"
//               alt="Flex Zone Gym Logo"
//               fill
//               className="object-contain"
//               style={{
//                 filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))"
//               }}
//             />
//           </div>
//           <p className="text-gray-400 text-sm mt-3 font-semibold tracking-wider uppercase">PREMIUM FITNESS</p>
//         </div>
//       </aside>

//       {/* Overlay - only for mobile */}
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
import { Users, Menu, X, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/members", icon: <Users size={20} />, text: "Members" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }

    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen, isDesktop]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("checkedAuth");
    router.push("/login");
  };

  return (
    <>
      {/* Mobile toggle button - hidden on desktop */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 bg-gray-900 p-2 rounded-full text-white shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - consistent styling for all screens */}
      <aside
        className={`fixed bg-gray-800 p-4 sm:p-6 h-screen transition-all duration-300 z-30 overflow-y-auto shadow-lg
          ${isOpen ? "left-0 w-64" : "-left-64"} 
          md:left-0 md:w-64
          top-0 pt-24 flex flex-col justify-between`}
      >
        <div>
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white text-center md:text-left">
              FLEX ZONE GYM
            </h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg w-full transition-all duration-200
                    text-base font-semibold
                    ${
                      isActive
                        ? "bg-red-600 text-white border-2 border-black"
                        : "text-gray-300 hover:bg-red-600 hover:text-white hover:border-2 hover:border-black"
                    }`}
                  onClick={() => {
                    if (!isDesktop) closeSidebar();
                  }}
                >
                  <span className="mr-3">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logo section - without the box */}
        <div className="mt-auto mb-0 flex flex-col items-center">
          {/* Added new image above the logo */}
          <div className="relative mb-4 px-4 py-2 bg-white rounded-full shadow-md w-fit mx-auto">
  <div className="relative w-43 h-10">
    <Image
      src="/app.png"
      alt="App Image"
      fill
      className="object-contain"
    />
  </div>
</div>

          
          <div className="w-62 h-40 relative">
            <Image
              src="/logo.png"
              alt="Flex Zone Gym Logo"
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))"
              }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-3 font-semibold tracking-wider uppercase">PREMIUM FITNESS</p>
        </div>
      </aside>

      {/* Overlay - only for mobile */}
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