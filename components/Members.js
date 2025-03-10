// "use client"; // Mark this as a Client Component

// import { useState, useEffect } from "react";
// import { Search, Edit, Save, Plus, ArrowLeft } from "lucide-react"; // Icons
// import { useRouter } from "next/navigation"; // For navigation

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({});

//   const router = useRouter(); // Initialize useRouter

//   // Fetch members from API
//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   // Filter members based on search query
//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle edit button click
//   const handleEdit = (member) => {
//     setEditingMember(member._id); // Set the member being edited
//     setFormData({ ...member }); // Populate form data
//   };

//   // Handle input changes in the edit form
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Save edited member details
//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5001/api/admin/members/edit/${editingMember}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             age: formData.age,
//             trainerName: formData.trainer,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
//       }

//       const updatedMember = await response.json();

//       // Update the members list
//       setMembers((prevMembers) =>
//         prevMembers.map((m) =>
//           m._id === editingMember ? { ...m, ...updatedMember } : m
//         )
//       );

//       // Reset editing state
//       setEditingMember(null);
//       setFormData({});
//     } catch (err) {
//       console.error("Error updating member:", err);
//       alert(`Failed to update member: ${err.message}`);
//     }
//   };

//   // Navigate back to the dashboard
//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full">
//       {/* Navbar */}
//       <header className="bg-gray-800 px-6 py-4 flex flex-wrap items-center justify-between shadow-md">
//         <div className="flex items-center space-x-4">
//           {/* Back to Dashboard Button */}
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4 mt-2 sm:mt-0">
//           {/* Search Bar */}
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           {/* Add Member Button */}
//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members Table - Updated to take full width */}
//       <div className="flex-1 p-4 w-full max-w-full">
//         {loading ? (
//           <div className="text-center py-8">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           <div className="w-full bg-gray-800 rounded-lg shadow-md">
//             <div className="overflow-x-auto w-full">
//               <table className="w-full border-collapse border border-gray-700 text-white">
//                 <thead>
//                   <tr className="bg-gray-800 text-sm md:text-base">
//                     <th className="p-2 border border-gray-700">Name</th>
//                     <th className="p-2 border border-gray-700">Email</th>
//                     <th className="p-2 border border-gray-700">Age</th>
//                     <th className="p-2 border border-gray-700">Gender</th>
//                     <th className="p-2 border border-gray-700">Phone</th>
//                     <th className="p-2 border border-gray-700">Membership</th>
//                     <th className="p-2 border border-gray-700">Trainer</th>
//                     <th className="p-2 border border-gray-700">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredMembers.length > 0 ? (
//                     filteredMembers.map((member) => (
//                       <tr key={member._id} className="bg-gray-700 hover:bg-gray-600 text-sm md:text-base">
//                         <td className="p-2 border border-gray-700">{member.name}</td>
//                         <td className="p-2 border border-gray-700">{member.email}</td>
//                         <td className="p-2 border border-gray-700">{member.age}</td>
//                         <td className="p-2 border border-gray-700">{member.gender}</td>
//                         <td className="p-2 border border-gray-700">{member.phone}</td>
//                         <td className="p-2 border border-gray-700">{member.membership_plan}</td>
//                         <td className="p-2 border border-gray-700">{member.trainer || "N/A"}</td>
//                         <td className="p-2 border border-gray-700">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={16} />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="8" className="p-3 text-center text-gray-400">
//                         No members found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Save, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({});

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({ ...member });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5001/api/admin/members/edit/${editingMember}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             age: formData.age,
//             trainerName: formData.trainer,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
//       }

//       const updatedMember = await response.json();

//       setMembers((prevMembers) =>
//         prevMembers.map((m) =>
//           m._id === editingMember ? { ...m, ...updatedMember } : m
//         )
//       );

//       setEditingMember(null);
//       setFormData({});
//     } catch (err) {
//       console.error("Error updating member:", err);
//       alert(`Failed to update member: ${err.message}`);
//     }
//   };

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full">
//       {/* Navbar */}
//       <header className="bg-gray-800 px-6 py-4 flex flex-wrap items-center justify-between shadow-md">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4 mt-2 sm:mt-0">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members Table */}
//       <div className="flex-1 p-4 w-full max-w-full ml-64"> {/* Add ml-64 for spacing */}
//         {loading ? (
//           <div className="text-center py-8">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           <div className="w-full bg-gray-800 rounded-lg shadow-md">
//             <div className="overflow-x-auto w-full">
//               <table className="w-full border-collapse border border-gray-700 text-white">
//                 <thead>
//                   <tr className="bg-gray-800 text-sm md:text-base">
//                     <th className="p-2 border border-gray-700">Name</th>
//                     <th className="p-2 border border-gray-700">Email</th>
//                     <th className="p-2 border border-gray-700">Age</th>
//                     <th className="p-2 border border-gray-700">Gender</th>
//                     <th className="p-2 border border-gray-700">Phone</th>
//                     <th className="p-2 border border-gray-700">Membership</th>
//                     <th className="p-2 border border-gray-700">Trainer</th>
//                     <th className="p-2 border border-gray-700">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredMembers.length > 0 ? (
//                     filteredMembers.map((member) => (
//                       <tr key={member._id} className="bg-gray-700 hover:bg-gray-600 text-sm md:text-base">
//                         <td className="p-2 border border-gray-700">{member.name}</td>
//                         <td className="p-2 border border-gray-700">{member.email}</td>
//                         <td className="p-2 border border-gray-700">{member.age}</td>
//                         <td className="p-2 border border-gray-700">{member.gender}</td>
//                         <td className="p-2 border border-gray-700">{member.phone}</td>
//                         <td className="p-2 border border-gray-700">{member.membership_plan}</td>
//                         <td className="p-2 border border-gray-700">{member.trainer || "N/A"}</td>
//                         <td className="p-2 border border-gray-700">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={16} />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="8" className="p-3 text-center text-gray-400">
//                         No members found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full">
//       {/* Navbar */}
//       <header className="bg-gray-800 px-6 py-4 flex flex-wrap items-center justify-between shadow-md">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4 mt-2 sm:mt-0">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members Table - Centered & Fixed */}
//       <div className="flex justify-center items-center flex-grow p-4">
//         <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-md overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse text-white">
//                 <thead>
//                   <tr className="bg-gray-700 text-sm md:text-base">
//                     <th className="p-3 border border-gray-600">Name</th>
//                     <th className="p-3 border border-gray-600">Email</th>
//                     <th className="p-3 border border-gray-600">Age</th>
//                     <th className="p-3 border border-gray-600">Gender</th>
//                     <th className="p-3 border border-gray-600">Phone</th>
//                     <th className="p-3 border border-gray-600">Membership</th>
//                     <th className="p-3 border border-gray-600">Trainer</th>
//                     <th className="p-3 border border-gray-600">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredMembers.length > 0 ? (
//                     filteredMembers.map((member) => (
//                       <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                         <td className="p-3 border border-gray-600">{member.name}</td>
//                         <td className="p-3 border border-gray-600">{member.email}</td>
//                         <td className="p-3 border border-gray-600">{member.age}</td>
//                         <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                         <td className="p-3 border border-gray-600">{member.phone}</td>
//                         <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                         <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                         <td className="p-3 border border-gray-600">
//                           <button className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600">
//                             <Edit size={16} />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="8" className="p-3 text-center text-gray-400">
//                         No members found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;

// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center w-full mt-16">
//       {/* Navbar (Fixed in Place) */}
//       <header className="bg-gray-800 w-full max-w-5xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Centered & Fixed) */}
//       <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-md overflow-hidden mt-6 p-4">
//         {loading ? (
//           <div className="text-center py-8">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       <td className="p-3 border border-gray-600">{member.name}</td>
//                       <td className="p-3 border border-gray-600">{member.email}</td>
//                       <td className="p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.phone}</td>
//                       <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">
//                         <button className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600">
//                           <Edit size={16} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center w-full mt-16">
//       {/* Navbar (Fixed in Place) */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg ml-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Centered & Fixed) */}
//       <div className="w-full max-w-7xl bg-gray-800 rounded-lg shadow-md overflow-hidden mt-6 p-6 min-h-[600px] ml-64">
//         {loading ? (
//           <div className="text-center py-8">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       <td className="p-3 border border-gray-600">{member.name}</td>
//                       <td className="p-3 border border-gray-600">{member.email}</td>
//                       <td className="p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.phone}</td>
//                       <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">
//                         <button className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600">
//                           <Edit size={16} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center w-full mt-16">
//       {/* Navbar (Fixed in Place) */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         {/* Removed ml-64, added mx-auto to center */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Centered & Fixed) */}
//       <div className="w-full max-w-7xl bg-gray-800 rounded-lg shadow-md overflow-hidden mt-6 p-6 min-h-[600px] mx-auto">
//         {/* Removed ml-64, added mx-auto to center */}
//         {loading ? (
//           <div className="text-center py-8">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       <td className="p-3 border border-gray-600">{member.name}</td>
//                       <td className="p-3 border border-gray-600">{member.email}</td>
//                       <td className="p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.phone}</td>
//                       <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">
//                         <button className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600">
//                           <Edit size={16} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
//       {/* Navbar */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Full Background, Fixed Table) */}
//       <div className="w-full h-full bg-gray-800 rounded-lg shadow-md mt-6 p-6 min-h-screen flex flex-col mx-auto">
//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       <td className="p-3 border border-gray-600">{member.name}</td>
//                       <td className="p-3 border border-gray-600">{member.email}</td>
//                       <td className="p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.phone}</td>
//                       <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                       <td className="p-3 border border-gray-600">
//                         <button className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600">
//                           <Edit size={16} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
//       {/* Navbar */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Full Background, Fixed Table) */}
//       <div className="w-full h-full bg-gray-800 rounded-lg shadow-md mt-6 p-6 min-h-screen flex flex-col mx-auto">
//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
//       {/* Navbar */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>

//         <div className="relative flex items-center space-x-4">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>

//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </div>
//       </header>

//       {/* Members List Box (Full Background, Fixed Table) */}
//       <div className="w-full h-full bg-gray-800 rounded-lg shadow-md mt-6 p-6 min-h-screen flex flex-col mx-auto">
//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
//       {/* Navbar */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>
//       </header>

//       {/* Search and Add Member Section */}
//       <div className="w-full max-w-7xl mt-6 flex items-center justify-between px-6">
//         <div className="relative w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search members..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//           <Plus size={18} /> Add Member
//         </button>
//       </div>

//       {/* Members List Box (Full Background, Fixed Table) */}
//       <div className="w-full h-full bg-gray-800 rounded-lg shadow-md mt-6 p-6 min-h-screen flex flex-col mx-auto max-w-7xl">
//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center">
//       {/* Navbar */}
//       <header className="bg-gray-800 w-full max-w-7xl px-6 py-4 flex items-center justify-between shadow-md rounded-lg mx-auto">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold">Members List</h2>
//         </div>
//       </header>

//       {/* Search and Add Member Section */}
//       <div className="w-full max-w-7xl mt-6 flex items-center justify-between px-6 mb-6">
//         <div className="relative w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search members..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//           <Plus size={18} /> Add Member
//         </button>
//       </div>

//       {/* Members List Box (Full Background, Fixed Table) */}
//       <div className="w-full h-full bg-gray-800 rounded-lg shadow-md p-6 min-h-screen flex flex-col mx-auto max-w-7xl mt-10">
//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   // Make sure this function is defined
//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     <>
//       {/* Back Button and Title */}
//       <div className="flex items-center space-x-4 mb-6">
//         <button
//           onClick={handleBackToDashboard}
//           className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                    border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//         >
//           <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//         </button>
//         <h2 className="text-2xl font-bold">Members List</h2>
//       </div>

//       {/* Search and Add Member Section */}
//       <div className="w-full flex items-center justify-between mb-6">
//         <div className="relative w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search members..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//           <Plus size={18} /> Add Member
//         </button>
//       </div>

//       {/* Members List */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Members;

// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   return (
//     // Add padding-top to ensure content is below navbar and not overlapping with sidebar
//     <div className="pt-6 pl-2 pr-2 min-h-screen w-full">
//       {/* Back Button and Title - Explicitly set text color to white */}
//       <div className="flex items-center space-x-4 mb-6">
//         <button
//           onClick={handleBackToDashboard}
//           className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                    border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//         >
//           <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//         </button>
//         <h2 className="text-2xl font-bold text-white">Members List</h2>
//       </div>

//       {/* Search and Add Member Section */}
//       <div className="w-full flex items-center justify-between mb-6">
//         <div className="relative w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search members..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//           <Plus size={18} /> Add Member
//         </button>
//       </div>

//       {/* Members List Box - Increased the height */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col min-h-[70vh]">
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save, Trash, Undo } from "lucide-react";
// import { useRouter } from "next/navigation";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//   });

//   const router = useRouter();

//   const handleBackToDashboard = () => {
//     router.push("/dashboard");
//   };

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5001/api/admin/members", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch members: " + err.message);
//         console.error("Error fetching members:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const filteredMembers = members.filter((member) =>
//     member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (member) => {
//     setEditingMember(member._id);
//     setFormData({
//       name: member.name,
//       email: member.email,
//       age: member.age,
//       gender: member.gender,
//       phone: member.phone,
//       membership_plan: member.membership_plan,
//       trainer: member.trainer,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const updatedMember = await response.json();
//       setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
//       setEditingMember(null);
//     } catch (err) {
//       console.error("Error updating member:", err);
//     }
//   };

//   const handleDelete = async (memberId) => {
//     // Store the member before removing
//     const memberToDelete = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDelete);
    
//     // Remove from state immediately
//     setMembers(members.filter(member => member._id !== memberId));
    
//     // Set timer for undo
//     if (deleteTimer) clearTimeout(deleteTimer);
    
//     const timer = setTimeout(async () => {
//       try {
//         const response = await fetch(`http://localhost:5001/api/admin/members/${memberId}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         setDeletedMember(null);
//       } catch (err) {
//         console.error("Error deleting member:", err);
//         // Restore the member in case of error
//         setMembers(prev => [...prev, memberToDelete]);
//       }
//     }, 6000);
    
//     setDeleteTimer(timer);
//   };

//   const handleUndoDelete = () => {
//     if (deleteTimer) {
//       clearTimeout(deleteTimer);
//       setDeleteTimer(null);
//     }
    
//     if (deletedMember) {
//       setMembers(prev => [...prev, deletedMember]);
//       setDeletedMember(null);
//     }
//   };

//   return (
//     // Add padding-top to ensure content is below navbar and not overlapping with sidebar
//     <div className="pt-17 pl-2 pr-2 min-h-screen w-full">
//       {/* Back Button and Title - Explicitly set text color to white */}
//       <div className="flex items-center space-x-4 mb-6">
//         <button
//           onClick={handleBackToDashboard}
//           className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                    border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//         >
//           <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//         </button>
//         <h2 className="text-2xl font-bold text-white">Members List</h2>
//       </div>

//       {/* Search and Add Member Section */}
//       <div className="w-full flex items-center justify-between mb-6">
//         <div className="relative w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search members..."
//             className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>

//         <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//           <Plus size={18} /> Add Member
//         </button>
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-50">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex items-center gap-1"
//           >
//             <Undo size={16} /> Undo
//           </button>
//         </div>
//       )}

//       {/* Members List Box - Increased the height */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col min-h-[70vh]">
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead>
//                 <tr className="bg-gray-700 text-sm md:text-base">
//                   <th className="p-3 border border-gray-600">ID</th>
//                   <th className="p-3 border border-gray-600">Name</th>
//                   <th className="p-3 border border-gray-600">Email</th>
//                   <th className="p-3 border border-gray-600">Age</th>
//                   <th className="p-3 border border-gray-600">Gender</th>
//                   <th className="p-3 border border-gray-600">Phone</th>
//                   <th className="p-3 border border-gray-600">Membership</th>
//                   <th className="p-3 border border-gray-600">Trainer</th>
//                   <th className="p-3 border border-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredMembers.length > 0 ? (
//                   filteredMembers.map((member, index) => (
//                     <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                       {editingMember === member._id ? (
//                         <>
//                           <td className="p-2 border border-gray-600">{index + 1}</td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="number"
//                               name="age"
//                               value={formData.age}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="gender"
//                               value={formData.gender}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <select
//                               name="membership_plan"
//                               value={formData.membership_plan}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             >
//                               <option value="Gold">Gold</option>
//                               <option value="Silver">Silver</option>
//                               <option value="Platinum">Platinum</option>
//                             </select>
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <input
//                               type="text"
//                               name="trainer"
//                               value={formData.trainer}
//                               onChange={handleChange}
//                               className="bg-gray-700 p-2 rounded w-full"
//                             />
//                           </td>
//                           <td className="p-2 border border-gray-600">
//                             <button
//                               onClick={handleSave}
//                               className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                             >
//                               <Save size={16} />
//                             </button>
//                           </td>
//                         </>
//                       ) : (
//                         <>
//                           <td className="p-3 border border-gray-600">{index + 1}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                           <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                           <td className="p-3 border border-gray-600">{member.age}</td>
//                           <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.phone}</td>
//                           <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                           <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                           <td className="p-3 border border-gray-600 flex space-x-2">
//                             <button
//                               onClick={() => handleEdit(member)}
//                               className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                             >
//                               <Edit size={16} />
//                             </button>
//                             <button
//                               onClick={() => handleDelete(member._id)}
//                               className="bg-gray-600 px-3 py-1 rounded font-bold hover:bg-gray-700"
//                             >
//                               <Trash size={16} />
//                             </button>
//                           </td>
//                         </>
//                       )}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="9" className="p-3 text-center text-gray-400">
//                       No members found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Members;
"use client";

import { useState, useEffect } from "react";
import { Search, Edit, Plus, ArrowLeft, Save, Trash, Undo } from "lucide-react";
import { useRouter } from "next/navigation";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [deletedMember, setDeletedMember] = useState(null);
  const [deleteTimer, setDeleteTimer] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    membership_plan: "",
    trainer: "",
  });

  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5001/api/admin/members", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMembers(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch members: " + err.message);
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter((member) =>
    member.name && member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (member) => {
    setEditingMember(member._id);
    setFormData({
      name: member.name,
      email: member.email,
      age: member.age,
      gender: member.gender,
      phone: member.phone,
      membership_plan: member.membership_plan,
      trainer: member.trainer,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/admin/members/${editingMember}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const updatedMember = await response.json();
      setMembers(members.map(member => member._id === updatedMember._id ? updatedMember : member));
      setEditingMember(null);
    } catch (err) {
      console.error("Error updating member:", err);
    }
  };

  const handleDelete = async (memberId) => {
    // Store the member before removing
    const memberToDelete = members.find(m => m._id === memberId);
    setDeletedMember(memberToDelete);
    
    // Remove from state immediately
    setMembers(members.filter(member => member._id !== memberId));
    
    // Set timer for undo
    if (deleteTimer) clearTimeout(deleteTimer);
    
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/admin/members/${memberId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setDeletedMember(null);
      } catch (err) {
        console.error("Error deleting member:", err);
        // Restore the member in case of error
        setMembers(prev => [...prev, memberToDelete]);
      }
    }, 6000);
    
    setDeleteTimer(timer);
  };

  const handleUndoDelete = () => {
    if (deleteTimer) {
      clearTimeout(deleteTimer);
      setDeleteTimer(null);
    }
    
    if (deletedMember) {
      setMembers(prev => [...prev, deletedMember]);
      setDeletedMember(null);
    }
  };

  return (
    // Add padding-top to ensure content is below navbar and not overlapping with sidebar
    <div className="pt-17 pl-2 pr-2 min-h-screen w-full">
      {/* Back Button and Title - Explicitly set text color to white */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={handleBackToDashboard}
          className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
                   border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
        >
          <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
        </button>
        <h2 className="text-2xl font-bold text-white">Members List</h2>
      </div>

      {/* Search and Add Member Section */}
      <div className="w-full flex items-center justify-between mb-6">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search members..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
          <Plus size={18} /> Add Member
        </button>
      </div>

      {/* Undo Delete Notification */}
      {deletedMember && (
        <div className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-50">
          <span>Member deleted</span>
          <button 
            onClick={handleUndoDelete}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex items-center gap-1"
          >
            <Undo size={16} /> Undo
          </button>
        </div>
      )}

      {/* Members List Box - Increased the height */}
      <div className="w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col min-h-[70vh]">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8">Loading members...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-400">{error}</div>
          ) : (
            <table className="w-full table-fixed border-collapse text-white">
              <thead>
                <tr className="bg-gray-700 text-sm md:text-base">
                  <th className="p-3 border border-gray-600">ID</th>
                  <th className="p-3 border border-gray-600">Name</th>
                  <th className="p-3 border border-gray-600">Email</th>
                  <th className="p-3 border border-gray-600">Age</th>
                  <th className="p-3 border border-gray-600">Gender</th>
                  <th className="p-3 border border-gray-600">Phone</th>
                  <th className="p-3 border border-gray-600">Membership</th>
                  <th className="p-3 border border-gray-600">Trainer</th>
                  <th className="p-3 border border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, index) => (
                    <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
                      {editingMember === member._id ? (
                        <>
                          <td className="p-2 border border-gray-600">{index + 1}</td>
                          <td className="p-2 border border-gray-600">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            />
                          </td>
                          <td className="p-2 border border-gray-600">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            />
                          </td>
                          <td className="p-2 border border-gray-600">
                            <input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            />
                          </td>
                          <td className="p-2 border border-gray-600">
                            <select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </td>
                          <td className="p-2 border border-gray-600">
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            />
                          </td>
                          <td className="p-2 border border-gray-600">
                            <select
                              name="membership_plan"
                              value={formData.membership_plan}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            >
                              <option value="Gold">Gold</option>
                              <option value="Silver">Silver</option>
                              <option value="Platinum">Platinum</option>
                            </select>
                          </td>
                          <td className="p-2 border border-gray-600">
                            <input
                              type="text"
                              name="trainer"
                              value={formData.trainer}
                              onChange={handleChange}
                              className="bg-gray-700 p-2 rounded w-full"
                            />
                          </td>
                          <td className="p-2 border border-gray-600">
                            <button
                              onClick={handleSave}
                              className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
                            >
                              <Save size={16} />
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-3 border border-gray-600">{index + 1}</td>
                          <td className="p-3 border border-gray-600 truncate">{member.name}</td>
                          <td className="p-3 border border-gray-600 truncate">{member.email}</td>
                          <td className="p-3 border border-gray-600">{member.age}</td>
                          <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
                          <td className="p-3 border border-gray-600">{member.phone}</td>
                          <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
                          <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
                          <td className="p-3 border border-gray-600">
                            <div className="flex space-x-2 md:space-x-3 flex-wrap justify-center">
                              <button
                                onClick={() => handleEdit(member)}
                                className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete(member._id)}
                                className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="p-3 text-center text-gray-400">
                      No members found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;