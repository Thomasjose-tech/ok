// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Navbar
//         onMenuClick={toggleSidebar}
//         onLogout={() => console.log("Logging out...")}
//         onRegister={() => console.log("Registering new member...")}
//       />

//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

//         {/* Main Content */}
//         <main className="flex-1 p-4 bg-gray-900 mt-16 ml-64"> {/* Add mt-16 and ml-64 for spacing */}
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Navbar
//         onMenuClick={toggleSidebar}
//         onLogout={() => console.log("Logging out...")}
//         onRegister={() => console.log("Registering new member...")}
//       />

//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

//         {/* Main Content - Adjusted margin-top and margin-left */}
//         <main className="flex-1 p-4 bg-gray-900 mt-16 ml-0 md:ml-64"> 
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Navbar
//         onMenuClick={toggleSidebar}
//         onLogout={() => console.log("Logging out...")}
//         onRegister={() => console.log("Registering new member...")}
//       />
      
//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        
//         {/* Main Content - Increased margin-top to account for taller navbar */}
//         <main className="flex-1 p-4 bg-gray-900 mt-24 ml-0 md:ml-64">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar
        onMenuClick={toggleSidebar}
        onLogout={() => console.log("Logging out...")}
        onRegister={() => console.log("Registering new member...")}
      />
      
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        
        {/* Main Content - Increased margin-top to account for taller navbar */}
        <main className="flex-1 p-4 bg-gray-900 mt-24 ml-0 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}