// // // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // // // // // const AttendanceHistoryComponent = () => {
// // // // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // // // //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// // // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
  
// // // // // // // // // // // // // // //   // Filter states
// // // // // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // // // // //     status: "",
// // // // // // // // // // // // // // //     attendanceType: "",
// // // // // // // // // // // // // // //     dateRange: {
// // // // // // // // // // // // // // //       start: "",
// // // // // // // // // // // // // // //       end: ""
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     hoursRange: {
// // // // // // // // // // // // // // //       min: "",
// // // // // // // // // // // // // // //       max: ""
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     // Mock data for frontend development
// // // // // // // // // // // // // // //     const mockAttendance = [
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 1,
// // // // // // // // // // // // // // //         memberName: "John Doe",
// // // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // // //         hoursLogged: 8.5,
// // // // // // // // // // // // // // //         trackingId: "ATT87654321",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-01",
// // // // // // // // // // // // // // //         checkInTime: "09:00 AM",
// // // // // // // // // // // // // // //         checkOutTime: "05:30 PM",
// // // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 2,
// // // // // // // // // // // // // // //         memberName: "Jane Smith",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-05",
// // // // // // // // // // // // // // //         checkInTime: "08:45 AM",
// // // // // // // // // // // // // // //         checkOutTime: "04:30 PM",
// // // // // // // // // // // // // // //         trackingId: "ATT98765432",
// // // // // // // // // // // // // // //         hoursLogged: 7.75,
// // // // // // // // // // // // // // //         attendanceType: "Office",
// // // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 3,
// // // // // // // // // // // // // // //         memberName: "Robert Johnson",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-10",
// // // // // // // // // // // // // // //         checkInTime: "10:15 AM",
// // // // // // // // // // // // // // //         checkOutTime: "06:30 PM",
// // // // // // // // // // // // // // //         trackingId: "ATT12345678",
// // // // // // // // // // // // // // //         hoursLogged: 8.25,
// // // // // // // // // // // // // // //         attendanceType: "Hybrid",
// // // // // // // // // // // // // // //         status: "Late",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 4,
// // // // // // // // // // // // // // //         memberName: "Emily Davis",
// // // // // // // // // // // // // // //         checkInDate: "2025-02-28",
// // // // // // // // // // // // // // //         checkInTime: "",
// // // // // // // // // // // // // // //         checkOutTime: "",
// // // // // // // // // // // // // // //         trackingId: "ATT23456789",
// // // // // // // // // // // // // // //         hoursLogged: 0,
// // // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // // //         status: "Absent",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //     ];

// // // // // // // // // // // // // // //     // Simulate API fetch delay
// // // // // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // // // // //       setAttendanceRecords(mockAttendance);
// // // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // // //     }, 800);
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   // Get unique values for filter options
// // // // // // // // // // // // // // //   const getUniqueValues = (field) => {
// // // // // // // // // // // // // // //     return [...new Set(attendanceRecords.map(record => record[field]))];
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const uniqueAttendanceTypes = getUniqueValues("attendanceType");
// // // // // // // // // // // // // // //   const uniqueStatuses = getUniqueValues("status");

// // // // // // // // // // // // // // //   const filteredAttendance = attendanceRecords.filter(record => {
// // // // // // // // // // // // // // //     // Search filter
// // // // // // // // // // // // // // //     const matchesSearch = searchTerm === "" || 
// // // // // // // // // // // // // // //       record.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // // //       record.attendanceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // // //       record.status.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // // // // // // // // // // //     // Status filter
// // // // // // // // // // // // // // //     const matchesStatus = filters.status === "" || record.status === filters.status;
    
// // // // // // // // // // // // // // //     // Attendance Type filter
// // // // // // // // // // // // // // //     const matchesAttendanceType = filters.attendanceType === "" || record.attendanceType === filters.attendanceType;
    
// // // // // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // // // // //     const checkInDate = new Date(record.checkInDate);
// // // // // // // // // // // // // // //     const matchesDateStart = !filters.dateRange.start || checkInDate >= new Date(filters.dateRange.start);
// // // // // // // // // // // // // // //     const matchesDateEnd = !filters.dateRange.end || checkInDate <= new Date(filters.dateRange.end);
    
// // // // // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // // // // //     const matchesHoursMin = !filters.hoursRange.min || record.hoursLogged >= Number(filters.hoursRange.min);
// // // // // // // // // // // // // // //     const matchesHoursMax = !filters.hoursRange.max || record.hoursLogged <= Number(filters.hoursRange.max);
    
// // // // // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesAttendanceType && 
// // // // // // // // // // // // // // //            matchesDateStart && matchesDateEnd && 
// // // // // // // // // // // // // // //            matchesHoursMin && matchesHoursMax;
// // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // //   const navigateToDashboard = () => {
// // // // // // // // // // // // // // //     router.push("/dashboard"); // Replace with your dashboard route
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // // // // //     if (field.includes(".")) {
// // // // // // // // // // // // // // //       const [parent, child] = field.split(".");
// // // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // // //         [parent]: {
// // // // // // // // // // // // // // //           ...prev[parent],
// // // // // // // // // // // // // // //           [child]: value
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // // //         [field]: value
// // // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // // // // //     setFilters({
// // // // // // // // // // // // // // //       status: "",
// // // // // // // // // // // // // // //       attendanceType: "",
// // // // // // // // // // // // // // //       dateRange: {
// // // // // // // // // // // // // // //         start: "",
// // // // // // // // // // // // // // //         end: ""
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       hoursRange: {
// // // // // // // // // // // // // // //         min: "",
// // // // // // // // // // // // // // //         max: ""
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   if (isLoading)
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // // //             Loading attendance records...
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //   if (error)
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500">
// // // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Error: {error}</p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // // // // // // // //       <div className="w-full grid grid-cols-1">
// // // // // // // // // // // // // // //         {/* Enhanced Header with Back Button */}
// // // // // // // // // // // // // // //         <div className="flex items-center justify-between border-b border-gray-800 pb-6 px-8 pt-8">
// // // // // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // // //               onClick={navigateToDashboard}
// // // // // // // // // // // // // // //               className="mr-6 p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-6 w-6 text-red-500 group-hover:scale-110 transform transition-all duration-300"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={2}
// // // // // // // // // // // // // // //                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //             <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
// // // // // // // // // // // // // // //               Attendance History
// // // // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           <button 
// // // // // // // // // // // // // // //             className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // // // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <span className="flex items-center">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={1.5}
// // // // // // // // // // // // // // //                   d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Premium Search Bar */}
// // // // // // // // // // // // // // //         <div className="w-full px-8 pt-10">
// // // // // // // // // // // // // // //           <div
// // // // // // // // // // // // // // //             className={`relative transition-all duration-500 ${
// // // // // // // // // // // // // // //               searchFocused ? "transform scale-105" : ""
// // // // // // // // // // // // // // //             }`}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-6">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className={`h-5 w-5 transition-all duration-300 ${
// // // // // // // // // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //                 strokeWidth={1.5}
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // // //               placeholder="Search by member, work type or status"
// // // // // // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
// // // // // // // // // // // // // // //                 searchFocused
// // // // // // // // // // // // // // //                   ? "border-red-500 shadow-lg shadow-red-500/20"
// // // // // // // // // // // // // // //                   : "border-gray-700"
// // // // // // // // // // // // // // //               } text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg`}
// // // // // // // // // // // // // // //               value={searchTerm}
// // // // // // // // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Filter Modal */}
// // // // // // // // // // // // // // //         {showFilterModal && (
// // // // // // // // // // // // // // //           <div className="fixed inset-0 z-10 flex items-center justify-center">
// // // // // // // // // // // // // // //             <div 
// // // // // // // // // // // // // // //               className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
// // // // // // // // // // // // // // //               onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //             ></div>
            
// // // // // // // // // // // // // // //             <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/20 w-full max-w-2xl overflow-hidden animate-fade-in transform transition-transform duration-300 scale-100">
// // // // // // // // // // // // // // //               <div className="p-6 border-b border-gray-700 flex justify-between items-center">
// // // // // // // // // // // // // // //                 <h3 className="text-xl font-medium text-white tracking-wide flex items-center">
// // // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg" 
// // // // // // // // // // // // // // //                     className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // // //                     viewBox="0 0 24 24" 
// // // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // // //                       d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // // //                   Advanced Filters
// // // // // // // // // // // // // // //                 </h3>
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="text-gray-400 hover:text-white"
// // // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                     className="h-6 w-6"
// // // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // // //                       d="M6 18L18 6M6 6l12 12"
// // // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // // //               <div className="p-6 space-y-6">
// // // // // // // // // // // // // // //                 {/* Status Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2">Attendance Status</label>
// // // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                     value={filters.status}
// // // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <option value="">All Statuses</option>
// // // // // // // // // // // // // // //                     {uniqueStatuses.map(status => (
// // // // // // // // // // // // // // //                       <option key={status} value={status}>{status}</option>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Attendance Type Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2">Work Type</label>
// // // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                     value={filters.attendanceType}
// // // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("attendanceType", e.target.value)}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <option value="">All Types</option>
// // // // // // // // // // // // // // //                     {uniqueAttendanceTypes.map(type => (
// // // // // // // // // // // // // // //                       <option key={type} value={type}>{type}</option>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Date Range Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2">Attendance Date Range</label>
// // // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1">From</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                         value={filters.dateRange.start}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.start", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1">To</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                         value={filters.dateRange.end}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.end", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Hours Range Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-white-400 mb-2">Hours Logged Range</label>
// // // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1">Min (hrs)</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // // //                         placeholder="0.0"
// // // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                         value={filters.hoursRange.min}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.min", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1">Max (hrs)</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // // //                         placeholder="24.0"
// // // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // // // // // // // // //                         value={filters.hoursRange.max}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.max", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // // //               <div className="px-6 py-4 border-t border-gray-700 flex justify-between">
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="text-gray-300 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear Filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Apply Filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         )}

// // // // // // // // // // // // // // //         {/* Luxury Attendance Table */}
// // // // // // // // // // // // // // //         <div className="w-full px-8 pt-10 pb-12">
// // // // // // // // // // // // // // //           {/* Summary of active filters */}
// // // // // // // // // // // // // // //           {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //             <div className="mb-6 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
// // // // // // // // // // // // // // //               <div className="flex flex-wrap items-center gap-2">
// // // // // // // // // // // // // // //                 <span className="text-gray-400 text-sm mr-2">Active filters:</span>
                
// // // // // // // // // // // // // // //                 {filters.status && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
// // // // // // // // // // // // // // //                     Status: {filters.status}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500"
// // // // // // // // // // // // // // //                       onClick={() => handleFilterChange("status", "")}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {filters.attendanceType && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
// // // // // // // // // // // // // // //                     Type: {filters.attendanceType}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500"
// // // // // // // // // // // // // // //                       onClick={() => handleFilterChange("attendanceType", "")}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {(filters.dateRange.start || filters.dateRange.end) && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
// // // // // // // // // // // // // // //                     Date: {filters.dateRange.start ? new Date(filters.dateRange.start).toLocaleDateString() : "Any"} 
// // // // // // // // // // // // // // //                     {" "}to{" "} 
// // // // // // // // // // // // // // //                     {filters.dateRange.end ? new Date(filters.dateRange.end).toLocaleDateString() : "Any"}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500"
// // // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // // //                         handleFilterChange("dateRange.start", "");
// // // // // // // // // // // // // // //                         handleFilterChange("dateRange.end", "");
// // // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {(filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
// // // // // // // // // // // // // // //                     Hours: {filters.hoursRange.min || "0"} to {filters.hoursRange.max || "24"}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500"
// // // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // // //                         handleFilterChange("hoursRange.min", "");
// // // // // // // // // // // // // // //                         handleFilterChange("hoursRange.max", "");
// // // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="ml-auto text-red-400 text-xs hover:text-red-300 transition-colors duration-300 underline"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear all filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           )}
          
// // // // // // // // // // // // // // //           {filteredAttendance.length === 0 ? (
// // // // // // // // // // // // // // //             <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-20 w-20 mb-6 text-gray-600"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={1}
// // // // // // // // // // // // // // //                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //               <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // // //                 No attendance records found.
// // // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // // //               {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-300"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear filters and try again
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // // // // // //                 <table className="w-full divide-y divide-gray-800">
// // // // // // // // // // // // // // //                   <thead>
// // // // // // // // // // // // // // //                     <tr className="bg-gray-900/50">
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         ID
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Photo
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Member
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Work Type
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Hours
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Tracking ID
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Date
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Time In/Out
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // // // //                         Status
// // // // // // // // // // // // // // //                       </th>
// // // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // // //                   </thead>
// // // // // // // // // // // // // // //                   <tbody className="divide-y divide-gray-800">
// // // // // // // // // // // // // // //                     {filteredAttendance.map((record, index) => (
// // // // // // // // // // // // // // //                       <tr
// // // // // // // // // // // // // // //                         key={record.id}
// // // // // // // // // // // // // // //                         className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light">
// // // // // // // // // // // // // // //                           {index + 1}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // // //                           <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center group-hover:scale-110 transform">
// // // // // // // // // // // // // // //                             <svg
// // // // // // // // // // // // // // //                               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                               className="h-5 w-5"
// // // // // // // // // // // // // // //                               fill="none"
// // // // // // // // // // // // // // //                               viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                               stroke="currentColor"
// // // // // // // // // // // // // // //                             >
// // // // // // // // // // // // // // //                               <path
// // // // // // // // // // // // // // //                                 strokeLinecap="round"
// // // // // // // // // // // // // // //                                 strokeLinejoin="round"
// // // // // // // // // // // // // // //                                 strokeWidth={1.5}
// // // // // // // // // // // // // // //                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// // // // // // // // // // // // // // //                               />
// // // // // // // // // // // // // // //                             </svg>
// // // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white">
// // // // // // // // // // // // // // //                           {record.memberName}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // // // //                           {record.attendanceType}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white">
// // // // // // // // // // // // // // //   <span className="px-4 py-1 rounded-lg border border-gray-700">
// // // // // // // // // // // // // // //     {record.hoursLogged.toFixed(1)} hrs
// // // // // // // // // // // // // // //   </span>
// // // // // // // // // // // // // // // </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-400">
// // // // // // // // // // // // // // //                           {record.trackingId}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // // // //                           {new Date(record.checkInDate).toLocaleDateString()}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // // // //                           {record.checkInTime ? `${record.checkInTime} - ${record.checkOutTime}` : "N/A"}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // // //                           <span
// // // // // // // // // // // // // // //                             className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
// // // // // // // // // // // // // // //                               record.status === "Present"
// // // // // // // // // // // // // // //                                 ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // // // // // //                                 : record.status === "Late"
// // // // // // // // // // // // // // //                                 ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // // // // //                                 : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // // // // //                             } transition-all duration-300 backdrop-blur-sm`}
// // // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // // //                             {record.status}
// // // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </tbody>
// // // // // // // // // // // // // // //                 </table>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default AttendanceHistoryComponent;
// // // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // // // // // const AttendanceHistoryComponent = () => {
// // // // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // // // //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// // // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);

// // // // // // // // // // // // // // //   // Filter states
// // // // // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // // // // //     status: "",
// // // // // // // // // // // // // // //     attendanceType: "",
// // // // // // // // // // // // // // //     dateRange: {
// // // // // // // // // // // // // // //       start: "",
// // // // // // // // // // // // // // //       end: ""
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     hoursRange: {
// // // // // // // // // // // // // // //       min: "",
// // // // // // // // // // // // // // //       max: ""
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     // Mock data for frontend development
// // // // // // // // // // // // // // //     const mockAttendance = [
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 1,
// // // // // // // // // // // // // // //         memberName: "John Doe",
// // // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // // //         hoursLogged: 8.5,
// // // // // // // // // // // // // // //         trackingId: "ATT87654321",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-01",
// // // // // // // // // // // // // // //         checkInTime: "09:00 AM",
// // // // // // // // // // // // // // //         checkOutTime: "05:30 PM",
// // // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 2,
// // // // // // // // // // // // // // //         memberName: "Jane Smith",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-05",
// // // // // // // // // // // // // // //         checkInTime: "08:45 AM",
// // // // // // // // // // // // // // //         checkOutTime: "04:30 PM",
// // // // // // // // // // // // // // //         trackingId: "ATT98765432",
// // // // // // // // // // // // // // //         hoursLogged: 7.75,
// // // // // // // // // // // // // // //         attendanceType: "Office",
// // // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 3,
// // // // // // // // // // // // // // //         memberName: "Robert Johnson",
// // // // // // // // // // // // // // //         checkInDate: "2025-03-10",
// // // // // // // // // // // // // // //         checkInTime: "10:15 AM",
// // // // // // // // // // // // // // //         checkOutTime: "06:30 PM",
// // // // // // // // // // // // // // //         trackingId: "ATT12345678",
// // // // // // // // // // // // // // //         hoursLogged: 8.25,
// // // // // // // // // // // // // // //         attendanceType: "Hybrid",
// // // // // // // // // // // // // // //         status: "Late",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // //         id: 4,
// // // // // // // // // // // // // // //         memberName: "Emily Davis",
// // // // // // // // // // // // // // //         checkInDate: "2025-02-28",
// // // // // // // // // // // // // // //         checkInTime: "",
// // // // // // // // // // // // // // //         checkOutTime: "",
// // // // // // // // // // // // // // //         trackingId: "ATT23456789",
// // // // // // // // // // // // // // //         hoursLogged: 0,
// // // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // // //         status: "Absent",
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //     ];

// // // // // // // // // // // // // // //     // Simulate API fetch delay
// // // // // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // // // // //       setAttendanceRecords(mockAttendance);
// // // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // // //     }, 800);
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   // Get unique values for filter options
// // // // // // // // // // // // // // //   const getUniqueValues = (field) => {
// // // // // // // // // // // // // // //     return [...new Set(attendanceRecords.map(record => record[field]))];
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const uniqueAttendanceTypes = getUniqueValues("attendanceType");
// // // // // // // // // // // // // // //   const uniqueStatuses = getUniqueValues("status");

// // // // // // // // // // // // // // //   const filteredAttendance = attendanceRecords.filter(record => {
// // // // // // // // // // // // // // //     // Search filter
// // // // // // // // // // // // // // //     const matchesSearch = searchTerm === "" || 
// // // // // // // // // // // // // // //       record.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // // //       record.attendanceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // // //       record.status.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // // // // // // // // // // //     // Status filter
// // // // // // // // // // // // // // //     const matchesStatus = filters.status === "" || record.status === filters.status;
    
// // // // // // // // // // // // // // //     // Attendance Type filter
// // // // // // // // // // // // // // //     const matchesAttendanceType = filters.attendanceType === "" || record.attendanceType === filters.attendanceType;
    
// // // // // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // // // // //     const checkInDate = new Date(record.checkInDate);
// // // // // // // // // // // // // // //     const matchesDateStart = !filters.dateRange.start || checkInDate >= new Date(filters.dateRange.start);
// // // // // // // // // // // // // // //     const matchesDateEnd = !filters.dateRange.end || checkInDate <= new Date(filters.dateRange.end);
    
// // // // // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // // // // //     const matchesHoursMin = !filters.hoursRange.min || record.hoursLogged >= Number(filters.hoursRange.min);
// // // // // // // // // // // // // // //     const matchesHoursMax = !filters.hoursRange.max || record.hoursLogged <= Number(filters.hoursRange.max);
    
// // // // // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesAttendanceType && 
// // // // // // // // // // // // // // //            matchesDateStart && matchesDateEnd && 
// // // // // // // // // // // // // // //            matchesHoursMin && matchesHoursMax;
// // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // //   const navigateToDashboard = () => {
// // // // // // // // // // // // // // //     router.push("/dashboard"); // Replace with your dashboard route
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // // // // //     if (field.includes(".")) {
// // // // // // // // // // // // // // //       const [parent, child] = field.split(".");
// // // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // // //         [parent]: {
// // // // // // // // // // // // // // //           ...prev[parent],
// // // // // // // // // // // // // // //           [child]: value
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // // //         [field]: value
// // // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // // // // //     setFilters({
// // // // // // // // // // // // // // //       status: "",
// // // // // // // // // // // // // // //       attendanceType: "",
// // // // // // // // // // // // // // //       dateRange: {
// // // // // // // // // // // // // // //         start: "",
// // // // // // // // // // // // // // //         end: ""
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       hoursRange: {
// // // // // // // // // // // // // // //         min: "",
// // // // // // // // // // // // // // //         max: ""
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   if (isLoading)
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white light-mode:bg-white light-mode:text-black">
// // // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // // //             Loading attendance records...
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //   if (error)
// // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500 light-mode:bg-white light-mode:text-red-600">
// // // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Error: {error}</p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full light-mode:bg-white light-mode:text-black">
// // // // // // // // // // // // // // //       <div className="w-full grid grid-cols-1">
// // // // // // // // // // // // // // //         {/* Enhanced Header with Back Button */}
// // // // // // // // // // // // // // //         <div className="flex items-center justify-between border-b border-gray-800 pb-6 px-8 pt-8 light-mode:border-gray-200">
// // // // // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // // //               onClick={navigateToDashboard}
// // // // // // // // // // // // // // //               className="mr-6 p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20 light-mode:bg-white light-mode:border-gray-300 light-mode:hover:border-red-500 light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-6 w-6 text-red-500 group-hover:scale-110 transform transition-all duration-300"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={2}
// // // // // // // // // // // // // // //                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // // //             <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 light-mode:from-black light-mode:to-gray-600">
// // // // // // // // // // // // // // //               Attendance History
// // // // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           <button 
// // // // // // // // // // // // // // //             className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 light-mode:bg-white light-mode:border-gray-300 light-mode:text-black light-mode:hover:border-red-500"
// // // // // // // // // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <span className="flex items-center">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={1.5}
// // // // // // // // // // // // // // //                   d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Premium Search Bar */}
// // // // // // // // // // // // // // //         <div className="w-full px-8 pt-10">
// // // // // // // // // // // // // // //           <div
// // // // // // // // // // // // // // //             className={`relative transition-all duration-500 ${
// // // // // // // // // // // // // // //               searchFocused ? "transform scale-105" : ""
// // // // // // // // // // // // // // //             }`}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-6">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className={`h-5 w-5 transition-all duration-300 ${
// // // // // // // // // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // // // // // // // // //                 } light-mode:text-gray-700`}
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //                 strokeWidth={1.5}
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // // //               placeholder="Search by member, work type or status"
// // // // // // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
// // // // // // // // // // // // // // //                 searchFocused
// // // // // // // // // // // // // // //                   ? "border-red-500 shadow-lg shadow-red-500/20"
// // // // // // // // // // // // // // //                   : "border-gray-700"
// // // // // // // // // // // // // // //               } text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg light-mode:bg-white light-mode:border-gray-300 light-mode:text-black`}
// // // // // // // // // // // // // // //               value={searchTerm}
// // // // // // // // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Filter Modal */}
// // // // // // // // // // // // // // //         {showFilterModal && (
// // // // // // // // // // // // // // //           <div className="fixed inset-0 z-10 flex items-center justify-center">
// // // // // // // // // // // // // // //             <div 
// // // // // // // // // // // // // // //               className="absolute inset-0 bg-black/80 backdrop-blur-sm light-mode:bg-black/50" 
// // // // // // // // // // // // // // //               onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //             ></div>
            
// // // // // // // // // // // // // // //             <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/20 w-full max-w-2xl overflow-hidden animate-fade-in transform transition-transform duration-300 scale-100 light-mode:bg-white light-mode:border-gray-300">
// // // // // // // // // // // // // // //               <div className="p-6 border-b border-gray-700 flex justify-between items-center light-mode:border-gray-200">
// // // // // // // // // // // // // // //                 <h3 className="text-xl font-medium text-white tracking-wide flex items-center light-mode:text-black">
// // // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg" 
// // // // // // // // // // // // // // //                     className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // // //                     viewBox="0 0 24 24" 
// // // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // // //                       d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // // //                   Advanced Filters
// // // // // // // // // // // // // // //                 </h3>
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="text-gray-400 hover:text-white light-mode:text-gray-600 light-mode:hover:text-black"
// // // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                     className="h-6 w-6"
// // // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // // //                       d="M6 18L18 6M6 6l12 12"
// // // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // // //               <div className="p-6 space-y-6">
// // // // // // // // // // // // // // //                 {/* Status Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Attendance Status</label>
// // // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                     value={filters.status}
// // // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <option value="">All Statuses</option>
// // // // // // // // // // // // // // //                     {uniqueStatuses.map(status => (
// // // // // // // // // // // // // // //                       <option key={status} value={status}>{status}</option>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Attendance Type Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Work Type</label>
// // // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                     value={filters.attendanceType}
// // // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("attendanceType", e.target.value)}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <option value="">All Types</option>
// // // // // // // // // // // // // // //                     {uniqueAttendanceTypes.map(type => (
// // // // // // // // // // // // // // //                       <option key={type} value={type}>{type}</option>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Date Range Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Attendance Date Range</label>
// // // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">From</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                         value={filters.dateRange.start}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.start", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">To</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                         value={filters.dateRange.end}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.end", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Hours Range Filter */}
// // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-white-400 mb-2 light-mode:text-gray-600">Hours Logged Range</label>
// // // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">Min (hrs)</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // // //                         placeholder="0.0"
// // // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                         value={filters.hoursRange.min}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.min", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">Max (hrs)</label>
// // // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // // //                         placeholder="24.0"
// // // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // // //                         value={filters.hoursRange.max}
// // // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.max", e.target.value)}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // // //               <div className="px-6 py-4 border-t border-gray-700 flex justify-between light-mode:border-gray-200">
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="text-gray-300 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 light-mode:text-gray-600 light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear Filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-red-500/20 light-mode:bg-red-500 light-mode:hover:bg-red-600"
// // // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Apply Filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         )}

// // // // // // // // // // // // // // //         {/* Luxury Attendance Table */}
// // // // // // // // // // // // // // //         <div className="w-full px-8 pt-10 pb-12">
// // // // // // // // // // // // // // //           {/* Summary of active filters */}
// // // // // // // // // // // // // // //           {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //             <div className="mb-6 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800 light-mode:bg-white light-mode:border-gray-200">
// // // // // // // // // // // // // // //               <div className="flex flex-wrap items-center gap-2">
// // // // // // // // // // // // // // //                 <span className="text-gray-400 text-sm mr-2 light-mode:text-gray-600">Active filters:</span>
                
// // // // // // // // // // // // // // //                 {filters.status && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // // //                     Status: {filters.status}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                       onClick={() => handleFilterChange("status", "")}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {filters.attendanceType && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // // //                     Type: {filters.attendanceType}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                       onClick={() => handleFilterChange("attendanceType", "")}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {(filters.dateRange.start || filters.dateRange.end) && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // // //                     Date: {filters.dateRange.start ? new Date(filters.dateRange.start).toLocaleDateString() : "Any"} 
// // // // // // // // // // // // // // //                     {" "}to{" "} 
// // // // // // // // // // // // // // //                     {filters.dateRange.end ? new Date(filters.dateRange.end).toLocaleDateString() : "Any"}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // // //                         handleFilterChange("dateRange.start", "");
// // // // // // // // // // // // // // //                         handleFilterChange("dateRange.end", "");
// // // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 {(filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // // //                     Hours: {filters.hoursRange.min || "0"} to {filters.hoursRange.max || "24"}
// // // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // // //                         handleFilterChange("hoursRange.min", "");
// // // // // // // // // // // // // // //                         handleFilterChange("hoursRange.max", "");
// // // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="ml-auto text-red-400 text-xs hover:text-red-300 transition-colors duration-300 underline light-mode:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear all filters
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           )}
          
// // // // // // // // // // // // // // //           {filteredAttendance.length === 0 ? (
// // // // // // // // // // // // // // //             <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 light-mode:bg-white light-mode:border-gray-200 light-mode:text-gray-600">
// // // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                 className="h-20 w-20 mb-6 text-gray-600 light-mode:text-gray-400"
// // // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // // //                   strokeWidth={1}
// // // // // // // // // // // // // // //                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // // //               <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // // //                 No attendance records found.
// // // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // // //               {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // // //                   className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-300 light-mode:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   Clear filters and try again
// // // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
// // // // // // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // // // // // //                 <table className="w-full divide-y divide-gray-800 light-mode:divide-gray-200">
// // // // // // // // // // // // // // //                   <thead>
// // // // // // // // // // // // // // //                     <tr className="bg-gray-900/50 light-mode:bg-gray-100">
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">ID</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Photo</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Member</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Work Type</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Hours</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Tracking ID</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Date</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Time In/Out</th>
// // // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Status</th>
// // // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // // //                   </thead>
// // // // // // // // // // // // // // //                   <tbody className="divide-y divide-gray-800 light-mode:divide-gray-200">
// // // // // // // // // // // // // // //                     {filteredAttendance.map((record, index) => (
// // // // // // // // // // // // // // //                       <tr
// // // // // // // // // // // // // // //                         key={record.id}
// // // // // // // // // // // // // // //                         className="hover:bg-gray-700/30 transition-colors duration-300 group light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light light-mode:text-gray-600">{index + 1}</td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // // //                           <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center group-hover:scale-110 transform light-mode:bg-white light-mode:border-red-500 light-mode:text-red-500">
// // // // // // // // // // // // // // //                             <svg
// // // // // // // // // // // // // // //                               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // // //                               className="h-5 w-5"
// // // // // // // // // // // // // // //                               fill="none"
// // // // // // // // // // // // // // //                               viewBox="0 0 24 24"
// // // // // // // // // // // // // // //                               stroke="currentColor"
// // // // // // // // // // // // // // //                             >
// // // // // // // // // // // // // // //                               <path
// // // // // // // // // // // // // // //                                 strokeLinecap="round"
// // // // // // // // // // // // // // //                                 strokeLinejoin="round"
// // // // // // // // // // // // // // //                                 strokeWidth={1.5}
// // // // // // // // // // // // // // //                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// // // // // // // // // // // // // // //                               />
// // // // // // // // // // // // // // //                             </svg>
// // // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white light-mode:text-black">{record.memberName}</td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300 light-mode:text-gray-600">{record.attendanceType}</td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white light-mode:text-black">
// // // // // // // // // // // // // // //                           <span className="px-4 py-1 rounded-lg border border-gray-700 light-mode:border-gray-300">
// // // // // // // // // // // // // // //                             {record.hoursLogged.toFixed(1)} hrs
// // // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-400 light-mode:text-gray-600">{record.trackingId}</td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300 light-mode:text-gray-600">
// // // // // // // // // // // // // // //                           {new Date(record.checkInDate).toLocaleDateString()}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300 light-mode:text-gray-600">
// // // // // // // // // // // // // // //                           {record.checkInTime ? `${record.checkInTime} - ${record.checkOutTime}` : "N/A"}
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // // //                           <span
// // // // // // // // // // // // // // //                             className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
// // // // // // // // // // // // // // //                               record.status === "Present"
// // // // // // // // // // // // // // //                                 ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // // // // // //                                 : record.status === "Late"
// // // // // // // // // // // // // // //                                 ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // // // // //                                 : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // // // // //                             } transition-all duration-300 backdrop-blur-sm light-mode:bg-opacity-10`}
// // // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // // //                             {record.status}
// // // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </tbody>
// // // // // // // // // // // // // // //                 </table>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default AttendanceHistoryComponent;
// // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // // // // const AttendanceHistoryComponent = () => {
// // // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // // //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);

// // // // // // // // // // // // // //   // Filter states
// // // // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // // // //     status: "",
// // // // // // // // // // // // // //     attendanceType: "",
// // // // // // // // // // // // // //     dateRange: {
// // // // // // // // // // // // // //       start: "",
// // // // // // // // // // // // // //       end: ""
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     hoursRange: {
// // // // // // // // // // // // // //       min: "",
// // // // // // // // // // // // // //       max: ""
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     // Mock data for frontend development
// // // // // // // // // // // // // //     const mockAttendance = [
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 1,
// // // // // // // // // // // // // //         memberName: "John Doe",
// // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // //         hoursLogged: 8.5,
// // // // // // // // // // // // // //         trackingId: "ATT87654321",
// // // // // // // // // // // // // //         checkInDate: "2025-03-01",
// // // // // // // // // // // // // //         checkInTime: "09:00 AM",
// // // // // // // // // // // // // //         checkOutTime: "05:30 PM",
// // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 2,
// // // // // // // // // // // // // //         memberName: "Jane Smith",
// // // // // // // // // // // // // //         checkInDate: "2025-03-05",
// // // // // // // // // // // // // //         checkInTime: "08:45 AM",
// // // // // // // // // // // // // //         checkOutTime: "04:30 PM",
// // // // // // // // // // // // // //         trackingId: "ATT98765432",
// // // // // // // // // // // // // //         hoursLogged: 7.75,
// // // // // // // // // // // // // //         attendanceType: "Office",
// // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 3,
// // // // // // // // // // // // // //         memberName: "Robert Johnson",
// // // // // // // // // // // // // //         checkInDate: "2025-03-10",
// // // // // // // // // // // // // //         checkInTime: "10:15 AM",
// // // // // // // // // // // // // //         checkOutTime: "06:30 PM",
// // // // // // // // // // // // // //         trackingId: "ATT12345678",
// // // // // // // // // // // // // //         hoursLogged: 8.25,
// // // // // // // // // // // // // //         attendanceType: "Hybrid",
// // // // // // // // // // // // // //         status: "Late",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 4,
// // // // // // // // // // // // // //         memberName: "Emily Davis",
// // // // // // // // // // // // // //         checkInDate: "2025-02-28",
// // // // // // // // // // // // // //         checkInTime: "",
// // // // // // // // // // // // // //         checkOutTime: "",
// // // // // // // // // // // // // //         trackingId: "ATT23456789",
// // // // // // // // // // // // // //         hoursLogged: 0,
// // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // //         status: "Absent",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //     ];

// // // // // // // // // // // // // //     // Simulate API fetch delay
// // // // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // // // //       setAttendanceRecords(mockAttendance);
// // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // //     }, 800);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   // Get unique values for filter options
// // // // // // // // // // // // // //   const getUniqueValues = (field) => {
// // // // // // // // // // // // // //     return [...new Set(attendanceRecords.map(record => record[field]))];
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const uniqueAttendanceTypes = getUniqueValues("attendanceType");
// // // // // // // // // // // // // //   const uniqueStatuses = getUniqueValues("status");

// // // // // // // // // // // // // //   const filteredAttendance = attendanceRecords.filter(record => {
// // // // // // // // // // // // // //     // Search filter
// // // // // // // // // // // // // //     const matchesSearch = searchTerm === "" || 
// // // // // // // // // // // // // //       record.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // //       record.attendanceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // // // // // // //       record.status.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // // // // // // // // // //     // Status filter
// // // // // // // // // // // // // //     const matchesStatus = filters.status === "" || record.status === filters.status;
    
// // // // // // // // // // // // // //     // Attendance Type filter
// // // // // // // // // // // // // //     const matchesAttendanceType = filters.attendanceType === "" || record.attendanceType === filters.attendanceType;
    
// // // // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // // // //     const checkInDate = new Date(record.checkInDate);
// // // // // // // // // // // // // //     const matchesDateStart = !filters.dateRange.start || checkInDate >= new Date(filters.dateRange.start);
// // // // // // // // // // // // // //     const matchesDateEnd = !filters.dateRange.end || checkInDate <= new Date(filters.dateRange.end);
    
// // // // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // // // //     const matchesHoursMin = !filters.hoursRange.min || record.hoursLogged >= Number(filters.hoursRange.min);
// // // // // // // // // // // // // //     const matchesHoursMax = !filters.hoursRange.max || record.hoursLogged <= Number(filters.hoursRange.max);
    
// // // // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesAttendanceType && 
// // // // // // // // // // // // // //            matchesDateStart && matchesDateEnd && 
// // // // // // // // // // // // // //            matchesHoursMin && matchesHoursMax;
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   const navigateToDashboard = () => {
// // // // // // // // // // // // // //     router.push("/dashboard"); // Replace with your dashboard route
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // // // //     if (field.includes(".")) {
// // // // // // // // // // // // // //       const [parent, child] = field.split(".");
// // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // //         [parent]: {
// // // // // // // // // // // // // //           ...prev[parent],
// // // // // // // // // // // // // //           [child]: value
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       setFilters(prev => ({
// // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // //         [field]: value
// // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // // // //     setFilters({
// // // // // // // // // // // // // //       status: "",
// // // // // // // // // // // // // //       attendanceType: "",
// // // // // // // // // // // // // //       dateRange: {
// // // // // // // // // // // // // //         start: "",
// // // // // // // // // // // // // //         end: ""
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       hoursRange: {
// // // // // // // // // // // // // //         min: "",
// // // // // // // // // // // // // //         max: ""
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   if (isLoading)
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white light-mode:bg-white light-mode:text-black">
// // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // //             Loading attendance records...
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //   if (error)
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500 light-mode:bg-white light-mode:text-red-600">
// // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Error: {error}</p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full light-mode:bg-white light-mode:text-black">
// // // // // // // // // // // // // //       <div className="w-full grid grid-cols-1">
// // // // // // // // // // // // // //         {/* Enhanced Header with Back Button */}
// // // // // // // // // // // // // //         <div className="flex items-center justify-between border-b border-gray-800 pb-6 px-8 pt-8 light-mode:border-gray-200">
// // // // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               onClick={navigateToDashboard}
// // // // // // // // // // // // // //               className="mr-6 p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20 light-mode:bg-white light-mode:border-gray-300 light-mode:hover:border-red-500 light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                 className="h-6 w-6 text-red-500 group-hover:scale-110 transform transition-all duration-300"
// // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // //                   strokeWidth={2}
// // // // // // // // // // // // // //                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
// // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //             <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 light-mode:from-black light-mode:to-gray-600">
// // // // // // // // // // // // // //               Attendance History
// // // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <button 
// // // // // // // // // // // // // //             className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 light-mode:bg-white light-mode:border-gray-300 light-mode:text-black light-mode:hover:border-red-500"
// // // // // // // // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <span className="flex items-center">
// // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                 className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // //                   strokeWidth={1.5}
// // // // // // // // // // // // // //                   d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         <div className="w-full px-8 pt-10">
// // // // // // // // // // // // // //   <div className={`relative transition-all duration-500 ${searchFocused ? "scale-105" : ""}`}>
// // // // // // // // // // // // // //     <span className="absolute inset-y-0 left-0 flex items-center pl-6">
// // // // // // // // // // // // // //       <svg
// // // // // // // // // // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //         className={`h-5 w-5 transition-all duration-300 ${
// // // // // // // // // // // // // //           searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // // // // // // // // // //         }`}
// // // // // // // // // // // // // //         fill="none"
// // // // // // // // // // // // // //         viewBox="0 0 24 24"
// // // // // // // // // // // // // //         stroke="currentColor"
// // // // // // // // // // // // // //         strokeWidth={1.5}
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // // // // // // // // // // // // //       </svg>
// // // // // // // // // // // // // //     </span>
// // // // // // // // // // // // // //     <input
// // // // // // // // // // // // // //       type="text"
// // // // // // // // // // // // // //       placeholder="Search by member, work type or status"
// // // // // // // // // // // // // //       className={`w-full bg-gray-800/50 backdrop-blur-sm border 
// // // // // // // // // // // // // //         border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black 
// // // // // // // // // // // // // //         dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // // // // // // // // // //         text-black dark:text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none
// // // // // // // // // // // // // //         transition-all duration-300 text-lg bg-white dark:bg-gray-800`}
// // // // // // // // // // // // // //       value={searchTerm}
// // // // // // // // // // // // // //       onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // //       onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // // // //       onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // // // //     />
// // // // // // // // // // // // // //   </div>
// // // // // // // // // // // // // // </div>


// // // // // // // // // // // // // //         {/* Filter Modal */}
// // // // // // // // // // // // // //         {showFilterModal && (
// // // // // // // // // // // // // //           <div className="fixed inset-0 z-10 flex items-center justify-center">
// // // // // // // // // // // // // //             <div 
// // // // // // // // // // // // // //               className="absolute inset-0 bg-black/80 backdrop-blur-sm light-mode:bg-black/50" 
// // // // // // // // // // // // // //               onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // //             ></div>
            
// // // // // // // // // // // // // //             <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/20 w-full max-w-2xl overflow-hidden animate-fade-in transform transition-transform duration-300 scale-100 light-mode:bg-white light-mode:border-gray-300">
// // // // // // // // // // // // // //               <div className="p-6 border-b border-gray-700 flex justify-between items-center light-mode:border-gray-200">
// // // // // // // // // // // // // //                 <h3 className="text-xl font-medium text-white tracking-wide flex items-center light-mode:text-black">
// // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg" 
// // // // // // // // // // // // // //                     className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // //                     viewBox="0 0 24 24" 
// // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // //                       d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // //                   Advanced Filters
// // // // // // // // // // // // // //                 </h3>
// // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // //                   className="text-gray-400 hover:text-white light-mode:text-gray-600 light-mode:hover:text-black"
// // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   <svg
// // // // // // // // // // // // // //                     xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                     className="h-6 w-6"
// // // // // // // // // // // // // //                     fill="none"
// // // // // // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     <path
// // // // // // // // // // // // // //                       strokeLinecap="round"
// // // // // // // // // // // // // //                       strokeLinejoin="round"
// // // // // // // // // // // // // //                       strokeWidth={1.5}
// // // // // // // // // // // // // //                       d="M6 18L18 6M6 6l12 12"
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </svg>
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // //               <div className="p-6 space-y-6">
// // // // // // // // // // // // // //                 {/* Status Filter */}
// // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Attendance Status</label>
// // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                     value={filters.status}
// // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     <option value="">All Statuses</option>
// // // // // // // // // // // // // //                     {uniqueStatuses.map(status => (
// // // // // // // // // // // // // //                       <option key={status} value={status}>{status}</option>
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // //                 {/* Attendance Type Filter */}
// // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Work Type</label>
// // // // // // // // // // // // // //                   <select 
// // // // // // // // // // // // // //                     className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                     value={filters.attendanceType}
// // // // // // // // // // // // // //                     onChange={(e) => handleFilterChange("attendanceType", e.target.value)}
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     <option value="">All Types</option>
// // // // // // // // // // // // // //                     {uniqueAttendanceTypes.map(type => (
// // // // // // // // // // // // // //                       <option key={type} value={type}>{type}</option>
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </select>
// // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // //                 {/* Date Range Filter */}
// // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-gray-400 mb-2 light-mode:text-gray-600">Attendance Date Range</label>
// // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">From</label>
// // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                         value={filters.dateRange.start}
// // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.start", e.target.value)}
// // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">To</label>
// // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // //                         type="date"
// // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                         value={filters.dateRange.end}
// // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("dateRange.end", e.target.value)}
// // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // //                 {/* Hours Range Filter */}
// // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // //                   <label className="block text-sm font-medium text-white-400 mb-2 light-mode:text-gray-600">Hours Logged Range</label>
// // // // // // // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">Min (hrs)</label>
// // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // //                         placeholder="0.0"
// // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                         value={filters.hoursRange.min}
// // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.min", e.target.value)}
// // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                     <div>
// // // // // // // // // // // // // //                       <label className="block text-xs text-gray-500 mb-1 light-mode:text-gray-600">Max (hrs)</label>
// // // // // // // // // // // // // //                       <input 
// // // // // // // // // // // // // //                         type="number"
// // // // // // // // // // // // // //                         placeholder="24.0"
// // // // // // // // // // // // // //                         min="0"
// // // // // // // // // // // // // //                         step="0.1"
// // // // // // // // // // // // // //                         className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent light-mode:bg-white light-mode:border-gray-300 light-mode:text-black"
// // // // // // // // // // // // // //                         value={filters.hoursRange.max}
// // // // // // // // // // // // // //                         onChange={(e) => handleFilterChange("hoursRange.max", e.target.value)}
// // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // // //               <div className="px-6 py-4 border-t border-gray-700 flex justify-between light-mode:border-gray-200">
// // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // //                   className="text-gray-300 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 light-mode:text-gray-600 light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Clear Filters
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // //                   className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-red-500/20 light-mode:bg-red-500 light-mode:hover:bg-red-600"
// // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Apply Filters
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         )}

// // // // // // // // // // // // // //         {/* Luxury Attendance Table */}
// // // // // // // // // // // // // //         <div className="w-full px-8 pt-10 pb-12">
// // // // // // // // // // // // // //           {/* Summary of active filters */}
// // // // // // // // // // // // // //           {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // //             <div className="mb-6 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800 light-mode:bg-white light-mode:border-gray-200">
// // // // // // // // // // // // // //               <div className="flex flex-wrap items-center gap-2">
// // // // // // // // // // // // // //                 <span className="text-gray-400 text-sm mr-2 light-mode:text-gray-600">Active filters:</span>
                
// // // // // // // // // // // // // //                 {filters.status && (
// // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // //                     Status: {filters.status}
// // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                       onClick={() => handleFilterChange("status", "")}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // //                 {filters.attendanceType && (
// // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // //                     Type: {filters.attendanceType}
// // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                       onClick={() => handleFilterChange("attendanceType", "")}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // //                 {(filters.dateRange.start || filters.dateRange.end) && (
// // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // //                     Date: {filters.dateRange.start ? new Date(filters.dateRange.start).toLocaleDateString() : "Any"} 
// // // // // // // // // // // // // //                     {" "}to{" "} 
// // // // // // // // // // // // // //                     {filters.dateRange.end ? new Date(filters.dateRange.end).toLocaleDateString() : "Any"}
// // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // //                         handleFilterChange("dateRange.start", "");
// // // // // // // // // // // // // //                         handleFilterChange("dateRange.end", "");
// // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // //                 {(filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // //                   <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center light-mode:bg-gray-100 light-mode:text-black">
// // // // // // // // // // // // // //                     Hours: {filters.hoursRange.min || "0"} to {filters.hoursRange.max || "24"}
// // // // // // // // // // // // // //                     <button 
// // // // // // // // // // // // // //                       className="ml-2 hover:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // //                         handleFilterChange("hoursRange.min", "");
// // // // // // // // // // // // // //                         handleFilterChange("hoursRange.max", "");
// // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // //                       </svg>
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   </span>
// // // // // // // // // // // // // //                 )}
                
// // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // //                   className="ml-auto text-red-400 text-xs hover:text-red-300 transition-colors duration-300 underline light-mode:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Clear all filters
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           )}
          
// // // // // // // // // // // // // //           {filteredAttendance.length === 0 ? (
// // // // // // // // // // // // // //             <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 light-mode:bg-white light-mode:border-gray-200 light-mode:text-gray-600">
// // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                 className="h-20 w-20 mb-6 text-gray-600 light-mode:text-gray-400"
// // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // //                   strokeWidth={1}
// // // // // // // // // // // // // //                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // //               <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // //                 No attendance records found.
// // // // // // // // // // // // // //               </p>
// // // // // // // // // // // // // //               {(filters.status || filters.attendanceType || filters.dateRange.start || filters.dateRange.end || filters.hoursRange.min || filters.hoursRange.max) && (
// // // // // // // // // // // // // //                 <button 
// // // // // // // // // // // // // //                   className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-300 light-mode:text-red-500 light-mode:hover:text-red-600"
// // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Clear filters and try again
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
// // // // // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // // // // //                 <table className="w-full divide-y divide-gray-800 light-mode:divide-gray-200">
// // // // // // // // // // // // // //                   <thead>
// // // // // // // // // // // // // //                     <tr className="bg-gray-900/50 light-mode:bg-gray-100">
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">ID</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Photo</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Member</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Hours</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Tracking ID</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Date</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Time In/Out</th>
// // // // // // // // // // // // // //                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider light-mode:text-gray-600">Status</th>
// // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // //                   </thead>
// // // // // // // // // // // // // //                   <tbody className="divide-y divide-gray-800 light-mode:divide-gray-200">
// // // // // // // // // // // // // //                     {filteredAttendance.map((record, index) => (
// // // // // // // // // // // // // //                       <tr
// // // // // // // // // // // // // //                         key={record.id}
// // // // // // // // // // // // // //                         className="hover:bg-gray-700/30 transition-colors duration-300 group light-mode:hover:bg-gray-100"
// // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light light-mode:text-gray-600">{index + 1}</td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // //                           <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center group-hover:scale-110 transform light-mode:bg-white light-mode:border-red-500 light-mode:text-red-500">
// // // // // // // // // // // // // //                             <svg
// // // // // // // // // // // // // //                               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                               className="h-5 w-5"
// // // // // // // // // // // // // //                               fill="none"
// // // // // // // // // // // // // //                               viewBox="0 0 24 24"
// // // // // // // // // // // // // //                               stroke="currentColor"
// // // // // // // // // // // // // //                             >
// // // // // // // // // // // // // //                               <path
// // // // // // // // // // // // // //                                 strokeLinecap="round"
// // // // // // // // // // // // // //                                 strokeLinejoin="round"
// // // // // // // // // // // // // //                                 strokeWidth={1.5}
// // // // // // // // // // // // // //                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
// // // // // // // // // // // // // //                               />
// // // // // // // // // // // // // //                             </svg>
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white light-mode:text-black">{record.memberName}</td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-medium text-white light-mode:text-black">
// // // // // // // // // // // // // //                           <span className="px-4 py-1 rounded-lg border border-gray-700 light-mode:border-gray-300">
// // // // // // // // // // // // // //                             {record.hoursLogged.toFixed(1)} hrs
// // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-400 light-mode:text-gray-600">{record.trackingId}</td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300 light-mode:text-gray-600">
// // // // // // // // // // // // // //                           {new Date(record.checkInDate).toLocaleDateString()}
// // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm font-light text-gray-300 light-mode:text-gray-600">
// // // // // // // // // // // // // //                           {record.checkInTime ? `${record.checkInTime} - ${record.checkOutTime}` : "N/A"}
// // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // //                         <td className="py-5 px-6 text-sm">
// // // // // // // // // // // // // //                           <span
// // // // // // // // // // // // // //                             className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
// // // // // // // // // // // // // //                               record.status === "Present"
// // // // // // // // // // // // // //                                 ? "bg-green-900/20 text-green-300 border-2 border-green-500 light-mode:border-2 light-mode:border-green-500"
// // // // // // // // // // // // // //                                 : record.status === "Late"
// // // // // // // // // // // // // //                                 ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // // // //                                 : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // // // //                             } transition-all duration-300 backdrop-blur-sm light-mode:bg-opacity-10`}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             {record.status}
// // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // //                         </td>
// // // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </tbody>
// // // // // // // // // // // // // //                 </table>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default AttendanceHistoryComponent;
// // // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";
// // // // // // // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // // // import { Search } from 'lucide-react';
// // // // // // // // // // // // // // import { Poppins } from 'next/font/google';

// // // // // // // // // // // // // // // Initialize Poppins font
// // // // // // // // // // // // // // const poppins = Poppins({
// // // // // // // // // // // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // // // // // // // // // // //   subsets: ['latin'],
// // // // // // // // // // // // // //   display: 'swap',
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // const AttendanceHistoryComponent = () => {
// // // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // // //   const [attendanceRecords, setAttendanceRecords] = useState([]);
// // // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // // // // // // // // // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // // // // // // // // // // // //   const [showTable, setShowTable] = useState(true);
// // // // // // // // // // // // // //   const [searchCategory, setSearchCategory] = useState("all");
// // // // // // // // // // // // // //   const tableRef = useRef(null);

// // // // // // // // // // // // // //   // Filter states
// // // // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // // // //     status: "",
// // // // // // // // // // // // // //     attendanceType: "",
// // // // // // // // // // // // // //     dateRange: {
// // // // // // // // // // // // // //       start: "",
// // // // // // // // // // // // // //       end: ""
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     hoursRange: {
// // // // // // // // // // // // // //       min: "",
// // // // // // // // // // // // // //       max: ""
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   // Handle scroll for mobile view
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // // //       if (window.innerWidth >= 768) return;
      
// // // // // // // // // // // // // //       const currentScrollY = window.scrollY;
// // // // // // // // // // // // // //       if (currentScrollY > lastScrollY) {
// // // // // // // // // // // // // //         setShowTable(true);
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         setShowTable(false);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //       setLastScrollY(currentScrollY);
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // // //   }, [lastScrollY]);

// // // // // // // // // // // // // //   // Check if any filters are applied
// // // // // // // // // // // // // //   const hasActiveFilters = () => {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       filters.status !== "" ||
// // // // // // // // // // // // // //       filters.attendanceType !== "" ||
// // // // // // // // // // // // // //       filters.dateRange.start !== "" ||
// // // // // // // // // // // // // //       filters.dateRange.end !== "" ||
// // // // // // // // // // // // // //       filters.hoursRange.min !== "" ||
// // // // // // // // // // // // // //       filters.hoursRange.max !== "" ||
// // // // // // // // // // // // // //       searchTerm !== ""
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Fetch attendance history from the backend
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchAttendanceHistory = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         // Replace with your actual API endpoint
// // // // // // // // // // // // // //         const response = await axios.get("http://localhost:5000/api/attendance/history");
// // // // // // // // // // // // // //         setAttendanceRecords(response.data);
// // // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // // //         setError(error.response?.data?.error || "Failed to fetch attendance history");
// // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     // For demo purposes, using mock data
// // // // // // // // // // // // // //     const mockAttendance = [
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 1,
// // // // // // // // // // // // // //         memberName: "John Doe",
// // // // // // // // // // // // // //         email: "john.doe@example.com",
// // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // //         hoursLogged: 8.5,
// // // // // // // // // // // // // //         trackingId: "ATT87654321",
// // // // // // // // // // // // // //         checkInDate: "2025-03-01",
// // // // // // // // // // // // // //         checkInTime: "09:00 AM",
// // // // // // // // // // // // // //         checkOutTime: "05:30 PM",
// // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 2,
// // // // // // // // // // // // // //         memberName: "Jane Smith",
// // // // // // // // // // // // // //         email: "jane.smith@example.com",
// // // // // // // // // // // // // //         checkInDate: "2025-03-05",
// // // // // // // // // // // // // //         checkInTime: "08:45 AM",
// // // // // // // // // // // // // //         checkOutTime: "04:30 PM",
// // // // // // // // // // // // // //         trackingId: "ATT98765432",
// // // // // // // // // // // // // //         hoursLogged: 7.75,
// // // // // // // // // // // // // //         attendanceType: "Office",
// // // // // // // // // // // // // //         status: "Present",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 3,
// // // // // // // // // // // // // //         memberName: "Robert Johnson",
// // // // // // // // // // // // // //         email: "robert.j@example.com",
// // // // // // // // // // // // // //         checkInDate: "2025-03-10",
// // // // // // // // // // // // // //         checkInTime: "10:15 AM",
// // // // // // // // // // // // // //         checkOutTime: "06:30 PM",
// // // // // // // // // // // // // //         trackingId: "ATT12345678",
// // // // // // // // // // // // // //         hoursLogged: 8.25,
// // // // // // // // // // // // // //         attendanceType: "Hybrid",
// // // // // // // // // // // // // //         status: "Late",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       {
// // // // // // // // // // // // // //         id: 4,
// // // // // // // // // // // // // //         memberName: "Emily Davis",
// // // // // // // // // // // // // //         email: "emily.d@example.com",
// // // // // // // // // // // // // //         checkInDate: "2025-02-28",
// // // // // // // // // // // // // //         checkInTime: "",
// // // // // // // // // // // // // //         checkOutTime: "",
// // // // // // // // // // // // // //         trackingId: "ATT23456789",
// // // // // // // // // // // // // //         hoursLogged: 0,
// // // // // // // // // // // // // //         attendanceType: "Remote",
// // // // // // // // // // // // // //         status: "Absent",
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //     ];

// // // // // // // // // // // // // //     // Simulate API fetch delay
// // // // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // // // //       setAttendanceRecords(mockAttendance);
// // // // // // // // // // // // // //       setIsLoading(false);
// // // // // // // // // // // // // //     }, 800);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   // Get unique values for filter options
// // // // // // // // // // // // // //   const getUniqueValues = (field) => {
// // // // // // // // // // // // // //     return [...new Set(attendanceRecords.map(record => record[field]))];
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const uniqueAttendanceTypes = getUniqueValues("attendanceType");
// // // // // // // // // // // // // //   const uniqueStatuses = getUniqueValues("status");

// // // // // // // // // // // // // //   // Filter attendance based on search and filters
// // // // // // // // // // // // // //   const filteredAttendance = attendanceRecords.filter(record => {
// // // // // // // // // // // // // //     if (!record) return false;

// // // // // // // // // // // // // //     let matchesSearch = false;
// // // // // // // // // // // // // //     if (searchTerm === "") {
// // // // // // // // // // // // // //       matchesSearch = true;
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       const term = searchTerm.toLowerCase();
// // // // // // // // // // // // // //       switch (searchCategory) {
// // // // // // // // // // // // // //         case "member":
// // // // // // // // // // // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         case "email":
// // // // // // // // // // // // // //           matchesSearch = record.email && record.email.toLowerCase().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         case "type":
// // // // // // // // // // // // // //           matchesSearch = record.attendanceType && record.attendanceType.toLowerCase().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         case "status":
// // // // // // // // // // // // // //           matchesSearch = record.status && record.status.toLowerCase().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         case "tracking":
// // // // // // // // // // // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         case "hours":
// // // // // // // // // // // // // //           matchesSearch = record.hoursLogged && record.hoursLogged.toString().includes(term);
// // // // // // // // // // // // // //           break;
// // // // // // // // // // // // // //         default:
// // // // // // // // // // // // // //           matchesSearch = (
// // // // // // // // // // // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // // // // // // // // // // //             (record.email && record.email.toLowerCase().includes(term)) ||
// // // // // // // // // // // // // //             (record.attendanceType && record.attendanceType.toLowerCase().includes(term)) ||
// // // // // // // // // // // // // //             (record.status && record.status.toLowerCase().includes(term)) ||
// // // // // // // // // // // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term)) ||
// // // // // // // // // // // // // //             (record.hoursLogged && record.hoursLogged.toString().includes(term))
// // // // // // // // // // // // // //           );
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     // Status filter
// // // // // // // // // // // // // //     const matchesStatus = filters.status === "" || record.status === filters.status;
    
// // // // // // // // // // // // // //     // Attendance Type filter
// // // // // // // // // // // // // //     const matchesAttendanceType = filters.attendanceType === "" || record.attendanceType === filters.attendanceType;
    
// // // // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // // // //     const checkInDate = new Date(record.checkInDate);
// // // // // // // // // // // // // //     const matchesDateStart = !filters.dateRange.start || checkInDate >= new Date(filters.dateRange.start);
// // // // // // // // // // // // // //     const matchesDateEnd = !filters.dateRange.end || checkInDate <= new Date(filters.dateRange.end);
    
// // // // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // // // //     const matchesHoursMin = !filters.hoursRange.min || record.hoursLogged >= Number(filters.hoursRange.min);
// // // // // // // // // // // // // //     const matchesHoursMax = !filters.hoursRange.max || record.hoursLogged <= Number(filters.hoursRange.max);
    
// // // // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesAttendanceType && 
// // // // // // // // // // // // // //            matchesDateStart && matchesDateEnd && 
// // // // // // // // // // // // // //            matchesHoursMin && matchesHoursMax;
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   // Format date for display
// // // // // // // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // // // // // // //     const date = new Date(dateString);
// // // // // // // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // // // // // // //       year: 'numeric',
// // // // // // // // // // // // // //       month: 'short',
// // // // // // // // // // // // // //       day: 'numeric'
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Navigate to dashboard
// // // // // // // // // // // // // //   const navigateToDashboard = () => {
// // // // // // // // // // // // // //     router.push("/dashboard");
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Handle filter changes
// // // // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // // // //     if (field.includes(".")) {
// // // // // // // // // // // // // //       const [parent, child] = field.split(".");
// // // // // // // // // // // // // //       setFilters((prev) => ({
// // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // //         [parent]: {
// // // // // // // // // // // // // //           ...prev[parent],
// // // // // // // // // // // // // //           [child]: value,
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       setFilters((prev) => ({
// // // // // // // // // // // // // //         ...prev,
// // // // // // // // // // // // // //         [field]: value,
// // // // // // // // // // // // // //       }));
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Reset all filters
// // // // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // // // //     setFilters({
// // // // // // // // // // // // // //       status: "",
// // // // // // // // // // // // // //       attendanceType: "",
// // // // // // // // // // // // // //       dateRange: {
// // // // // // // // // // // // // //         start: "",
// // // // // // // // // // // // // //         end: ""
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       hoursRange: {
// // // // // // // // // // // // // //         min: "",
// // // // // // // // // // // // // //         max: ""
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     setSearchTerm("");
// // // // // // // // // // // // // //     setSearchCategory("all");
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Loading state
// // // // // // // // // // // // // //   if (isLoading) {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">
// // // // // // // // // // // // // //             Loading attendance records...
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   // Error state
// // // // // // // // // // // // // //   if (error) {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-red-500 ${poppins.className}`}>
// // // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Error: {error}</p>
// // // // // // // // // // // // // //           <button 
// // // // // // // // // // // // // //             onClick={() => window.location.reload()}
// // // // // // // // // // // // // //             className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Try Again
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // // // // // // // // // // //       <style jsx global>{`
// // // // // // // // // // // // // //         body {
// // // // // // // // // // // // // //           font-family: ${poppins.style.fontFamily};
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //         button:focus, 
// // // // // // // // // // // // // //         input:focus,
// // // // // // // // // // // // // //         select:focus,
// // // // // // // // // // // // // //         a:focus,
// // // // // // // // // // // // // //         [tabindex]:focus,
// // // // // // // // // // // // // //         [role="button"]:focus {
// // // // // // // // // // // // // //           outline: none !important;
// // // // // // // // // // // // // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         @media (hover: none) and (pointer: coarse) {
// // // // // // // // // // // // // //           button:active, 
// // // // // // // // // // // // // //           input:active,
// // // // // // // // // // // // // //           select:active,
// // // // // // // // // // // // // //           a:active,
// // // // // // // // // // // // // //           [tabindex]:active,
// // // // // // // // // // // // // //           [role="button"]:active {
// // // // // // // // // // // // // //             outline: none !important;
// // // // // // // // // // // // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       `}</style>

// // // // // // // // // // // // // //       {/* Navbar */}
// // // // // // // // // // // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               onClick={navigateToDashboard}
// // // // // // // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // // // // // // //               aria-label="Back to dashboard"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //             <h1 className="text-xl md:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // // // // // // //               Attendance History
// // // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // // // // // // // //             aria-label="Filter attendance"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <span className="flex items-center justify-center">
// // // // // // // // // // // // // //               <svg
// // // // // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //                 className="h-5 w-5 mr-2 text-red-500"
// // // // // // // // // // // // // //                 fill="none"
// // // // // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <path
// // // // // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // // // // //                   strokeWidth={1.5}
// // // // // // // // // // // // // //                   d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
// // // // // // // // // // // // // //                 />
// // // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Header Section with Search Bar */}
// // // // // // // // // // // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // // // // // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // // // // // // // // // // //           <div className="relative">
// // // // // // // // // // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // // // // // // // //               <Search
// // // // // // // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // // // // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // // // // // // // // // // //               <select
// // // // // // // // // // // // // //                 value={searchCategory}
// // // // // // // // // // // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // // // // // // // // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <option value="all">All</option>
// // // // // // // // // // // // // //                 <option value="member">Member</option>
// // // // // // // // // // // // // //                 <option value="email">Email</option>
// // // // // // // // // // // // // //                 <option value="type">Work Type</option>
// // // // // // // // // // // // // //                 <option value="status">Status</option>
// // // // // // // // // // // // // //                 <option value="tracking">Tracking ID</option>
// // // // // // // // // // // // // //                 <option value="hours">Hours</option>
// // // // // // // // // // // // // //               </select>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <input
// // // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // // // // // // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // // // // // // // // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // // // // // // // // // //                 text-black dark:text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // // // // // // // // //                 text-sm md:text-lg bg-white dark:bg-gray-800 ${poppins.className}`}
// // // // // // // // // // // // // //               value={searchTerm}
// // // // // // // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Clear Filters Button */}
// // // // // // // // // // // // // //       {hasActiveFilters() && (
// // // // // // // // // // // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // //             onClick={resetFilters}
// // // // // // // // // // // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // // // // // // // // // // //             aria-label="Clear all filters"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Clear Filters
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // //       {/* Attendance Table */}
// // // // // // // // // // // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 transition-transform duration-300 ${!showTable && window.innerWidth < 768 ? 'translate-y-full' : 'translate-y-0'} ${poppins.className}`} ref={tableRef}>
// // // // // // // // // // // // // //         {filteredAttendance.length === 0 ? (
// // // // // // // // // // // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // // // // // // // // // // //             <svg
// // // // // // // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // // // // // // // // // // //               fill="none"
// // // // // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <path
// // // // // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // // // // //                 strokeWidth={1}
// // // // // // // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //             </svg>
// // // // // // // // // // // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // // // // // // // // //             {hasActiveFilters() && (
// // // // // // // // // // // // // //               <button
// // // // // // // // // // // // // //                 onClick={resetFilters}
// // // // // // // // // // // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 Clear Filters
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // //           <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 ${poppins.className}`}>
// // // // // // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // // // // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // // // // // // // // // // // // //                 <thead className="bg-gray-900/50">
// // // // // // // // // // // // // //                   <tr>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Member
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Email
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Hours
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Date
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Time In/Out
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Work Type
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Status
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // // // // // // //                       Tracking ID
// // // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // // //                   </tr>
// // // // // // // // // // // // // //                 </thead>
// // // // // // // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // // // // // // //                   {filteredAttendance.map((record, index) => (
// // // // // // // // // // // // // //                     <tr
// // // // // // // // // // // // // //                       key={record.trackingId || index}
// // // // // // // // // // // // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${
// // // // // // // // // // // // // //                         record.status === "Present" ? "ring-1 ring-green-500/30 ring-inset" : ""
// // // // // // // // // // // // // //                       }`}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-medium text-white whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.memberName}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-light text-gray-300 whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.email || "N/A"}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-medium text-white whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.hoursLogged.toFixed(1)} hrs
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-light text-gray-300 whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {formatDate(record.checkInDate)}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-light text-gray-300 whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.checkInTime ? `${record.checkInTime} - ${record.checkOutTime}` : "N/A"}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-light text-gray-300 whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.attendanceType}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // // // // // //                           record.status === "Present"
// // // // // // // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // // // // //                             : record.status === "Late"
// // // // // // // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // // // //                         }`}>
// // // // // // // // // // // // // //                           {record.status}
// // // // // // // // // // // // // //                         </span>
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-xs md:text-sm font-mono text-gray-300 whitespace-nowrap ${poppins.className}`}>
// // // // // // // // // // // // // //                         {record.trackingId}
// // // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // // // //               </table>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {/* Filter Modal */}
// // // // // // // // // // // // // //       {showFilterModal && (
// // // // // // // // // // // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // // // // // // // // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // // // // // // // // // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // // // // // // // // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance History</h2>
// // // // // // // // // // // // // //               <button 
// // // // // // // // // // // // // //                 onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // // // // // // // // // // //                 aria-label="Close filter modal"
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // // // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // // // // // // // //                 </svg>
// // // // // // // // // // // // // //               </button>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Filter Modal Content */}
// // // // // // // // // // // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // // // // // // // // // // //               {/* Status Filter */}
// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // // // // // // //                   Attendance Status
// // // // // // // // // // // // // //                 </label>
// // // // // // // // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // // // // // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // // // // // // //                       filters.status === ""
// // // // // // // // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // // // // // // //                     } ${poppins.className}`}
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     All Statuses
// // // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // // //                   {uniqueStatuses.map((status) => (
// // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // //                       key={status}
// // // // // // // // // // // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // // // // // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // // // // // // //                         filters.status === status
// // // // // // // // // // // // // //                           ? status === "Present"
// // // // // // // // // // // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // // // // // // // // // // //                             : status === "Late"
// // // // // // // // // // // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // // // // // // // // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // // // // // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // // // // // // //                       } ${poppins.className}`}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {status}
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               {/* Attendance Type Filter */}
// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // // // // // // //                   Work Type
// // // // // // // // // // // // // //                 </label>
// // // // // // // // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     onClick={() => handleFilterChange("attendanceType", "")}
// // // // // // // // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // // // // // // //                       filters.attendanceType === ""
// // // // // // // // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // // // // // // //                     } ${poppins.className}`}
// // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // //                     All Types
// // // // // // // // // // // // // //                   </button>
// // // // // // // // // // // // // //                   {uniqueAttendanceTypes.map((type) => (
// // // // // // // // // // // // // //                     <button
// // // // // // // // // // // // // //                       key={type}
// // // // // // // // // // // // // //                       onClick={() => handleFilterChange("attendanceType", type)}
// // // // // // // // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // // // // // // //                         filters.attendanceType === type
// // // // // // // // // // // // // //                           ? "bg-blue-500/20 border-blue-500 text-white"
// // // // // // // // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // // // // // // //                       } ${poppins.className}`}
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       {type}
// // // // // // // // // // // // // //                     </button>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               {/* Date Range Filters */}
// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // // // // // // //                   Date Range
// // // // // // // // // // // // // //                 </label>
// // // // // // // // // // // // // //                 <div className="grid grid-cols-2 gap-6">
// // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // //                     <label className={`block text-xs text-gray-500 mb-1 ${poppins.className}`}>From</label>
// // // // // // // // // // // // // //                     <input
// // // // // // // // // // // // // //                       type="date"
// // // // // // // // // // // // // //                       className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                       value={filters.dateRange.start}
// // // // // // // // // // // // // //                       onChange={(e) => handleFilterChange("dateRange.start", e.target.value)}
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // //                     <label className={`block text-xs text-gray-500 mb-1 ${poppins.className}`}>To</label>
// // // // // // // // // // // // // //                     <input
// // // // // // // // // // // // // //                       type="date"
// // // // // // // // // // // // // //                       className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                       value={filters.dateRange.end}
// // // // // // // // // // // // // //                       onChange={(e) => handleFilterChange("dateRange.end", e.target.value)}
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               {/* Hours Range Filter */}
// // // // // // // // // // // // // //               <div>
// // // // // // // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // // // // // // //                   Hours Logged Range
// // // // // // // // // // // // // //                 </label>
// // // // // // // // // // // // // //                 <div className="grid grid-cols-2 gap-6">
// // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // //                     <label className={`block text-xs text-gray-500 mb-1 ${poppins.className}`}>Min (hrs)</label>
// // // // // // // // // // // // // //                     <input
// // // // // // // // // // // // // //                       type="number"
// // // // // // // // // // // // // //                       placeholder="0.0"
// // // // // // // // // // // // // //                       min="0"
// // // // // // // // // // // // // //                       step="0.1"
// // // // // // // // // // // // // //                       className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                       value={filters.hoursRange.min}
// // // // // // // // // // // // // //                       onChange={(e) => handleFilterChange("hoursRange.min", e.target.value)}
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // //                     <label className={`block text-xs text-gray-500 mb-1 ${poppins.className}`}>Max (hrs)</label>
// // // // // // // // // // // // // //                     <input
// // // // // // // // // // // // // //                       type="number"
// // // // // // // // // // // // // //                       placeholder="24.0"
// // // // // // // // // // // // // //                       min="0"
// // // // // // // // // // // // // //                       step="0.1"
// // // // // // // // // // // // // //                       className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                       value={filters.hoursRange.max}
// // // // // // // // // // // // // //                       onChange={(e) => handleFilterChange("hoursRange.max", e.target.value)}
// // // // // // // // // // // // // //                     />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>

// // // // // // // // // // // // // //               {/* Action Buttons */}
// // // // // // // // // // // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // // // // // // // // // // //                 <button
// // // // // // // // // // // // // //                   onClick={resetFilters}
// // // // // // // // // // // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Reset All
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //                 <button
// // // // // // // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // // // // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   Apply Filters
// // // // // // // // // // // // // //                 </button>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default AttendanceHistoryComponent;
// // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // // // // // import { Search, User } from "lucide-react";
// // // // // // // // // // // // // import Link from "next/link";

// // // // // // // // // // // // // const AttendanceTable = () => {
// // // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // // //     status: "all",
// // // // // // // // // // // // //     dateFrom: "",
// // // // // // // // // // // // //     dateTo: "",
// // // // // // // // // // // // //     hoursFrom: "",
// // // // // // // // // // // // //     hoursTo: "",
// // // // // // // // // // // // //     type: "all"
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   // Mock data with photos
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         // Simulate API call
// // // // // // // // // // // // //         setTimeout(() => {
// // // // // // // // // // // // //           const mockData = [
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: 1,
// // // // // // // // // // // // //               photo: null,
// // // // // // // // // // // // //               memberName: "John Doe",
// // // // // // // // // // // // //               email: "john.doe@example.com",
// // // // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // // // //               checkIn: "09:00 AM",
// // // // // // // // // // // // //               checkOut: "05:30 PM",
// // // // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // // //               type: "Remote",
// // // // // // // // // // // // //               trackingId: "ATT001"
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: 2,
// // // // // // // // // // // // //               photo: null,
// // // // // // // // // // // // //               memberName: "Jane Smith",
// // // // // // // // // // // // //               email: "jane.smith@example.com",
// // // // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // // // //               checkIn: "08:45 AM",
// // // // // // // // // // // // //               checkOut: "05:15 PM",
// // // // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // // //               type: "Office",
// // // // // // // // // // // // //               trackingId: "ATT002"
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: 3,
// // // // // // // // // // // // //               photo: null,
// // // // // // // // // // // // //               memberName: "Robert Johnson",
// // // // // // // // // // // // //               email: "robert.j@example.com",
// // // // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // // // //               checkIn: "10:15 AM",
// // // // // // // // // // // // //               checkOut: "06:30 PM",
// // // // // // // // // // // // //               hours: 8.25,
// // // // // // // // // // // // //               status: "Late",
// // // // // // // // // // // // //               type: "Hybrid",
// // // // // // // // // // // // //               trackingId: "ATT003"
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: 4,
// // // // // // // // // // // // //               photo: null,
// // // // // // // // // // // // //               memberName: "Emily Davis",
// // // // // // // // // // // // //               email: "emily.d@example.com",
// // // // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // // // //               checkIn: "",
// // // // // // // // // // // // //               checkOut: "",
// // // // // // // // // // // // //               hours: 0,
// // // // // // // // // // // // //               status: "Absent",
// // // // // // // // // // // // //               type: "Remote",
// // // // // // // // // // // // //               trackingId: "ATT004"
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //             {
// // // // // // // // // // // // //               id: 5,
// // // // // // // // // // // // //               photo: null,
// // // // // // // // // // // // //               memberName: "Michael Brown",
// // // // // // // // // // // // //               email: "michael.b@example.com",
// // // // // // // // // // // // //               date: "2023-06-13",
// // // // // // // // // // // // //               checkIn: "09:30 AM",
// // // // // // // // // // // // //               checkOut: "04:45 PM",
// // // // // // // // // // // // //               hours: 7.25,
// // // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // // //               type: "Office",
// // // // // // // // // // // // //               trackingId: "ATT005"
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //           ];
// // // // // // // // // // // // //           setAttendanceData(mockData);
// // // // // // // // // // // // //           setIsLoading(false);
// // // // // // // // // // // // //         }, 1000);
// // // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchData();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // // // // // //     const date = new Date(dateString);
// // // // // // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // // // // // //       year: 'numeric',
// // // // // // // // // // // // //       month: 'short',
// // // // // // // // // // // // //       day: 'numeric'
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // // //     setFilters({ ...filters, [field]: value });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // // //     setFilters({
// // // // // // // // // // // // //       status: "all",
// // // // // // // // // // // // //       dateFrom: "",
// // // // // // // // // // // // //       dateTo: "",
// // // // // // // // // // // // //       hoursFrom: "",
// // // // // // // // // // // // //       hoursTo: "",
// // // // // // // // // // // // //       type: "all"
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // // // // // // //     // Search filter
// // // // // // // // // // // // //     const matchesSearch = 
// // // // // // // // // // // // //       record.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // // // //       record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // // // //       record.trackingId.toLowerCase().includes(searchQuery.toLowerCase());
    
// // // // // // // // // // // // //     // Status filter
// // // // // // // // // // // // //     const matchesStatus = filters.status === "all" || record.status === filters.status;
    
// // // // // // // // // // // // //     // Type filter
// // // // // // // // // // // // //     const matchesType = filters.type === "all" || record.type === filters.type;
    
// // // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   if (isLoading) {
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // // //             <Link 
// // // // // // // // // // // // //               href="/dashboard"
// // // // // // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // // // //               </svg>
// // // // // // // // // // // // //             </Link>
// // // // // // // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // // // // // //               Attendance Records
// // // // // // // // // // // // //             </h1>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // // // // // // // // // //           <div className="relative">
// // // // // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // // // // // // // // // //               <Search
// // // // // // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // // // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </span>
// // // // // // // // // // // // //             <input
// // // // // // // // // // // // //               type="text"
// // // // // // // // // // // // //               placeholder="Search attendance records..."
// // // // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // // // // // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // // // // // // // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // // // // // // // // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // // // // // // // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // // // // // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // // // //               value={searchQuery}
// // // // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Advanced Filter Button */}
// // // // // // // // // // // // //       <div className="sticky top-32 z-30 bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4">
// // // // // // // // // // // // //         <button
// // // // // // // // // // // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // // // // // // // // // // //           className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Advanced Filters Panel */}
// // // // // // // // // // // // //       {showAdvancedFilters && (
// // // // // // // // // // // // //         <div className="sticky top-48 z-20 bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4">
// // // // // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6">
// // // // // // // // // // // // //             <h2 className="text-lg font-medium mb-4 text-white">Advanced Filters</h2>
            
// // // // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // // // // // // // // //               {/* Status Filter */}
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
// // // // // // // // // // // // //                 <select
// // // // // // // // // // // // //                   value={filters.status}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <option value="all">All Statuses</option>
// // // // // // // // // // // // //                   <option value="Present">Present</option>
// // // // // // // // // // // // //                   <option value="Late">Late</option>
// // // // // // // // // // // // //                   <option value="Absent">Absent</option>
// // // // // // // // // // // // //                 </select>
// // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // //               {/* Type Filter */}
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Work Type</label>
// // // // // // // // // // // // //                 <select
// // // // // // // // // // // // //                   value={filters.type}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("type", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <option value="all">All Types</option>
// // // // // // // // // // // // //                   <option value="Office">Office</option>
// // // // // // // // // // // // //                   <option value="Remote">Remote</option>
// // // // // // // // // // // // //                   <option value="Hybrid">Hybrid</option>
// // // // // // // // // // // // //                 </select>
// // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // //               {/* Date Range Filters */}
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">From Date</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="date"
// // // // // // // // // // // // //                   value={filters.dateFrom}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">To Date</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="date"
// // // // // // // // // // // // //                   value={filters.dateTo}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // //               {/* Hours Range Filters */}
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Min Hours</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="number"
// // // // // // // // // // // // //                   placeholder="0.0"
// // // // // // // // // // // // //                   min="0"
// // // // // // // // // // // // //                   step="0.1"
// // // // // // // // // // // // //                   value={filters.hoursFrom}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </div>
              
// // // // // // // // // // // // //               <div>
// // // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Max Hours</label>
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="number"
// // // // // // // // // // // // //                   placeholder="24.0"
// // // // // // // // // // // // //                   min="0"
// // // // // // // // // // // // //                   step="0.1"
// // // // // // // // // // // // //                   value={filters.hoursTo}
// // // // // // // // // // // // //                   onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
            
// // // // // // // // // // // // //             <div className="flex justify-end mt-4 space-x-3">
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 onClick={resetFilters}
// // // // // // // // // // // // //                 className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 Reset Filters
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 onClick={() => setShowAdvancedFilters(false)}
// // // // // // // // // // // // //                 className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 Apply Filters
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}

// // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // // // // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // // // // // //             <svg
// // // // // // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
// // // // // // // // // // // // //               fill="none"
// // // // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <path
// // // // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // // // //                 strokeWidth={1}
// // // // // // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //             </svg>
// // // // // // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // // // // // //                 <thead>
// // // // // // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Photo
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Member
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Date
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Time In/Out
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Hours
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Type
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Status
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // // //                       Tracking ID
// // // // // // // // // // // // //                     </th>
// // // // // // // // // // // // //                   </tr>
// // // // // // // // // // // // //                 </thead>
// // // // // // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // // // // // //                   {filteredData.map((record) => (
// // // // // // // // // // // // //                     <tr
// // // // // // // // // // // // //                       key={record.id}
// // // // // // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // // // // //                         <div className="relative w-10 h-10 rounded-full overflow-hidden group">
// // // // // // // // // // // // //                           <div className="w-full h-full bg-gray-700 flex items-center justify-center hover:ring-2 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // // // // //                             <User size={20} className="text-gray-400" />
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // // // // //                         <div className="font-medium">{record.memberName}</div>
// // // // // // // // // // // // //                         <div className="text-xs text-gray-400">{record.email}</div>
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // //                         {formatDate(record.date)}
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut}` : "N/A"}
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // // // // //                         {`${record.hours.toFixed(1)} hrs`}
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // // //                         {record.type}
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // // // // //                           record.status === "Present"
// // // // // // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // // // //                             : record.status === "Late"
// // // // // // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // // //                         }`}>
// // // // // // // // // // // // //                           {record.status}
// // // // // // // // // // // // //                         </span>
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-mono text-gray-300">
// // // // // // // // // // // // //                         {record.trackingId}
// // // // // // // // // // // // //                       </td>
// // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // // //               </table>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default AttendanceTable;
// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // // // // import { Search, User } from "lucide-react";
// // // // // // // // // // // // import Link from "next/link";

// // // // // // // // // // // // const AttendanceTable = () => {
// // // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // // //   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
// // // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // // //     status: "all",
// // // // // // // // // // // //     dateFrom: "",
// // // // // // // // // // // //     dateTo: "",
// // // // // // // // // // // //     hoursFrom: "",
// // // // // // // // // // // //     hoursTo: "",
// // // // // // // // // // // //     type: "all"
// // // // // // // // // // // //   });

// // // // // // // // // // // //   // Mock data with photos
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         // Simulate API call
// // // // // // // // // // // //         setTimeout(() => {
// // // // // // // // // // // //           const mockData = [
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: 1,
// // // // // // // // // // // //               photo: null,
// // // // // // // // // // // //               memberName: "John Doe",
// // // // // // // // // // // //               email: "john.doe@example.com",
// // // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // // //               checkIn: "09:00 AM",
// // // // // // // // // // // //               checkOut: "05:30 PM",
// // // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // //               type: "Remote",
// // // // // // // // // // // //               trackingId: "ATT001"
// // // // // // // // // // // //             },
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: 2,
// // // // // // // // // // // //               photo: null,
// // // // // // // // // // // //               memberName: "Jane Smith",
// // // // // // // // // // // //               email: "jane.smith@example.com",
// // // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // // //               checkIn: "08:45 AM",
// // // // // // // // // // // //               checkOut: "05:15 PM",
// // // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // //               type: "Office",
// // // // // // // // // // // //               trackingId: "ATT002"
// // // // // // // // // // // //             },
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: 3,
// // // // // // // // // // // //               photo: null,
// // // // // // // // // // // //               memberName: "Robert Johnson",
// // // // // // // // // // // //               email: "robert.j@example.com",
// // // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // // //               checkIn: "10:15 AM",
// // // // // // // // // // // //               checkOut: "06:30 PM",
// // // // // // // // // // // //               hours: 8.25,
// // // // // // // // // // // //               status: "Late",
// // // // // // // // // // // //               type: "Hybrid",
// // // // // // // // // // // //               trackingId: "ATT003"
// // // // // // // // // // // //             },
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: 4,
// // // // // // // // // // // //               photo: null,
// // // // // // // // // // // //               memberName: "Emily Davis",
// // // // // // // // // // // //               email: "emily.d@example.com",
// // // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // // //               checkIn: "",
// // // // // // // // // // // //               checkOut: "",
// // // // // // // // // // // //               hours: 0,
// // // // // // // // // // // //               status: "Absent",
// // // // // // // // // // // //               type: "Remote",
// // // // // // // // // // // //               trackingId: "ATT004"
// // // // // // // // // // // //             },
// // // // // // // // // // // //             {
// // // // // // // // // // // //               id: 5,
// // // // // // // // // // // //               photo: null,
// // // // // // // // // // // //               memberName: "Michael Brown",
// // // // // // // // // // // //               email: "michael.b@example.com",
// // // // // // // // // // // //               date: "2023-06-13",
// // // // // // // // // // // //               checkIn: "09:30 AM",
// // // // // // // // // // // //               checkOut: "04:45 PM",
// // // // // // // // // // // //               hours: 7.25,
// // // // // // // // // // // //               status: "Present",
// // // // // // // // // // // //               type: "Office",
// // // // // // // // // // // //               trackingId: "ATT005"
// // // // // // // // // // // //             }
// // // // // // // // // // // //           ];
// // // // // // // // // // // //           setAttendanceData(mockData);
// // // // // // // // // // // //           setIsLoading(false);
// // // // // // // // // // // //         }, 1000);
// // // // // // // // // // // //       } catch (error) {
// // // // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     fetchData();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // // // // //     const date = new Date(dateString);
// // // // // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // // // // //       year: 'numeric',
// // // // // // // // // // // //       month: 'short',
// // // // // // // // // // // //       day: 'numeric'
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // // //     setFilters({ ...filters, [field]: value });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // // //     setFilters({
// // // // // // // // // // // //       status: "all",
// // // // // // // // // // // //       dateFrom: "",
// // // // // // // // // // // //       dateTo: "",
// // // // // // // // // // // //       hoursFrom: "",
// // // // // // // // // // // //       hoursTo: "",
// // // // // // // // // // // //       type: "all"
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // // // // // //     // Search filter
// // // // // // // // // // // //     const matchesSearch = 
// // // // // // // // // // // //       record.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // // //       record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // // //       record.trackingId.toLowerCase().includes(searchQuery.toLowerCase());
    
// // // // // // // // // // // //     // Status filter
// // // // // // // // // // // //     const matchesStatus = filters.status === "all" || record.status === filters.status;
    
// // // // // // // // // // // //     // Type filter
// // // // // // // // // // // //     const matchesType = filters.type === "all" || record.type === filters.type;
    
// // // // // // // // // // // //     // Date range filter
// // // // // // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // // // // // //     // Hours range filter
// // // // // // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // // // // // //   });

// // // // // // // // // // // //   if (isLoading) {
// // // // // // // // // // // //     return (
// // // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // // //             <Link 
// // // // // // // // // // // //               href="/dashboard"
// // // // // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // // //               </svg>
// // // // // // // // // // // //             </Link>
// // // // // // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // // // // //               Attendance Records
// // // // // // // // // // // //             </h1>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Search Bar */}
// // // // // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // // // // // // // // //           <div className="relative">
// // // // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // // // // // // // // //               <Search
// // // // // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // // // // // // // //                 }`}
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </span>
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               type="text"
// // // // // // // // // // // //               placeholder="Search by name, email, or membership status"
// // // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // // // // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // // // // // // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // // // // // // // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // // // // // // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // // // // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // // //               value={searchQuery}
// // // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Advanced Filter Button */}
// // // // // // // // // // // //       <div className="sticky top-32 z-30 bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4">
// // // // // // // // // // // //         <button
// // // // // // // // // // // //           onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
// // // // // // // // // // // //           className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Advanced Filters Panel */}
// // // // // // // // // // // //       {showAdvancedFilters && (
// // // // // // // // // // // //         <div className="sticky top-48 z-20 bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4">
// // // // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6">
// // // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // // // // //               {/* Status Filter */}
// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
// // // // // // // // // // // //                 <select
// // // // // // // // // // // //                   value={filters.status}
// // // // // // // // // // // //                   onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <option value="all">All Statuses</option>
// // // // // // // // // // // //                   <option value="Present">Present</option>
// // // // // // // // // // // //                   <option value="Late">Late</option>
// // // // // // // // // // // //                   <option value="Absent">Absent</option>
// // // // // // // // // // // //                 </select>
// // // // // // // // // // // //               </div>
              
// // // // // // // // // // // //               {/* Type Filter */}
// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Work Type</label>
// // // // // // // // // // // //                 <select
// // // // // // // // // // // //                   value={filters.type}
// // // // // // // // // // // //                   onChange={(e) => handleFilterChange("type", e.target.value)}
// // // // // // // // // // // //                   className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <option value="all">All Types</option>
// // // // // // // // // // // //                   <option value="Office">Office</option>
// // // // // // // // // // // //                   <option value="Remote">Remote</option>
// // // // // // // // // // // //                   <option value="Hybrid">Hybrid</option>
// // // // // // // // // // // //                 </select>
// // // // // // // // // // // //               </div>
              
// // // // // // // // // // // //               {/* Date Range Filter */}
// // // // // // // // // // // //               <div>
// // // // // // // // // // // //                 <label className="block text-sm font-medium text-gray-300 mb-1">Date Range</label>
// // // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // // //                   <input
// // // // // // // // // // // //                     type="date"
// // // // // // // // // // // //                     value={filters.dateFrom}
// // // // // // // // // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // // // // // //                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //                     placeholder="From"
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                   <input
// // // // // // // // // // // //                     type="date"
// // // // // // // // // // // //                     value={filters.dateTo}
// // // // // // // // // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // // // // // //                     className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //                     placeholder="To"
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
            
// // // // // // // // // // // //             <div className="flex justify-end mt-4 space-x-3">
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 onClick={resetFilters}
// // // // // // // // // // // //                 className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 Reset Filters
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //               <button
// // // // // // // // // // // //                 onClick={() => setShowAdvancedFilters(false)}
// // // // // // // // // // // //                 className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 Apply Filters
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}

// // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // // // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // // // // //             <svg
// // // // // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
// // // // // // // // // // // //               fill="none"
// // // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <path
// // // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // // //                 strokeWidth={1}
// // // // // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // // //               />
// // // // // // // // // // // //             </svg>
// // // // // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // // // // //                 <thead>
// // // // // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Photo
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Member
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Email
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Date
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Status
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // // //                       Tracking ID
// // // // // // // // // // // //                     </th>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                 </thead>
// // // // // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // // // // //                   {filteredData.map((record) => (
// // // // // // // // // // // //                     <tr
// // // // // // // // // // // //                       key={record.id}
// // // // // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // // // //                         <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-600 flex items-center justify-center bg-gray-700">
// // // // // // // // // // // //                           {record.photo ? (
// // // // // // // // // // // //                             <img 
// // // // // // // // // // // //                               src={record.photo} 
// // // // // // // // // // // //                               alt={record.memberName}
// // // // // // // // // // // //                               className="w-full h-full object-cover"
// // // // // // // // // // // //                             />
// // // // // // // // // // // //                           ) : (
// // // // // // // // // // // //                             <User size={20} className="text-gray-400" />
// // // // // // // // // // // //                           )}
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // // // //                         {record.memberName}
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // //                         {record.email}
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // // //                         {formatDate(record.date)}
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // // // //                           record.status === "Present"
// // // // // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // // //                             : record.status === "Late"
// // // // // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // // //                         }`}>
// // // // // // // // // // // //                           {record.status}
// // // // // // // // // // // //                         </span>
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-mono text-gray-300">
// // // // // // // // // // // //                         {record.trackingId}
// // // // // // // // // // // //                       </td>
// // // // // // // // // // // //                     </tr>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // //               </table>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default AttendanceTable;
// // // // // // // // // // // "use client";

// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // // // import { Search } from "lucide-react";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";

// // // // // // // // // // // // Profile Icon Component
// // // // // // // // // // // const ProfileIcon = ({ name }) => {
// // // // // // // // // // //   const initials = name 
// // // // // // // // // // //     ? name.split(' ')
// // // // // // // // // // //         .map(n => n[0])
// // // // // // // // // // //         .slice(0, 2)
// // // // // // // // // // //         .join('')
// // // // // // // // // // //         .toUpperCase()
// // // // // // // // // // //     : '';

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // // Filter View Component
// // // // // // // // // // // const FilterView = ({ onFilterChange, onReset }) => {
// // // // // // // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // //     status: "all",
// // // // // // // // // // //     type: "all",
// // // // // // // // // // //     dateFrom: "",
// // // // // // // // // // //     dateTo: "",
// // // // // // // // // // //     hoursFrom: "",
// // // // // // // // // // //     hoursTo: ""
// // // // // // // // // // //   });

// // // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // // //     const updatedFilters = { ...filters, [field]: value };
// // // // // // // // // // //     setFilters(updatedFilters);
// // // // // // // // // // //     if (onFilterChange) onFilterChange(updatedFilters);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleReset = () => {
// // // // // // // // // // //     const resetFilters = {
// // // // // // // // // // //       status: "all",
// // // // // // // // // // //       type: "all",
// // // // // // // // // // //       dateFrom: "",
// // // // // // // // // // //       dateTo: "",
// // // // // // // // // // //       hoursFrom: "",
// // // // // // // // // // //       hoursTo: ""
// // // // // // // // // // //     };
// // // // // // // // // // //     setFilters(resetFilters);
// // // // // // // // // // //     if (onReset) onReset();
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="relative z-10">
// // // // // // // // // // //       <button
// // // // // // // // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // // // // // // // //         className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 backdrop-blur-sm text-white border border-gray-700 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/10 focus:outline-none"
// // // // // // // // // // //       >
// // // // // // // // // // //         <Filter size={18} className="text-red-500" />
// // // // // // // // // // //         <span className="font-light tracking-wider">Filter</span>
// // // // // // // // // // //         {isOpen ? (
// // // // // // // // // // //           <ChevronUp size={16} className="text-gray-400" />
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           <ChevronDown size={16} className="text-gray-400" />
// // // // // // // // // // //         )}
// // // // // // // // // // //       </button>

// // // // // // // // // // //       {isOpen && (
// // // // // // // // // // //         <div className="absolute right-0 mt-2 p-6 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl animate-fadeIn w-[300px]">
// // // // // // // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // // // // // // //             <h3 className="text-lg font-light tracking-wider text-white">Filters</h3>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setIsOpen(false)}
// // // // // // // // // // //               className="text-gray-400 hover:text-white transition-colors focus:outline-none"
// // // // // // // // // // //             >
// // // // // // // // // // //               <X size={20} />
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="space-y-4">
// // // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Status</label>
// // // // // // // // // // //               <select
// // // // // // // // // // //                 value={filters.status}
// // // // // // // // // // //                 onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // // //                 className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="all">All Statuses</option>
// // // // // // // // // // //                 <option value="Present">Present</option>
// // // // // // // // // // //                 <option value="Late">Late</option>
// // // // // // // // // // //                 <option value="Absent">Absent</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Work Type</label>
// // // // // // // // // // //               <select
// // // // // // // // // // //                 value={filters.type}
// // // // // // // // // // //                 onChange={(e) => handleFilterChange("type", e.target.value)}
// // // // // // // // // // //                 className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <option value="all">All Types</option>
// // // // // // // // // // //                 <option value="Office">Office</option>
// // // // // // // // // // //                 <option value="Remote">Remote</option>
// // // // // // // // // // //                 <option value="Hybrid">Hybrid</option>
// // // // // // // // // // //               </select>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Date Range</label>
// // // // // // // // // // //               <div className="flex space-x-2">
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="date"
// // // // // // // // // // //                   value={filters.dateFrom}
// // // // // // // // // // //                   onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // // // // //                   className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="date"
// // // // // // // // // // //                   value={filters.dateTo}
// // // // // // // // // // //                   onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // // // // //                   className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // // //                 />
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="flex justify-end mt-6 space-x-3">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={handleReset}
// // // // // // // // // // //               className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
// // // // // // // // // // //             >
// // // // // // // // // // //               Reset
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setIsOpen(false)}
// // // // // // // // // // //               className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
// // // // // // // // // // //             >
// // // // // // // // // // //               Apply
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // // Main Attendance Component
// // // // // // // // // // // const AttendanceTable = () => {
// // // // // // // // // // //   const router = useRouter();
// // // // // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // // //     status: "all",
// // // // // // // // // // //     type: "all",
// // // // // // // // // // //     dateFrom: "",
// // // // // // // // // // //     dateTo: "",
// // // // // // // // // // //     hoursFrom: "",
// // // // // // // // // // //     hoursTo: ""
// // // // // // // // // // //   });

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // // //       setIsLoading(true);
// // // // // // // // // // //       try {
// // // // // // // // // // //         // Simulate API call
// // // // // // // // // // //         setTimeout(() => {
// // // // // // // // // // //           const mockData = [
// // // // // // // // // // //             {
// // // // // // // // // // //               id: 1,
// // // // // // // // // // //               memberName: "John Doe",
// // // // // // // // // // //               email: "john.doe@example.com",
// // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // //               checkIn: "09:00 AM",
// // // // // // // // // // //               checkOut: "05:30 PM",
// // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // //               status: "Present",
// // // // // // // // // // //               type: "Remote",
// // // // // // // // // // //               trackingId: "ATT001"
// // // // // // // // // // //             },
// // // // // // // // // // //             {
// // // // // // // // // // //               id: 2,
// // // // // // // // // // //               memberName: "Jane Smith",
// // // // // // // // // // //               email: "jane.smith@example.com",
// // // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // // //               checkIn: "08:45 AM",
// // // // // // // // // // //               checkOut: "05:15 PM",
// // // // // // // // // // //               hours: 8.5,
// // // // // // // // // // //               status: "Present",
// // // // // // // // // // //               type: "Office",
// // // // // // // // // // //               trackingId: "ATT002"
// // // // // // // // // // //             },
// // // // // // // // // // //             {
// // // // // // // // // // //               id: 3,
// // // // // // // // // // //               memberName: "Robert Johnson",
// // // // // // // // // // //               email: "robert.j@example.com",
// // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // //               checkIn: "10:15 AM",
// // // // // // // // // // //               checkOut: "06:30 PM",
// // // // // // // // // // //               hours: 8.25,
// // // // // // // // // // //               status: "Late",
// // // // // // // // // // //               type: "Hybrid",
// // // // // // // // // // //               trackingId: "ATT003"
// // // // // // // // // // //             },
// // // // // // // // // // //             {
// // // // // // // // // // //               id: 4,
// // // // // // // // // // //               memberName: "Emily Davis",
// // // // // // // // // // //               email: "emily.d@example.com",
// // // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // // //               checkIn: "",
// // // // // // // // // // //               checkOut: "",
// // // // // // // // // // //               hours: 0,
// // // // // // // // // // //               status: "Absent",
// // // // // // // // // // //               type: "Remote",
// // // // // // // // // // //               trackingId: "ATT004"
// // // // // // // // // // //             },
// // // // // // // // // // //             {
// // // // // // // // // // //               id: 5,
// // // // // // // // // // //               memberName: "Michael Brown",
// // // // // // // // // // //               email: "michael.b@example.com",
// // // // // // // // // // //               date: "2023-06-13",
// // // // // // // // // // //               checkIn: "09:30 AM",
// // // // // // // // // // //               checkOut: "04:45 PM",
// // // // // // // // // // //               hours: 7.25,
// // // // // // // // // // //               status: "Present",
// // // // // // // // // // //               type: "Office",
// // // // // // // // // // //               trackingId: "ATT005"
// // // // // // // // // // //             }
// // // // // // // // // // //           ];
// // // // // // // // // // //           setAttendanceData(mockData);
// // // // // // // // // // //           setIsLoading(false);
// // // // // // // // // // //         }, 1000);
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // // //         setIsLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchData();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // // // //     const date = new Date(dateString);
// // // // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // // // //       year: 'numeric',
// // // // // // // // // // //       month: 'short',
// // // // // // // // // // //       day: 'numeric'
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleFilterChange = (updatedFilters) => {
// // // // // // // // // // //     setFilters(updatedFilters);
// // // // // // // // // // //   };

// // // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // // //     setFilters({
// // // // // // // // // // //       status: "all",
// // // // // // // // // // //       type: "all",
// // // // // // // // // // //       dateFrom: "",
// // // // // // // // // // //       dateTo: "",
// // // // // // // // // // //       hoursFrom: "",
// // // // // // // // // // //       hoursTo: ""
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // // // // //     // Search filter
// // // // // // // // // // //     const matchesSearch = 
// // // // // // // // // // //       record.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //       record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //       record.trackingId.toLowerCase().includes(searchQuery.toLowerCase());
    
// // // // // // // // // // //     // Status filter
// // // // // // // // // // //     const matchesStatus = filters.status === "all" || record.status === filters.status;
    
// // // // // // // // // // //     // Type filter
// // // // // // // // // // //     const matchesType = filters.type === "all" || record.type === filters.type;
    
// // // // // // // // // // //     // Date range filter
// // // // // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // // // // //     // Hours range filter
// // // // // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // // // // //   });

// // // // // // // // // // //   if (isLoading) {
// // // // // // // // // // //     return (
// // // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // // // // // // //         <div className="text-center">
// // // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     );
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // // // //       {/* Header */}
// // // // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // // //             <Link 
// // // // // // // // // // //               href="/dashboard"
// // // // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // // // //             >
// // // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // //               </svg>
// // // // // // // // // // //             </Link>
// // // // // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // // // //               Attendance Records
// // // // // // // // // // //             </h1>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Search Bar and Filter */}
// // // // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800 px-4 md:px-8 pt-6 md:pt-10 pb-4">
// // // // // // // // // // //         <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // // //           <div className="relative flex-grow">
// // // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // // // // // // // //               <Search
// // // // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               />
// // // // // // // // // // //             </span>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="text"
// // // // // // // // // // //               placeholder="Search by name, email, or tracking ID"
// // // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
// // // // // // // // // // //                 searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"
// // // // // // // // // // //               } text-white pl-12 md:pl-14 pr-4 py-3 md:py-4 rounded-xl focus:outline-none text-sm md:text-base`}
// // // // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // //               value={searchQuery}
// // // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
          
// // // // // // // // // // //           <FilterView 
// // // // // // // // // // //             onFilterChange={handleFilterChange}
// // // // // // // // // // //             onReset={resetFilters}
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // // // //             <svg
// // // // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
// // // // // // // // // // //               fill="none"
// // // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // // //               stroke="currentColor"
// // // // // // // // // // //             >
// // // // // // // // // // //               <path
// // // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // // //                 strokeWidth={1}
// // // // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // // //               />
// // // // // // // // // // //             </svg>
// // // // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No attendance records found</p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // // // //                 <thead>
// // // // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Member
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Date
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Time
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Hours
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Type
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // // //                       Status
// // // // // // // // // // //                     </th>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 </thead>
// // // // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // // // //                   {filteredData.map((record) => (
// // // // // // // // // // //                     <tr
// // // // // // // // // // //                       key={record.id}
// // // // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // // //                         <div className="flex items-center gap-3">
// // // // // // // // // // //                           <ProfileIcon name={record.memberName} />
// // // // // // // // // // //                           <div>
// // // // // // // // // // //                             <div>{record.memberName}</div>
// // // // // // // // // // //                             <div className="text-xs text-gray-400">{record.email}</div>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // //                         {formatDate(record.date)}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut}` : "N/A"}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // // //                         {`${record.hours.toFixed(1)} hrs`}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // // //                         {record.type}
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // // //                           record.status === "Present"
// // // // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // // //                             : record.status === "Late"
// // // // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // // //                         }`}>
// // // // // // // // // // //                           {record.status}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                       </td>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </tbody>
// // // // // // // // // // //               </table>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default AttendanceTable;
// // // // // // // // // // "use client";

// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // // import { Search } from "lucide-react";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";

// // // // // // // // // // // Profile Icon Component
// // // // // // // // // // const ProfileIcon = ({ name }) => {
// // // // // // // // // //   const initials = name 
// // // // // // // // // //     ? name.split(' ')
// // // // // // // // // //         .map(n => n[0])
// // // // // // // // // //         .slice(0, 2)
// // // // // // // // // //         .join('')
// // // // // // // // // //         .toUpperCase()
// // // // // // // // // //     : '';

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // // Filter View Component
// // // // // // // // // // const FilterView = ({ onFilterChange, onReset }) => {
// // // // // // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // //     status: "all",
// // // // // // // // // //     type: "all",
// // // // // // // // // //     dateFrom: "",
// // // // // // // // // //     dateTo: "",
// // // // // // // // // //     hoursFrom: "",
// // // // // // // // // //     hoursTo: ""
// // // // // // // // // //   });

// // // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // // //     const updatedFilters = { ...filters, [field]: value };
// // // // // // // // // //     setFilters(updatedFilters);
// // // // // // // // // //     if (onFilterChange) onFilterChange(updatedFilters);
// // // // // // // // // //   };

// // // // // // // // // //   const handleReset = () => {
// // // // // // // // // //     const resetFilters = {
// // // // // // // // // //       status: "all",
// // // // // // // // // //       type: "all",
// // // // // // // // // //       dateFrom: "",
// // // // // // // // // //       dateTo: "",
// // // // // // // // // //       hoursFrom: "",
// // // // // // // // // //       hoursTo: ""
// // // // // // // // // //     };
// // // // // // // // // //     setFilters(resetFilters);
// // // // // // // // // //     if (onReset) onReset();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="relative z-10">
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // // // // // // //         className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 backdrop-blur-sm text-white border border-gray-700 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/10 focus:outline-none"
// // // // // // // // // //       >
// // // // // // // // // //         <Filter size={18} className="text-red-500" />
// // // // // // // // // //         <span className="font-light tracking-wider">Filter</span>
// // // // // // // // // //         {isOpen ? (
// // // // // // // // // //           <ChevronUp size={16} className="text-gray-400" />
// // // // // // // // // //         ) : (
// // // // // // // // // //           <ChevronDown size={16} className="text-gray-400" />
// // // // // // // // // //         )}
// // // // // // // // // //       </button>

// // // // // // // // // //       {isOpen && (
// // // // // // // // // //         <div className="absolute right-0 mt-2 p-6 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl animate-fadeIn w-[300px]">
// // // // // // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // // // // // //             <h3 className="text-lg font-light tracking-wider text-white">Filters</h3>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setIsOpen(false)}
// // // // // // // // // //               className="text-gray-400 hover:text-white transition-colors focus:outline-none"
// // // // // // // // // //             >
// // // // // // // // // //               <X size={20} />
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="space-y-4">
// // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Status</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 value={filters.status}
// // // // // // // // // //                 onChange={(e) => handleFilterChange("status", e.target.value)}
// // // // // // // // // //                 className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="all">All Statuses</option>
// // // // // // // // // //                 <option value="Present">Present</option>
// // // // // // // // // //                 <option value="Late">Late</option>
// // // // // // // // // //                 <option value="Absent">Absent</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Work Type</label>
// // // // // // // // // //               <select
// // // // // // // // // //                 value={filters.type}
// // // // // // // // // //                 onChange={(e) => handleFilterChange("type", e.target.value)}
// // // // // // // // // //                 className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="all">All Types</option>
// // // // // // // // // //                 <option value="Office">Office</option>
// // // // // // // // // //                 <option value="Remote">Remote</option>
// // // // // // // // // //                 <option value="Hybrid">Hybrid</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="space-y-2">
// // // // // // // // // //               <label className="block text-sm font-medium text-gray-300">Date Range</label>
// // // // // // // // // //               <div className="flex space-x-2">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="date"
// // // // // // // // // //                   value={filters.dateFrom}
// // // // // // // // // //                   onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // // // //                   className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // //                 />
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="date"
// // // // // // // // // //                   value={filters.dateTo}
// // // // // // // // // //                   onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // // // //                   className="w-full bg-gray-700/70 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="flex justify-end mt-6 space-x-3">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleReset}
// // // // // // // // // //               className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
// // // // // // // // // //             >
// // // // // // // // // //               Reset
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setIsOpen(false)}
// // // // // // // // // //               className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
// // // // // // // // // //             >
// // // // // // // // // //               Apply
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // // Main Attendance Component
// // // // // // // // // // const AttendanceTable = () => {
// // // // // // // // // //   const router = useRouter();
// // // // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // // //     status: "all",
// // // // // // // // // //     type: "all",
// // // // // // // // // //     dateFrom: "",
// // // // // // // // // //     dateTo: "",
// // // // // // // // // //     hoursFrom: "",
// // // // // // // // // //     hoursTo: ""
// // // // // // // // // //   });

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchData = async () => {
// // // // // // // // // //       setIsLoading(true);
// // // // // // // // // //       try {
// // // // // // // // // //         // Simulate API call
// // // // // // // // // //         setTimeout(() => {
// // // // // // // // // //           const mockData = [
// // // // // // // // // //             {
// // // // // // // // // //               id: 1,
// // // // // // // // // //               memberName: "John Doe",
// // // // // // // // // //               email: "john.doe@example.com",
// // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // //               checkIn: "09:00 AM",
// // // // // // // // // //               checkOut: "05:30 PM",
// // // // // // // // // //               hours: 8.5,
// // // // // // // // // //               status: "Present",
// // // // // // // // // //               type: "Remote",
// // // // // // // // // //               trackingId: "ATT001"
// // // // // // // // // //             },
// // // // // // // // // //             {
// // // // // // // // // //               id: 2,
// // // // // // // // // //               memberName: "Jane Smith",
// // // // // // // // // //               email: "jane.smith@example.com",
// // // // // // // // // //               date: "2023-06-15",
// // // // // // // // // //               checkIn: "08:45 AM",
// // // // // // // // // //               checkOut: "05:15 PM",
// // // // // // // // // //               hours: 8.5,
// // // // // // // // // //               status: "Present",
// // // // // // // // // //               type: "Office",
// // // // // // // // // //               trackingId: "ATT002"
// // // // // // // // // //             },
// // // // // // // // // //             {
// // // // // // // // // //               id: 3,
// // // // // // // // // //               memberName: "Robert Johnson",
// // // // // // // // // //               email: "robert.j@example.com",
// // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // //               checkIn: "10:15 AM",
// // // // // // // // // //               checkOut: "06:30 PM",
// // // // // // // // // //               hours: 8.25,
// // // // // // // // // //               status: "Late",
// // // // // // // // // //               type: "Hybrid",
// // // // // // // // // //               trackingId: "ATT003"
// // // // // // // // // //             },
// // // // // // // // // //             {
// // // // // // // // // //               id: 4,
// // // // // // // // // //               memberName: "Emily Davis",
// // // // // // // // // //               email: "emily.d@example.com",
// // // // // // // // // //               date: "2023-06-14",
// // // // // // // // // //               checkIn: "",
// // // // // // // // // //               checkOut: "",
// // // // // // // // // //               hours: 0,
// // // // // // // // // //               status: "Absent",
// // // // // // // // // //               type: "Remote",
// // // // // // // // // //               trackingId: "ATT004"
// // // // // // // // // //             },
// // // // // // // // // //             {
// // // // // // // // // //               id: 5,
// // // // // // // // // //               memberName: "Michael Brown",
// // // // // // // // // //               email: "michael.b@example.com",
// // // // // // // // // //               date: "2023-06-13",
// // // // // // // // // //               checkIn: "09:30 AM",
// // // // // // // // // //               checkOut: "04:45 PM",
// // // // // // // // // //               hours: 7.25,
// // // // // // // // // //               status: "Present",
// // // // // // // // // //               type: "Office",
// // // // // // // // // //               trackingId: "ATT005"
// // // // // // // // // //             }
// // // // // // // // // //           ];
// // // // // // // // // //           setAttendanceData(mockData);
// // // // // // // // // //           setIsLoading(false);
// // // // // // // // // //         }, 1000);
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // // //         setIsLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchData();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // // //     const date = new Date(dateString);
// // // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // // //       year: 'numeric',
// // // // // // // // // //       month: 'short',
// // // // // // // // // //       day: 'numeric'
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const handleFilterChange = (updatedFilters) => {
// // // // // // // // // //     setFilters(updatedFilters);
// // // // // // // // // //   };

// // // // // // // // // //   const resetFilters = () => {
// // // // // // // // // //     setFilters({
// // // // // // // // // //       status: "all",
// // // // // // // // // //       type: "all",
// // // // // // // // // //       dateFrom: "",
// // // // // // // // // //       dateTo: "",
// // // // // // // // // //       hoursFrom: "",
// // // // // // // // // //       hoursTo: ""
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // // // //     // Search filter
// // // // // // // // // //     const matchesSearch = 
// // // // // // // // // //       record.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //       record.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //       record.trackingId.toLowerCase().includes(searchQuery.toLowerCase());
    
// // // // // // // // // //     // Status filter
// // // // // // // // // //     const matchesStatus = filters.status === "all" || record.status === filters.status;
    
// // // // // // // // // //     // Type filter
// // // // // // // // // //     const matchesType = filters.type === "all" || record.type === filters.type;
    
// // // // // // // // // //     // Date range filter
// // // // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // // // //     // Hours range filter
// // // // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // // // //   });

// // // // // // // // // //   if (isLoading) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // // // // // //         <div className="text-center">
// // // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // // //           <div className="flex items-center">
// // // // // // // // // //             <Link 
// // // // // // // // // //               href="/dashboard"
// // // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // // //             >
// // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // //               </svg>
// // // // // // // // // //             </Link>
// // // // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // // //               Attendance Records
// // // // // // // // // //             </h1>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Search Bar and Filter */}
// // // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800 px-4 md:px-8 pt-6 md:pt-10 pb-4">
// // // // // // // // // //         <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // //           <div className="relative flex-grow">
// // // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // // // // // // //               <Search
// // // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // // // //                 }`}
// // // // // // // // // //               />
// // // // // // // // // //             </span>
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               placeholder="Search by name, email, or tracking ID"
// // // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
// // // // // // // // // //                 searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"
// // // // // // // // // //               } text-white pl-12 md:pl-14 pr-4 py-3 md:py-4 rounded-xl focus:outline-none text-sm md:text-base`}
// // // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //               value={searchQuery}
// // // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // // //             />
// // // // // // // // // //           </div>
          
// // // // // // // // // //           <FilterView 
// // // // // // // // // //             onFilterChange={handleFilterChange}
// // // // // // // // // //             onReset={resetFilters}
// // // // // // // // // //           />
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // // //             <svg
// // // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
// // // // // // // // // //               fill="none"
// // // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // // //               stroke="currentColor"
// // // // // // // // // //             >
// // // // // // // // // //               <path
// // // // // // // // // //                 strokeLinecap="round"
// // // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // // //                 strokeWidth={1}
// // // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // // //               />
// // // // // // // // // //             </svg>
// // // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No attendance records found</p>
// // // // // // // // // //           </div>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // // //                 <thead>
// // // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Member
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Email
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Date
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Time
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Hours
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Type
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // // //                       Status
// // // // // // // // // //                     </th>
// // // // // // // // // //                   </tr>
// // // // // // // // // //                 </thead>
// // // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // // //                   {filteredData.map((record) => (
// // // // // // // // // //                     <tr
// // // // // // // // // //                       key={record.id}
// // // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // // //                     >
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // //                         <div className="flex items-center gap-3">
// // // // // // // // // //                           <ProfileIcon name={record.memberName} />
// // // // // // // // // //                           <div>
// // // // // // // // // //                             {record.memberName}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // //                         {record.email}
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // //                         {formatDate(record.date)}
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut}` : "N/A"}
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // // //                         {`${record.hours.toFixed(1)} hrs`}
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // // //                         {record.type}
// // // // // // // // // //                       </td>
// // // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // // //                           record.status === "Present"
// // // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // // //                             : record.status === "Late"
// // // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // // //                         }`}>
// // // // // // // // // //                           {record.status}
// // // // // // // // // //                         </span>
// // // // // // // // // //                       </td>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </tbody>
// // // // // // // // // //               </table>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default AttendanceTable;
// // // // // // // // // "use client";

// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // // import { Search, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { Poppins } from 'next/font/google';

// // // // // // // // // // Initialize Poppins font
// // // // // // // // // const poppins = Poppins({
// // // // // // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // // // // // //   subsets: ['latin'],
// // // // // // // // //   display: 'swap',
// // // // // // // // // });

// // // // // // // // // // Profile Icon Component
// // // // // // // // // const ProfileIcon = ({ name }) => {
// // // // // // // // //   const initials = name 
// // // // // // // // //     ? name.split(' ')
// // // // // // // // //         .map(n => n[0])
// // // // // // // // //         .slice(0, 2)
// // // // // // // // //         .join('')
// // // // // // // // //         .toUpperCase()
// // // // // // // // //     : '';

// // // // // // // // //   return (
// // // // // // // // //     <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // // Main Attendance Component
// // // // // // // // // const AttendanceTable = () => {
// // // // // // // // //   const router = useRouter();
// // // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // // // // // //   const [searchCategory, setSearchCategory] = useState("all");

// // // // // // // // //   // Filter states
// // // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // // //     status: "",
// // // // // // // // //     type: "",
// // // // // // // // //     dateFrom: "",
// // // // // // // // //     dateTo: "",
// // // // // // // // //     hoursFrom: "",
// // // // // // // // //     hoursTo: ""
// // // // // // // // //   });

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchData = async () => {
// // // // // // // // //       setIsLoading(true);
// // // // // // // // //       try {
// // // // // // // // //         // Simulate API call
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           const mockData = [
// // // // // // // // //             {
// // // // // // // // //               id: 1,
// // // // // // // // //               memberName: "John Doe",
// // // // // // // // //               email: "john.doe@example.com",
// // // // // // // // //               date: "2023-06-15",
// // // // // // // // //               checkIn: "09:00 AM",
// // // // // // // // //               checkOut: "05:30 PM",
// // // // // // // // //               hours: 8.5,
// // // // // // // // //               status: "Present",
// // // // // // // // //               type: "Remote",
// // // // // // // // //               trackingId: "ATT001"
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               id: 2,
// // // // // // // // //               memberName: "Jane Smith",
// // // // // // // // //               email: "jane.smith@example.com",
// // // // // // // // //               date: "2023-06-15",
// // // // // // // // //               checkIn: "08:45 AM",
// // // // // // // // //               checkOut: "05:15 PM",
// // // // // // // // //               hours: 8.5,
// // // // // // // // //               status: "Present",
// // // // // // // // //               type: "Office",
// // // // // // // // //               trackingId: "ATT002"
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               id: 3,
// // // // // // // // //               memberName: "Robert Johnson",
// // // // // // // // //               email: "robert.j@example.com",
// // // // // // // // //               date: "2023-06-14",
// // // // // // // // //               checkIn: "10:15 AM",
// // // // // // // // //               checkOut: "06:30 PM",
// // // // // // // // //               hours: 8.25,
// // // // // // // // //               status: "Late",
// // // // // // // // //               type: "Hybrid",
// // // // // // // // //               trackingId: "ATT003"
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               id: 4,
// // // // // // // // //               memberName: "Emily Davis",
// // // // // // // // //               email: "emily.d@example.com",
// // // // // // // // //               date: "2023-06-14",
// // // // // // // // //               checkIn: "",
// // // // // // // // //               checkOut: "",
// // // // // // // // //               hours: 0,
// // // // // // // // //               status: "Absent",
// // // // // // // // //               type: "Remote",
// // // // // // // // //               trackingId: "ATT004"
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               id: 5,
// // // // // // // // //               memberName: "Michael Brown",
// // // // // // // // //               email: "michael.b@example.com",
// // // // // // // // //               date: "2023-06-13",
// // // // // // // // //               checkIn: "09:30 AM",
// // // // // // // // //               checkOut: "04:45 PM",
// // // // // // // // //               hours: 7.25,
// // // // // // // // //               status: "Present",
// // // // // // // // //               type: "Office",
// // // // // // // // //               trackingId: "ATT005"
// // // // // // // // //             }
// // // // // // // // //           ];
// // // // // // // // //           setAttendanceData(mockData);
// // // // // // // // //           setIsLoading(false);
// // // // // // // // //         }, 1000);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // // //         setIsLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchData();
// // // // // // // // //   }, []);

// // // // // // // // //   const formatDate = (dateString) => {
// // // // // // // // //     if (!dateString) return "N/A";
// // // // // // // // //     const date = new Date(dateString);
// // // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // // //       year: 'numeric',
// // // // // // // // //       month: 'short',
// // // // // // // // //       day: 'numeric'
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   // Check if any filters are applied
// // // // // // // // //   const hasActiveFilters = () => {
// // // // // // // // //     return (
// // // // // // // // //       filters.status !== "" ||
// // // // // // // // //       filters.type !== "" ||
// // // // // // // // //       filters.dateFrom !== "" ||
// // // // // // // // //       filters.dateTo !== "" ||
// // // // // // // // //       filters.hoursFrom !== "" ||
// // // // // // // // //       filters.hoursTo !== "" ||
// // // // // // // // //       searchTerm !== ""
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   // Handle filter changes
// // // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // // //     setFilters(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [field]: value
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   // Reset all filters
// // // // // // // // //   const resetFilters = () => {
// // // // // // // // //     setFilters({
// // // // // // // // //       status: "",
// // // // // // // // //       type: "",
// // // // // // // // //       dateFrom: "",
// // // // // // // // //       dateTo: "",
// // // // // // // // //       hoursFrom: "",
// // // // // // // // //       hoursTo: ""
// // // // // // // // //     });
// // // // // // // // //     setSearchTerm("");
// // // // // // // // //     setSearchCategory("all");
// // // // // // // // //   };

// // // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // // //     // Search filter
// // // // // // // // //     let matchesSearch = false;
// // // // // // // // //     if (searchTerm === "") {
// // // // // // // // //       matchesSearch = true;
// // // // // // // // //     } else {
// // // // // // // // //       const term = searchTerm.toLowerCase();
// // // // // // // // //       switch (searchCategory) {
// // // // // // // // //         case "member":
// // // // // // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // // // // // //           break;
// // // // // // // // //         case "email":
// // // // // // // // //           matchesSearch = record.email && record.email.toLowerCase().includes(term);
// // // // // // // // //           break;
// // // // // // // // //         case "status":
// // // // // // // // //           matchesSearch = record.status && record.status.toLowerCase().includes(term);
// // // // // // // // //           break;
// // // // // // // // //         case "tracking":
// // // // // // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // // // // // //           break;
// // // // // // // // //         case "type":
// // // // // // // // //           matchesSearch = record.type && record.type.toLowerCase().includes(term);
// // // // // // // // //           break;
// // // // // // // // //         default:
// // // // // // // // //           matchesSearch = (
// // // // // // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // // // // // //             (record.email && record.email.toLowerCase().includes(term)) ||
// // // // // // // // //             (record.status && record.status.toLowerCase().includes(term)) ||
// // // // // // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term)) ||
// // // // // // // // //             (record.type && record.type.toLowerCase().includes(term))
// // // // // // // // //           );
// // // // // // // // //       }
// // // // // // // // //     }
    
// // // // // // // // //     // Status filter
// // // // // // // // //     const matchesStatus = filters.status === "" || record.status === filters.status;
    
// // // // // // // // //     // Type filter
// // // // // // // // //     const matchesType = filters.type === "" || record.type === filters.type;
    
// // // // // // // // //     // Date range filter
// // // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // // //     // Hours range filter
// // // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // // //   });

// // // // // // // // //   if (isLoading) {
// // // // // // // // //     return (
// // // // // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // // // // // //         <div className="text-center">
// // // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // // // // // //       <style jsx global>{`
// // // // // // // // //         body {
// // // // // // // // //           font-family: ${poppins.style.fontFamily};
// // // // // // // // //         }
// // // // // // // // //       `}</style>

// // // // // // // // //       {/* Header */}
// // // // // // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // //           <div className="flex items-center">
// // // // // // // // //             <Link 
// // // // // // // // //               href="/dashboard"
// // // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // // //             >
// // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // //               </svg>
// // // // // // // // //             </Link>
// // // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // // //               Attendance Records
// // // // // // // // //             </h1>
// // // // // // // // //           </div>

// // // // // // // // //           <button
// // // // // // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // // //             aria-label="Filter attendance"
// // // // // // // // //           >
// // // // // // // // //             <span className="flex items-center justify-center">
// // // // // // // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // // //             </span>
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Search Bar */}
// // // // // // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // // // // // //           <div className="relative">
// // // // // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // // //               <Search
// // // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // // //                 }`}
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // // // // // //               <select
// // // // // // // // //                 value={searchCategory}
// // // // // // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // // // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // // // // // //               >
// // // // // // // // //                 <option value="all">All</option>
// // // // // // // // //                 <option value="member">Member</option>
// // // // // // // // //                 <option value="email">Email</option>
// // // // // // // // //                 <option value="status">Status</option>
// // // // // // // // //                 <option value="tracking">Tracking ID</option>
// // // // // // // // //                 <option value="type">Work Type</option>
// // // // // // // // //               </select>
// // // // // // // // //             </div>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // // // // // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // // // // // // //               value={searchTerm}
// // // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Clear Filters Button */}
// // // // // // // // //       {hasActiveFilters() && (
// // // // // // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // // // // // //           <button
// // // // // // // // //             onClick={resetFilters}
// // // // // // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // // // // // //             aria-label="Clear all filters"
// // // // // // // // //           >
// // // // // // // // //             Clear Filters
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Main Content */}
// // // // // // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // // // // // //             <svg
// // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // // // // // //               fill="none"
// // // // // // // // //               viewBox="0 0 24 24"
// // // // // // // // //               stroke="currentColor"
// // // // // // // // //             >
// // // // // // // // //               <path
// // // // // // // // //                 strokeLinecap="round"
// // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // //                 strokeWidth={1}
// // // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // // //               />
// // // // // // // // //             </svg>
// // // // // // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // // // //             {hasActiveFilters() && (
// // // // // // // // //               <button
// // // // // // // // //                 onClick={resetFilters}
// // // // // // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // //               >
// // // // // // // // //                 Clear Filters
// // // // // // // // //               </button>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 ${poppins.className}`}>
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // // // // // // // //                 <thead className="bg-gray-900/50">
// // // // // // // // //                   <tr>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Member
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Email
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Date
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Time
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Hours
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Type
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // // //                       Status
// // // // // // // // //                     </th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // //                   {filteredData.map((record) => (
// // // // // // // // //                     <tr
// // // // // // // // //                       key={record.id}
// // // // // // // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // // // // // // //                     >
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // // // //                         <div className="flex items-center gap-3">
// // // // // // // // //                           <ProfileIcon name={record.memberName} />
// // // // // // // // //                           <div>
// // // // // // // // //                             {record.memberName}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // // //                         {record.email}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // // //                         {formatDate(record.date)}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut}` : "N/A"}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // // // //                         {`${record.hours.toFixed(1)} hrs`}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // // //                         {record.type}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // // //                           record.status === "Present"
// // // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // // //                             : record.status === "Late"
// // // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // // //                         }`}>
// // // // // // // // //                           {record.status}
// // // // // // // // //                         </span>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Filter Modal */}
// // // // // // // // //       {showFilterModal && (
// // // // // // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // // // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // // // // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // // // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // // // // // // //               <button 
// // // // // // // // //                 onClick={() => setShowFilterModal(false)}
// // // // // // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // // // // // //                 aria-label="Close filter modal"
// // // // // // // // //               >
// // // // // // // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // // // // // // //               </button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Filter Modal Content */}
// // // // // // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // // // // // //               {/* Status Filter */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                   Attendance Status
// // // // // // // // //                 </label>
// // // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // //                       filters.status === ""
// // // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // //                     } ${poppins.className}`}
// // // // // // // // //                   >
// // // // // // // // //                     All Statuses
// // // // // // // // //                   </button>
// // // // // // // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // // // // // // //                     <button
// // // // // // // // //                       key={status}
// // // // // // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // //                         filters.status === status
// // // // // // // // //                           ? status === "Present"
// // // // // // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // // // // // //                             : status === "Late"
// // // // // // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // // // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // //                       } ${poppins.className}`}
// // // // // // // // //                     >
// // // // // // // // //                       {status}
// // // // // // // // //                     </button>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Work Type Filter */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                   Work Type
// // // // // // // // //                 </label>
// // // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => handleFilterChange("type", "")}
// // // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // //                       filters.type === ""
// // // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // //                     } ${poppins.className}`}
// // // // // // // // //                   >
// // // // // // // // //                     All Types
// // // // // // // // //                   </button>
// // // // // // // // //                   {["Office", "Remote", "Hybrid"].map((type) => (
// // // // // // // // //                     <button
// // // // // // // // //                       key={type}
// // // // // // // // //                       onClick={() => handleFilterChange("type", type)}
// // // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // // //                         filters.type === type
// // // // // // // // //                           ? "bg-blue-500/20 border-blue-500 text-white"
// // // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // // //                       } ${poppins.className}`}
// // // // // // // // //                     >
// // // // // // // // //                       {type}
// // // // // // // // //                     </button>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Date Range Filters */}
// // // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // // //                 {/* Date From */}
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                     Date From
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="date"
// // // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // //                     value={filters.dateFrom}
// // // // // // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Date To */}
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                     Date To
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="date"
// // // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // //                     value={filters.dateTo}
// // // // // // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Hours Range Filter */}
// // // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // // //                 {/* Hours From */}
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                     Min Hours
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     placeholder="Minimum hours"
// // // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // //                     value={filters.hoursFrom}
// // // // // // // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // // // // // //                     min="0"
// // // // // // // // //                     step="0.1"
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Hours To */}
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // // //                     Max Hours
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     placeholder="Maximum hours"
// // // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // // //                     value={filters.hoursTo}
// // // // // // // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // // // // // //                     min="0"
// // // // // // // // //                     step="0.1"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Action Buttons */}
// // // // // // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={resetFilters}
// // // // // // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // //                 >
// // // // // // // // //                   Reset All
// // // // // // // // //                 </button>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // // //                 >
// // // // // // // // //                   Apply Filters
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AttendanceTable;
// // // // // // // // "use client";

// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { useRouter } from "next/navigation";
// // // // // // // // import { Search, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { Poppins } from 'next/font/google';

// // // // // // // // // Initialize Poppins font
// // // // // // // // const poppins = Poppins({
// // // // // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // // // // //   subsets: ['latin'],
// // // // // // // //   display: 'swap',
// // // // // // // // });

// // // // // // // // // Profile Icon Component
// // // // // // // // const ProfileIcon = ({ name, photo }) => {
// // // // // // // //   const initials = name 
// // // // // // // //     ? name.split(' ')
// // // // // // // //         .map(n => n[0])
// // // // // // // //         .slice(0, 2)
// // // // // // // //         .join('')
// // // // // // // //         .toUpperCase()
// // // // // // // //     : '';

// // // // // // // //   if (photo) {
// // // // // // // //     return (
// // // // // // // //       <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // // //         <img 
// // // // // // // //           src={photo} 
// // // // // // // //           alt="Profile" 
// // // // // // // //           className="w-full h-full object-cover"
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // // Main Attendance Component
// // // // // // // // const AttendanceTable = () => {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // // // // //   const [searchCategory, setSearchCategory] = useState("all");

// // // // // // // //   // Filter states
// // // // // // // //   const [filters, setFilters] = useState({
// // // // // // // //     status: "",
// // // // // // // //     type: "",
// // // // // // // //     dateFrom: "",
// // // // // // // //     dateTo: "",
// // // // // // // //     hoursFrom: "",
// // // // // // // //     hoursTo: ""
// // // // // // // //   });

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchData = async () => {
// // // // // // // //       setIsLoading(true);
// // // // // // // //       try {
// // // // // // // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // // // // // // //         const data = await response.json();
        
// // // // // // // //         // Transform the backend data to match frontend structure
// // // // // // // //         const transformedData = data.attendance.map(record => {
// // // // // // // //           // Calculate hours worked if both login and logout times exist
// // // // // // // //           let hours = 0;
// // // // // // // //           let status = "Absent";
          
// // // // // // // //           if (record.loginTime && record.logoutTime) {
// // // // // // // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // // // // // // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // // // // // // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60); // Convert ms to hours
            
// // // // // // // //             // Determine status based on login time (assuming 9AM is standard start time)
// // // // // // // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // // // // // // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // // // // // // //           } else if (record.loginTime) {
// // // // // // // //             status = "Present (No logout)";
// // // // // // // //           }
          
// // // // // // // //           return {
// // // // // // // //             id: record._id,
// // // // // // // //             memberName: record.member?.name || "Unknown Member",
// // // // // // // //             email: record.member?.email || "No email",
// // // // // // // //             date: record.date,
// // // // // // // //             checkIn: record.loginTime || "",
// // // // // // // //             checkOut: record.logoutTime || "",
// // // // // // // //             hours: hours,
// // // // // // // //             status: status,
// // // // // // // //             type: "Office", // Default type, you can modify this based on your data
// // // // // // // //             trackingId: record.membershipID,
// // // // // // // //             memberPhoto: record.member_photo
// // // // // // // //           };
// // // // // // // //         });
        
// // // // // // // //         setAttendanceData(transformedData);
// // // // // // // //         setIsLoading(false);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching data:", error);
// // // // // // // //         setIsLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchData();
// // // // // // // //   }, []);

// // // // // // // //   const formatDate = (dateString) => {
// // // // // // // //     if (!dateString) return "N/A";
// // // // // // // //     const date = new Date(dateString);
// // // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // // //       year: 'numeric',
// // // // // // // //       month: 'short',
// // // // // // // //       day: 'numeric'
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   // Check if any filters are applied
// // // // // // // //   const hasActiveFilters = () => {
// // // // // // // //     return (
// // // // // // // //       filters.status !== "" ||
// // // // // // // //       filters.type !== "" ||
// // // // // // // //       filters.dateFrom !== "" ||
// // // // // // // //       filters.dateTo !== "" ||
// // // // // // // //       filters.hoursFrom !== "" ||
// // // // // // // //       filters.hoursTo !== "" ||
// // // // // // // //       searchTerm !== ""
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   // Handle filter changes
// // // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // // //     setFilters(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [field]: value
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   // Reset all filters
// // // // // // // //   const resetFilters = () => {
// // // // // // // //     setFilters({
// // // // // // // //       status: "",
// // // // // // // //       type: "",
// // // // // // // //       dateFrom: "",
// // // // // // // //       dateTo: "",
// // // // // // // //       hoursFrom: "",
// // // // // // // //       hoursTo: ""
// // // // // // // //     });
// // // // // // // //     setSearchTerm("");
// // // // // // // //     setSearchCategory("all");
// // // // // // // //   };

// // // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // // //     // Search filter
// // // // // // // //     let matchesSearch = false;
// // // // // // // //     if (searchTerm === "") {
// // // // // // // //       matchesSearch = true;
// // // // // // // //     } else {
// // // // // // // //       const term = searchTerm.toLowerCase();
// // // // // // // //       switch (searchCategory) {
// // // // // // // //         case "member":
// // // // // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // // // // //           break;
// // // // // // // //         case "email":
// // // // // // // //           matchesSearch = record.email && record.email.toLowerCase().includes(term);
// // // // // // // //           break;
// // // // // // // //         case "status":
// // // // // // // //           matchesSearch = record.status && record.status.toLowerCase().includes(term);
// // // // // // // //           break;
// // // // // // // //         case "tracking":
// // // // // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // // // // //           break;
// // // // // // // //         case "type":
// // // // // // // //           matchesSearch = record.type && record.type.toLowerCase().includes(term);
// // // // // // // //           break;
// // // // // // // //         default:
// // // // // // // //           matchesSearch = (
// // // // // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // // // // //             (record.email && record.email.toLowerCase().includes(term)) ||
// // // // // // // //             (record.status && record.status.toLowerCase().includes(term)) ||
// // // // // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term)) ||
// // // // // // // //             (record.type && record.type.toLowerCase().includes(term))
// // // // // // // //           );
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     // Status filter
// // // // // // // //     const matchesStatus = filters.status === "" || 
// // // // // // // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // // // // // // //       (filters.status === "Late" && record.status === "Late") ||
// // // // // // // //       (filters.status === "Absent" && record.status === "Absent");
    
// // // // // // // //     // Type filter
// // // // // // // //     const matchesType = filters.type === "" || record.type === filters.type;
    
// // // // // // // //     // Date range filter
// // // // // // // //     const recordDate = new Date(record.date);
// // // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // // //     // Hours range filter
// // // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // // //   });

// // // // // // // //   if (isLoading) {
// // // // // // // //     return (
// // // // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // // // // //         <div className="text-center">
// // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // // // // //       <style jsx global>{`
// // // // // // // //         body {
// // // // // // // //           font-family: ${poppins.style.fontFamily};
// // // // // // // //         }
// // // // // // // //       `}</style>

// // // // // // // //       {/* Header */}
// // // // // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // //           <div className="flex items-center">
// // // // // // // //             <Link 
// // // // // // // //               href="/dashboard"
// // // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // // //             >
// // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // //               </svg>
// // // // // // // //             </Link>
// // // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // // //               Attendance Records
// // // // // // // //             </h1>
// // // // // // // //           </div>

// // // // // // // //           <button
// // // // // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // // //             aria-label="Filter attendance"
// // // // // // // //           >
// // // // // // // //             <span className="flex items-center justify-center">
// // // // // // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // // //             </span>
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Search Bar */}
// // // // // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // // // // //           <div className="relative">
// // // // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // //               <Search
// // // // // // // //                 className={`h-5 w-5 ${
// // // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // // //                 }`}
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // // // // //               <select
// // // // // // // //                 value={searchCategory}
// // // // // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // // // // //               >
// // // // // // // //                 <option value="all">All</option>
// // // // // // // //                 <option value="member">Member</option>
// // // // // // // //                 <option value="email">Email</option>
// // // // // // // //                 <option value="status">Status</option>
// // // // // // // //                 <option value="tracking">Tracking ID</option>
// // // // // // // //                 <option value="type">Work Type</option>
// // // // // // // //               </select>
// // // // // // // //             </div>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // // // // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // // // // // //               value={searchTerm}
// // // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Clear Filters Button */}
// // // // // // // //       {hasActiveFilters() && (
// // // // // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // // // // //           <button
// // // // // // // //             onClick={resetFilters}
// // // // // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // // // // //             aria-label="Clear all filters"
// // // // // // // //           >
// // // // // // // //             Clear Filters
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // // // // // //         {filteredData.length === 0 ? (
// // // // // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // // // // //             <svg
// // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // // // // //               fill="none"
// // // // // // // //               viewBox="0 0 24 24"
// // // // // // // //               stroke="currentColor"
// // // // // // // //             >
// // // // // // // //               <path
// // // // // // // //                 strokeLinecap="round"
// // // // // // // //                 strokeLinejoin="round"
// // // // // // // //                 strokeWidth={1}
// // // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // //               />
// // // // // // // //             </svg>
// // // // // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // // //             {hasActiveFilters() && (
// // // // // // // //               <button
// // // // // // // //                 onClick={resetFilters}
// // // // // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // //               >
// // // // // // // //                 Clear Filters
// // // // // // // //               </button>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 ${poppins.className}`}>
// // // // // // // //             <div className="overflow-x-auto">
// // // // // // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // // // // // // //                 <thead className="bg-gray-900/50">
// // // // // // // //                   <tr>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Member
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Email
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Date
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Time
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Hours
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Type
// // // // // // // //                     </th>
// // // // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // // //                       Status
// // // // // // // //                     </th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // //                   {filteredData.map((record) => (
// // // // // // // //                     <tr
// // // // // // // //                       key={record.id}
// // // // // // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // // // // // //                     >
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // // //                         <div className="flex items-center gap-3">
// // // // // // // //                           <ProfileIcon name={record.memberName} photo={record.memberPhoto} />
// // // // // // // //                           <div>
// // // // // // // //                             {record.memberName}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // //                         {record.email}
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // //                         {formatDate(record.date)}
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // // //                         {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // // //                         {record.type}
// // // // // // // //                       </td>
// // // // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // // //                           record.status.includes("Present")
// // // // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // // //                             : record.status === "Late"
// // // // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // // //                         }`}>
// // // // // // // //                           {record.status}
// // // // // // // //                         </span>
// // // // // // // //                       </td>
// // // // // // // //                     </tr>
// // // // // // // //                   ))}
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Filter Modal */}
// // // // // // // //       {showFilterModal && (
// // // // // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // // // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // // // // // //               <button 
// // // // // // // //                 onClick={() => setShowFilterModal(false)}
// // // // // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // // // // //                 aria-label="Close filter modal"
// // // // // // // //               >
// // // // // // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             {/* Filter Modal Content */}
// // // // // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // // // // //               {/* Status Filter */}
// // // // // // // //               <div>
// // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                   Attendance Status
// // // // // // // //                 </label>
// // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // //                       filters.status === ""
// // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // //                     } ${poppins.className}`}
// // // // // // // //                   >
// // // // // // // //                     All Statuses
// // // // // // // //                   </button>
// // // // // // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // // // // // //                     <button
// // // // // // // //                       key={status}
// // // // // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // //                         filters.status === status
// // // // // // // //                           ? status === "Present"
// // // // // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // // // // //                             : status === "Late"
// // // // // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // //                       } ${poppins.className}`}
// // // // // // // //                     >
// // // // // // // //                       {status}
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Work Type Filter */}
// // // // // // // //               <div>
// // // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                   Work Type
// // // // // // // //                 </label>
// // // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => handleFilterChange("type", "")}
// // // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // //                       filters.type === ""
// // // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // //                     } ${poppins.className}`}
// // // // // // // //                   >
// // // // // // // //                     All Types
// // // // // // // //                   </button>
// // // // // // // //                   {["Office", "Remote", "Hybrid"].map((type) => (
// // // // // // // //                     <button
// // // // // // // //                       key={type}
// // // // // // // //                       onClick={() => handleFilterChange("type", type)}
// // // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // // //                         filters.type === type
// // // // // // // //                           ? "bg-blue-500/20 border-blue-500 text-white"
// // // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // // //                       } ${poppins.className}`}
// // // // // // // //                     >
// // // // // // // //                       {type}
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Date Range Filters */}
// // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // //                 {/* Date From */}
// // // // // // // //                 <div>
// // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                     Date From
// // // // // // // //                   </label>
// // // // // // // //                   <input
// // // // // // // //                     type="date"
// // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // //                     value={filters.dateFrom}
// // // // // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 {/* Date To */}
// // // // // // // //                 <div>
// // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                     Date To
// // // // // // // //                   </label>
// // // // // // // //                   <input
// // // // // // // //                     type="date"
// // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // //                     value={filters.dateTo}
// // // // // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Hours Range Filter */}
// // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // //                 {/* Hours From */}
// // // // // // // //                 <div>
// // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                     Min Hours
// // // // // // // //                   </label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     placeholder="Minimum hours"
// // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // //                     value={filters.hoursFrom}
// // // // // // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // // // // //                     min="0"
// // // // // // // //                     step="0.1"
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 {/* Hours To */}
// // // // // // // //                 <div>
// // // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // // //                     Max Hours
// // // // // // // //                   </label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     placeholder="Maximum hours"
// // // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // // //                     value={filters.hoursTo}
// // // // // // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // // // // //                     min="0"
// // // // // // // //                     step="0.1"
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Action Buttons */}
// // // // // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // // // // //                 <button
// // // // // // // //                   onClick={resetFilters}
// // // // // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // //                 >
// // // // // // // //                   Reset All
// // // // // // // //                 </button>
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // // //                 >
// // // // // // // //                   Apply Filters
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AttendanceTable;

// // // // // // // "use client";

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { Search, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
// // // // // // // import Link from "next/link";
// // // // // // // import { Poppins } from 'next/font/google';

// // // // // // // // Initialize Poppins font
// // // // // // // const poppins = Poppins({
// // // // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // // // //   subsets: ['latin'],
// // // // // // //   display: 'swap',
// // // // // // // });

// // // // // // // // Profile Icon Component
// // // // // // // const ProfileIcon = ({ name, photo }) => {
// // // // // // //   const initials = name 
// // // // // // //     ? name.split(' ')
// // // // // // //         .map(n => n[0])
// // // // // // //         .slice(0, 2)
// // // // // // //         .join('')
// // // // // // //         .toUpperCase()
// // // // // // //     : '';

// // // // // // //   if (photo) {
// // // // // // //     return (
// // // // // // //       <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // //         <img 
// // // // // // //           src={photo} 
// // // // // // //           alt="Profile" 
// // // // // // //           className="w-full h-full object-cover"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50">
// // // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // Main Attendance Component
// // // // // // // const AttendanceTable = () => {
// // // // // // //   const router = useRouter();
// // // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // // // //   const [searchCategory, setSearchCategory] = useState("all");

// // // // // // //   // Filter states
// // // // // // //   const [filters, setFilters] = useState({
// // // // // // //     status: "",
// // // // // // //     type: "",
// // // // // // //     dateFrom: "",
// // // // // // //     dateTo: "",
// // // // // // //     hoursFrom: "",
// // // // // // //     hoursTo: ""
// // // // // // //   });

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchData = async () => {
// // // // // // //       setIsLoading(true);
// // // // // // //       try {
// // // // // // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // // // // // //         const data = await response.json();
        
// // // // // // //         // Transform the backend data to match frontend structure
// // // // // // //         const transformedData = data.attendance.map(record => {
// // // // // // //           // Calculate hours worked if both login and logout times exist
// // // // // // //           let hours = 0;
// // // // // // //           let status = "Absent";
          
// // // // // // //           if (record.loginTime && record.logoutTime) {
// // // // // // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // // // // // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // // // // // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60); // Convert ms to hours
            
// // // // // // //             // Determine status based on login time (assuming 9AM is standard start time)
// // // // // // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // // // // // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // // // // // //           } else if (record.loginTime) {
// // // // // // //             status = "Present (No logout)";
// // // // // // //           }
          
// // // // // // //           return {
// // // // // // //             id: record._id,
// // // // // // //             memberName: record.member?.name || "Unknown Member",
// // // // // // //             email: record.member?.email || "No email",
// // // // // // //             date: record.date,
// // // // // // //             checkIn: record.loginTime || "",
// // // // // // //             checkOut: record.logoutTime || "",
// // // // // // //             hours: hours,
// // // // // // //             status: status,
// // // // // // //             type: "Office", // Default type, you can modify this based on your data
// // // // // // //             trackingId: record.membershipID,
// // // // // // //             memberPhoto: record.member_photo
// // // // // // //           };
// // // // // // //         });
        
// // // // // // //         setAttendanceData(transformedData);
// // // // // // //         setIsLoading(false);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching data:", error);
// // // // // // //         setIsLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchData();
// // // // // // //   }, []);

// // // // // // //   const formatDate = (dateString) => {
// // // // // // //     if (!dateString) return "N/A";
// // // // // // //     const date = new Date(dateString);
// // // // // // //     return date.toLocaleDateString('en-US', {
// // // // // // //       year: 'numeric',
// // // // // // //       month: 'short',
// // // // // // //       day: 'numeric'
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // Check if any filters are applied
// // // // // // //   const hasActiveFilters = () => {
// // // // // // //     return (
// // // // // // //       filters.status !== "" ||
// // // // // // //       filters.type !== "" ||
// // // // // // //       filters.dateFrom !== "" ||
// // // // // // //       filters.dateTo !== "" ||
// // // // // // //       filters.hoursFrom !== "" ||
// // // // // // //       filters.hoursTo !== "" ||
// // // // // // //       searchTerm !== ""
// // // // // // //     );
// // // // // // //   };

// // // // // // //   // Handle filter changes
// // // // // // //   const handleFilterChange = (field, value) => {
// // // // // // //     setFilters(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [field]: value
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   // Reset all filters
// // // // // // //   const resetFilters = () => {
// // // // // // //     setFilters({
// // // // // // //       status: "",
// // // // // // //       type: "",
// // // // // // //       dateFrom: "",
// // // // // // //       dateTo: "",
// // // // // // //       hoursFrom: "",
// // // // // // //       hoursTo: ""
// // // // // // //     });
// // // // // // //     setSearchTerm("");
// // // // // // //     setSearchCategory("all");
// // // // // // //   };

// // // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // // //     // Search filter
// // // // // // //     let matchesSearch = false;
// // // // // // //     if (searchTerm === "") {
// // // // // // //       matchesSearch = true;
// // // // // // //     } else {
// // // // // // //       const term = searchTerm.toLowerCase();
// // // // // // //       switch (searchCategory) {
// // // // // // //         case "member":
// // // // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // // // //           break;
// // // // // // //         case "email":
// // // // // // //           matchesSearch = record.email && record.email.toLowerCase().includes(term);
// // // // // // //           break;
// // // // // // //         case "status":
// // // // // // //           matchesSearch = record.status && record.status.toLowerCase().includes(term);
// // // // // // //           break;
// // // // // // //         case "tracking":
// // // // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // // // //           break;
// // // // // // //         case "type":
// // // // // // //           matchesSearch = record.type && record.type.toLowerCase().includes(term);
// // // // // // //           break;
// // // // // // //         default:
// // // // // // //           matchesSearch = (
// // // // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // // // //             (record.email && record.email.toLowerCase().includes(term)) ||
// // // // // // //             (record.status && record.status.toLowerCase().includes(term)) ||
// // // // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term)) ||
// // // // // // //             (record.type && record.type.toLowerCase().includes(term))
// // // // // // //           );
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Status filter
// // // // // // //     const matchesStatus = filters.status === "" || 
// // // // // // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // // // // // //       (filters.status === "Late" && record.status === "Late") ||
// // // // // // //       (filters.status === "Absent" && record.status === "Absent");
    
// // // // // // //     // Type filter
// // // // // // //     const matchesType = filters.type === "" || record.type === filters.type;
    
// // // // // // //     // Date range filter
// // // // // // //     const recordDate = new Date(record.date);
// // // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // // //     // Hours range filter
// // // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // // //     return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // // //   });

// // // // // // //   if (isLoading) {
// // // // // // //     return (
// // // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // // // //         <div className="text-center">
// // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // // // //       <style jsx global>{`
// // // // // // //         body {
// // // // // // //           font-family: ${poppins.style.fontFamily};
// // // // // // //         }
        
// // // // // // //         /* Custom scrollbar styles */
// // // // // // //         .custom-scrollbar::-webkit-scrollbar {
// // // // // // //           width: 8px;
// // // // // // //           height: 8px;
// // // // // // //         }
        
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // // // // //           background: rgba(31, 41, 55, 0.5);
// // // // // // //           border-radius: 4px;
// // // // // // //         }
        
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // // // // //           background: rgba(239, 68, 68, 0.7);
// // // // // // //           border-radius: 4px;
// // // // // // //         }
        
// // // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // // // // //           background: rgba(239, 68, 68, 0.9);
// // // // // // //         }
// // // // // // //       `}</style>

// // // // // // //       {/* Header */}
// // // // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // //           <div className="flex items-center">
// // // // // // //             <Link 
// // // // // // //               href="/dashboard"
// // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // // //             >
// // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // //               </svg>
// // // // // // //             </Link>
// // // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // // //               Attendance Records
// // // // // // //             </h1>
// // // // // // //           </div>

// // // // // // //           <button
// // // // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // // //             aria-label="Filter attendance"
// // // // // // //           >
// // // // // // //             <span className="flex items-center justify-center">
// // // // // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // // // // //               <span className="font-medium">Filter View</span>
// // // // // // //             </span>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Search Bar */}
// // // // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // // // //           <div className="relative">
// // // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // //               <Search
// // // // // // //                 className={`h-5 w-5 ${
// // // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // // //                 }`}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // // // //               <select
// // // // // // //                 value={searchCategory}
// // // // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // // // //               >
// // // // // // //                 <option value="all">All</option>
// // // // // // //                 <option value="member">Member</option>
// // // // // // //                 <option value="email">Email</option>
// // // // // // //                 <option value="status">Status</option>
// // // // // // //                 <option value="tracking">Tracking ID</option>
// // // // // // //                 <option value="type">Work Type</option>
// // // // // // //               </select>
// // // // // // //             </div>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // // // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // // // // //               value={searchTerm}
// // // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Clear Filters Button */}
// // // // // // //       {hasActiveFilters() && (
// // // // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // // // //           <button
// // // // // // //             onClick={resetFilters}
// // // // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // // // //             aria-label="Clear all filters"
// // // // // // //           >
// // // // // // //             Clear Filters
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // // // // //         {filteredData.length === 0 ? (
// // // // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // // // //             <svg
// // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // // // //               fill="none"
// // // // // // //               viewBox="0 0 24 24"
// // // // // // //               stroke="currentColor"
// // // // // // //             >
// // // // // // //               <path
// // // // // // //                 strokeLinecap="round"
// // // // // // //                 strokeLinejoin="round"
// // // // // // //                 strokeWidth={1}
// // // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // //               />
// // // // // // //             </svg>
// // // // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // // //             {hasActiveFilters() && (
// // // // // // //               <button
// // // // // // //                 onClick={resetFilters}
// // // // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // //               >
// // // // // // //                 Clear Filters
// // // // // // //               </button>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 ${poppins.className}`}>
// // // // // // //             {/* Table container with fixed height and scrolling */}
// // // // // // //             <div className="h-[600px] overflow-y-auto custom-scrollbar">
// // // // // // //               {/* Sticky table header wrapper */}
// // // // // // //               <div className="sticky top-0 z-10 bg-gray-900/50 border-b border-gray-800">
// // // // // // //                 <table className={`w-full ${poppins.className}`}>
// // // // // // //                   <thead>
// // // // // // //                     <tr>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Member
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Email
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Date
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Time
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Hours
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Type
// // // // // // //                       </th>
// // // // // // //                       <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // // //                         Status
// // // // // // //                       </th>
// // // // // // //                     </tr>
// // // // // // //                   </thead>
// // // // // // //                 </table>
// // // // // // //               </div>
              
// // // // // // //               {/* Table body with horizontal scrolling if needed */}
// // // // // // //               <div className="overflow-x-auto custom-scrollbar">
// // // // // // //                 <table className={`w-full ${poppins.className}`}>
// // // // // // //                   <tbody className="divide-y divide-gray-800">
// // // // // // //                     {filteredData.map((record) => (
// // // // // // //                       <tr
// // // // // // //                         key={record.id}
// // // // // // //                         className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // // // // //                       >
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // //                           <div className="flex items-center gap-3">
// // // // // // //                             <ProfileIcon name={record.memberName} photo={record.memberPhoto} />
// // // // // // //                             <div>
// // // // // // //                               {record.memberName}
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // //                           {record.email}
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // //                           {formatDate(record.date)}
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // //                           {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // // //                           {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // // //                           {record.type}
// // // // // // //                         </td>
// // // // // // //                         <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // // // //                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // // //                             record.status.includes("Present")
// // // // // // //                               ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // // //                               : record.status === "Late"
// // // // // // //                               ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // // //                               : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // // //                           }`}>
// // // // // // //                             {record.status}
// // // // // // //                           </span>
// // // // // // //                         </td>
// // // // // // //                       </tr>
// // // // // // //                     ))}
// // // // // // //                   </tbody>
// // // // // // //                 </table>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Filter Modal */}
// // // // // // //       {showFilterModal && (
// // // // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar ${poppins.className}`}>
// // // // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // // // // //               <button 
// // // // // // //                 onClick={() => setShowFilterModal(false)}
// // // // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // // // //                 aria-label="Close filter modal"
// // // // // // //               >
// // // // // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             {/* Filter Modal Content */}
// // // // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // // // //               {/* Status Filter */}
// // // // // // //               <div>
// // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                   Attendance Status
// // // // // // //                 </label>
// // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // //                   <button
// // // // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // //                       filters.status === ""
// // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // //                     } ${poppins.className}`}
// // // // // // //                   >
// // // // // // //                     All Statuses
// // // // // // //                   </button>
// // // // // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // // // // //                     <button
// // // // // // //                       key={status}
// // // // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // //                         filters.status === status
// // // // // // //                           ? status === "Present"
// // // // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // // // //                             : status === "Late"
// // // // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // //                       } ${poppins.className}`}
// // // // // // //                     >
// // // // // // //                       {status}
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Work Type Filter */}
// // // // // // //               <div>
// // // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                   Work Type
// // // // // // //                 </label>
// // // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // // //                   <button
// // // // // // //                     onClick={() => handleFilterChange("type", "")}
// // // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // //                       filters.type === ""
// // // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // //                     } ${poppins.className}`}
// // // // // // //                   >
// // // // // // //                     All Types
// // // // // // //                   </button>
// // // // // // //                   {["Office", "Remote", "Hybrid"].map((type) => (
// // // // // // //                     <button
// // // // // // //                       key={type}
// // // // // // //                       onClick={() => handleFilterChange("type", type)}
// // // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // // //                         filters.type === type
// // // // // // //                           ? "bg-blue-500/20 border-blue-500 text-white"
// // // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // // //                       } ${poppins.className}`}
// // // // // // //                     >
// // // // // // //                       {type}
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Date Range Filters */}
// // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // //                 {/* Date From */}
// // // // // // //                 <div>
// // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                     Date From
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="date"
// // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // //                     value={filters.dateFrom}
// // // // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 {/* Date To */}
// // // // // // //                 <div>
// // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                     Date To
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="date"
// // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // //                     value={filters.dateTo}
// // // // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Hours Range Filter */}
// // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // //                 {/* Hours From */}
// // // // // // //                 <div>
// // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                     Min Hours
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     placeholder="Minimum hours"
// // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // //                     value={filters.hoursFrom}
// // // // // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // // // //                     min="0"
// // // // // // //                     step="0.1"
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 {/* Hours To */}
// // // // // // //                 <div>
// // // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // // //                     Max Hours
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     placeholder="Maximum hours"
// // // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // // //                     value={filters.hoursTo}
// // // // // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // // // //                     min="0"
// // // // // // //                     step="0.1"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Action Buttons */}
// // // // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // // // //                 <button
// // // // // // //                   onClick={resetFilters}
// // // // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // //                 >
// // // // // // //                   Reset All
// // // // // // //                 </button>
// // // // // // //                 <button
// // // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // // //                 >
// // // // // // //                   Apply Filters
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AttendanceTable;
// // // // // // "use client";

// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // // // // // import Link from "next/link";
// // // // // // import { Poppins } from 'next/font/google';

// // // // // // // Initialize Poppins font
// // // // // // const poppins = Poppins({
// // // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // // //   subsets: ['latin'],
// // // // // //   display: 'swap',
// // // // // // });

// // // // // // // Profile Icon Component - Updated to match TrainerManagement
// // // // // // const ProfileIcon = ({ name, photo, id }) => {
// // // // // //   const fileInputRef = useRef(null);
// // // // // //   const [localPhoto, setLocalPhoto] = useState(photo);

// // // // // //   const initials = name 
// // // // // //     ? name.split(' ')
// // // // // //         .map(n => n[0])
// // // // // //         .slice(0, 2)
// // // // // //         .join('')
// // // // // //         .toUpperCase()
// // // // // //     : '';

// // // // // //   const handlePhotoUpload = () => {
// // // // // //     if (fileInputRef.current) {
// // // // // //       fileInputRef.current.click();
// // // // // //     }
// // // // // //   };

// // // // // //   const onPhotoSelected = (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (!file) return;

// // // // // //     const photoURL = URL.createObjectURL(file);
// // // // // //     setLocalPhoto(photoURL);
// // // // // //     e.target.value = null;
// // // // // //   };

// // // // // //   if (localPhoto) {
// // // // // //     return (
// // // // // //       <div 
// // // // // //         className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50 trainer-photo group"
// // // // // //         onClick={handlePhotoUpload}
// // // // // //       >
// // // // // //         <img 
// // // // // //           src={localPhoto} 
// // // // // //           alt="Profile" 
// // // // // //           className="w-full h-full object-cover"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           ref={fileInputRef}
// // // // // //           onChange={onPhotoSelected}
// // // // // //           accept="image/*"
// // // // // //           className="hidden"
// // // // // //         />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <button
// // // // // //       onClick={handlePhotoUpload}
// // // // // //       className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-800 border border-red-500/50 trainer-photo hover:bg-gray-700/60 p-2 transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
// // // // // //     >
// // // // // //       <span className="relative text-xs font-medium text-red-500">{initials}</span>
// // // // // //       <input
// // // // // //         type="file"
// // // // // //         ref={fileInputRef}
// // // // // //         onChange={onPhotoSelected}
// // // // // //         accept="image/*"
// // // // // //         className="hidden"
// // // // // //       />
// // // // // //     </button>
// // // // // //   );
// // // // // // };

// // // // // // // Main Attendance Component
// // // // // // const AttendanceTable = () => {
// // // // // //   const router = useRouter();
// // // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // // //   const [searchCategory, setSearchCategory] = useState("all");
// // // // // //   const tableContainerRef = useRef(null);

// // // // // //   // Filter states
// // // // // //   const [filters, setFilters] = useState({
// // // // // //     status: "",
// // // // // //     dateFrom: "",
// // // // // //     dateTo: "",
// // // // // //     hoursFrom: "",
// // // // // //     hoursTo: ""
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       setIsLoading(true);
// // // // // //       try {
// // // // // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // // // // //         const data = await response.json();
        
// // // // // //         // Transform the backend data to match frontend structure
// // // // // //         const transformedData = data.attendance.map(record => {
// // // // // //           // Calculate hours worked if both login and logout times exist
// // // // // //           let hours = 0;
// // // // // //           let status = "Absent";
          
// // // // // //           if (record.loginTime && record.logoutTime) {
// // // // // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // // // // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // // // // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60); // Convert ms to hours
            
// // // // // //             // Determine status based on login time (assuming 9AM is standard start time)
// // // // // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // // // // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // // // // //           } else if (record.loginTime) {
// // // // // //             status = "Present (No logout)";
// // // // // //           }
          
// // // // // //           return {
// // // // // //             id: record._id,
// // // // // //             memberName: record.member?.name || "Unknown Member",
// // // // // //             date: record.date,
// // // // // //             checkIn: record.loginTime || "",
// // // // // //             checkOut: record.logoutTime || "",
// // // // // //             hours: hours,
// // // // // //             status: status,
// // // // // //             trackingId: record.membershipID,
// // // // // //             memberPhoto: record.member_photo
// // // // // //           };
// // // // // //         });
        
// // // // // //         setAttendanceData(transformedData);
// // // // // //         setIsLoading(false);
// // // // // //       } catch (error) {
// // // // // //         console.error("Error fetching data:", error);
// // // // // //         setIsLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchData();
// // // // // //   }, []);

// // // // // //   const formatDate = (dateString) => {
// // // // // //     if (!dateString) return "N/A";
// // // // // //     const date = new Date(dateString);
// // // // // //     return date.toLocaleDateString('en-US', {
// // // // // //       year: 'numeric',
// // // // // //       month: 'short',
// // // // // //       day: 'numeric'
// // // // // //     });
// // // // // //   };

// // // // // //   // Check if any filters are applied
// // // // // //   const hasActiveFilters = () => {
// // // // // //     return (
// // // // // //       filters.status !== "" ||
// // // // // //       filters.dateFrom !== "" ||
// // // // // //       filters.dateTo !== "" ||
// // // // // //       filters.hoursFrom !== "" ||
// // // // // //       filters.hoursTo !== "" ||
// // // // // //       searchTerm !== ""
// // // // // //     );
// // // // // //   };

// // // // // //   // Handle filter changes
// // // // // //   const handleFilterChange = (field, value) => {
// // // // // //     setFilters(prev => ({
// // // // // //       ...prev,
// // // // // //       [field]: value
// // // // // //     }));
// // // // // //   };

// // // // // //   // Reset all filters
// // // // // //   const resetFilters = () => {
// // // // // //     setFilters({
// // // // // //       status: "",
// // // // // //       dateFrom: "",
// // // // // //       dateTo: "",
// // // // // //       hoursFrom: "",
// // // // // //       hoursTo: ""
// // // // // //     });
// // // // // //     setSearchTerm("");
// // // // // //     setSearchCategory("all");
// // // // // //   };

// // // // // //   const filteredData = attendanceData.filter(record => {
// // // // // //     // Search filter
// // // // // //     let matchesSearch = false;
// // // // // //     if (searchTerm === "") {
// // // // // //       matchesSearch = true;
// // // // // //     } else {
// // // // // //       const term = searchTerm.toLowerCase();
// // // // // //       switch (searchCategory) {
// // // // // //         case "member":
// // // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // // //           break;
// // // // // //         case "tracking":
// // // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // // //           break;
// // // // // //         default:
// // // // // //           matchesSearch = (
// // // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// // // // // //           );
// // // // // //       }
// // // // // //     }
    
// // // // // //     // Status filter
// // // // // //     const matchesStatus = filters.status === "" || 
// // // // // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // // // // //       (filters.status === "Late" && record.status === "Late") ||
// // // // // //       (filters.status === "Absent" && record.status === "Absent");
    
// // // // // //     // Date range filter
// // // // // //     const recordDate = new Date(record.date);
// // // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // // //     // Hours range filter
// // // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // // //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // // //   });

// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // // //         <div className="text-center">
// // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // // //       <style jsx global>{`
// // // // // //         body {
// // // // // //           font-family: ${poppins.style.fontFamily};
// // // // // //         }
// // // // // //         .trainer-photo {
// // // // // //           transition: all 0.3s ease;
// // // // // //           transform-origin: center center;
// // // // // //           position: relative;
// // // // // //         }
        
// // // // // //         .trainer-photo:hover {
// // // // // //           transform: scale(3);
// // // // // //           z-index: 100;
// // // // // //           position: relative;
// // // // // //           box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
// // // // // //         }

// // // // // //         /* Custom scrollbar styles - Matching TrainerManagement */
// // // // // //         .custom-scrollbar {
// // // // // //           scrollbar-width: thin;
// // // // // //           scrollbar-color: #4b5563 #1f2937;
// // // // // //         }
// // // // // //         .custom-scrollbar::-webkit-scrollbar {
// // // // // //           width: 8px;
// // // // // //           height: 8px;
// // // // // //         }
// // // // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // // // //           background: #1f2937;
// // // // // //           border-radius: 10px;
// // // // // //         }
// // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // // // //           background-color: #4b5563;
// // // // // //           border-radius: 10px;
// // // // // //           border: 2px solid #1f2937;
// // // // // //         }
// // // // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // // // //           background-color: #6b7280;
// // // // // //         }

// // // // // //         button:focus, 
// // // // // //         input:focus,
// // // // // //         select:focus,
// // // // // //         a:focus,
// // // // // //         [tabindex]:focus,
// // // // // //         [role="button"]:focus {
// // // // // //           outline: none !important;
// // // // // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // // //         }

// // // // // //         @media (hover: none) and (pointer: coarse) {
// // // // // //           button:active, 
// // // // // //           input:active,
// // // // // //           select:active,
// // // // // //           a:active,
// // // // // //           [tabindex]:active,
// // // // // //           [role="button"]:active {
// // // // // //             outline: none !important;
// // // // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       {/* Header */}
// // // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // //           <div className="flex items-center">
// // // // // //             <Link 
// // // // // //               href="/dashboard"
// // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // // //             >
// // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // //               </svg>
// // // // // //             </Link>
// // // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // // //               Attendance Records
// // // // // //             </h1>
// // // // // //           </div>

// // // // // //           <button
// // // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // // //             aria-label="Filter attendance"
// // // // // //           >
// // // // // //             <span className="flex items-center justify-center">
// // // // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // // // //               <span className="font-medium">Filter View</span>
// // // // // //             </span>
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Search Bar */}
// // // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // // //           <div className="relative">
// // // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // //               <Search
// // // // // //                 className={`h-5 w-5 ${
// // // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // // //                 }`}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // // //               <select
// // // // // //                 value={searchCategory}
// // // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // // //               >
// // // // // //                 <option value="all">All</option>
// // // // // //                 <option value="member">Member</option>
// // // // // //                 <option value="tracking">Membership ID</option>
// // // // // //               </select>
// // // // // //             </div>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // // // //               value={searchTerm}
// // // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Clear Filters Button */}
// // // // // //       {hasActiveFilters() && (
// // // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // // //           <button
// // // // // //             onClick={resetFilters}
// // // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // // //             aria-label="Clear all filters"
// // // // // //           >
// // // // // //             Clear Filters
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Main Content */}
// // // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // // // //         {filteredData.length === 0 ? (
// // // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // // //             <svg
// // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // // //               fill="none"
// // // // // //               viewBox="0 0 24 24"
// // // // // //               stroke="currentColor"
// // // // // //             >
// // // // // //               <path
// // // // // //                 strokeLinecap="round"
// // // // // //                 strokeLinejoin="round"
// // // // // //                 strokeWidth={1}
// // // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // //               />
// // // // // //             </svg>
// // // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // // //             {hasActiveFilters() && (
// // // // // //               <button
// // // // // //                 onClick={resetFilters}
// // // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // //               >
// // // // // //                 Clear Filters
// // // // // //               </button>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // //             <div 
// // // // // //               ref={tableContainerRef}
// // // // // //               className="custom-scrollbar"
// // // // // //               style={{
// // // // // //                 maxHeight: 'calc(100vh - 220px)',
// // // // // //                 overflowY: 'auto',
// // // // // //                 overflowX: 'auto'
// // // // // //               }}
// // // // // //             >
// // // // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // // // // //                 <thead className="bg-gray-900/50 sticky top-0 z-10">
// // // // // //                   <tr>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Photo
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Member
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Membership ID
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Date
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Time
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Hours
// // // // // //                     </th>
// // // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // // //                       Status
// // // // // //                     </th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // //                   {filteredData.map((record) => (
// // // // // //                     <tr
// // // // // //                       key={record.id}
// // // // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // // // //                     >
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // // //                         <div className="flex justify-center">
// // // // // //                           <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // // // // //                         </div>
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // //                         {record.memberName}
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // //                         {record.trackingId || "N/A"}
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // //                         {formatDate(record.date)}
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // // //                         {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // // // // //                       </td>
// // // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // // //                           record.status.includes("Present")
// // // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // // //                             : record.status === "Late"
// // // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // // //                         }`}>
// // // // // //                           {record.status}
// // // // // //                         </span>
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   ))}
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* Filter Modal */}
// // // // // //       {showFilterModal && (
// // // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // // // //               <button 
// // // // // //                 onClick={() => setShowFilterModal(false)}
// // // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // // //                 aria-label="Close filter modal"
// // // // // //               >
// // // // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             {/* Filter Modal Content */}
// // // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // // //               {/* Status Filter */}
// // // // // //               <div>
// // // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // //                   Attendance Status
// // // // // //                 </label>
// // // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // // //                   <button
// // // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // //                       filters.status === ""
// // // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // //                     } ${poppins.className}`}
// // // // // //                   >
// // // // // //                     All Statuses
// // // // // //                   </button>
// // // // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // // // //                     <button
// // // // // //                       key={status}
// // // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // // //                         filters.status === status
// // // // // //                           ? status === "Present"
// // // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // // //                             : status === "Late"
// // // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // // //                       } ${poppins.className}`}
// // // // // //                     >
// // // // // //                       {status}
// // // // // //                     </button>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Date Range Filters */}
// // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // //                 {/* Date From */}
// // // // // //                 <div>
// // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // //                     Date From
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="date"
// // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // //                     value={filters.dateFrom}
// // // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 {/* Date To */}
// // // // // //                 <div>
// // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // //                     Date To
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="date"
// // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // //                     value={filters.dateTo}
// // // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Hours Range Filter */}
// // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // //                 {/* Hours From */}
// // // // // //                 <div>
// // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // //                     Min Hours
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     placeholder="Minimum hours"
// // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // //                     value={filters.hoursFrom}
// // // // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // // //                     min="0"
// // // // // //                     step="0.1"
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 {/* Hours To */}
// // // // // //                 <div>
// // // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // // //                     Max Hours
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     placeholder="Maximum hours"
// // // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // // //                     value={filters.hoursTo}
// // // // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // // //                     min="0"
// // // // // //                     step="0.1"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Action Buttons */}
// // // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // // //                 <button
// // // // // //                   onClick={resetFilters}
// // // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // //                 >
// // // // // //                   Reset All
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={() => setShowFilterModal(false)}
// // // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // // //                 >
// // // // // //                   Apply Filters
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AttendanceTable;
// // // // // "use client";

// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // // // // import Link from "next/link";
// // // // // import { Poppins } from 'next/font/google';

// // // // // // Initialize Poppins font
// // // // // const poppins = Poppins({
// // // // //   weight: ['300', '400', '500', '600', '700'],
// // // // //   subsets: ['latin'],
// // // // //   display: 'swap',
// // // // // });

// // // // // // Updated ProfileIcon Component
// // // // // const ProfileIcon = ({ name, photo, id }) => {
// // // // //   const fileInputRef = useRef(null);
// // // // //   const [localPhoto, setLocalPhoto] = useState(photo);
// // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // //   const initials = name 
// // // // //     ? name.split(' ')
// // // // //         .map(n => n[0])
// // // // //         .slice(0, 2)
// // // // //         .join('')
// // // // //         .toUpperCase()
// // // // //     : '';

// // // // //   const handlePhotoUpload = () => {
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.click();
// // // // //     }
// // // // //   };

// // // // //   const onPhotoSelected = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (!file) return;

// // // // //     const photoURL = URL.createObjectURL(file);
// // // // //     setLocalPhoto(photoURL);
// // // // //     e.target.value = null;
// // // // //   };

// // // // //   return (
// // // // //     <div 
// // // // //       className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
// // // // //       onClick={handlePhotoUpload}
// // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // //     >
// // // // //       {localPhoto ? (
// // // // //         <img 
// // // // //           src={localPhoto} 
// // // // //           alt="Profile" 
// // // // //           className={`w-full h-full object-cover transition-all duration-300 ${
// // // // //             isHovered ? 'scale-150' : 'scale-100'
// // // // //           }`}
// // // // //         />
// // // // //       ) : (
// // // // //         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
// // // // //           isHovered ? 'scale-150' : 'scale-100'
// // // // //         }`}>
// // // // //           <span className="text-xs font-medium text-red-500">{initials}</span>
// // // // //         </div>
// // // // //       )}
// // // // //       <input
// // // // //         type="file"
// // // // //         ref={fileInputRef}
// // // // //         onChange={onPhotoSelected}
// // // // //         accept="image/*"
// // // // //         className="hidden"
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Main Attendance Component
// // // // // const AttendanceTable = () => {
// // // // //   const router = useRouter();
// // // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // // //   const [searchCategory, setSearchCategory] = useState("all");
// // // // //   const tableContainerRef = useRef(null);

// // // // //   // Filter states
// // // // //   const [filters, setFilters] = useState({
// // // // //     status: "",
// // // // //     dateFrom: "",
// // // // //     dateTo: "",
// // // // //     hoursFrom: "",
// // // // //     hoursTo: ""
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       setIsLoading(true);
// // // // //       try {
// // // // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // // // //         const data = await response.json();
        
// // // // //         // Transform the backend data to match frontend structure
// // // // //         const transformedData = data.attendance.map(record => {
// // // // //           // Calculate hours worked if both login and logout times exist
// // // // //           let hours = 0;
// // // // //           let status = "Absent";
          
// // // // //           if (record.loginTime && record.logoutTime) {
// // // // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // // // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // // // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60); // Convert ms to hours
            
// // // // //             // Determine status based on login time (assuming 9AM is standard start time)
// // // // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // // // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // // // //           } else if (record.loginTime) {
// // // // //             status = "Present (No logout)";
// // // // //           }
          
// // // // //           return {
// // // // //             id: record._id,
// // // // //             memberName: record.member?.name || "Unknown Member",
// // // // //             date: record.date,
// // // // //             checkIn: record.loginTime || "",
// // // // //             checkOut: record.logoutTime || "",
// // // // //             hours: hours,
// // // // //             status: status,
// // // // //             trackingId: record.membershipID,
// // // // //             memberPhoto: record.member_photo
// // // // //           };
// // // // //         });
        
// // // // //         setAttendanceData(transformedData);
// // // // //         setIsLoading(false);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching data:", error);
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchData();
// // // // //   }, []);

// // // // //   const formatDate = (dateString) => {
// // // // //     if (!dateString) return "N/A";
// // // // //     const date = new Date(dateString);
// // // // //     return date.toLocaleDateString('en-US', {
// // // // //       year: 'numeric',
// // // // //       month: 'short',
// // // // //       day: 'numeric'
// // // // //     });
// // // // //   };

// // // // //   // Check if any filters are applied
// // // // //   const hasActiveFilters = () => {
// // // // //     return (
// // // // //       filters.status !== "" ||
// // // // //       filters.dateFrom !== "" ||
// // // // //       filters.dateTo !== "" ||
// // // // //       filters.hoursFrom !== "" ||
// // // // //       filters.hoursTo !== "" ||
// // // // //       searchTerm !== ""
// // // // //     );
// // // // //   };

// // // // //   // Handle filter changes
// // // // //   const handleFilterChange = (field, value) => {
// // // // //     setFilters(prev => ({
// // // // //       ...prev,
// // // // //       [field]: value
// // // // //     }));
// // // // //   };

// // // // //   // Reset all filters
// // // // //   const resetFilters = () => {
// // // // //     setFilters({
// // // // //       status: "",
// // // // //       dateFrom: "",
// // // // //       dateTo: "",
// // // // //       hoursFrom: "",
// // // // //       hoursTo: ""
// // // // //     });
// // // // //     setSearchTerm("");
// // // // //     setSearchCategory("all");
// // // // //   };

// // // // //   const filteredData = attendanceData.filter(record => {
// // // // //     // Search filter
// // // // //     let matchesSearch = false;
// // // // //     if (searchTerm === "") {
// // // // //       matchesSearch = true;
// // // // //     } else {
// // // // //       const term = searchTerm.toLowerCase();
// // // // //       switch (searchCategory) {
// // // // //         case "member":
// // // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // // //           break;
// // // // //         case "tracking":
// // // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // // //           break;
// // // // //         default:
// // // // //           matchesSearch = (
// // // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// // // // //           );
// // // // //       }
// // // // //     }
    
// // // // //     // Status filter
// // // // //     const matchesStatus = filters.status === "" || 
// // // // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // // // //       (filters.status === "Late" && record.status === "Late") ||
// // // // //       (filters.status === "Absent" && record.status === "Absent");
    
// // // // //     // Date range filter
// // // // //     const recordDate = new Date(record.date);
// // // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // // //     // Hours range filter
// // // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // // //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // // //   });

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // // //         <div className="text-center">
// // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // // //       <style jsx global>{`
// // // // //         body {
// // // // //           font-family: ${poppins.style.fontFamily};
// // // // //         }
        
// // // // //         /* Custom scrollbar styles */
// // // // //         .custom-scrollbar {
// // // // //           scrollbar-width: thin;
// // // // //           scrollbar-color: #4b5563 #1f2937;
// // // // //         }
// // // // //         .custom-scrollbar::-webkit-scrollbar {
// // // // //           width: 8px;
// // // // //           height: 8px;
// // // // //         }
// // // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // // //           background: #1f2937;
// // // // //           border-radius: 10px;
// // // // //         }
// // // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // // //           background-color: #4b5563;
// // // // //           border-radius: 10px;
// // // // //           border: 2px solid #1f2937;
// // // // //         }
// // // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // // //           background-color: #6b7280;
// // // // //         }

// // // // //         button:focus, 
// // // // //         input:focus,
// // // // //         select:focus,
// // // // //         a:focus,
// // // // //         [tabindex]:focus,
// // // // //         [role="button"]:focus {
// // // // //           outline: none !important;
// // // // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // //         }

// // // // //         @media (hover: none) and (pointer: coarse) {
// // // // //           button:active, 
// // // // //           input:active,
// // // // //           select:active,
// // // // //           a:active,
// // // // //           [tabindex]:active,
// // // // //           [role="button"]:active {
// // // // //             outline: none !important;
// // // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // //           }
// // // // //         }
// // // // //       `}</style>

// // // // //       {/* Header */}
// // // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // //           <div className="flex items-center">
// // // // //             <Link 
// // // // //               href="/dashboard"
// // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // // //             >
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // //               </svg>
// // // // //             </Link>
// // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // //               Attendance Records
// // // // //             </h1>
// // // // //           </div>

// // // // //           <button
// // // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // // //             aria-label="Filter attendance"
// // // // //           >
// // // // //             <span className="flex items-center justify-center">
// // // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // // //               <span className="font-medium">Filter View</span>
// // // // //             </span>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Search Bar */}
// // // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // // //           <div className="relative">
// // // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // //               <Search
// // // // //                 className={`h-5 w-5 ${
// // // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // // //                 }`}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // // //               <select
// // // // //                 value={searchCategory}
// // // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // // //               >
// // // // //                 <option value="all">All</option>
// // // // //                 <option value="member">Member</option>
// // // // //                 <option value="tracking">Membership ID</option>
// // // // //               </select>
// // // // //             </div>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // // //               value={searchTerm}
// // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // //               onFocus={() => setSearchFocused(true)}
// // // // //               onBlur={() => setSearchFocused(false)}
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Clear Filters Button */}
// // // // //       {hasActiveFilters() && (
// // // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // // //           <button
// // // // //             onClick={resetFilters}
// // // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // //             aria-label="Clear all filters"
// // // // //           >
// // // // //             Clear Filters
// // // // //           </button>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Main Content */}
// // // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // // //         {filteredData.length === 0 ? (
// // // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // // //             <svg
// // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // // //               fill="none"
// // // // //               viewBox="0 0 24 24"
// // // // //               stroke="currentColor"
// // // // //             >
// // // // //               <path
// // // // //                 strokeLinecap="round"
// // // // //                 strokeLinejoin="round"
// // // // //                 strokeWidth={1}
// // // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // //               />
// // // // //             </svg>
// // // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // // //             {hasActiveFilters() && (
// // // // //               <button
// // // // //                 onClick={resetFilters}
// // // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // //               >
// // // // //                 Clear Filters
// // // // //               </button>
// // // // //             )}
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // //             <div 
// // // // //   ref={tableContainerRef}
// // // // //   className="custom-scrollbar overflow-auto"
// // // // //   style={{
// // // // //     maxHeight: 'calc(100vh - 220px)',
// // // // //     minHeight: '200px',
// // // // //     display: 'block' // Ensure it's a block element
// // // // //   }}
// // // // // >
// // // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // // // //                 <thead className="bg-gray-900/50 sticky top-0 z-10">
// // // // //                   <tr>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Photo
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Member
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Membership ID
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Date
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Time
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Hours
// // // // //                     </th>
// // // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // // //                       Status
// // // // //                     </th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody className="divide-y divide-gray-800">
// // // // //                   {filteredData.map((record) => (
// // // // //                     <tr
// // // // //                       key={record.id}
// // // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // // //                     >
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // //                         <div className="flex justify-center">
// // // // //                           <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // // // //                         </div>
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // //                         {record.memberName}
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // //                         {record.trackingId || "N/A"}
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // //                         {formatDate(record.date)}
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // // //                         {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // // // //                       </td>
// // // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // // //                           record.status.includes("Present")
// // // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // // //                             : record.status === "Late"
// // // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // // //                         }`}>
// // // // //                           {record.status}
// // // // //                         </span>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Filter Modal */}
// // // // //       {showFilterModal && (
// // // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // // //               <button 
// // // // //                 onClick={() => setShowFilterModal(false)}
// // // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // // //                 aria-label="Close filter modal"
// // // // //               >
// // // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* Filter Modal Content */}
// // // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // // //               {/* Status Filter */}
// // // // //               <div>
// // // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // //                   Attendance Status
// // // // //                 </label>
// // // // //                 <div className="grid grid-cols-3 gap-3">
// // // // //                   <button
// // // // //                     onClick={() => handleFilterChange("status", "")}
// // // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // //                       filters.status === ""
// // // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // //                     } ${poppins.className}`}
// // // // //                   >
// // // // //                     All Statuses
// // // // //                   </button>
// // // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // // //                     <button
// // // // //                       key={status}
// // // // //                       onClick={() => handleFilterChange("status", status)}
// // // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // // //                         filters.status === status
// // // // //                           ? status === "Present"
// // // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // // //                             : status === "Late"
// // // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // // //                       } ${poppins.className}`}
// // // // //                     >
// // // // //                       {status}
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Date Range Filters */}
// // // // //               <div className="grid grid-cols-2 gap-6">
// // // // //                 {/* Date From */}
// // // // //                 <div>
// // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // //                     Date From
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // //                     value={filters.dateFrom}
// // // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // // //                   />
// // // // //                 </div>

// // // // //                 {/* Date To */}
// // // // //                 <div>
// // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // //                     Date To
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="date"
// // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // //                     value={filters.dateTo}
// // // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Hours Range Filter */}
// // // // //               <div className="grid grid-cols-2 gap-6">
// // // // //                 {/* Hours From */}
// // // // //                 <div>
// // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // //                     Min Hours
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Minimum hours"
// // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // //                     value={filters.hoursFrom}
// // // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // // //                     min="0"
// // // // //                     step="0.1"
// // // // //                   />
// // // // //                 </div>

// // // // //                 {/* Hours To */}
// // // // //                 <div>
// // // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // // //                     Max Hours
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     placeholder="Maximum hours"
// // // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // // //                     value={filters.hoursTo}
// // // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // // //                     min="0"
// // // // //                     step="0.1"
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Buttons */}
// // // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // // //                 <button
// // // // //                   onClick={resetFilters}
// // // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // //                 >
// // // // //                   Reset All
// // // // //                 </button>
// // // // //                 <button
// // // // //                   onClick={() => setShowFilterModal(false)}
// // // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // // //                 >
// // // // //                   Apply Filters
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AttendanceTable;
// // // // "use client";

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // // // import Link from "next/link";
// // // // import { Poppins } from 'next/font/google';

// // // // const poppins = Poppins({
// // // //   weight: ['300', '400', '500', '600', '700'],
// // // //   subsets: ['latin'],
// // // //   display: 'swap',
// // // // });

// // // // const ProfileIcon = ({ name, photo, id }) => {
// // // //   const fileInputRef = useRef(null);
// // // //   const [localPhoto, setLocalPhoto] = useState(photo);
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   const initials = name 
// // // //     ? name.split(' ')
// // // //         .map(n => n[0])
// // // //         .slice(0, 2)
// // // //         .join('')
// // // //         .toUpperCase()
// // // //     : '';

// // // //   const handlePhotoUpload = () => {
// // // //     if (fileInputRef.current) {
// // // //       fileInputRef.current.click();
// // // //     }
// // // //   };

// // // //   const onPhotoSelected = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (!file) return;

// // // //     const photoURL = URL.createObjectURL(file);
// // // //     setLocalPhoto(photoURL);
// // // //     e.target.value = null;
// // // //   };

// // // //   return (
// // // //     <div 
// // // //       className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
// // // //       onClick={handlePhotoUpload}
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //     >
// // // //       {localPhoto ? (
// // // //         <img 
// // // //           src={localPhoto} 
// // // //           alt="Profile" 
// // // //           className={`w-full h-full object-cover transition-all duration-300 ${
// // // //             isHovered ? 'scale-150' : 'scale-100'
// // // //           }`}
// // // //         />
// // // //       ) : (
// // // //         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
// // // //           isHovered ? 'scale-150' : 'scale-100'
// // // //         }`}>
// // // //           <span className="text-xs font-medium text-red-500">{initials}</span>
// // // //         </div>
// // // //       )}
// // // //       <input
// // // //         type="file"
// // // //         ref={fileInputRef}
// // // //         onChange={onPhotoSelected}
// // // //         accept="image/*"
// // // //         className="hidden"
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // const AttendanceTable = () => {
// // // //   const router = useRouter();
// // // //   const [attendanceData, setAttendanceData] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // // //   const [searchCategory, setSearchCategory] = useState("all");
// // // //   const tableContainerRef = useRef(null);

// // // //   const [filters, setFilters] = useState({
// // // //     status: "",
// // // //     dateFrom: "",
// // // //     dateTo: "",
// // // //     hoursFrom: "",
// // // //     hoursTo: ""
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       setIsLoading(true);
// // // //       try {
// // // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // // //         const data = await response.json();
        
// // // //         const transformedData = data.attendance.map(record => {
// // // //           let hours = 0;
// // // //           let status = "Absent";
          
// // // //           if (record.loginTime && record.logoutTime) {
// // // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
// // // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // // //           } else if (record.loginTime) {
// // // //             status = "Present (No logout)";
// // // //           }
          
// // // //           return {
// // // //             id: record._id,
// // // //             memberName: record.member?.name || "Unknown Member",
// // // //             date: record.date,
// // // //             checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
// // // //             checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
// // // //             hours: hours,
// // // //             status: status.replace(/[()]/g, ''),
// // // //             trackingId: record.membershipID,
// // // //             memberPhoto: record.member_photo
// // // //           };
// // // //         });
        
// // // //         setAttendanceData(transformedData);
// // // //         setIsLoading(false);
// // // //       } catch (error) {
// // // //         console.error("Error fetching data:", error);
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, []);

// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return "N/A";
// // // //     const date = new Date(dateString);
// // // //     return date.toLocaleDateString('en-US', {
// // // //       year: 'numeric',
// // // //       month: 'short',
// // // //       day: 'numeric'
// // // //     });
// // // //   };

// // // //   const hasActiveFilters = () => {
// // // //     return (
// // // //       filters.status !== "" ||
// // // //       filters.dateFrom !== "" ||
// // // //       filters.dateTo !== "" ||
// // // //       filters.hoursFrom !== "" ||
// // // //       filters.hoursTo !== "" ||
// // // //       searchTerm !== ""
// // // //     );
// // // //   };

// // // //   const handleFilterChange = (field, value) => {
// // // //     setFilters(prev => ({
// // // //       ...prev,
// // // //       [field]: value
// // // //     }));
// // // //   };

// // // //   const resetFilters = () => {
// // // //     setFilters({
// // // //       status: "",
// // // //       dateFrom: "",
// // // //       dateTo: "",
// // // //       hoursFrom: "",
// // // //       hoursTo: ""
// // // //     });
// // // //     setSearchTerm("");
// // // //     setSearchCategory("all");
// // // //   };

// // // //   const filteredData = attendanceData.filter(record => {
// // // //     let matchesSearch = false;
// // // //     if (searchTerm === "") {
// // // //       matchesSearch = true;
// // // //     } else {
// // // //       const term = searchTerm.toLowerCase();
// // // //       switch (searchCategory) {
// // // //         case "member":
// // // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // // //           break;
// // // //         case "tracking":
// // // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // // //           break;
// // // //         default:
// // // //           matchesSearch = (
// // // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // // //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// // // //           );
// // // //       }
// // // //     }
    
// // // //     const matchesStatus = filters.status === "" || 
// // // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // // //       (filters.status === "Late" && record.status === "Late") ||
// // // //       (filters.status === "Absent" && record.status === "Absent");
    
// // // //     const recordDate = new Date(record.date);
// // // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // // //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // // //   });

// // // //   if (isLoading) {
// // // //     return (
// // // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // // //         <div className="text-center">
// // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // // //       <style jsx global>{`
// // // //         body {
// // // //           font-family: ${poppins.style.fontFamily};
// // // //         }
        
// // // //         .custom-scrollbar {
// // // //           scrollbar-width: thin;
// // // //           scrollbar-color: #4b5563 #1f2937;
// // // //         }
// // // //         .custom-scrollbar::-webkit-scrollbar {
// // // //           width: 8px;
// // // //           height: 8px;
// // // //         }
// // // //         .custom-scrollbar::-webkit-scrollbar-track {
// // // //           background: #1f2937;
// // // //           border-radius: 10px;
// // // //         }
// // // //         .custom-scrollbar::-webkit-scrollbar-thumb {
// // // //           background-color: #4b5563;
// // // //           border-radius: 10px;
// // // //           border: 2px solid #1f2937;
// // // //         }
// // // //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// // // //           background-color: #6b7280;
// // // //         }

// // // //         button:focus, 
// // // //         input:focus,
// // // //         select:focus,
// // // //         a:focus,
// // // //         [tabindex]:focus,
// // // //         [role="button"]:focus {
// // // //           outline: none !important;
// // // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // //         }
// // // //       `}</style>

// // // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // //           <div className="flex items-center">
// // // //             <Link 
// // // //               href="/dashboard"
// // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // // //             >
// // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // //               </svg>
// // // //             </Link>
// // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // //               Attendance Records
// // // //             </h1>
// // // //           </div>

// // // //           <button
// // // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // // //             aria-label="Filter attendance"
// // // //           >
// // // //             <span className="flex items-center justify-center">
// // // //               <Filter size={18} className="mr-2 text-red-500" />
// // // //               <span className="font-medium">Filter View</span>
// // // //             </span>
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // // //           <div className="relative">
// // // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // //               <Search
// // // //                 className={`h-5 w-5 ${
// // // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // // //                 }`}
// // // //               />
// // // //             </div>
// // // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // // //               <select
// // // //                 value={searchCategory}
// // // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // // //               >
// // // //                 <option value="all">All</option>
// // // //                 <option value="member">Member</option>
// // // //                 <option value="tracking">Membership ID</option>
// // // //               </select>
// // // //             </div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               onFocus={() => setSearchFocused(true)}
// // // //               onBlur={() => setSearchFocused(false)}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {hasActiveFilters() && (
// // // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // // //           <button
// // // //             onClick={resetFilters}
// // // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // //             aria-label="Clear all filters"
// // // //           >
// // // //             Clear Filters
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // // //         {filteredData.length === 0 ? (
// // // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               className="h-20 w-20 mb-6 text-gray-600"
// // // //               fill="none"
// // // //               viewBox="0 0 24 24"
// // // //               stroke="currentColor"
// // // //             >
// // // //               <path
// // // //                 strokeLinecap="round"
// // // //                 strokeLinejoin="round"
// // // //                 strokeWidth={1}
// // // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // // //               />
// // // //             </svg>
// // // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // // //             {hasActiveFilters() && (
// // // //               <button
// // // //                 onClick={resetFilters}
// // // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // //               >
// // // //                 Clear Filters
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         ) : (
// // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 h-full">
// // // //             <div 
// // // //               ref={tableContainerRef}
// // // //               className="custom-scrollbar overflow-auto"
// // // //               style={{
// // // //                 maxHeight: 'calc(100vh - 220px)',
// // // //                 minHeight: '300px',
// // // //                 display: 'block'
// // // //               }}
// // // //             >
// // // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`} style={{ minWidth: 'max-content' }}>
// // // //                 <thead className="bg-gray-900/50 sticky top-0 z-10">
// // // //                   <tr>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Photo
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Member
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Membership ID
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Date
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Time
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Hours
// // // //                     </th>
// // // //                     <th className={`py-3 px-4 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // // //                       Status
// // // //                     </th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody className="divide-y divide-gray-800">
// // // //                   {filteredData.map((record) => (
// // // //                     <tr
// // // //                       key={record.id}
// // // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // // //                     >
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // //                         <div className="flex justify-center">
// // // //                           <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // //                         {record.memberName}
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // //                         {record.trackingId || "N/A"}
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // //                         {formatDate(record.date)}
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-light text-gray-300 ${poppins.className}`}>
// // // //                         {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm font-medium text-white ${poppins.className}`}>
// // // //                         {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // // //                       </td>
// // // //                       <td className={`py-3 px-4 md:px-6 text-sm ${poppins.className}`}>
// // // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
// // // //                           record.status.includes("Present")
// // // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // // //                             : record.status === "Late"
// // // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // // //                         }`}>
// // // //                           {record.status}
// // // //                         </span>
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {showFilterModal && (
// // // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // // //               <button 
// // // //                 onClick={() => setShowFilterModal(false)}
// // // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // // //                 aria-label="Close filter modal"
// // // //               >
// // // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // // //               </button>
// // // //             </div>

// // // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // // //               <div>
// // // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // //                   Attendance Status
// // // //                 </label>
// // // //                 <div className="grid grid-cols-3 gap-3">
// // // //                   <button
// // // //                     onClick={() => handleFilterChange("status", "")}
// // // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // //                       filters.status === ""
// // // //                         ? "bg-red-500/20 border-red-500 text-white"
// // // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // //                     } ${poppins.className}`}
// // // //                   >
// // // //                     All Statuses
// // // //                   </button>
// // // //                   {["Present", "Late", "Absent"].map((status) => (
// // // //                     <button
// // // //                       key={status}
// // // //                       onClick={() => handleFilterChange("status", status)}
// // // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // // //                         filters.status === status
// // // //                           ? status === "Present"
// // // //                             ? "bg-green-500/20 border-green-500 text-white"
// // // //                             : status === "Late"
// // // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // // //                             : "bg-red-500/20 border-red-500 text-white"
// // // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // // //                       } ${poppins.className}`}
// // // //                     >
// // // //                       {status}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-2 gap-6">
// // // //                 <div>
// // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // //                     Date From
// // // //                   </label>
// // // //                   <input
// // // //                     type="date"
// // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // //                     value={filters.dateFrom}
// // // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // // //                   />
// // // //                 </div>

// // // //                 <div>
// // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // //                     Date To
// // // //                   </label>
// // // //                   <input
// // // //                     type="date"
// // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // //                     value={filters.dateTo}
// // // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-2 gap-6">
// // // //                 <div>
// // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // //                     Min Hours
// // // //                   </label>
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="Minimum hours"
// // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // //                     value={filters.hoursFrom}
// // // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // // //                     min="0"
// // // //                     step="0.1"
// // // //                   />
// // // //                 </div>

// // // //                 <div>
// // // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // // //                     Max Hours
// // // //                   </label>
// // // //                   <input
// // // //                     type="number"
// // // //                     placeholder="Maximum hours"
// // // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // // //                     value={filters.hoursTo}
// // // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // // //                     min="0"
// // // //                     step="0.1"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // // //                 <button
// // // //                   onClick={resetFilters}
// // // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // //                 >
// // // //                   Reset All
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={() => setShowFilterModal(false)}
// // // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // // //                 >
// // // //                   Apply Filters
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AttendanceTable;
// // // "use client";

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // // import Link from "next/link";
// // // import { Poppins } from 'next/font/google';

// // // const poppins = Poppins({
// // //   weight: ['300', '400', '500', '600', '700'],
// // //   subsets: ['latin'],
// // //   display: 'swap',
// // // });

// // // const ProfileIcon = ({ name, photo, id }) => {
// // //   const fileInputRef = useRef(null);
// // //   const [localPhoto, setLocalPhoto] = useState(photo);
// // //   const [isHovered, setIsHovered] = useState(false);

// // //   const initials = name 
// // //     ? name.split(' ')
// // //         .map(n => n[0])
// // //         .slice(0, 2)
// // //         .join('')
// // //         .toUpperCase()
// // //     : '';

// // //   const handlePhotoUpload = () => {
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.click();
// // //     }
// // //   };

// // //   const onPhotoSelected = (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     const photoURL = URL.createObjectURL(file);
// // //     setLocalPhoto(photoURL);
// // //     e.target.value = null;
// // //   };

// // //   return (
// // //     <div 
// // //       className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
// // //       onClick={handlePhotoUpload}
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //     >
// // //       {localPhoto ? (
// // //         <img 
// // //           src={localPhoto} 
// // //           alt="Profile" 
// // //           className={`w-full h-full object-cover transition-all duration-300 ${
// // //             isHovered ? 'scale-150' : 'scale-100'
// // //           }`}
// // //         />
// // //       ) : (
// // //         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
// // //           isHovered ? 'scale-150' : 'scale-100'
// // //         }`}>
// // //           <span className="text-xs font-medium text-red-500">{initials}</span>
// // //         </div>
// // //       )}
// // //       <input
// // //         type="file"
// // //         ref={fileInputRef}
// // //         onChange={onPhotoSelected}
// // //         accept="image/*"
// // //         className="hidden"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // const AttendanceTable = () => {
// // //   const router = useRouter();
// // //   const [attendanceData, setAttendanceData] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [searchFocused, setSearchFocused] = useState(false);
// // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // //   const [searchCategory, setSearchCategory] = useState("all");
// // //   const tableContainerRef = useRef(null);

// // //   const [filters, setFilters] = useState({
// // //     status: "",
// // //     dateFrom: "",
// // //     dateTo: "",
// // //     hoursFrom: "",
// // //     hoursTo: ""
// // //   });

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setIsLoading(true);
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // //         const data = await response.json();
        
// // //         const transformedData = data.attendance.map(record => {
// // //           let hours = 0;
// // //           let status = "Absent";
          
// // //           if (record.loginTime && record.logoutTime) {
// // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
// // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // //           } else if (record.loginTime) {
// // //             status = "Present (No logout)";
// // //           }
          
// // //           return {
// // //             id: record._id,
// // //             memberName: record.member?.name || "Unknown Member",
// // //             date: record.date,
// // //             checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
// // //             checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
// // //             hours: hours,
// // //             status: status.replace(/[()]/g, ''),
// // //             trackingId: record.membershipID,
// // //             memberPhoto: record.member_photo
// // //           };
// // //         });
        
// // //         setAttendanceData(transformedData);
// // //         setIsLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return "N/A";
// // //     const date = new Date(dateString);
// // //     return date.toLocaleDateString('en-US', {
// // //       year: 'numeric',
// // //       month: 'short',
// // //       day: 'numeric'
// // //     });
// // //   };

// // //   const hasActiveFilters = () => {
// // //     return (
// // //       filters.status !== "" ||
// // //       filters.dateFrom !== "" ||
// // //       filters.dateTo !== "" ||
// // //       filters.hoursFrom !== "" ||
// // //       filters.hoursTo !== "" ||
// // //       searchTerm !== ""
// // //     );
// // //   };

// // //   const handleFilterChange = (field, value) => {
// // //     setFilters(prev => ({
// // //       ...prev,
// // //       [field]: value
// // //     }));
// // //   };

// // //   const resetFilters = () => {
// // //     setFilters({
// // //       status: "",
// // //       dateFrom: "",
// // //       dateTo: "",
// // //       hoursFrom: "",
// // //       hoursTo: ""
// // //     });
// // //     setSearchTerm("");
// // //     setSearchCategory("all");
// // //   };

// // //   const filteredData = attendanceData.filter(record => {
// // //     let matchesSearch = false;
// // //     if (searchTerm === "") {
// // //       matchesSearch = true;
// // //     } else {
// // //       const term = searchTerm.toLowerCase();
// // //       switch (searchCategory) {
// // //         case "member":
// // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // //           break;
// // //         case "tracking":
// // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // //           break;
// // //         default:
// // //           matchesSearch = (
// // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// // //           );
// // //       }
// // //     }
    
// // //     const matchesStatus = filters.status === "" || 
// // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // //       (filters.status === "Late" && record.status === "Late") ||
// // //       (filters.status === "Absent" && record.status === "Absent");
    
// // //     const recordDate = new Date(record.date);
// // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // //   });

// // //   if (isLoading) {
// // //     return (
// // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // //         <div className="text-center">
// // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // //       <style jsx global>{`
// // //         body {
// // //           font-family: ${poppins.style.fontFamily};
// // //         }
        
// // //         /* Custom scrollbar styles */
// // //         .vertical-scroll-container {
// // //           overflow-y: auto;
// // //           overflow-x: hidden;
// // //           scrollbar-width: thin;
// // //           scrollbar-color: #4b5563 #1f2937;
// // //         }
        
// // //         .horizontal-scroll-container {
// // //           overflow-x: auto;
// // //           overflow-y: hidden;
// // //           scrollbar-width: thin;
// // //           scrollbar-color: #4b5563 #1f2937;
// // //         }
        
// // //         /* Webkit scrollbars */
// // //         .vertical-scroll-container::-webkit-scrollbar,
// // //         .horizontal-scroll-container::-webkit-scrollbar {
// // //           height: 8px;
// // //           width: 8px;
// // //         }
        
// // //         .vertical-scroll-container::-webkit-scrollbar-track,
// // //         .horizontal-scroll-container::-webkit-scrollbar-track {
// // //           background: #1f2937;
// // //         }
        
// // //         .vertical-scroll-container::-webkit-scrollbar-thumb {
// // //           background-color: #4b5563;
// // //           border-radius: 10px;
// // //         }
        
// // //         .horizontal-scroll-container::-webkit-scrollbar-thumb {
// // //           background-color: #4b5563;
// // //           border-radius: 10px;
// // //         }
        
// // //         .vertical-scroll-container::-webkit-scrollbar-thumb:hover,
// // //         .horizontal-scroll-container::-webkit-scrollbar-thumb:hover {
// // //           background-color: #6b7280;
// // //         }

// // //         /* Focus styles */
// // //         button:focus, 
// // //         input:focus,
// // //         select:focus,
// // //         a:focus,
// // //         [tabindex]:focus,
// // //         [role="button"]:focus {
// // //           outline: none !important;
// // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // //         }

// // //         /* Mobile optimizations */
// // //         @media (max-width: 640px) {
// // //           .table-cell {
// // //             padding: 0.5rem 0.25rem;
// // //             font-size: 0.75rem;
// // //           }
          
// // //           .status-badge {
// // //             font-size: 0.65rem;
// // //             padding: 0.15rem 0.35rem;
// // //           }
          
// // //           .profile-icon {
// // //             width: 1.5rem;
// // //             height: 1.5rem;
// // //           }
// // //         }
// // //       `}</style>

// // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // //           <div className="flex items-center">
// // //             <Link 
// // //               href="/dashboard"
// // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // //             >
// // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // //               </svg>
// // //             </Link>
// // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // //               Attendance Records
// // //             </h1>
// // //           </div>

// // //           <button
// // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // //             aria-label="Filter attendance"
// // //           >
// // //             <span className="flex items-center justify-center">
// // //               <Filter size={18} className="mr-2 text-red-500" />
// // //               <span className="font-medium">Filter View</span>
// // //             </span>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // //           <div className="relative">
// // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // //               <Search
// // //                 className={`h-5 w-5 ${
// // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // //                 }`}
// // //               />
// // //             </div>
// // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // //               <select
// // //                 value={searchCategory}
// // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // //               >
// // //                 <option value="all">All</option>
// // //                 <option value="member">Member</option>
// // //                 <option value="tracking">Membership ID</option>
// // //               </select>
// // //             </div>
// // //             <input
// // //               type="text"
// // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               onFocus={() => setSearchFocused(true)}
// // //               onBlur={() => setSearchFocused(false)}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {hasActiveFilters() && (
// // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // //           <button
// // //             onClick={resetFilters}
// // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // //             aria-label="Clear all filters"
// // //           >
// // //             Clear Filters
// // //           </button>
// // //         </div>
// // //       )}

// // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // //        {/* s{filteredData.length === 0 ? (
// // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // //              <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-20 w-20 mb-6 text-gray-600"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={1}
// // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //               />
// // //             </svg>
// // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // //             {hasActiveFilters() && (
// // //               <button
// // //                 onClick={resetFilters}
// // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //               >
// // //                 Clear Filters
// // //               </button>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 h-full">
// // //             <div 
// // //               className="vertical-scroll-container"
// // //               style={{
// // //                 maxHeight: 'calc(100vh - 220px)',
// // //                 minHeight: '300px',
// // //               }}
// // //             >
// // //               <div className="horizontal-scroll-container">
// // //                 <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // //                   <thead className="bg-gray-900/50 sticky top-0 z-10">
// // //                     <tr>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Photo
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Member
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         ID
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Date
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Time
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Hours
// // //                       </th>
// // //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                         Status
// // //                       </th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody className="divide-y divide-gray-800">
// // //                     {filteredData.map((record) => (
// // //                       <tr
// // //                         key={record.id}
// // //                         className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // //                       >
// // //                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                           <div className="flex justify-center">
// // //                             <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // //                           </div>
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                           <span className="line-clamp-1">{record.memberName}</span>
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                           <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                           <span className="line-clamp-1">{formatDate(record.date)}</span>
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                           <span className="line-clamp-1">
// // //                             {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // //                           </span>
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                           {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // //                         </td>
// // //                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
// // //                             record.status.includes("Present")
// // //                               ? "bg-green-900/20 text-green-300 border border-green-500"
// // //                               : record.status === "Late"
// // //                               ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // //                               : "bg-red-900/20 text-red-300 border border-red-500"
// // //                           }`}>
// // //                             {record.status}
// // //                           </span>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )} */}
// // //         {filteredData.length === 0 ? (
// // //   <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       className="h-20 w-20 mb-6 text-gray-600"
// // //       fill="none"
// // //       viewBox="0 0 24 24"
// // //       stroke="currentColor"
// // //     >
// // //       <path
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //         strokeWidth={1}
// // //         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //       />
// // //     </svg>
// // //     <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // //     {hasActiveFilters() && (
// // //       <button
// // //         onClick={resetFilters}
// // //         className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //       >
// // //         Clear Filters
// // //       </button>
// // //     )}
// // //   </div>
// // // ) : (
// // //   <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // //     {/* Vertical scroll container */}
// // //     <div 
// // //       className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
// // //       style={{
// // //         maxHeight: 'calc(100vh - 220px)',
// // //         minHeight: '300px',
// // //       }}
// // //     >
// // //       {/* Horizontal scroll container */}
// // //       <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
// // //         <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // //           <thead className="bg-gray-900/50 sticky top-0 z-10">
// // //             <tr>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Photo
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Member
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 ID
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Date
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Time
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Hours
// // //               </th>
// // //               <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                 Status
// // //               </th>
// // //             </tr>
// // //           </thead>
// // //           <tbody className="divide-y divide-gray-800">
// // //             {filteredData.map((record) => (
// // //               <tr
// // //                 key={record.id}
// // //                 className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // //               >
// // //                 <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                   <div className="flex justify-center">
// // //                     <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // //                   </div>
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                   <span className="line-clamp-1">{record.memberName}</span>
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                   <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                   <span className="line-clamp-1">{formatDate(record.date)}</span>
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                   <span className="line-clamp-1">
// // //                     {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // //                   </span>
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                   {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // //                 </td>
// // //                 <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                   <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
// // //                     record.status.includes("Present")
// // //                       ? "bg-green-900/20 text-green-300 border border-green-500"
// // //                       : record.status === "Late"
// // //                       ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // //                       : "bg-red-900/20 text-red-300 border border-red-500"
// // //                   }`}>
// // //                     {record.status}
// // //                   </span>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   </div>
// // // )}
// // //       </div>

// // //       {showFilterModal && (
// // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // //               <button 
// // //                 onClick={() => setShowFilterModal(false)}
// // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // //                 aria-label="Close filter modal"
// // //               >
// // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // //               </button>
// // //             </div>

// // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // //               <div>
// // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                   Attendance Status
// // //                 </label>
// // //                 <div className="grid grid-cols-3 gap-3">
// // //                   <button
// // //                     onClick={() => handleFilterChange("status", "")}
// // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // //                       filters.status === ""
// // //                         ? "bg-red-500/20 border-red-500 text-white"
// // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // //                     } ${poppins.className}`}
// // //                   >
// // //                     All Statuses
// // //                   </button>
// // //                   {["Present", "Late", "Absent"].map((status) => (
// // //                     <button
// // //                       key={status}
// // //                       onClick={() => handleFilterChange("status", status)}
// // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // //                         filters.status === status
// // //                           ? status === "Present"
// // //                             ? "bg-green-500/20 border-green-500 text-white"
// // //                             : status === "Late"
// // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // //                             : "bg-red-500/20 border-red-500 text-white"
// // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // //                       } ${poppins.className}`}
// // //                     >
// // //                       {status}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Date From
// // //                   </label>
// // //                   <input
// // //                     type="date"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.dateFrom}
// // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Date To
// // //                   </label>
// // //                   <input
// // //                     type="date"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.dateTo}
// // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Min Hours
// // //                   </label>
// // //                   <input
// // //                     type="number"
// // //                     placeholder="Minimum hours"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.hoursFrom}
// // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // //                     min="0"
// // //                     step="0.1"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Max Hours
// // //                   </label>
// // //                   <input
// // //                     type="number"
// // //                     placeholder="Maximum hours"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.hoursTo}
// // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // //                     min="0"
// // //                     step="0.1"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // //                 <button
// // //                   onClick={resetFilters}
// // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //                 >
// // //                   Reset All
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setShowFilterModal(false)}
// // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //                 >
// // //                   Apply Filters
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AttendanceTable;
// // // "use client";

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // // import Link from "next/link";
// // // import { Poppins } from 'next/font/google';

// // // const poppins = Poppins({
// // //   weight: ['300', '400', '500', '600', '700'],
// // //   subsets: ['latin'],
// // //   display: 'swap',
// // // });

// // // const ProfileIcon = ({ name, photo, id }) => {
// // //   const fileInputRef = useRef(null);
// // //   const [localPhoto, setLocalPhoto] = useState(photo);
// // //   const [isHovered, setIsHovered] = useState(false);

// // //   const initials = name 
// // //     ? name.split(' ')
// // //         .map(n => n[0])
// // //         .slice(0, 2)
// // //         .join('')
// // //         .toUpperCase()
// // //     : '';

// // //   const handlePhotoUpload = () => {
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.click();
// // //     }
// // //   };

// // //   const onPhotoSelected = (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     const photoURL = URL.createObjectURL(file);
// // //     setLocalPhoto(photoURL);
// // //     e.target.value = null;
// // //   };

// // //   return (
// // //     <div 
// // //       className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
// // //       onClick={handlePhotoUpload}
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //     >
// // //       {localPhoto ? (
// // //         <img 
// // //           src={localPhoto} 
// // //           alt="Profile" 
// // //           className={`w-full h-full object-cover transition-all duration-300 ${
// // //             isHovered ? 'scale-150' : 'scale-100'
// // //           }`}
// // //         />
// // //       ) : (
// // //         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
// // //           isHovered ? 'scale-150' : 'scale-100'
// // //         }`}>
// // //           <span className="text-xs font-medium text-red-500">{initials}</span>
// // //         </div>
// // //       )}
// // //       <input
// // //         type="file"
// // //         ref={fileInputRef}
// // //         onChange={onPhotoSelected}
// // //         accept="image/*"
// // //         className="hidden"
// // //       />
// // //     </div>
// // //   );
// // // };

// // // const AttendanceTable = () => {
// // //   const router = useRouter();
// // //   const [attendanceData, setAttendanceData] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [searchFocused, setSearchFocused] = useState(false);
// // //   const [showFilterModal, setShowFilterModal] = useState(false);
// // //   const [searchCategory, setSearchCategory] = useState("all");
// // //   const tableContainerRef = useRef(null);

// // //   const [filters, setFilters] = useState({
// // //     status: "",
// // //     dateFrom: "",
// // //     dateTo: "",
// // //     hoursFrom: "",
// // //     hoursTo: ""
// // //   });

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setIsLoading(true);
// // //       try {
// // //         const response = await fetch('http://localhost:5000/api/attendance/all');
// // //         const data = await response.json();
        
// // //         const transformedData = data.attendance.map(record => {
// // //           let hours = 0;
// // //           let status = "Absent";
          
// // //           if (record.loginTime && record.logoutTime) {
// // //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// // //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// // //             hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
// // //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// // //             status = loginDate > lateThreshold ? "Late" : "Present";
// // //           } else if (record.loginTime) {
// // //             status = "Present (No logout)";
// // //           }
          
// // //           return {
// // //             id: record._id,
// // //             memberName: record.member?.name || "Unknown Member",
// // //             date: record.date,
// // //             checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
// // //             checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
// // //             hours: hours,
// // //             status: status.replace(/[()]/g, ''),
// // //             trackingId: record.membershipID,
// // //             memberPhoto: record.member_photo
// // //           };
// // //         });
        
// // //         setAttendanceData(transformedData);
// // //         setIsLoading(false);
// // //       } catch (error) {
// // //         console.error("Error fetching data:", error);
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return "N/A";
// // //     const date = new Date(dateString);
// // //     return date.toLocaleDateString('en-US', {
// // //       year: 'numeric',
// // //       month: 'short',
// // //       day: 'numeric'
// // //     });
// // //   };

// // //   const hasActiveFilters = () => {
// // //     return (
// // //       filters.status !== "" ||
// // //       filters.dateFrom !== "" ||
// // //       filters.dateTo !== "" ||
// // //       filters.hoursFrom !== "" ||
// // //       filters.hoursTo !== "" ||
// // //       searchTerm !== ""
// // //     );
// // //   };

// // //   const handleFilterChange = (field, value) => {
// // //     setFilters(prev => ({
// // //       ...prev,
// // //       [field]: value
// // //     }));
// // //   };

// // //   const resetFilters = () => {
// // //     setFilters({
// // //       status: "",
// // //       dateFrom: "",
// // //       dateTo: "",
// // //       hoursFrom: "",
// // //       hoursTo: ""
// // //     });
// // //     setSearchTerm("");
// // //     setSearchCategory("all");
// // //   };

// // //   const filteredData = attendanceData.filter(record => {
// // //     let matchesSearch = false;
// // //     if (searchTerm === "") {
// // //       matchesSearch = true;
// // //     } else {
// // //       const term = searchTerm.toLowerCase();
// // //       switch (searchCategory) {
// // //         case "member":
// // //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// // //           break;
// // //         case "tracking":
// // //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// // //           break;
// // //         default:
// // //           matchesSearch = (
// // //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// // //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// // //           );
// // //       }
// // //     }
    
// // //     const matchesStatus = filters.status === "" || 
// // //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// // //       (filters.status === "Late" && record.status === "Late") ||
// // //       (filters.status === "Absent" && record.status === "Absent");
    
// // //     const recordDate = new Date(record.date);
// // //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// // //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// // //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// // //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// // //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// // //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// // //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// // //   });

// // //   if (isLoading) {
// // //     return (
// // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // //         <div className="text-center">
// // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // //       <style jsx global>{`
// // //         /* Focus styles */
// // //         button:focus, 
// // //         input:focus,
// // //         select:focus,
// // //         a:focus,
// // //         [tabindex]:focus,
// // //         [role="button"]:focus {
// // //           outline: none !important;
// // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // //         }

// // //         /* Custom scrollbars */
// // //         .table-scroll-container::-webkit-scrollbar {
// // //           width: 8px;
// // //           height: 8px;
// // //         }

// // //         .table-scroll-container::-webkit-scrollbar-track {
// // //           background: #1f2937;
// // //           border-radius: 4px;
// // //         }

// // //         .table-scroll-container::-webkit-scrollbar-thumb {
// // //           background-color: #4b5563;
// // //           border-radius: 4px;
// // //         }

// // //         .table-scroll-container::-webkit-scrollbar-thumb:hover {
// // //           background-color: #6b7280;
// // //         }
// // //       `}</style>

// // //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // //           <div className="flex items-center">
// // //             <Link 
// // //               href="/dashboard"
// // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// // //             >
// // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // //               </svg>
// // //             </Link>
// // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // //               Attendance Records
// // //             </h1>
// // //           </div>

// // //           <button
// // //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// // //             onClick={() => setShowFilterModal(!showFilterModal)}
// // //             aria-label="Filter attendance"
// // //           >
// // //             <span className="flex items-center justify-center">
// // //               <Filter size={18} className="mr-2 text-red-500" />
// // //               <span className="font-medium">Filter View</span>
// // //             </span>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// // //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// // //           <div className="relative">
// // //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // //               <Search
// // //                 className={`h-5 w-5 ${
// // //                   searchFocused ? "text-red-500" : "text-gray-500"
// // //                 }`}
// // //               />
// // //             </div>
// // //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// // //               <select
// // //                 value={searchCategory}
// // //                 onChange={(e) => setSearchCategory(e.target.value)}
// // //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// // //               >
// // //                 <option value="all">All</option>
// // //                 <option value="member">Member</option>
// // //                 <option value="tracking">Membership ID</option>
// // //               </select>
// // //             </div>
// // //             <input
// // //               type="text"
// // //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// // //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// // //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               onFocus={() => setSearchFocused(true)}
// // //               onBlur={() => setSearchFocused(false)}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {hasActiveFilters() && (
// // //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// // //           <button
// // //             onClick={resetFilters}
// // //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // //             aria-label="Clear all filters"
// // //           >
// // //             Clear Filters
// // //           </button>
// // //         </div>
// // //       )}

// // //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// // //         {filteredData.length === 0 ? (
// // //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-20 w-20 mb-6 text-gray-600"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={1}
// // //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// // //               />
// // //             </svg>
// // //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// // //             {hasActiveFilters() && (
// // //               <button
// // //                 onClick={resetFilters}
// // //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //               >
// // //                 Clear Filters
// // //               </button>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // //             {/* Table container with separate scroll */}
// // //             <div 
// // //               className="table-scroll-container overflow-auto"
// // //               ref={tableContainerRef}
// // //               style={{
// // //                 maxHeight: 'calc(100vh - 220px)',
// // //                 minHeight: '300px',
// // //               }}
// // //             >
// // //               <table className={`w-full divide-y divide-gray-800 ${poppins.className}`}>
// // //                 <thead className="bg-gray-900/50 sticky top-0 z-10">
// // //                   <tr>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Photo
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Member
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       ID
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Date
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Time
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Hours
// // //                     </th>
// // //                     <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// // //                       Status
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-gray-800">
// // //                   {filteredData.map((record) => (
// // //                     <tr
// // //                       key={record.id}
// // //                       className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// // //                     >
// // //                       <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                         <div className="flex justify-center">
// // //                           <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// // //                         </div>
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                         <span className="line-clamp-1">{record.memberName}</span>
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                         <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                         <span className="line-clamp-1">{formatDate(record.date)}</span>
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// // //                         <span className="line-clamp-1">
// // //                           {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// // //                         </span>
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// // //                         {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// // //                       </td>
// // //                       <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// // //                         <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
// // //                           record.status.includes("Present")
// // //                             ? "bg-green-900/20 text-green-300 border border-green-500"
// // //                             : record.status === "Late"
// // //                             ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// // //                             : "bg-red-900/20 text-red-300 border border-red-500"
// // //                         }`}>
// // //                           {record.status}
// // //                         </span>
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {showFilterModal && (
// // //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// // //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// // //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// // //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// // //               <button 
// // //                 onClick={() => setShowFilterModal(false)}
// // //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// // //                 aria-label="Close filter modal"
// // //               >
// // //                 <X size={24} className="text-gray-400 hover:text-white" />
// // //               </button>
// // //             </div>

// // //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// // //               <div>
// // //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                   Attendance Status
// // //                 </label>
// // //                 <div className="grid grid-cols-3 gap-3">
// // //                   <button
// // //                     onClick={() => handleFilterChange("status", "")}
// // //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // //                       filters.status === ""
// // //                         ? "bg-red-500/20 border-red-500 text-white"
// // //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // //                     } ${poppins.className}`}
// // //                   >
// // //                     All Statuses
// // //                   </button>
// // //                   {["Present", "Late", "Absent"].map((status) => (
// // //                     <button
// // //                       key={status}
// // //                       onClick={() => handleFilterChange("status", status)}
// // //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// // //                         filters.status === status
// // //                           ? status === "Present"
// // //                             ? "bg-green-500/20 border-green-500 text-white"
// // //                             : status === "Late"
// // //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// // //                             : "bg-red-500/20 border-red-500 text-white"
// // //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// // //                       } ${poppins.className}`}
// // //                     >
// // //                       {status}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Date From
// // //                   </label>
// // //                   <input
// // //                     type="date"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.dateFrom}
// // //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Date To
// // //                   </label>
// // //                   <input
// // //                     type="date"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.dateTo}
// // //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Min Hours
// // //                   </label>
// // //                   <input
// // //                     type="number"
// // //                     placeholder="Minimum hours"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.hoursFrom}
// // //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// // //                     min="0"
// // //                     step="0.1"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// // //                     Max Hours
// // //                   </label>
// // //                   <input
// // //                     type="number"
// // //                     placeholder="Maximum hours"
// // //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// // //                     value={filters.hoursTo}
// // //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// // //                     min="0"
// // //                     step="0.1"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// // //                 <button
// // //                   onClick={resetFilters}
// // //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //                 >
// // //                   Reset All
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setShowFilterModal(false)}
// // //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// // //                 >
// // //                   Apply Filters
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AttendanceTable;
// // "use client";

// // import React, { useState, useEffect, useRef } from "react";
// // import { useRouter } from "next/navigation";
// // import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// // import Link from "next/link";
// // import { Poppins } from 'next/font/google';

// // const poppins = Poppins({
// //   weight: ['300', '400', '500', '600', '700'],
// //   subsets: ['latin'],
// //   display: 'swap',
// // });

// // const ProfileIcon = ({ name, photo, id }) => {
// //   const fileInputRef = useRef(null);
// //   const [localPhoto, setLocalPhoto] = useState(photo);
// //   const [isHovered, setIsHovered] = useState(false);

// //   const initials = name 
// //     ? name.split(' ')
// //         .map(n => n[0])
// //         .slice(0, 2)
// //         .join('')
// //         .toUpperCase()
// //     : '';

// //   const handlePhotoUpload = () => {
// //     if (fileInputRef.current) {
// //       fileInputRef.current.click();
// //     }
// //   };

// //   const onPhotoSelected = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const photoURL = URL.createObjectURL(file);
// //     setLocalPhoto(photoURL);
// //     e.target.value = null;
// //   };

// //   return (
// //     <div 
// //       className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
// //       onClick={handlePhotoUpload}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       {localPhoto ? (
// //         <img 
// //           src={localPhoto} 
// //           alt="Profile" 
// //           className={`w-full h-full object-cover transition-all duration-300 ${
// //             isHovered ? 'scale-150' : 'scale-100'
// //           }`}
// //         />
// //       ) : (
// //         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
// //           isHovered ? 'scale-150' : 'scale-100'
// //         }`}>
// //           <span className="text-xs font-medium text-red-500">{initials}</span>
// //         </div>
// //       )}
// //       <input
// //         type="file"
// //         ref={fileInputRef}
// //         onChange={onPhotoSelected}
// //         accept="image/*"
// //         className="hidden"
// //       />
// //     </div>
// //   );
// // };

// // const AttendanceTable = () => {
// //   const router = useRouter();
// //   const [attendanceData, setAttendanceData] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchFocused, setSearchFocused] = useState(false);
// //   const [showFilterModal, setShowFilterModal] = useState(false);
// //   const [searchCategory, setSearchCategory] = useState("all");
// //   const tableContainerRef = useRef(null);

// //   const [filters, setFilters] = useState({
// //     status: "",
// //     dateFrom: "",
// //     dateTo: "",
// //     hoursFrom: "",
// //     hoursTo: ""
// //   });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setIsLoading(true);
// //       try {
// //         const response = await fetch('http://localhost:5000/api/attendance/all');
// //         const data = await response.json();
        
// //         const transformedData = data.attendance.map(record => {
// //           let hours = 0;
// //           let status = "Absent";
          
// //           if (record.loginTime && record.logoutTime) {
// //             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
// //             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
// //             hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
// //             const lateThreshold = new Date(`2000-01-01T09:15:00`);
// //             status = loginDate > lateThreshold ? "Late" : "Present";
// //           } else if (record.loginTime) {
// //             status = "Present (No logout)";
// //           }
          
// //           return {
// //             id: record._id,
// //             memberName: record.member?.name || "Unknown Member",
// //             date: record.date,
// //             checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
// //             checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
// //             hours: hours,
// //             status: status.replace(/[()]/g, ''),
// //             trackingId: record.membershipID,
// //             memberPhoto: record.member_photo
// //           };
// //         });
        
// //         setAttendanceData(transformedData);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const formatDate = (dateString) => {
// //     if (!dateString) return "N/A";
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'short',
// //       day: 'numeric'
// //     });
// //   };

// //   const hasActiveFilters = () => {
// //     return (
// //       filters.status !== "" ||
// //       filters.dateFrom !== "" ||
// //       filters.dateTo !== "" ||
// //       filters.hoursFrom !== "" ||
// //       filters.hoursTo !== "" ||
// //       searchTerm !== ""
// //     );
// //   };

// //   const handleFilterChange = (field, value) => {
// //     setFilters(prev => ({
// //       ...prev,
// //       [field]: value
// //     }));
// //   };

// //   const resetFilters = () => {
// //     setFilters({
// //       status: "",
// //       dateFrom: "",
// //       dateTo: "",
// //       hoursFrom: "",
// //       hoursTo: ""
// //     });
// //     setSearchTerm("");
// //     setSearchCategory("all");
// //   };

// //   const filteredData = attendanceData.filter(record => {
// //     let matchesSearch = false;
// //     if (searchTerm === "") {
// //       matchesSearch = true;
// //     } else {
// //       const term = searchTerm.toLowerCase();
// //       switch (searchCategory) {
// //         case "member":
// //           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
// //           break;
// //         case "tracking":
// //           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
// //           break;
// //         default:
// //           matchesSearch = (
// //             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
// //             (record.trackingId && record.trackingId.toLowerCase().includes(term))
// //           );
// //       }
// //     }
    
// //     const matchesStatus = filters.status === "" || 
// //       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
// //       (filters.status === "Late" && record.status === "Late") ||
// //       (filters.status === "Absent" && record.status === "Absent");
    
// //     const recordDate = new Date(record.date);
// //     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
// //     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
// //     const matchesDateFrom = !fromDate || recordDate >= fromDate;
// //     const matchesDateTo = !toDate || recordDate <= toDate;
    
// //     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
// //     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
// //     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
// //   });

// //   if (isLoading) {
// //     return (
// //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// //           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// //       <style jsx global>{`
// //         /* Focus styles */
// //         button:focus, 
// //         input:focus,
// //         select:focus,
// //         a:focus,
// //         [tabindex]:focus,
// //         [role="button"]:focus {
// //           outline: none !important;
// //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// //         }

// //         /* Custom scrollbars */
// //         .table-scroll-container::-webkit-scrollbar {
// //           width: 8px;
// //           height: 8px;
// //         }

// //         .table-scroll-container::-webkit-scrollbar-track {
// //           background: #1f2937;
// //           border-radius: 4px;
// //         }

// //         .table-scroll-container::-webkit-scrollbar-thumb {
// //           background-color: #4b5563;
// //           border-radius: 4px;
// //         }

// //         .table-scroll-container::-webkit-scrollbar-thumb:hover {
// //           background-color: #6b7280;
// //         }

// //         /* Make table cells wrap text on small screens */
// //         @media (max-width: 640px) {
// //           .table-cell {
// //             white-space: nowrap;
// //           }
// //         }
// //       `}</style>

// //       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// //           <div className="flex items-center">
// //             <Link 
// //               href="/dashboard"
// //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// //               </svg>
// //             </Link>
// //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// //               Attendance Records
// //             </h1>
// //           </div>

// //           <button
// //             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
// //             onClick={() => setShowFilterModal(!showFilterModal)}
// //             aria-label="Filter attendance"
// //           >
// //             <span className="flex items-center justify-center">
// //               <Filter size={18} className="mr-2 text-red-500" />
// //               <span className="font-medium">Filter View</span>
// //             </span>
// //           </button>
// //         </div>
// //       </div>

// //       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
// //         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
// //           <div className="relative">
// //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// //               <Search
// //                 className={`h-5 w-5 ${
// //                   searchFocused ? "text-red-500" : "text-gray-500"
// //                 }`}
// //               />
// //             </div>
// //             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
// //               <select
// //                 value={searchCategory}
// //                 onChange={(e) => setSearchCategory(e.target.value)}
// //                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
// //               >
// //                 <option value="all">All</option>
// //                 <option value="member">Member</option>
// //                 <option value="tracking">Membership ID</option>
// //               </select>
// //             </div>
// //             <input
// //               type="text"
// //               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
// //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// //                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
// //                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
// //                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               onFocus={() => setSearchFocused(true)}
// //               onBlur={() => setSearchFocused(false)}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {hasActiveFilters() && (
// //         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
// //           <button
// //             onClick={resetFilters}
// //             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// //             aria-label="Clear all filters"
// //           >
// //             Clear Filters
// //           </button>
// //         </div>
// //       )}

// //       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
// //         {filteredData.length === 0 ? (
// //           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-20 w-20 mb-6 text-gray-600"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={1}
// //                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
// //             {hasActiveFilters() && (
// //               <button
// //                 onClick={resetFilters}
// //                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
// //               >
// //                 Clear Filters
// //               </button>
// //             )}
// //           </div>
// //         ) : (
// //           <>
// //             <div className="md:hidden text-center text-xs text-gray-500 py-2">
// //               ← Scroll horizontally to view all columns →
// //             </div>
// //             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// //               <div 
// //                 className="table-scroll-container overflow-auto"
// //                 ref={tableContainerRef}
// //                 style={{
// //                   maxHeight: 'calc(100vh - 220px)',
// //                   minHeight: '300px',
// //                   overflowX: 'auto',
// //                 }}
// //               >
// //                 <table 
// //                   className={`w-full divide-y divide-gray-800 ${poppins.className}`} 
// //                   style={{ minWidth: '700px' }}
// //                 >
// //                   <thead className="bg-gray-900/50 sticky top-0 z-10">
// //                     <tr>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Photo
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Member
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         ID
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Date
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Time
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Hours
// //                       </th>
// //                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
// //                         Status
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="divide-y divide-gray-800">
// //                     {filteredData.map((record) => (
// //                       <tr
// //                         key={record.id}
// //                         className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
// //                       >
// //                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// //                           <div className="flex justify-center">
// //                             <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
// //                           </div>
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// //                           <span className="line-clamp-1">{record.memberName}</span>
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// //                           <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// //                           <span className="line-clamp-1">{formatDate(record.date)}</span>
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
// //                           <span className="line-clamp-1">
// //                             {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
// //                           </span>
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
// //                           {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
// //                         </td>
// //                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
// //                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
// //                             record.status.includes("Present")
// //                               ? "bg-green-900/20 text-green-300 border border-green-500"
// //                               : record.status === "Late"
// //                               ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
// //                               : "bg-red-900/20 text-red-300 border border-red-500"
// //                           }`}>
// //                             {record.status}
// //                           </span>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </div>

// //       {showFilterModal && (
// //         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
// //           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
// //             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
// //               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
// //               <button 
// //                 onClick={() => setShowFilterModal(false)}
// //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
// //                 aria-label="Close filter modal"
// //               >
// //                 <X size={24} className="text-gray-400 hover:text-white" />
// //               </button>
// //             </div>

// //             <div className={`p-6 space-y-6 ${poppins.className}`}>
// //               <div>
// //                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// //                   Attendance Status
// //                 </label>
// //                 <div className="grid grid-cols-3 gap-3">
// //                   <button
// //                     onClick={() => handleFilterChange("status", "")}
// //                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// //                       filters.status === ""
// //                         ? "bg-red-500/20 border-red-500 text-white"
// //                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// //                     } ${poppins.className}`}
// //                   >
// //                     All Statuses
// //                   </button>
// //                   {["Present", "Late", "Absent"].map((status) => (
// //                     <button
// //                       key={status}
// //                       onClick={() => handleFilterChange("status", status)}
// //                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
// //                         filters.status === status
// //                           ? status === "Present"
// //                             ? "bg-green-500/20 border-green-500 text-white"
// //                             : status === "Late"
// //                             ? "bg-yellow-500/20 border-yellow-500 text-white"
// //                             : "bg-red-500/20 border-red-500 text-white"
// //                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
// //                       } ${poppins.className}`}
// //                     >
// //                       {status}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// //                     Date From
// //                   </label>
// //                   <input
// //                     type="date"
// //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// //                     value={filters.dateFrom}
// //                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// //                     Date To
// //                   </label>
// //                   <input
// //                     type="date"
// //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// //                     value={filters.dateTo}
// //                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// //                     Min Hours
// //                   </label>
// //                   <input
// //                     type="number"
// //                     placeholder="Minimum hours"
// //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// //                     value={filters.hoursFrom}
// //                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
// //                     min="0"
// //                     step="0.1"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
// //                     Max Hours
// //                   </label>
// //                   <input
// //                     type="number"
// //                     placeholder="Maximum hours"
// //                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
// //                     value={filters.hoursTo}
// //                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
// //                     min="0"
// //                     step="0.1"
// //                   />
// //                 </div>
// //               </div>

// //               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
// //                 <button
// //                   onClick={resetFilters}
// //                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
// //                 >
// //                   Reset All
// //                 </button>
// //                 <button
// //                   onClick={() => setShowFilterModal(false)}
// //                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
// //                 >
// //                   Apply Filters
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AttendanceTable;
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
// import Link from "next/link";
// import { Poppins } from 'next/font/google';

// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const ProfileIcon = ({ name, photo, id }) => {
//   const fileInputRef = useRef(null);
//   const [localPhoto, setLocalPhoto] = useState(photo);
//   const [isHovered, setIsHovered] = useState(false);

//   const initials = name 
//     ? name.split(' ')
//         .map(n => n[0])
//         .slice(0, 2)
//         .join('')
//         .toUpperCase()
//     : '';

//   const handlePhotoUpload = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const onPhotoSelected = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const photoURL = URL.createObjectURL(file);
//     setLocalPhoto(photoURL);
//     e.target.value = null;
//   };

//   return (
//     <div 
//       className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
//       onClick={handlePhotoUpload}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {localPhoto ? (
//         <img 
//           src={localPhoto} 
//           alt="Profile" 
//           className={`w-full h-full object-cover transition-all duration-300 ${
//             isHovered ? 'scale-150' : 'scale-100'
//           }`}
//         />
//       ) : (
//         <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
//           isHovered ? 'scale-150' : 'scale-100'
//         }`}>
//           <span className="text-xs font-medium text-red-500">{initials}</span>
//         </div>
//       )}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={onPhotoSelected}
//         accept="image/*"
//         className="hidden"
//       />
//     </div>
//   );
// };

// const AttendanceTable = () => {
//   const router = useRouter();
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [searchCategory, setSearchCategory] = useState("all");
//   const tableContainerRef = useRef(null);

//   const [filters, setFilters] = useState({
//     status: "",
//     dateFrom: "",
//     dateTo: "",
//     hoursFrom: "",
//     hoursTo: ""
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch('http://localhost:5000/api/attendance/all');
//         const data = await response.json();
        
//         const transformedData = data.attendance.map(record => {
//           let hours = 0;
//           let status = "Absent";
          
//           if (record.loginTime && record.logoutTime) {
//             const loginDate = new Date(`2000-01-01T${record.loginTime}`);
//             const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
//             hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
//             const lateThreshold = new Date(`2000-01-01T09:15:00`);
//             status = loginDate > lateThreshold ? "Late" : "Present";
//           } else if (record.loginTime) {
//             status = "Present (No logout)";
//           }
          
//           return {
//             id: record._id,
//             memberName: record.member?.name || "Unknown Member",
//             date: record.date,
//             checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
//             checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
//             hours: hours,
//             status: status.replace(/[()]/g, ''),
//             trackingId: record.membershipID,
//             memberPhoto: record.member_photo
//           };
//         });
        
//         setAttendanceData(transformedData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const hasActiveFilters = () => {
//     return (
//       filters.status !== "" ||
//       filters.dateFrom !== "" ||
//       filters.dateTo !== "" ||
//       filters.hoursFrom !== "" ||
//       filters.hoursTo !== "" ||
//       searchTerm !== ""
//     );
//   };

//   const handleFilterChange = (field, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       status: "",
//       dateFrom: "",
//       dateTo: "",
//       hoursFrom: "",
//       hoursTo: ""
//     });
//     setSearchTerm("");
//     setSearchCategory("all");
//   };

//   const filteredData = attendanceData.filter(record => {
//     let matchesSearch = false;
//     if (searchTerm === "") {
//       matchesSearch = true;
//     } else {
//       const term = searchTerm.toLowerCase();
//       switch (searchCategory) {
//         case "member":
//           matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
//           break;
//         case "tracking":
//           matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
//           break;
//         default:
//           matchesSearch = (
//             (record.memberName && record.memberName.toLowerCase().includes(term)) ||
//             (record.trackingId && record.trackingId.toLowerCase().includes(term))
//           );
//       }
//     }
    
//     const matchesStatus = filters.status === "" || 
//       (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
//       (filters.status === "Late" && record.status === "Late") ||
//       (filters.status === "Absent" && record.status === "Absent");
    
//     const recordDate = new Date(record.date);
//     const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
//     const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
//     const matchesDateFrom = !fromDate || recordDate >= fromDate;
//     const matchesDateTo = !toDate || recordDate <= toDate;
    
//     const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
//     const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
//     return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
//   });

//   if (isLoading) {
//     return (
//       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
//           <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
//       <style jsx global>{`
//         /* Focus styles */
//         button:focus, 
//         input:focus,
//         select:focus,
//         a:focus,
//         [tabindex]:focus,
//         [role="button"]:focus {
//           outline: none !important;
//           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
//         }

//         /* Enhanced scrollbars for all devices */
//         .table-scroll-container {
//           scrollbar-width: thin;
//           scrollbar-color: #4b5563 #1f2937;
//         }

//         .table-scroll-container::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         .table-scroll-container::-webkit-scrollbar-track {
//           background: #1f2937;
//           border-radius: 6px;
//         }

//         .table-scroll-container::-webkit-scrollbar-thumb {
//           background-color: #4b5563;
//           border-radius: 6px;
//           border: 3px solid #1f2937;
//         }

//         .table-scroll-container::-webkit-scrollbar-thumb:hover {
//           background-color: #6b7280;
//         }

//         .table-scroll-container::-webkit-scrollbar-corner {
//           background: #1f2937;
//         }

//         /* Make table cells wrap text on small screens */
//         @media (max-width: 640px) {
//           .table-cell {
//             white-space: nowrap;
//           }
//         }
//       `}</style>

//       <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
//         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
//           <div className="flex items-center">
//             <Link 
//               href="/dashboard"
//               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
//                 <path d="M19 12H5M12 19l-7-7 7-7"/>
//               </svg>
//             </Link>
//             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
//               Attendance Records
//             </h1>
//           </div>

//           <button
//             className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
//             onClick={() => setShowFilterModal(!showFilterModal)}
//             aria-label="Filter attendance"
//           >
//             <span className="flex items-center justify-center">
//               <Filter size={18} className="mr-2 text-red-500" />
//               <span className="font-medium">Filter View</span>
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
//         <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
//               <Search
//                 className={`h-5 w-5 ${
//                   searchFocused ? "text-red-500" : "text-gray-500"
//                 }`}
//               />
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <select
//                 value={searchCategory}
//                 onChange={(e) => setSearchCategory(e.target.value)}
//                 className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
//               >
//                 <option value="all">All</option>
//                 <option value="member">Member</option>
//                 <option value="tracking">Membership ID</option>
//               </select>
//             </div>
//             <input
//               type="text"
//               placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
//               className={`w-full bg-gray-800/50 backdrop-blur-sm border
//                 ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
//                 text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
//                 text-sm md:text-lg bg-gray-800 ${poppins.className}`}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setSearchFocused(true)}
//               onBlur={() => setSearchFocused(false)}
//             />
//           </div>
//         </div>
//       </div>

//       {hasActiveFilters() && (
//         <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
//           <button
//             onClick={resetFilters}
//             className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
//             aria-label="Clear all filters"
//           >
//             Clear Filters
//           </button>
//         </div>
//       )}

//       <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
//         {filteredData.length === 0 ? (
//           <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-20 w-20 mb-6 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1}
//                 d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
//             {hasActiveFilters() && (
//               <button
//                 onClick={resetFilters}
//                 className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
//               >
//                 Clear Filters
//               </button>
//             )}
//           </div>
//         ) : (
//           <>
//             <div className="md:hidden text-center text-xs text-gray-500 py-2">
//               ← Scroll horizontally to view all columns →
//             </div>
//             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
//               <div 
//                 className="table-scroll-container"
//                 ref={tableContainerRef}
//                 style={{
//                   maxHeight: 'calc(100vh - 220px)',
//                   minHeight: '300px',
//                   overflow: 'auto',
//                 }}
//               >
//                 <table 
//                   className={`w-full divide-y divide-gray-800 ${poppins.className}`} 
//                   style={{ 
//                     minWidth: '700px',
//                     width: '100%'
//                   }}
//                 >
//                   <thead className="bg-gray-900/50 sticky top-0 z-10">
//                     <tr>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Photo
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Member
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         ID
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Date
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Time
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Hours
//                       </th>
//                       <th className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-800">
//                     {filteredData.map((record) => (
//                       <tr
//                         key={record.id}
//                         className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
//                       >
//                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
//                           <div className="flex justify-center">
//                             <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
//                           </div>
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
//                           <span className="line-clamp-1">{record.memberName}</span>
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
//                           <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
//                           <span className="line-clamp-1">{formatDate(record.date)}</span>
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
//                           <span className="line-clamp-1">
//                             {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
//                           </span>
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
//                           {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
//                         </td>
//                         <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
//                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
//                             record.status.includes("Present")
//                               ? "bg-green-900/20 text-green-300 border border-green-500"
//                               : record.status === "Late"
//                               ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
//                               : "bg-red-900/20 text-red-300 border border-red-500"
//                           }`}>
//                             {record.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {showFilterModal && (
//         <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
//           <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
//             <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
//               <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
//               <button 
//                 onClick={() => setShowFilterModal(false)}
//                 className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
//                 aria-label="Close filter modal"
//               >
//                 <X size={24} className="text-gray-400 hover:text-white" />
//               </button>
//             </div>

//             <div className={`p-6 space-y-6 ${poppins.className}`}>
//               <div>
//                 <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
//                   Attendance Status
//                 </label>
//                 <div className="grid grid-cols-3 gap-3">
//                   <button
//                     onClick={() => handleFilterChange("status", "")}
//                     className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
//                       filters.status === ""
//                         ? "bg-red-500/20 border-red-500 text-white"
//                         : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
//                     } ${poppins.className}`}
//                   >
//                     All Statuses
//                   </button>
//                   {["Present", "Late", "Absent"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => handleFilterChange("status", status)}
//                       className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
//                         filters.status === status
//                           ? status === "Present"
//                             ? "bg-green-500/20 border-green-500 text-white"
//                             : status === "Late"
//                             ? "bg-yellow-500/20 border-yellow-500 text-white"
//                             : "bg-red-500/20 border-red-500 text-white"
//                           : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
//                       } ${poppins.className}`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
//                     Date From
//                   </label>
//                   <input
//                     type="date"
//                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
//                     value={filters.dateFrom}
//                     onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
//                   />
//                 </div>

//                 <div>
//                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
//                     Date To
//                   </label>
//                   <input
//                     type="date"
//                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
//                     value={filters.dateTo}
//                     onChange={(e) => handleFilterChange("dateTo", e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
//                     Min Hours
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="Minimum hours"
//                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
//                     value={filters.hoursFrom}
//                     onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
//                     min="0"
//                     step="0.1"
//                   />
//                 </div>

//                 <div>
//                   <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
//                     Max Hours
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="Maximum hours"
//                     className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
//                     value={filters.hoursTo}
//                     onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
//                     min="0"
//                     step="0.1"
//                   />
//                 </div>
//               </div>

//               <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
//                 <button
//                   onClick={resetFilters}
//                   className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
//                 >
//                   Reset All
//                 </button>
//                 <button
//                   onClick={() => setShowFilterModal(false)}
//                   className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AttendanceTable;
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, ChevronUp, Filter, X, User } from "lucide-react";
import Link from "next/link";
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ProfileIcon = ({ name, photo, id }) => {
  const fileInputRef = useRef(null);
  const [localPhoto, setLocalPhoto] = useState(photo);
  const [isHovered, setIsHovered] = useState(false);

  const initials = name 
    ? name.split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '';

  const handlePhotoUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onPhotoSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const photoURL = URL.createObjectURL(file);
    setLocalPhoto(photoURL);
    e.target.value = null;
  };

  return (
    <div 
      className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 border border-red-500/50 overflow-hidden"
      onClick={handlePhotoUpload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {localPhoto ? (
        <Image 
          src={localPhoto} 
          alt="Profile" 
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? 'scale-150' : 'scale-100'
          }`}
          width={40}
          height={40}
          unoptimized={true} // Since we're using blob URLs for uploaded images
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-gray-800 transition-all duration-300 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}>
          <span className="text-xs font-medium text-red-500">{initials}</span>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onPhotoSelected}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

const AttendanceTable = () => {
  const router = useRouter();
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [searchCategory, setSearchCategory] = useState("all");
  const tableContainerRef = useRef(null);

  const [filters, setFilters] = useState({
    status: "",
    dateFrom: "",
    dateTo: "",
    hoursFrom: "",
    hoursTo: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/attendance/all');
        const data = await response.json();
        
        const transformedData = data.attendance.map(record => {
          let hours = 0;
          let status = "Absent";
          
          if (record.loginTime && record.logoutTime) {
            const loginDate = new Date(`2000-01-01T${record.loginTime}`);
            const logoutDate = new Date(`2000-01-01T${record.logoutTime}`);
            hours = (logoutDate - loginDate) / (1000 * 60 * 60);
            
            const lateThreshold = new Date(`2000-01-01T09:15:00`);
            status = loginDate > lateThreshold ? "Late" : "Present";
          } else if (record.loginTime) {
            status = "Present (No logout)";
          }
          
          return {
            id: record._id,
            memberName: record.member?.name || "Unknown Member",
            date: record.date,
            checkIn: record.loginTime ? record.loginTime.replace(/\s*cm$/, '') : "",
            checkOut: record.logoutTime ? record.logoutTime.replace(/\s*cm$/, '') : "",
            hours: hours,
            status: status.replace(/[()]/g, ''),
            trackingId: record.membershipID,
            memberPhoto: record.member_photo
          };
        });
        
        setAttendanceData(transformedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const hasActiveFilters = () => {
    return (
      filters.status !== "" ||
      filters.dateFrom !== "" ||
      filters.dateTo !== "" ||
      filters.hoursFrom !== "" ||
      filters.hoursTo !== "" ||
      searchTerm !== ""
    );
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      status: "",
      dateFrom: "",
      dateTo: "",
      hoursFrom: "",
      hoursTo: ""
    });
    setSearchTerm("");
    setSearchCategory("all");
  };

  const filteredData = attendanceData.filter(record => {
    let matchesSearch = false;
    if (searchTerm === "") {
      matchesSearch = true;
    } else {
      const term = searchTerm.toLowerCase();
      switch (searchCategory) {
        case "member":
          matchesSearch = record.memberName && record.memberName.toLowerCase().includes(term);
          break;
        case "tracking":
          matchesSearch = record.trackingId && record.trackingId.toLowerCase().includes(term);
          break;
        default:
          matchesSearch = (
            (record.memberName && record.memberName.toLowerCase().includes(term)) ||
              (record.trackingId && record.trackingId.toLowerCase().includes(term))
            );
      }
    }
    
    const matchesStatus = filters.status === "" || 
      (filters.status === "Present" && (record.status === "Present" || record.status === "Present (No logout)")) ||
      (filters.status === "Late" && record.status === "Late") ||
      (filters.status === "Absent" && record.status === "Absent");
    
    const recordDate = new Date(record.date);
    const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
    const toDate = filters.dateTo ? new Date(filters.dateTo) : null;
    
    const matchesDateFrom = !fromDate || recordDate >= fromDate;
    const matchesDateTo = !toDate || recordDate <= toDate;
    
    const matchesHoursFrom = !filters.hoursFrom || record.hours >= parseFloat(filters.hoursFrom);
    const matchesHoursTo = !filters.hoursTo || record.hours <= parseFloat(filters.hoursTo);
    
    return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo && matchesHoursFrom && matchesHoursTo;
  });

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-wider">Loading attendance data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
      <style jsx global>{`
        /* Focus styles */
        button:focus, 
        input:focus,
        select:focus,
        a:focus,
        [tabindex]:focus,
        [role="button"]:focus {
          outline: none !important;
          box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
        }

        /* Enhanced scrollbars for all devices */
        .table-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }

        .table-scroll-container::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        .table-scroll-container::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 6px;
        }

        .table-scroll-container::-webkit-scrollbar-thumb {
          background-color: #4b5563;
          border-radius: 6px;
          border: 3px solid #1f2937;
        }

        .table-scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }

        .table-scroll-container::-webkit-scrollbar-corner {
          background: #1f2937;
        }

        /* Make table cells wrap text on small screens */
        @media (max-width: 640px) {
          .table-cell {
            white-space: nowrap;
          }
        }
      `}</style>

      <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Link 
              href="/dashboard"
              className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
              aria-label="Back to dashboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
              Attendance Records
            </h1>
          </div>

          <button
            className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
            onClick={() => setShowFilterModal(!showFilterModal)}
            aria-label="Filter attendance"
          >
            <span className="flex items-center justify-center">
              <Filter size={18} className="mr-2 text-red-500" />
              <span className="font-medium">Filter View</span>
            </span>
          </button>
        </div>
      </div>

      <div className={`sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
        <div className="w-full px-4 md:px-8 pt-4 md:pt-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
              <Search
                className={`h-5 w-5 ${
                  searchFocused ? "text-red-500" : "text-gray-500"
                }`}
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className={`bg-gray-800 border-l border-gray-700 text-gray-300 text-xs md:text-sm h-full px-2 rounded-r-md focus:outline-none ${poppins.className}`}
                aria-label="Search category"
              >
                <option value="all">All</option>
                <option value="member">Member</option>
                <option value="tracking">Membership ID</option>
              </select>
            </div>
            <input
              type="text"
              placeholder={`Search ${searchCategory === 'all' ? 'attendance' : searchCategory}...`}
              className={`w-full bg-gray-800/50 backdrop-blur-sm border
                ${searchFocused ? "border-red-500 shadow-lg shadow-red-500/20" : "border-gray-700"}
                text-white pl-10 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 rounded-xl focus:outline-none
                text-sm md:text-lg bg-gray-800 ${poppins.className}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              aria-label="Search attendance records"
            />
          </div>
        </div>
      </div>

      {hasActiveFilters() && (
        <div className={`w-full px-4 md:px-8 pt-4 ${poppins.className}`}>
          <button
            onClick={resetFilters}
            className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-300 focus:outline-none"
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className={`w-full px-4 md:px-8 pt-4 pb-12 ${poppins.className}`}>
        {filteredData.length === 0 ? (
          <div className={`flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 ${poppins.className}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mb-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-2xl font-light tracking-wider">No attendance records found.</p>
            {hasActiveFilters() && (
              <button
                onClick={resetFilters}
                className={`mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none ${poppins.className}`}
                aria-label="Clear all filters"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="md:hidden text-center text-xs text-gray-500 py-2">
              ← Scroll horizontally to view all columns →
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
              <div 
                className="table-scroll-container"
                ref={tableContainerRef}
                style={{
                  maxHeight: 'calc(100vh - 220px)',
                  minHeight: '300px',
                  overflow: 'auto',
                }}
              >
                <table 
                  className={`w-full divide-y divide-gray-800 ${poppins.className}`} 
                  style={{ 
                    minWidth: '700px',
                    width: '100%'
                  }}
                  aria-label="Attendance records table"
                >
                  <thead className="bg-gray-900/50 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Photo
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Member
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        ID
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Date
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Time
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Hours
                      </th>
                      <th scope="col" className={`py-3 px-2 md:px-6 text-left text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider ${poppins.className}`}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {filteredData.map((record) => (
                      <tr
                        key={record.id}
                        className={`hover:bg-gray-700/30 transition-colors duration-300 group ${poppins.className}`}
                      >
                        <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
                          <div className="flex justify-center">
                            <ProfileIcon name={record.memberName} photo={record.memberPhoto} id={record.id} />
                          </div>
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
                          <span className="line-clamp-1">{record.memberName}</span>
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
                          <span className="line-clamp-1">{record.trackingId || "N/A"}</span>
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
                          <span className="line-clamp-1">{formatDate(record.date)}</span>
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell font-light text-gray-300 ${poppins.className}`}>
                          <span className="line-clamp-1">
                            {record.checkIn ? `${record.checkIn} - ${record.checkOut || "No logout"}` : "N/A"}
                          </span>
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell font-medium text-white ${poppins.className}`}>
                          {record.hours > 0 ? `${record.hours.toFixed(1)} hrs` : "N/A"}
                        </td>
                        <td className={`py-3 px-2 md:px-6 table-cell ${poppins.className}`}>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium status-badge ${
                            record.status.includes("Present")
                              ? "bg-green-900/20 text-green-300 border border-green-500"
                              : record.status === "Late"
                              ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
                              : "bg-red-900/20 text-red-300 border border-red-500"
                          }`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {showFilterModal && (
        <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${poppins.className}`}>
          <div className={`bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto ${poppins.className}`}>
            <div className={`flex items-center justify-between border-b border-gray-700 p-6 ${poppins.className}`}>
              <h2 className={`text-xl font-light tracking-wide text-white ${poppins.className}`}>Filter Attendance</h2>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
                aria-label="Close filter modal"
              >
                <X size={24} className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className={`p-6 space-y-6 ${poppins.className}`}>
              <div>
                <label className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
                  Attendance Status
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleFilterChange("status", "")}
                    className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                      filters.status === ""
                        ? "bg-red-500/20 border-red-500 text-white"
                        : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
                    } ${poppins.className}`}
                    aria-label="Show all statuses"
                  >
                    All Statuses
                  </button>
                  {["Present", "Late", "Absent"].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleFilterChange("status", status)}
                      className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                        filters.status === status
                          ? status === "Present"
                            ? "bg-green-500/20 border-green-500 text-white"
                            : status === "Late"
                            ? "bg-yellow-500/20 border-yellow-500 text-white"
                            : "bg-red-500/20 border-red-500 text-white"
                          : "bg-gray-700/50 border-gray-600 hover:border-gray-500 text-gray-300"
                      } ${poppins.className}`}
                      aria-label={`Filter by ${status} status`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dateFrom" className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
                    Date From
                  </label>
                  <input
                    type="date"
                    id="dateFrom"
                    className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
                    value={filters.dateFrom}
                    onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
                    aria-label="Filter from date"
                  />
                </div>

                <div>
                  <label htmlFor="dateTo" className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
                    Date To
                  </label>
                  <input
                    type="date"
                    id="dateTo"
                    className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
                    value={filters.dateTo}
                    onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                    aria-label="Filter to date"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hoursFrom" className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
                    Min Hours
                  </label>
                  <input
                    type="number"
                    id="hoursFrom"
                    placeholder="Minimum hours"
                    className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
                    value={filters.hoursFrom}
                    onChange={(e) => handleFilterChange("hoursFrom", e.target.value)}
                    min="0"
                    step="0.1"
                    aria-label="Minimum hours filter"
                  />
                </div>

                <div>
                  <label htmlFor="hoursTo" className={`block text-sm font-medium text-gray-300 mb-2 ${poppins.className}`}>
                    Max Hours
                  </label>
                  <input
                    type="number"
                    id="hoursTo"
                    placeholder="Maximum hours"
                    className={`w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none ${poppins.className}`}
                    value={filters.hoursTo}
                    onChange={(e) => handleFilterChange("hoursTo", e.target.value)}
                    min="0"
                    step="0.1"
                    aria-label="Maximum hours filter"
                  />
                </div>
              </div>

              <div className={`flex justify-end space-x-4 pt-4 ${poppins.className}`}>
                <button
                  onClick={resetFilters}
                  className={`px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white border border-gray-600 transition-colors duration-300 focus:outline-none ${poppins.className}`}
                  aria-label="Reset all filters"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setShowFilterModal(false)}
                  className={`px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors duration-300 focus:outline-none ${poppins.className}`}
                  aria-label="Apply filters"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceTable;