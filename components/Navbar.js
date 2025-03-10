// const Navbar = ({ onMenuClick }) => {
//     return (
//       <div className="bg-gray-900 text-white p-4 fixed w-full z-50">
//         <div className="flex justify-between items-center flex-wrap">
//           <div className="flex items-center space-x-4">
//             {/* Hamburger Menu for Mobile */}
//             <button
//               onClick={onMenuClick}
//               className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
  
//             <h1 className="text-xl font-bold whitespace-nowrap">
//               Welcome back, admin!
//             </h1>
//           </div>
  
//           {/* Member Registration Button - Aligned to the left */}
//           <div className="absolute top-4 left-200">
//             <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded whitespace-nowrap">
//               Member Registration
//             </button>
//           </div>
  
//           {/* Logout Button - Positioned at the top-right */}
//           <div className="absolute top-4 left-280">
//             <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded whitespace-nowrap">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Navbar;
// components/Navbar.js
// "use client";

// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister, profileImage, onImageUpload, onDeleteImage }) => {
//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full z-50">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           {/* Hamburger Menu for Mobile */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Admin Photo */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Admin Profile"
//                   className="w-10 h-10 rounded-full border border-gray-300"
//                 />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={onImageUpload}
//               />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={onDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-xl font-bold">Welcome back, admin!</h1>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex items-center space-x-4 overflow-x-auto">
//           <button
//             onClick={onRegister}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap flex items-center"
//           >
//             <UserPlus className="mr-2" size={20} /> Member Registration
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded whitespace-nowrap flex items-center"
//           >
//             <LogOut className="mr-2" size={16} /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState, useEffect } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);

//   // Handle screen width detection
//   useEffect(() => {
//     const handleResize = () => {
//       setIsVisible(window.innerWidth >= 519); // Show navbar for width ≥ 519px
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   if (!isVisible) return null; // Hide navbar if screen width < 519px

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="relative flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           {/* Hamburger Menu for Mobile */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Admin Profile"
//                   className="w-10 h-10 rounded-full border border-gray-300"
//                 />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-xl font-bold">Welcome back, admin!</h1>
//         </div>

//         {/* Buttons Section - Now Positioned Absolutely */}
//         <div className="absolute top-4 left-200">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded whitespace-nowrap flex items-center"
//           >
//             <UserPlus className="mr-2" size={20} /> Member Registration
//           </button>
//         </div>

//         <div className="absolute top-4 left-280">
//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded whitespace-nowrap flex items-center"
//           >
//             <LogOut className="mr-2" size={16} /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState, useEffect } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-wrap items-center justify-between">
//         {/* Left Section (Menu & Profile) */}
//         <div className="flex items-center gap-3">
//           {/* Hamburger Menu for Mobile */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Admin Profile"
//                   className="w-10 h-10 rounded-full border border-gray-300"
//                 />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded flex items-center"
//           >
//             <UserPlus className="mr-2" size={20} /> Member Registration
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center"
//           >
//             <LogOut className="mr-2" size={16} /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-wrap items-center justify-between w-full gap-4 overflow-x-auto">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button onClick={handleDeleteImage} className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex flex-wrap items-center gap-2 sm:gap-4">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5  rounded flex items-center"
//           >
//             <UserPlus className="mr-2" size={20} /> Member Registration
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center"
//           >
//             <LogOut className="mr-2" size={16} /> Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-wrap items-center justify-between w-full gap-4 overflow-x-auto">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button onClick={handleDeleteImage} className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex flex-wrap items-center gap-2 sm:gap-4">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base"
//           >
//             <UserPlus className="mr-2" size={20} /> 
//             <span className="hidden sm:inline">Member Registration</span>
//             <span className="sm:hidden">Register</span>
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base"
//           >
//             <LogOut className="mr-2" size={16} /> 
//             <span className="hidden sm:inline">Logout</span>
//             <span className="sm:hidden">Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-wrap items-center justify-between w-full gap-4 overflow-x-auto">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button onClick={handleDeleteImage} className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

// {/* Right Section (Buttons) */}
// <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
//   <button
//     onClick={onRegister}
//     className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap"
//   >
//     <UserPlus className="mr-2" size={20} /> 
//     <span className="inline sm:hidden">Register</span>
//     <span className="hidden sm:inline">Member Registration</span>
//   </button>

//   <button
//     onClick={onLogout}
//     className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap"
//   >
//     <LogOut className="mr-2" size={16} /> 
//     <span>Logout</span>
//   </button>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-wrap items-center justify-between w-full gap-4 overflow-visible">
//         {/* Left Section */}
//         <div className="flex items-center gap-3">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap"
//           >
//             <UserPlus className="mr-2" size={20} />
//             <span className="inline sm:hidden">Register</span>
//             <span className="hidden sm:inline">Member Registration</span>
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap"
//           >
//             <LogOut className="mr-2" size={16} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";

// const Navbar = ({ onMenuClick, onLogout, onRegister }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50"> {/* z-50 ensures navbar is above sidebar */}
//       <div className="flex flex-nowrap items-center justify-between w-full gap-4 overflow-visible">
//         {/* Left Section */}
//         <div className="flex items-center gap-3 shrink-0">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex items-center gap-2 sm:gap-4 flex-nowrap shrink-0">
//           <button
//             onClick={onRegister}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0"
//           >
//             <UserPlus className="mr-2" size={20} />
//             <span className="inline sm:hidden">Register</span>
//             <span className="hidden sm:inline">Member Registration</span>
//           </button>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0"
//           >
//             <LogOut className="mr-2" size={16} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";
// import Link from "next/link";

// const Navbar = ({ onMenuClick, onLogout }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
//       <div className="flex flex-nowrap items-center justify-between w-full gap-4 overflow-visible">
//         {/* Left Section */}
//         <div className="flex items-center gap-3 shrink-0">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex items-center gap-2 sm:gap-4 flex-nowrap shrink-0">
//           <Link href="/add-member">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0">
//               <UserPlus className="mr-2" size={20} />
//               <span className="inline sm:hidden">Register</span>
//               <span className="hidden sm:inline">Member Registration</span>
//             </button>
//           </Link>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0"
//           >
//             <LogOut className="mr-2" size={16} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// "use client";
// import { useState } from "react";
// import { User, LogOut, UserPlus, Trash2 } from "lucide-react";
// import Link from "next/link";

// const Navbar = ({ onMenuClick, onLogout }) => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = () => {
//     setProfileImage(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white p-4 pb-8 fixed w-full top-0 z-50 h-24">
//       <div className="flex flex-nowrap items-center justify-between w-full gap-4 overflow-visible">
//         {/* Left Section */}
//         <div className="flex items-center gap-3 shrink-0">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={onMenuClick}
//             className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>

//           {/* Profile Image */}
//           <div className="relative group">
//             <label className="cursor-pointer group-hover:ring-2 group-hover:ring-red-600 rounded-full">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                   <User className="text-white" size={20} />
//                 </div>
//               )}
//               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
//             </label>
//             {profileImage && (
//               <button
//                 onClick={handleDeleteImage}
//                 className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Trash2 size={16} className="text-white" />
//               </button>
//             )}
//           </div>

//           <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
//         </div>

//         {/* Right Section (Buttons) */}
//         <div className="flex items-center gap-2 sm:gap-4 flex-nowrap shrink-0">
//           <Link href="/add-member">
//             <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0">
//               <UserPlus className="mr-2" size={20} />
//               <span className="inline sm:hidden">Register</span>
//               <span className="hidden sm:inline">Member Registration</span>
//             </button>
//           </Link>

//           <button
//             onClick={onLogout}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0"
//           >
//             <LogOut className="mr-2" size={16} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import { User, LogOut, UserPlus, Trash2 } from "lucide-react";
import Link from "next/link";

const Navbar = ({ onMenuClick, onLogout }) => {
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <div className="bg-gray-900 text-white p-4 pb-8 fixed w-full top-0 z-50 h-24">
      <div className="flex flex-nowrap items-center justify-between w-full gap-4 overflow-visible">
        {/* Left Section */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Profile Image */}
          <div className="relative group">
            <label className="cursor-pointer block w-10 h-10 rounded-full transition-all duration-200 hover:ring-2 hover:ring-red-500">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-sm">
                  <User className="text-white" size={20} />
                </div>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
            {profileImage && (
              <button
                onClick={handleDeleteImage}
                className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} className="text-white" />
              </button>
            )}
          </div>

          <h1 className="text-lg font-bold whitespace-nowrap">Welcome back, Admin!</h1>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex items-center gap-2 sm:gap-4 flex-nowrap shrink-0">
          <Link href="/add-member">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0">
              <UserPlus className="mr-2" size={20} />
              <span className="inline sm:hidden">Register</span>
              <span className="hidden sm:inline">Member Registration</span>
            </button>
          </Link>

          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded flex items-center text-sm sm:text-base whitespace-nowrap flex-grow-0 shrink-0"
          >
            <LogOut className="mr-2" size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;