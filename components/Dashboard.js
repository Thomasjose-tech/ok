// import React from "react";

// const Dashboard = () => {
//   // Sample data for the table
//   const data = [
//     { id: 1, name: "John Doe", year: 2023 },
//     { id: 2, name: "Jane Smith", year: 2022 },
//     { id: 3, name: "Robert Johnson", year: 2021 },
//     { id: 4, name: "Emily Davis", year: 2020 },
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Year
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                 {item.name}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {item.year}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { 
  Search, 
  Plus, 
  ArrowRight, 
  Award, 
  Users, 
  Calendar, 
  DollarSign, 
  BarChart2, 
  TrendingUp,
  Settings,
  Bell,
  User,
  LogOut
} from 'lucide-react';

const DashboardComponent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardStats, setDashboardStats] = useState({});
  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [memberPerformance, setMemberPerformance] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeMembers: 0,
    pendingPayments: 0,
    recentPayments: []
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      // Mock dashboard statistics
      setDashboardStats({
        totalMembers: 132,
        presentToday: 98,
        absentToday: 24,
        lateToday: 10,
        averageHours: 7.8,
        remoteWork: 45,
        officeWork: 42,
        hybridWork: 11,
      });

      // Mock attendance summary by date
      setAttendanceSummary([
        { date: "2025-03-10", present: 95, absent: 27, late: 10, totalHours: 789.5 },
        { date: "2025-03-11", present: 98, absent: 24, late: 10, totalHours: 795.2 },
        { date: "2025-03-12", present: 102, absent: 20, late: 8, totalHours: 812.6 },
        { date: "2025-03-13", present: 105, absent: 17, late: 7, totalHours: 834.1 },
        { date: "2025-03-14", present: 92, absent: 30, late: 12, totalHours: 768.3 },
        { date: "2025-03-15", present: 82, absent: 40, late: 5, totalHours: 682.5 },
        { date: "2025-03-16", present: 78, absent: 44, late: 4, totalHours: 654.9 },
      ]);

      // Mock top performer data
      setMemberPerformance([
        { id: 1, name: "Jane Smith", attendance: 98.7, avgHours: 8.9, performance: 95, workType: "Office" },
        { id: 2, name: "John Doe", attendance: 97.5, avgHours: 8.7, performance: 92, workType: "Remote" },
        { id: 3, name: "Robert Johnson", attendance: 96.2, avgHours: 8.5, performance: 90, workType: "Hybrid" },
        { id: 4, name: "Emily Davis", attendance: 94.8, avgHours: 8.3, performance: 87, workType: "Office" },
        { id: 5, name: "Michael Wilson", attendance: 93.5, avgHours: 8.1, performance: 85, workType: "Remote" },
      ]);

      // Mock recent activity
      setRecentActivity([
        { id: 1, memberName: "Jane Smith", action: "Checked in", time: "08:45 AM", date: "2025-03-17" },
        { id: 2, memberName: "John Doe", action: "Checked in", time: "09:00 AM", date: "2025-03-17" },
        { id: 3, memberName: "Robert Johnson", action: "Marked late", time: "10:15 AM", date: "2025-03-17" },
        { id: 4, memberName: "Emily Davis", action: "Marked absent", time: "09:30 AM", date: "2025-03-17" },
        { id: 5, memberName: "Michael Wilson", action: "Checked in", time: "08:50 AM", date: "2025-03-17" },
      ]);

      setIsLoading(false);
    }, 1000);

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

    // Calculate dashboard stats from mock data
    const totalRevenue = mockPayments
      .filter(payment => payment.status === "Completed")
      .reduce((sum, payment) => sum + payment.amountPaid, 0);

    const uniqueMembers = [...new Set(mockPayments.map(payment => payment.memberName))];
    const pendingPayments = mockPayments.filter(payment => payment.status === "Pending").length;

    // Sort payments by date (newest first)
    const recentPayments = [...mockPayments].sort((a, b) => 
      new Date(b.paymentDate) - new Date(a.paymentDate)
    ).slice(0, 3);

    // Simulate API fetch delay
    setTimeout(() => {
      setStats({
        totalRevenue,
        activeMembers: uniqueMembers.length,
        pendingPayments,
        recentPayments
      });
      setIsLoading(false);
    }, 800);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigateToAttendanceHistory = () => {
    router.push("/attendance-history");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Present":
      case "present":
        return "text-green-500 bg-green-900/20 border-green-500";
      case "Late":
      case "late":
        return "text-yellow-500 bg-yellow-900/20 border-yellow-500";
      case "Absent":
      case "absent":
        return "text-red-500 bg-red-900/20 border-red-500";
      default:
        return "text-gray-500 bg-gray-900/20 border-gray-500";
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-wider">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
      {/* Header Section */}
      <div className="border-b border-gray-800 pb-6 px-8 pt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Premium Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="font-medium">New Member</span>
            </button>
            <div className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-red-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div className="p-2 bg-black/30 border border-red-500 text-red-500 rounded-full hover:bg-red-900/50 transition-colors duration-200 inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="px-8 pt-6">
        <div className="flex space-x-6 border-b border-gray-800">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
              activeTab === 'overview' 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Overview
            {activeTab === 'overview' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </button>
          <button 
  onClick={() => setActiveTab('members')}
  className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
    activeTab === 'members' 
      ? 'text-white' 
      : 'text-gray-500 hover:text-gray-300'
  }`}
>
  <Link href="/Member">Members</Link>
  {activeTab === 'members' && (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
  )}
</button>

<button 
  onClick={() => setActiveTab('payments')}
  className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
    activeTab === 'payments' 
      ? 'text-white' 
      : 'text-gray-500 hover:text-gray-300'
  }`}
>
  <Link href="/payments">Payments</Link>
  {activeTab === 'payments' && (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
  )}
</button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
              activeTab === 'analytics' 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Analytics
            {activeTab === 'analytics' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
              activeTab === 'settings' 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Settings
            {activeTab === 'settings' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="px-8 py-8">
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Total Revenue Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Total Revenue</p>
                    <h3 className="text-3xl font-light mt-1">${stats.totalRevenue.toFixed(2)}</h3>
                  </div>
                  <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-green-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    8.2%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>

              {/* Active Members Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Active Members</p>
                    <h3 className="text-3xl font-light mt-1">{stats.activeMembers}</h3>
                  </div>
                  <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-green-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg> 
                    3.1%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>

              {/* Pending Payments Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-red-500/10 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Pending Payments</p>
                    <h3 className="text-3xl font-light mt-1">{stats.pendingPayments}</h3>
                  </div>
                  <div className="p-3 rounded-full bg-gray-800 border border-gray-700 group-hover:border-red-500 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center text-yellow-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    {stats.pendingPayments > 0 ? 'Action needed' : 'All clear'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Payments Table */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-light">Recent Payments</h2>
                <button className="text-gray-400 text-sm hover:text-white transition-colors duration-300 flex items-center">
                  <span>View All</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Member</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Plan</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Amount</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Date</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Renewal</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentPayments.map((payment) => (
                      <tr key={payment.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                        <td className="py-4 text-sm">{payment.memberName}</td>
                        <td className="py-4 text-sm">{payment.plan}</td>
                        <td className="py-4 text-sm">${payment.amountPaid.toFixed(2)}</td>
                        <td className="py-4 text-sm">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                        <td className="py-4 text-sm">{new Date(payment.renewalDate).toLocaleDateString()}</td>
                        <td className="py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Plan Distribution Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
                <h2 className="text-xl font-light mb-6">Plan Distribution</h2>
                <div className="flex justify-center items-center h-64">
                  {/* Chart placeholder - in a real app, insert chart component here */}
                  <div className="text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <p>Chart would be rendered here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
                <h2 className="text-xl font-light mb-6">Upcoming Renewals</h2>
                <div className="space-y-4">
                  {stats.recentPayments
                    .filter(payment => new Date(payment.renewalDate) > new Date())
                    .sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate))
                    .map(payment => (
                      <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <div>
                          <p className="font-medium">{payment.memberName}</p>
                          <p className="text-sm text-gray-400">{payment.plan}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Renews on</p>
                          <p className="font-medium">{new Date(payment.renewalDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'members' && (
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300">
            <h2 className="text-xl font-light mb-6">Members</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 text-sm font-medium text-gray-400">Name</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-400">Attendance</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-400">Avg Hours</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-400">Performance</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-400">Work Type</th>
                  </tr>
                </thead>
                <tbody>
                  {memberPerformance.map((member) => (
                    <tr key={member.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                      <td className="py-4 text-sm">{member.name}</td>
                      <td className="py-4 text-sm">{member.attendance}%</td>
                      <td className="py-4 text-sm">{member.avgHours}</td>
                      <td className="py-4 text-sm">{member.performance}%</td>
                      <td className="py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(member.workType)}`}>
                          {member.workType}
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
  );
};

export default DashboardComponent;