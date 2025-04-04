// // // // import React from "react";

// // // // const Dashboard = () => {
// // // //   // Sample data for the table
// // // //   const data = [
// // // //     { id: 1, name: "John Doe", year: 2023 },
// // // //     { id: 2, name: "Jane Smith", year: 2022 },
// // // //     { id: 3, name: "Robert Johnson", year: 2021 },
// // // //     { id: 4, name: "Emily Davis", year: 2020 },
// // // //   ];

// // // //   return (
// // // //     <div className="bg-white shadow-md rounded-lg overflow-hidden">
// // // //       <table className="min-w-full divide-y divide-gray-200">
// // // //         <thead className="bg-gray-50">
// // // //           <tr>
// // // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //               Name
// // // //             </th>
// // // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //               Year
// // // //             </th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody className="bg-white divide-y divide-gray-200">
// // // //           {data.map((item) => (
// // // //             <tr key={item.id}>
// // // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // //                 {item.name}
// // // //               </td>
// // // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                 {item.year}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation";
// // // import Link from 'next/link';
// // // import { 
// // //   Search, 
// // //   Plus, 
// // //   ArrowRight, 
// // //   Award, 
// // //   Users, 
// // //   Calendar, 
// // //   DollarSign, 
// // //   BarChart2, 
// // //   TrendingUp,
// // //   Settings,
// // //   Bell,
// // //   User,
// // //   LogOut
// // // } from 'lucide-react';

// // // const DashboardComponent = () => {
// // //   const router = useRouter();
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [dashboardStats, setDashboardStats] = useState({});
// // //   const [attendanceSummary, setAttendanceSummary] = useState([]);
// // //   const [memberPerformance, setMemberPerformance] = useState([]);
// // //   const [recentActivity, setRecentActivity] = useState([]);
// // //   const [activePage, setActivePage] = useState("dashboard");
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // //   const [currentTime, setCurrentTime] = useState(new Date());
// // //   const [stats, setStats] = useState({
// // //     totalRevenue: 0,
// // //     activeMembers: 0,
// // //     pendingPayments: 0,
// // //     recentPayments: []
// // //   });
// // //   const [activeTab, setActiveTab] = useState('overview');

// // //   useEffect(() => {
// // //     // Simulate API fetch delay
// // //     setTimeout(() => {
// // //       // Mock dashboard statistics
// // //       setDashboardStats({
// // //         totalMembers: 132,
// // //         presentToday: 98,
// // //         absentToday: 24,
// // //         lateToday: 10,
// // //         averageHours: 7.8,
// // //         remoteWork: 45,
// // //         officeWork: 42,
// // //         hybridWork: 11,
// // //       });

// // //       // Mock attendance summary by date
// // //       setAttendanceSummary([
// // //         { date: "2025-03-10", present: 95, absent: 27, late: 10, totalHours: 789.5 },
// // //         { date: "2025-03-11", present: 98, absent: 24, late: 10, totalHours: 795.2 },
// // //         { date: "2025-03-12", present: 102, absent: 20, late: 8, totalHours: 812.6 },
// // //         { date: "2025-03-13", present: 105, absent: 17, late: 7, totalHours: 834.1 },
// // //         { date: "2025-03-14", present: 92, absent: 30, late: 12, totalHours: 768.3 },
// // //         { date: "2025-03-15", present: 82, absent: 40, late: 5, totalHours: 682.5 },
// // //         { date: "2025-03-16", present: 78, absent: 44, late: 4, totalHours: 654.9 },
// // //       ]);

// // //       // Mock top performer data
// // //       setMemberPerformance([
// // //         { id: 1, name: "Jane Smith", attendance: 98.7, avgHours: 8.9, performance: 95, workType: "Office" },
// // //         { id: 2, name: "John Doe", attendance: 97.5, avgHours: 8.7, performance: 92, workType: "Remote" },
// // //         { id: 3, name: "Robert Johnson", attendance: 96.2, avgHours: 8.5, performance: 90, workType: "Hybrid" },
// // //         { id: 4, name: "Emily Davis", attendance: 94.8, avgHours: 8.3, performance: 87, workType: "Office" },
// // //         { id: 5, name: "Michael Wilson", attendance: 93.5, avgHours: 8.1, performance: 85, workType: "Remote" },
// // //       ]);

// // //       // Mock recent activity
// // //       setRecentActivity([
// // //         { id: 1, memberName: "Jane Smith", action: "Checked in", time: "08:45 AM", date: "2025-03-17" },
// // //         { id: 2, memberName: "John Doe", action: "Checked in", time: "09:00 AM", date: "2025-03-17" },
// // //         { id: 3, memberName: "Robert Johnson", action: "Marked late", time: "10:15 AM", date: "2025-03-17" },
// // //         { id: 4, memberName: "Emily Davis", action: "Marked absent", time: "09:30 AM", date: "2025-03-17" },
// // //         { id: 5, memberName: "Michael Wilson", action: "Checked in", time: "08:50 AM", date: "2025-03-17" },
// // //       ]);

// // //       setIsLoading(false);
// // //     }, 1000);

// // //     // Mock data for frontend development
// // //     const mockPayments = [
// // //       {
// // //         id: 1,
// // //         memberName: "John Doe",
// // //         plan: "Monthly Premium",
// // //         amountPaid: 49.99,
// // //         transactionId: "TXN87654321",
// // //         paymentDate: "2025-03-01",
// // //         renewalDate: "2025-04-01",
// // //         status: "Completed",
// // //       },
// // //       {
// // //         id: 2,
// // //         memberName: "Jane Smith",
// // //         paymentDate: "2025-03-05",
// // //         renewalDate: "2026-03-05",
// // //         transactionId: "TXN98765432",
// // //         amountPaid: 199.99,
// // //         plan: "Annual Basic",
// // //         status: "Completed",
// // //       },
// // //       {
// // //         id: 3,
// // //         memberName: "Robert Johnson",
// // //         paymentDate: "2025-03-10",
// // //         renewalDate: "2025-04-10",
// // //         transactionId: "TXN12345678",
// // //         amountPaid: 79.99,
// // //         plan: "Monthly Platinum",
// // //         status: "Pending",
// // //       },
// // //       {
// // //         id: 4,
// // //         memberName: "Emily Davis",
// // //         paymentDate: "2025-02-28",
// // //         renewalDate: "2025-05-28",
// // //         transactionId: "TXN23456789",
// // //         amountPaid: 149.99,
// // //         plan: "Quarterly Premium",
// // //         status: "Failed",
// // //       },
// // //     ];

// // //     // Calculate dashboard stats from mock data
// // //     const totalRevenue = mockPayments
// // //       .filter(payment => payment.status === "Completed")
// // //       .reduce((sum, payment) => sum + payment.amountPaid, 0);

// // //     const uniqueMembers = [...new Set(mockPayments.map(payment => payment.memberName))];
// // //     const pendingPayments = mockPayments.filter(payment => payment.status === "Pending").length;

// // //     // Sort payments by date (newest first)
// // //     const recentPayments = [...mockPayments].sort((a, b) => 
// // //       new Date(b.paymentDate) - new Date(a.paymentDate)
// // //     ).slice(0, 3);

// // //     // Simulate API fetch delay
// // //     setTimeout(() => {
// // //       setStats({
// // //         totalRevenue,
// // //         activeMembers: uniqueMembers.length,
// // //         pendingPayments,
// // //         recentPayments
// // //       });
// // //       setIsLoading(false);
// // //     }, 800);

// // //     const timer = setInterval(() => {
// // //       setCurrentTime(new Date());
// // //     }, 1000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   const navigateToAttendanceHistory = () => {
// // //     router.push("/attendance-history");
// // //   };

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case "Present":
// // //       case "present":
// // //         return "text-green-500 bg-green-900/20 border-green-500";
// // //       case "Late":
// // //       case "late":
// // //         return "text-yellow-500 bg-yellow-900/20 border-yellow-500";
// // //       case "Absent":
// // //       case "absent":
// // //         return "text-red-500 bg-red-900/20 border-red-500";
// // //       default:
// // //         return "text-gray-500 bg-gray-900/20 border-gray-500";
// // //     }
// // //   };

// // //   const formatDate = (date) => {
// // //     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// // //     return date.toLocaleDateString('en-US', options);
// // //   };

// // //   const formatTime = (date) => {
// // //     return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // //         <div className="text-center">
// // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // //           <p className="text-2xl font-light tracking-wider">Loading dashboard...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // //       {/* Header Section */}
// // //       <div className="border-b border-gray-800 pb-6 px-8 pt-8">
// // //         <div className="flex items-center justify-between">
// // //           <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
// // //             Premium Dashboard
// // //           </h1>
// // //           <div className="flex items-center space-x-4">
// // //             <button className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center">
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //               </svg>
// // //               <span className="font-medium">New Member</span>
// // //             </button>
// // //             <div className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20">
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // //               </svg>
// // //             </div>
// // //             <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center">
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //               </svg>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Dashboard Navigation */}
// // //       <div className="px-8 pt-6">
// // //         <div className="flex space-x-6 border-b border-gray-800">
// // //           <button 
// // //             onClick={() => setActiveTab('overview')}
// // //             className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
// // //               activeTab === 'overview' 
// // //                 ? 'text-white' 
// // //                 : 'text-gray-500 hover:text-gray-300'
// // //             }`}
// // //           >
// // //             Overview
// // //             {activeTab === 'overview' && (
// // //               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
// // //             )}
// // //           </button>
// // //           <button 
// // //   onClick={() => setActiveTab('members')}
// // //   className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
// // //     activeTab === 'members' 
// // //       ? 'text-white' 
// // //       : 'text-gray-500 hover:text-gray-300'
// // //   }`}
// // // >
// // //   <Link href="/Member">Members</Link>
// // //   {activeTab === 'members' && (
// // //     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
// // //   )}
// // // </button>

// // // <button 
// // //   onClick={() => setActiveTab('payments')}
// // //   className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
// // //     activeTab === 'payments' 
// // //       ? 'text-white' 
// // //       : 'text-gray-500 hover:text-gray-300'
// // //   }`}
// // // >
// // //   <Link href="/payments">Payments</Link>
// // //   {activeTab === 'payments' && (
// // //     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
// // //   )}
// // // </button>
// // //           <button 
// // //             onClick={() => setActiveTab('analytics')}
// // //             className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
// // //               activeTab === 'analytics' 
// // //                 ? 'text-white' 
// // //                 : 'text-gray-500 hover:text-gray-300'
// // //             }`}
// // //           >
// // //             Analytics
// // //             {activeTab === 'analytics' && (
// // //               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
// // //             )}
// // //           </button>
// // //           <button 
// // //             onClick={() => setActiveTab('settings')}
// // //             className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
// // //               activeTab === 'settings' 
// // //                 ? 'text-white' 
// // //                 : 'text-gray-500 hover:text-gray-300'
// // //             }`}
// // //           >
// // //             Settings
// // //             {activeTab === 'settings' && (
// // //               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Main Dashboard Content */}
// // //       <div className="px-8 py-8">
// // //         {activeTab === 'overview' && (
// // //           <>
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
// // //               {/* Total Revenue Card */}
// // //               <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
// // //                 <div className="flex justify-between items-start mb-4">
// // //                   <div>
// // //                     <p className="text-gray-400 text-sm">Total Revenue</p>
// // //                     <h3 className="text-3xl font-light mt-1">${stats.totalRevenue.toFixed(2)}</h3>
// // //                   </div>
// // //                   <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                     </svg>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <span className="flex items-center text-green-400 text-sm">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// // //                     </svg>
// // //                     8.2%
// // //                   </span>
// // //                   <span className="text-gray-500 text-sm ml-2">from last month</span>
// // //                 </div>
// // //               </div>

// // //               {/* Active Members Card */}
// // //               <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
// // //                 <div className="flex justify-between items-start mb-4">
// // //                   <div>
// // //                     <p className="text-gray-400 text-sm">Active Members</p>
// // //                     <h3 className="text-3xl font-light mt-1">{stats.activeMembers}</h3>
// // //                   </div>
// // //                   <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
// // //                     </svg>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <span className="flex items-center text-green-400 text-sm">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// // //                     </svg> 
// // //                     3.1%
// // //                   </span>
// // //                   <span className="text-gray-500 text-sm ml-2">from last month</span>
// // //                 </div>
// // //               </div>

// // //               {/* Pending Payments Card */}
// // //               <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
// // //                 <div className="flex justify-between items-start mb-4">
// // //                   <div>
// // //                     <p className="text-gray-400 text-sm">Pending Payments</p>
// // //                     <h3 className="text-3xl font-light mt-1">{stats.pendingPayments}</h3>
// // //                   </div>
// // //                   <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
// // //                     </svg>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <span className="flex items-center text-yellow-400 text-sm">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
// // //                     </svg>
// // //                     {stats.pendingPayments > 0 ? 'Action needed' : 'All clear'}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Recent Payments Table */}
// // //             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 mb-8">
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-xl font-light">Recent Payments</h2>
// // //                 <button className="text-gray-400 text-sm hover:text-white transition-colors duration-300 flex items-center">
// // //                   <span>View All</span>
// // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                   </svg>
// // //                 </button>
// // //               </div>
// // //               <div className="overflow-x-auto">
// // //                 <table className="w-full">
// // //                   <thead>
// // //                     <tr className="border-b border-gray-800">
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Member</th>
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Plan</th>
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Amount</th>
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Date</th>
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Renewal</th>
// // //                       <th className="text-left py-3 text-sm font-medium text-gray-400">Status</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {stats.recentPayments.map((payment) => (
// // //                       <tr key={payment.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
// // //                         <td className="py-4 text-sm">{payment.memberName}</td>
// // //                         <td className="py-4 text-sm">{payment.plan}</td>
// // //                         <td className="py-4 text-sm">${payment.amountPaid.toFixed(2)}</td>
// // //                         <td className="py-4 text-sm">{new Date(payment.paymentDate).toLocaleDateString()}</td>
// // //                         <td className="py-4 text-sm">{new Date(payment.renewalDate).toLocaleDateString()}</td>
// // //                         <td className="py-4 text-sm">
// // //                           <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
// // //                             {payment.status}
// // //                           </span>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>

// // //             {/* Plan Distribution Chart */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //               <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
// // //                 <h2 className="text-xl font-light mb-6">Plan Distribution</h2>
// // //                 <div className="flex justify-center items-center h-64">
// // //                   {/* Chart placeholder - in a real app, insert chart component here */}
// // //                   <div className="text-center text-gray-400">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
// // //                     </svg>
// // //                     <p>Chart would be rendered here</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
              
// // //               <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
// // //                 <h2 className="text-xl font-light mb-6">Upcoming Renewals</h2>
// // //                 <div className="space-y-4">
// // //                   {stats.recentPayments
// // //                     .filter(payment => new Date(payment.renewalDate) > new Date())
// // //                     .sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate))
// // //                     .map(payment => (
// // //                       <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
// // //                         <div>
// // //                           <p className="font-medium">{payment.memberName}</p>
// // //                           <p className="text-sm text-gray-400">{payment.plan}</p>
// // //                         </div>
// // //                         <div className="text-right">
// // //                           <p className="text-sm text-gray-400">Renews on</p>
// // //                           <p className="font-medium">{new Date(payment.renewalDate).toLocaleDateString()}</p>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </>
// // //         )}

// // //         {activeTab === 'members' && (
// // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
// // //             <h2 className="text-xl font-light mb-6">Members</h2>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="border-b border-gray-800">
// // //                     <th className="text-left py-3 text-sm font-medium text-gray-400">Name</th>
// // //                     <th className="text-left py-3 text-sm font-medium text-gray-400">Attendance</th>
// // //                     <th className="text-left py-3 text-sm font-medium text-gray-400">Avg Hours</th>
// // //                     <th className="text-left py-3 text-sm font-medium text-gray-400">Performance</th>
// // //                     <th className="text-left py-3 text-sm font-medium text-gray-400">Work Type</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {memberPerformance.map((member) => (
// // //                     <tr key={member.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
// // //                       <td className="py-4 text-sm">{member.name}</td>
// // //                       <td className="py-4 text-sm">{member.attendance}%</td>
// // //                       <td className="py-4 text-sm">{member.avgHours}</td>
// // //                       <td className="py-4 text-sm">{member.performance}%</td>
// // //                       <td className="py-4 text-sm">
// // //                         <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(member.workType)}`}>
// // //                           {member.workType}
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
// // //     </div>
// // //   );
// // // };

// // // export default DashboardComponent;
// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { BarChart2, Calendar, DollarSign, Users, Clock, PieChart } from "lucide-react";
// // // import { Poppins } from 'next/font/google';

// // // const poppins = Poppins({
// // //   weight: ['300', '400', '500', '600', '700'],
// // //   subsets: ['latin'],
// // //   display: 'swap',
// // //   variable: '--font-poppins'
// // // });

// // // const Dashboard = () => {
// // //   const [activeTab, setActiveTab] = useState('overview');
// // //   const [stats, setStats] = useState({
// // //     members: 0,
// // //     activeMembers: 0,
// // //     trainers: 0,
// // //     revenue: 0,
// // //     attendance: 0
// // //   });

// // //   useEffect(() => {
// // //     setStats({
// // //       members: 142,
// // //       activeMembers: 118,
// // //       trainers: 8,
// // //       revenue: 524300,
// // //       attendance: 87
// // //     });
// // //   }, []);

// // //   const formatCurrency = (amount) => {
// // //     return new Intl.NumberFormat('en-IN', {
// // //       style: 'currency',
// // //       currency: 'INR',
// // //       minimumFractionDigits: 0
// // //     }).format(amount);
// // //   };

// // //   return (
// // //     <div className={`bg-gray-900 text-white min-h-screen ${poppins.variable} font-sans flex flex-col`}>
// // //       <style jsx global>{`
// // //         :root {
// // //           --font-poppins: ${poppins.style.fontFamily};
// // //         }
        
// // //         body {
// // //           font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, sans-serif;
// // //           background-color: #0f172a;
// // //           margin: 0;
// // //           padding: 0;
// // //         }
        
// // //         ::-webkit-scrollbar {
// // //           width: 8px;
// // //         }
// // //         ::-webkit-scrollbar-track {
// // //           background: #1e293b;
// // //         }
// // //         ::-webkit-scrollbar-thumb {
// // //           background: #475569;
// // //           border-radius: 4px;
// // //         }
        
// // //         .glass-card {
// // //           background: rgba(15, 23, 42, 0.7);
// // //           backdrop-filter: blur(10px);
// // //           border: 1px solid rgba(255, 255, 255, 0.1);
// // //         }
// // //       `}</style>

// // //       <main className="flex-1 overflow-auto p-6">
// // //         <div className="max-w-7xl mx-auto">
// // //           {/* Quick Stats */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
// // //             <div className="glass-card rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="text-sm text-gray-400">Total Members</p>
// // //                   <h3 className="text-2xl font-bold mt-1">{stats.members}</h3>
// // //                 </div>
// // //                 <div className="p-3 rounded-full bg-red-500/10 text-red-400">
// // //                   <Users className="h-6 w-6" />
// // //                 </div>
// // //               </div>
// // //               <p className="text-xs text-gray-400 mt-3">
// // //                 <span className="text-green-400">+{stats.activeMembers} active</span> this month
// // //               </p>
// // //             </div>
            
// // //             <div className="glass-card rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="text-sm text-gray-400">Active Members</p>
// // //                   <h3 className="text-2xl font-bold mt-1">{stats.activeMembers}</h3>
// // //                 </div>
// // //                 <div className="p-3 rounded-full bg-green-500/10 text-green-400">
// // //                   <Users className="h-6 w-6" />
// // //                 </div>
// // //               </div>
// // //               <p className="text-xs text-gray-400 mt-3">
// // //                 <span className="text-green-400">+12.5%</span> from last month
// // //               </p>
// // //             </div>
            
// // //             <div className="glass-card rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="text-sm text-gray-400">Trainers</p>
// // //                   <h3 className="text-2xl font-bold mt-1">{stats.trainers}</h3>
// // //                 </div>
// // //                 <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
// // //                   <Users className="h-6 w-6" />
// // //                 </div>
// // //               </div>
// // //               <p className="text-xs text-gray-400 mt-3">
// // //                 <span className="text-green-400">+2 new</span> this quarter
// // //               </p>
// // //             </div>
            
// // //             <div className="glass-card rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="text-sm text-gray-400">Monthly Revenue</p>
// // //                   <h3 className="text-2xl font-bold mt-1">{formatCurrency(stats.revenue)}</h3>
// // //                 </div>
// // //                 <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
// // //                   <DollarSign className="h-6 w-6" />
// // //                 </div>
// // //               </div>
// // //               <p className="text-xs text-gray-400 mt-3">
// // //                 <span className="text-green-400">+8.2%</span> from last month
// // //               </p>
// // //             </div>
            
// // //             <div className="glass-card rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="text-sm text-gray-400">Today's Attendance</p>
// // //                   <h3 className="text-2xl font-bold mt-1">{stats.attendance}%</h3>
// // //                 </div>
// // //                 <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400">
// // //                   <Clock className="h-6 w-6" />
// // //                 </div>
// // //               </div>
// // //               <p className="text-xs text-gray-400 mt-3">
// // //                 <span className="text-green-400">+5%</span> from yesterday
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Dashboard Content */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //             <div className="lg:col-span-2 space-y-6">
// // //               {/* Members Summary */}
// // //               <div className="glass-card rounded-xl p-6 border border-gray-700">
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <h2 className="text-xl font-semibold">Recent Members</h2>
// // //                   <button className="text-sm text-red-400 hover:text-red-300">
// // //                     View All
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="overflow-x-auto">
// // //                   <table className="w-full">
// // //                     <thead>
// // //                       <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
// // //                         <th className="pb-3 pl-2">Member</th>
// // //                         <th className="pb-3">Plan</th>
// // //                         <th className="pb-3">Status</th>
// // //                         <th className="pb-3 pr-2 text-right">Joined</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {[1, 2, 3, 4, 5].map((item) => (
// // //                         <tr key={item} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
// // //                           <td className="py-3 pl-2">
// // //                             <div className="flex items-center">
// // //                               <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center">
// // //                                 <Users className="h-4 w-4 text-gray-400" />
// // //                               </div>
// // //                               <div>
// // //                                 <p className="font-medium">Member {item}</p>
// // //                                 <p className="text-xs text-gray-400">member{item}@example.com</p>
// // //                               </div>
// // //                             </div>
// // //                           </td>
// // //                           <td className="py-3">
// // //                             <span className={`px-2 py-1 rounded-full text-xs ${
// // //                               item % 3 === 0 ? 'bg-purple-500/10 text-purple-400' : 
// // //                               item % 2 === 0 ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
// // //                             }`}>
// // //                               {item % 3 === 0 ? 'Yearly' : item % 2 === 0 ? 'Quarterly' : 'Monthly'}
// // //                             </span>
// // //                           </td>
// // //                           <td className="py-3">
// // //                             <span className={`px-2 py-1 rounded-full text-xs ${
// // //                               item % 4 === 0 ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
// // //                             }`}>
// // //                               {item % 4 === 0 ? 'Inactive' : 'Active'}
// // //                             </span>
// // //                           </td>
// // //                           <td className="py-3 pr-2 text-right text-sm text-gray-400">
// // //                             {item} day{item !== 1 ? 's' : ''} ago
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
// // //               </div>
              
// // //               {/* Revenue Chart */}
// // //               <div className="glass-card rounded-xl p-6 border border-gray-700">
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <h2 className="text-xl font-semibold">Revenue Overview</h2>
// // //                   <div className="flex space-x-2">
// // //                     <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg">Monthly</button>
// // //                     <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg">Quarterly</button>
// // //                     <button className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-lg">Yearly</button>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="h-64 bg-gray-800/50 rounded-lg flex items-center justify-center">
// // //                   <div className="relative w-full h-full">
// // //                     <div className="absolute inset-0 flex items-center justify-center">
// // //                       <div className="relative w-40 h-40">
// // //                         <div className="absolute inset-0 rounded-full border-8 border-red-500/70" 
// // //                              style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
// // //                         <div className="absolute inset-0 rounded-full border-8 border-blue-500/70" 
// // //                              style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
// // //                         <div className="absolute inset-0 rounded-full border-8 border-green-500/70" 
// // //                              style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
// // //                         <div className="absolute inset-0 rounded-full border-8 border-yellow-500/70" 
// // //                              style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                        
// // //                         <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
// // //                           <PieChart className="h-8 w-8 text-gray-400" />
// // //                         </div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
// // //                       <div className="flex items-center">
// // //                         <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
// // //                         <span className="text-xs text-gray-400">Monthly</span>
// // //                       </div>
// // //                       <div className="flex items-center">
// // //                         <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
// // //                         <span className="text-xs text-gray-400">Quarterly</span>
// // //                       </div>
// // //                       <div className="flex items-center">
// // //                         <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
// // //                         <span className="text-xs text-gray-400">Yearly</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="grid grid-cols-3 gap-4 mt-6">
// // //                   <div className="text-center">
// // //                     <p className="text-sm text-gray-400">Monthly</p>
// // //                     <p className="text-lg font-semibold">{formatCurrency(125000)}</p>
// // //                   </div>
// // //                   <div className="text-center">
// // //                     <p className="text-sm text-gray-400">Quarterly</p>
// // //                     <p className="text-lg font-semibold">{formatCurrency(375000)}</p>
// // //                   </div>
// // //                   <div className="text-center">
// // //                     <p className="text-sm text-gray-400">Yearly</p>
// // //                     <p className="text-lg font-semibold">{formatCurrency(1500000)}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             {/* Sidebar Content */}
// // //             <div className="space-y-6">
// // //               {/* Upcoming Renewals */}
// // //               <div className="glass-card rounded-xl p-6 border border-gray-700">
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <h2 className="text-xl font-semibold">Upcoming Renewals</h2>
// // //                   <button className="text-sm text-red-400 hover:text-red-300">
// // //                     View All
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="space-y-4">
// // //                   {[1, 2, 3].map((item) => (
// // //                     <div key={item} className="flex items-start">
// // //                       <div className="p-2 bg-gray-800 rounded-lg mr-3">
// // //                         <Calendar className="h-5 w-5 text-red-400" />
// // //                       </div>
// // //                       <div className="flex-1">
// // //                         <p className="font-medium">Member {item}</p>
// // //                         <p className="text-sm text-gray-400">Renews in {item} day{item !== 1 ? 's' : ''}</p>
// // //                       </div>
// // //                       <button className="text-xs text-red-400 hover:text-red-300">
// // //                         Notify
// // //                       </button>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
              
// // //               {/* Recent Payments */}
// // //               <div className="glass-card rounded-xl p-6 border border-gray-700">
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <h2 className="text-xl font-semibold">Recent Payments</h2>
// // //                   <button className="text-sm text-red-400 hover:text-red-300">
// // //                     View All
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="space-y-4">
// // //                   {[1, 2, 3].map((item) => (
// // //                     <div key={item} className="flex items-center justify-between">
// // //                       <div className="flex items-center">
// // //                         <div className="p-2 bg-gray-800 rounded-lg mr-3">
// // //                           <DollarSign className="h-5 w-5 text-green-400" />
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-medium">{formatCurrency(5000 + (item * 1000))}</p>
// // //                           <p className="text-sm text-gray-400">Member {item}</p>
// // //                         </div>
// // //                       </div>
// // //                       <span className="text-xs text-gray-400">{item} day{item !== 1 ? 's' : ''} ago</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
              
// // //               {/* Attendance Summary */}
// // //               <div className="glass-card rounded-xl p-6 border border-gray-700">
// // //                 <div className="flex justify-between items-center mb-6">
// // //                   <h2 className="text-xl font-semibold">Today's Attendance</h2>
// // //                   <button className="text-sm text-red-400 hover:text-red-300">
// // //                     View All
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="flex items-center justify-between mb-4">
// // //                   <div>
// // //                     <p className="text-sm text-gray-400">Present</p>
// // //                     <p className="text-2xl font-semibold">87%</p>
// // //                   </div>
// // //                   <div className="w-24 h-24 rounded-full border-8 border-green-500/30 flex items-center justify-center">
// // //                     <span className="text-xl font-bold">87%</span>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="grid grid-cols-3 gap-4 text-center">
// // //                   <div>
// // //                     <p className="text-sm text-gray-400">Present</p>
// // //                     <p className="font-medium">102</p>
// // //                   </div>
// // //                   <div>
// // //                     <p className="text-sm text-gray-400">Late</p>
// // //                     <p className="font-medium">15</p>
// // //                   </div>
// // //                   <div>
// // //                     <p className="text-sm text-gray-400">Absent</p>
// // //                     <p className="font-medium">25</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // "use client";

// // import { useState, useEffect } from "react";
// // import { BarChart2, Calendar, DollarSign, Users, Clock, PieChart, Activity, TrendingUp, ChevronRight } from "lucide-react";

// // const Dashboard = () => {
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [stats, setStats] = useState({
// //     members: 0,
// //     activeMembers: 0,
// //     trainers: 0,
// //     revenue: 0,
// //     attendance: 0
// //   });

// //   useEffect(() => {
// //     setStats({
// //       members: 142,
// //       activeMembers: 118,
// //       trainers: 8,
// //       revenue: 7524300,
// //       attendance: 87
// //     });
// //   }, []);

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-IN', {
// //       style: 'currency',
// //       currency: 'INR',
// //       minimumFractionDigits: 0
// //     }).format(amount);
// //   };

// //   return (
// //     <div className="bg-gray-900 text-white min-h-screen w-full">
// //       <style jsx global>{`
// //         body {
// //           font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
// //           background-color: #0f172a;
// //           margin: 0;
// //           padding: 0;
// //         }
        
// //         ::-webkit-scrollbar {
// //           width: 8px;
// //         }
// //         ::-webkit-scrollbar-track {
// //           background: #1e293b;
// //         }
// //         ::-webkit-scrollbar-thumb {
// //           background: #475569;
// //           border-radius: 4px;
// //         }
        
// //         .glass-card {
// //           background: rgba(15, 23, 42, 0.7);
// //           backdrop-filter: blur(10px);
// //           border: 1px solid rgba(255, 255, 255, 0.1);
// //         }
        
// //         .card-gradient {
// //           position: relative;
// //           overflow: hidden;
// //         }
        
// //         .card-gradient::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 4px;
// //           background: linear-gradient(90deg, #f43f5e, #ec4899);
// //           z-index: 1;
// //         }
        
// //         .card-gradient-blue::before {
// //           background: linear-gradient(90deg, #3b82f6, #0ea5e9);
// //         }
        
// //         .card-gradient-purple::before {
// //           background: linear-gradient(90deg, #8b5cf6, #a855f7);
// //         }
        
// //         .card-gradient-green::before {
// //           background: linear-gradient(90deg, #10b981, #059669);
// //         }
        
// //         .card-gradient-yellow::before {
// //           background: linear-gradient(90deg, #eab308, #f59e0b);
// //         }
// //       `}</style>

// //       <main className="p-4 md:p-6 w-full">
// //         <div className="mb-6">
// //           <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
// //           <p className="text-gray-400">Welcome back, Admin! Here's what's happening today.</p>
// //         </div>
        
// //         {/* Quick Stats */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
// //           <div className="glass-card card-gradient rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-colors">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-400">Total Members</p>
// //                 <h3 className="text-2xl font-bold mt-1 text-white">{stats.members}</h3>
// //               </div>
// //               <div className="p-3 rounded-full bg-red-500/10 text-red-400">
// //                 <Users className="h-6 w-6" />
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mt-3">
// //               <span className="text-green-400">+{stats.activeMembers} active</span> this month
// //             </p>
// //           </div>
          
// //           <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-400">Active Members</p>
// //                 <h3 className="text-2xl font-bold mt-1 text-white">{stats.activeMembers}</h3>
// //               </div>
// //               <div className="p-3 rounded-full bg-green-500/10 text-green-400">
// //                 <Users className="h-6 w-6" />
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mt-3">
// //               <span className="text-green-400">+12.9%</span> from last month
// //             </p>
// //           </div>
          
// //           <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-400">Trainers</p>
// //                 <h3 className="text-2xl font-bold mt-1 text-white">{stats.trainers}</h3>
// //               </div>
// //               <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
// //                 <Users className="h-6 w-6" />
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mt-3">
// //               <span className="text-green-400">+2 new</span> this quarter
// //             </p>
// //           </div>
          
// //           <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-400">Monthly Revenue</p>
// //                 <h3 className="text-2xl font-bold mt-1 text-white">{formatCurrency(stats.revenue)}</h3>
// //               </div>
// //               <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
// //                 <DollarSign className="h-6 w-6" />
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mt-3">
// //               <span className="text-green-400">+4.9%</span> from last month
// //             </p>
// //           </div>
          
// //           <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-colors">
// //             <div className="flex items-center justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-400">Today's Attendance</p>
// //                 <h3 className="text-2xl font-bold mt-1 text-white">{stats.attendance}%</h3>
// //               </div>
// //               <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400">
// //                 <Clock className="h-6 w-6" />
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mt-3">
// //               <span className="text-green-400">+6%</span> from yesterday
// //             </p>
// //           </div>
// //         </div>

// //         {/* Dashboard Content */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
// //           <div className="lg:col-span-8 space-y-6">
// //             {/* Members Summary */}
// //             <div className="glass-card card-gradient rounded-xl p-6 border border-gray-800">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div className="flex items-center">
// //                   <Users className="h-5 w-5 mr-2 text-red-400" />
// //                   <h2 className="text-xl font-semibold text-white">Recent Members</h2>
// //                 </div>
// //                 <button className="text-sm text-red-400 hover:text-red-300 flex items-center">
// //                   View All <ChevronRight className="h-4 w-4 ml-1" />
// //                 </button>
// //               </div>
              
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
// //                       <th className="pb-3 pl-2">Member</th>
// //                       <th className="pb-3">Plan</th>
// //                       <th className="pb-3">Status</th>
// //                       <th className="pb-3 pr-2 text-right">Joined</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {[1, 2, 3, 4, 5].map((item) => (
// //                       <tr key={item} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
// //                         <td className="py-3 pl-2">
// //                           <div className="flex items-center">
// //                             <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center">
// //                               <Users className="h-4 w-4 text-gray-400" />
// //                             </div>
// //                             <div>
// //                               <p className="font-medium text-white">Member {item}</p>
// //                               <p className="text-xs text-gray-400">member{item}@example.com</p>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="py-3">
// //                           <span className={`px-2 py-1 rounded-full text-xs ${
// //                             item % 3 === 0 ? 'bg-purple-500/10 text-purple-400' : 
// //                             item % 2 === 0 ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
// //                           }`}>
// //                             {item % 3 === 0 ? 'Yearly' : item % 2 === 0 ? 'Quarterly' : 'Monthly'}
// //                           </span>
// //                         </td>
// //                         <td className="py-3">
// //                           <span className={`px-2 py-1 rounded-full text-xs ${
// //                             item % 4 === 0 ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
// //                           }`}>
// //                             {item % 4 === 0 ? 'Inactive' : 'Active'}
// //                           </span>
// //                         </td>
// //                         <td className="py-3 pr-2 text-right text-sm text-gray-400">
// //                           {item} day{item !== 1 ? 's' : ''} ago
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
            
// //             {/* Analytics Cards */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Revenue Chart */}
// //               <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-800">
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="flex items-center">
// //                     <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
// //                     <h2 className="text-xl font-semibold text-white">Revenue Breakdown</h2>
// //                   </div>
// //                   <div className="flex space-x-2">
// //                     <button className="px-3 py-1 text-xs bg-gray-800 rounded-lg hover:bg-gray-700">Monthly</button>
// //                     <button className="px-3 py-1 text-xs bg-gray-800 rounded-lg hover:bg-gray-700">Quarterly</button>
// //                     <button className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-lg">Yearly</button>
// //                   </div>
// //                 </div>
                
// //                 <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
// //                   <div className="relative w-full h-full">
// //                     <div className="absolute inset-0 flex items-center justify-center">
// //                       <div className="relative w-32 h-32">
// //                         <div className="absolute inset-0 rounded-full border-8 border-red-500/70" 
// //                              style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
// //                         <div className="absolute inset-0 rounded-full border-8 border-blue-500/70" 
// //                              style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
// //                         <div className="absolute inset-0 rounded-full border-8 border-green-500/70" 
// //                              style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
// //                         <div className="absolute inset-0 rounded-full border-8 border-yellow-500/70" 
// //                              style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                        
// //                         <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
// //                           <PieChart className="h-6 w-6 text-purple-400" />
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
// //                       <div className="flex items-center">
// //                         <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
// //                         <span className="text-xs text-gray-400">Monthly</span>
// //                       </div>
// //                       <div className="flex items-center">
// //                         <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
// //                         <span className="text-xs text-gray-400">Quarterly</span>
// //                       </div>
// //                       <div className="flex items-center">
// //                         <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
// //                         <span className="text-xs text-gray-400">Yearly</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
                
// //                 <div className="grid grid-cols-3 gap-4 mt-4">
// //                   <div className="text-center">
// //                     <p className="text-sm text-gray-400">Monthly</p>
// //                     <p className="text-lg font-semibold text-white">{formatCurrency(125000)}</p>
// //                   </div>
// //                   <div className="text-center">
// //                     <p className="text-sm text-gray-400">Quarterly</p>
// //                     <p className="text-lg font-semibold text-white">{formatCurrency(375000)}</p>
// //                   </div>
// //                   <div className="text-center">
// //                     <p className="text-sm text-gray-400">Yearly</p>
// //                     <p className="text-lg font-semibold text-white">{formatCurrency(1500000)}</p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Membership Growth */}
// //               <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-800">
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="flex items-center">
// //                     <Activity className="h-5 w-5 mr-2 text-green-400" />
// //                     <h2 className="text-xl font-semibold text-white">Membership Growth</h2>
// //                   </div>
// //                   <div className="flex space-x-2">
// //                     <button className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-lg">6 Months</button>
// //                   </div>
// //                 </div>
                
// //                 <div className="h-48 bg-gray-800/50 rounded-lg overflow-hidden">
// //                   <div className="h-full w-full px-2 flex items-end justify-between">
// //                     {[35, 42, 50, 45, 60, 75].map((height, i) => (
// //                       <div key={i} className="h-full flex flex-col justify-end items-center">
// //                         <div 
// //                           className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm"
// //                           style={{ height: `${height}%` }}
// //                         ></div>
// //                         <span className="text-xs text-gray-400 mt-2">{['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
                
// //                 <div className="grid grid-cols-2 gap-4 mt-4">
// //                   <div className="p-3 bg-gray-800/50 rounded-lg">
// //                     <p className="text-sm text-gray-400">New Members</p>
// //                     <p className="text-lg font-semibold text-white">+24</p>
// //                     <p className="text-xs text-green-400">+15% this month</p>
// //                   </div>
// //                   <div className="p-3 bg-gray-800/50 rounded-lg">
// //                     <p className="text-sm text-gray-400">Retention Rate</p>
// //                     <p className="text-lg font-semibold text-white">92%</p>
// //                     <p className="text-xs text-green-400">+3% from last month</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Sidebar Content */}
// //           <div className="lg:col-span-4 space-y-6">
// //             {/* Upcoming Renewals */}
// //             <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-800">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div className="flex items-center">
// //                   <Calendar className="h-5 w-5 mr-2 text-blue-400" />
// //                   <h2 className="text-xl font-semibold text-white">Upcoming Renewals</h2>
// //                 </div>
// //                 <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
// //                   View All <ChevronRight className="h-4 w-4 ml-1" />
// //                 </button>
// //               </div>
              
// //               <div className="space-y-4">
// //                 {[1, 2, 3].map((item) => (
// //                   <div key={item} className="flex items-start p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/70 transition-colors">
// //                     <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
// //                       <Calendar className="h-5 w-5 text-blue-400" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <p className="font-medium text-white">Member {item}</p>
// //                       <p className="text-sm text-gray-400">Renews in {item} day{item !== 1 ? 's' : ''}</p>
// //                     </div>
// //                     <button className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20">
// //                       Notify
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
            
// //             {/* Recent Payments */}
// //             <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-800">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div className="flex items-center">
// //                   <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
// //                   <h2 className="text-xl font-semibold text-white">Recent Payments</h2>
// //                 </div>
// //                 <button className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center">
// //                   View All <ChevronRight className="h-4 w-4 ml-1" />
// //                 </button>
// //               </div>
              
// //               <div className="space-y-4">
// //                 {[1, 2, 3].map((item) => (
// //                   <div key={item} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/70 transition-colors">
// //                     <div className="flex items-center">
// //                       <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
// //                         <DollarSign className="h-5 w-5 text-yellow-400" />
// //                       </div>
// //                       <div>
// //                         <p className="font-medium text-white">{formatCurrency(5000 + (item * 1000))}</p>
// //                         <p className="text-sm text-gray-400">Member {item}</p>
// //                       </div>
// //                     </div>
// //                     <span className="text-xs text-gray-400">{item} day{item !== 1 ? 's' : ''} ago</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
            
// //             {/* Attendance Summary */}
// //             <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-800">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div className="flex items-center">
// //                   <Clock className="h-5 w-5 mr-2 text-green-400" />
// //                   <h2 className="text-xl font-semibold text-white">Today's Attendance</h2>
// //                 </div>
// //                 <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
// //                   View All <ChevronRight className="h-4 w-4 ml-1" />
// //                 </button>
// //               </div>
              
// //               <div className="flex items-center justify-between mb-4">
// //                 <div>
// //                   <p className="text-sm text-gray-400">Present</p>
// //                   <p className="text-2xl font-semibold text-white">87%</p>
// //                   <p className="text-xs text-green-400">+6% from yesterday</p>
// //                 </div>
// //                 <div className="w-20 h-20 rounded-full bg-gray-800 p-1">
// //                   <div className="w-full h-full rounded-full border-4 border-green-500/30 flex items-center justify-center" style={{ 
// //                     background: `conic-gradient(#10b981 ${87 * 3.6}deg, transparent 0deg)`
// //                   }}>
// //                     <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
// //                       <span className="text-sm font-bold text-white">87%</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="grid grid-cols-3 gap-2 text-center">
// //                 <div className="p-2 bg-gray-800/40 rounded-lg">
// //                   <p className="text-xs text-gray-400">Present</p>
// //                   <p className="font-medium text-white">102</p>
// //                 </div>
// //                 <div className="p-2 bg-gray-800/40 rounded-lg">
// //                   <p className="text-xs text-gray-400">Late</p>
// //                   <p className="font-medium text-white">15</p>
// //                 </div>
// //                 <div className="p-2 bg-gray-800/40 rounded-lg">
// //                   <p className="text-xs text-gray-400">Absent</p>
// //                   <p className="font-medium text-white">25</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// "use client";

// import { useState, useEffect } from "react";
// import { BarChart2, Calendar, DollarSign, Users, Clock, PieChart, Activity, TrendingUp, ChevronRight } from "lucide-react";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [stats, setStats] = useState({
//     members: 0,
//     activeMembers: 0,
//     trainers: 0,
//     revenue: 0,
//     attendance: 0
//   });

//   useEffect(() => {
//     setStats({
//       members: 142,
//       activeMembers: 118,
//       trainers: 8,
//       revenue: 7524300,
//       attendance: 87
//     });
//   }, []);

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0
//     }).format(amount);
//   };

//   return (
//     <div className="p-4 md:p-6 w-full h-full">
//       <div className="mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
//         <p className="text-gray-600 dark:text-gray-400">Welcome back, Admin! Here's what's happening today.</p>
//       </div>
      
//       {/* Quick Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
//         <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-red-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Total Members</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.members}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-red-500/10 text-red-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+{stats.activeMembers} active</span> this month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-green-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Active Members</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.activeMembers}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-green-500/10 text-green-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+12.9%</span> from last month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-blue-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Trainers</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.trainers}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+2 new</span> this quarter
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{formatCurrency(stats.revenue)}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
//               <DollarSign className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+4.9%</span> from last month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-yellow-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Today's Attendance</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.attendance}%</h3>
//             </div>
//             <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400">
//               <Clock className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+6%</span> from yesterday
//           </p>
//         </div>
//       </div>

//       {/* Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Main Content Area */}
//         <div className="lg:col-span-8 space-y-6">
//           {/* Members Summary */}
//           <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Users className="h-5 w-5 mr-2 text-red-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Members</h2>
//               </div>
//               <button className="text-sm text-red-400 hover:text-red-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-sm text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//                     <th className="pb-3 pl-2">Member</th>
//                     <th className="pb-3">Plan</th>
//                     <th className="pb-3">Status</th>
//                     <th className="pb-3 pr-2 text-right">Joined</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Array.from({ length: 20 }).map((_, item) => (
//                     <tr key={item} className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors">
//                       <td className="py-3 pl-2">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center">
//                             <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
//                           </div>
//                           <div>
//                             <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
//                             <p className="text-xs text-gray-500 dark:text-gray-400">member{item + 1}@example.com</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           (item + 1) % 3 === 0 ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 
//                           (item + 1) % 2 === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
//                         }`}>
//                           {(item + 1) % 3 === 0 ? 'Yearly' : (item + 1) % 2 === 0 ? 'Quarterly' : 'Monthly'}
//                         </span>
//                       </td>
//                       <td className="py-3">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           (item + 1) % 4 === 0 ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-green-500/10 text-green-600 dark:text-green-400'
//                         }`}>
//                           {(item + 1) % 4 === 0 ? 'Inactive' : 'Active'}
//                         </span>
//                       </td>
//                       <td className="py-3 pr-2 text-right text-sm text-gray-500 dark:text-gray-400">
//                         {item + 1} day{(item + 1) !== 1 ? 's' : ''} ago
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
          
//           {/* Analytics Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Revenue Chart */}
//             <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
//                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue Breakdown</h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Monthly</button>
//                   <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Quarterly</button>
//                   <button className="px-3 py-1 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg">Yearly</button>
//                 </div>
//               </div>
              
//               <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
//                 <div className="relative w-full h-full">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-32 h-32">
//                       <div className="absolute inset-0 rounded-full border-8 border-red-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-blue-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-green-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-yellow-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                      
//                       <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
//                         <PieChart className="h-6 w-6 text-purple-400" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Monthly</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Quarterly</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Yearly</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-3 gap-4 mt-4">
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Monthly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(125000)}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Quarterly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(375000)}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Yearly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(1500000)}</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Membership Growth */}
//             <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <Activity className="h-5 w-5 mr-2 text-green-400" />
//                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Membership Growth</h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 text-xs bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg">6 Months</button>
//                 </div>
//               </div>
              
//               <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg overflow-hidden">
//                 <div className="h-full w-full px-2 flex items-end justify-between">
//                   {[35, 42, 50, 45, 60, 75].map((height, i) => (
//                     <div key={i} className="h-full flex flex-col justify-end items-center">
//                       <div 
//                         className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm"
//                         style={{ height: `${height}%` }}
//                       ></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">New Members</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">+24</p>
//                   <p className="text-xs text-green-500 dark:text-green-400">+15% this month</p>
//                 </div>
//                 <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">92%</p>
//                   <p className="text-xs text-green-500 dark:text-green-400">+3% from last month</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Sidebar Content */}
//         <div className="lg:col-span-4 space-y-6">
//           {/* Upcoming Renewals */}
//           <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Calendar className="h-5 w-5 mr-2 text-blue-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Renewals</h2>
//               </div>
//               <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
//               {Array.from({ length: 15 }).map((_, item) => (
//                 <div key={item} className="flex items-start p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
//                   <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
//                     <Calendar className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">Renews in {item + 1} day{(item + 1) !== 1 ? 's' : ''}</p>
//                   </div>
//                   <button className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20">
//                     Notify
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Recent Payments */}
//           <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Payments</h2>
//               </div>
//               <button className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '250px' }}>
//               {Array.from({ length: 10 }).map((_, item) => (
//                 <div key={item} className="flex items-center justify-between p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
//                   <div className="flex items-center">
//                     <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
//                       <DollarSign className="h-5 w-5 text-yellow-400" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(5000 + ((item + 1) * 1000))}</p>
//                       <p className="text-sm text-gray-600 dark:text-gray-400">Member {item + 1}</p>
//                     </div>
//                   </div>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">{item + 1} day{(item + 1) !== 1 ? 's' : ''} ago</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Attendance Summary */}
//           <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Clock className="h-5 w-5 mr-2 text-green-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Today's Attendance</h2>
//               </div>
//               <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
//                 <p className="text-2xl font-semibold text-gray-900 dark:text-white">87%</p>
//                 <p className="text-xs text-green-500 dark:text-green-400">+6% from yesterday</p>
//               </div>
//               <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 p-1">
//                 <div className="w-full h-full rounded-full border-4 border-green-500/30 flex items-center justify-center" style={{ 
//                   background: `conic-gradient(#10b981 ${87 * 3.6}deg, transparent 0deg)`
//                 }}>
//                   <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
//                     <span className="text-sm font-bold text-gray-900 dark:text-white">87%</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-3 gap-2 text-center">
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Present</p>
//                 <p className="font-medium text-gray-900 dark:text-white">102</p>
//               </div>
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Late</p>
//                 <p className="font-medium text-gray-900 dark:text-white">15</p>
//               </div>
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Absent</p>
//                 <p className="font-medium text-gray-900 dark:text-white">25</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .glass-card {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(0, 0, 0, 0.1);
//         }
        
//         .dark .glass-card {
//           background: rgba(15, 23, 42, 0.7);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .card-gradient {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .card-gradient::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #f43f5e, #ec4899);
//           z-index: 1;
//         }
        
//         .card-gradient-blue::before {
//           background: linear-gradient(90deg, #3b82f6, #0ea5e9);
//         }
        
//         .card-gradient-purple::before {
//           background: linear-gradient(90deg, #8b5cf6, #a855f7);
//         }
        
//         .card-gradient-green::before {
//           background: linear-gradient(90deg, #10b981, #059669);
//         }
        
//         .card-gradient-yellow::before {
//           background: linear-gradient(90deg, #eab308, #f59e0b);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Dashboard;
// "use client";

// import { useState, useEffect } from "react";
// import { BarChart2, Calendar, DollarSign, Users, Clock, PieChart, Activity, TrendingUp, ChevronRight } from "lucide-react";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [stats, setStats] = useState({
//     members: 0,
//     activeMembers: 0,
//     trainers: 0,
//     revenue: 0,
//     attendance: 0
//   });

//   useEffect(() => {
//     setStats({
//       members: 142,
//       activeMembers: 118,
//       trainers: 8,
//       revenue: 7524300,
//       attendance: 87
//     });
//   }, []);

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0
//     }).format(amount);
//   };

//   return (
//     <div className="p-4 md:p-6 w-full h-full">
//       <div className="mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
//         <p className="text-gray-600 dark:text-gray-400">Welcome back, Admin! Here's what's happening today.</p>
//       </div>
      
//       {/* Quick Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
//         <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-red-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Total Members</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.members}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-red-500/10 text-red-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+{stats.activeMembers} active</span> this month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-green-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Active Members</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.activeMembers}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-green-500/10 text-green-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+12.9%</span> from last month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-blue-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Trainers</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.trainers}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
//               <Users className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+2 new</span> this quarter
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{formatCurrency(stats.revenue)}</h3>
//             </div>
//             <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
//               <DollarSign className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+4.9%</span> from last month
//           </p>
//         </div>
        
//         <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-yellow-500/50 transition-colors">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Today's Attendance</p>
//               <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.attendance}%</h3>
//             </div>
//             <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400">
//               <Clock className="h-6 w-6" />
//             </div>
//           </div>
//           <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
//             <span className="text-green-500 dark:text-green-400">+6%</span> from yesterday
//           </p>
//         </div>
//       </div>

//       {/* Dashboard Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* Main Content Area */}
//         <div className="lg:col-span-8 space-y-6">
//           {/* Members Summary */}
//           <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Users className="h-5 w-5 mr-2 text-red-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Members</h2>
//               </div>
//               <button className="text-sm text-red-400 hover:text-red-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-sm text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//                     <th className="pb-3 pl-2">Member</th>
//                     <th className="pb-3">Plan</th>
//                     <th className="pb-3">Status</th>
//                     <th className="pb-3 pr-2 text-right">Joined</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Array.from({ length: 20 }).map((_, item) => (
//                     <tr key={item} className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors">
//                       <td className="py-3 pl-2">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center">
//                             <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
//                           </div>
//                           <div>
//                             <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
//                             <p className="text-xs text-gray-500 dark:text-gray-400">member{item + 1}@example.com</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           (item + 1) % 3 === 0 ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 
//                           (item + 1) % 2 === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
//                         }`}>
//                           {(item + 1) % 3 === 0 ? 'Yearly' : (item + 1) % 2 === 0 ? 'Quarterly' : 'Monthly'}
//                         </span>
//                       </td>
//                       <td className="py-3">
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           (item + 1) % 4 === 0 ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-green-500/10 text-green-600 dark:text-green-400'
//                         }`}>
//                           {(item + 1) % 4 === 0 ? 'Inactive' : 'Active'}
//                         </span>
//                       </td>
//                       <td className="py-3 pr-2 text-right text-sm text-gray-500 dark:text-gray-400">
//                         {item + 1} day{(item + 1) !== 1 ? 's' : ''} ago
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
          
//           {/* Analytics Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Revenue Chart */}
//             <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
//                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue Breakdown</h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Monthly</button>
//                   <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Quarterly</button>
//                   <button className="px-3 py-1 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg">Yearly</button>
//                 </div>
//               </div>
              
//               <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
//                 <div className="relative w-full h-full">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="relative w-32 h-32">
//                       <div className="absolute inset-0 rounded-full border-8 border-red-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-blue-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-green-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
//                       <div className="absolute inset-0 rounded-full border-8 border-yellow-500/70" 
//                            style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                      
//                       <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
//                         <PieChart className="h-6 w-6 text-purple-400" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Monthly</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Quarterly</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400">Yearly</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-3 gap-4 mt-4">
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Monthly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(125000)}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Quarterly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(375000)}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Yearly</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(1500000)}</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Membership Growth */}
//             <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <Activity className="h-5 w-5 mr-2 text-green-400" />
//                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Membership Growth</h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 text-xs bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg">6 Months</button>
//                 </div>
//               </div>
              
//               <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg overflow-hidden">
//                 <div className="h-full w-full px-2 flex items-end justify-between">
//                   {[35, 42, 50, 45, 60, 75].map((height, i) => (
//                     <div key={i} className="h-full flex flex-col justify-end items-center">
//                       <div 
//                         className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm"
//                         style={{ height: `${height}%` }}
//                       ></div>
//                       <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">New Members</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">+24</p>
//                   <p className="text-xs text-green-500 dark:text-green-400">+15% this month</p>
//                 </div>
//                 <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</p>
//                   <p className="text-lg font-semibold text-gray-900 dark:text-white">92%</p>
//                   <p className="text-xs text-green-500 dark:text-green-400">+3% from last month</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Sidebar Content */}
//         <div className="lg:col-span-4 space-y-6">
//           {/* Upcoming Renewals */}
//           <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Calendar className="h-5 w-5 mr-2 text-blue-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Renewals</h2>
//               </div>
//               <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
//               {Array.from({ length: 15 }).map((_, item) => (
//                 <div key={item} className="flex items-start p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
//                   <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
//                     <Calendar className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">Renews in {item + 1} day{(item + 1) !== 1 ? 's' : ''}</p>
//                   </div>
//                   <button className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20">
//                     Notify
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Recent Payments */}
//           <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Payments</h2>
//               </div>
//               <button className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="space-y-4 overflow-y-auto" style={{ maxHeight: '250px' }}>
//               {Array.from({ length: 10 }).map((_, item) => (
//                 <div key={item} className="flex items-center justify-between p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
//                   <div className="flex items-center">
//                     <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
//                       <DollarSign className="h-5 w-5 text-yellow-400" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(5000 + ((item + 1) * 1000))}</p>
//                       <p className="text-sm text-gray-600 dark:text-gray-400">Member {item + 1}</p>
//                     </div>
//                   </div>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">{item + 1} day{(item + 1) !== 1 ? 's' : ''} ago</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Attendance Summary */}
//           <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <Clock className="h-5 w-5 mr-2 text-green-400" />
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Today's Attendance</h2>
//               </div>
//               <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
//                 View All <ChevronRight className="h-4 w-4 ml-1" />
//               </button>
//             </div>
            
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
//                 <p className="text-2xl font-semibold text-gray-900 dark:text-white">87%</p>
//                 <p className="text-xs text-green-500 dark:text-green-400">+6% from yesterday</p>
//               </div>
//               <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 p-1">
//                 <div className="w-full h-full rounded-full border-4 border-green-500/30 flex items-center justify-center" style={{ 
//                   background: `conic-gradient(#10b981 ${87 * 3.6}deg, transparent 0deg)`
//                 }}>
//                   <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
//                     <span className="text-sm font-bold text-gray-900 dark:text-white">87%</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-3 gap-2 text-center">
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Present</p>
//                 <p className="font-medium text-gray-900 dark:text-white">102</p>
//               </div>
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Late</p>
//                 <p className="font-medium text-gray-900 dark:text-white">15</p>
//               </div>
//               <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
//                 <p className="text-xs text-gray-600 dark:text-gray-400">Absent</p>
//                 <p className="font-medium text-gray-900 dark:text-white">25</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .glass-card {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(0, 0, 0, 0.1);
//         }
        
//         .dark .glass-card {
//           background: rgba(15, 23, 42, 0.7);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .card-gradient {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .card-gradient::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #f43f5e, #ec4899);
//           z-index: 1;
//         }
        
//         .card-gradient-blue::before {
//           background: linear-gradient(90deg, #3b82f6, #0ea5e9);
//         }
        
//         .card-gradient-purple::before {
//           background: linear-gradient(90deg, #8b5cf6, #a855f7);
//         }
        
//         .card-gradient-green::before {
//           background: linear-gradient(90deg, #10b981, #059669);
//         }
        
//         .card-gradient-yellow::before {
//           background: linear-gradient(90deg, #eab308, #f59e0b);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Dashboard;
"use client";

import { useState, useEffect } from "react";
import { BarChart2, Calendar, DollarSign, Users, Clock, PieChart, Activity, TrendingUp, ChevronRight, Search } from "lucide-react";
import { Poppins } from 'next/font/google';

// Initialize Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    members: 0,
    activeMembers: 0,
    trainers: 0,
    revenue: 0,
    attendance: 0
  });

  useEffect(() => {
    setStats({
      members: 142,
      activeMembers: 118,
      trainers: 8,
      revenue: 7524300,
      attendance: 87
    });
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
      <style jsx global>{`
        body {
          font-family: ${poppins.style.fontFamily};
        }
        button:focus, 
        input:focus,
        select:focus,
        a:focus,
        [tabindex]:focus,
        [role="button"]:focus {
          outline: none !important;
          box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
        }

        /* Custom scrollbar styles */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4b5563;
          border-radius: 10px;
          border: 2px solid #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }

        @media (hover: none) and (pointer: coarse) {
          button:active, 
          input:active,
          select:active,
          a:active,
          [tabindex]:active,
          [role="button"]:active {
            outline: none !important;
            box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
          }
        }
      `}</style>

      {/* Navbar - Matching Payment History Header */}
      <div className={`sticky top-0 z-50 bg-gray-900 border-b border-gray-800 ${poppins.className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <h1 className="text-xl md:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
              Dashboard Overview
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search dashboard..."
                className={`bg-gray-800/50 backdrop-blur-sm border
                  border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
                  dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
                  text-black dark:text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none
                  text-sm bg-white dark:bg-gray-800 ${poppins.className}`}
              />
            </div>
            
            <button
              className={`bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none ${poppins.className}`}
            >
              <span className="flex items-center justify-center">
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
                <span className="font-medium">Quick Actions</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 md:p-6 w-full h-full">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-red-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Members</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.members}</h3>
              </div>
              <div className="p-3 rounded-full bg-red-500/10 text-red-400">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              <span className="text-green-500 dark:text-green-400">+{stats.activeMembers} active</span> this month
            </p>
          </div>
          
          <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-green-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Members</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.activeMembers}</h3>
              </div>
              <div className="p-3 rounded-full bg-green-500/10 text-green-400">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              <span className="text-green-500 dark:text-green-400">+12.9%</span> from last month
            </p>
          </div>
          
          <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Trainers</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.trainers}</h3>
              </div>
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              <span className="text-green-500 dark:text-green-400">+2 new</span> this quarter
            </p>
          </div>
          
          <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{formatCurrency(stats.revenue)}</h3>
              </div>
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              <span className="text-green-500 dark:text-green-400">+4.9%</span> from last month
            </p>
          </div>
          
          <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:border-yellow-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Today's Attendance</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{stats.attendance}%</h3>
              </div>
              <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-400">
                <Clock className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
              <span className="text-green-500 dark:text-green-400">+6%</span> from yesterday
            </p>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Members Summary */}
            <div className="glass-card card-gradient rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-red-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Members</h2>
                </div>
                <button className="text-sm text-red-400 hover:text-red-300 flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                      <th className="pb-3 pl-2">Member</th>
                      <th className="pb-3">Plan</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 pr-2 text-right">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 20 }).map((_, item) => (
                      <tr key={item} className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 pl-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center">
                              <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">member{item + 1}@example.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            (item + 1) % 3 === 0 ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 
                            (item + 1) % 2 === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          }`}>
                            {(item + 1) % 3 === 0 ? 'Yearly' : (item + 1) % 2 === 0 ? 'Quarterly' : 'Monthly'}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            (item + 1) % 4 === 0 ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-green-500/10 text-green-600 dark:text-green-400'
                          }`}>
                            {(item + 1) % 4 === 0 ? 'Inactive' : 'Active'}
                          </span>
                        </td>
                        <td className="py-3 pr-2 text-right text-sm text-gray-500 dark:text-gray-400">
                          {item + 1} day{(item + 1) !== 1 ? 's' : ''} ago
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="glass-card card-gradient-purple rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue Breakdown</h2>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Monthly</button>
                    <button className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Quarterly</button>
                    <button className="px-3 py-1 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg">Yearly</button>
                  </div>
                </div>
                
                <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-8 border-red-500/70" 
                             style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500/70" 
                             style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-green-500/70" 
                             style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
                        <div className="absolute inset-0 rounded-full border-8 border-yellow-500/70" 
                             style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
                        
                        <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          <PieChart className="h-6 w-6 text-purple-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Monthly</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Quarterly</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Yearly</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(125000)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quarterly</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(375000)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Yearly</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(1500000)}</p>
                  </div>
                </div>
              </div>
              
              {/* Membership Growth */}
              <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-400" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Membership Growth</h2>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg">6 Months</button>
                  </div>
                </div>
                
                <div className="h-52 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg overflow-hidden">
                  <div className="h-full w-full px-2 flex items-end justify-between">
                    {[35, 42, 50, 45, 60, 75].map((height, i) => (
                      <div key={i} className="h-full flex flex-col justify-end items-center">
                        <div 
                          className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">New Members</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">+24</p>
                    <p className="text-xs text-green-500 dark:text-green-400">+15% this month</p>
                  </div>
                  <div className="p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">92%</p>
                    <p className="text-xs text-green-500 dark:text-green-400">+3% from last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Renewals */}
            <div className="glass-card card-gradient-blue rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Renewals</h2>
                </div>
                <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: '300px' }}>
                {Array.from({ length: 15 }).map((_, item) => (
                  <div key={item} className="flex items-start p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                      <Calendar className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">Member {item + 1}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Renews in {item + 1} day{(item + 1) !== 1 ? 's' : ''}</p>
                    </div>
                    <button className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20">
                      Notify
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Payments */}
            <div className="glass-card card-gradient-yellow rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Payments</h2>
                </div>
                <button className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: '250px' }}>
                {Array.from({ length: 10 }).map((_, item) => (
                  <div key={item} className="flex items-center justify-between p-3 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/70 transition-colors">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                        <DollarSign className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{formatCurrency(5000 + ((item + 1) * 1000))}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Member {item + 1}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item + 1} day{(item + 1) !== 1 ? 's' : ''} ago</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Attendance Summary */}
            <div className="glass-card card-gradient-green rounded-xl p-6 border border-gray-300 dark:border-gray-800 min-h-[350px]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Today's Attendance</h2>
                </div>
                <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">87%</p>
                  <p className="text-xs text-green-500 dark:text-green-400">+6% from yesterday</p>
                </div>
                <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 p-1">
                  <div className="w-full h-full rounded-full border-4 border-green-500/30 flex items-center justify-center" style={{ 
                    background: `conic-gradient(#10b981 ${87 * 3.6}deg, transparent 0deg)`
                  }}>
                    <div className="bg-white dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">87%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Present</p>
                  <p className="font-medium text-gray-900 dark:text-white">102</p>
                </div>
                <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Late</p>
                  <p className="font-medium text-gray-900 dark:text-white">15</p>
                </div>
                <div className="p-2 bg-gray-100/50 dark:bg-gray-800/40 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Absent</p>
                  <p className="font-medium text-gray-900 dark:text-white">25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .dark .glass-card {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-gradient {
          position: relative;
          overflow: hidden;
        }
        
        .card-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f43f5e, #ec4899);
          z-index: 1;
        }
        
        .card-gradient-blue::before {
          background: linear-gradient(90deg, #3b82f6, #0ea5e9);
        }
        
        .card-gradient-purple::before {
          background: linear-gradient(90deg, #8b5cf6, #a855f7);
        }
        
        .card-gradient-green::before {
          background: linear-gradient(90deg, #10b981, #059669);
        }
        
        .card-gradient-yellow::before {
          background: linear-gradient(90deg, #eab308, #f59e0b);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;