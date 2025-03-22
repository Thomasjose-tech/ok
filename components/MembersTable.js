// import React from "react";

// const MembersTable = () => {
//   // Dummy member data (replace with real data from API)
//   const members = [
//     { id: 1, name: "Robert Johnson", plan: "Monthly Platinum", email: "robert@example.com" },
//     { id: 2, name: "Jane Smith", plan: "Annual Basic", email: "jane@example.com" },
//     { id: 3, name: "John Doe", plan: "Monthly Premium", email: "john@example.com" },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Members List</h2>
//       <table className="min-w-full bg-gray-800 text-white border border-gray-600">
//         <thead>
//           <tr className="bg-gray-900">
//             <th className="py-2 px-4 border-b">ID</th>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Plan</th>
//             <th className="py-2 px-4 border-b">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member) => (
//             <tr key={member.id} className="text-center">
//               <td className="py-2 px-4 border-b">{member.id}</td>
//               <td className="py-2 px-4 border-b">{member.name}</td>
//               <td className="py-2 px-4 border-b">{member.plan}</td>
//               <td className="py-2 px-4 border-b">{member.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MembersTable;
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const  MembersTable = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardStats, setDashboardStats] = useState({});
  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [memberPerformance, setMemberPerformance] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  // Navigation state
  const [activePage, setActivePage] = useState("dashboard");

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

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white light-mode:bg-white light-mode:text-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-wider">
            Loading dashboard data...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500 light-mode:bg-white light-mode:text-red-600">
        <div className="text-center">
          <p className="text-2xl font-light tracking-wider">Error: {error}</p>
        </div>
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full light-mode:bg-white light-mode:text-black">
      {/* Sidebar Navigation */}
      <div className="flex">
        <div className="fixed h-screen w-20 lg:w-64 bg-gray-800/50 border-r border-gray-800 backdrop-blur-sm light-mode:bg-white light-mode:border-gray-200 transition-all duration-300">
          <div className="flex flex-col items-center lg:items-start p-6">
            <div className="flex items-center mb-10">
              {/* Logo */}
              <div className="h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <span className="ml-3 text-xl font-medium tracking-wider hidden lg:block">
                AttendX
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2 w-full">
              <button
                onClick={() => setActivePage("dashboard")}
                className={`flex items-center py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 ${
                  activePage === "dashboard"
                    ? "bg-red-500/20 text-red-500 border border-red-500/50"
                    : "hover:bg-gray-700/30 text-gray-400 hover:text-white light-mode:hover:bg-gray-100 light-mode:text-gray-600 light-mode:hover:text-black"
                }`}
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="ml-3 hidden lg:block">Dashboard</span>
              </button>

              <button
                onClick={navigateToAttendanceHistory}
                className={`flex items-center py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 ${
                  activePage === "attendance"
                    ? "bg-red-500/20 text-red-500 border border-red-500/50"
                    : "hover:bg-gray-700/30 text-gray-400 hover:text-white light-mode:hover:bg-gray-100 light-mode:text-gray-600 light-mode:hover:text-black"
                }`}
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-3 hidden lg:block">Attendance</span>
              </button>

              <button className="flex items-center py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 hover:bg-gray-700/30 text-gray-400 hover:text-white light-mode:hover:bg-gray-100 light-mode:text-gray-600 light-mode:hover:text-black">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-3 hidden lg:block">Members</span>
              </button>

              <button className="flex items-center py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 hover:bg-gray-700/30 text-gray-400 hover:text-white light-mode:hover:bg-gray-100 light-mode:text-gray-600 light-mode:hover:text-black">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="ml-3 hidden lg:block">Reports</span>
              </button>

              <button className="flex items-center py-3 px-4 lg:px-6 rounded-xl transition-all duration-300 hover:bg-gray-700/30 text-gray-400 hover:text-white light-mode:hover:bg-gray-100 light-mode:text-gray-600 light-mode:hover:text-black">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-3 hidden lg:block">Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20 lg:ml-64 flex-1">
          {/* Header */}
          <div className="py-6 px-6 lg:px-10 border-b border-gray-800 flex items-center justify-between light-mode:border-gray-200">
            <h1 className="text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 light-mode:from-black light-mode:to-gray-600">
              Dashboard
            </h1>

            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="p-2 bg-gray-800 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-red-500 transition-all duration-300 light-mode:bg-white light-mode:border-gray-300 light-mode:hover:border-red-500">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* User Profile */}
              <button className="flex items-center py-2 px-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-red-500 transition-all duration-300 light-mode:bg-white light-mode:border-gray-300 light-mode:hover:border-red-500 light-mode:text-gray-600 light-mode:hover:text-black">
                <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white mr-3">
                  A
                </div>
                <span className="hidden md:block">Admin User</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 lg:p-10">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Members Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400 light-mode:text-gray-600">Total Members</p>
                    <h3 className="text-3xl font-bold mt-2">{dashboardStats.totalMembers}</h3>
                  </div>
                  <div className="h-14 w-14 bg-red-500/10 rounded-lg border border-red-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Present Today Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400 light-mode:text-gray-600">Present Today</p>
                    <h3 className="text-3xl font-bold mt-2">{dashboardStats.presentToday}</h3>
                    <p className="text-sm text-green-500 mt-1">
                      {Math.round((dashboardStats.presentToday / dashboardStats.totalMembers) * 100)}% Rate
                    </p>
                  </div>
                  <div className="h-14 w-14 bg-green-500/10 rounded-lg border border-green-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Late Today Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400 light-mode:text-gray-600">Late Today</p>
                    <h3 className="text-3xl font-bold mt-2">{dashboardStats.lateToday}</h3>
                    <p className="text-sm text-yellow-500 mt-1">
                      {Math.round((dashboardStats.lateToday / dashboardStats.totalMembers) * 100)}% Rate
                    </p>
                  </div>
                  <div className="h-14 w-14 bg-yellow-500/10 rounded-lg border border-yellow-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Absent Today Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400 light-mode:text-gray-600">Absent Today</p>
                    <h3 className="text-3xl font-bold mt-2">{dashboardStats.absentToday}</h3>
                    <p className="text-sm text-red-500 mt-1">
                      {Math.round((dashboardStats.absentToday / dashboardStats.totalMembers) * 100)}% Rate
                    </p>
                  </div>
                  <div className="h-14 w-14 bg-red-500/10 rounded-lg border border-red-500/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Type & Attendance Summary Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Work Type Distribution */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <h3 className="text-lg font-medium mb-6">Work Type Distribution</h3>
                <div className="space-y-4">
                  {/* Remote Work */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300 light-mode:text-gray-600">Remote</span>
                      <span className="text-sm font-medium text-gray-400 light-mode:text-gray-600">
                        {Math.round((dashboardStats.remoteWork / dashboardStats.totalMembers) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 light-mode:bg-gray-200">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(dashboardStats.remoteWork / dashboardStats.totalMembers) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Office Work */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300 light-mode:text-gray-600">Office</span>
                      <span className="text-sm font-medium text-gray-400 light-mode:text-gray-600">
                        {Math.round((dashboardStats.officeWork / dashboardStats.totalMembers) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 light-mode:bg-gray-200">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(dashboardStats.officeWork / dashboardStats.totalMembers) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Hybrid Work */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300 light-mode:text-gray-600">Hybrid</span>
                      <span className="text-sm font-medium text-gray-400 light-mode:text-gray-600">
                        {Math.round((dashboardStats.hybridWork / dashboardStats.totalMembers) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 light-mode:bg-gray-200">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${(dashboardStats.hybridWork / dashboardStats.totalMembers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Average Hours Card */}
                <div className="mt-8 p-4 border border-gray-700 rounded-xl flex items-center bg-gray-800/50 light-mode:bg-gray-100 light-mode:border-gray-200">
                  <div className="h-12 w-12 bg-red-500/10 rounded-lg border border-red-500/30 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 light-mode:text-gray-600">
                      Average Hours Today
                    </p>
                    <h4 className="text-xl font-bold">{dashboardStats.averageHours}</h4>
                  </div>
                </div>
              </div>

              {/* Weekly Attendance Summary */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 col-span-1 lg:col-span-2 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Weekly Attendance Summary</h3>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
                    View Full Report
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-3 light-mode:text-gray-600">
                          Date
                        </th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-3 light-mode:text-gray-600">
                          Present
                        </th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-3 light-mode:text-gray-600">
                          Absent
                        </th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-3 light-mode:text-gray-600">
                          Late
                        </th>
                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-3 light-mode:text-gray-600">
                          Total Hours
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 light-mode:divide-gray-200">
                      {attendanceSummary.map((item) => (
                        <tr key={item.date}>
                          <td className="py-3 text-sm">
                            {new Date(item.date).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </td>
                          <td className="py-3 text-sm text-green-500">{item.present}</td>
                          <td className="py-3 text-sm text-red-500">{item.absent}</td>
                          <td className="py-3 text-sm text-yellow-500">{item.late}</td>
                          <td className="py-3 text-sm">{item.totalHours.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Top Performers & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* Top Performers */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Top Performers</h3>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {memberPerformance.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center p-3 bg-gray-800/50 rounded-xl border border-gray-700 light-mode:bg-gray-100 light-mode:border-gray-200"
                    >
                      <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                        {member.name.charAt(0)}
                      </div>
                      <div className="ml-4 flex-grow">
                        <h4 className="text-sm font-medium">{member.name}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-400 light-mode:text-gray-600">
                            {member.attendance}% Attendance
                          </span>
                          <span className="h-1 w-1 rounded-full bg-gray-600 mx-2"></span>
                          <span className="text-xs text-gray-400 light-mode:text-gray-600">
                            {member.avgHours} Hours Avg
                          </span>
                        </div>
                      </div>
                      <div
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{
                          borderColor:
                            member.workType === "Remote"
                              ? "rgba(59, 130, 246, 0.5)"
                              : member.workType === "Office"
                              ? "rgba(16, 185, 129, 0.5)"
                              : "rgba(139, 92, 246, 0.5)",
                          color:
                            member.workType === "Remote"
                              ? "rgb(59, 130, 246)"
                              : member.workType === "Office"
                              ? "rgb(16, 185, 129)"
                              : "rgb(139, 92, 246)",
                        }}
                      >
                        {member.workType}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 light-mode:bg-white light-mode:border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Recent Activity</h3>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 mt-1">
                        {activity.memberName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium">{activity.memberName}</h4>
                        <p className="text-xs text-gray-400 mt-1 light-mode:text-gray-600">
                          {activity.action} at {activity.time}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 light-mode:text-gray-400">
                          {new Date(activity.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;