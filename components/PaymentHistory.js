
// "use client";

// import { useState, useEffect } from "react";

// const PaymentHistoryComponent = () => {
//   const [payments, setPayments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Mock data for frontend development
//     const mockPayments = [
//       {
//         id: 1,
//         memberName: "John Doe",
//         date: "2025-03-01",
//         amount: 49.99,
//         plan: "Monthly Premium",
//         status: "Completed"
//       },
//       {
//         id: 2,
//         memberName: "Jane Smith",
//         date: "2025-03-05",
//         amount: 199.99,
//         plan: "Annual Basic",
//         status: "Completed"
//       },
//       {
//         id: 3,
//         memberName: "Robert Johnson",
//         date: "2025-03-10",
//         amount: 79.99,
//         plan: "Monthly Platinum",
//         status: "Pending"
//       },
//       {
//         id: 4,
//         memberName: "Emily Davis",
//         date: "2025-02-28",
//         amount: 149.99,
//         plan: "Quarterly Premium",
//         status: "Failed"
//       }
//     ];

//     // Simulate API fetch delay
//     setTimeout(() => {
//       setPayments(mockPayments);
//       setIsLoading(false);
//     }, 800);
//   }, []);

//   const filteredPayments = payments.filter(payment =>
//     payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     payment.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     payment.status.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) return (
//     <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
//         <p className="text-xl font-light tracking-wider">Loading payment history...</p>
//       </div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="flex items-center justify-center h-screen bg-gray-800 text-red-500">
//       <div className="text-center">
//         <p className="text-xl font-light tracking-wider">Error: {error}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen w-full">
//       <div className="w-full grid grid-cols-1">
//         {/* Header with back button - Full width */}
//         <div className="flex items-center justify-between border-b border-gray-700 pb-6 px-8 pt-8">
//           <div className="flex items-center">
//             <button className="mr-6 p-2 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 transition-all duration-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//             </button>
//             <h1 className="text-3xl font-light tracking-wider uppercase">Payment History</h1>
//           </div>
          
//           <button className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded hover:border-red-500 transition-all duration-300">
//             <span className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//               </svg>
//               Filter View
//             </span>
//           </button>
//         </div>
        
//         {/* Search bar with red outline on the search icon */}
//         <div className="w-full px-8 pt-8">
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </span>
//             <input
//               type="text"
//               placeholder="Search member"
//               className="w-full bg-gray-800 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
        
//         {/* Payment table - Full width with vertical dividers */}
//         <div className="w-full px-8 pt-8 pb-8">
//           {filteredPayments.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <p className="text-xl font-light tracking-wider">No payment records found.</p>
//             </div>
//           ) : (
//             <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
//               <table className="min-w-full divide-y divide-gray-700">
//                 <thead>
//                   <tr className="border-b border-gray-700 divide-x divide-gray-700">
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">ID</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Photo</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Member</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Date</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Amount</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Plan</th>
//                     <th className="py-5 px-6 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-700">
//                   {filteredPayments.map((payment, index) => (
//                     <tr key={payment.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200 divide-x divide-gray-700">
//                       <td className="py-6 px-6 text-lg font-light border-r border-gray-700">{index + 1}</td>
//                       <td className="py-6 px-6 text-lg border-r border-gray-700">
//                         <div className="p-3 bg-gray-800 border border-red-500 text-red-500 rounded-full hover:bg-red-900 transition-colors duration-200 inline-flex items-center justify-center">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                           </svg>
//                         </div>
//                       </td>
//                       <td className="py-6 px-6 text-lg font-medium border-r border-gray-700">{payment.memberName}</td>
//                       <td className="py-6 px-6 text-lg font-light border-r border-gray-700">{new Date(payment.date).toLocaleDateString()}</td>
//                       <td className="py-6 px-6 text-lg font-medium border-r border-gray-700">${payment.amount.toFixed(2)}</td>
//                       <td className="py-6 px-6 text-lg font-light border-r border-gray-700">{payment.plan}</td>
//                       <td className="py-6 px-6 text-lg">
//                         <span className={`px-4 py-2 rounded-full text-sm ${
//                           payment.status === 'Completed' ? 'bg-green-900 text-green-200 border border-green-500' :
//                           payment.status === 'Pending' ? 'bg-yellow-900 text-yellow-200 border border-yellow-500' :
//                           'bg-red-900 text-red-200 border border-red-500'
//                         }`}>
//                           {payment.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentHistoryComponent;
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const PaymentHistoryComponent = () => {
//   const router = useRouter();
//   const [payments, setPayments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchFocused, setSearchFocused] = useState(false);

//   useEffect(() => {
//     // Mock data for frontend development
//     const mockPayments = [
//       {
//         id: 1,
//         memberName: "John Doe",
//         plan: "Monthly Premium",
//         amountPaid: 49.99,
//         transactionId: "TXN87654321",
//         paymentDate: "2025-03-01",
//         renewalDate: "2025-04-01",
//         status: "Completed",
//       },
//       {
//         id: 2,
//         memberName: "Jane Smith",
//         paymentDate: "2025-03-05",
//         renewalDate: "2026-03-05",
//         transactionId: "TXN98765432",
//         amountPaid: 199.99,
//         plan: "Annual Basic",
//         status: "Completed",
//       },
//       {
//         id: 3,
//         memberName: "Robert Johnson",
//         paymentDate: "2025-03-10",
//         renewalDate: "2025-04-10",
//         transactionId: "TXN12345678",
//         amountPaid: 79.99,
//         plan: "Monthly Platinum",
//         status: "Pending",
//       },
//       {
//         id: 4,
//         memberName: "Emily Davis",
//         paymentDate: "2025-02-28",
//         renewalDate: "2025-05-28",
//         transactionId: "TXN23456789",
//         amountPaid: 149.99,
//         plan: "Quarterly Premium",
//         status: "Failed",
//       },
//     ];

//     // Simulate API fetch delay
//     setTimeout(() => {
//       setPayments(mockPayments);
//       setIsLoading(false);
//     }, 800);
//   }, []);

//   const filteredPayments = payments.filter(
//     (payment) =>
//       payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       payment.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       payment.status.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const navigateToDashboard = () => {
//     router.push("/dashboard"); // Replace with your dashboard route
//   };

//   if (isLoading)
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
//           <p className="text-2xl font-light tracking-wider">
//             Loading payment history...
//           </p>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500">
//         <div className="text-center">
//           <p className="text-2xl font-light tracking-wider">Error: {error}</p>
//         </div>
//       </div>
//     );

//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
//       <div className="w-full grid grid-cols-1">
//         {/* Enhanced Header with Back Button */}
//         <div className="flex items-center justify-between border-b border-gray-800 pb-6 px-8 pt-8">
//           <div className="flex items-center">
//             <button
//               onClick={navigateToDashboard}
//               className="mr-6 p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-red-500 group-hover:scale-110 transform transition-all duration-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                 />
//               </svg>
//             </button>
//             <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
//               Payment History
//             </h1>
//           </div>

//           <button className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
//             <span className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2 text-red-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
//                 />
//               </svg>
//               <span className="font-medium">Filter View</span>
//             </span>
//           </button>
//         </div>

//         {/* Premium Search Bar */}
//         <div className="w-full px-8 pt-10">
//           <div
//             className={`relative transition-all duration-500 ${
//               searchFocused ? "transform scale-105" : ""
//             }`}
//           >
//             <span className="absolute inset-y-0 left-0 flex items-center pl-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`h-5 w-5 transition-all duration-300 ${
//                   searchFocused ? "text-red-500" : "text-gray-500"
//                 }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={1.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </span>
//             <input
//               type="text"
//               placeholder="Search by member, plan or status"
//               className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
//                 searchFocused
//                   ? "border-red-500 shadow-lg shadow-red-500/20"
//                   : "border-gray-700"
//               } text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg`}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setSearchFocused(true)}
//               onBlur={() => setSearchFocused(false)}
//             />
//           </div>
//         </div>

//         {/* Luxury Payment Table */}
//         <div className="w-full px-8 pt-10 pb-12">
//           {filteredPayments.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-20 w-20 mb-6 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1}
//                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <p className="text-2xl font-light tracking-wider">
//                 No payment records found.
//               </p>
//             </div>
//           ) : (
//             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
//               <div className="overflow-x-auto">
//                 <table className="w-full divide-y divide-gray-800">
//                   <thead>
//                     <tr className="bg-gray-900/50">
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         ID
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Photo
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Member
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Plan
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Amount
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Transaction ID
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Payment Date
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Renewal
//                       </th>
//                       <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-800">
//                     {filteredPayments.map((payment, index) => (
//                       <tr
//                         key={payment.id}
//                         className="hover:bg-gray-700/30 transition-colors duration-300 group"
//                       >
//                         <td className="py-5 px-6 text-sm font-light">
//                           {index + 1}
//                         </td>
//                         <td className="py-5 px-6 text-sm">
//                           <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center group-hover:scale-110 transform">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={1.5}
//                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                               />
//                             </svg>
//                           </div>
//                         </td>
//                         <td className="py-5 px-6 text-sm font-medium text-white">
//                           {payment.memberName}
//                         </td>
//                         <td className="py-5 px-6 text-sm font-light text-gray-300">
//                           {payment.plan}
//                         </td>
//                         <td className="py-5 px-6 text-sm font-medium text-white">
//                           <span className="bg-gradient-to-r from-gray-900 to-black px-4 py-1 rounded-lg border border-gray-700">
//                             ${payment.amountPaid.toFixed(2)}
//                           </span>
//                         </td>
//                         <td className="py-5 px-6 text-sm font-light text-gray-400">
//                           {payment.transactionId}
//                         </td>
//                         <td className="py-5 px-6 text-sm font-light text-gray-300">
//                           {new Date(payment.paymentDate).toLocaleDateString()}
//                         </td>
//                         <td className="py-5 px-6 text-sm font-light text-gray-300">
//                           {new Date(payment.renewalDate).toLocaleDateString()}
//                         </td>
//                         <td className="py-5 px-6 text-sm">
//                           <span
//                             className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
//                               payment.status === "Completed"
//                                 ? "bg-green-900/20 text-green-300 border border-green-500"
//                                 : payment.status === "Pending"
//                                 ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
//                                 : "bg-red-900/20 text-red-300 border border-red-500"
//                             } transition-all duration-300 backdrop-blur-sm`}
//                           >
//                             {payment.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentHistoryComponent;
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PaymentHistoryComponent = () => {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    status: "",
    plan: "",
    dateRange: {
      start: "",
      end: ""
    },
    amountRange: {
      min: "",
      max: ""
    }
  });

  useEffect(() => {
    // Mock data for frontend development
    const mockPayments = [
      {
        id: 1,
        memberName: "John Doe",
        plan: "Monthly Premium",
        amountPaid: 49.99,
        transactionId: "TXN87654321",
        paymentDate: "2025-03-01",
        renewalDate: "2025-04-01",
        status: "Completed",
      },
      {
        id: 2,
        memberName: "Jane Smith",
        paymentDate: "2025-03-05",
        renewalDate: "2026-03-05",
        transactionId: "TXN98765432",
        amountPaid: 199.99,
        plan: "Annual Basic",
        status: "Completed",
      },
      {
        id: 3,
        memberName: "Robert Johnson",
        paymentDate: "2025-03-10",
        renewalDate: "2025-04-10",
        transactionId: "TXN12345678",
        amountPaid: 79.99,
        plan: "Monthly Platinum",
        status: "Pending",
      },
      {
        id: 4,
        memberName: "Emily Davis",
        paymentDate: "2025-02-28",
        renewalDate: "2025-05-28",
        transactionId: "TXN23456789",
        amountPaid: 149.99,
        plan: "Quarterly Premium",
        status: "Failed",
      },
    ];

    // Simulate API fetch delay
    setTimeout(() => {
      setPayments(mockPayments);
      setIsLoading(false);
    }, 800);
  }, []);

  // Get unique values for filter options
  const getUniqueValues = (field) => {
    return [...new Set(payments.map(payment => payment[field]))];
  };

  const uniquePlans = getUniqueValues("plan");
  const uniqueStatuses = getUniqueValues("status");

  const filteredPayments = payments.filter(payment => {
    // Search filter
    const matchesSearch = searchTerm === "" || 
      payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const matchesStatus = filters.status === "" || payment.status === filters.status;
    
    // Plan filter
    const matchesPlan = filters.plan === "" || payment.plan === filters.plan;
    
    // Date range filter
    const paymentDate = new Date(payment.paymentDate);
    const matchesDateStart = !filters.dateRange.start || paymentDate >= new Date(filters.dateRange.start);
    const matchesDateEnd = !filters.dateRange.end || paymentDate <= new Date(filters.dateRange.end);
    
    // Amount range filter
    const matchesAmountMin = !filters.amountRange.min || payment.amountPaid >= Number(filters.amountRange.min);
    const matchesAmountMax = !filters.amountRange.max || payment.amountPaid <= Number(filters.amountRange.max);
    
    return matchesSearch && matchesStatus && matchesPlan && 
           matchesDateStart && matchesDateEnd && 
           matchesAmountMin && matchesAmountMax;
  });

  const navigateToDashboard = () => {
    router.push("/dashboard"); // Replace with your dashboard route
  };

  const handleFilterChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFilters(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const resetFilters = () => {
    setFilters({
      status: "",
      plan: "",
      dateRange: {
        start: "",
        end: ""
      },
      amountRange: {
        min: "",
        max: ""
      }
    });
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-wider">
            Loading payment history...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500">
        <div className="text-center">
          <p className="text-2xl font-light tracking-wider">Error: {error}</p>
        </div>
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
      <div className="w-full grid grid-cols-1">
        {/* Enhanced Header with Back Button */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-6 px-8 pt-8">
          <div className="flex items-center">
            <button
              onClick={navigateToDashboard}
              className="mr-6 p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 group-hover:scale-110 transform transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Payment History
            </h1>
          </div>

          <button 
            className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
            onClick={() => setShowFilterModal(!showFilterModal)}
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="font-medium">Filter View</span>
            </span>
          </button>
        </div>

        {/* Premium Search Bar */}
        <div className="w-full px-8 pt-10">
          <div
            className={`relative transition-all duration-500 ${
              searchFocused ? "transform scale-105" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-all duration-300 ${
                  searchFocused ? "text-red-500" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by member, plan or status"
              className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                searchFocused
                  ? "border-red-500 shadow-lg shadow-red-500/20"
                  : "border-gray-700"
              } text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-lg`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Filter Modal */}
        {showFilterModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setShowFilterModal(false)}
            ></div>
            
            <div className="relative bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/20 w-full max-w-2xl overflow-hidden animate-fade-in transform transition-transform duration-300 scale-100">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-medium text-white tracking-wide flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Advanced Filters
                </h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowFilterModal(false)}
                >
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
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Payment Status</label>
                  <select 
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                  >
                    <option value="">All Statuses</option>
                    {uniqueStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                {/* Plan Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subscription Plan</label>
                  <select 
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={filters.plan}
                    onChange={(e) => handleFilterChange("plan", e.target.value)}
                  >
                    <option value="">All Plans</option>
                    {uniquePlans.map(plan => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}
                  </select>
                </div>
                
                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Payment Date Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">From</label>
                      <input 
                        type="date"
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={filters.dateRange.start}
                        onChange={(e) => handleFilterChange("dateRange.start", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">To</label>
                      <input 
                        type="date"
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={filters.dateRange.end}
                        onChange={(e) => handleFilterChange("dateRange.end", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Amount Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Amount Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Min ($)</label>
                      <input 
                        type="number"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={filters.amountRange.min}
                        onChange={(e) => handleFilterChange("amountRange.min", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Max ($)</label>
                      <input 
                        type="number"
                        placeholder="1000.00"
                        min="0"
                        step="0.01"
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={filters.amountRange.max}
                        onChange={(e) => handleFilterChange("amountRange.max", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-700 flex justify-between">
                <button 
                  className="text-gray-300 px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  onClick={resetFilters}
                >
                  Clear Filters
                </button>
                <button 
                  className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-red-500/20"
                  onClick={() => setShowFilterModal(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Luxury Payment Table */}
        <div className="w-full px-8 pt-10 pb-12">
          {/* Summary of active filters */}
          {(filters.status || filters.plan || filters.dateRange.start || filters.dateRange.end || filters.amountRange.min || filters.amountRange.max) && (
            <div className="mb-6 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-400 text-sm mr-2">Active filters:</span>
                
                {filters.status && (
                  <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
                    Status: {filters.status}
                    <button 
                      className="ml-2 hover:text-red-500"
                      onClick={() => handleFilterChange("status", "")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
                
                {filters.plan && (
                  <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
                    Plan: {filters.plan}
                    <button 
                      className="ml-2 hover:text-red-500"
                      onClick={() => handleFilterChange("plan", "")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
                
                {(filters.dateRange.start || filters.dateRange.end) && (
                  <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
                    Date: {filters.dateRange.start ? new Date(filters.dateRange.start).toLocaleDateString() : "Any"} 
                    {" "}to{" "} 
                    {filters.dateRange.end ? new Date(filters.dateRange.end).toLocaleDateString() : "Any"}
                    <button 
                      className="ml-2 hover:text-red-500"
                      onClick={() => {
                        handleFilterChange("dateRange.start", "");
                        handleFilterChange("dateRange.end", "");
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
                
                {(filters.amountRange.min || filters.amountRange.max) && (
                  <span className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full flex items-center">
                    Amount: ${filters.amountRange.min || "0"} to ${filters.amountRange.max || "∞"}
                    <button 
                      className="ml-2 hover:text-red-500"
                      onClick={() => {
                        handleFilterChange("amountRange.min", "");
                        handleFilterChange("amountRange.max", "");
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}
                
                <button 
                  className="ml-auto text-red-400 text-xs hover:text-red-300 transition-colors duration-300 underline"
                  onClick={resetFilters}
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
          
          {filteredPayments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mb-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-2xl font-light tracking-wider">
                No payment records found.
              </p>
              {(filters.status || filters.plan || filters.dateRange.start || filters.dateRange.end || filters.amountRange.min || filters.amountRange.max) && (
                <button 
                  className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-300"
                  onClick={resetFilters}
                >
                  Clear filters and try again
                </button>
              )}
            </div>
          ) : (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
              <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-800">
                  <thead>
                    <tr className="bg-gray-900/50">
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Photo
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Member
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Payment Date
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Renewal
                      </th>
                      <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {filteredPayments.map((payment, index) => (
                      <tr
                        key={payment.id}
                        className="hover:bg-gray-700/30 transition-colors duration-300 group"
                      >
                        <td className="py-5 px-6 text-sm font-light">
                          {index + 1}
                        </td>
                        <td className="py-5 px-6 text-sm">
                          <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center group-hover:scale-110 transform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-sm font-medium text-white">
                          {payment.memberName}
                        </td>
                        <td className="py-5 px-6 text-sm font-light text-gray-300">
                          {payment.plan}
                        </td>
                        <td className="py-5 px-6 text-sm font-medium text-white">
                          <span className="bg-gradient-to-r from-gray-900 to-black px-4 py-1 rounded-lg border border-gray-700">
                            ${payment.amountPaid.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-sm font-light text-gray-400">
                          {payment.transactionId}
                        </td>
                        <td className="py-5 px-6 text-sm font-light text-gray-300">
                          {new Date(payment.paymentDate).toLocaleDateString()}
                        </td>
                        <td className="py-5 px-6 text-sm font-light text-gray-300">
                          {new Date(payment.renewalDate).toLocaleDateString()}
                        </td>
                        <td className="py-5 px-6 text-sm">
                          <span
                            className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
                              payment.status === "Completed"
                                ? "bg-green-900/20 text-green-300 border border-green-500"
                                : payment.status === "Pending"
                                ? "bg-yellow-900/20 text-yellow-300 border border-yellow-500"
                                : "bg-red-900/20 text-red-300 border border-red-500"
                            } transition-all duration-300 backdrop-blur-sm`}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryComponent;