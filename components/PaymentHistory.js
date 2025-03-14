
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
"use client";

import { useState, useEffect } from "react";

const PaymentHistoryComponent = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Mock data for frontend development
    const mockPayments = [
      {
        id: 1,
        memberName: "John Doe",
        paymentDate: "2025-03-01",
        renewalDate: "2025-04-01",
        transactionId: "TXN87654321",
        amountPaid: 49.99,
        plan: "Monthly Premium",
        status: "Completed"
      },
      {
        id: 2,
        memberName: "Jane Smith",
        paymentDate: "2025-03-05",
        renewalDate: "2026-03-05",
        transactionId: "TXN98765432",
        amountPaid: 199.99,
        plan: "Annual Basic",
        status: "Completed"
      },
      {
        id: 3,
        memberName: "Robert Johnson",
        paymentDate: "2025-03-10",
        renewalDate: "2025-04-10",
        transactionId: "TXN12345678",
        amountPaid: 79.99,
        plan: "Monthly Platinum",
        status: "Pending"
      },
      {
        id: 4,
        memberName: "Emily Davis",
        paymentDate: "2025-02-28",
        renewalDate: "2025-05-28",
        transactionId: "TXN23456789",
        amountPaid: 149.99,
        plan: "Quarterly Premium",
        status: "Failed"
      }
    ];

    // Simulate API fetch delay
    setTimeout(() => {
      setPayments(mockPayments);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredPayments = payments.filter(payment =>
    payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
        <p className="text-xl font-light tracking-wider">Loading payment history...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-red-500">
      <div className="text-center">
        <p className="text-xl font-light tracking-wider">Error: {error}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen w-full">
      <div className="w-full grid grid-cols-1">
        {/* Header with back button - Full width */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-6 px-8 pt-8">
          <div className="flex items-center">
            <button className="mr-6 p-2 rounded-full bg-gray-800 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-3xl font-light tracking-wider uppercase">Payment History</h1>
          </div>
          
          <button className="bg-gray-800 border border-gray-700 text-white px-5 py-3 rounded hover:border-red-500 transition-all duration-300">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter View
            </span>
          </button>
        </div>
        
        {/* Search bar with red outline on the search icon */}
        <div className="w-full px-8 pt-8">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search member"
              className="w-full bg-gray-800 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Payment table - Reduced size but still visible */}
        <div className="w-full px-8 pt-8 pb-8">
          {filteredPayments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-light tracking-wider">No payment records found.</p>
            </div>
          ) : (
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-auto shadow-lg">
              <table className="w-full divide-y divide-gray-700">
                <thead>
                  <tr className="border-b border-gray-700 divide-x divide-gray-700">
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">ID</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Photo</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Member</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Payment Date</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Renewal Date</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Transaction ID</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Amount Paid</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-gray-700">Plan</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredPayments.map((payment, index) => (
                    <tr key={payment.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200 divide-x divide-gray-700">
                      <td className="py-3 px-4 text-sm font-light border-r border-gray-700">{index + 1}</td>
                      <td className="py-3 px-4 text-sm border-r border-gray-700">
                        <div className="p-2 bg-gray-800 border border-red-500 text-red-500 rounded-full hover:bg-red-900 transition-colors duration-200 inline-flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm font-medium border-r border-gray-700">{payment.memberName}</td>
                      <td className="py-3 px-4 text-sm font-light border-r border-gray-700">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-sm font-light border-r border-gray-700">{new Date(payment.renewalDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-sm font-light border-r border-gray-700">{payment.transactionId}</td>
                      <td className="py-3 px-4 text-sm font-medium border-r border-gray-700">${payment.amountPaid.toFixed(2)}</td>
                      <td className="py-3 px-4 text-sm font-light border-r border-gray-700">{payment.plan}</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          payment.status === 'Completed' ? 'bg-green-900 text-green-200 border border-green-500' :
                          payment.status === 'Pending' ? 'bg-yellow-900 text-yellow-200 border border-yellow-500' :
                          'bg-red-900 text-red-200 border border-red-500'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryComponent;