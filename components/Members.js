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
//                           <td className="p-3 border border-gray-600">
//                             <div className="flex space-x-2 md:space-x-3 flex-wrap justify-center">
//                               <button
//                                 onClick={() => handleEdit(member)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Edit size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(member._id)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Trash size={16} />
//                               </button>
//                             </div>
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
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save, Trash, Undo } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

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
//           throw new Error(`HTTP error! Status: ${response.status}`); // Fixed: Use backticks
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
//         throw new Error(`HTTP error! Status: ${response.status}`); // Fixed: Use backticks
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
//           throw new Error(`HTTP error! Status: ${response.status}`); // Fixed: Use backticks
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
//         <Link href="/add-member">
//           <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//             <Plus size={18} /> Add Member
//           </button>
//         </Link>
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
//                           <td className="p-3 border border-gray-600">
//                             <div className="flex space-x-2 md:space-x-3 flex-wrap justify-center">
//                               <button
//                                 onClick={() => handleEdit(member)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Edit size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(member._id)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Trash size={16} />
//                               </button>
//                             </div>
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
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save, Trash, Undo } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

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
//     <div className="pt-17 pl-2 pr-2 min-h-screen w-full flex flex-col">
//       {/* Sticky Header Box */}
//       <div className="sticky top-0 z-20 bg-gray-800 p-4 rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center space-x-4 mb-4">
//           <button
//             onClick={handleBackToDashboard}
//             className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                      border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//           >
//             <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//           </button>
//           <h2 className="text-2xl font-bold text-white">Members List</h2>
//         </div>

//         {/* Search and Add Member Row */}
//         <div className="w-full flex items-center justify-between">
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>
//           <Link href="/add-member">
//             <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//               <Plus size={18} /> Add Member
//             </button>
//           </Link>
//         </div>
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

//       {/* Scrollable Content Area */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col flex-grow overflow-auto">
//         <div className="overflow-x-auto">
//           {loading ? (
//             <div className="text-center py-8">Loading members...</div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-400">{error}</div>
//           ) : (
//             <table className="w-full table-fixed border-collapse text-white">
//               <thead className="sticky top-0 bg-gray-700">
//                 <tr className="text-sm md:text-base">
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
//                           <td className="p-3 border border-gray-600">
//                             <div className="flex space-x-2 md:space-x-3 flex-wrap justify-center">
//                               <button
//                                 onClick={() => handleEdit(member)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Edit size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(member._id)}
//                                 className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                               >
//                                 <Trash size={16} />
//                               </button>
//                             </div>
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
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Plus, ArrowLeft, Save, Trash, Undo } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

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

//   // Add this function to handle navigation back to the dashboard
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
//     const memberToDelete = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDelete);
//     setMembers(members.filter(member => member._id !== memberId));
    
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
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
//       <div className="w-full max-w-8xl">
//         {/* Fixed Header Box */}
//         <div className="fixed top-0 left-0 right-0 sm:top-[6rem] sm:left-[2rem] md:left-[20rem] lg:left-[24rem] z-20 bg-gray-800 p-4 rounded-lg shadow-md mb-4">
//           {/* Back Button and Title Row */}
//           <div className="flex items-center space-x-4 mb-4">
//             <button
//               onClick={handleBackToDashboard} // Use the handleBackToDashboard function here
//               className="bg-gray-700 px-3 py-2 rounded-lg text-white flex items-center gap-2 transition-colors 
//                        border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//             >
//               <ArrowLeft size={18} className="text-red-500" strokeWidth={5} />
//             </button>
//             <h2 className="text-2xl font-bold text-white">Members List</h2>
//           </div>

//           {/* Search and Add Member Row */}
//           <div className="w-full flex items-center justify-between">
//             <div className="relative w-full sm:w-auto">
//               <input
//                 type="text"
//                 placeholder="Search members..."
//                 className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//             </div>
//             <Link href="/add-member">
//               <button className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 flex items-center gap-2">
//                 <Plus size={18} /> Add Member
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Undo Delete Notification */}
//         {deletedMember && (
//           <div className="fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-50">
//             <span>Member deleted</span>
//             <button 
//               onClick={handleUndoDelete}
//               className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex items-center gap-1"
//             >
//               <Undo size={16} /> Undo
//             </button>
//           </div>
//         )}

//         {/* Table Container with Padding to Account for Fixed Header */}
//         <div className="pt-20 sm:pt-32"> {/* Adjust padding for mobile and larger screens */}
//           <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
//             <div className="overflow-x-auto">
//               {loading ? (
//                 <div className="text-center py-8">Loading members...</div>
//               ) : error ? (
//                 <div className="text-center py-8 text-red-400">{error}</div>
//               ) : (
//                 <table className="w-full table-fixed border-collapse text-white">
//                   <thead className="sticky top-0 bg-gray-700">
//                     <tr className="text-sm md:text-base">
//                       <th className="p-3 border border-gray-600">ID</th>
//                       <th className="p-3 border border-gray-600">Name</th>
//                       <th className="p-3 border border-gray-600">Email</th>
//                       <th className="p-3 border border-gray-600">Age</th>
//                       <th className="p-3 border border-gray-600">Gender</th>
//                       <th className="p-3 border border-gray-600">Phone</th>
//                       <th className="p-3 border border-gray-600">Membership</th>
//                       <th className="p-3 border border-gray-600">Trainer</th>
//                       <th className="p-3 border border-gray-600">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredMembers.length > 0 ? (
//                       filteredMembers.map((member, index) => (
//                         <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-sm md:text-base">
//                           {editingMember === member._id ? (
//                             <>
//                               <td className="p-2 border border-gray-600">{index + 1}</td>
//                               <td className="p-2 border border-gray-600">
//                                 <input
//                                   type="text"
//                                   name="name"
//                                   value={formData.name}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 />
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <input
//                                   type="email"
//                                   name="email"
//                                   value={formData.email}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 />
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <input
//                                   type="number"
//                                   name="age"
//                                   value={formData.age}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 />
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <select
//                                   name="gender"
//                                   value={formData.gender}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 >
//                                   <option value="Male">Male</option>
//                                   <option value="Female">Female</option>
//                                   <option value="Other">Other</option>
//                                 </select>
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <input
//                                   type="text"
//                                   name="phone"
//                                   value={formData.phone}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 />
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <select
//                                   name="membership_plan"
//                                   value={formData.membership_plan}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 >
//                                   <option value="Gold">Gold</option>
//                                   <option value="Silver">Silver</option>
//                                   <option value="Platinum">Platinum</option>
//                                 </select>
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <input
//                                   type="text"
//                                   name="trainer"
//                                   value={formData.trainer}
//                                   onChange={handleChange}
//                                   className="bg-gray-700 p-2 rounded w-full"
//                                 />
//                               </td>
//                               <td className="p-2 border border-gray-600">
//                                 <button
//                                   onClick={handleSave}
//                                   className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600"
//                                 >
//                                   <Save size={16} />
//                                 </button>
//                               </td>
//                             </>
//                           ) : (
//                             <>
//                               <td className="p-3 border border-gray-600">{index + 1}</td>
//                               <td className="p-3 border border-gray-600 truncate">{member.name}</td>
//                               <td className="p-3 border border-gray-600 truncate">{member.email}</td>
//                               <td className="p-3 border border-gray-600">{member.age}</td>
//                               <td className="p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                               <td className="p-3 border border-gray-600">{member.phone}</td>
//                               <td className="p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                               <td className="p-3 border border-gray-600">{member.trainer || "N/A"}</td>
//                               <td className="p-3 border border-gray-600">
//                                 <div className="flex space-x-2 md:space-x-3 flex-wrap justify-center">
//                                   <button
//                                     onClick={() => handleEdit(member)}
//                                     className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                                   >
//                                     <Edit size={16} />
//                                   </button>
//                                   <button
//                                     onClick={() => handleDelete(member._id)}
//                                     className="bg-red-500 px-3 py-1 rounded font-bold hover:bg-red-600"
//                                   >
//                                     <Trash size={16} />
//                                   </button>
//                                 </div>
//                               </td>
//                             </>
//                           )}
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="9" className="p-3 text-center text-gray-400">
//                           No members found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
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
// import Link from "next/link";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//     const memberToDelete = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDelete);
//     setMembers(members.filter(member => member._id !== memberId));
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3 ">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(member._id)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-[400px] overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(member._id)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="pt-17 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Sticky Header Box */}
//       <div className="sticky top-0 z-20 bg-gray-800 p-3 md:p-4 rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-gray-700 px-2 py-1 md:px-3 md:py-2 rounded-lg text-white flex items-center gap-1 transition-colors 
//                      border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//             >
//               <ArrowLeft size={16} className="text-red-500" strokeWidth={5} />
//             </button>
//             <h2 className="text-lg md:text-2xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-gray-700 px-2 py-1 text-xs md:text-sm rounded-lg hover:bg-gray-600 text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row */}
//         <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition text-sm"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={18} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-3 py-2 rounded font-bold hover:bg-red-600 flex items-center justify-center gap-2 text-sm text-white">
//               <Plus size={16} /> Add Member
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50 text-sm">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}

//       {/* Scrollable Content Area */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-3 md:p-6 flex flex-col flex-grow" style={{ minHeight: 'calc(100vh - 200px)' }}>
//   {loading ? (
//     <div className="text-center py-8 text-white">Loading members...</div>
//   ) : error ? (
//     <div className="text-center py-8 text-red-400">{error}</div>
//   ) : (
//     renderMembers()
//   )}
// </div>
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//     const memberToDelete = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDelete);
//     setMembers(members.filter(member => member._id !== memberId));
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3 ">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(member._id)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-full overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(member._id)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="pt-17 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Header Section */}
//       <div className="sticky top-0 z-20 bg-gray-800 p-3 md:p-4 rounded-lg shadow-md">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-gray-700 px-2 py-1 md:px-3 md:py-2 rounded-lg text-white flex items-center gap-1 transition-colors 
//                      border-2 border-transparent hover:border-red-500 hover:bg-gray-600"
//             >
//               <ArrowLeft size={16} className="text-red-500" strokeWidth={5} />
//             </button>
//             <h2 className="text-lg md:text-2xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-gray-700 px-2 py-1 text-xs md:text-sm rounded-lg hover:bg-gray-600 text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row */}
//         <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition text-sm"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={18} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-7 py-2 rounded font-bold hover:bg-red-600 flex items-center justify-center gap-2 text-sm text-white">
//               <Plus size={10} /> Add Member
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Table/Card Section with Scrollbar */}
//       <div className="w-full bg-gray-800 rounded-lg shadow-md p-3 md:p-6 flex-grow overflow-y-auto mt-4" style={{ height: 'calc(100vh - 180px)' }}>
//         {loading ? (
//           <div className="text-center py-8 text-white">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           renderMembers()
//         )}
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50 text-sm">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo, User } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//     photo: null,
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//       photo: member.photo,
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
//     const memberToDelete = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDelete);
//     setMembers(members.filter(member => member._id !== memberId));
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Handle photo upload from local storage
//   const handlePhotoUpload = (event, memberId) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const updatedMembers = members.map(member => 
//           member._id === memberId ? { ...member, photo: reader.result } : member
//         );
//         setMembers(updatedMembers);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle photo deletion
//   const handlePhotoDelete = (memberId) => {
//     const updatedMembers = members.map(member => 
//       member._id === memberId ? { ...member, photo: null } : member
//     );
//     setMembers(updatedMembers);
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="relative group">
//                       {formData.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                           <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                           <button
//                             onClick={() => handlePhotoDelete(member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(member._id)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="relative group">
//                       {member.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                           <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                           <button
//                             onClick={() => handlePhotoDelete(member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-full overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Photo</th> {/* Changed from Image to Photo */}
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <div className="relative group">
//                           {formData.photo ? (
//                             <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                               <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                               <button
//                                 onClick={() => handlePhotoDelete(member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="relative group">
//                           {member.photo ? (
//                             <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                               <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                               <button
//                                 onClick={() => handlePhotoDelete(member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(member._id)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   // Matching the dark blue theme seen in the screenshot
//   return (
//     <div className="bg-[#111827] pt-4 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Header Section - Adjusted to match screenshot styling */}
//       <div className="bg-[#1f2937] rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-[#374151] p-2 rounded-lg text-red-500 flex items-center"
//             >
//               <ArrowLeft size={20} strokeWidth={3} />
//             </button>
//             <h2 className="text-xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button - Matches screenshot styling */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-[#374151] px-3 py-2 rounded-lg hover:bg-[#4B5563] text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row - Matches screenshot styling */}
//         <div className="p-4 pt-0 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-[#374151] text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={20} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-600 flex items-center justify-center gap-2 text-white">
//               <Plus size={16} /> Add Member
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Table/Card Section with Scrollbar - Adjusted to match screenshot */}
//       <div 
//         className="w-full bg-[#1f2937] rounded-lg shadow-md p-3 md:p-4 flex-grow overflow-y-auto"
//         style={{ height: 'calc(100vh - 180px)' }}
//       >
//         {loading ? (
//           <div className="text-center py-8 text-white">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           renderMembers()
//         )}
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-[#1f2937] text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo, User } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//     photo: null,
//     status: "Active", // Add status field
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//       photo: member.photo,
//       status: member.status, // Include status in form data
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

//   // Updated delete flow
//   const confirmDelete = (member) => {
//     setMemberToDelete(member);
//     setShowConfirmDialog(true);
//   };

//   const cancelDelete = () => {
//     setShowConfirmDialog(false);
//     setMemberToDelete(null);
//   };

//   const handleDelete = async (memberId) => {
//     setShowConfirmDialog(false);
//     const memberToDeleteObj = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDeleteObj);
//     setMembers(members.filter(member => member._id !== memberId));
    
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
//         setMembers(prev => [...prev, memberToDeleteObj]);
//       }
//     }, 5000); // Changed to 5 seconds as requested
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Handle photo upload from local storage
//   const handlePhotoUpload = (event, memberId) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const updatedMembers = members.map(member => 
//           member._id === memberId ? { ...member, photo: reader.result } : member
//         );
//         setMembers(updatedMembers);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle photo deletion
//   const handlePhotoDelete = (memberId) => {
//     const updatedMembers = members.map(member => 
//       member._id === memberId ? { ...member, photo: null } : member
//     );
//     setMembers(updatedMembers);
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="relative group">
//                       {formData.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group hover:ring-2 hover:ring-red-500">
//                           <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                           <button
//                             onClick={() => handlePhotoDelete(member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group hover:ring-2 hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Status</label>
//                       <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                         <option value="Suspended">Suspended</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => confirmDelete(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="relative group">
//                       {member.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                           <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                           <button
//                             onClick={() => handlePhotoDelete(member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Status: </span>
//                       <span>{member.status || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-full overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Photo</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Status</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <div className="relative group">
//                           {formData.photo ? (
//                             <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                               <button
//                                 onClick={() => handlePhotoDelete(member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="status"
//                           value={formData.status}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Active">Active</option>
//                           <option value="Inactive">Inactive</option>
//                           <option value="Suspended">Suspended</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="relative group">
//                           {member.photo ? (
//                              <div className="relative w-16 h-16 rounded-full overflow-hidden outline-offset-2 group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                               <button
//                                 onClick={() => handlePhotoDelete(member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.status || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => confirmDelete(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   // Matching the dark blue theme seen in the screenshot
//   return (
//     <div className="bg-[#111827] pt-4 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Header Section - Adjusted to match screenshot styling */}
//       <div className="bg-[#1f2937] rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-[#374151] p-2 rounded-lg text-red-500 flex items-center hover:ring-2 hover:ring-red-500 transition-all"
//             >
//               <ArrowLeft size={20} strokeWidth={3} />
//             </button>
//             <h2 className="text-xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button - Matches screenshot styling */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-[#374151] px-3 py-2 rounded-lg hover:bg-[#4B5563] text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row - Matches screenshot styling */}
//         <div className="p-4 pt-0 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-[#374151] text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={20} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600">
//               <Plus size={20} />
//               <span>Add Member</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* Table/Card Section with Scrollbar - Adjusted to match screenshot */}
//       <div 
//         className="w-full bg-[#1f2937] rounded-lg shadow-md p-3 md:p-4 flex-grow overflow-y-auto"
//         style={{ height: 'calc(100vh - 180px)' }}
//       >
//         {loading ? (
//           <div className="text-center py-8 text-white">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           renderMembers()
//         )}
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-[#1f2937] text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo, User } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//     photo: null,
//     status: "Active", // Add status field
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//       photo: member.photo,
//       status: member.status, // Include status in form data
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

//   // Updated delete flow
//   const confirmDelete = (member) => {
//     setMemberToDelete(member);
//     setShowConfirmDialog(true);
//   };

//   const cancelDelete = () => {
//     setShowConfirmDialog(false);
//     setMemberToDelete(null);
//   };

//   const handleDelete = async (memberId) => {
//     setShowConfirmDialog(false);
//     const memberToDeleteObj = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDeleteObj);
//     setMembers(members.filter(member => member._id !== memberId));
    
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
//         setMembers(prev => [...prev, memberToDeleteObj]);
//       }
//     }, 5000); // Changed to 5 seconds as requested
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Updated photo upload function
//   const handlePhotoUpload = (event, memberId) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // Update the members state
//         const updatedMembers = members.map(member => 
//           member._id === memberId ? { ...member, photo: reader.result } : member
//         );
//         setMembers(updatedMembers);
        
//         // If we're editing this member, update formData too
//         if (editingMember === memberId) {
//           setFormData({
//             ...formData,
//             photo: reader.result
//           });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Updated photo deletion function
//   const handlePhotoDelete = async (e, memberId) => {
//     e.stopPropagation();
//     e.preventDefault();
    
//     // Update members state
//     const updatedMembers = members.map(member => 
//       member._id === memberId ? { ...member, photo: null } : member
//     );
//     setMembers(updatedMembers);
    
//     // If currently editing this member, also update formData
//     if (editingMember === memberId) {
//       setFormData({
//         ...formData,
//         photo: null
//       });
//     }
    
//     // Save changes to server immediately
//     try {
//       const memberToUpdate = members.find(m => m._id === memberId);
//       if (memberToUpdate) {
//         const updatedMemberData = { ...memberToUpdate, photo: null };
        
//         const response = await fetch(`http://localhost:5001/api/admin/members/${memberId}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedMemberData),
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         console.log("Photo deleted successfully");
//       }
//     } catch (err) {
//       console.error("Error deleting photo:", err);
//       // Revert the change in the UI if the server update fails
//       setMembers(prev => 
//         prev.map(m => m._id === memberId ? { ...m, photo: memberToUpdate.photo } : m)
//       );
//     }
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="relative group">
//                       {formData.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                           <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                           <button
//                             onClick={(e) => handlePhotoDelete(e, member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Status</label>
//                       <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                         <option value="Suspended">Suspended</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => confirmDelete(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="relative group">
//                       {member.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                           <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                           <button
//                             onClick={(e) => handlePhotoDelete(e, member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Status: </span>
//                       <span>{member.status || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-full overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Photo</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Status</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <div className="relative group">
//                           {formData.photo ? (
//                             <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                               <button
//                                 onClick={(e) => handlePhotoDelete(e, member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="status"
//                           value={formData.status}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Active">Active</option>
//                           <option value="Inactive">Inactive</option>
//                           <option value="Suspended">Suspended</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="relative group">
//                           {member.photo ? (
//                              <div className="relative w-16 h-16 rounded-full overflow-hidden outline-offset-2 group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                               <button
//                                 onClick={(e) => handlePhotoDelete(e, member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20" // Added z-20
//         type="button" 
//                               >
//                                 <Trash size={17} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.status || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => confirmDelete(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };


//   // Matching the dark blue theme seen in the screenshot
//   return (
//     <div className="bg-[#111827] pt-4 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Header Section - Adjusted to match screenshot styling */}
//       <div className="bg-[#1f2937] rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-[#374151] p-2 rounded-lg text-red-500 flex items-center hover:ring-2 hover:ring-red-500 transition-all"
//             >
//               <ArrowLeft size={20} strokeWidth={3} />
//             </button>
//             <h2 className="text-xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button - Matches screenshot styling */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-[#374151] px-3 py-2 rounded-lg hover:bg-[#4B5563] text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row - Matches screenshot styling */}
//         <div className="p-4 pt-0 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-[#374151] text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={20} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600">
//               <Plus size={20} />
//               <span>Add Member</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* Table/Card Section with Scrollbar - Adjusted to match screenshot */}
//       <div 
//         className="w-full bg-[#1f2937] rounded-lg shadow-md p-3 md:p-4 flex-grow overflow-y-auto"
//         style={{ height: 'calc(100vh - 180px)' }}
//       >
//         {loading ? (
//           <div className="text-center py-8 text-white">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           renderMembers()
//         )}
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-[#1f2937] text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}

//       {/* Confirm Delete Dialog */}
//       {showConfirmDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg">
//             <h3 className="text-white text-lg font-bold mb-4">Are you sure you want to delete this member?</h3>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={cancelDelete}
//                 className="bg-gray-500 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(memberToDelete._id)}
//                 className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Members;
// "use client";

// import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo, User } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingMember, setEditingMember] = useState(null);
//   const [deletedMember, setDeletedMember] = useState(null);
//   const [deleteTimer, setDeleteTimer] = useState(null);
//   const [viewMode, setViewMode] = useState("table"); // table or card
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     phone: "",
//     membership_plan: "",
//     trainer: "",
//     photo: null,
//     status: "Active", // Add status field
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

//     // Set view mode based on screen size
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewMode("card");
//       } else {
//         setViewMode("table");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
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
//       photo: member.photo,
//       status: member.status, // Include status in form data
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

//   // Updated delete flow
//   const confirmDelete = (member) => {
//     setMemberToDelete(member);
//     setShowConfirmDialog(true);
//   };

//   const cancelDelete = () => {
//     setShowConfirmDialog(false);
//     setMemberToDelete(null);
//   };

//   const handleDelete = async (memberId) => {
//     setShowConfirmDialog(false);
//     const memberToDeleteObj = members.find(m => m._id === memberId);
//     setDeletedMember(memberToDeleteObj);
//     setMembers(members.filter(member => member._id !== memberId));
    
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
//         setMembers(prev => [...prev, memberToDeleteObj]);
//       }
//     }, 5000); // Changed to 5 seconds as requested
    
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

//   const toggleViewMode = () => {
//     setViewMode(viewMode === "table" ? "card" : "table");
//   };

//   // Updated photo upload function
//   const handlePhotoUpload = (event, memberId) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // Update the members state
//         const updatedMembers = members.map(member => 
//           member._id === memberId ? { ...member, photo: reader.result } : member
//         );
//         setMembers(updatedMembers);
        
//         // If we're editing this member, update formData too
//         if (editingMember === memberId) {
//           setFormData({
//             ...formData,
//             photo: reader.result
//           });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Updated photo deletion function
//   const handlePhotoDelete = async (e, memberId) => {
//     e.stopPropagation();
//     e.preventDefault();
    
//     // Update members state
//     const updatedMembers = members.map(member => 
//       member._id === memberId ? { ...member, photo: null } : member
//     );
//     setMembers(updatedMembers);
    
//     // If currently editing this member, also update formData
//     if (editingMember === memberId) {
//       setFormData({
//         ...formData,
//         photo: null
//       });
//     }
    
//     // Save changes to server immediately
//     try {
//       const memberToUpdate = members.find(m => m._id === memberId);
//       if (memberToUpdate) {
//         const updatedMemberData = { ...memberToUpdate, photo: null };
        
//         const response = await fetch(`http://localhost:5001/api/admin/members/${memberId}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedMemberData),
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         console.log("Photo deleted successfully");
//       }
//     } catch (err) {
//       console.error("Error deleting photo:", err);
//       // Revert the change in the UI if the server update fails
//       setMembers(prev => 
//         prev.map(m => m._id === memberId ? { ...m, photo: members.find(m => m._id === memberId).photo } : m)
//       );
//     }
//   };

//   // Render table rows or cards based on the current view mode
//   const renderMembers = () => {
//     if (filteredMembers.length === 0) {
//       return (
//         <div className="text-center py-8 text-white">
//           No members found.
//         </div>
//       );
//     }

//     if (viewMode === "card") {
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
//           {filteredMembers.map((member, index) => (
//             <div 
//               key={member._id} 
//               className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
//             >
//               {editingMember === member._id ? (
//                 // Edit mode for card view
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <button
//                       onClick={handleSave}
//                       className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
//                     >
//                       <Save size={16} /> Save
//                     </button>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="relative group">
//                       {formData.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                           <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                           <button
//                             onClick={(e) => handlePhotoDelete(e, member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-xs text-gray-300">Age</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-xs text-gray-300">Gender</label>
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Phone</label>
//                       <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Membership</label>
//                       <select
//                         name="membership_plan"
//                         value={formData.membership_plan}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Gold">Gold</option>
//                         <option value="Silver">Silver</option>
//                         <option value="Platinum">Platinum</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Trainer</label>
//                       <input
//                         type="text"
//                         name="trainer"
//                         value={formData.trainer}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-xs text-gray-300">Status</label>
//                       <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                         <option value="Suspended">Suspended</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Display mode for card view
//                 <div>
//                   <div className="flex justify-between items-center mb-3">
//                     <div className="font-bold text-lg">#{index + 1}</div>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => confirmDelete(member)}
//                         className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
//                       >
//                         <Trash size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="relative group">
//                       {member.photo ? (
//                         <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                           <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                           <button
//                             onClick={(e) => handlePhotoDelete(e, member._id)}
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Trash size={12} className="text-white" />
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                           <User size={24} className="text-gray-400" />
//                         </div>
//                       )}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handlePhotoUpload(e, member._id)}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                       />
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Name: </span>
//                       <span className="font-medium">{member.name}</span>
//                     </div>
                    
//                     <div className="truncate">
//                       <span className="text-gray-300 text-sm">Email: </span>
//                       <span>{member.email}</span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <span className="text-gray-300 text-sm">Age: </span>
//                         <span>{member.age}</span>
//                       </div>
                      
//                       <div>
//                         <span className="text-gray-300 text-sm">Gender: </span>
//                         <span>{member.gender || "N/A"}</span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Phone: </span>
//                       <span>{member.phone}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Plan: </span>
//                       <span className="font-medium">{member.membership_plan || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Trainer: </span>
//                       <span>{member.trainer || "N/A"}</span>
//                     </div>
                    
//                     <div>
//                       <span className="text-gray-300 text-sm">Status: </span>
//                       <span>{member.status || "N/A"}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       );
//     } else {
//       // Table view
//       return (
//         <div className="h-full overflow-y-auto">
//           <table className="w-full border-collapse text-white">
//             <thead className="sticky top-0 bg-gray-700 z-10">
//               <tr className="text-sm md:text-base">
//                 <th className="p-2 md:p-3 border border-gray-600">ID</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Photo</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Name</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Email</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Age</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Gender</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Phone</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Membership</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Status</th>
//                 <th className="p-2 md:p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMembers.map((member, index) => (
//                 <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
//                   {editingMember === member._id ? (
//                     <>
//                       <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <div className="relative group">
//                           {formData.photo ? (
//                             <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
//                               <button
//                                 onClick={(e) => handlePhotoDelete(e, member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                               >
//                                 <Trash size={10} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="number"
//                           name="age"
//                           value={formData.age}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="gender"
//                           value={formData.gender}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="membership_plan"
//                           value={formData.membership_plan}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Gold">Gold</option>
//                           <option value="Silver">Silver</option>
//                           <option value="Platinum">Platinum</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <input
//                           type="text"
//                           name="trainer"
//                           value={formData.trainer}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         />
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <select
//                           name="status"
//                           value={formData.status}
//                           onChange={handleChange}
//                           className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
//                         >
//                           <option value="Active">Active</option>
//                           <option value="Inactive">Inactive</option>
//                           <option value="Suspended">Suspended</option>
//                         </select>
//                       </td>
//                       <td className="p-1 md:p-2 border border-gray-600">
//                         <button
//                           onClick={handleSave}
//                           className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
//                         >
//                           <Save size={14} />
//                         </button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="relative group">
//                           {member.photo ? (
//                              <div className="relative w-16 h-16 rounded-full overflow-hidden outline-offset-2 group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
//                               <button
//                                 onClick={(e) => handlePhotoDelete(e, member._id)}
//                                 className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20" // Added z-20
//         type="button" 
//                               >
//                                 <Trash size={17} className="text-white" />
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
//                               <User size={16} className="text-gray-400" />
//                             </div>
//                           )}
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handlePhotoUpload(e, member._id)}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
//                           />
//                         </div>
//                       </td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">{member.status || "N/A"}</td>
//                       <td className="p-1 md:p-3 border border-gray-600">
//                         <div className="flex space-x-1 md:space-x-2 justify-center">
//                           <button
//                             onClick={() => handleEdit(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Edit size={14} />
//                           </button>
//                           <button
//                             onClick={() => confirmDelete(member)}
//                             className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
//                           >
//                             <Trash size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };


//   // Matching the dark blue theme seen in the screenshot
//   return (
//     <div className="bg-[#111827] pt-4 px-2 md:px-4 min-h-screen w-full flex flex-col">
//       {/* Header Section - Adjusted to match screenshot styling */}
//       <div className="bg-[#1f2937] rounded-lg shadow-md mb-4">
//         {/* Back Button and Title Row */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <button
//               onClick={handleBackToDashboard}
//               className="bg-[#374151] p-2 rounded-lg text-red-500 flex items-center hover:ring-2 hover:ring-red-500 transition-all"
//             >
//               <ArrowLeft size={20} strokeWidth={3} />
//             </button>
//             <h2 className="text-xl font-bold text-white">Members List</h2>
//           </div>
          
//           {/* View toggle button - Matches screenshot styling */}
//           <button
//             onClick={toggleViewMode}
//             className="bg-[#374151] px-3 py-2 rounded-lg hover:bg-[#4B5563] text-white"
//           >
//             {viewMode === "table" ? "Card View" : "Table View"}
//           </button>
//         </div>

//         {/* Search and Add Member Row - Matches screenshot styling */}
//         <div className="p-4 pt-0 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="relative w-full sm:w-auto flex-1">
//             <input
//               type="text"
//               placeholder="Search members..."
//               className="w-full pl-9 pr-3 py-2 bg-[#374151] text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-2 top-2 text-gray-400" size={20} />
//           </div>
//           <Link href="/add-member" className="w-full sm:w-auto">
//             <button className="w-full sm:w-auto bg-red-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600">
//               <Plus size={20} />
//               <span>Add Member</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* Table/Card Section with Scrollbar - Adjusted to match screenshot */}
//       <div 
//         className="w-full bg-[#1f2937] rounded-lg shadow-md p-3 md:p-4 flex-grow overflow-y-auto"
//         style={{ height: 'calc(100vh - 180px)' }}
//       >
//         {loading ? (
//           <div className="text-center py-8 text-white">Loading members...</div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-400">{error}</div>
//         ) : (
//           renderMembers()
//         )}
//       </div>

//       {/* Undo Delete Notification */}
//       {deletedMember && (
//         <div className="fixed bottom-4 right-4 bg-[#1f2937] text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
//           <span>Member deleted</span>
//           <button 
//             onClick={handleUndoDelete}
//             className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
//           >
//             <Undo size={14} /> Undo
//           </button>
//         </div>
//       )}

//       {/* Confirm Delete Dialog */}
//       {showConfirmDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg">
//             <h3 className="text-white text-lg font-bold mb-4">Are you sure you want to delete this member?</h3>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={cancelDelete}
//                 className="bg-gray-500 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(memberToDelete._id)}
//                 className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Members;
"use client";

import { ArrowLeft, Edit, Plus, Save, Search, Trash, Undo, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [deletedMember, setDeletedMember] = useState(null);
  const [deleteTimer, setDeleteTimer] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // table or card
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    membership_plan: "",
    trainer: "",
    photo: null,
    status: "Active", // Add status field
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

    // Set view mode based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode("card");
      } else {
        setViewMode("table");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
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
      photo: member.photo,
      status: member.status, // Include status in form data
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

  // Updated delete flow
  const confirmDelete = (member) => {
    setMemberToDelete(member);
    setShowConfirmDialog(true);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
    setMemberToDelete(null);
  };

  const handleDelete = async (memberId) => {
    setShowConfirmDialog(false);
    const memberToDeleteObj = members.find(m => m._id === memberId);
    setDeletedMember(memberToDeleteObj);
    setMembers(members.filter(member => member._id !== memberId));
    
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
        setMembers(prev => [...prev, memberToDeleteObj]);
      }
    }, 5000); // Changed to 5 seconds as requested
    
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

  const toggleViewMode = () => {
    setViewMode(viewMode === "table" ? "card" : "table");
  };

  // Updated photo upload function
  const handlePhotoUpload = (event, memberId) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the members state
        const updatedMembers = members.map(member => 
          member._id === memberId ? { ...member, photo: reader.result } : member
        );
        setMembers(updatedMembers);
        
        // If we're editing this member, update formData too
        if (editingMember === memberId) {
          setFormData({
            ...formData,
            photo: reader.result
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Updated photo deletion function
  const handlePhotoDelete = async (e, memberId) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Update members state
    const updatedMembers = members.map(member => 
      member._id === memberId ? { ...member, photo: null } : member
    );
    setMembers(updatedMembers);
    
    // If currently editing this member, also update formData
    if (editingMember === memberId) {
      setFormData({
        ...formData,
        photo: null
      });
    }
    
    // Save changes to server immediately
    try {
      const memberToUpdate = members.find(m => m._id === memberId);
      if (memberToUpdate) {
        const updatedMemberData = { ...memberToUpdate, photo: null };
        
        const response = await fetch(`http://localhost:5001/api/admin/members/${memberId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMemberData),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Photo deleted successfully");
      }
    } catch (err) {
      console.error("Error deleting photo:", err);
      // Revert the change in the UI if the server update fails
      setMembers(prev => 
        prev.map(m => m._id === memberId ? { ...m, photo: members.find(m => m._id === memberId).photo } : m)
      );
    }
  };

  // Render table rows or cards based on the current view mode
  const renderMembers = () => {
    if (filteredMembers.length === 0) {
      return (
        <div className="text-center py-8 text-white">
          No members found.
        </div>
      );
    }

    if (viewMode === "card") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
          {filteredMembers.map((member, index) => (
            <div 
              key={member._id} 
              className="bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-white"
            >
              {editingMember === member._id ? (
                // Edit mode for card view
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="font-bold text-lg">#{index + 1}</div>
                    <button
                      onClick={handleSave}
                      className="bg-green-500 px-3 py-1 rounded font-bold hover:bg-green-600 flex items-center gap-1"
                    >
                      <Save size={16} /> Save
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative group">
                      {formData.photo ? (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
                          <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
                          <button
                            onClick={(e) => handlePhotoDelete(e, member._id)}
                            className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash size={12} className="text-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
                          <User size={24} className="text-gray-400" />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, member._id)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-300">Age</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-300">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Membership</label>
                      <select
                        name="membership_plan"
                        value={formData.membership_plan}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      >
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Platinum">Platinum</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Trainer</label>
                      <input
                        type="text"
                        name="trainer"
                        value={formData.trainer}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-300">Status</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="bg-gray-800 p-2 rounded w-full mt-1 text-white"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </div>
                  </div>
                </div>
              ) : (
                // Display mode for card view
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-bold text-lg">#{index + 1}</div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => confirmDelete(member)}
                        className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 flex items-center"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="relative group">
                      {member.photo ? (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
                          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                          <button
                            onClick={(e) => handlePhotoDelete(e, member._id)}
                            className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash size={12} className="text-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
                          <User size={24} className="text-gray-400" />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, member._id)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <span className="text-gray-300 text-sm">Name: </span>
                      <span className="font-medium">{member.name}</span>
                    </div>
                    
                    <div className="truncate">
                      <span className="text-gray-300 text-sm">Email: </span>
                      <span>{member.email}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-300 text-sm">Age: </span>
                        <span>{member.age}</span>
                      </div>
                      
                      <div>
                        <span className="text-gray-300 text-sm">Gender: </span>
                        <span>{member.gender || "N/A"}</span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-300 text-sm">Phone: </span>
                      <span>{member.phone}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300 text-sm">Plan: </span>
                      <span className="font-medium">{member.membership_plan || "N/A"}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300 text-sm">Trainer: </span>
                      <span>{member.trainer || "N/A"}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300 text-sm">Status: </span>
                      <span>{member.status || "N/A"}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      // Table view with fixed header and custom scrollbar
      return (
        <div className="h-full overflow-hidden">
          <div className="overflow-y-auto h-full custom-scrollbar">
            <table className="w-full border-collapse text-white">
              <thead className="sticky top-0 bg-gray-700 z-10">
                <tr className="text-sm md:text-base">
                  <th className="p-2 md:p-3 border border-gray-600">ID</th>
                  <th className="p-2 md:p-3 border border-gray-600">Photo</th>
                  <th className="p-2 md:p-3 border border-gray-600">Name</th>
                  <th className="p-2 md:p-3 border border-gray-600">Email</th>
                  <th className="p-2 md:p-3 border border-gray-600">Age</th>
                  <th className="p-2 md:p-3 border border-gray-600">Gender</th>
                  <th className="p-2 md:p-3 border border-gray-600">Phone</th>
                  <th className="p-2 md:p-3 border border-gray-600">Membership</th>
                  <th className="p-2 md:p-3 border border-gray-600">Trainer</th>
                  <th className="p-2 md:p-3 border border-gray-600">Status</th>
                  <th className="p-2 md:p-3 border border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {filteredMembers.map((member, index) => (
                  <tr key={member._id} className="bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm md:text-base">
                    {editingMember === member._id ? (
                      <>
                        <td className="p-1 md:p-2 border border-gray-600">{index + 1}</td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <div className="relative group">
                            {formData.photo ? (
                              <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-red-500">
                                <img src={formData.photo} alt="User" className="w-full h-full object-cover" />
                                <button
                                  onClick={(e) => handlePhotoDelete(e, member._id)}
                                  className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Trash size={10} className="text-white" />
                                </button>
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring-2 group-hover:ring-red-500">
                                <User size={16} className="text-gray-400" />
                              </div>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handlePhotoUpload(e, member._id)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          />
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          />
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          />
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          />
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <select
                            name="membership_plan"
                            value={formData.membership_plan}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          >
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Platinum">Platinum</option>
                          </select>
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <input
                            type="text"
                            name="trainer"
                            value={formData.trainer}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          />
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="bg-gray-700 p-1 md:p-2 rounded w-full text-xs sm:text-sm text-white"
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Suspended">Suspended</option>
                          </select>
                        </td>
                        <td className="p-1 md:p-2 border border-gray-600">
                          <button
                            onClick={handleSave}
                            className="bg-green-500 px-2 py-1 rounded font-bold hover:bg-green-600"
                          >
                            <Save size={14} />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-1 md:p-3 border border-gray-600">{index + 1}</td>
                        <td className="p-1 md:p-3 border border-gray-600">
                          <div className="relative group">
                            {member.photo ? (
                              <div className="relative w-16 h-16 rounded-full overflow-hidden outline-offset-2 group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                                <button
                                  onClick={(e) => handlePhotoDelete(e, member._id)}
                                  className="absolute top-0 right-0 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                  type="button"
                                >
                                  <Trash size={17} className="text-white" />
                                </button>
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center group-hover:ring group-hover:ring-2 group-hover:ring-red-500">
                                <User size={16} className="text-gray-400" />
                              </div>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handlePhotoUpload(e, member._id)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                          </div>
                        </td>
                        <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.name}</td>
                        <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[100px] md:max-w-none">{member.email}</td>
                        <td className="p-1 md:p-3 border border-gray-600">{member.age}</td>
                        <td className="p-1 md:p-3 border border-gray-600">{member.gender || "N/A"}</td>
                        <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.phone}</td>
                        <td className="p-1 md:p-3 border border-gray-600">{member.membership_plan || "N/A"}</td>
                        <td className="p-1 md:p-3 border border-gray-600 truncate max-w-[80px] md:max-w-none">{member.trainer || "N/A"}</td>
                        <td className="p-1 md:p-3 border border-gray-600">{member.status || "N/A"}</td>
                        <td className="p-1 md:p-3 border border-gray-600">
                          <div className="flex space-x-1 md:space-x-2 justify-center">
                            <button
                              onClick={() => handleEdit(member)}
                              className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => confirmDelete(member)}
                              className="bg-red-500 px-2 py-1 rounded font-bold hover:bg-red-600"
                            >
                              <Trash size={14} />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Matching the dark blue theme seen in the screenshot
  return (
    <div className="bg-[#111827] pt-4 px-2 md:px-4 min-h-screen w-full flex flex-col">
      {/* Header Section - Adjusted to match screenshot styling */}
      <div className="bg-[#1f2937] rounded-lg shadow-md mb-4">
        {/* Back Button and Title Row */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={handleBackToDashboard}
              className="bg-[#374151] p-2 rounded-lg text-red-500 flex items-center hover:ring-2 hover:ring-red-500 transition-all"
            >
              <ArrowLeft size={20} strokeWidth={3} />
            </button>
            <h2 className="text-xl font-bold text-white">Members List</h2>
          </div>
          
          {/* View toggle button - Matches screenshot styling */}
          <button
            onClick={toggleViewMode}
            className="bg-[#374151] px-3 py-2 rounded-lg hover:bg-[#4B5563] text-white"
          >
            {viewMode === "table" ? "Card View" : "Table View"}
          </button>
        </div>

        {/* Search and Add Member Row - Matches screenshot styling */}
        <div className="p-4 pt-0 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="relative w-full sm:w-auto flex-1">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full pl-9 pr-3 py-2 bg-[#374151] text-white rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-2 text-gray-400" size={20} />
          </div>
          <Link href="/add-member" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-red-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600">
              <Plus size={20} />
              <span>Add Member</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Table/Card Section with Scrollbar - Adjusted to match screenshot */}
      <div 
        className="w-full bg-[#1f2937] rounded-lg shadow-md p-3 md:p-4 flex-grow overflow-y-auto"
        style={{ height: 'calc(100vh - 180px)' }}
      >
        {loading ? (
          <div className="text-center py-8 text-white">Loading members...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-400">{error}</div>
        ) : (
          renderMembers()
        )}
      </div>

      {/* Undo Delete Notification */}
      {deletedMember && (
        <div className="fixed bottom-4 right-4 bg-[#1f2937] text-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
          <span>Member deleted</span>
          <button 
            onClick={handleUndoDelete}
            className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded flex items-center gap-1 text-white"
          >
            <Undo size={14} /> Undo
          </button>
        </div>
      )}

      {/* Confirm Delete Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-lg font-bold mb-4">Are you sure you want to delete this member?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-500 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(memberToDelete._id)}
                className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;