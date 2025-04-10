// // // // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save } from 'lucide-react';

// // // // // // // // // // // const AddTrainer = () => {
// // // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // // //     name: '',
// // // // // // // // // // //     email: '',
// // // // // // // // // // //     specialization: '',
// // // // // // // // // // //     experience: '',
// // // // // // // // // // //     phone: '',
// // // // // // // // // // //     availability: '',
// // // // // // // // // // //   });

// // // // // // // // // // //   const handleChange = (e) => {
// // // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // // //     setFormData({
// // // // // // // // // // //       ...formData,
// // // // // // // // // // //       [name]: value,
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     console.log('Form Data Submitted:', formData);
// // // // // // // // // // //     // Add logic to send data to the backend
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-4xl font-bold mb-6 text-white">Add New Trainer</h1>
// // // // // // // // // // //       <form onSubmit={handleSubmit} className="max-w-md bg-gray-800/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/30 backdrop-filter">
// // // // // // // // // // //         <h1 className="text-3xl font-semibold mb-6 text-center text-white">Add Trainer</h1>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-lg">Name</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             id="name"
// // // // // // // // // // //             name="name"
// // // // // // // // // // //             value={formData.name}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-lg">Email</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="email"
// // // // // // // // // // //             id="email"
// // // // // // // // // // //             name="email"
// // // // // // // // // // //             value={formData.email}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="specialization" className="block text-gray-300 mb-2 font-medium text-lg">Specialization</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             id="specialization"
// // // // // // // // // // //             name="specialization"
// // // // // // // // // // //             value={formData.specialization}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="experience" className="block text-gray-300 mb-2 font-medium text-lg">Experience (years)</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="number"
// // // // // // // // // // //             id="experience"
// // // // // // // // // // //             name="experience"
// // // // // // // // // // //             value={formData.experience}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium text-lg">Phone Number</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="tel"
// // // // // // // // // // //             id="phone"
// // // // // // // // // // //             name="phone"
// // // // // // // // // // //             value={formData.phone}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-6">
// // // // // // // // // // //           <label htmlFor="availability" className="block text-gray-300 mb-2 font-medium text-lg">Availability</label>
// // // // // // // // // // //           <textarea
// // // // // // // // // // //             id="availability"
// // // // // // // // // // //             name="availability"
// // // // // // // // // // //             value={formData.availability}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             rows="3"
// // // // // // // // // // //             required
// // // // // // // // // // //           ></textarea>
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <button
// // // // // // // // // // //   type="submit"
// // // // // // // // // // //   className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-rose-600 transition-all duration-300 font-semibold text-xl shadow-xl shadow-purple-500/20 transform hover:scale-105"
// // // // // // // // // // // >
// // // // // // // // // // //           Submit
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </form>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const TrainerManagement = () => {
// // // // // // // // // // //   const [trainers, setTrainers] = useState([
// // // // // // // // // // //     {
// // // // // // // // // // //       id: 1,
// // // // // // // // // // //       name: "John Doe",
// // // // // // // // // // //       email: "john.doe@gmail.com",
// // // // // // // // // // //       specialization: "Weight Training",
// // // // // // // // // // //       experience: "5 years",
// // // // // // // // // // //       phone: "9995258646",
// // // // // // // // // // //       availability: "Mon, Wed, Fri",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       id: 2,
// // // // // // // // // // //       name: "Jane Smith",
// // // // // // // // // // //       email: "jane.smith@gmail.com",
// // // // // // // // // // //       specialization: "Yoga",
// // // // // // // // // // //       experience: "3 years",
// // // // // // // // // // //       phone: "8891449305",
// // // // // // // // // // //       availability: "Tue, Thu, Sat",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       id: 3,
// // // // // // // // // // //       name: "Michael Johnson",
// // // // // // // // // // //       email: "michael@gmail.com",
// // // // // // // // // // //       specialization: "Cardio",
// // // // // // // // // // //       experience: "7 years",
// // // // // // // // // // //       phone: "7894561230",
// // // // // // // // // // //       availability: "Mon, Tue, Thu",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     }
// // // // // // // // // // //   ]);

// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // // // //   const undoTimerRef = useRef(null);
// // // // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // // // //     setEditingId(trainer.id);
// // // // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSave = () => {
// // // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // // //       trainer.id === editingId ? editedData : trainer
// // // // // // // // // // //     ));
// // // // // // // // // // //     setEditingId(null);
// // // // // // // // // // //     console.log("Sending to backend:", editedData);
// // // // // // // // // // //     alert("Trainer details updated successfully");
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // // // //     setEditingId(null);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // // // //   };

// // // // // // // // // // //   const confirmDelete = (id) => {
// // // // // // // // // // //     const trainerToDelete = trainers.find(trainer => trainer.id === id);
// // // // // // // // // // //     setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // // // //     setTrainers(trainers.filter(trainer => trainer.id !== id));
// // // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // // //     setUndoTimeLeft(5);
// // // // // // // // // // //     if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // // // //     undoTimerRef.current = setInterval(() => {
// // // // // // // // // // //       setUndoTimeLeft(prev => {
// // // // // // // // // // //         if (prev <= 1) {
// // // // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // // // //           console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // // // //           return 0;
// // // // // // // // // // //         }
// // // // // // // // // // //         return prev - 1;
// // // // // // // // // // //       });
// // // // // // // // // // //     }, 1000);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleUndoDelete = () => {
// // // // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // // // //       setTrainers(prev => [...prev, recentlyDeletedTrainer]);
// // // // // // // // // // //       setRecentlyDeletedTrainer(null);
// // // // // // // // // // //       clearInterval(undoTimerRef.current);
// // // // // // // // // // //       setUndoTimeLeft(0);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const cancelDelete = () => {
// // // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // // // //     fileInputRef.current.click();
// // // // // // // // // // //     fileInputRef.current.dataset.trainerId = id;
// // // // // // // // // // //   };

// // // // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // // //     if (!file) return;
    
// // // // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // // // //     const photoURL = URL.createObjectURL(file);
    
// // // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // // //       trainer.id === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // // // //     ));
    
// // // // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // // // //     e.target.value = null;
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // // //       trainer.id === id ? { ...trainer, photo: null } : trainer
// // // // // // // // // // //     ));
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // // // //         }
// // // // // // // // // // //       });
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [trainers]);

// // // // // // // // // // //   const filteredTrainers = trainers.filter(trainer => 
// // // // // // // // // // //     trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //     trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //     trainer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // // //   );

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="w-full bg-black text-white min-h-screen">
// // // // // // // // // // //       <input 
// // // // // // // // // // //         type="file" 
// // // // // // // // // // //         ref={fileInputRef}
// // // // // // // // // // //         className="hidden"
// // // // // // // // // // //         accept="image/*"
// // // // // // // // // // //         onChange={onPhotoSelected}
// // // // // // // // // // //       />
      
// // // // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // // // //         <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 border-l-4 border-yellow-500 animate-fade-in">
// // // // // // // // // // //           <span className="font-medium text-lg">Trainer deleted. Undo? ({undoTimeLeft}s)</span>
// // // // // // // // // // //           <button 
// // // // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // // // //             className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Undo2 size={18} />
// // // // // // // // // // //             <span className="font-medium text-lg">Undo</span>
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
      
// // // // // // // // // // //       <div className="ml-0">
// // // // // // // // // // //         <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md pt-6 px-6">
// // // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl border border-gray-700/30">
// // // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
// // // // // // // // // // //               <div className="flex items-center mb-4 sm:mb-0">
// // // // // // // // // // //                 <Link href="/dashboard">
// // // // // // // // // // //                   <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // //                       <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // //                     </svg>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </Link>
// // // // // // // // // // //                 <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   className={`${viewMode === "card" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gray-700/60"} px-6 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 font-medium text-lg`}
// // // // // // // // // // //                   onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // // //               <div className="relative w-full sm:w-auto flex-1">
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   placeholder="Search trainers..."
// // // // // // // // // // //                   className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-lg"
// // // // // // // // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // //                   value={searchQuery}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <Search className="absolute left-4 top-3 text-red-400" size={24} />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <Link href="/add-trainer" className="w-full sm:w-auto">
// // // // // // // // // // //               <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-1 py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 font-medium text-lg">
// // // // // // // // // // //                   <Plus size={22} />
// // // // // // // // // // //                   <span>Add Trainer</span>
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </Link>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="p-6">
// // // // // // // // // // //         {filteredTrainers.length > 0 && viewMode === "table" ? (
// // // // // // // // // // //   <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden w-full border border-gray-700/30 shadow-2xl mt-8">
// // // // // // // // // // //     <div className="overflow-x-auto">
// // // // // // // // // // //       <table className="w-full text-left border-collapse">
// // // // // // // // // // //         <thead>
// // // // // // // // // // //         <tr className="bg-gradient-to-r from-gray-700/60 via-gray-800/60 to-purple-900/40">
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">ID</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Photo</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Name</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Email</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Specialization</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Experience</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Phone</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Availability</th>
// // // // // // // // // // //             <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Actions</th>
// // // // // // // // // // //           </tr>
// // // // // // // // // // //         </thead>
// // // // // // // // // // //         <tbody>
// // // // // // // // // // //           {filteredTrainers.map((trainer, index) => (
// // // // // // // // // // //             <tr 
// // // // // // // // // // //               key={trainer.id} 
// // // // // // // // // // //               className={`border-b border-gray-600/50 hover:bg-gray-700/20 transition-colors ${
// // // // // // // // // // //                 index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               <td className="p-5 text-lg">{trainer.id}</td>
// // // // // // // // // // //               <td className="p-5 text-center">
// // // // // // // // // // //                 {editingId === trainer.id ? (
// // // // // // // // // // //                   <div className="flex flex-col items-center gap-2">
// // // // // // // // // // //                     {trainer.photo ? (
// // // // // // // // // // //                       <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
// // // // // // // // // // //                         <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           onClick={() => handleDeletePhoto(trainer.id)}
// // // // // // // // // // //                           className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <Trash size={12} className="text-white" />
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     ) : (
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         onClick={() => handlePhotoUpload(trainer.id)}
// // // // // // // // // // //                         className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/50 hover:ring-red-500"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <Upload size={22} className="text-red-400" />
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                     )}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 ) : (
// // // // // // // // // // //                   trainer.photo ? (
// // // // // // // // // // //                     <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // // //                       <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         onClick={() => handleDeletePhoto(trainer.id)}
// // // // // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   ) : (
// // // // // // // // // // //                     <button
// // // // // // // // // // //                       onClick={() => handlePhotoUpload(trainer.id)}
// // // // // // // // // // //                       className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
// // // // // // // // // // //                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // // //                         <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // // //                       </svg>
// // // // // // // // // // //                     </button>
// // // // // // // // // // //                   )
// // // // // // // // // // //                 )}
// // // // // // // // // // //               </td>
        
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.name}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('name', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="font-medium text-lg">{trainer.name}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="email"
// // // // // // // // // // //                               value={editedData.email}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('email', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.email}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.specialization}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-lg text-base font-medium shadow shadow-amber-500/20">{trainer.specialization}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.experience}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('experience', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.experience}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.phone}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('phone', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.phone}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.availability}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {deleteConfirmId === trainer.id ? (
// // // // // // // // // // //                             <div className="flex flex-col gap-3">
// // // // // // // // // // //                               <div className="flex items-center gap-2 text-yellow-500">
// // // // // // // // // // //                                 <AlertTriangle size={18} />
// // // // // // // // // // //                                 <span className="text-base font-medium">Are you sure?</span>
// // // // // // // // // // //                               </div>
// // // // // // // // // // //                               <div className="flex gap-2">
// // // // // // // // // // //                                 <button 
// // // // // // // // // // //                                   onClick={() => confirmDelete(trainer.id)}
// // // // // // // // // // //                                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg text-base"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   Yes
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                                 <button 
// // // // // // // // // // //                                   onClick={cancelDelete}
// // // // // // // // // // //                                   className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-base"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   No
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                               </div>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           ) : editingId === trainer.id ? (
// // // // // // // // // // //                             <div className="flex space-x-2">
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={handleSave}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <Save size={20} />
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <X size={20} />
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <div className="flex space-x-3">
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // // //                                 </svg>
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.id)}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                                   <path d="M3 6h18"></path>
// // // // // // // // // // //                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // // //                                 </svg>
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                       </tr>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </tbody>
// // // // // // // // // // //                 </table>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // // // // // // //               {filteredTrainers.map((trainer) => (
              
// // // // // // // // // // //                 <div key={trainer.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
// // // // // // // // // // //                   {deleteConfirmId === trainer.id && (
// // // // // // // // // // //                     <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
// // // // // // // // // // //                       <div className="bg-gray-800 p-4 rounded-lg text-center">
// // // // // // // // // // //                         <AlertTriangle size={40} className="text-yellow-500 mx-auto mb-2" />
// // // // // // // // // // //                         <p className="mb-4 text-base">Are you sure you want to delete this trainer?</p>
// // // // // // // // // // //                         <div className="flex justify-center gap-3">
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => confirmDelete(trainer.id)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             Yes, Delete
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={cancelDelete}
// // // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             Cancel
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}
                  
// // // // // // // // // // //                   <div className="bg-gray-700 p-5 flex justify-between items-center">
// // // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // // //                       {trainer.photo ? (
// // // // // // // // // // //                         <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // // // // // //                           <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                           <button
// // // // // // // // // // //                             onClick={() => handleDeletePhoto(trainer.id)}
// // // // // // // // // // //                             className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Trash size={12} className="text-white" />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           onClick={() => handlePhotoUpload(trainer.id)}
// // // // // // // // // // //                           className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // // //                             <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // // //                           </svg>
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                       <h3 className="font-bold text-xl">
// // // // // // // // // // //                         {editingId === trainer.id ? (
// // // // // // // // // // //                           <input
// // // // // // // // // // //                             type="text"
// // // // // // // // // // //                             value={editedData.name}
// // // // // // // // // // //                             onChange={(e) => handleEditChange('name', e.target.value)}
// // // // // // // // // // //                             className="bg-gray-600 text-white p-1 rounded w-40 text-lg"
// // // // // // // // // // //                           />
// // // // // // // // // // //                         ) : (
// // // // // // // // // // //                           trainer.name
// // // // // // // // // // //                         )}
// // // // // // // // // // //                       </h3>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
// // // // // // // // // // //                       {editingId === trainer.id ? (
// // // // // // // // // // //                         <input
// // // // // // // // // // //                           type="text"
// // // // // // // // // // //                           value={editedData.specialization}
// // // // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // // //                           className="bg-red-600 text-white p-1 rounded w-28 text-sm"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         trainer.specialization
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   </div>
                  
// // // // // // // // // // //                   <div className="p-5">
// // // // // // // // // // //                     <div className="grid grid-cols-2 gap-4 mb-5">
// // // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Email</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="email"
// // // // // // // // // // //                               value={editedData.email}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('email', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.email
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Experience</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.experience}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('experience', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.experience
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Phone</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.phone}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('phone', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.phone
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Availability</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.id ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.availability
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
                    
// // // // // // // // // // //                     <div className="flex space-x-3 justify-end">
// // // // // // // // // // //                       {editingId === trainer.id ? (
// // // // // // // // // // //                         <>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={handleSave}
// // // // // // // // // // //                             className="bg-green-600 hover:bg-green-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Save size={20} />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={handleCancelEdit}
// // // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <X size={20} />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </>
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         <>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => handleEdit(trainer)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                               <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // // //                               <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // // //                             </svg>
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => handleDeleteConfirm(trainer.id)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                               <path d="M3 6h18"></path>
// // // // // // // // // // //                               <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // // //                             </svg>
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default TrainerManagement;
// // // // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save } from 'lucide-react';

// // // // // // // // // // // const AddTrainer = () => {
// // // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // // //     name: '',
// // // // // // // // // // //     email: '',
// // // // // // // // // // //     specialization: '',
// // // // // // // // // // //     experience: '',
// // // // // // // // // // //     phone: '',
// // // // // // // // // // //     availability: '',
// // // // // // // // // // //   });

// // // // // // // // // // //   const handleChange = (e) => {
// // // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // // //     setFormData({
// // // // // // // // // // //       ...formData,
// // // // // // // // // // //       [name]: value,
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     console.log('Form Data Submitted:', formData);
// // // // // // // // // // //     // Add logic to send data to the backend
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-4xl font-bold mb-6 text-white">Add New Trainer</h1>
// // // // // // // // // // //       <form onSubmit={handleSubmit} className="max-w-md bg-gray-800/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/30 backdrop-filter">
// // // // // // // // // // //         <h1 className="text-3xl font-semibold mb-6 text-center text-white">Add Trainer</h1>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-lg">Name</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             id="name"
// // // // // // // // // // //             name="name"
// // // // // // // // // // //             value={formData.name}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-lg">Email</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="email"
// // // // // // // // // // //             id="email"
// // // // // // // // // // //             name="email"
// // // // // // // // // // //             value={formData.email}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="specialization" className="block text-gray-300 mb-2 font-medium text-lg">Specialization</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             id="specialization"
// // // // // // // // // // //             name="specialization"
// // // // // // // // // // //             value={formData.specialization}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="experience" className="block text-gray-300 mb-2 font-medium text-lg">Experience (years)</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="number"
// // // // // // // // // // //             id="experience"
// // // // // // // // // // //             name="experience"
// // // // // // // // // // //             value={formData.experience}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-5">
// // // // // // // // // // //           <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium text-lg">Phone Number</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="tel"
// // // // // // // // // // //             id="phone"
// // // // // // // // // // //             name="phone"
// // // // // // // // // // //             value={formData.phone}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             required
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <div className="mb-6">
// // // // // // // // // // //           <label htmlFor="availability" className="block text-gray-300 mb-2 font-medium text-lg">Availability</label>
// // // // // // // // // // //           <textarea
// // // // // // // // // // //             id="availability"
// // // // // // // // // // //             name="availability"
// // // // // // // // // // //             value={formData.availability}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // // //             rows="3"
// // // // // // // // // // //             required
// // // // // // // // // // //           ></textarea>
// // // // // // // // // // //         </div>
        
// // // // // // // // // // //         <button
// // // // // // // // // // //           type="submit"
// // // // // // // // // // //           className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-rose-600 transition-all duration-300 font-semibold text-xl shadow-xl shadow-purple-500/20 transform hover:scale-105"
// // // // // // // // // // //         >
// // // // // // // // // // //           Submit
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </form>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const TrainerManagement = () => {
// // // // // // // // // // //   const [trainers, setTrainers] = useState([
// // // // // // // // // // //     {
// // // // // // // // // // //       trainerID: 1,
// // // // // // // // // // //       name: "John Doe",
// // // // // // // // // // //       email: "john.doe@gmail.com",
// // // // // // // // // // //       specialization: "Weight Training",
// // // // // // // // // // //       experience: "5 years",
// // // // // // // // // // //       phone: "9995258646",
// // // // // // // // // // //       availability: "Mon, Wed, Fri",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       trainerID: 2,
// // // // // // // // // // //       name: "Jane Smith",
// // // // // // // // // // //       email: "jane.smith@gmail.com",
// // // // // // // // // // //       specialization: "Yoga",
// // // // // // // // // // //       experience: "3 years",
// // // // // // // // // // //       phone: "8891449305",
// // // // // // // // // // //       availability: "Tue, Thu, Sat",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       trainerID: 3,
// // // // // // // // // // //       name: "Michael Johnson",
// // // // // // // // // // //       email: "michael@gmail.com",
// // // // // // // // // // //       specialization: "Cardio",
// // // // // // // // // // //       experience: "7 years",
// // // // // // // // // // //       phone: "7894561230",
// // // // // // // // // // //       availability: "Mon, Tue, Thu",
// // // // // // // // // // //       photo: null
// // // // // // // // // // //     }
// // // // // // // // // // //   ]);

// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // // // //   const undoTimerRef = useRef(null);
// // // // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSave = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch('/api/trainers', {
// // // // // // // // // // //         method: 'PUT',
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // // // //       });
// // // // // // // // // // //       if (response.ok) {
// // // // // // // // // // //         setTrainers(trainers.map(trainer => 
// // // // // // // // // // //           trainer.trainerID === editingId ? editedData : trainer
// // // // // // // // // // //         ));
// // // // // // // // // // //         setEditingId(null);
// // // // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // // // //       } else {
// // // // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // // // //     setEditingId(null);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // // // //   };

// // // // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(`/api/trainers/${id}`, {
// // // // // // // // // // //         method: 'DELETE',
// // // // // // // // // // //       });
// // // // // // // // // // //       if (response.ok) {
// // // // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // // // //             if (prev <= 1) {
// // // // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // // // //               return 0;
// // // // // // // // // // //             }
// // // // // // // // // // //             return prev - 1;
// // // // // // // // // // //           });
// // // // // // // // // // //         }, 1000);
// // // // // // // // // // //       } else {
// // // // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const response = await fetch('/api/trainers', {
// // // // // // // // // // //           method: 'POST',
// // // // // // // // // // //           headers: {
// // // // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // // // //           },
// // // // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // // // //         });
// // // // // // // // // // //         if (response.ok) {
// // // // // // // // // // //           setTrainers(prev => [...prev, recentlyDeletedTrainer]);
// // // // // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // // // //           setUndoTimeLeft(0);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (error) {
// // // // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const cancelDelete = () => {
// // // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // // // //     fileInputRef.current.click();
// // // // // // // // // // //     fileInputRef.current.dataset.trainerId = id;
// // // // // // // // // // //   };

// // // // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // // //     if (!file) return;
    
// // // // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // // // //     const photoURL = URL.createObjectURL(file);
    
// // // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // // // //     ));
    
// // // // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // // // //     e.target.value = null;
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // // // //     ));
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // // // //         }
// // // // // // // // // // //       });
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [trainers]);

// // // // // // // // // // //   const filteredTrainers = trainers.filter(trainer => 
// // // // // // // // // // //     trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //     trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // // //     trainer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // // //   );

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="w-full bg-black text-white min-h-screen">
// // // // // // // // // // //       <input 
// // // // // // // // // // //         type="file" 
// // // // // // // // // // //         ref={fileInputRef}
// // // // // // // // // // //         className="hidden"
// // // // // // // // // // //         accept="image/*"
// // // // // // // // // // //         onChange={onPhotoSelected}
// // // // // // // // // // //       />
      
// // // // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // // // //         <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 border-l-4 border-yellow-500 animate-fade-in">
// // // // // // // // // // //           <span className="font-medium text-lg">Trainer deleted. Undo? ({undoTimeLeft}s)</span>
// // // // // // // // // // //           <button 
// // // // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // // // //             className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Undo2 size={18} />
// // // // // // // // // // //             <span className="font-medium text-lg">Undo</span>
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
      
// // // // // // // // // // //       <div className="ml-0">
// // // // // // // // // // //         <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md pt-6 px-6">
// // // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl border border-gray-700/30">
// // // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
// // // // // // // // // // //               <div className="flex items-center mb-4 sm:mb-0">
// // // // // // // // // // //                 <Link href="/dashboard">
// // // // // // // // // // //                   <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // // //                       <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // // //                     </svg>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </Link>
// // // // // // // // // // //                 <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 <button 
// // // // // // // // // // //                   className={`${viewMode === "card" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gray-700/60"} px-6 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 font-medium text-lg`}
// // // // // // // // // // //                   onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
            
// // // // // // // // // // //             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // // //               <div className="relative w-full sm:w-auto flex-1">
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   placeholder="Search trainers..."
// // // // // // // // // // //                   className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-lg"
// // // // // // // // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // //                   value={searchQuery}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 <Search className="absolute left-4 top-3 text-red-400" size={24} />
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <Link href="/add-trainer" className="w-full sm:w-auto">
// // // // // // // // // // //                 <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-1 py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 font-medium text-lg">
// // // // // // // // // // //                   <Plus size={22} />
// // // // // // // // // // //                   <span>Add Trainer</span>
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </Link>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="p-6">
// // // // // // // // // // //           {filteredTrainers.length > 0 && viewMode === "table" ? (
// // // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden w-full border border-gray-700/30 shadow-2xl mt-8">
// // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // //                 <table className="w-full text-left border-collapse">
// // // // // // // // // // //                   <thead>
// // // // // // // // // // //                     <tr className="bg-gradient-to-r from-gray-700/60 via-gray-800/60 to-purple-900/40">
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">trainerID</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Photo</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Name</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Email</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Specialization</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Experience</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Phone</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Availability</th>
// // // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Actions</th>
// // // // // // // // // // //                     </tr>
// // // // // // // // // // //                   </thead>
// // // // // // // // // // //                   <tbody>
// // // // // // // // // // //                     {filteredTrainers.map((trainer, index) => (
// // // // // // // // // // //                       <tr 
// // // // // // // // // // //                         key={trainer.trainerID} 
// // // // // // // // // // //                         className={`border-b border-gray-600/50 hover:bg-gray-700/20 transition-colors ${
// // // // // // // // // // //                           index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
// // // // // // // // // // //                         }`}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <td className="p-5 text-lg">{trainer.trainerID}</td>
// // // // // // // // // // //                         <td className="p-5 text-center">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <div className="flex flex-col items-center gap-2">
// // // // // // // // // // //                               {trainer.photo ? (
// // // // // // // // // // //                                 <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
// // // // // // // // // // //                                   <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                                   <button
// // // // // // // // // // //                                     onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // // //                                     className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // // //                                   >
// // // // // // // // // // //                                     <Trash size={12} className="text-white" />
// // // // // // // // // // //                                   </button>
// // // // // // // // // // //                                 </div>
// // // // // // // // // // //                               ) : (
// // // // // // // // // // //                                 <button
// // // // // // // // // // //                                   onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // // //                                   className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/50 hover:ring-red-500"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   <Upload size={22} className="text-red-400" />
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                               )}
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.photo ? (
// // // // // // // // // // //                               <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // // //                                 <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                                 <button
// // // // // // // // // // //                                   onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // // //                                   className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   <Trash size={12} className="text-white" />
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                               </div>
// // // // // // // // // // //                             ) : (
// // // // // // // // // // //                               <button
// // // // // // // // // // //                                 onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // // //                                 className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
// // // // // // // // // // //                                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // // //                                   <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // // //                                 </svg>
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                             )
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.name}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('name', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="font-medium text-lg">{trainer.name}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="email"
// // // // // // // // // // //                               value={editedData.email}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('email', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.email}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.specialization}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-lg text-base font-medium shadow shadow-amber-500/20">{trainer.specialization}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.experience}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('experience', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.experience}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.phone}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('phone', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.phone}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <span className="text-lg">{trainer.availability}</span>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                         <td className="p-5">
// // // // // // // // // // //                           {deleteConfirmId === trainer.trainerID ? (
// // // // // // // // // // //                             <div className="flex flex-col gap-3">
// // // // // // // // // // //                               <div className="flex items-center gap-2 text-yellow-500">
// // // // // // // // // // //                                 <AlertTriangle size={18} />
// // // // // // // // // // //                                 <span className="text-base font-medium">Are you sure?</span>
// // // // // // // // // // //                               </div>
// // // // // // // // // // //                               <div className="flex gap-2">
// // // // // // // // // // //                                 <button 
// // // // // // // // // // //                                   onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // // //                                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg text-base"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   Yes
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                                 <button 
// // // // // // // // // // //                                   onClick={cancelDelete}
// // // // // // // // // // //                                   className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-base"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   No
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                               </div>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           ) : editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <div className="flex space-x-2">
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={handleSave}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <Save size={20} />
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <X size={20} />
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             <div className="flex space-x-3">
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // // //                                 </svg>
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                               <button 
// // // // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // // //                                 className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // // //                               >
// // // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                                   <path d="M3 6h18"></path>
// // // // // // // // // // //                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // // //                                 </svg>
// // // // // // // // // // //                               </button>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </td>
// // // // // // // // // // //                       </tr>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </tbody>
// // // // // // // // // // //                 </table>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // // // // // // //               {filteredTrainers.map((trainer) => (
// // // // // // // // // // //                 <div key={trainer.trainerID} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
// // // // // // // // // // //                   {deleteConfirmId === trainer.trainerID && (
// // // // // // // // // // //                     <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
// // // // // // // // // // //                       <div className="bg-gray-800 p-4 rounded-lg text-center">
// // // // // // // // // // //                         <AlertTriangle size={40} className="text-yellow-500 mx-auto mb-2" />
// // // // // // // // // // //                         <p className="mb-4 text-base">Are you sure you want to delete this trainer?</p>
// // // // // // // // // // //                         <div className="flex justify-center gap-3">
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             Yes, Delete
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={cancelDelete}
// // // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             Cancel
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}
                  
// // // // // // // // // // //                   <div className="bg-gray-700 p-5 flex justify-between items-center">
// // // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // // //                       {trainer.photo ? (
// // // // // // // // // // //                         <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // // // // // //                           <img src={trainer.photo} alt={trainer.name} className="w-full h-full object-cover" />
// // // // // // // // // // //                           <button
// // // // // // // // // // //                             onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // // //                             className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Trash size={12} className="text-white" />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // // //                           className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // // //                             <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // // //                           </svg>
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                       <h3 className="font-bold text-xl">
// // // // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // // // //                           <input
// // // // // // // // // // //                             type="text"
// // // // // // // // // // //                             value={editedData.name}
// // // // // // // // // // //                             onChange={(e) => handleEditChange('name', e.target.value)}
// // // // // // // // // // //                             className="bg-gray-600 text-white p-1 rounded w-40 text-lg"
// // // // // // // // // // //                           />
// // // // // // // // // // //                         ) : (
// // // // // // // // // // //                           trainer.name
// // // // // // // // // // //                         )}
// // // // // // // // // // //                       </h3>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
// // // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // // //                         <input
// // // // // // // // // // //                           type="text"
// // // // // // // // // // //                           value={editedData.specialization}
// // // // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // // //                           className="bg-red-600 text-white p-1 rounded w-28 text-sm"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         trainer.specialization
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   </div>
                  
// // // // // // // // // // //                   <div className="p-5">
// // // // // // // // // // //                     <div className="grid grid-cols-2 gap-4 mb-5">
// // // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Email</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="email"
// // // // // // // // // // //                               value={editedData.email}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('email', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.email
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Experience</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.experience}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('experience', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.experience
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div>
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Phone</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.phone}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('phone', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.phone
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Availability</p>
// // // // // // // // // // //                         <p className="text-base">
// // // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // // //                             <input
// // // // // // // // // // //                               type="text"
// // // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // // //                             />
// // // // // // // // // // //                           ) : (
// // // // // // // // // // //                             trainer.availability
// // // // // // // // // // //                           )}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
                    
// // // // // // // // // // //                     <div className="flex space-x-3 justify-end">
// // // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // // //                         <>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={handleSave}
// // // // // // // // // // //                             className="bg-green-600 hover:bg-green-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Save size={20} />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={handleCancelEdit}
// // // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <X size={20} />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </>
// // // // // // // // // // //                       ) : (
// // // // // // // // // // //                         <>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => handleEdit(trainer)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // // //                               <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // // //                               <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // // //                             </svg>
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                           <button 
// // // // // // // // // // //                             onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Trash size={20} />
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default TrainerManagement;
// // // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save } from 'lucide-react';

// // // // // // // // // // const AddTrainer = () => {
// // // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // // //     trainer_name: '',
// // // // // // // // // //     specialization: '',
// // // // // // // // // //     phone_number: '',
// // // // // // // // // //     availability: true,
// // // // // // // // // //   });

// // // // // // // // // //   const handleChange = (e) => {
// // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // //     setFormData({
// // // // // // // // // //       ...formData,
// // // // // // // // // //       [name]: value,
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // // //         method: 'POST',
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // //         },
// // // // // // // // // //         body: JSON.stringify(formData),
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         alert('Trainer added successfully!');
// // // // // // // // // //         setFormData({
// // // // // // // // // //           trainer_name: '',
// // // // // // // // // //           specialization: '',
// // // // // // // // // //           phone_number: '',
// // // // // // // // // //           availability: true,
// // // // // // // // // //         });
// // // // // // // // // //       } else {
// // // // // // // // // //         const errorData = await response.json();
// // // // // // // // // //         alert(errorData.error || 'Failed to add trainer');
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error adding trainer:', error);
// // // // // // // // // //       alert('An error occurred while adding trainer');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-4xl font-bold mb-6 text-white">Add New Trainer</h1>
// // // // // // // // // //       <form onSubmit={handleSubmit} className="max-w-md bg-gray-800/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/30 backdrop-filter">
// // // // // // // // // //         <h1 className="text-3xl font-semibold mb-6 text-center text-white">Add Trainer</h1>
        
// // // // // // // // // //         <div className="mb-5">
// // // // // // // // // //           <label htmlFor="trainer_name" className="block text-gray-300 mb-2 font-medium text-lg">Name</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             id="trainer_name"
// // // // // // // // // //             name="trainer_name"
// // // // // // // // // //             value={formData.trainer_name}
// // // // // // // // // //             onChange={handleChange}
// // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // //             required
// // // // // // // // // //           />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <div className="mb-5">
// // // // // // // // // //           <label htmlFor="specialization" className="block text-gray-300 mb-2 font-medium text-lg">Specialization</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             id="specialization"
// // // // // // // // // //             name="specialization"
// // // // // // // // // //             value={formData.specialization}
// // // // // // // // // //             onChange={handleChange}
// // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // //             required
// // // // // // // // // //           />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <div className="mb-5">
// // // // // // // // // //           <label htmlFor="phone_number" className="block text-gray-300 mb-2 font-medium text-lg">Phone Number</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="tel"
// // // // // // // // // //             id="phone_number"
// // // // // // // // // //             name="phone_number"
// // // // // // // // // //             value={formData.phone_number}
// // // // // // // // // //             onChange={handleChange}
// // // // // // // // // //             className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white text-lg"
// // // // // // // // // //             required
// // // // // // // // // //           />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         <button
// // // // // // // // // //           type="submit"
// // // // // // // // // //           className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-rose-600 transition-all duration-300 font-semibold text-xl shadow-xl shadow-purple-500/20 transform hover:scale-105"
// // // // // // // // // //         >
// // // // // // // // // //           Submit
// // // // // // // // // //         </button>
// // // // // // // // // //       </form>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const TrainerManagement = () => {
// // // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // // //   const undoTimerRef = useRef(null);
// // // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchTrainers();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         setTrainers(data);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // // //   };

// // // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSave = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // // //         method: 'PUT',
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // //         },
// // // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         fetchTrainers();
// // // // // // // // // //         setEditingId(null);
// // // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // // //     setEditingId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // // //   };

// // // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // // //         method: 'DELETE',
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // // //             if (prev <= 1) {
// // // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // // //               return 0;
// // // // // // // // // //             }
// // // // // // // // // //             return prev - 1;
// // // // // // // // // //           });
// // // // // // // // // //         }, 1000);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // // //           method: 'POST',
// // // // // // // // // //           headers: {
// // // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // // //           },
// // // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // // //         });
// // // // // // // // // //         if (response.ok) {
// // // // // // // // // //           fetchTrainers();
// // // // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // // //           setUndoTimeLeft(0);
// // // // // // // // // //         } else {
// // // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // // //         }
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const cancelDelete = () => {
// // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // // //     fileInputRef.current.click();
// // // // // // // // // //     fileInputRef.current.dataset.trainerId = id;
// // // // // // // // // //   };

// // // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // //     if (!file) return;
    
// // // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // // //     const photoURL = URL.createObjectURL(file);
    
// // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // // //     ));
    
// // // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // // //     e.target.value = null;
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // // //     ));
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     return () => {
// // // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // // //         }
// // // // // // // // // //       });
// // // // // // // // // //     };
// // // // // // // // // //   }, [trainers]);

// // // // // // // // // //   // const filteredTrainers = trainers.filter(trainer => 
// // // // // // // // // //   //   trainer.trainer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //   //   trainer.specialization.toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // //   // );
// // // // // // // // // //   const filteredTrainers = trainers.filter(trainer => 
// // // // // // // // // //     (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //     (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="w-full bg-black text-white min-h-screen">
// // // // // // // // // //       <input 
// // // // // // // // // //         type="file" 
// // // // // // // // // //         ref={fileInputRef}
// // // // // // // // // //         className="hidden"
// // // // // // // // // //         accept="image/*"
// // // // // // // // // //         onChange={onPhotoSelected}
// // // // // // // // // //       />
      
// // // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // // //         <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 border-l-4 border-yellow-500 animate-fade-in">
// // // // // // // // // //           <span className="font-medium text-lg">Trainer deleted. Undo? ({undoTimeLeft}s)</span>
// // // // // // // // // //           <button 
// // // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // // //             className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
// // // // // // // // // //           >
// // // // // // // // // //             <Undo2 size={18} />
// // // // // // // // // //             <span className="font-medium text-lg">Undo</span>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
      
// // // // // // // // // //       <div className="ml-0">
// // // // // // // // // //         <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md pt-6 px-6">
// // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl border border-gray-700/30">
// // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
// // // // // // // // // //               <div className="flex items-center mb-4 sm:mb-0">
// // // // // // // // // //                 <Link href="/dashboard">
// // // // // // // // // //                   <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // //                       <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // //                     </svg>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </Link>
// // // // // // // // // //                 <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <button 
// // // // // // // // // //                   className={`${viewMode === "card" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gray-700/60"} px-6 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 font-medium text-lg`}
// // // // // // // // // //                   onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // // //                 >
// // // // // // // // // //                   {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // //               <div className="relative w-full sm:w-auto flex-1">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   placeholder="Search trainers..."
// // // // // // // // // //                   className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-lg"
// // // // // // // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //                   value={searchQuery}
// // // // // // // // // //                 />
// // // // // // // // // //                 <Search className="absolute left-4 top-3 text-red-400" size={24} />
// // // // // // // // // //               </div>
// // // // // // // // // //               <Link href="/add-trainer" className="w-full sm:w-auto">
// // // // // // // // // //                 <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-1 py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 font-medium text-lg">
// // // // // // // // // //                   <Plus size={22} />
// // // // // // // // // //                   <span>Add Trainer</span>
// // // // // // // // // //                 </button>
// // // // // // // // // //               </Link>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="p-6">
// // // // // // // // // //           {filteredTrainers.length > 0 && viewMode === "table" ? (
// // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden w-full border border-gray-700/30 shadow-2xl mt-8">
// // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // //                 <table className="w-full text-left border-collapse">
// // // // // // // // // //                   <thead>
// // // // // // // // // //                     <tr className="bg-gradient-to-r from-gray-700/60 via-gray-800/60 to-purple-900/40">
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">trainerID</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Photo</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Name</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Specialization</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Phone</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Availability</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Actions</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </thead>
// // // // // // // // // //                   <tbody>
// // // // // // // // // //                     {filteredTrainers.map((trainer, index) => (
// // // // // // // // // //                       <tr 
// // // // // // // // // //                         key={trainer.trainerID} 
// // // // // // // // // //                         className={`border-b border-gray-600/50 hover:bg-gray-700/20 transition-colors ${
// // // // // // // // // //                           index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
// // // // // // // // // //                         }`}
// // // // // // // // // //                       >
// // // // // // // // // //                         <td className="p-5 text-lg">{trainer.trainerID}</td>
// // // // // // // // // //                         <td className="p-5 text-center">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col items-center gap-2">
// // // // // // // // // //                               {trainer.photo ? (
// // // // // // // // // //                                 <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
// // // // // // // // // //                                   <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                   <button
// // // // // // // // // //                                     onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                     className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                                   >
// // // // // // // // // //                                     <Trash size={12} className="text-white" />
// // // // // // // // // //                                   </button>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                               ) : (
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/50 hover:ring-red-500"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Upload size={22} className="text-red-400" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               )}
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.photo ? (
// // // // // // // // // //                               <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // //                                 <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                   className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Trash size={12} className="text-white" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             ) : (
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
// // // // // // // // // //                                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                                   <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             )
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.trainer_name}
// // // // // // // // // //                               onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="font-medium text-lg">{trainer.trainer_name}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.specialization}
// // // // // // // // // //                               onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-lg text-base font-medium shadow shadow-amber-500/20">{trainer.specialization}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.phone_number}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.availability ? 'Available' : 'Not Available'}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {deleteConfirmId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col gap-3">
// // // // // // // // // //                               <div className="flex items-center gap-2 text-yellow-500">
// // // // // // // // // //                                 <AlertTriangle size={18} />
// // // // // // // // // //                                 <span className="text-base font-medium">Are you sure?</span>
// // // // // // // // // //                               </div>
// // // // // // // // // //                               <div className="flex gap-2">
// // // // // // // // // //                                 <button 
// // // // // // // // // //                                   onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   Yes
// // // // // // // // // //                                 </button>
// // // // // // // // // //                                 <button 
// // // // // // // // // //                                   onClick={cancelDelete}
// // // // // // // // // //                                   className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   No
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex space-x-2">
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={handleSave}
// // // // // // // // // //                                 className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <Save size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <X size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <div className="flex space-x-3">
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M3 6h18"></path>
// // // // // // // // // //                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </tbody>
// // // // // // // // // //                 </table>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // // // // // //               {filteredTrainers.map((trainer) => (
// // // // // // // // // //                 <div key={trainer.trainerID} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
// // // // // // // // // //                   {deleteConfirmId === trainer.trainerID && (
// // // // // // // // // //                     <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
// // // // // // // // // //                       <div className="bg-gray-800 p-4 rounded-lg text-center">
// // // // // // // // // //                         <AlertTriangle size={40} className="text-yellow-500 mx-auto mb-2" />
// // // // // // // // // //                         <p className="mb-4 text-base">Are you sure you want to delete this trainer?</p>
// // // // // // // // // //                         <div className="flex justify-center gap-3">
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Yes, Delete
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={cancelDelete}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Cancel
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}
                  
// // // // // // // // // //                   <div className="bg-gray-700 p-5 flex justify-between items-center">
// // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // //                       {trainer.photo ? (
// // // // // // // // // //                         <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // // // // //                           <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                             className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={12} className="text-white" />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <button
// // // // // // // // // //                           onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                           className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // // //                         >
// // // // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                             <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                           </svg>
// // // // // // // // // //                         </button>
// // // // // // // // // //                       )}
// // // // // // // // // //                       <h3 className="font-bold text-xl">
// // // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // // //                           <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                             className="bg-gray-600 text-white p-1 rounded w-40 text-lg"
// // // // // // // // // //                           />
// // // // // // // // // //                         ) : (
// // // // // // // // // //                           trainer.trainer_name
// // // // // // // // // //                         )}
// // // // // // // // // //                       </h3>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <input
// // // // // // // // // //                           type="text"
// // // // // // // // // //                           value={editedData.specialization}
// // // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                           className="bg-red-600 text-white p-1 rounded w-28 text-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         trainer.specialization
// // // // // // // // // //                       )}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
                  
// // // // // // // // // //                   <div className="p-5">
// // // // // // // // // //                     <div className="grid grid-cols-2 gap-4 mb-5">
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Phone</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.phone_number
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Availability</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
                    
// // // // // // // // // //                     <div className="flex space-x-3 justify-end">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={handleSave}
// // // // // // // // // //                             className="bg-green-600 hover:bg-green-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Save size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={handleCancelEdit}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <X size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => handleEdit(trainer)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                               <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                               <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                             </svg>
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default TrainerManagement;
// // // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save } from 'lucide-react';

// // // // // // // // // // const TrainerManagement = () => {
// // // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // // //   const undoTimerRef = useRef(null);
// // // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchTrainers();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         setTrainers(data);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // // //   };

// // // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSave = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // // //         method: 'PUT',
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // //         },
// // // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         fetchTrainers();
// // // // // // // // // //         setEditingId(null);
// // // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // // //     setEditingId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // // //   };

// // // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // // //     console.log("Deleting trainer with ID:", id); // Debugging: Check the ID
// // // // // // // // // //     if (!id) {
// // // // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // // //         method: 'DELETE',
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // // //             if (prev <= 1) {
// // // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // // //               return 0;
// // // // // // // // // //             }
// // // // // // // // // //             return prev - 1;
// // // // // // // // // //           });
// // // // // // // // // //         }, 1000);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // // //           method: 'POST',
// // // // // // // // // //           headers: {
// // // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // // //           },
// // // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // // //         });
// // // // // // // // // //         if (response.ok) {
// // // // // // // // // //           fetchTrainers();
// // // // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // // //           setUndoTimeLeft(0);
// // // // // // // // // //         } else {
// // // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // // //         }
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const cancelDelete = () => {
// // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // // //     fileInputRef.current.click();
// // // // // // // // // //     fileInputRef.current.dataset.trainerId = id;
// // // // // // // // // //   };

// // // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // //     if (!file) return;
    
// // // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // // //     const photoURL = URL.createObjectURL(file);
    
// // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // // //     ));
    
// // // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // // //     e.target.value = null;
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // // //     setTrainers(trainers.map(trainer => 
// // // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // // //     ));
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     return () => {
// // // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // // //         }
// // // // // // // // // //       });
// // // // // // // // // //     };
// // // // // // // // // //   }, [trainers]);

// // // // // // // // // //   const filteredTrainers = trainers.filter(trainer => 
// // // // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // // // //     ((trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //     (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase()))
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="w-full bg-black text-white min-h-screen">
// // // // // // // // // //       <input 
// // // // // // // // // //         type="file" 
// // // // // // // // // //         ref={fileInputRef}
// // // // // // // // // //         className="hidden"
// // // // // // // // // //         accept="image/*"
// // // // // // // // // //         onChange={onPhotoSelected}
// // // // // // // // // //       />
      
// // // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // // //         <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 border-l-4 border-yellow-500 animate-fade-in">
// // // // // // // // // //           <span className="font-medium text-lg">Trainer deleted. Undo? ({undoTimeLeft}s)</span>
// // // // // // // // // //           <button 
// // // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // // //             className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
// // // // // // // // // //           >
// // // // // // // // // //             <Undo2 size={18} />
// // // // // // // // // //             <span className="font-medium text-lg">Undo</span>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
      
// // // // // // // // // //       <div className="ml-0">
// // // // // // // // // //         <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md pt-6 px-6">
// // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl border border-gray-700/30">
// // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
// // // // // // // // // //               <div className="flex items-center mb-4 sm:mb-0">
// // // // // // // // // //                 <Link href="/dashboard">
// // // // // // // // // //                   <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // //                       <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // //                     </svg>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </Link>
// // // // // // // // // //                 <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <button 
// // // // // // // // // //                   className={`${viewMode === "card" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gray-700/60"} px-6 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 font-medium text-lg`}
// // // // // // // // // //                   onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // // //                 >
// // // // // // // // // //                   {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // //               <div className="relative w-full sm:w-auto flex-1">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   placeholder="Search trainers..."
// // // // // // // // // //                   className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-lg"
// // // // // // // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //                   value={searchQuery}
// // // // // // // // // //                 />
// // // // // // // // // //                 <Search className="absolute left-4 top-3 text-red-400" size={24} />
// // // // // // // // // //               </div>
// // // // // // // // // //               <Link href="/add-trainer" className="w-full sm:w-auto">
// // // // // // // // // //                 <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-1 py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 font-medium text-lg">
// // // // // // // // // //                   <Plus size={22} />
// // // // // // // // // //                   <span>Add Trainer</span>
// // // // // // // // // //                 </button>
// // // // // // // // // //               </Link>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="p-6">
// // // // // // // // // //           {filteredTrainers.length > 0 && viewMode === "table" ? (
// // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden w-full border border-gray-700/30 shadow-2xl mt-8">
// // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // //                 <table className="w-full text-left border-collapse">
// // // // // // // // // //                   <thead>
// // // // // // // // // //                     <tr className="bg-gradient-to-r from-gray-700/60 via-gray-800/60 to-purple-900/40">
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">trainerID</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Photo</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Name</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Specialization</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Phone</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Availability</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Actions</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </thead>
// // // // // // // // // //                   <tbody>
// // // // // // // // // //                     {filteredTrainers.map((trainer, index) => (
// // // // // // // // // //                       <tr 
// // // // // // // // // //                         key={trainer.trainerID}
// // // // // // // // // //                         className={`border-b border-gray-600/50 hover:bg-gray-700/20 transition-colors ${
// // // // // // // // // //                           index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
// // // // // // // // // //                         }`}
// // // // // // // // // //                       >
// // // // // // // // // //                         <td className="p-5 text-lg">{trainer.trainerID}</td>
// // // // // // // // // //                         <td className="p-5 text-center">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col items-center gap-2">
// // // // // // // // // //                               {trainer.photo ? (
// // // // // // // // // //                                 <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
// // // // // // // // // //                                   <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                   <button
// // // // // // // // // //                                     onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                     className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                                   >
// // // // // // // // // //                                     <Trash size={12} className="text-white" />
// // // // // // // // // //                                   </button>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                               ) : (
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/50 hover:ring-red-500"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Upload size={22} className="text-red-400" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               )}
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.photo ? (
// // // // // // // // // //                               <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // //                                 <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                   className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Trash size={12} className="text-white" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             ) : (
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
// // // // // // // // // //                                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                                   <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             )
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.trainer_name}
// // // // // // // // // //                               onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="font-medium text-lg">{trainer.trainer_name}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.specialization}
// // // // // // // // // //                               onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-lg text-base font-medium shadow shadow-amber-500/20">{trainer.specialization}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.phone_number}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.availability ? 'Available' : 'Not Available'}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {deleteConfirmId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col gap-3">
// // // // // // // // // //                               <div className="flex items-center gap-2 text-yellow-500">
// // // // // // // // // //                                 <AlertTriangle size={18} />
// // // // // // // // // //                                 <span className="text-base font-medium">Are you sure?</span>
// // // // // // // // // //                               </div>
// // // // // // // // // //                               <div className="flex gap-2">
// // // // // // // // // //                                 <button 
// // // // // // // // // //                                   onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   Yes
// // // // // // // // // //                                 </button>
// // // // // // // // // //                                 <button 
// // // // // // // // // //                                   onClick={cancelDelete}
// // // // // // // // // //                                   className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   No
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex space-x-2">
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={handleSave}
// // // // // // // // // //                                 className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <Save size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <X size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <div className="flex space-x-3">
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button 
// // // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M3 6h18"></path>
// // // // // // // // // //                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </tbody>
// // // // // // // // // //                 </table>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // // // // // //               {filteredTrainers.map((trainer, index) => (
// // // // // // // // // //                 <div 
// // // // // // // // // //                   key={trainer.trainerID}
// // // // // // // // // //                   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
// // // // // // // // // //                 >
// // // // // // // // // //                   {deleteConfirmId === trainer.trainerID && (
// // // // // // // // // //                     <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
// // // // // // // // // //                       <div className="bg-gray-800 p-4 rounded-lg text-center">
// // // // // // // // // //                         <AlertTriangle size={40} className="text-yellow-500 mx-auto mb-2" />
// // // // // // // // // //                         <p className="mb-4 text-base">Are you sure you want to delete this trainer?</p>
// // // // // // // // // //                         <div className="flex justify-center gap-3">
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Yes, Delete
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={cancelDelete}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Cancel
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}
                  
// // // // // // // // // //                   <div className="bg-gray-700 p-5 flex justify-between items-center">
// // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // //                       {trainer.photo ? (
// // // // // // // // // //                         <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // // // // //                           <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                             className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={12} className="text-white" />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <button
// // // // // // // // // //                           onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                           className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // // //                         >
// // // // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                             <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                           </svg>
// // // // // // // // // //                         </button>
// // // // // // // // // //                       )}
// // // // // // // // // //                       <h3 className="font-bold text-xl">
// // // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // // //                           <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                             className="bg-gray-600 text-white p-1 rounded w-40 text-lg"
// // // // // // // // // //                           />
// // // // // // // // // //                         ) : (
// // // // // // // // // //                           trainer.trainer_name
// // // // // // // // // //                         )}
// // // // // // // // // //                       </h3>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <input
// // // // // // // // // //                           type="text"
// // // // // // // // // //                           value={editedData.specialization}
// // // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                           className="bg-red-600 text-white p-1 rounded w-28 text-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         trainer.specialization
// // // // // // // // // //                       )}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
                  
// // // // // // // // // //                   <div className="p-5">
// // // // // // // // // //                     <div className="grid grid-cols-2 gap-4 mb-5">
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Phone</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.phone_number
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Availability</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
                    
// // // // // // // // // //                     <div className="flex space-x-3 justify-end">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={handleSave}
// // // // // // // // // //                             className="bg-green-600 hover:bg-green-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Save size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={handleCancelEdit}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <X size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => handleEdit(trainer)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                               <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                               <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                             </svg>
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button 
// // // // // // // // // //                             onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default TrainerManagement;
// // // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save } from 'lucide-react';

// // // // // // // // // // const TrainerManagement = () => {
// // // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // // // //   // Define fileInputRef for file upload
// // // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchTrainers();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const data = await response.json();
// // // // // // // // // //         setTrainers(data);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // // //   };

// // // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSave = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // // //         method: 'PUT',
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // //         },
// // // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         fetchTrainers();
// // // // // // // // // //         setEditingId(null);
// // // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // // //     setEditingId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // // //   };

// // // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // // //     if (!id) {
// // // // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // // //         method: 'DELETE',
// // // // // // // // // //       });
// // // // // // // // // //       if (response.ok) {
// // // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // // //             if (prev <= 1) {
// // // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // // //               return 0;
// // // // // // // // // //             }
// // // // // // // // // //             return prev - 1;
// // // // // // // // // //           });
// // // // // // // // // //         }, 1000);
// // // // // // // // // //       } else {
// // // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // // //       try {
// // // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // // //           method: 'POST',
// // // // // // // // // //           headers: {
// // // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // // //           },
// // // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // // //         });
// // // // // // // // // //         if (response.ok) {
// // // // // // // // // //           fetchTrainers();
// // // // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // // //           setUndoTimeLeft(0);
// // // // // // // // // //         } else {
// // // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // // //         }
// // // // // // // // // //       } catch (error) {
// // // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const cancelDelete = () => {
// // // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // // //   };

// // // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // // //     if (fileInputRef.current) {
// // // // // // // // // //       fileInputRef.current.click();
// // // // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // // //     const file = e.target.files[0];
// // // // // // // // // //     if (!file) return;

// // // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // // //     ));

// // // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // // //     e.target.value = null; // Reset the file input
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // // //     ));
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     return () => {
// // // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // // //         }
// // // // // // // // // //       });
// // // // // // // // // //     };
// // // // // // // // // //   }, [trainers]);

// // // // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // // // //     ((trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //     (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase()))
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="w-full bg-black text-white min-h-screen">
// // // // // // // // // //       {/* File input for photo upload */}
// // // // // // // // // //       <input
// // // // // // // // // //         type="file"
// // // // // // // // // //         ref={fileInputRef}
// // // // // // // // // //         className="hidden"
// // // // // // // // // //         accept="image/*"
// // // // // // // // // //         onChange={onPhotoSelected}
// // // // // // // // // //       />

// // // // // // // // // //       {/* Undo delete notification */}
// // // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // // //         <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 border-l-4 border-yellow-500 animate-fade-in">
// // // // // // // // // //           <span className="font-medium text-lg">Trainer deleted. Undo? ({undoTimeLeft}s)</span>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // // //             className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
// // // // // // // // // //           >
// // // // // // // // // //             <Undo2 size={18} />
// // // // // // // // // //             <span className="font-medium text-lg">Undo</span>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}

// // // // // // // // // //       {/* Header section */}
// // // // // // // // // //       <div className="ml-0">
// // // // // // // // // //         <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md pt-6 px-6">
// // // // // // // // // //           <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl border border-gray-700/30">
// // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
// // // // // // // // // //               <div className="flex items-center mb-4 sm:mb-0">
// // // // // // // // // //                 <Link href="/dashboard">
// // // // // // // // // //                   <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // // //                       <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // // //                     </svg>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </Link>
// // // // // // // // // //                 <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <button
// // // // // // // // // //                   className={`${viewMode === "card" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gray-700/60"} px-6 py-3 rounded-xl focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 font-medium text-lg`}
// // // // // // // // // //                   onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // // //                 >
// // // // // // // // // //                   {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Search and Add Trainer section */}
// // // // // // // // // //             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
// // // // // // // // // //               <div className="relative w-full sm:w-auto flex-1">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   placeholder="Search trainers..."
// // // // // // // // // //                   className="w-full pl-12 pr-4 py-3 bg-gray-800/30 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-lg"
// // // // // // // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //                   value={searchQuery}
// // // // // // // // // //                 />
// // // // // // // // // //                 <Search className="absolute left-4 top-3 text-red-400" size={24} />
// // // // // // // // // //               </div>
// // // // // // // // // //               <Link href="/add-trainer" className="w-full sm:w-auto">
// // // // // // // // // //                 <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-1 py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 font-medium text-lg">
// // // // // // // // // //                   <Plus size={22} />
// // // // // // // // // //                   <span>Add Trainer</span>
// // // // // // // // // //                 </button>
// // // // // // // // // //               </Link>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Table or Card View */}
// // // // // // // // // //         <div className="p-6">
// // // // // // // // // //           {filteredTrainers.length > 0 && viewMode === "table" ? (
// // // // // // // // // //             <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden w-full border border-gray-700/30 shadow-2xl mt-8">
// // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // //                 <table className="w-full text-left border-collapse">
// // // // // // // // // //                   <thead className="sticky top-0 z-20">
// // // // // // // // // //                     <tr className="bg-gradient-to-r from-gray-700/60 via-gray-800/60 to-purple-900/40">
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">trainerID</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Photo</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Name</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Specialization</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Phone</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Availability</th>
// // // // // // // // // //                       <th className="p-5 border-b border-gray-700/50 font-semibold text-gray-300 text-lg">Actions</th>
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   </thead>
// // // // // // // // // //                   <tbody>
// // // // // // // // // //                     {filteredTrainers.map((trainer, index) => (
// // // // // // // // // //                       <tr
// // // // // // // // // //                         key={trainer.trainerID}
// // // // // // // // // //                         className={`border-b border-gray-600/50 hover:bg-gray-700/20 transition-colors ${
// // // // // // // // // //                           index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
// // // // // // // // // //                         }`}
// // // // // // // // // //                       >
// // // // // // // // // //                         <td className="p-5 text-lg">{trainer.trainerID}</td>
// // // // // // // // // //                         <td className="p-5 text-center">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col items-center gap-2">
// // // // // // // // // //                               {trainer.photo ? (
// // // // // // // // // //                                 <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800">
// // // // // // // // // //                                   <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                   <button
// // // // // // // // // //                                     onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                     className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                                   >
// // // // // // // // // //                                     <Trash size={12} className="text-white" />
// // // // // // // // // //                                   </button>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                               ) : (
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/50 hover:ring-red-500"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Upload size={22} className="text-red-400" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               )}
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.photo ? (
// // // // // // // // // //                               <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // // //                                 <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                                   className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <Trash size={12} className="text-white" />
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             ) : (
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
// // // // // // // // // //                                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                                   <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             )
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.trainer_name}
// // // // // // // // // //                               onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="font-medium text-lg">{trainer.trainer_name}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.specialization}
// // // // // // // // // //                               onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-lg text-base font-medium shadow shadow-amber-500/20">{trainer.specialization}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.phone_number}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700/60 text-white p-3 rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <span className="text-lg">{trainer.availability ? 'Available' : 'Not Available'}</span>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                         <td className="p-5">
// // // // // // // // // //                           {deleteConfirmId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex flex-col gap-3">
// // // // // // // // // //                               <div className="flex items-center gap-2 text-yellow-500">
// // // // // // // // // //                                 <AlertTriangle size={18} />
// // // // // // // // // //                                 <span className="text-base font-medium">Are you sure?</span>
// // // // // // // // // //                               </div>
// // // // // // // // // //                               <div className="flex gap-2">
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   Yes
// // // // // // // // // //                                 </button>
// // // // // // // // // //                                 <button
// // // // // // // // // //                                   onClick={cancelDelete}
// // // // // // // // // //                                   className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-base"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   No
// // // // // // // // // //                                 </button>
// // // // // // // // // //                               </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : editingId === trainer.trainerID ? (
// // // // // // // // // //                             <div className="flex space-x-2">
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={handleSave}
// // // // // // // // // //                                 className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <Save size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <X size={20} />
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             <div className="flex space-x-3">
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                                 className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 p-3 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                                   <path d="M3 6h18"></path>
// // // // // // // // // //                                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// // // // // // // // // //                                 </svg>
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </td>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </tbody>
// // // // // // // // // //                 </table>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// // // // // // // // // //               {filteredTrainers.map((trainer, index) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={trainer.trainerID}
// // // // // // // // // //                   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
// // // // // // // // // //                 >
// // // // // // // // // //                   {deleteConfirmId === trainer.trainerID && (
// // // // // // // // // //                     <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
// // // // // // // // // //                       <div className="bg-gray-800 p-4 rounded-lg text-center">
// // // // // // // // // //                         <AlertTriangle size={40} className="text-yellow-500 mx-auto mb-2" />
// // // // // // // // // //                         <p className="mb-4 text-base">Are you sure you want to delete this trainer?</p>
// // // // // // // // // //                         <div className="flex justify-center gap-3">
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => confirmDelete(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Yes, Delete
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={cancelDelete}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-all font-medium text-base"
// // // // // // // // // //                           >
// // // // // // // // // //                             Cancel
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}

// // // // // // // // // //                   <div className="bg-gray-700 p-5 flex justify-between items-center">
// // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // //                       {trainer.photo ? (
// // // // // // // // // //                         <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // // // // //                           <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // // //                             className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={12} className="text-white" />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <button
// // // // // // // // // //                           onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // // //                           className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // // //                         >
// // // // // // // // // //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
// // // // // // // // // //                             <circle cx="12" cy="7" r="4"></circle>
// // // // // // // // // //                           </svg>
// // // // // // // // // //                         </button>
// // // // // // // // // //                       )}
// // // // // // // // // //                       <h3 className="font-bold text-xl">
// // // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // // //                           <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // // //                             className="bg-gray-600 text-white p-1 rounded w-40 text-lg"
// // // // // // // // // //                           />
// // // // // // // // // //                         ) : (
// // // // // // // // // //                           trainer.trainer_name
// // // // // // // // // //                         )}
// // // // // // // // // //                       </h3>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <input
// // // // // // // // // //                           type="text"
// // // // // // // // // //                           value={editedData.specialization}
// // // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // // //                           className="bg-red-600 text-white p-1 rounded w-28 text-sm"
// // // // // // // // // //                         />
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         trainer.specialization
// // // // // // // // // //                       )}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className="p-5">
// // // // // // // // // //                     <div className="grid grid-cols-2 gap-4 mb-5">
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Phone</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.phone_number}
// // // // // // // // // //                               onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.phone_number
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="col-span-2">
// // // // // // // // // //                         <p className="text-gray-400 text-sm mb-1">Availability</p>
// // // // // // // // // //                         <p className="text-base">
// // // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // // //                             <input
// // // // // // // // // //                               type="text"
// // // // // // // // // //                               value={editedData.availability}
// // // // // // // // // //                               onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // // //                               className="w-full bg-gray-700 text-white p-2 rounded text-base"
// // // // // // // // // //                             />
// // // // // // // // // //                           ) : (
// // // // // // // // // //                             trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // // //                           )}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <div className="flex space-x-3 justify-end">
// // // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={handleSave}
// // // // // // // // // //                             className="bg-green-600 hover:bg-green-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Save size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={handleCancelEdit}
// // // // // // // // // //                             className="bg-gray-600 hover:bg-gray-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <X size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <>
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => handleEdit(trainer)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // // //                               <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // // //                               <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // // //                             </svg>
// // // // // // // // // //                           </button>
// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // // //                             className="bg-red-600 hover:bg-red-700 p-3 rounded transition-all"
// // // // // // // // // //                           >
// // // // // // // // // //                             <Trash size={20} />
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </>
// // // // // // // // // //                       )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default TrainerManagement;
// // // // // // // // // "use client"; // Marks this as a Client Component

// // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';

// // // // // // // // // const TrainerManagement = () => {
// // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // // //   // Define fileInputRef for file upload
// // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchTrainers();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         setTrainers(data);
// // // // // // // // //       } else {
// // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // //   };

// // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // //   };

// // // // // // // // //   const handleSave = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // //         method: 'PUT',
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         fetchTrainers();
// // // // // // // // //         setEditingId(null);
// // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // //     setEditingId(null);
// // // // // // // // //   };

// // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // //   };

// // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // //     if (!id) {
// // // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // //         method: 'DELETE',
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // //             if (prev <= 1) {
// // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // //               return 0;
// // // // // // // // //             }
// // // // // // // // //             return prev - 1;
// // // // // // // // //           });
// // // // // // // // //         }, 1000);
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // //           method: 'POST',
// // // // // // // // //           headers: {
// // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // //           },
// // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // //         });
// // // // // // // // //         if (response.ok) {
// // // // // // // // //           fetchTrainers();
// // // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // // //           setUndoTimeLeft(0);
// // // // // // // // //         } else {
// // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const cancelDelete = () => {
// // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // //   };

// // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // //     if (fileInputRef.current) {
// // // // // // // // //       fileInputRef.current.click();
// // // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // //     const file = e.target.files[0];
// // // // // // // // //     if (!file) return;

// // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // //     ));

// // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // //     e.target.value = null; // Reset the file input
// // // // // // // // //   };

// // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // //     ));
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     return () => {
// // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     };
// // // // // // // // //   }, [trainers]);

// // // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // // //     (
// // // // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // // //     )
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // //       {/* Navbar */}
// // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // //           {/* Title */}
// // // // // // // // //           <div className="flex items-center">
// // // // // // // // //             <Link href="/dashboard">
// // // // // // // // //               <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // //                   <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // //                 </svg>
// // // // // // // // //               </div>
// // // // // // // // //             </Link>
// // // // // // // // //             <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Buttons */}
// // // // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // // // //             {/* Toggle View Mode Button */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // // //             >
// // // // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // //             </button>

// // // // // // // // //             {/* Add Trainer Button */}
// // // // // // // // //             <Link href="/add-trainer">
// // // // // // // // //               <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105">
// // // // // // // // //                 <Plus size={20} />
// // // // // // // // //                 <span>Add Trainer</span>
// // // // // // // // //               </button>
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Header Section */}
// // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // // // // // //           <div className="relative transition-all duration-500">
// // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // // //               <Search className="h-5 w-5 text-red-500" />
// // // // // // // // //             </span>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Search trainers..."
// // // // // // // // //               className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-sm md:text-lg"
// // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //               value={searchQuery}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table or Card View */}
// // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // //         {filteredTrainers.length === 0 ? (
// // // // // // // // //           <div className="flex flex-col items-center justify-center py-12 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // //             <svg
// // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // // // //           </div>
// // // // // // // // //         ) : viewMode === "table" ? (
// // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Trainer ID
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Photo
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Name
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Specialization
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Phone
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Availability
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Actions
// // // // // // // // //                     </th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // // // //                     <tr
// // // // // // // // //                       key={trainer.trainerID}
// // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // //                     >
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         {trainer.photo ? (
// // // // // // // // //                           <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                             <button
// // // // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // //                             >
// // // // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // // // //                             </button>
// // // // // // // // //                           </div>
// // // // // // // // //                         ) : (
// // // // // // // // //                           <button
// // // // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // //                           >
// // // // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // // // //                           </button>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.trainer_name
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.specialization}
// // // // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // // // //                                 {spec.trim()}
// // // // // // // // //                               </span>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.phone_number}
// // // // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.phone_number
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.availability}
// // // // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         <div className="flex space-x-2">
// // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleSave}
// // // // // // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Save size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <X size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           ) : (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                                 </svg>
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Trash size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           )}
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={trainer.trainerID}
// // // // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300"
// // // // // // // // //               >
// // // // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // // // //                   {trainer.photo ? (
// // // // // // // // //                     <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden group">
// // // // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <button
// // // // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // //                     >
// // // // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // // // //                     </button>
// // // // // // // // //                   )}
// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.trainer_name}
// // // // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.trainer_name
// // // // // // // // //                       )}
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.specialization}
// // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.specialization
// // // // // // // // //                       )}
// // // // // // // // //                     </p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.phone_number}
// // // // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.phone_number
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.availability}
// // // // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleSave}
// // // // // // // // //                         className="flex-1 bg-green-500 px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Save size={16} />
// // // // // // // // //                         <span>Save</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleCancelEdit}
// // // // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <X size={16} />
// // // // // // // // //                         <span>Cancel</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // // // //                         className="flex-1 bg-blue-500 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                         </svg>
// // // // // // // // //                         <span>Edit</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                         className="flex-1 bg-red-500 px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={16} />
// // // // // // // // //                         <span>Delete</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Undo Delete Toast */}
// // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // // // // // //           <p className="text-sm md:text-base text-gray-300">
// // // // // // // // //             <span className="font-medium text-white">{recentlyDeletedTrainer.trainer_name}</span> deleted
// // // // // // // // //           </p>
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400"
// // // // // // // // //           >
// // // // // // // // //             <Undo2 size={16} />
// // // // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default TrainerManagement;
// // // // // // // // // "use client";

// // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';

// // // // // // // // // const TrainerManagement = () => {
// // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // // //   // Define fileInputRef for file upload
// // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchTrainers();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         setTrainers(data);
// // // // // // // // //       } else {
// // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // //   };

// // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // //   };

// // // // // // // // //   const handleSave = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // //         method: 'PUT',
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         fetchTrainers();
// // // // // // // // //         setEditingId(null);
// // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // //     setEditingId(null);
// // // // // // // // //   };

// // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // //   };

// // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // //     if (!id) {
// // // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // //         method: 'DELETE',
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // //             if (prev <= 1) {
// // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // //               return 0;
// // // // // // // // //             }
// // // // // // // // //             return prev - 1;
// // // // // // // // //           });
// // // // // // // // //         }, 1000);
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // //           method: 'POST',
// // // // // // // // //           headers: {
// // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // //           },
// // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // //         });
// // // // // // // // //         if (response.ok) {
// // // // // // // // //           fetchTrainers(); // Refresh the trainers list
// // // // // // // // //           setRecentlyDeletedTrainer(null); // Clear the recently deleted trainer
// // // // // // // // //           clearInterval(undoTimerRef.current); // Stop the undo timer
// // // // // // // // //           setUndoTimeLeft(0); // Reset the undo timer
// // // // // // // // //         } else {
// // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const cancelDelete = () => {
// // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // //   };

// // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // //     if (fileInputRef.current) {
// // // // // // // // //       fileInputRef.current.click();
// // // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // //     const file = e.target.files[0];
// // // // // // // // //     if (!file) return;

// // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // //     ));

// // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // //     e.target.value = null; // Reset the file input
// // // // // // // // //   };

// // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // //     ));
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     return () => {
// // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     };
// // // // // // // // //   }, [trainers]);

// // // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // // //     (
// // // // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // // //     )
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // //       {/* Navbar */}
// // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // //           {/* Title */}
// // // // // // // // //           <div className="flex items-center">
// // // // // // // // //             <Link href="/dashboard">
// // // // // // // // //               <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // //                   <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // //                 </svg>
// // // // // // // // //               </div>
// // // // // // // // //             </Link>
// // // // // // // // //             <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Buttons */}
// // // // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // // // //             {/* Toggle View Mode Button */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // // //             >
// // // // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // //             </button>

// // // // // // // // //             {/* Add Trainer Button */}
// // // // // // // // //             <Link href="/add-trainer">
// // // // // // // // //               <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105">
// // // // // // // // //                 <Plus size={20} />
// // // // // // // // //                 <span>Add Trainer</span>
// // // // // // // // //               </button>
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Header Section */}
// // // // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // // // // // //           <div className="relative transition-all duration-500">
// // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // // //               <Search className="h-5 w-5 text-red-500" />
// // // // // // // // //             </span>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Search trainers..."
// // // // // // // // //               className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-sm md:text-lg"
// // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //               value={searchQuery}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table or Card View */}
// // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // //         {filteredTrainers.length === 0 ? (
// // // // // // // // //           <div className="flex flex-col items-center justify-center py-12 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // //             <svg
// // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // // // //           </div>
// // // // // // // // //         ) : viewMode === "table" ? (
// // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Trainer ID
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Photo
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Name
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Specialization
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Phone
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Availability
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Actions
// // // // // // // // //                     </th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // // // //                     <tr
// // // // // // // // //                       key={trainer.trainerID}
// // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // //                     >
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         {trainer.photo ? (
// // // // // // // // //                           <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                             <button
// // // // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // //                             >
// // // // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // // // //                             </button>
// // // // // // // // //                           </div>
// // // // // // // // //                         ) : (
// // // // // // // // //                           <button
// // // // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // //                           >
// // // // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // // // //                           </button>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.trainer_name
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.specialization}
// // // // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // // // //                                 {spec.trim()}
// // // // // // // // //                               </span>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.phone_number}
// // // // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.phone_number
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.availability}
// // // // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         <div className="flex space-x-2">
// // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleSave}
// // // // // // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Save size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <X size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           ) : (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                                 </svg>
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Trash size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           )}
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={trainer.trainerID}
// // // // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300"
// // // // // // // // //               >
// // // // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // // // //                   {trainer.photo ? (
// // // // // // // // //                     <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden group">
// // // // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <button
// // // // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // //                     >
// // // // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // // // //                     </button>
// // // // // // // // //                   )}
// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.trainer_name}
// // // // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.trainer_name
// // // // // // // // //                       )}
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.specialization}
// // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.specialization
// // // // // // // // //                       )}
// // // // // // // // //                     </p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.phone_number}
// // // // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.phone_number
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.availability}
// // // // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleSave}
// // // // // // // // //                         className="flex-1 bg-green-500 px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Save size={16} />
// // // // // // // // //                         <span>Save</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleCancelEdit}
// // // // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <X size={16} />
// // // // // // // // //                         <span>Cancel</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // // // //                         className="flex-1 bg-blue-500 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                         </svg>
// // // // // // // // //                         <span>Edit</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                         className="flex-1 bg-red-500 px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={16} />
// // // // // // // // //                         <span>Delete</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Delete Confirmation Dialog */}
// // // // // // // // //       {deleteConfirmId && (
// // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
// // // // // // // // //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // // // // //               Confirm Delete
// // // // // // // // //             </h2>
// // // // // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // // // // //             </p>
// // // // // // // // //             <div className="flex space-x-4">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={cancelDelete}
// // // // // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500"
// // // // // // // // //               >
// // // // // // // // //                 Cancel
// // // // // // // // //               </button>
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
// // // // // // // // //               >
// // // // // // // // //                 Delete
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Undo Delete Toast */}
// // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // // // // // //           <p className="text-sm md:text-base text-gray-300">
// // // // // // // // //             <span className="font-medium text-white">{recentlyDeletedTrainer.trainer_name}</span> deleted
// // // // // // // // //           </p>
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400"
// // // // // // // // //           >
// // // // // // // // //             <Undo2 size={16} />
// // // // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default TrainerManagement;
// // // // // // // // // "use client";

// // // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';

// // // // // // // // // const TrainerManagement = () => {
// // // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // // //   // Define fileInputRef for file upload
// // // // // // // // //   const fileInputRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchTrainers();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchTrainers = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const data = await response.json();
// // // // // // // // //         setTrainers(data);
// // // // // // // // //       } else {
// // // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // // //     setEditedData({ ...trainer });
// // // // // // // // //   };

// // // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // // //   };

// // // // // // // // //   const handleSave = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // // //         method: 'PUT',
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         fetchTrainers();
// // // // // // // // //         setEditingId(null);
// // // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to update trainer details");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCancelEdit = () => {
// // // // // // // // //     setEditingId(null);
// // // // // // // // //   };

// // // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // // //     setDeleteConfirmId(id);
// // // // // // // // //   };

// // // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // // //     if (!id) {
// // // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // // //         method: 'DELETE',
// // // // // // // // //       });
// // // // // // // // //       if (response.ok) {
// // // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // // //         setDeleteConfirmId(null);
// // // // // // // // //         setUndoTimeLeft(5);
// // // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // // //             if (prev <= 1) {
// // // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // // //               return 0;
// // // // // // // // //             }
// // // // // // // // //             return prev - 1;
// // // // // // // // //           });
// // // // // // // // //         }, 1000);
// // // // // // // // //       } else {
// // // // // // // // //         alert("Failed to delete trainer");
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // // //       try {
// // // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // // //           method: 'POST',
// // // // // // // // //           headers: {
// // // // // // // // //             'Content-Type': 'application/json',
// // // // // // // // //           },
// // // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // // //         });
// // // // // // // // //         if (response.ok) {
// // // // // // // // //           fetchTrainers(); // Refresh the trainers list
// // // // // // // // //           setRecentlyDeletedTrainer(null); // Clear the recently deleted trainer
// // // // // // // // //           clearInterval(undoTimerRef.current); // Stop the undo timer
// // // // // // // // //           setUndoTimeLeft(0); // Reset the undo timer
// // // // // // // // //         } else {
// // // // // // // // //           alert("Failed to undo delete");
// // // // // // // // //         }
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const cancelDelete = () => {
// // // // // // // // //     setDeleteConfirmId(null);
// // // // // // // // //   };

// // // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // // //     if (fileInputRef.current) {
// // // // // // // // //       fileInputRef.current.click();
// // // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // // //     const file = e.target.files[0];
// // // // // // // // //     if (!file) return;

// // // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // // //     ));

// // // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // // //     e.target.value = null; // Reset the file input
// // // // // // // // //   };

// // // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // // //     ));
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     return () => {
// // // // // // // // //       trainers.forEach(trainer => {
// // // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     };
// // // // // // // // //   }, [trainers]);

// // // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // // //     (
// // // // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // // //     )
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // // //       {/* Navbar */}
// // // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // // //           {/* Title */}
// // // // // // // // //           <div className="flex items-center">
// // // // // // // // //             <Link href="/dashboard">
// // // // // // // // //               <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // // //                   <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // // //                 </svg>
// // // // // // // // //               </div>
// // // // // // // // //             </Link>
// // // // // // // // //             <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Buttons */}
// // // // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // // // //             {/* Toggle View Mode Button */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // // //             >
// // // // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // // //             </button>

// // // // // // // // //             {/* Add Trainer Button */}
// // // // // // // // //             <Link href="/add-trainer">
// // // // // // // // //               <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105">
// // // // // // // // //                 <Plus size={20} />
// // // // // // // // //                 <span>Add Trainer</span>
// // // // // // // // //               </button>
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Header Section - Modified to be fixed on small screens */}
// // // // // // // // //       <div className="sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-4">
// // // // // // // // //           <div className="relative transition-all duration-500">
// // // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // // //               <Search className="h-5 w-5 text-red-500" />
// // // // // // // // //             </span>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Search trainers..."
// // // // // // // // //               className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 border border-gray-700/50 shadow-inner text-sm md:text-lg"
// // // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //               value={searchQuery}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table or Card View */}
// // // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // // //         {filteredTrainers.length === 0 ? (
// // // // // // // // //           <div className="flex flex-col items-center justify-center py-12 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // // //             <svg
// // // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // // // //           </div>
// // // // // // // // //         ) : viewMode === "table" ? (
// // // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // // //             <div className="overflow-x-auto">
// // // // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // // // //                 <thead>
// // // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Trainer ID
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Photo
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Name
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Specialization
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Phone
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Availability
// // // // // // // // //                     </th>
// // // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // // //                       Actions
// // // // // // // // //                     </th>
// // // // // // // // //                   </tr>
// // // // // // // // //                 </thead>
// // // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // // // //                     <tr
// // // // // // // // //                       key={trainer.trainerID}
// // // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // // //                     >
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         {trainer.photo ? (
// // // // // // // // //                           <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                             <button
// // // // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // // //                             >
// // // // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // // // //                             </button>
// // // // // // // // //                           </div>
// // // // // // // // //                         ) : (
// // // // // // // // //                           <button
// // // // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // // //                           >
// // // // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // // // //                           </button>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.trainer_name}
// // // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.trainer_name
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.specialization}
// // // // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // // // //                                 {spec.trim()}
// // // // // // // // //                               </span>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.phone_number}
// // // // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.phone_number
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // // //                           <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={editedData.availability}
// // // // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                         )}
// // // // // // // // //                       </td>
// // // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // // //                         <div className="flex space-x-2">
// // // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleSave}
// // // // // // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Save size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <X size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           ) : (
// // // // // // // // //                             <>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                                 </svg>
// // // // // // // // //                               </button>
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
// // // // // // // // //                               >
// // // // // // // // //                                 <Trash size={16} />
// // // // // // // // //                               </button>
// // // // // // // // //                             </>
// // // // // // // // //                           )}
// // // // // // // // //                         </div>
// // // // // // // // //                       </td>
// // // // // // // // //                     </tr>
// // // // // // // // //                   ))}
// // // // // // // // //                 </tbody>
// // // // // // // // //               </table>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={trainer.trainerID}
// // // // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300"
// // // // // // // // //               >
// // // // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // // // //                   {trainer.photo ? (
// // // // // // // // //                     <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden group">
// // // // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <button
// // // // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // // //                     >
// // // // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // // // //                     </button>
// // // // // // // // //                   )}
// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.trainer_name}
// // // // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.trainer_name
// // // // // // // // //                       )}
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // // //                         <input
// // // // // // // // //                           type="text"
// // // // // // // // //                           value={editedData.specialization}
// // // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                         />
// // // // // // // // //                       ) : (
// // // // // // // // //                         trainer.specialization
// // // // // // // // //                       )}
// // // // // // // // //                     </p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.phone_number}
// // // // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.phone_number
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // // //                       <input
// // // // // // // // //                         type="text"
// // // // // // // // //                         value={editedData.availability}
// // // // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // // //                       />
// // // // // // // // //                     ) : (
// // // // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // // // //                     )}
// // // // // // // // //                   </p>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleSave}
// // // // // // // // //                         className="flex-1 bg-green-500 px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Save size={16} />
// // // // // // // // //                         <span>Save</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={handleCancelEdit}
// // // // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <X size={16} />
// // // // // // // // //                         <span>Cancel</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // // // //                         className="flex-1 bg-blue-500 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // // //                         </svg>
// // // // // // // // //                         <span>Edit</span>
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // // //                         className="flex-1 bg-red-500 px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash size={16} />
// // // // // // // // //                         <span>Delete</span>
// // // // // // // // //                       </button>
// // // // // // // // //                     </>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Delete Confirmation Dialog */}
// // // // // // // // //       {deleteConfirmId && (
// // // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
// // // // // // // // //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // // // // //               Confirm Delete
// // // // // // // // //             </h2>
// // // // // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // // // // //             </p>
// // // // // // // // //             <div className="flex space-x-4">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={cancelDelete}
// // // // // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500"
// // // // // // // // //               >
// // // // // // // // //                 Cancel
// // // // // // // // //               </button>
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
// // // // // // // // //               >
// // // // // // // // //                 Delete
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Undo Delete Toast */}
// // // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // // // // // //           <p className="text-sm md:text-base text-gray-300">
// // // // // // // // //             <span className="font-medium text-white">{recentlyDeletedTrainer.trainer_name}</span> deleted
// // // // // // // // //           </p>
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleUndoDelete}
// // // // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400"
// // // // // // // // //           >
// // // // // // // // //             <Undo2 size={16} />
// // // // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default TrainerManagement;
// // // // // // // // "use client";

// // // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // // import Link from 'next/link';
// // // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';

// // // // // // // // const TrainerManagement = () => {
// // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // //   const [viewMode, setViewMode] = useState("table"); // "table" or "card"
// // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // //   // Define fileInputRef for file upload
// // // // // // // //   const fileInputRef = useRef(null);
// // // // // // // //   const searchInputRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchTrainers();
// // // // // // // //   }, []);

// // // // // // // //   const fetchTrainers = async () => {
// // // // // // // //     setIsLoading(true);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // //       if (response.ok) {
// // // // // // // //         const data = await response.json();
// // // // // // // //         setTrainers(data);
// // // // // // // //       } else {
// // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // //     setEditedData({ ...trainer });
// // // // // // // //   };

// // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // //   };

// // // // // // // //   const handleSave = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // //         method: 'PUT',
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'application/json',
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // //       });
// // // // // // // //       if (response.ok) {
// // // // // // // //         fetchTrainers();
// // // // // // // //         setEditingId(null);
// // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // //       } else {
// // // // // // // //         alert("Failed to update trainer details");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleCancelEdit = () => {
// // // // // // // //     setEditingId(null);
// // // // // // // //   };

// // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // //     setDeleteConfirmId(id);
// // // // // // // //   };

// // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // //     if (!id) {
// // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // //         method: 'DELETE',
// // // // // // // //       });
// // // // // // // //       if (response.ok) {
// // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // //         setDeleteConfirmId(null);
// // // // // // // //         setUndoTimeLeft(5);
// // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // //             if (prev <= 1) {
// // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // //               console.log("Permanently deleted trainer:", trainerToDelete);
// // // // // // // //               return 0;
// // // // // // // //             }
// // // // // // // //             return prev - 1;
// // // // // // // //           });
// // // // // // // //         }, 1000);
// // // // // // // //       } else {
// // // // // // // //         alert("Failed to delete trainer");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // //           method: 'POST',
// // // // // // // //           headers: {
// // // // // // // //             'Content-Type': 'application/json',
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // //         });
// // // // // // // //         if (response.ok) {
// // // // // // // //           fetchTrainers(); // Refresh the trainers list
// // // // // // // //           setRecentlyDeletedTrainer(null); // Clear the recently deleted trainer
// // // // // // // //           clearInterval(undoTimerRef.current); // Stop the undo timer
// // // // // // // //           setUndoTimeLeft(0); // Reset the undo timer
// // // // // // // //         } else {
// // // // // // // //           alert("Failed to undo delete");
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const cancelDelete = () => {
// // // // // // // //     setDeleteConfirmId(null);
// // // // // // // //   };

// // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // //     if (fileInputRef.current) {
// // // // // // // //       fileInputRef.current.click();
// // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // //     const file = e.target.files[0];
// // // // // // // //     if (!file) return;

// // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // //     ));

// // // // // // // //     console.log("Photo to be uploaded for trainer ID:", trainerId, file);
// // // // // // // //     e.target.value = null; // Reset the file input
// // // // // // // //   };

// // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // //     ));
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     return () => {
// // // // // // // //       trainers.forEach(trainer => {
// // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     };
// // // // // // // //   }, [trainers]);

// // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // //     trainer.trainerID && // Ensure trainerID is defined
// // // // // // // //     (
// // // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // //     )
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // //       {/* Navbar */}
// // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // //           {/* Title */}
// // // // // // // //           <div className="flex items-center">
// // // // // // // //             <Link href="/dashboard">
// // // // // // // //               <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // //                   <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // //                 </svg>
// // // // // // // //               </div>
// // // // // // // //             </Link>
// // // // // // // //             <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // //           </div>

// // // // // // // //           {/* Buttons */}
// // // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // // //             {/* Toggle View Mode Button */}
// // // // // // // //             <button
// // // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // //             >
// // // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // //             </button>

// // // // // // // //             {/* Add Trainer Button */}
// // // // // // // //             <Link href="/add-trainer">
// // // // // // // //               <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105">
// // // // // // // //                 <Plus size={20} />
// // // // // // // //                 <span>Add Trainer</span>
// // // // // // // //               </button>
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Header Section - Modified to be fixed on small screens */}
// // // // // // // //       <div className="sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-4">
// // // // // // // //           <div className="relative transition-all duration-500">
// // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // //               <Search className="h-5 w-5 text-red-500" />
// // // // // // // //             </span>
// // // // // // // //             <input
// // // // // // // //               ref={searchInputRef}
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search trainers..."
// // // // // // // //               className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 border border-gray-700/50 shadow-inner text-sm md:text-lg"
// // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // //               value={searchQuery}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Loader */}
// // // // // // // //       {isLoading && (
// // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
// // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Table or Card View */}
// // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // //         {filteredTrainers.length === 0 && !isLoading ? (
// // // // // // // //           <div className="flex flex-col items-center justify-center py-12 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // //             <svg
// // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // // //           </div>
// // // // // // // //         ) : viewMode === "table" ? (
// // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // //             <div className="overflow-x-auto w-full">
// // // // // // // //               <table className="w-full min-w-[800px] md:min-w-full divide-y divide-gray-800">
// // // // // // // //                 <thead>
// // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Trainer ID
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Photo
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Name
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Specialization
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Phone
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Availability
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Actions
// // // // // // // //                     </th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // // //                     <tr
// // // // // // // //                       key={trainer.trainerID}
// // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // //                     >
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // //                         {trainer.photo ? (
// // // // // // // //                           <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // //                             <button
// // // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // //                             >
// // // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // // //                             </button>
// // // // // // // //                           </div>
// // // // // // // //                         ) : (
// // // // // // // //                           <button
// // // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // //                           >
// // // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // // //                           </button>
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.trainer_name}
// // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.trainer_name
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.specialization}
// // // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // // //                                 {spec.trim()}
// // // // // // // //                               </span>
// // // // // // // //                             ))}
// // // // // // // //                           </div>
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.phone_number}
// // // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.phone_number
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.availability}
// // // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // //                         <div className="flex space-x-2">
// // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // //                             <>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={handleSave}
// // // // // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <Save size={16} />
// // // // // // // //                               </button>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <X size={16} />
// // // // // // // //                               </button>
// // // // // // // //                             </>
// // // // // // // //                           ) : (
// // // // // // // //                             <>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // //                                 </svg>
// // // // // // // //                               </button>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <Trash size={16} />
// // // // // // // //                               </button>
// // // // // // // //                             </>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                       </td>
// // // // // // // //                     </tr>
// // // // // // // //                   ))}
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // // //               <div
// // // // // // // //                 key={trainer.trainerID}
// // // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // //                 tabIndex="0" // Make the card focusable
// // // // // // // //               >
// // // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // // //                   {trainer.photo ? (
// // // // // // // //                     <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden group">
// // // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // //                       >
// // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   ) : (
// // // // // // // //                     <button
// // // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // //                     >
// // // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // // //                     </button>
// // // // // // // //                   )}
// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={editedData.trainer_name}
// // // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         trainer.trainer_name
// // // // // // // //                       )}
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={editedData.specialization}
// // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         trainer.specialization
// // // // // // // //                       )}
// // // // // // // //                     </p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         value={editedData.phone_number}
// // // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                       />
// // // // // // // //                     ) : (
// // // // // // // //                       trainer.phone_number
// // // // // // // //                     )}
// // // // // // // //                   </p>
// // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         value={editedData.availability}
// // // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                       />
// // // // // // // //                     ) : (
// // // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // // //                     )}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // // //                     <>
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleSave}
// // // // // // // //                         className="flex-1 bg-green-500 px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <Save size={16} />
// // // // // // // //                         <span>Save</span>
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleCancelEdit}
// // // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <X size={16} />
// // // // // // // //                         <span>Cancel</span>
// // // // // // // //                       </button>
// // // // // // // //                     </>
// // // // // // // //                   ) : (
// // // // // // // //                     <>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // // //                         className="flex-1 bg-blue-500 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // //                         </svg>
// // // // // // // //                         <span>Edit</span>
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // //                         className="flex-1 bg-red-500 px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <Trash size={16} />
// // // // // // // //                         <span>Delete</span>
// // // // // // // //                       </button>
// // // // // // // //                     </>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Delete Confirmation Dialog */}
// // // // // // // //       {deleteConfirmId && (
// // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
// // // // // // // //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // // // //               Confirm Delete
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex space-x-4">
// // // // // // // //               <button
// // // // // // // //                 onClick={cancelDelete}
// // // // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500"
// // // // // // // //               >
// // // // // // // //                 Cancel
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
// // // // // // // //               >
// // // // // // // //                 Delete
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Undo Delete Toast */}
// // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // // // // //           <p className="text-sm md:text-base text-gray-300">
// // // // // // // //             <span className="font-medium text-white">{recentlyDeletedTrainer.trainer_name}</span> deleted
// // // // // // // //           </p>
// // // // // // // //           <button
// // // // // // // //             onClick={handleUndoDelete}
// // // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400"
// // // // // // // //           >
// // // // // // // //             <Undo2 size={16} />
// // // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default TrainerManagement;
// // // // // // // "use client";

// // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';

// // // // // // // // const TrainerManagement = () => {
// // // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // //   const [viewMode, setViewMode] = useState("table");
// // // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // //   const undoTimerRef = useRef(null);

// // // // // // // //   const fileInputRef = useRef(null);
// // // // // // // //   const searchInputRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchTrainers();
// // // // // // // //   }, []);

// // // // // // // //   const fetchTrainers = async () => {
// // // // // // // //     setIsLoading(true);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // // //       if (response.ok) {
// // // // // // // //         const data = await response.json();
// // // // // // // //         setTrainers(data);
// // // // // // // //       } else {
// // // // // // // //         alert('Failed to fetch trainers');
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleEdit = (trainer) => {
// // // // // // // //     setEditingId(trainer.trainerID);
// // // // // // // //     setEditedData({ ...trainer });
// // // // // // // //   };

// // // // // // // //   const handleEditChange = (field, value) => {
// // // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // // //   };

// // // // // // // //   const handleSave = async () => {
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // // //         method: 'PUT',
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'application/json',
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify(editedData),
// // // // // // // //       });
// // // // // // // //       if (response.ok) {
// // // // // // // //         fetchTrainers();
// // // // // // // //         setEditingId(null);
// // // // // // // //         alert("Trainer details updated successfully");
// // // // // // // //       } else {
// // // // // // // //         alert("Failed to update trainer details");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error updating trainer:", error);
// // // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleCancelEdit = () => {
// // // // // // // //     setEditingId(null);
// // // // // // // //   };

// // // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // // //     setDeleteConfirmId(id);
// // // // // // // //   };

// // // // // // // //   const confirmDelete = async (id) => {
// // // // // // // //     if (!id) {
// // // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // // //         method: 'DELETE',
// // // // // // // //       });
// // // // // // // //       if (response.ok) {
// // // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // // //         setDeleteConfirmId(null);
// // // // // // // //         setUndoTimeLeft(5);
// // // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // // //           setUndoTimeLeft(prev => {
// // // // // // // //             if (prev <= 1) {
// // // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // // //               return 0;
// // // // // // // //             }
// // // // // // // //             return prev - 1;
// // // // // // // //           });
// // // // // // // //         }, 1000);
// // // // // // // //       } else {
// // // // // // // //         alert("Failed to delete trainer");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleUndoDelete = async () => {
// // // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // // //           method: 'POST',
// // // // // // // //           headers: {
// // // // // // // //             'Content-Type': 'application/json',
// // // // // // // //           },
// // // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // // //         });
// // // // // // // //         if (response.ok) {
// // // // // // // //           fetchTrainers();
// // // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // // //           setUndoTimeLeft(0);
// // // // // // // //         } else {
// // // // // // // //           alert("Failed to undo delete");
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error undoing delete:", error);
// // // // // // // //         alert("An error occurred while undoing delete");
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const cancelDelete = () => {
// // // // // // // //     setDeleteConfirmId(null);
// // // // // // // //   };

// // // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // // //     if (fileInputRef.current) {
// // // // // // // //       fileInputRef.current.click();
// // // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const onPhotoSelected = (e) => {
// // // // // // // //     const file = e.target.files[0];
// // // // // // // //     if (!file) return;

// // // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // // //     ));

// // // // // // // //     e.target.value = null;
// // // // // // // //   };

// // // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // // //     ));
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     return () => {
// // // // // // // //       trainers.forEach(trainer => {
// // // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     };
// // // // // // // //   }, [trainers]);

// // // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // // //     trainer.trainerID && (
// // // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // // //     )
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // // //       {/* Navbar */}
// // // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // // //           <div className="flex items-center">
// // // // // // // //             <Link href="/dashboard">
// // // // // // // //               <div className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group">
// // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // // //                   <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // // //                 </svg>
// // // // // // // //               </div>
// // // // // // // //             </Link>
// // // // // // // //             <h1 className="text-2xl font-bold ml-4 tracking-wide">TRAINERS LIST</h1>
// // // // // // // //           </div>

// // // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // // //             <button
// // // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
// // // // // // // //             >
// // // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // // //             </button>

// // // // // // // //             <Link href="/add-trainer">
// // // // // // // //               <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105">
// // // // // // // //                 <Plus size={20} />
// // // // // // // //                 <span>Add Trainer</span>
// // // // // // // //               </button>
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Header Section */}
// // // // // // // //       <div className="sticky top-16 md:top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-4">
// // // // // // // //           <div className="relative transition-all duration-500">
// // // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-6">
// // // // // // // //               <Search className="h-5 w-5 text-red-500" />
// // // // // // // //             </span>
// // // // // // // //             <input
// // // // // // // //               ref={searchInputRef}
// // // // // // // //               type="text"
// // // // // // // //               placeholder="Search trainers..."
// // // // // // // //               className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 border border-gray-700/50 shadow-inner text-sm md:text-lg"
// // // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // //               value={searchQuery}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Loader */}
// // // // // // // //       {isLoading && (
// // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
// // // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Content */}
// // // // // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // // // // //         {filteredTrainers.length === 0 && !isLoading ? (
// // // // // // // //           <div className="flex flex-col items-center justify-center py-12 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // // // // //             <svg
// // // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // // //           </div>
// // // // // // // //         ) : viewMode === "table" ? (
// // // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // // //             <div className="overflow-x-auto w-full">
// // // // // // // //               <table className="w-full min-w-[800px] md:min-w-full divide-y divide-gray-800">
// // // // // // // //                 <thead>
// // // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Trainer ID
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Photo
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Name
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Specialization
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Phone
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Availability
// // // // // // // //                     </th>
// // // // // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // // //                       Actions
// // // // // // // //                     </th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // // //                     <tr
// // // // // // // //                       key={trainer.trainerID}
// // // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // // //                     >
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // //                         {trainer.photo ? (
// // // // // // // //                           <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // //                             <button
// // // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // // //                             >
// // // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // // //                             </button>
// // // // // // // //                           </div>
// // // // // // // //                         ) : (
// // // // // // // //                           <button
// // // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500"
// // // // // // // //                           >
// // // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // // //                           </button>
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.trainer_name}
// // // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.trainer_name
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.specialization}
// // // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // // //                                 {spec.trim()}
// // // // // // // //                               </span>
// // // // // // // //                             ))}
// // // // // // // //                           </div>
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.phone_number}
// // // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.phone_number
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // // //                           <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={editedData.availability}
// // // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // //                             className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // // //                         )}
// // // // // // // //                       </td>
// // // // // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // // // // //                         <div className="flex space-x-2">
// // // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // // //                             <>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={handleSave}
// // // // // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <Save size={16} />
// // // // // // // //                               </button>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={handleCancelEdit}
// // // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <X size={16} />
// // // // // // // //                               </button>
// // // // // // // //                             </>
// // // // // // // //                           ) : (
// // // // // // // //                             <>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // //                                 </svg>
// // // // // // // //                               </button>
// // // // // // // //                               <button
// // // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
// // // // // // // //                               >
// // // // // // // //                                 <Trash size={16} />
// // // // // // // //                               </button>
// // // // // // // //                             </>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                       </td>
// // // // // // // //                     </tr>
// // // // // // // //                   ))}
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // // //               <div
// // // // // // // //                 key={trainer.trainerID}
// // // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // // // //                 tabIndex="0"
// // // // // // // //               >
// // // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // // //                   {trainer.photo ? (
// // // // // // // //                     <div className="relative w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden group">
// // // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // // // // //                       >
// // // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   ) : (
// // // // // // // //                     <button
// // // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600"
// // // // // // // //                     >
// // // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // // //                     </button>
// // // // // // // //                   )}
// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={editedData.trainer_name}
// // // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         trainer.trainer_name
// // // // // // // //                       )}
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // // //                         <input
// // // // // // // //                           type="text"
// // // // // // // //                           value={editedData.specialization}
// // // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // // //                           className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         trainer.specialization
// // // // // // // //                       )}
// // // // // // // //                     </p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         value={editedData.phone_number}
// // // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                       />
// // // // // // // //                     ) : (
// // // // // // // //                       trainer.phone_number
// // // // // // // //                     )}
// // // // // // // //                   </p>
// // // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         value={editedData.availability}
// // // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // // //                         className="bg-gray-700 text-white p-1 rounded"
// // // // // // // //                       />
// // // // // // // //                     ) : (
// // // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // // //                     )}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // // //                     <>
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleSave}
// // // // // // // //                         className="flex-1 bg-green-500 px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <Save size={16} />
// // // // // // // //                         <span>Save</span>
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={handleCancelEdit}
// // // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 md:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <X size={16} />
// // // // // // // //                         <span>Cancel</span>
// // // // // // // //                       </button>
// // // // // // // //                     </>
// // // // // // // //                   ) : (
// // // // // // // //                     <>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // // //                         className="flex-1 bg-blue-500 px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // // //                         </svg>
// // // // // // // //                         <span>Edit</span>
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // // //                         className="flex-1 bg-red-500 px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2"
// // // // // // // //                       >
// // // // // // // //                         <Trash size={16} />
// // // // // // // //                         <span>Delete</span>
// // // // // // // //                       </button>
// // // // // // // //                     </>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Delete Confirmation Dialog */}
// // // // // // // //       {deleteConfirmId && (
// // // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
// // // // // // // //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // // // //               Confirm Delete
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex space-x-4">
// // // // // // // //               <button
// // // // // // // //                 onClick={cancelDelete}
// // // // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500"
// // // // // // // //               >
// // // // // // // //                 Cancel
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
// // // // // // // //               >
// // // // // // // //                 Delete
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Undo Delete Toast */}
// // // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // // // // //           <p className="text-sm md:text-base text-gray-300">
// // // // // // // //             <span className="font-medium text-white">{recentlyDeletedTrainer.trainer_name}</span> deleted
// // // // // // // //           </p>
// // // // // // // //           <button
// // // // // // // //             onClick={handleUndoDelete}
// // // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400"
// // // // // // // //           >
// // // // // // // //             <Undo2 size={16} />
// // // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Hidden file input for photo upload */}
// // // // // // // //       <input
// // // // // // // //         type="file"
// // // // // // // //         ref={fileInputRef}
// // // // // // // //         onChange={onPhotoSelected}
// // // // // // // //         accept="image/*"
// // // // // // // //         className="hidden"
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default TrainerManagement;

// // // // // // // "use client";

// // // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { Search, Plus, X, Check, AlertTriangle, Upload, Undo2, Trash, Save, User } from 'lucide-react';
// // // // // // // import { useRouter } from 'next/navigation';

// // // // // // // const TrainerManagement = () => {
// // // // // // //   const router = useRouter();
// // // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // // //   const [viewMode, setViewMode] = useState("table");
// // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // //   const [editedData, setEditedData] = useState({});
// // // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // //   const undoTimerRef = useRef(null);

// // // // // // //   const fileInputRef = useRef(null);
// // // // // // //   const searchInputRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     fetchTrainers();
// // // // // // //   }, []);

// // // // // // //   const fetchTrainers = async () => {
// // // // // // //     setIsLoading(true);
// // // // // // //     try {
// // // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // // //       if (response.ok) {
// // // // // // //         const data = await response.json();
// // // // // // //         setTrainers(data);
// // // // // // //       } else {
// // // // // // //         alert('Failed to fetch trainers');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching trainers:', error);
// // // // // // //       alert('An error occurred while fetching trainers');
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEdit = (trainer) => {
// // // // // // //     setEditingId(trainer.trainerID);
// // // // // // //     setEditedData({ ...trainer });
// // // // // // //   };

// // // // // // //   const handleEditChange = (field, value) => {
// // // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // // //   };

// // // // // // //   const handleSave = async () => {
// // // // // // //     try {
// // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // // //         method: 'PUT',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify(editedData),
// // // // // // //       });
// // // // // // //       if (response.ok) {
// // // // // // //         fetchTrainers();
// // // // // // //         setEditingId(null);
// // // // // // //         alert("Trainer details updated successfully");
// // // // // // //       } else {
// // // // // // //         alert("Failed to update trainer details");
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error updating trainer:", error);
// // // // // // //       alert("An error occurred while updating trainer details");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCancelEdit = () => {
// // // // // // //     setEditingId(null);
// // // // // // //   };

// // // // // // //   const handleDeleteConfirm = (id) => {
// // // // // // //     setDeleteConfirmId(id);
// // // // // // //   };

// // // // // // //   const confirmDelete = async (id) => {
// // // // // // //     if (!id) {
// // // // // // //       console.error("Trainer ID is undefined!");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // // //         method: 'DELETE',
// // // // // // //       });
// // // // // // //       if (response.ok) {
// // // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // // //         setDeleteConfirmId(null);
// // // // // // //         setUndoTimeLeft(5);
// // // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // // //           setUndoTimeLeft(prev => {
// // // // // // //             if (prev <= 1) {
// // // // // // //               clearInterval(undoTimerRef.current);
// // // // // // //               return 0;
// // // // // // //             }
// // // // // // //             return prev - 1;
// // // // // // //           });
// // // // // // //         }, 1000);
// // // // // // //       } else {
// // // // // // //         alert("Failed to delete trainer");
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error deleting trainer:", error);
// // // // // // //       alert("An error occurred while deleting trainer");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleUndoDelete = async () => {
// // // // // // //     if (recentlyDeletedTrainer) {
// // // // // // //       try {
// // // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // // //           method: 'POST',
// // // // // // //           headers: {
// // // // // // //             'Content-Type': 'application/json',
// // // // // // //           },
// // // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // // //         });
// // // // // // //         if (response.ok) {
// // // // // // //           fetchTrainers();
// // // // // // //           setRecentlyDeletedTrainer(null);
// // // // // // //           clearInterval(undoTimerRef.current);
// // // // // // //           setUndoTimeLeft(0);
// // // // // // //         } else {
// // // // // // //           alert("Failed to undo delete");
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error undoing delete:", error);
// // // // // // //         alert("An error occurred while undoing delete");
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const cancelDelete = () => {
// // // // // // //     setDeleteConfirmId(null);
// // // // // // //   };

// // // // // // //   const handlePhotoUpload = (id) => {
// // // // // // //     if (fileInputRef.current) {
// // // // // // //       fileInputRef.current.click();
// // // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const onPhotoSelected = (e) => {
// // // // // // //     const file = e.target.files[0];
// // // // // // //     if (!file) return;

// // // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // // //     ));

// // // // // // //     e.target.value = null;
// // // // // // //   };

// // // // // // //   const handleDeletePhoto = (id) => {
// // // // // // //     setTrainers(trainers.map(trainer =>
// // // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // // //     ));
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     return () => {
// // // // // // //       trainers.forEach(trainer => {
// // // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // // //         }
// // // // // // //       });
// // // // // // //     };
// // // // // // //   }, [trainers]);

// // // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // // //     trainer.trainerID && (
// // // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // // //     )
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // // //       {/* Global styles for focus rings */}
// // // // // // //       <style jsx global>{`
// // // // // // //         /* Force focus rings to be visible on mobile */
// // // // // // //         button:focus, 
// // // // // // //         input:focus,
// // // // // // //         select:focus,
// // // // // // //         a:focus,
// // // // // // //         [tabindex]:focus,
// // // // // // //         [role="button"]:focus {
// // // // // // //           outline: none !important;
// // // // // // //           box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5) !important;
// // // // // // //         }

// // // // // // //         /* For touch devices - ensure focus state appears on tap */
// // // // // // //         @media (hover: none) and (pointer: coarse) {
// // // // // // //           button:active, 
// // // // // // //           input:active,
// // // // // // //           select:active,
// // // // // // //           a:active,
// // // // // // //           [tabindex]:active,
// // // // // // //           [role="button"]:active {
// // // // // // //             outline: none !important;
// // // // // // //             box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5) !important;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>

// // // // // // //       {/* Navbar */}
// // // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // // //           <div className="flex items-center">
// // // // // // //             <Link 
// // // // // // //               href="/dashboard"
// // // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // // //             >
// // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // // //               </svg>
// // // // // // //             </Link>
// // // // // // //             <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4">
// // // // // // //               Trainers List
// // // // // // //             </h1>
// // // // // // //           </div>

// // // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // // //             <button
// // // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // // //             >
// // // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // // //             </button>

// // // // // // //             <button
// // // // // // //               onClick={() => router.push("/add-trainer")}
// // // // // // //               className="w-full md:w-auto bg-red-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // // //             >
// // // // // // //               <Plus size={20} />
// // // // // // //               <span>Add Trainer</span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Header Section */}
// // // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // // //         <div className="w-full px-8 pt-10">
// // // // // // //           <div className="relative">
// // // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-6">
// // // // // // //               <Search
// // // // // // //                 className={`h-5 w-5 ${
// // // // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // // //                 }`}
// // // // // // //               />
// // // // // // //             </span>
// // // // // // //             <input
// // // // // // //               ref={searchInputRef}
// // // // // // //               type="text"
// // // // // // //               placeholder="Search trainers by name or specialization..."
// // // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // // //                 text-black dark:text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800
// // // // // // //                 text-lg bg-white dark:bg-gray-800`}
// // // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //               value={searchQuery}
// // // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Loader */}
// // // // // // //       {isLoading && (
// // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
// // // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Content */}
// // // // // // //       <div className="w-full px-8 pt-10 pb-12">
// // // // // // //         {filteredTrainers.length === 0 && !isLoading ? (
// // // // // // //           <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
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
// // // // // // //             <p className="text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // // //           </div>
// // // // // // //         ) : viewMode === "table" ? (
// // // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // // //             <div className="overflow-x-auto">
// // // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // // //                 <thead>
// // // // // // //                   <tr className="bg-gray-900/50">
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Trainer ID
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Photo
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Name
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Specialization
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Phone
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Availability
// // // // // // //                     </th>
// // // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // // //                       Actions
// // // // // // //                     </th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // // //                     <tr
// // // // // // //                       key={trainer.trainerID}
// // // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // // //                     >
// // // // // // //                       <td className="py-5 px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // // //                       <td className="py-5 px-6 text-sm">
// // // // // // //                         {trainer.photo ? (
// // // // // // //                           <div className="relative w-12 h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // //                             <button
// // // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // // //                             >
// // // // // // //                               <Trash size={12} className="text-white" />
// // // // // // //                             </button>
// // // // // // //                           </div>
// // // // // // //                         ) : (
// // // // // // //                           <button
// // // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                           >
// // // // // // //                             <User size={16} className="text-red-400" />
// // // // // // //                           </button>
// // // // // // //                         )}
// // // // // // //                       </td>
// // // // // // //                       <td className="py-5 px-6 text-sm font-medium text-white">
// // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // //                           <input
// // // // // // //                             type="text"
// // // // // // //                             value={editedData.trainer_name}
// // // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                           />
// // // // // // //                         ) : (
// // // // // // //                           trainer.trainer_name
// // // // // // //                         )}
// // // // // // //                       </td>
// // // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // //                           <input
// // // // // // //                             type="text"
// // // // // // //                             value={editedData.specialization}
// // // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                           />
// // // // // // //                         ) : (
// // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // // //                                 {spec.trim()}
// // // // // // //                               </span>
// // // // // // //                             ))}
// // // // // // //                           </div>
// // // // // // //                         )}
// // // // // // //                       </td>
// // // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // //                           <input
// // // // // // //                             type="text"
// // // // // // //                             value={editedData.phone_number}
// // // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                           />
// // // // // // //                         ) : (
// // // // // // //                           trainer.phone_number
// // // // // // //                         )}
// // // // // // //                       </td>
// // // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // // //                         {editingId === trainer.trainerID ? (
// // // // // // //                           <select
// // // // // // //                             value={editedData.availability}
// // // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                           >
// // // // // // //                             <option value="true">Available</option>
// // // // // // //                             <option value="false">Not Available</option>
// // // // // // //                           </select>
// // // // // // //                         ) : (
// // // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // // //                         )}
// // // // // // //                       </td>
// // // // // // //                       <td className="py-5 px-6 text-sm">
// // // // // // //                         <div className="flex space-x-2">
// // // // // // //                           {editingId === trainer.trainerID ? (
// // // // // // //                             <>
// // // // // // //                               <button
// // // // // // //                                 onClick={handleSave}
// // // // // // //                                 className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
// // // // // // //                               >
// // // // // // //                                 <Save size={16} />
// // // // // // //                               </button>
// // // // // // //                               <button
// // // // // // //                                 onClick={handleCancelEdit}
// // // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
// // // // // // //                               >
// // // // // // //                                 <X size={16} />
// // // // // // //                               </button>
// // // // // // //                             </>
// // // // // // //                           ) : (
// // // // // // //                             <>
// // // // // // //                               <button
// // // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // // //                                 className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // // // // // //                               >
// // // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // //                                 </svg>
// // // // // // //                               </button>
// // // // // // //                               <button
// // // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // //                                 className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                               >
// // // // // // //                                 <Trash size={16} />
// // // // // // //                               </button>
// // // // // // //                             </>
// // // // // // //                           )}
// // // // // // //                         </div>
// // // // // // //                       </td>
// // // // // // //                     </tr>
// // // // // // //                   ))}
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //             {filteredTrainers.map((trainer) => (
// // // // // // //               <div
// // // // // // //                 key={trainer.trainerID}
// // // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800"
// // // // // // //                 tabIndex={0}
// // // // // // //               >
// // // // // // //                 <div className="flex items-center space-x-4">
// // // // // // //                   {trainer.photo ? (
// // // // // // //                     <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <Trash size={12} className="text-white" />
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     <button
// // // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // // //                       className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                     >
// // // // // // //                       <User size={16} className="text-red-400" />
// // // // // // //                     </button>
// // // // // // //                   )}
// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={editedData.trainer_name}
// // // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                         />
// // // // // // //                       ) : (
// // // // // // //                         trainer.trainer_name
// // // // // // //                       )}
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-sm text-gray-300">
// // // // // // //                       {editingId === trainer.trainerID ? (
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           value={editedData.specialization}
// // // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                         />
// // // // // // //                       ) : (
// // // // // // //                         trainer.specialization
// // // // // // //                       )}
// // // // // // //                     </p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <div className="mt-4 space-y-2">
// // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // //                       <input
// // // // // // //                         type="text"
// // // // // // //                         value={editedData.phone_number}
// // // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                       />
// // // // // // //                     ) : (
// // // // // // //                       trainer.phone_number
// // // // // // //                     )}
// // // // // // //                   </p>
// // // // // // //                   <p className="text-sm text-gray-300">
// // // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // // //                     {editingId === trainer.trainerID ? (
// // // // // // //                       <select
// // // // // // //                         value={editedData.availability}
// // // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <option value="true">Available</option>
// // // // // // //                         <option value="false">Not Available</option>
// // // // // // //                       </select>
// // // // // // //                     ) : (
// // // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // // //                     )}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // // //                   {editingId === trainer.trainerID ? (
// // // // // // //                     <>
// // // // // // //                       <button
// // // // // // //                         onClick={handleSave}
// // // // // // //                         className="flex-1 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <Save size={16} />
// // // // // // //                         <span>Save</span>
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={handleCancelEdit}
// // // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <X size={16} />
// // // // // // //                         <span>Cancel</span>
// // // // // // //                       </button>
// // // // // // //                     </>
// // // // // // //                   ) : (
// // // // // // //                     <>
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // // //                         className="flex-1 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // // //                         </svg>
// // // // // // //                         <span>Edit</span>
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // // //                         className="flex-1 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //                       >
// // // // // // //                         <Trash size={16} />
// // // // // // //                         <span>Delete</span>
// // // // // // //                       </button>
// // // // // // //                     </>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Delete Confirmation Dialog */}
// // // // // // //       {deleteConfirmId && (
// // // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // // // //           <div
// // // // // // //             className="absolute inset-0 bg-black opacity-60"
// // // // // // //             onClick={cancelDelete}
// // // // // // //           ></div>
// // // // // // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full z-10 shadow-lg">
// // // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // // //               Confirm Delete
// // // // // // //             </h2>
// // // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // // //             </p>
// // // // // // //             <div className="flex space-x-4">
// // // // // // //               <button
// // // // // // //                 onClick={cancelDelete}
// // // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //               >
// // // // // // //                 Cancel
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // // //               >
// // // // // // //                 Delete
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Undo Delete Toast */}
// // // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // // //         <div className="fixed bottom-8 right-8 bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-lg flex items-center space-x-4 z-50">
// // // // // // //           <p className="text-gray-300">
// // // // // // //             <span className="font-medium text-white">
// // // // // // //               {recentlyDeletedTrainer.trainer_name}
// // // // // // //             </span>{" "}
// // // // // // //             deleted
// // // // // // //           </p>
// // // // // // //           <button
// // // // // // //             onClick={handleUndoDelete}
// // // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
// // // // // // //           >
// // // // // // //             <Undo2 size={16} />
// // // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Hidden file input for photo upload */}
// // // // // // //       <input
// // // // // // //         type="file"
// // // // // // //         ref={fileInputRef}
// // // // // // //         onChange={onPhotoSelected}
// // // // // // //         accept="image/*"
// // // // // // //         className="hidden"
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TrainerManagement;
// // // // // // "use client";

// // // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // // // // // import { useRouter } from 'next/navigation';

// // // // // // const TrainerManagement = () => {
// // // // // //   const router = useRouter();
// // // // // //   const [trainers, setTrainers] = useState([]);
// // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // // //   const [viewMode, setViewMode] = useState("table");
// // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // //   const [editedData, setEditedData] = useState({});
// // // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const undoTimerRef = useRef(null);

// // // // // //   const fileInputRef = useRef(null);
// // // // // //   const searchInputRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     fetchTrainers();
// // // // // //   }, []);

// // // // // //   const fetchTrainers = async () => {
// // // // // //     setIsLoading(true);
// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // // //       if (response.ok) {
// // // // // //         const data = await response.json();
// // // // // //         setTrainers(data);
// // // // // //       } else {
// // // // // //         alert('Failed to fetch trainers');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching trainers:', error);
// // // // // //       alert('An error occurred while fetching trainers');
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEdit = (trainer) => {
// // // // // //     setEditingId(trainer.trainerID);
// // // // // //     setEditedData({ ...trainer });
// // // // // //   };

// // // // // //   const handleEditChange = (field, value) => {
// // // // // //     setEditedData({ ...editedData, [field]: value });
// // // // // //   };

// // // // // //   const handleSave = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // // //         method: 'PUT',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify(editedData),
// // // // // //       });
// // // // // //       if (response.ok) {
// // // // // //         fetchTrainers();
// // // // // //         setEditingId(null);
// // // // // //         alert("Trainer details updated successfully");
// // // // // //       } else {
// // // // // //         alert("Failed to update trainer details");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating trainer:", error);
// // // // // //       alert("An error occurred while updating trainer details");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCancelEdit = () => {
// // // // // //     setEditingId(null);
// // // // // //   };

// // // // // //   const handleDeleteConfirm = (id) => {
// // // // // //     setDeleteConfirmId(id);
// // // // // //   };

// // // // // //   const confirmDelete = async (id) => {
// // // // // //     if (!id) {
// // // // // //       console.error("Trainer ID is undefined!");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // // //         method: 'DELETE',
// // // // // //       });
// // // // // //       if (response.ok) {
// // // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // // //         setDeleteConfirmId(null);
// // // // // //         setUndoTimeLeft(5);
// // // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // // //         undoTimerRef.current = setInterval(() => {
// // // // // //           setUndoTimeLeft(prev => {
// // // // // //             if (prev <= 1) {
// // // // // //               clearInterval(undoTimerRef.current);
// // // // // //               return 0;
// // // // // //             }
// // // // // //             return prev - 1;
// // // // // //           });
// // // // // //         }, 1000);
// // // // // //       } else {
// // // // // //         alert("Failed to delete trainer");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error deleting trainer:", error);
// // // // // //       alert("An error occurred while deleting trainer");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleUndoDelete = async () => {
// // // // // //     if (recentlyDeletedTrainer) {
// // // // // //       try {
// // // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // // //           method: 'POST',
// // // // // //           headers: {
// // // // // //             'Content-Type': 'application/json',
// // // // // //           },
// // // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // // //         });
// // // // // //         if (response.ok) {
// // // // // //           fetchTrainers();
// // // // // //           setRecentlyDeletedTrainer(null);
// // // // // //           clearInterval(undoTimerRef.current);
// // // // // //           setUndoTimeLeft(0);
// // // // // //         } else {
// // // // // //           alert("Failed to undo delete");
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error("Error undoing delete:", error);
// // // // // //         alert("An error occurred while undoing delete");
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const cancelDelete = () => {
// // // // // //     setDeleteConfirmId(null);
// // // // // //   };

// // // // // //   const handlePhotoUpload = (id) => {
// // // // // //     if (fileInputRef.current) {
// // // // // //       fileInputRef.current.click();
// // // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // // //     }
// // // // // //   };

// // // // // //   const onPhotoSelected = (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (!file) return;

// // // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // // //     const photoURL = URL.createObjectURL(file);

// // // // // //     setTrainers(trainers.map(trainer =>
// // // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // // //     ));

// // // // // //     e.target.value = null;
// // // // // //   };

// // // // // //   const handleDeletePhoto = (id) => {
// // // // // //     setTrainers(trainers.map(trainer =>
// // // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // // //     ));
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     return () => {
// // // // // //       trainers.forEach(trainer => {
// // // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // // //           URL.revokeObjectURL(trainer.photo);
// // // // // //         }
// // // // // //       });
// // // // // //     };
// // // // // //   }, [trainers]);

// // // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // // //     trainer.trainerID && (
// // // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // // //     )
// // // // // //   );

// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // // //         <div className="text-center">
// // // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // // //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full">
// // // // // //       <style jsx global>{`
// // // // // //         button:focus, 
// // // // // //         input:focus,
// // // // // //         select:focus,
// // // // // //         a:focus,
// // // // // //         [tabindex]:focus,
// // // // // //         [role="button"]:focus {
// // // // // //           outline: none !important;
// // // // // //           box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5) !important;
// // // // // //         }

// // // // // //         @media (hover: none) and (pointer: coarse) {
// // // // // //           button:active, 
// // // // // //           input:active,
// // // // // //           select:active,
// // // // // //           a:active,
// // // // // //           [tabindex]:active,
// // // // // //           [role="button"]:active {
// // // // // //             outline: none !important;
// // // // // //             box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5) !important;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // // //           <div className="flex items-center">
// // // // // //             <Link 
// // // // // //               href="/dashboard"
// // // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //             >
// // // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // // //               </svg>
// // // // // //             </Link>
// // // // // //             <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4">
// // // // // //               Trainers List
// // // // // //             </h1>
// // // // // //           </div>

// // // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
// // // // // //             <button
// // // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //             >
// // // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => router.push("/add-trainer")}
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //             >
// // // // // //               <Plus size={20} />
// // // // // //               <span>Add Trainer</span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // // //         <div className="w-full px-8 pt-10">
// // // // // //           <div className="relative">
// // // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-6">
// // // // // //               <Search
// // // // // //                 className={`h-5 w-5 ${
// // // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // // //                 }`}
// // // // // //               />
// // // // // //             </span>
// // // // // //             <input
// // // // // //               ref={searchInputRef}
// // // // // //               type="text"
// // // // // //               placeholder="Search trainers by name or specialization..."
// // // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // // //                 text-black dark:text-white pl-14 pr-4 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800
// // // // // //                 text-lg bg-white dark:bg-gray-800`}
// // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //               value={searchQuery}
// // // // // //               onFocus={() => setSearchFocused(true)}
// // // // // //               onBlur={() => setSearchFocused(false)}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="w-full px-8 pt-10 pb-12">
// // // // // //         {filteredTrainers.length === 0 ? (
// // // // // //           <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
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
// // // // // //             <p className="text-2xl font-light tracking-wider">No trainers found.</p>
// // // // // //           </div>
// // // // // //         ) : viewMode === "table" ? (
// // // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // // //             <div className="overflow-x-auto">
// // // // // //               <table className="w-full divide-y divide-gray-800">
// // // // // //                 <thead>
// // // // // //                   <tr className="bg-gray-900/50">
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Trainer ID
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Photo
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Name
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Specialization
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Phone
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Availability
// // // // // //                     </th>
// // // // // //                     <th className="py-5 px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // // //                       Actions
// // // // // //                     </th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody className="divide-y divide-gray-800">
// // // // // //                   {filteredTrainers.map((trainer) => (
// // // // // //                     <tr
// // // // // //                       key={trainer.trainerID}
// // // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // // //                     >
// // // // // //                       <td className="py-5 px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // // //                       <td className="py-5 px-6 text-sm">
// // // // // //                         {trainer.photo ? (
// // // // // //                           <div className="relative w-12 h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // //                             <button
// // // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // // //                             >
// // // // // //                               <Trash size={12} className="text-white" />
// // // // // //                             </button>
// // // // // //                           </div>
// // // // // //                         ) : (
// // // // // //                           <button
// // // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                           >
// // // // // //                             <User size={16} className="text-red-400" />
// // // // // //                           </button>
// // // // // //                         )}
// // // // // //                       </td>
// // // // // //                       <td className="py-5 px-6 text-sm font-medium text-white">
// // // // // //                         {editingId === trainer.trainerID ? (
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             value={editedData.trainer_name}
// // // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                           />
// // // // // //                         ) : (
// // // // // //                           trainer.trainer_name
// // // // // //                         )}
// // // // // //                       </td>
// // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // //                         {editingId === trainer.trainerID ? (
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             value={editedData.specialization}
// // // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                           />
// // // // // //                         ) : (
// // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // // //                               <span key={index} className="border border-gray-500 px-2 py-1 rounded text-sm">
// // // // // //                                 {spec.trim()}
// // // // // //                               </span>
// // // // // //                             ))}
// // // // // //                           </div>
// // // // // //                         )}
// // // // // //                       </td>
// // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // //                         {editingId === trainer.trainerID ? (
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             value={editedData.phone_number}
// // // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                           />
// // // // // //                         ) : (
// // // // // //                           trainer.phone_number
// // // // // //                         )}
// // // // // //                       </td>
// // // // // //                       <td className="py-5 px-6 text-sm font-light text-gray-300">
// // // // // //                         {editingId === trainer.trainerID ? (
// // // // // //                           <select
// // // // // //                             value={editedData.availability}
// // // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                           >
// // // // // //                             <option value="true">Available</option>
// // // // // //                             <option value="false">Not Available</option>
// // // // // //                           </select>
// // // // // //                         ) : (
// // // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // // //                         )}
// // // // // //                       </td>
// // // // // //                       <td className="py-5 px-6 text-sm">
// // // // // //                         <div className="flex space-x-2">
// // // // // //                           {editingId === trainer.trainerID ? (
// // // // // //                             <>
// // // // // //                               <button
// // // // // //                                 onClick={handleSave}
// // // // // //                                 className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
// // // // // //                               >
// // // // // //                                 <Save size={16} />
// // // // // //                               </button>
// // // // // //                               <button
// // // // // //                                 onClick={handleCancelEdit}
// // // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
// // // // // //                               >
// // // // // //                                 <X size={16} />
// // // // // //                               </button>
// // // // // //                             </>
// // // // // //                           ) : (
// // // // // //                             <>
// // // // // //                               <button
// // // // // //                                 onClick={() => handleEdit(trainer)}
// // // // // //                                 className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // // // // //                               >
// // // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // //                                 </svg>
// // // // // //                               </button>
// // // // // //                               <button
// // // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // //                                 className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                               >
// // // // // //                                 <Trash size={16} />
// // // // // //                               </button>
// // // // // //                             </>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   ))}
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //             {filteredTrainers.map((trainer) => (
// // // // // //               <div
// // // // // //                 key={trainer.trainerID}
// // // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800"
// // // // // //                 tabIndex={0}
// // // // // //               >
// // // // // //                 <div className="flex items-center space-x-4">
// // // // // //                   {trainer.photo ? (
// // // // // //                     <div className="relative w-12 h-12 rounded-full overflow-hidden group">
// // // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // // //                       <button
// // // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                       >
// // // // // //                         <Trash size={12} className="text-white" />
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <button
// // // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // // //                       className="bg-gray-700 p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                     >
// // // // // //                       <User size={16} className="text-red-400" />
// // // // // //                     </button>
// // // // // //                   )}
// // // // // //                   <div>
// // // // // //                     <h3 className="text-lg font-medium text-white">
// // // // // //                       {editingId === trainer.trainerID ? (
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           value={editedData.trainer_name}
// // // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                         />
// // // // // //                       ) : (
// // // // // //                         trainer.trainer_name
// // // // // //                       )}
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm text-gray-300">
// // // // // //                       {editingId === trainer.trainerID ? (
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           value={editedData.specialization}
// // // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                         />
// // // // // //                       ) : (
// // // // // //                         trainer.specialization
// // // // // //                       )}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="mt-4 space-y-2">
// // // // // //                   <p className="text-sm text-gray-300">
// // // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // // //                     {editingId === trainer.trainerID ? (
// // // // // //                       <input
// // // // // //                         type="text"
// // // // // //                         value={editedData.phone_number}
// // // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                       />
// // // // // //                     ) : (
// // // // // //                       trainer.phone_number
// // // // // //                     )}
// // // // // //                   </p>
// // // // // //                   <p className="text-sm text-gray-300">
// // // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // // //                     {editingId === trainer.trainerID ? (
// // // // // //                       <select
// // // // // //                         value={editedData.availability}
// // // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //                       >
// // // // // //                         <option value="true">Available</option>
// // // // // //                         <option value="false">Not Available</option>
// // // // // //                       </select>
// // // // // //                     ) : (
// // // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // // //                     )}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //                 <div className="mt-6 flex space-x-3">
// // // // // //                   {editingId === trainer.trainerID ? (
// // // // // //                     <>
// // // // // //                       <button
// // // // // //                         onClick={handleSave}
// // // // // //                         className="flex-1 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //                       >
// // // // // //                         <Save size={16} />
// // // // // //                         <span>Save</span>
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={handleCancelEdit}
// // // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //                       >
// // // // // //                         <X size={16} />
// // // // // //                         <span>Cancel</span>
// // // // // //                       </button>
// // // // // //                     </>
// // // // // //                   ) : (
// // // // // //                     <>
// // // // // //                       <button
// // // // // //                         onClick={() => handleEdit(trainer)}
// // // // // //                         className="flex-1 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //                       >
// // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // // //                         </svg>
// // // // // //                         <span>Edit</span>
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // // //                         className="flex-1 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // // //                       >
// // // // // //                         <Trash size={16} />
// // // // // //                         <span>Delete</span>
// // // // // //                       </button>
// // // // // //                     </>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {deleteConfirmId && (
// // // // // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // // //           <div
// // // // // //             className="absolute inset-0 bg-black opacity-60"
// // // // // //             onClick={cancelDelete}
// // // // // //           ></div>
// // // // // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full z-10 shadow-lg">
// // // // // //             <h2 className="text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // // //               Confirm Delete
// // // // // //             </h2>
// // // // // //             <p className="text-gray-300 mb-6 text-center">
// // // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // // //             </p>
// // // // // //             <div className="flex space-x-4">
// // // // // //               <button
// // // // // //                 onClick={cancelDelete}
// // // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-3 rounded-lg hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // // //                 className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // // //               >
// // // // // //                 Delete
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // // //         <div className="fixed bottom-8 right-8 bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-lg flex items-center space-x-4 z-50">
// // // // // //           <p className="text-gray-300">
// // // // // //             <span className="font-medium text-white">
// // // // // //               {recentlyDeletedTrainer.trainer_name}
// // // // // //             </span>{" "}
// // // // // //             deleted
// // // // // //           </p>
// // // // // //           <button
// // // // // //             onClick={handleUndoDelete}
// // // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
// // // // // //           >
// // // // // //             <Undo2 size={16} />
// // // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <input
// // // // // //         type="file"
// // // // // //         ref={fileInputRef}
// // // // // //         onChange={onPhotoSelected}
// // // // // //         accept="image/*"
// // // // // //         className="hidden"
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TrainerManagement;
// // // // // "use client";

// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // // // // import { useRouter } from 'next/navigation';

// // // // // const TrainerManagement = () => {
// // // // //   const router = useRouter();
// // // // //   const [trainers, setTrainers] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const [editedData, setEditedData] = useState({});
// // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const undoTimerRef = useRef(null);

// // // // //   const fileInputRef = useRef(null);
// // // // //   const searchInputRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     fetchTrainers();
// // // // //   }, []);

// // // // //   const fetchTrainers = async () => {
// // // // //     setIsLoading(true);
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         setTrainers(data);
// // // // //       } else {
// // // // //         alert('Failed to fetch trainers');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching trainers:', error);
// // // // //       alert('An error occurred while fetching trainers');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleEdit = (trainer) => {
// // // // //     setEditingId(trainer.trainerID);
// // // // //     setEditedData({ ...trainer });
// // // // //   };

// // // // //   const handleEditChange = (field, value) => {
// // // // //     setEditedData({ ...editedData, [field]: value });
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // //         method: 'PUT',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify(editedData),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         fetchTrainers();
// // // // //         setEditingId(null);
// // // // //         alert("Trainer details updated successfully");
// // // // //       } else {
// // // // //         alert("Failed to update trainer details");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating trainer:", error);
// // // // //       alert("An error occurred while updating trainer details");
// // // // //     }
// // // // //   };

// // // // //   const handleCancelEdit = () => {
// // // // //     setEditingId(null);
// // // // //   };

// // // // //   const handleDeleteConfirm = (id) => {
// // // // //     setDeleteConfirmId(id);
// // // // //   };

// // // // //   const confirmDelete = async (id) => {
// // // // //     if (!id) {
// // // // //       console.error("Trainer ID is undefined!");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // //         method: 'DELETE',
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // //         setDeleteConfirmId(null);
// // // // //         setUndoTimeLeft(5);
// // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // //         undoTimerRef.current = setInterval(() => {
// // // // //           setUndoTimeLeft(prev => {
// // // // //             if (prev <= 1) {
// // // // //               clearInterval(undoTimerRef.current);
// // // // //               return 0;
// // // // //             }
// // // // //             return prev - 1;
// // // // //           });
// // // // //         }, 1000);
// // // // //       } else {
// // // // //         alert("Failed to delete trainer");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting trainer:", error);
// // // // //       alert("An error occurred while deleting trainer");
// // // // //     }
// // // // //   };

// // // // //   const handleUndoDelete = async () => {
// // // // //     if (recentlyDeletedTrainer) {
// // // // //       try {
// // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // //         });
// // // // //         if (response.ok) {
// // // // //           fetchTrainers();
// // // // //           setRecentlyDeletedTrainer(null);
// // // // //           clearInterval(undoTimerRef.current);
// // // // //           setUndoTimeLeft(0);
// // // // //         } else {
// // // // //           alert("Failed to undo delete");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error("Error undoing delete:", error);
// // // // //         alert("An error occurred while undoing delete");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const cancelDelete = () => {
// // // // //     setDeleteConfirmId(null);
// // // // //   };

// // // // //   const handlePhotoUpload = (id) => {
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.click();
// // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // //     }
// // // // //   };

// // // // //   const onPhotoSelected = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (!file) return;

// // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // //     const photoURL = URL.createObjectURL(file);

// // // // //     setTrainers(trainers.map(trainer =>
// // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // //     ));

// // // // //     e.target.value = null;
// // // // //   };

// // // // //   const handleDeletePhoto = (id) => {
// // // // //     setTrainers(trainers.map(trainer =>
// // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // //     ));
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       trainers.forEach(trainer => {
// // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // //           URL.revokeObjectURL(trainer.photo);
// // // // //         }
// // // // //       });
// // // // //     };
// // // // //   }, [trainers]);

// // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // //     trainer.trainerID && (
// // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // //     )
// // // // //   );

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// // // // //         <div className="text-center">
// // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full font-poppins">
// // // // //       <style jsx global>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
// // // // //         body {
// // // // //           font-family: 'Poppins', sans-serif;
// // // // //         }
        
// // // // //         button:focus, 
// // // // //         input:focus,
// // // // //         select:focus,
// // // // //         a:focus,
// // // // //         [tabindex]:focus,
// // // // //         [role="button"]:focus {
// // // // //           outline: none !important;
// // // // //           box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5) !important;
// // // // //         }

// // // // //         @media (min-width: 768px) {
// // // // //           button:focus, 
// // // // //           input:focus,
// // // // //           select:focus,
// // // // //           a:focus,
// // // // //           [tabindex]:focus,
// // // // //           [role="button"]:focus {
// // // // //             box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5) !important;
// // // // //           }
// // // // //         }

// // // // //         @media (hover: none) and (pointer: coarse) {
// // // // //           button:active, 
// // // // //           input:active,
// // // // //           select:active,
// // // // //           a:active,
// // // // //           [tabindex]:active,
// // // // //           [role="button"]:active {
// // // // //             outline: none !important;
// // // // //             box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5) !important;
// // // // //           }
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
// // // // //         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
// // // // //           <div className="flex items-center">
// // // // //             <Link 
// // // // //               href="/dashboard"
// // // // //               className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //             >
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
// // // // //                 <path d="M19 12H5M12 19l-7-7 7-7"/>
// // // // //               </svg>
// // // // //             </Link>
// // // // //             <h1 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
// // // // //               Trainers List
// // // // //             </h1>
// // // // //           </div>

// // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
// // // // //             <button
// // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //             >
// // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => router.push("/add-trainer")}
// // // // //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //             >
// // // // //               <Plus size={20} />
// // // // //               <span>Add Trainer</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // //           <div className="relative">
// // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // //               <Search
// // // // //                 className={`h-5 w-5 ${
// // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // //                 }`}
// // // // //               />
// // // // //             </span>
// // // // //             <input
// // // // //               ref={searchInputRef}
// // // // //               type="text"
// // // // //               placeholder="Search trainers by name or specialization..."
// // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800
// // // // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // //               value={searchQuery}
// // // // //               onFocus={() => setSearchFocused(true)}
// // // // //               onBlur={() => setSearchFocused(false)}
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // //         {filteredTrainers.length === 0 ? (
// // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // //             <svg
// // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // //           </div>
// // // // //         ) : viewMode === "table" ? (
// // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // //             <div className="overflow-x-auto">
// // // // //               <table className="w-full divide-y divide-gray-800">
// // // // //                 <thead>
// // // // //                   <tr className="bg-gray-900/50">
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Trainer ID
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Photo
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Name
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Specialization
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Phone
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Availability
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Actions
// // // // //                     </th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody className="divide-y divide-gray-800">
// // // // //                   {filteredTrainers.map((trainer) => (
// // // // //                     <tr
// // // // //                       key={trainer.trainerID}
// // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // //                     >
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // //                         {trainer.photo ? (
// // // // //                           <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // //                             <button
// // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // // //                             >
// // // // //                               <Trash size={12} className="text-white" />
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <button
// // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                           >
// // // // //                             <User size={16} className="text-red-400" />
// // // // //                           </button>
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.trainer_name}
// // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           trainer.trainer_name
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.specialization}
// // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           <div className="flex flex-wrap gap-1 md:gap-2">
// // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // //                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm">
// // // // //                                 {spec.trim()}
// // // // //                               </span>
// // // // //                             ))}
// // // // //                           </div>
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.phone_number}
// // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           trainer.phone_number
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <select
// // // // //                             value={editedData.availability}
// // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                           >
// // // // //                             <option value="true">Available</option>
// // // // //                             <option value="false">Not Available</option>
// // // // //                           </select>
// // // // //                         ) : (
// // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // //                         <div className="flex space-x-1 md:space-x-2">
// // // // //                           {editingId === trainer.trainerID ? (
// // // // //                             <>
// // // // //                               <button
// // // // //                                 onClick={handleSave}
// // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
// // // // //                               >
// // // // //                                 <Save size={16} />
// // // // //                               </button>
// // // // //                               <button
// // // // //                                 onClick={handleCancelEdit}
// // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
// // // // //                               >
// // // // //                                 <X size={16} />
// // // // //                               </button>
// // // // //                             </>
// // // // //                           ) : (
// // // // //                             <>
// // // // //                               <button
// // // // //                                 onClick={() => handleEdit(trainer)}
// // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // // // //                               >
// // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // //                                 </svg>
// // // // //                               </button>
// // // // //                               <button
// // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                               >
// // // // //                                 <Trash size={16} />
// // // // //                               </button>
// // // // //                             </>
// // // // //                           )}
// // // // //                         </div>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // //             {filteredTrainers.map((trainer) => (
// // // // //               <div
// // // // //                 key={trainer.trainerID}
// // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-800"
// // // // //                 tabIndex={0}
// // // // //               >
// // // // //                 <div className="flex items-center space-x-3 md:space-x-4">
// // // // //                   {trainer.photo ? (
// // // // //                     <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden group">
// // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // //                       <button
// // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                       >
// // // // //                         <Trash size={12} className="text-white" />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <button
// // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //                     >
// // // // //                       <User size={16} className="text-red-400" />
// // // // //                     </button>
// // // // //                   )}
// // // // //                   <div>
// // // // //                     <h3 className="text-base md:text-lg font-medium text-white">
// // // // //                       {editingId === trainer.trainerID ? (
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={editedData.trainer_name}
// // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full"
// // // // //                         />
// // // // //                       ) : (
// // // // //                         trainer.trainer_name
// // // // //                       )}
// // // // //                     </h3>
// // // // //                     <p className="text-xs md:text-sm text-gray-300">
// // // // //                       {editingId === trainer.trainerID ? (
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={editedData.specialization}
// // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full"
// // // // //                         />
// // // // //                       ) : (
// // // // //                         trainer.specialization
// // // // //                       )}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
// // // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // //                     {editingId === trainer.trainerID ? (
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         value={editedData.phone_number}
// // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full"
// // // // //                       />
// // // // //                     ) : (
// // // // //                       trainer.phone_number
// // // // //                     )}
// // // // //                   </p>
// // // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // //                     {editingId === trainer.trainerID ? (
// // // // //                       <select
// // // // //                         value={editedData.availability}
// // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full"
// // // // //                       >
// // // // //                         <option value="true">Available</option>
// // // // //                         <option value="false">Not Available</option>
// // // // //                       </select>
// // // // //                     ) : (
// // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // //                     )}
// // // // //                   </p>
// // // // //                 </div>
// // // // //                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
// // // // //                   {editingId === trainer.trainerID ? (
// // // // //                     <>
// // // // //                       <button
// // // // //                         onClick={handleSave}
// // // // //                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //                       >
// // // // //                         <Save size={16} />
// // // // //                         <span className="text-xs md:text-sm">Save</span>
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={handleCancelEdit}
// // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //                       >
// // // // //                         <X size={16} />
// // // // //                         <span className="text-xs md:text-sm">Cancel</span>
// // // // //                       </button>
// // // // //                     </>
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <button
// // // // //                         onClick={() => handleEdit(trainer)}
// // // // //                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //                       >
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // //                         </svg>
// // // // //                         <span className="text-xs md:text-sm">Edit</span>
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // //                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
// // // // //                       >
// // // // //                         <Trash size={16} />
// // // // //                         <span className="text-xs md:text-sm">Delete</span>
// // // // //                       </button>
// // // // //                     </>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {deleteConfirmId && (
// // // // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // //           <div
// // // // //             className="absolute inset-0 bg-black opacity-60"
// // // // //             onClick={cancelDelete}
// // // // //           ></div>
// // // // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // //             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // //               Confirm Delete
// // // // //             </h2>
// // // // //             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
// // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // //             </p>
// // // // //             <div className="flex space-x-3 md:space-x-4">
// // // // //               <button
// // // // //                 onClick={cancelDelete}
// // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // //                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // //           <p className="text-xs md:text-sm text-gray-300">
// // // // //             <span className="font-medium text-white">
// // // // //               {recentlyDeletedTrainer.trainer_name}
// // // // //             </span>{" "}
// // // // //             deleted
// // // // //           </p>
// // // // //           <button
// // // // //             onClick={handleUndoDelete}
// // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded text-xs md:text-sm"
// // // // //           >
// // // // //             <Undo2 size={14} />
// // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // //           </button>
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

// // // // // export default TrainerManagement;
// // // // // "use client";

// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // // // // import { useRouter } from 'next/navigation';

// // // // // const TrainerManagement = () => {
// // // // //   const router = useRouter();
// // // // //   const [trainers, setTrainers] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // // //   const [viewMode, setViewMode] = useState("table");
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const [editedData, setEditedData] = useState({});
// // // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const undoTimerRef = useRef(null);

// // // // //   const fileInputRef = useRef(null);
// // // // //   const searchInputRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     fetchTrainers();
// // // // //   }, []);

// // // // //   const fetchTrainers = async () => {
// // // // //     setIsLoading(true);
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         setTrainers(data);
// // // // //       } else {
// // // // //         alert('Failed to fetch trainers');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching trainers:', error);
// // // // //       alert('An error occurred while fetching trainers');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleEdit = (trainer) => {
// // // // //     setEditingId(trainer.trainerID);
// // // // //     setEditedData({ ...trainer });
// // // // //   };

// // // // //   const handleEditChange = (field, value) => {
// // // // //     setEditedData({ ...editedData, [field]: value });
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // // //         method: 'PUT',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify(editedData),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         fetchTrainers();
// // // // //         setEditingId(null);
// // // // //         alert("Trainer details updated successfully");
// // // // //       } else {
// // // // //         alert("Failed to update trainer details");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating trainer:", error);
// // // // //       alert("An error occurred while updating trainer details");
// // // // //     }
// // // // //   };

// // // // //   const handleCancelEdit = () => {
// // // // //     setEditingId(null);
// // // // //   };

// // // // //   const handleDeleteConfirm = (id) => {
// // // // //     setDeleteConfirmId(id);
// // // // //   };

// // // // //   const confirmDelete = async (id) => {
// // // // //     if (!id) {
// // // // //       console.error("Trainer ID is undefined!");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // // //         method: 'DELETE',
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // // //         setDeleteConfirmId(null);
// // // // //         setUndoTimeLeft(5);
// // // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // // //         undoTimerRef.current = setInterval(() => {
// // // // //           setUndoTimeLeft(prev => {
// // // // //             if (prev <= 1) {
// // // // //               clearInterval(undoTimerRef.current);
// // // // //               return 0;
// // // // //             }
// // // // //             return prev - 1;
// // // // //           });
// // // // //         }, 1000);
// // // // //       } else {
// // // // //         alert("Failed to delete trainer");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting trainer:", error);
// // // // //       alert("An error occurred while deleting trainer");
// // // // //     }
// // // // //   };

// // // // //   const handleUndoDelete = async () => {
// // // // //     if (recentlyDeletedTrainer) {
// // // // //       try {
// // // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //           body: JSON.stringify(recentlyDeletedTrainer),
// // // // //         });
// // // // //         if (response.ok) {
// // // // //           fetchTrainers();
// // // // //           setRecentlyDeletedTrainer(null);
// // // // //           clearInterval(undoTimerRef.current);
// // // // //           setUndoTimeLeft(0);
// // // // //         } else {
// // // // //           alert("Failed to undo delete");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error("Error undoing delete:", error);
// // // // //         alert("An error occurred while undoing delete");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const cancelDelete = () => {
// // // // //     setDeleteConfirmId(null);
// // // // //   };

// // // // //   const handlePhotoUpload = (id) => {
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.click();
// // // // //       fileInputRef.current.dataset.trainerId = id;
// // // // //     }
// // // // //   };

// // // // //   const onPhotoSelected = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (!file) return;

// // // // //     const trainerId = parseInt(fileInputRef.current.dataset.trainerId);
// // // // //     const photoURL = URL.createObjectURL(file);

// // // // //     setTrainers(trainers.map(trainer =>
// // // // //       trainer.trainerID === trainerId ? { ...trainer, photo: photoURL } : trainer
// // // // //     ));

// // // // //     e.target.value = null;
// // // // //   };

// // // // //   const handleDeletePhoto = (id) => {
// // // // //     setTrainers(trainers.map(trainer =>
// // // // //       trainer.trainerID === id ? { ...trainer, photo: null } : trainer
// // // // //     ));
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       trainers.forEach(trainer => {
// // // // //         if (trainer.photo && trainer.photo.startsWith('blob:')) {
// // // // //           URL.revokeObjectURL(trainer.photo);
// // // // //         }
// // // // //       });
// // // // //     };
// // // // //   }, [trainers]);

// // // // //   const filteredTrainers = trainers.filter(trainer =>
// // // // //     trainer.trainerID && (
// // // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // // //     )
// // // // //   );

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white font-poppins">
// // // // //         <div className="text-center">
// // // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // // //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full font-poppins">
// // // // //       <style jsx global>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
// // // // //         body {
// // // // //           font-family: 'Poppins', sans-serif;
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

// // // // //         @media (min-width: 768px) {
// // // // //           button:focus, 
// // // // //           input:focus,
// // // // //           select:focus,
// // // // //           a:focus,
// // // // //           [tabindex]:focus,
// // // // //           [role="button"]:focus {
// // // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // // //           }
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

// // // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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
// // // // //               Trainers List
// // // // //             </h1>
// // // // //           </div>

// // // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
// // // // //             <button
// // // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// // // // //             >
// // // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => router.push("/add-trainer")}
// // // // //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
// // // // //             >
// // // // //               <Plus size={20} />
// // // // //               <span>Add Trainer</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // // //           <div className="relative">
// // // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // // //               <Search
// // // // //                 className={`h-5 w-5 ${
// // // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // // //                 }`}
// // // // //               />
// // // // //             </span>
// // // // //             <input
// // // // //               ref={searchInputRef}
// // // // //               type="text"
// // // // //               placeholder="Search trainers by name or specialization..."
// // // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// // // // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // //               value={searchQuery}
// // // // //               onFocus={() => setSearchFocused(true)}
// // // // //               onBlur={() => setSearchFocused(false)}
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // // //         {filteredTrainers.length === 0 ? (
// // // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // // //             <svg
// // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // // //           </div>
// // // // //         ) : viewMode === "table" ? (
// // // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // // //             <div className="overflow-x-auto">
// // // // //               <table className="w-full divide-y divide-gray-800">
// // // // //                 <thead>
// // // // //                   <tr className="bg-gray-900/50">
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Trainer ID
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Photo
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Name
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Specialization
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Phone
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Availability
// // // // //                     </th>
// // // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // // //                       Actions
// // // // //                     </th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody className="divide-y divide-gray-800">
// // // // //                   {filteredTrainers.map((trainer) => (
// // // // //                     <tr
// // // // //                       key={trainer.trainerID}
// // // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // // //                     >
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // //                         {trainer.photo ? (
// // // // //                           <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // // //                             <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // //                             <button
// // // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // // // //                             >
// // // // //                               <Trash size={12} className="text-white" />
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         ) : (
// // // // //                           <button
// // // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
// // // // //                           >
// // // // //                             <User size={16} className="text-red-400" />
// // // // //                           </button>
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.trainer_name}
// // // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           trainer.trainer_name
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.specialization}
// // // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           <div className="flex flex-wrap gap-1 md:gap-2">
// // // // //                             {trainer.specialization.split(',').map((spec, index) => (
// // // // //                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-poppins">
// // // // //                                 {spec.trim()}
// // // // //                               </span>
// // // // //                             ))}
// // // // //                           </div>
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             value={editedData.phone_number}
// // // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                           />
// // // // //                         ) : (
// // // // //                           trainer.phone_number
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // // //                         {editingId === trainer.trainerID ? (
// // // // //                           <select
// // // // //                             value={editedData.availability}
// // // // //                             onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                           >
// // // // //                             <option value="true">Available</option>
// // // // //                             <option value="false">Not Available</option>
// // // // //                           </select>
// // // // //                         ) : (
// // // // //                           trainer.availability ? 'Available' : 'Not Available'
// // // // //                         )}
// // // // //                       </td>
// // // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // // //                         <div className="flex space-x-1 md:space-x-2">
// // // // //                           {editingId === trainer.trainerID ? (
// // // // //                             <>
// // // // //                               <button
// // // // //                                 onClick={handleSave}
// // // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
// // // // //                               >
// // // // //                                 <Save size={16} />
// // // // //                               </button>
// // // // //                               <button
// // // // //                                 onClick={handleCancelEdit}
// // // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
// // // // //                               >
// // // // //                                 <X size={16} />
// // // // //                               </button>
// // // // //                             </>
// // // // //                           ) : (
// // // // //                             <>
// // // // //                               <button
// // // // //                                 onClick={() => handleEdit(trainer)}
// // // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
// // // // //                               >
// // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // //                                 </svg>
// // // // //                               </button>
// // // // //                               <button
// // // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // // //                               >
// // // // //                                 <Trash size={16} />
// // // // //                               </button>
// // // // //                             </>
// // // // //                           )}
// // // // //                         </div>
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   ))}
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // //             {filteredTrainers.map((trainer) => (
// // // // //               <div
// // // // //                 key={trainer.trainerID}
// // // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
// // // // //                 tabIndex={0}
// // // // //               >
// // // // //                 <div className="flex items-center space-x-3 md:space-x-4">
// // // // //                   {trainer.photo ? (
// // // // //                     <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden group">
// // // // //                       <img src={trainer.photo} alt={trainer.trainer_name} className="w-full h-full object-cover" />
// // // // //                       <button
// // // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // // // //                       >
// // // // //                         <Trash size={12} className="text-white" />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <button
// // // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
// // // // //                     >
// // // // //                       <User size={16} className="text-red-400" />
// // // // //                     </button>
// // // // //                   )}
// // // // //                   <div>
// // // // //                     <h3 className="text-base md:text-lg font-medium text-white">
// // // // //                       {editingId === trainer.trainerID ? (
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={editedData.trainer_name}
// // // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                         />
// // // // //                       ) : (
// // // // //                         trainer.trainer_name
// // // // //                       )}
// // // // //                     </h3>
// // // // //                     <p className="text-xs md:text-sm text-gray-300">
// // // // //                       {editingId === trainer.trainerID ? (
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           value={editedData.specialization}
// // // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                         />
// // // // //                       ) : (
// // // // //                         trainer.specialization
// // // // //                       )}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
// // // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // // //                     <span className="font-medium">Phone:</span>{" "}
// // // // //                     {editingId === trainer.trainerID ? (
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         value={editedData.phone_number}
// // // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                       />
// // // // //                     ) : (
// // // // //                       trainer.phone_number
// // // // //                     )}
// // // // //                   </p>
// // // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // // //                     <span className="font-medium">Availability:</span>{" "}
// // // // //                     {editingId === trainer.trainerID ? (
// // // // //                       <select
// // // // //                         value={editedData.availability}
// // // // //                         onChange={(e) => handleEditChange('availability', e.target.value)}
// // // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // // //                       >
// // // // //                         <option value="true">Available</option>
// // // // //                         <option value="false">Not Available</option>
// // // // //                       </select>
// // // // //                     ) : (
// // // // //                       trainer.availability ? 'Available' : 'Not Available'
// // // // //                     )}
// // // // //                   </p>
// // // // //                 </div>
// // // // //                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
// // // // //                   {editingId === trainer.trainerID ? (
// // // // //                     <>
// // // // //                       <button
// // // // //                         onClick={handleSave}
// // // // //                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // // //                       >
// // // // //                         <Save size={16} />
// // // // //                         <span className="text-xs md:text-sm">Save</span>
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={handleCancelEdit}
// // // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // // //                       >
// // // // //                         <X size={16} />
// // // // //                         <span className="text-xs md:text-sm">Cancel</span>
// // // // //                       </button>
// // // // //                     </>
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <button
// // // // //                         onClick={() => handleEdit(trainer)}
// // // // //                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // // //                       >
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // // //                         </svg>
// // // // //                         <span className="text-xs md:text-sm">Edit</span>
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // // //                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // // //                       >
// // // // //                         <Trash size={16} />
// // // // //                         <span className="text-xs md:text-sm">Delete</span>
// // // // //                       </button>
// // // // //                     </>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {deleteConfirmId && (
// // // // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // // // //           <div
// // // // //             className="absolute inset-0 bg-black opacity-60"
// // // // //             onClick={cancelDelete}
// // // // //           ></div>
// // // // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // // //             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // // //               Confirm Delete
// // // // //             </h2>
// // // // //             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
// // // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // // //             </p>
// // // // //             <div className="flex space-x-3 md:space-x-4">
// // // // //               <button
// // // // //                 onClick={cancelDelete}
// // // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // // //                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // // //           <p className="text-xs md:text-sm text-gray-300">
// // // // //             <span className="font-medium text-white">
// // // // //               {recentlyDeletedTrainer.trainer_name}
// // // // //             </span>{" "}
// // // // //             deleted
// // // // //           </p>
// // // // //           <button
// // // // //             onClick={handleUndoDelete}
// // // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded text-xs md:text-sm"
// // // // //           >
// // // // //             <Undo2 size={14} />
// // // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // // //           </button>
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

// // // // // export default TrainerManagement;
// // // // "use client";

// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import Link from 'next/link';
// // // // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // // // import { useRouter } from 'next/navigation';

// // // // const TrainerManagement = () => {
// // // //   const router = useRouter();
// // // //   const [trainers, setTrainers] = useState([]);
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [searchFocused, setSearchFocused] = useState(false);
// // // //   const [viewMode, setViewMode] = useState("table");
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const [editedData, setEditedData] = useState({});
// // // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const undoTimerRef = useRef(null);

// // // //   const fileInputRef = useRef(null);
// // // //   const searchInputRef = useRef(null);

// // // //   useEffect(() => {
// // // //     fetchTrainers();
// // // //   }, []);

// // // //   const fetchTrainers = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setTrainers(data);
// // // //       } else {
// // // //         alert('Failed to fetch trainers');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching trainers:', error);
// // // //       alert('An error occurred while fetching trainers');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleEdit = (trainer) => {
// // // //     setEditingId(trainer.trainerID);
// // // //     setEditedData({ 
// // // //       ...trainer,
// // // //       availability: {
// // // //         monday: trainer.availability?.monday || false,
// // // //         tuesday: trainer.availability?.tuesday || false,
// // // //         wednesday: trainer.availability?.wednesday || false,
// // // //         thursday: trainer.availability?.thursday || false,
// // // //         friday: trainer.availability?.friday || false,
// // // //         saturday: trainer.availability?.saturday || false,
// // // //         sunday: trainer.availability?.sunday || false
// // // //       }
// // // //     });
// // // //   };

// // // //   const handleEditChange = (field, value) => {
// // // //     if (field.startsWith('availability.')) {
// // // //       const day = field.split('.')[1];
// // // //       setEditedData(prev => ({
// // // //         ...prev,
// // // //         availability: {
// // // //           ...prev.availability,
// // // //           [day]: value === 'true' || value === true
// // // //         }
// // // //       }));
// // // //     } else {
// // // //       setEditedData(prev => ({ ...prev, [field]: value }));
// // // //     }
// // // //   };

// // // //   const handleSave = async () => {
// // // //     try {
// // // //       const formData = new FormData();
      
// // // //       // Append all fields to formData
// // // //       for (const key in editedData) {
// // // //         if (key === 'availability') {
// // // //           formData.append(key, JSON.stringify(editedData[key]));
// // // //         } else if (key !== 'passport_photo') {
// // // //           formData.append(key, editedData[key]);
// // // //         }
// // // //       }
      
// // // //       // Append photo if it's a new file
// // // //       if (fileInputRef.current?.files?.[0]) {
// // // //         formData.append('passport_photo', fileInputRef.current.files[0]);
// // // //       }

// // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // // //         method: 'PUT',
// // // //         body: formData
// // // //       });

// // // //       if (response.ok) {
// // // //         fetchTrainers();
// // // //         setEditingId(null);
// // // //         alert("Trainer details updated successfully");
// // // //       } else {
// // // //         const errorData = await response.json();
// // // //         alert(errorData.error || "Failed to update trainer details");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error updating trainer:", error);
// // // //       alert("An error occurred while updating trainer details");
// // // //     }
// // // //   };

// // // //   const handleCancelEdit = () => {
// // // //     setEditingId(null);
// // // //   };

// // // //   const handleDeleteConfirm = (id) => {
// // // //     setDeleteConfirmId(id);
// // // //   };

// // // //   const confirmDelete = async (id) => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // // //         method: 'DELETE',
// // // //       });
// // // //       if (response.ok) {
// // // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // // //         setRecentlyDeletedTrainer(trainerToDelete);
// // // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // // //         setDeleteConfirmId(null);
// // // //         setUndoTimeLeft(5);
// // // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // // //         undoTimerRef.current = setInterval(() => {
// // // //           setUndoTimeLeft(prev => {
// // // //             if (prev <= 1) {
// // // //               clearInterval(undoTimerRef.current);
// // // //               return 0;
// // // //             }
// // // //             return prev - 1;
// // // //           });
// // // //         }, 1000);
// // // //       } else {
// // // //         alert("Failed to delete trainer");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error deleting trainer:", error);
// // // //       alert("An error occurred while deleting trainer");
// // // //     }
// // // //   };

// // // //   const handleUndoDelete = async () => {
// // // //     if (recentlyDeletedTrainer) {
// // // //       try {
// // // //         const formData = new FormData();
// // // //         for (const key in recentlyDeletedTrainer) {
// // // //           if (key !== 'passport_photo') {
// // // //             formData.append(key, recentlyDeletedTrainer[key]);
// // // //           }
// // // //         }

// // // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // //           method: 'POST',
// // // //           body: formData
// // // //         });
        
// // // //         if (response.ok) {
// // // //           fetchTrainers();
// // // //           setRecentlyDeletedTrainer(null);
// // // //           clearInterval(undoTimerRef.current);
// // // //           setUndoTimeLeft(0);
// // // //         } else {
// // // //           alert("Failed to undo delete");
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error undoing delete:", error);
// // // //         alert("An error occurred while undoing delete");
// // // //       }
// // // //     }
// // // //   };

// // // //   const cancelDelete = () => {
// // // //     setDeleteConfirmId(null);
// // // //   };

// // // //   const handlePhotoUpload = (id) => {
// // // //     if (fileInputRef.current) {
// // // //       fileInputRef.current.click();
// // // //       fileInputRef.current.dataset.trainerId = id;
// // // //     }
// // // //   };

// // // //   const onPhotoSelected = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (!file) return;

// // // //     const trainerId = e.target.dataset.trainerId;
// // // //     const photoURL = URL.createObjectURL(file);

// // // //     setTrainers(trainers.map(trainer =>
// // // //       trainer.trainerID === trainerId ? { ...trainer, passport_photo: photoURL } : trainer
// // // //     ));

// // // //     e.target.value = null;
// // // //   };

// // // //   const handleDeletePhoto = async (id) => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${id}`, {
// // // //         method: 'PUT',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({ passport_photo: null, photo_mime_type: null })
// // // //       });

// // // //       if (response.ok) {
// // // //         fetchTrainers();
// // // //       } else {
// // // //         alert("Failed to delete photo");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error deleting photo:", error);
// // // //       alert("An error occurred while deleting photo");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     return () => {
// // // //       trainers.forEach(trainer => {
// // // //         if (trainer.passport_photo && trainer.passport_photo.startsWith('blob:')) {
// // // //           URL.revokeObjectURL(trainer.passport_photo);
// // // //         }
// // // //       });
// // // //     };
// // // //   }, [trainers]);

// // // //   const filteredTrainers = trainers.filter(trainer =>
// // // //     trainer.trainerID && (
// // // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // // //     )
// // // //   );

// // // //   const renderAvailability = (availability) => {
// // // //     if (!availability) return 'Not Available';
    
// // // //     const days = [];
// // // //     if (availability.monday) days.push('Mon');
// // // //     if (availability.tuesday) days.push('Tue');
// // // //     if (availability.wednesday) days.push('Wed');
// // // //     if (availability.thursday) days.push('Thu');
// // // //     if (availability.friday) days.push('Fri');
// // // //     if (availability.saturday) days.push('Sat');
// // // //     if (availability.sunday) days.push('Sun');
    
// // // //     return days.length > 0 ? days.join(', ') : 'Not Available';
// // // //   };

// // // //   if (isLoading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center h-screen bg-gray-900 text-white font-poppins">
// // // //         <div className="text-center">
// // // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // // //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full font-poppins">
// // // //       <style jsx global>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
// // // //         body {
// // // //           font-family: 'Poppins', sans-serif;
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

// // // //         @media (min-width: 768px) {
// // // //           button:focus, 
// // // //           input:focus,
// // // //           select:focus,
// // // //           a:focus,
// // // //           [tabindex]:focus,
// // // //           [role="button"]:focus {
// // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // //           }
// // // //         }

// // // //         @media (hover: none) and (pointer: coarse) {
// // // //           button:active, 
// // // //           input:active,
// // // //           select:active,
// // // //           a:active,
// // // //           [tabindex]:active,
// // // //           [role="button"]:active {
// // // //             outline: none !important;
// // // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // // //           }
// // // //         }
// // // //       `}</style>

// // // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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
// // // //               Trainers List
// // // //             </h1>
// // // //           </div>

// // // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
// // // //             <button
// // // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// // // //             >
// // // //               {viewMode === "table" ? "Card View" : "Table View"}
// // // //             </button>

// // // //             <button
// // // //               onClick={() => router.push("/add-trainer")}
// // // //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
// // // //             >
// // // //               <Plus size={20} />
// // // //               <span>Add Trainer</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // // //           <div className="relative">
// // // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // // //               <Search
// // // //                 className={`h-5 w-5 ${
// // // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // // //                 }`}
// // // //               />
// // // //             </span>
// // // //             <input
// // // //               ref={searchInputRef}
// // // //               type="text"
// // // //               placeholder="Search trainers by name or specialization..."
// // // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// // // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //               value={searchQuery}
// // // //               onFocus={() => setSearchFocused(true)}
// // // //               onBlur={() => setSearchFocused(false)}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // // //         {filteredTrainers.length === 0 ? (
// // // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // // //           </div>
// // // //         ) : viewMode === "table" ? (
// // // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full divide-y divide-gray-800">
// // // //                 <thead>
// // // //                   <tr className="bg-gray-900/50">
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Trainer ID
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Photo
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Name
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Specialization
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Phone
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Availability
// // // //                     </th>
// // // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // // //                       Actions
// // // //                     </th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody className="divide-y divide-gray-800">
// // // //                   {filteredTrainers.map((trainer) => (
// // // //                     <tr
// // // //                       key={trainer.trainerID}
// // // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // // //                     >
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // //                         {trainer.passport_photo ? (
// // // //                           <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // // //                             <img 
// // // //                               src={trainer.passport_photo.startsWith('data:') ? 
// // // //                                 trainer.passport_photo : 
// // // //                                 `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// // // //                               alt={trainer.trainer_name} 
// // // //                               className="w-full h-full object-cover" 
// // // //                             />
// // // //                             <button
// // // //                               onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // //                               className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // // //                             >
// // // //                               <Trash size={12} className="text-white" />
// // // //                             </button>
// // // //                           </div>
// // // //                         ) : (
// // // //                           <button
// // // //                             onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // //                             className="bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
// // // //                           >
// // // //                             <User size={16} className="text-red-400" />
// // // //                           </button>
// // // //                         )}
// // // //                       </td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // // //                         {editingId === trainer.trainerID ? (
// // // //                           <input
// // // //                             type="text"
// // // //                             value={editedData.trainer_name}
// // // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                           />
// // // //                         ) : (
// // // //                           trainer.trainer_name
// // // //                         )}
// // // //                       </td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // //                         {editingId === trainer.trainerID ? (
// // // //                           <input
// // // //                             type="text"
// // // //                             value={editedData.specialization}
// // // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                           />
// // // //                         ) : (
// // // //                           <div className="flex flex-wrap gap-1 md:gap-2">
// // // //                             {trainer.specialization?.split(',').map((spec, index) => (
// // // //                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-poppins">
// // // //                                 {spec.trim()}
// // // //                               </span>
// // // //                             ))}
// // // //                           </div>
// // // //                         )}
// // // //                       </td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // //                         {editingId === trainer.trainerID ? (
// // // //                           <input
// // // //                             type="text"
// // // //                             value={editedData.phone_number}
// // // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                           />
// // // //                         ) : (
// // // //                           trainer.phone_number
// // // //                         )}
// // // //                       </td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // // //                         {editingId === trainer.trainerID ? (
// // // //                           <div className="grid grid-cols-2 gap-2">
// // // //                             {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// // // //                               <label key={day} className="flex items-center space-x-2 text-xs">
// // // //                                 <input
// // // //                                   type="checkbox"
// // // //                                   checked={editedData.availability?.[day] || false}
// // // //                                   onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// // // //                                   className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// // // //                                 />
// // // //                                 <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// // // //                               </label>
// // // //                             ))}
// // // //                           </div>
// // // //                         ) : (
// // // //                           renderAvailability(trainer.availability)
// // // //                         )}
// // // //                       </td>
// // // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // // //                         <div className="flex space-x-1 md:space-x-2">
// // // //                           {editingId === trainer.trainerID ? (
// // // //                             <>
// // // //                               <button
// // // //                                 onClick={handleSave}
// // // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
// // // //                               >
// // // //                                 <Save size={16} />
// // // //                               </button>
// // // //                               <button
// // // //                                 onClick={handleCancelEdit}
// // // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
// // // //                               >
// // // //                                 <X size={16} />
// // // //                               </button>
// // // //                             </>
// // // //                           ) : (
// // // //                             <>
// // // //                               <button
// // // //                                 onClick={() => handleEdit(trainer)}
// // // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
// // // //                               >
// // // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // //                                 </svg>
// // // //                               </button>
// // // //                               <button
// // // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // // //                               >
// // // //                                 <Trash size={16} />
// // // //                               </button>
// // // //                             </>
// // // //                           )}
// // // //                         </div>
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // //             {filteredTrainers.map((trainer) => (
// // // //               <div
// // // //                 key={trainer.trainerID}
// // // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
// // // //                 tabIndex={0}
// // // //               >
// // // //                 <div className="flex items-center space-x-3 md:space-x-4">
// // // //                   {trainer.passport_photo ? (
// // // //                     <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden group">
// // // //                       <img 
// // // //                         src={trainer.passport_photo.startsWith('data:') ? 
// // // //                           trainer.passport_photo : 
// // // //                           `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// // // //                         alt={trainer.trainer_name} 
// // // //                         className="w-full h-full object-cover" 
// // // //                       />
// // // //                       <button
// // // //                         onClick={() => handleDeletePhoto(trainer.trainerID)}
// // // //                         className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // // //                       >
// // // //                         <Trash size={12} className="text-white" />
// // // //                       </button>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <button
// // // //                       onClick={() => handlePhotoUpload(trainer.trainerID)}
// // // //                       className="bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
// // // //                     >
// // // //                       <User size={16} className="text-red-400" />
// // // //                     </button>
// // // //                   )}
// // // //                   <div>
// // // //                     <h3 className="text-base md:text-lg font-medium text-white">
// // // //                       {editingId === trainer.trainerID ? (
// // // //                         <input
// // // //                           type="text"
// // // //                           value={editedData.trainer_name}
// // // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                         />
// // // //                       ) : (
// // // //                         trainer.trainer_name
// // // //                       )}
// // // //                     </h3>
// // // //                     <p className="text-xs md:text-sm text-gray-300">
// // // //                       {editingId === trainer.trainerID ? (
// // // //                         <input
// // // //                           type="text"
// // // //                           value={editedData.specialization}
// // // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                         />
// // // //                       ) : (
// // // //                         trainer.specialization
// // // //                       )}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
// // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // //                     <span className="font-medium">Phone:</span>{" "}
// // // //                     {editingId === trainer.trainerID ? (
// // // //                       <input
// // // //                         type="text"
// // // //                         value={editedData.phone_number}
// // // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full font-poppins"
// // // //                       />
// // // //                     ) : (
// // // //                       trainer.phone_number
// // // //                     )}
// // // //                   </p>
// // // //                   <p className="text-xs md:text-sm text-gray-300">
// // // //                     <span className="font-medium">Availability:</span>{" "}
// // // //                     {editingId === trainer.trainerID ? (
// // // //                       <div className="grid grid-cols-2 gap-2">
// // // //                         {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// // // //                           <label key={day} className="flex items-center space-x-2 text-xs">
// // // //                             <input
// // // //                               type="checkbox"
// // // //                               checked={editedData.availability?.[day] || false}
// // // //                               onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// // // //                               className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// // // //                             />
// // // //                             <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// // // //                           </label>
// // // //                         ))}
// // // //                       </div>
// // // //                     ) : (
// // // //                       renderAvailability(trainer.availability)
// // // //                     )}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
// // // //                   {editingId === trainer.trainerID ? (
// // // //                     <>
// // // //                       <button
// // // //                         onClick={handleSave}
// // // //                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // //                       >
// // // //                         <Save size={16} />
// // // //                         <span className="text-xs md:text-sm">Save</span>
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={handleCancelEdit}
// // // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // //                       >
// // // //                         <X size={16} />
// // // //                         <span className="text-xs md:text-sm">Cancel</span>
// // // //                       </button>
// // // //                     </>
// // // //                   ) : (
// // // //                     <>
// // // //                       <button
// // // //                         onClick={() => handleEdit(trainer)}
// // // //                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // //                       >
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // // //                         </svg>
// // // //                         <span className="text-xs md:text-sm">Edit</span>
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // // //                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // // //                       >
// // // //                         <Trash size={16} />
// // // //                         <span className="text-xs md:text-sm">Delete</span>
// // // //                       </button>
// // // //                     </>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {deleteConfirmId && (
// // // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // // //           <div
// // // //             className="absolute inset-0 bg-black opacity-60"
// // // //             onClick={cancelDelete}
// // // //           ></div>
// // // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // // //             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
// // // //               Confirm Delete
// // // //             </h2>
// // // //             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
// // // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // // //             </p>
// // // //             <div className="flex space-x-3 md:space-x-4">
// // // //               <button
// // // //                 onClick={cancelDelete}
// // // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // // //                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // // //           <p className="text-xs md:text-sm text-gray-300">
// // // //             <span className="font-medium text-white">
// // // //               {recentlyDeletedTrainer.trainer_name}
// // // //             </span>{" "}
// // // //             deleted
// // // //           </p>
// // // //           <button
// // // //             onClick={handleUndoDelete}
// // // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded text-xs md:text-sm"
// // // //           >
// // // //             <Undo2 size={14} />
// // // //             <span>Undo ({undoTimeLeft}s)</span>
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <input
// // // //         type="file"
// // // //         ref={fileInputRef}
// // // //         onChange={onPhotoSelected}
// // // //         accept="image/*"
// // // //         className="hidden"
// // // //         data-trainer-id=""
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrainerManagement;
// // // "use client";

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // // import { useRouter } from 'next/navigation';
// // // import { Poppins } from 'next/font/google';

// // // const poppins = Poppins({ 
// // //   weight: ['300', '400', '500', '600'],
// // //   subsets: ['latin'],
// // //   display: 'swap'
// // // });

// // // const TrainerManagement = () => {
// // //   const router = useRouter();
// // //   const [trainers, setTrainers] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [searchFocused, setSearchFocused] = useState(false);
// // //   const [viewMode, setViewMode] = useState("table");
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [editedData, setEditedData] = useState({});
// // //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// // //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// // //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const undoTimerRef = useRef(null);

// // //   const fileInputRef = useRef(null);
// // //   const searchInputRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchTrainers();
// // //   }, []);

// // //   const fetchTrainers = async () => {
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setTrainers(data);
// // //       } else {
// // //         alert('Failed to fetch trainers');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching trainers:', error);
// // //       alert('An error occurred while fetching trainers');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleEdit = (trainer) => {
// // //     setEditingId(trainer.trainerID);
// // //     setEditedData({ 
// // //       ...trainer,
// // //       availability: {
// // //         monday: trainer.availability?.monday || false,
// // //         tuesday: trainer.availability?.tuesday || false,
// // //         wednesday: trainer.availability?.wednesday || false,
// // //         thursday: trainer.availability?.thursday || false,
// // //         friday: trainer.availability?.friday || false,
// // //         saturday: trainer.availability?.saturday || false,
// // //         sunday: trainer.availability?.sunday || false
// // //       }
// // //     });
// // //   };

// // //   const handleEditChange = (field, value) => {
// // //     if (field.startsWith('availability.')) {
// // //       const day = field.split('.')[1];
// // //       setEditedData(prev => ({
// // //         ...prev,
// // //         availability: {
// // //           ...prev.availability,
// // //           [day]: value === 'true' || value === true
// // //         }
// // //       }));
// // //     } else {
// // //       setEditedData(prev => ({ ...prev, [field]: value }));
// // //     }
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       const formData = new FormData();
      
// // //       // Append all fields to formData
// // //       for (const key in editedData) {
// // //         if (key === 'availability') {
// // //           formData.append(key, JSON.stringify(editedData[key]));
// // //         } else if (key !== 'passport_photo') {
// // //           formData.append(key, editedData[key]);
// // //         }
// // //       }
      
// // //       // Append photo if it's a new file
// // //       if (fileInputRef.current?.files?.[0]) {
// // //         formData.append('passport_photo', fileInputRef.current.files[0]);
// // //       }

// // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// // //         method: 'PUT',
// // //         body: formData
// // //       });

// // //       if (response.ok) {
// // //         fetchTrainers();
// // //         setEditingId(null);
// // //         alert("Trainer details updated successfully");
// // //       } else {
// // //         const errorData = await response.json();
// // //         alert(errorData.error || "Failed to update trainer details");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error updating trainer:", error);
// // //       alert("An error occurred while updating trainer details");
// // //     }
// // //   };

// // //   const handleCancelEdit = () => {
// // //     setEditingId(null);
// // //   };

// // //   const handleDeleteConfirm = (id) => {
// // //     setDeleteConfirmId(id);
// // //   };

// // //   const confirmDelete = async (id) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// // //         method: 'DELETE',
// // //       });
// // //       if (response.ok) {
// // //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// // //         setRecentlyDeletedTrainer(trainerToDelete);
// // //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// // //         setDeleteConfirmId(null);
// // //         setUndoTimeLeft(5);
// // //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// // //         undoTimerRef.current = setInterval(() => {
// // //           setUndoTimeLeft(prev => {
// // //             if (prev <= 1) {
// // //               clearInterval(undoTimerRef.current);
// // //               return 0;
// // //             }
// // //             return prev - 1;
// // //           });
// // //         }, 1000);
// // //       } else {
// // //         alert("Failed to delete trainer");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error deleting trainer:", error);
// // //       alert("An error occurred while deleting trainer");
// // //     }
// // //   };

// // //   const handleUndoDelete = async () => {
// // //     if (recentlyDeletedTrainer) {
// // //       try {
// // //         const formData = new FormData();
// // //         for (const key in recentlyDeletedTrainer) {
// // //           if (key !== 'passport_photo') {
// // //             formData.append(key, recentlyDeletedTrainer[key]);
// // //           }
// // //         }

// // //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // //           method: 'POST',
// // //           body: formData
// // //         });
        
// // //         if (response.ok) {
// // //           fetchTrainers();
// // //           setRecentlyDeletedTrainer(null);
// // //           clearInterval(undoTimerRef.current);
// // //           setUndoTimeLeft(0);
// // //         } else {
// // //           alert("Failed to undo delete");
// // //         }
// // //       } catch (error) {
// // //         console.error("Error undoing delete:", error);
// // //         alert("An error occurred while undoing delete");
// // //       }
// // //     }
// // //   };

// // //   const cancelDelete = () => {
// // //     setDeleteConfirmId(null);
// // //   };

// // //   const handlePhotoUpload = (id) => {
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.click();
// // //       fileInputRef.current.dataset.trainerId = id;
// // //     }
// // //   };

// // //   const onPhotoSelected = (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     const trainerId = e.target.dataset.trainerId;
// // //     const photoURL = URL.createObjectURL(file);

// // //     setTrainers(trainers.map(trainer =>
// // //       trainer.trainerID === trainerId ? { ...trainer, passport_photo: photoURL } : trainer
// // //     ));

// // //     e.target.value = null;
// // //   };

// // //   const handleDeletePhoto = async (id) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${id}`, {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ passport_photo: null, photo_mime_type: null })
// // //       });

// // //       if (response.ok) {
// // //         fetchTrainers();
// // //       } else {
// // //         alert("Failed to delete photo");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error deleting photo:", error);
// // //       alert("An error occurred while deleting photo");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     return () => {
// // //       trainers.forEach(trainer => {
// // //         if (trainer.passport_photo && trainer.passport_photo.startsWith('blob:')) {
// // //           URL.revokeObjectURL(trainer.passport_photo);
// // //         }
// // //       });
// // //     };
// // //   }, [trainers]);

// // //   const filteredTrainers = trainers.filter(trainer =>
// // //     trainer.trainerID && (
// // //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// // //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// // //     )
// // //   );

// // //   const renderAvailability = (availability) => {
// // //     if (!availability) return 'Not Available';
    
// // //     const days = [];
// // //     if (availability.monday) days.push('Mon');
// // //     if (availability.tuesday) days.push('Tue');
// // //     if (availability.wednesday) days.push('Wed');
// // //     if (availability.thursday) days.push('Thu');
// // //     if (availability.friday) days.push('Fri');
// // //     if (availability.saturday) days.push('Sat');
// // //     if (availability.sunday) days.push('Sun');
    
// // //     return days.length > 0 ? days.join(', ') : 'Not Available';
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// // //         <div className="text-center">
// // //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// // //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// // //       {/* Global styles for focus rings and photo hover effects */}
// // //       <style jsx global>{`
// // //         /* Force focus rings to be visible on mobile */
// // //         button:focus, 
// // //         input:focus,
// // //         select:focus,
// // //         a:focus,
// // //         [tabindex]:focus,
// // //         [role="button"]:focus {
// // //           outline: none !important;
// // //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // //         }

// // //         /* For touch devices - ensure focus state appears on tap */
// // //         @media (hover: none) and (pointer: coarse) {
// // //           button:active, 
// // //           input:active,
// // //           select:active,
// // //           a:active,
// // //           [tabindex]:active,
// // //           [role="button"]:active {
// // //             outline: none !important;
// // //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// // //           }
// // //         }

// // //         /* Photo hover effect */
// // //         .trainer-photo {
// // //           transition: all 0.3s ease;
// // //           transform-origin: center center;
// // //           position: relative;
// // //         }
        
// // //         .trainer-photo:hover {
// // //           transform: scale(1.8);
// // //           z-index: 10;
// // //           box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
// // //         }

// // //         /* Container to prevent layout shift */
// // //         .photo-container {
// // //           position: relative;
// // //           width: 40px;
// // //           height: 40px;
// // //           margin: 0 auto;
// // //         }

// // //         /* For card view */
// // //         .card-photo-container {
// // //           position: relative;
// // //           width: 64px;
// // //           height: 64px;
// // //         }
// // //       `}</style>

// // //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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
// // //               Trainers List
// // //             </h1>
// // //           </div>

// // //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
// // //             <button
// // //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// // //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// // //             >
// // //               {viewMode === "table" ? "Card View" : "Table View"}
// // //             </button>

// // //             <button
// // //               onClick={() => router.push("/add-trainer")}
// // //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
// // //             >
// // //               <Plus size={20} />
// // //               <span>Add Trainer</span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// // //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// // //           <div className="relative">
// // //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// // //               <Search
// // //                 className={`h-5 w-5 ${
// // //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// // //                 }`}
// // //               />
// // //             </span>
// // //             <input
// // //               ref={searchInputRef}
// // //               type="text"
// // //               placeholder="Search trainers by name or specialization..."
// // //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// // //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// // //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// // //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// // //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //               value={searchQuery}
// // //               onFocus={() => setSearchFocused(true)}
// // //               onBlur={() => setSearchFocused(false)}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// // //         {filteredTrainers.length === 0 ? (
// // //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// // //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// // //           </div>
// // //         ) : viewMode === "table" ? (
// // //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full divide-y divide-gray-800">
// // //                 <thead>
// // //                   <tr className="bg-gray-900/50">
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Trainer ID
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Photo
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Name
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Specialization
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Phone
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Availability
// // //                     </th>
// // //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// // //                       Actions
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-gray-800">
// // //                   {filteredTrainers.map((trainer) => (
// // //                     <tr
// // //                       key={trainer.trainerID}
// // //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// // //                     >
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // //                         <div className="photo-container">
// // //                           {trainer.passport_photo ? (
// // //                             <div className="trainer-photo w-10 h-10 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// // //                               <img 
// // //                                 src={trainer.passport_photo.startsWith('data:') ? 
// // //                                   trainer.passport_photo : 
// // //                                   `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// // //                                 alt={trainer.trainer_name} 
// // //                                 className="w-full h-full object-cover" 
// // //                               />
// // //                               <button
// // //                                 onClick={() => handleDeletePhoto(trainer.trainerID)}
// // //                                 className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // //                               >
// // //                                 <Trash size={12} className="text-white" />
// // //                               </button>
// // //                             </div>
// // //                           ) : (
// // //                             <button
// // //                               onClick={() => handlePhotoUpload(trainer.trainerID)}
// // //                               className="trainer-photo bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
// // //                             >
// // //                               <User size={16} className="text-red-400" />
// // //                             </button>
// // //                           )}
// // //                         </div>
// // //                       </td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// // //                         {editingId === trainer.trainerID ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editedData.trainer_name}
// // //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                           />
// // //                         ) : (
// // //                           trainer.trainer_name
// // //                         )}
// // //                       </td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // //                         {editingId === trainer.trainerID ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editedData.specialization}
// // //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                           />
// // //                         ) : (
// // //                           <div className="flex flex-wrap gap-1 md:gap-2">
// // //                             {trainer.specialization?.split(',').map((spec, index) => (
// // //                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm">
// // //                                 {spec.trim()}
// // //                               </span>
// // //                             ))}
// // //                           </div>
// // //                         )}
// // //                       </td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // //                         {editingId === trainer.trainerID ? (
// // //                           <input
// // //                             type="text"
// // //                             value={editedData.phone_number}
// // //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                           />
// // //                         ) : (
// // //                           trainer.phone_number
// // //                         )}
// // //                       </td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// // //                         {editingId === trainer.trainerID ? (
// // //                           <div className="grid grid-cols-2 gap-2">
// // //                             {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// // //                               <label key={day} className="flex items-center space-x-2 text-xs">
// // //                                 <input
// // //                                   type="checkbox"
// // //                                   checked={editedData.availability?.[day] || false}
// // //                                   onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// // //                                   className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// // //                                 />
// // //                                 <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// // //                               </label>
// // //                             ))}
// // //                           </div>
// // //                         ) : (
// // //                           renderAvailability(trainer.availability)
// // //                         )}
// // //                       </td>
// // //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// // //                         <div className="flex space-x-1 md:space-x-2">
// // //                           {editingId === trainer.trainerID ? (
// // //                             <>
// // //                               <button
// // //                                 onClick={handleSave}
// // //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
// // //                               >
// // //                                 <Save size={16} />
// // //                               </button>
// // //                               <button
// // //                                 onClick={handleCancelEdit}
// // //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
// // //                               >
// // //                                 <X size={16} />
// // //                               </button>
// // //                             </>
// // //                           ) : (
// // //                             <>
// // //                               <button
// // //                                 onClick={() => handleEdit(trainer)}
// // //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
// // //                               >
// // //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // //                                 </svg>
// // //                               </button>
// // //                               <button
// // //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// // //                               >
// // //                                 <Trash size={16} />
// // //                               </button>
// // //                             </>
// // //                           )}
// // //                         </div>
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // //             {filteredTrainers.map((trainer) => (
// // //               <div
// // //                 key={trainer.trainerID}
// // //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
// // //                 tabIndex={0}
// // //               >
// // //                 <div className="flex items-center space-x-3 md:space-x-4">
// // //                   <div className="card-photo-container">
// // //                     {trainer.passport_photo ? (
// // //                       <div className="trainer-photo w-16 h-16 rounded-full overflow-hidden group">
// // //                         <img 
// // //                           src={trainer.passport_photo.startsWith('data:') ? 
// // //                             trainer.passport_photo : 
// // //                             `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// // //                           alt={trainer.trainer_name} 
// // //                           className="w-full h-full object-cover border border-red-500" 
// // //                         />
// // //                         <button
// // //                           onClick={() => handleDeletePhoto(trainer.trainerID)}
// // //                           className="absolute top-0 right-0 bg-red-500 rounded-full p-1 shadow-lg transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
// // //                         >
// // //                           <Trash size={12} className="text-white" />
// // //                         </button>
// // //                       </div>
// // //                     ) : (
// // //                       <button
// // //                         onClick={() => handlePhotoUpload(trainer.trainerID)}
// // //                         className="trainer-photo bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
// // //                       >
// // //                         <User size={16} className="text-red-400" />
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-base md:text-lg font-medium text-white">
// // //                       {editingId === trainer.trainerID ? (
// // //                         <input
// // //                           type="text"
// // //                           value={editedData.trainer_name}
// // //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                         />
// // //                       ) : (
// // //                         trainer.trainer_name
// // //                       )}
// // //                     </h3>
// // //                     <p className="text-xs md:text-sm text-gray-300">
// // //                       {editingId === trainer.trainerID ? (
// // //                         <input
// // //                           type="text"
// // //                           value={editedData.specialization}
// // //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// // //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                         />
// // //                       ) : (
// // //                         trainer.specialization
// // //                       )}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
// // //                   <p className="text-xs md:text-sm text-gray-300">
// // //                     <span className="font-medium">Phone:</span>{" "}
// // //                     {editingId === trainer.trainerID ? (
// // //                       <input
// // //                         type="text"
// // //                         value={editedData.phone_number}
// // //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// // //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// // //                       />
// // //                     ) : (
// // //                       trainer.phone_number
// // //                     )}
// // //                   </p>
// // //                   <p className="text-xs md:text-sm text-gray-300">
// // //                     <span className="font-medium">Availability:</span>{" "}
// // //                     {editingId === trainer.trainerID ? (
// // //                       <div className="grid grid-cols-2 gap-2">
// // //                         {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// // //                           <label key={day} className="flex items-center space-x-2 text-xs">
// // //                             <input
// // //                               type="checkbox"
// // //                               checked={editedData.availability?.[day] || false}
// // //                               onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// // //                               className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// // //                             />
// // //                             <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// // //                           </label>
// // //                         ))}
// // //                       </div>
// // //                     ) : (
// // //                       renderAvailability(trainer.availability)
// // //                     )}
// // //                   </p>
// // //                 </div>
// // //                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
// // //                   {editingId === trainer.trainerID ? (
// // //                     <>
// // //                       <button
// // //                         onClick={handleSave}
// // //                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // //                       >
// // //                         <Save size={16} />
// // //                         <span className="text-xs md:text-sm">Save</span>
// // //                       </button>
// // //                       <button
// // //                         onClick={handleCancelEdit}
// // //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // //                       >
// // //                         <X size={16} />
// // //                         <span className="text-xs md:text-sm">Cancel</span>
// // //                       </button>
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <button
// // //                         onClick={() => handleEdit(trainer)}
// // //                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // //                       >
// // //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// // //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// // //                         </svg>
// // //                         <span className="text-xs md:text-sm">Edit</span>
// // //                       </button>
// // //                       <button
// // //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// // //                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// // //                       >
// // //                         <Trash size={16} />
// // //                         <span className="text-xs md:text-sm">Delete</span>
// // //                       </button>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {deleteConfirmId && (
// // //         <div className="fixed inset-0 flex items-center justify-center z-50">
// // //           <div
// // //             className="absolute inset-0 bg-black opacity-60"
// // //             onClick={cancelDelete}
// // //           ></div>
// // //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// // //             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
// // //               Confirm Delete
// // //             </h2>
// // //             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
// // //               Are you sure you want to delete this trainer? This action cannot be undone.
// // //             </p>
// // //             <div className="flex space-x-3 md:space-x-4">
// // //               <button
// // //                 onClick={cancelDelete}
// // //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={() => confirmDelete(deleteConfirmId)}
// // //                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// // //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// // //           <p className="text-xs md:text-sm text-gray-300">
// // //             <span className="font-medium text-white">
// // //               {recentlyDeletedTrainer.trainer_name}
// // //             </span>{" "}
// // //             deleted
// // //           </p>
// // //           <button
// // //             onClick={handleUndoDelete}
// // //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded text-xs md:text-sm"
// // //           >
// // //             <Undo2 size={14} />
// // //             <span>Undo ({undoTimeLeft}s)</span>
// // //           </button>
// // //         </div>
// // //       )}

// // //       <input
// // //         type="file"
// // //         ref={fileInputRef}
// // //         onChange={onPhotoSelected}
// // //         accept="image/*"
// // //         className="hidden"
// // //         data-trainer-id=""
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default TrainerManagement;
// // "use client";

// // import React, { useState, useRef, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// // import { useRouter } from 'next/navigation';
// // import { Poppins } from 'next/font/google';

// // const poppins = Poppins({ 
// //   weight: ['300', '400', '500', '600'],
// //   subsets: ['latin'],
// //   display: 'swap'
// // });

// // const TrainerManagement = () => {
// //   const router = useRouter();
// //   const [trainers, setTrainers] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [searchFocused, setSearchFocused] = useState(false);
// //   const [viewMode, setViewMode] = useState("table");
// //   const [editingId, setEditingId] = useState(null);
// //   const [editedData, setEditedData] = useState({});
// //   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
// //   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
// //   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const undoTimerRef = useRef(null);

// //   const fileInputRef = useRef(null);
// //   const searchInputRef = useRef(null);

// //   useEffect(() => {
// //     fetchTrainers();
// //   }, []);

// //   const fetchTrainers = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('http://localhost:5000/api/admin/trainers');
// //       if (response.ok) {
// //         const data = await response.json();
// //         setTrainers(data);
// //       } else {
// //         alert('Failed to fetch trainers');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching trainers:', error);
// //       alert('An error occurred while fetching trainers');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleEdit = (trainer) => {
// //     setEditingId(trainer.trainerID);
// //     setEditedData({ 
// //       ...trainer,
// //       availability: {
// //         monday: trainer.availability?.monday || false,
// //         tuesday: trainer.availability?.tuesday || false,
// //         wednesday: trainer.availability?.wednesday || false,
// //         thursday: trainer.availability?.thursday || false,
// //         friday: trainer.availability?.friday || false,
// //         saturday: trainer.availability?.saturday || false,
// //         sunday: trainer.availability?.sunday || false
// //       }
// //     });
// //   };

// //   const handleEditChange = (field, value) => {
// //     if (field.startsWith('availability.')) {
// //       const day = field.split('.')[1];
// //       setEditedData(prev => ({
// //         ...prev,
// //         availability: {
// //           ...prev.availability,
// //           [day]: value === 'true' || value === true
// //         }
// //       }));
// //     } else {
// //       setEditedData(prev => ({ ...prev, [field]: value }));
// //     }
// //   };

// //   const handleSave = async () => {
// //     try {
// //       const formData = new FormData();
      
// //       // Append all fields to formData
// //       for (const key in editedData) {
// //         if (key === 'availability') {
// //           formData.append(key, JSON.stringify(editedData[key]));
// //         } else if (key !== 'passport_photo') {
// //           formData.append(key, editedData[key]);
// //         }
// //       }
      
// //       // Append photo if it's a new file
// //       if (fileInputRef.current?.files?.[0]) {
// //         formData.append('passport_photo', fileInputRef.current.files[0]);
// //       }

// //       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
// //         method: 'PUT',
// //         body: formData
// //       });

// //       if (response.ok) {
// //         fetchTrainers();
// //         setEditingId(null);
// //         alert("Trainer details updated successfully");
// //       } else {
// //         const errorData = await response.json();
// //         alert(errorData.error || "Failed to update trainer details");
// //       }
// //     } catch (error) {
// //       console.error("Error updating trainer:", error);
// //       alert("An error occurred while updating trainer details");
// //     }
// //   };

// //   const handleCancelEdit = () => {
// //     setEditingId(null);
// //   };

// //   const handleDeleteConfirm = (id) => {
// //     setDeleteConfirmId(id);
// //   };

// //   const confirmDelete = async (id) => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
// //         method: 'DELETE',
// //       });
// //       if (response.ok) {
// //         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
// //         setRecentlyDeletedTrainer(trainerToDelete);
// //         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
// //         setDeleteConfirmId(null);
// //         setUndoTimeLeft(5);
// //         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
// //         undoTimerRef.current = setInterval(() => {
// //           setUndoTimeLeft(prev => {
// //             if (prev <= 1) {
// //               clearInterval(undoTimerRef.current);
// //               return 0;
// //             }
// //             return prev - 1;
// //           });
// //         }, 1000);
// //       } else {
// //         alert("Failed to delete trainer");
// //       }
// //     } catch (error) {
// //       console.error("Error deleting trainer:", error);
// //       alert("An error occurred while deleting trainer");
// //     }
// //   };

// //   const handleUndoDelete = async () => {
// //     if (recentlyDeletedTrainer) {
// //       try {
// //         const formData = new FormData();
// //         for (const key in recentlyDeletedTrainer) {
// //           if (key !== 'passport_photo') {
// //             formData.append(key, recentlyDeletedTrainer[key]);
// //           }
// //         }

// //         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// //           method: 'POST',
// //           body: formData
// //         });
        
// //         if (response.ok) {
// //           fetchTrainers();
// //           setRecentlyDeletedTrainer(null);
// //           clearInterval(undoTimerRef.current);
// //           setUndoTimeLeft(0);
// //         } else {
// //           alert("Failed to undo delete");
// //         }
// //       } catch (error) {
// //         console.error("Error undoing delete:", error);
// //         alert("An error occurred while undoing delete");
// //       }
// //     }
// //   };

// //   const cancelDelete = () => {
// //     setDeleteConfirmId(null);
// //   };

// //   const handlePhotoUpload = (id) => {
// //     if (fileInputRef.current) {
// //       fileInputRef.current.click();
// //       fileInputRef.current.dataset.trainerId = id;
// //     }
// //   };

// //   const onPhotoSelected = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const trainerId = e.target.dataset.trainerId;
// //     const photoURL = URL.createObjectURL(file);

// //     setTrainers(trainers.map(trainer =>
// //       trainer.trainerID === trainerId ? { ...trainer, passport_photo: photoURL } : trainer
// //     ));

// //     e.target.value = null;
// //   };

// //   useEffect(() => {
// //     return () => {
// //       trainers.forEach(trainer => {
// //         if (trainer.passport_photo && trainer.passport_photo.startsWith('blob:')) {
// //           URL.revokeObjectURL(trainer.passport_photo);
// //         }
// //       });
// //     };
// //   }, [trainers]);

// //   const filteredTrainers = trainers.filter(trainer =>
// //     trainer.trainerID && (
// //       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
// //       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
// //     )
// //   );

// //   const renderAvailability = (availability) => {
// //     if (!availability) return 'Not Available';
    
// //     const days = [];
// //     if (availability.monday) days.push('Mon');
// //     if (availability.tuesday) days.push('Tue');
// //     if (availability.wednesday) days.push('Wed');
// //     if (availability.thursday) days.push('Thu');
// //     if (availability.friday) days.push('Fri');
// //     if (availability.saturday) days.push('Sat');
// //     if (availability.sunday) days.push('Sun');
    
// //     return days.length > 0 ? days.join(', ') : 'Not Available';
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
// //           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
// //       {/* Global styles for focus rings and photo hover effects */}
// //       <style jsx global>{`
// //         /* Force focus rings to be visible on mobile */
// //         button:focus, 
// //         input:focus,
// //         select:focus,
// //         a:focus,
// //         [tabindex]:focus,
// //         [role="button"]:focus {
// //           outline: none !important;
// //           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// //         }

// //         /* For touch devices - ensure focus state appears on tap */
// //         @media (hover: none) and (pointer: coarse) {
// //           button:active, 
// //           input:active,
// //           select:active,
// //           a:active,
// //           [tabindex]:active,
// //           [role="button"]:active {
// //             outline: none !important;
// //             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
// //           }
// //         }

// //         /* Photo hover effect */
// //         .trainer-photo {
// //           transition: all 0.3s ease;
// //           transform-origin: center center;
// //           position: relative;
// //         }
        
// //         .trainer-photo:hover {
// //           transform: scale(1.8);
// //           z-index: 10;
// //           box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
// //         }

// //         /* Container to prevent layout shift */
// //         .photo-container {
// //           position: relative;
// //           width: 40px;
// //           height: 40px;
// //           margin: 0 auto;
// //         }

// //         /* For card view */
// //         .card-photo-container {
// //           position: relative;
// //           width: 64px;
// //           height: 64px;
// //         }
// //       `}</style>

// //       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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
// //               Trainers List
// //             </h1>
// //           </div>

// //           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
// //             <button
// //               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
// //               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
// //             >
// //               {viewMode === "table" ? "Card View" : "Table View"}
// //             </button>

// //             <button
// //               onClick={() => router.push("/add-trainer")}
// //               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
// //             >
// //               <Plus size={20} />
// //               <span>Add Trainer</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
// //         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
// //           <div className="relative">
// //             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
// //               <Search
// //                 className={`h-5 w-5 ${
// //                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
// //                 }`}
// //               />
// //             </span>
// //             <input
// //               ref={searchInputRef}
// //               type="text"
// //               placeholder="Search trainers by name or specialization..."
// //               className={`w-full bg-gray-800/50 backdrop-blur-sm border
// //                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
// //                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
// //                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
// //                 text-sm md:text-lg bg-white dark:bg-gray-800`}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               value={searchQuery}
// //               onFocus={() => setSearchFocused(true)}
// //               onBlur={() => setSearchFocused(false)}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full px-4 md:px-8 pt-6 md:pt-10 pb-12">
// //         {filteredTrainers.length === 0 ? (
// //           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
// //             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
// //           </div>
// //         ) : viewMode === "table" ? (
// //           <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10">
// //             <div className="overflow-x-auto">
// //               <table className="w-full divide-y divide-gray-800">
// //                 <thead>
// //                   <tr className="bg-gray-900/50">
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Trainer ID
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Photo
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Name
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Specialization
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Phone
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Availability
// //                     </th>
// //                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
// //                       Actions
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y divide-gray-800">
// //                   {filteredTrainers.map((trainer) => (
// //                     <tr
// //                       key={trainer.trainerID}
// //                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
// //                     >
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// //                         <div className="photo-container">
// //                           {trainer.passport_photo ? (
// //                             <div className="trainer-photo w-10 h-10 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
// //                               <img 
// //                                 src={trainer.passport_photo.startsWith('data:') ? 
// //                                   trainer.passport_photo : 
// //                                   `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// //                                 alt={trainer.trainer_name} 
// //                                 className="w-full h-full object-cover" 
// //                               />
// //                             </div>
// //                           ) : (
// //                             <button
// //                               onClick={() => handlePhotoUpload(trainer.trainerID)}
// //                               className="trainer-photo bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
// //                             >
// //                               <User size={16} className="text-red-400" />
// //                             </button>
// //                           )}
// //                         </div>
// //                       </td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
// //                         {editingId === trainer.trainerID ? (
// //                           <input
// //                             type="text"
// //                             value={editedData.trainer_name}
// //                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                           />
// //                         ) : (
// //                           trainer.trainer_name
// //                         )}
// //                       </td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// //                         {editingId === trainer.trainerID ? (
// //                           <input
// //                             type="text"
// //                             value={editedData.specialization}
// //                             onChange={(e) => handleEditChange('specialization', e.target.value)}
// //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                           />
// //                         ) : (
// //                           <div className="flex flex-wrap gap-1 md:gap-2">
// //                             {trainer.specialization?.split(',').map((spec, index) => (
// //                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm">
// //                                 {spec.trim()}
// //                               </span>
// //                             ))}
// //                           </div>
// //                         )}
// //                       </td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// //                         {editingId === trainer.trainerID ? (
// //                           <input
// //                             type="text"
// //                             value={editedData.phone_number}
// //                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
// //                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                           />
// //                         ) : (
// //                           trainer.phone_number
// //                         )}
// //                       </td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
// //                         {editingId === trainer.trainerID ? (
// //                           <div className="grid grid-cols-2 gap-2">
// //                             {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// //                               <label key={day} className="flex items-center space-x-2 text-xs">
// //                                 <input
// //                                   type="checkbox"
// //                                   checked={editedData.availability?.[day] || false}
// //                                   onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// //                                   className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// //                                 />
// //                                 <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// //                               </label>
// //                             ))}
// //                           </div>
// //                         ) : (
// //                           renderAvailability(trainer.availability)
// //                         )}
// //                       </td>
// //                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
// //                         <div className="flex space-x-1 md:space-x-2">
// //                           {editingId === trainer.trainerID ? (
// //                             <>
// //                               <button
// //                                 onClick={handleSave}
// //                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
// //                               >
// //                                 <Save size={16} />
// //                               </button>
// //                               <button
// //                                 onClick={handleCancelEdit}
// //                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
// //                               >
// //                                 <X size={16} />
// //                               </button>
// //                             </>
// //                           ) : (
// //                             <>
// //                               <button
// //                                 onClick={() => handleEdit(trainer)}
// //                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
// //                               >
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// //                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// //                                 </svg>
// //                               </button>
// //                               <button
// //                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
// //                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
// //                               >
// //                                 <Trash size={16} />
// //                               </button>
// //                             </>
// //                           )}
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //             {filteredTrainers.map((trainer) => (
// //               <div
// //                 key={trainer.trainerID}
// //                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
// //                 tabIndex={0}
// //               >
// //                 <div className="flex items-center space-x-3 md:space-x-4">
// //                   <div className="card-photo-container">
// //                     {trainer.passport_photo ? (
// //                       <div className="trainer-photo w-16 h-16 rounded-full overflow-hidden group">
// //                         <img 
// //                           src={trainer.passport_photo.startsWith('data:') ? 
// //                             trainer.passport_photo : 
// //                             `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
// //                           alt={trainer.trainer_name} 
// //                           className="w-full h-full object-cover border border-red-500" 
// //                         />
// //                       </div>
// //                     ) : (
// //                       <button
// //                         onClick={() => handlePhotoUpload(trainer.trainerID)}
// //                         className="trainer-photo bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
// //                       >
// //                         <User size={16} className="text-red-400" />
// //                       </button>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <h3 className="text-base md:text-lg font-medium text-white">
// //                       {editingId === trainer.trainerID ? (
// //                         <input
// //                           type="text"
// //                           value={editedData.trainer_name}
// //                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
// //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                         />
// //                       ) : (
// //                         trainer.trainer_name
// //                       )}
// //                     </h3>
// //                     <p className="text-xs md:text-sm text-gray-300">
// //                       {editingId === trainer.trainerID ? (
// //                         <input
// //                           type="text"
// //                           value={editedData.specialization}
// //                           onChange={(e) => handleEditChange('specialization', e.target.value)}
// //                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                         />
// //                       ) : (
// //                         trainer.specialization
// //                       )}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
// //                   <p className="text-xs md:text-sm text-gray-300">
// //                     <span className="font-medium">Phone:</span>{" "}
// //                     {editingId === trainer.trainerID ? (
// //                       <input
// //                         type="text"
// //                         value={editedData.phone_number}
// //                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
// //                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
// //                       />
// //                     ) : (
// //                       trainer.phone_number
// //                     )}
// //                   </p>
// //                   <p className="text-xs md:text-sm text-gray-300">
// //                     <span className="font-medium">Availability:</span>{" "}
// //                     {editingId === trainer.trainerID ? (
// //                       <div className="grid grid-cols-2 gap-2">
// //                         {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
// //                           <label key={day} className="flex items-center space-x-2 text-xs">
// //                             <input
// //                               type="checkbox"
// //                               checked={editedData.availability?.[day] || false}
// //                               onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
// //                               className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
// //                             />
// //                             <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
// //                           </label>
// //                         ))}
// //                       </div>
// //                     ) : (
// //                       renderAvailability(trainer.availability)
// //                     )}
// //                   </p>
// //                 </div>
// //                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
// //                   {editingId === trainer.trainerID ? (
// //                     <>
// //                       <button
// //                         onClick={handleSave}
// //                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// //                       >
// //                         <Save size={16} />
// //                         <span className="text-xs md:text-sm">Save</span>
// //                       </button>
// //                       <button
// //                         onClick={handleCancelEdit}
// //                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// //                       >
// //                         <X size={16} />
// //                         <span className="text-xs md:text-sm">Cancel</span>
// //                       </button>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <button
// //                         onClick={() => handleEdit(trainer)}
// //                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// //                       >
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
// //                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
// //                         </svg>
// //                         <span className="text-xs md:text-sm">Edit</span>
// //                       </button>
// //                       <button
// //                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
// //                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
// //                       >
// //                         <Trash size={16} />
// //                         <span className="text-xs md:text-sm">Delete</span>
// //                       </button>
// //                     </>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {deleteConfirmId && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50">
// //           <div
// //             className="absolute inset-0 bg-black opacity-60"
// //             onClick={cancelDelete}
// //           ></div>
// //           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
// //             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
// //               Confirm Delete
// //             </h2>
// //             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
// //               Are you sure you want to delete this trainer? This action cannot be undone.
// //             </p>
// //             <div className="flex space-x-3 md:space-x-4">
// //               <button
// //                 onClick={cancelDelete}
// //                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={() => confirmDelete(deleteConfirmId)}
// //                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
// //         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
// //           <p className="text-xs md:text-sm text-gray-300">
// //             <span className="font-medium text-white">
// //               {recentlyDeletedTrainer.trainer_name}
// //             </span>{" "}
// //             deleted
// //           </p>
// //           <button
// //             onClick={handleUndoDelete}
// //             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded text-xs md:text-sm"
// //           >
// //             <Undo2 size={14} />
// //             <span>Undo ({undoTimeLeft}s)</span>
// //           </button>
// //         </div>
// //       )}

// //       <input
// //         type="file"
// //         ref={fileInputRef}
// //         onChange={onPhotoSelected}
// //         accept="image/*"
// //         className="hidden"
// //         data-trainer-id=""
// //       />
// //     </div>
// //   );
// // };

// // export default TrainerManagement;
// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { Poppins } from 'next/font/google';

// const poppins = Poppins({ 
//   weight: ['300', '400', '500', '600'],
//   subsets: ['latin'],
//   display: 'swap'
// });

// const TrainerManagement = () => {
//   const router = useRouter();
//   const [trainers, setTrainers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [viewMode, setViewMode] = useState("table");
//   const [editingId, setEditingId] = useState(null);
//   const [editedData, setEditedData] = useState({});
//   const [deleteConfirmId, setDeleteConfirmId] = useState(null);
//   const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
//   const [undoTimeLeft, setUndoTimeLeft] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showTable, setShowTable] = useState(true);
//   const undoTimerRef = useRef(null);
//   const tableContainerRef = useRef(null);

//   const fileInputRef = useRef(null);
//   const searchInputRef = useRef(null);

//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   // Handle scroll for mobile view
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerWidth >= 768) return;
      
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         setShowTable(true);
//       } else {
//         setShowTable(false);
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   const fetchTrainers = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/trainers');
//       if (response.ok) {
//         const data = await response.json();
//         setTrainers(data);
//       } else {
//         alert('Failed to fetch trainers');
//       }
//     } catch (error) {
//       console.error('Error fetching trainers:', error);
//       alert('An error occurred while fetching trainers');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEdit = (trainer) => {
//     setEditingId(trainer.trainerID);
//     setEditedData({ 
//       ...trainer,
//       availability: {
//         monday: trainer.availability?.monday || false,
//         tuesday: trainer.availability?.tuesday || false,
//         wednesday: trainer.availability?.wednesday || false,
//         thursday: trainer.availability?.thursday || false,
//         friday: trainer.availability?.friday || false,
//         saturday: trainer.availability?.saturday || false,
//         sunday: trainer.availability?.sunday || false
//       }
//     });
//   };

//   const handleEditChange = (field, value) => {
//     if (field.startsWith('availability.')) {
//       const day = field.split('.')[1];
//       setEditedData(prev => ({
//         ...prev,
//         availability: {
//           ...prev.availability,
//           [day]: value === 'true' || value === true
//         }
//       }));
//     } else {
//       setEditedData(prev => ({ ...prev, [field]: value }));
//     }
//   };

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
      
//       for (const key in editedData) {
//         if (key === 'availability') {
//           formData.append(key, JSON.stringify(editedData[key]));
//         } else if (key !== 'passport_photo') {
//           formData.append(key, editedData[key]);
//         }
//       }
      
//       if (fileInputRef.current?.files?.[0]) {
//         formData.append('passport_photo', fileInputRef.current.files[0]);
//       }

//       const response = await fetch(`http://localhost:5000/api/admin/trainers/edit/${editingId}`, {
//         method: 'PUT',
//         body: formData
//       });

//       if (response.ok) {
//         fetchTrainers();
//         setEditingId(null);
//         alert("Trainer details updated successfully");
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || "Failed to update trainer details");
//       }
//     } catch (error) {
//       console.error("Error updating trainer:", error);
//       alert("An error occurred while updating trainer details");
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//   };

//   const handleDeleteConfirm = (id) => {
//     setDeleteConfirmId(id);
//   };

//   const confirmDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/admin/trainers/delete/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
//         setRecentlyDeletedTrainer(trainerToDelete);
//         setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
//         setDeleteConfirmId(null);
//         setUndoTimeLeft(5);
//         if (undoTimerRef.current) clearInterval(undoTimerRef.current);
//         undoTimerRef.current = setInterval(() => {
//           setUndoTimeLeft(prev => {
//             if (prev <= 1) {
//               clearInterval(undoTimerRef.current);
//               return 0;
//             }
//             return prev - 1;
//           });
//         }, 1000);
//       } else {
//         alert("Failed to delete trainer");
//       }
//     } catch (error) {
//       console.error("Error deleting trainer:", error);
//       alert("An error occurred while deleting trainer");
//     }
//   };

//   const handleUndoDelete = async () => {
//     if (recentlyDeletedTrainer) {
//       try {
//         const formData = new FormData();
//         for (const key in recentlyDeletedTrainer) {
//           if (key !== 'passport_photo') {
//             formData.append(key, recentlyDeletedTrainer[key]);
//           }
//         }

//         const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
//           method: 'POST',
//           body: formData
//         });
        
//         if (response.ok) {
//           fetchTrainers();
//           setRecentlyDeletedTrainer(null);
//           clearInterval(undoTimerRef.current);
//           setUndoTimeLeft(0);
//         } else {
//           alert("Failed to undo delete");
//         }
//       } catch (error) {
//         console.error("Error undoing delete:", error);
//         alert("An error occurred while undoing delete");
//       }
//     }
//   };

//   const cancelDelete = () => {
//     setDeleteConfirmId(null);
//   };

//   const handlePhotoUpload = (id) => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//       fileInputRef.current.dataset.trainerId = id;
//     }
//   };

//   const onPhotoSelected = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const trainerId = e.target.dataset.trainerId;
//     const photoURL = URL.createObjectURL(file);

//     setTrainers(trainers.map(trainer =>
//       trainer.trainerID === trainerId ? { ...trainer, passport_photo: photoURL } : trainer
//     ));

//     e.target.value = null;
//   };

//   useEffect(() => {
//     return () => {
//       trainers.forEach(trainer => {
//         if (trainer.passport_photo && trainer.passport_photo.startsWith('blob:')) {
//           URL.revokeObjectURL(trainer.passport_photo);
//         }
//       });
//     };
//   }, [trainers]);

//   const filteredTrainers = trainers.filter(trainer =>
//     trainer.trainerID && (
//       (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
//       (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
//     )
//   );

//   const renderAvailability = (availability) => {
//     if (!availability) return 'Not Available';
    
//     const days = [];
//     if (availability.monday) days.push('Mon');
//     if (availability.tuesday) days.push('Tue');
//     if (availability.wednesday) days.push('Wed');
//     if (availability.thursday) days.push('Thu');
//     if (availability.friday) days.push('Fri');
//     if (availability.saturday) days.push('Sat');
//     if (availability.sunday) days.push('Sun');
    
//     return days.length > 0 ? days.join(', ') : 'Not Available';
//   };

//   if (isLoading) {
//     return (
//       <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
//           <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.className}`}>
//       <style jsx global>{`
//         button:focus, 
//         input:focus,
//         select:focus,
//         a:focus,
//         [tabindex]:focus,
//         [role="button"]:focus {
//           outline: none !important;
//           box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
//         }

//         @media (hover: none) and (pointer: coarse) {
//           button:active, 
//           input:active,
//           select:active,
//           a:active,
//           [tabindex]:active,
//           [role="button"]:active {
//             outline: none !important;
//             box-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5) !important;
//           }
//         }

//         .trainer-photo {
//           transition: all 0.3s ease;
//           transform-origin: center center;
//           position: relative;
//         }
        
//         .trainer-photo:hover {
//           transform: scale(1.8);
//           z-index: 10;
//           box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
//         }

//         .photo-container {
//           position: relative;
//           width: 40px;
//           height: 40px;
//           margin: 0 auto;
//         }

//         .card-photo-container {
//           position: relative;
//           width: 64px;
//           height: 64px;
//         }

//         /* Custom scrollbar styles */
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: #4b5563 #1f2937;
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//           height: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #1f2937;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #4b5563;
//           border-radius: 10px;
//           border: 2px solid #1f2937;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background-color: #6b7280;
//         }
//       `}</style>

//       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
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
//               Trainers List
//             </h1>
//           </div>

//           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
//             <button
//               onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
//               className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
//             >
//               {viewMode === "table" ? "Card View" : "Table View"}
//             </button>

//             <button
//               onClick={() => router.push("/add-trainer")}
//               className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
//             >
//               <Plus size={20} />
//               <span>Add Trainer</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
//         <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
//               <Search
//                 className={`h-5 w-5 ${
//                   searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
//                 }`}
//               />
//             </span>
//             <input
//               ref={searchInputRef}
//               type="text"
//               placeholder="Search trainers by name or specialization..."
//               className={`w-full bg-gray-800/50 backdrop-blur-sm border
//                 border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
//                 dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
//                 text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
//                 text-sm md:text-lg bg-white dark:bg-gray-800`}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               value={searchQuery}
//               onFocus={() => setSearchFocused(true)}
//               onBlur={() => setSearchFocused(false)}
//             />
//           </div>
//         </div>
//       </div>

//       <div className={`w-full px-4 md:px-8 pt-6 md:pt-10 pb-12 transition-transform duration-300 ${!showTable && window.innerWidth < 768 ? 'translate-y-full' : 'translate-y-0'}`}>
//         {filteredTrainers.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
//             <p className="text-xl md:text-2xl font-light tracking-wider">No trainers found.</p>
//           </div>
//         ) : viewMode === "table" ? (
//           <div 
//             ref={tableContainerRef}
//             className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 custom-scrollbar"
//             style={{
//               maxHeight: 'calc(100vh - 220px)',
//               overflow: 'auto'
//             }}
//           >
//             <div className="overflow-x-auto">
//               <table className="w-full divide-y divide-gray-800">
//                 <thead className="bg-gray-900/50 sticky top-0 z-10">
//                   <tr>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Trainer ID
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Photo
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Specialization
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Phone
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Availability
//                     </th>
//                     <th className="py-3 md:py-5 px-4 md:px-6 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-800">
//                   {filteredTrainers.map((trainer) => (
//                     <tr
//                       key={trainer.trainerID}
//                       className="hover:bg-gray-700/30 transition-colors duration-300 group"
//                     >
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light">{trainer.trainerID}</td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
//                         <div className="photo-container">
//                           {trainer.passport_photo ? (
//                             <div className="trainer-photo w-10 h-10 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
//                               <img 
//                                 src={trainer.passport_photo.startsWith('data:') ? 
//                                   trainer.passport_photo : 
//                                   `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
//                                 alt={trainer.trainer_name} 
//                                 className="w-full h-full object-cover" 
//                               />
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => handlePhotoUpload(trainer.trainerID)}
//                               className="trainer-photo bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
//                             >
//                               <User size={16} className="text-red-400" />
//                             </button>
//                           )}
//                         </div>
//                       </td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-medium text-white">
//                         {editingId === trainer.trainerID ? (
//                           <input
//                             type="text"
//                             value={editedData.trainer_name}
//                             onChange={(e) => handleEditChange('trainer_name', e.target.value)}
//                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                           />
//                         ) : (
//                           trainer.trainer_name
//                         )}
//                       </td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
//                         {editingId === trainer.trainerID ? (
//                           <input
//                             type="text"
//                             value={editedData.specialization}
//                             onChange={(e) => handleEditChange('specialization', e.target.value)}
//                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                           />
//                         ) : (
//                           <div className="flex flex-wrap gap-1 md:gap-2">
//                             {trainer.specialization?.split(',').map((spec, index) => (
//                               <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm">
//                                 {spec.trim()}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
//                         {editingId === trainer.trainerID ? (
//                           <input
//                             type="text"
//                             value={editedData.phone_number}
//                             onChange={(e) => handleEditChange('phone_number', e.target.value)}
//                             className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                           />
//                         ) : (
//                           trainer.phone_number
//                         )}
//                       </td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm font-light text-gray-300">
//                         {editingId === trainer.trainerID ? (
//                           <div className="grid grid-cols-2 gap-2">
//                             {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
//                               <label key={day} className="flex items-center space-x-2 text-xs">
//                                 <input
//                                   type="checkbox"
//                                   checked={editedData.availability?.[day] || false}
//                                   onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
//                                   className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
//                                 />
//                                 <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
//                               </label>
//                             ))}
//                           </div>
//                         ) : (
//                           renderAvailability(trainer.availability)
//                         )}
//                       </td>
//                       <td className="py-3 md:py-5 px-4 md:px-6 text-sm">
//                         <div className="flex space-x-1 md:space-x-2">
//                           {editingId === trainer.trainerID ? (
//                             <>
//                               <button
//                                 onClick={handleSave}
//                                 className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
//                               >
//                                 <Save size={16} />
//                               </button>
//                               <button
//                                 onClick={handleCancelEdit}
//                                 className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
//                               >
//                                 <X size={16} />
//                               </button>
//                             </>
//                           ) : (
//                             <>
//                               <button
//                                 onClick={() => handleEdit(trainer)}
//                                 className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
//                               >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                   <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
//                                   <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
//                                 </svg>
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteConfirm(trainer.trainerID)}
//                                 className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
//                               >
//                                 <Trash size={16} />
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {filteredTrainers.map((trainer) => (
//               <div
//                 key={trainer.trainerID}
//                 className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
//                 tabIndex={0}
//               >
//                 <div className="flex items-center space-x-3 md:space-x-4">
//                   <div className="card-photo-container">
//                     {trainer.passport_photo ? (
//                       <div className="trainer-photo w-16 h-16 rounded-full overflow-hidden group">
//                         <img 
//                           src={trainer.passport_photo.startsWith('data:') ? 
//                             trainer.passport_photo : 
//                             `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
//                           alt={trainer.trainer_name} 
//                           className="w-full h-full object-cover border border-red-500" 
//                         />
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => handlePhotoUpload(trainer.trainerID)}
//                         className="trainer-photo bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
//                       >
//                         <User size={16} className="text-red-400" />
//                       </button>
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="text-base md:text-lg font-medium text-white">
//                       {editingId === trainer.trainerID ? (
//                         <input
//                           type="text"
//                           value={editedData.trainer_name}
//                           onChange={(e) => handleEditChange('trainer_name', e.target.value)}
//                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                         />
//                       ) : (
//                         trainer.trainer_name
//                       )}
//                     </h3>
//                     <p className="text-xs md:text-sm text-gray-300">
//                       {editingId === trainer.trainerID ? (
//                         <input
//                           type="text"
//                           value={editedData.specialization}
//                           onChange={(e) => handleEditChange('specialization', e.target.value)}
//                           className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                         />
//                       ) : (
//                         trainer.specialization
//                       )}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
//                   <p className="text-xs md:text-sm text-gray-300">
//                     <span className="font-medium">Phone:</span>{" "}
//                     {editingId === trainer.trainerID ? (
//                       <input
//                         type="text"
//                         value={editedData.phone_number}
//                         onChange={(e) => handleEditChange('phone_number', e.target.value)}
//                         className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full"
//                       />
//                     ) : (
//                       trainer.phone_number
//                     )}
//                   </p>
//                   <p className="text-xs md:text-sm text-gray-300">
//                     <span className="font-medium">Availability:</span>{" "}
//                     {editingId === trainer.trainerID ? (
//                       <div className="grid grid-cols-2 gap-2">
//                         {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
//                           <label key={day} className="flex items-center space-x-2 text-xs">
//                             <input
//                               type="checkbox"
//                               checked={editedData.availability?.[day] || false}
//                               onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
//                               className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
//                             />
//                             <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
//                           </label>
//                         ))}
//                       </div>
//                     ) : (
//                       renderAvailability(trainer.availability)
//                     )}
//                   </p>
//                 </div>
//                 <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
//                   {editingId === trainer.trainerID ? (
//                     <>
//                       <button
//                         onClick={handleSave}
//                         className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
//                       >
//                         <Save size={16} />
//                         <span className="text-xs md:text-sm">Save</span>
//                       </button>
//                       <button
//                         onClick={handleCancelEdit}
//                         className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
//                       >
//                         <X size={16} />
//                         <span className="text-xs md:text-sm">Cancel</span>
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEdit(trainer)}
//                         className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
//                       >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
//                           <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
//                         </svg>
//                         <span className="text-xs md:text-sm">Edit</span>
//                       </button>
//                       <button
//                         onClick={() => handleDeleteConfirm(trainer.trainerID)}
//                         className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
//                       >
//                         <Trash size={16} />
//                         <span className="text-xs md:text-sm">Delete</span>
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {deleteConfirmId && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-black opacity-60"
//             onClick={cancelDelete}
//           ></div>
//           <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
//             <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-center text-white">
//               Confirm Delete
//             </h2>
//             <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
//               Are you sure you want to delete this trainer? This action cannot be undone.
//             </p>
//             <div className="flex space-x-3 md:space-x-4">
//               <button
//                 onClick={cancelDelete}
//                 className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => confirmDelete(deleteConfirmId)}
//                 className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {recentlyDeletedTrainer && undoTimeLeft > 0 && (
//         <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
//           <p className="text-xs md:text-sm text-gray-300">
//             <span className="font-medium text-white">
//               {recentlyDeletedTrainer.trainer_name}
//             </span>{" "}
//             deleted
//           </p>
//           <button
//             onClick={handleUndoDelete}
//             className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded text-xs md:text-sm"
//           >
//             <Undo2 size={14} />
//             <span>Undo ({undoTimeLeft}s)</span>
//           </button>
//         </div>
//       )}

//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={onPhotoSelected}
//         accept="image/*"
//         className="hidden"
//         data-trainer-id=""
//       />
//     </div>
//   );
// };

// export default TrainerManagement;
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Plus, X, Trash, Save, User, Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

const TrainerManagement = () => {
  const router = useRouter();
  const [trainers, setTrainers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [recentlyDeletedTrainer, setRecentlyDeletedTrainer] = useState(null);
  const [undoTimeLeft, setUndoTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTable, setShowTable] = useState(true);
  const undoTimerRef = useRef(null);
  const tableContainerRef = useRef(null);

  const fileInputRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    fetchTrainers();
  }, []);

  // Handle scroll for mobile view
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;
      
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowTable(true);
      } else {
        setShowTable(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const fetchTrainers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://flexzone-gyms.onrender.com/api/admin/trainers');
      if (response.ok) {
        const data = await response.json();
        setTrainers(data);
      } else {
        alert('Failed to fetch trainers');
      }
    } catch (error) {
      console.error('Error fetching trainers:', error);
      alert('An error occurred while fetching trainers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (trainer) => {
    setEditingId(trainer.trainerID);
    setEditedData({ 
      ...trainer,
      availability: {
        monday: trainer.availability?.monday || false,
        tuesday: trainer.availability?.tuesday || false,
        wednesday: trainer.availability?.wednesday || false,
        thursday: trainer.availability?.thursday || false,
        friday: trainer.availability?.friday || false,
        saturday: trainer.availability?.saturday || false,
        sunday: trainer.availability?.sunday || false
      }
    });
  };

  const handleEditChange = (field, value) => {
    if (field.startsWith('availability.')) {
      const day = field.split('.')[1];
      setEditedData(prev => ({
        ...prev,
        availability: {
          ...prev.availability,
          [day]: value === 'true' || value === true
        }
      }));
    } else {
      setEditedData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      
      for (const key in editedData) {
        if (key === 'availability') {
          formData.append(key, JSON.stringify(editedData[key]));
        } else if (key !== 'passport_photo') {
          formData.append(key, editedData[key]);
        }
      }
      
      if (fileInputRef.current?.files?.[0]) {
        formData.append('passport_photo', fileInputRef.current.files[0]);
      }

      const response = await fetch(`https://flexzone-gyms.onrender.com/api/admin/trainers/edit/${editingId}`, {
        method: 'PUT',
        body: formData
      });

      if (response.ok) {
        fetchTrainers();
        setEditingId(null);
        alert("Trainer details updated successfully");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to update trainer details");
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
      alert("An error occurred while updating trainer details");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDeleteConfirm = (id) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = async (id) => {
    try {
      const response = await fetch(`https://flexzone-gyms.onrender.com/api/admin/trainers/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const trainerToDelete = trainers.find(trainer => trainer.trainerID === id);
        setRecentlyDeletedTrainer(trainerToDelete);
        setTrainers(trainers.filter(trainer => trainer.trainerID !== id));
        setDeleteConfirmId(null);
        setUndoTimeLeft(5);
        if (undoTimerRef.current) clearInterval(undoTimerRef.current);
        undoTimerRef.current = setInterval(() => {
          setUndoTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(undoTimerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        alert("Failed to delete trainer");
      }
    } catch (error) {
      console.error("Error deleting trainer:", error);
      alert("An error occurred while deleting trainer");
    }
  };

  const handleUndoDelete = async () => {
    if (recentlyDeletedTrainer) {
      try {
        const formData = new FormData();
        for (const key in recentlyDeletedTrainer) {
          if (key !== 'passport_photo') {
            formData.append(key, recentlyDeletedTrainer[key]);
          }
        }

        const response = await fetch('https://flexzone-gyms.onrender.com/api/admin/trainers/add-trainer', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          fetchTrainers();
          setRecentlyDeletedTrainer(null);
          clearInterval(undoTimerRef.current);
          setUndoTimeLeft(0);
        } else {
          alert("Failed to undo delete");
        }
      } catch (error) {
        console.error("Error undoing delete:", error);
        alert("An error occurred while undoing delete");
      }
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handlePhotoUpload = (id) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      fileInputRef.current.dataset.trainerId = id;
    }
  };

  const onPhotoSelected = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const trainerId = e.target.dataset.trainerId;
    const photoURL = URL.createObjectURL(file);

    setTrainers(trainers.map(trainer =>
      trainer.trainerID === trainerId ? { ...trainer, passport_photo: photoURL } : trainer
    ));

    e.target.value = null;
  };

  useEffect(() => {
    return () => {
      trainers.forEach(trainer => {
        if (trainer.passport_photo && trainer.passport_photo.startsWith('blob:')) {
          URL.revokeObjectURL(trainer.passport_photo);
        }
      });
    };
  }, [trainers]);

  const filteredTrainers = trainers.filter(trainer =>
    trainer.trainerID && (
      (trainer.trainer_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (trainer.specialization?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    )
  );

  const renderAvailability = (availability) => {
    if (!availability) return 'Not Available';
    
    const days = [];
    if (availability.monday) days.push('Mon');
    if (availability.tuesday) days.push('Tue');
    if (availability.wednesday) days.push('Wed');
    if (availability.thursday) days.push('Thu');
    if (availability.friday) days.push('Fri');
    if (availability.saturday) days.push('Sat');
    if (availability.sunday) days.push('Sun');
    
    return days.length > 0 ? days.join(', ') : 'Not Available';
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-screen bg-gray-900 text-white ${poppins.className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-wider">Loading trainers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen w-full ${poppins.variable} font-sans`}>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
        }
        
        body {
          font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, sans-serif;
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

        .trainer-photo {
          transition: all 0.3s ease;
          transform-origin: center center;
          position: relative;
        }
        
        .trainer-photo:hover {
          transform: scale(1.8);
          z-index: 10;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
        }

        .photo-container {
          position: relative;
          width: 40px;
          height: 40px;
          margin: 0 auto;
        }

        .card-photo-container {
          position: relative;
          width: 64px;
          height: 64px;
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
        
        /* Improved mobile typography */
        @media (max-width: 640px) {
          .mobile-text-sm {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          .mobile-text-base {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }
          .mobile-text-lg {
            font-size: 1.125rem !important;
            line-height: 1.75rem !important;
          }
          .mobile-text-xl {
            font-size: 1.25rem !important;
            line-height: 1.75rem !important;
          }
        }
      `}</style>

      <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Link 
              href="/dashboard"
              className="border border-gray-700/50 bg-black/20 p-2 rounded-xl hover:border-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg group focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:text-red-400 transition-colors">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <h1 className="mobile-text-lg md:text-2xl lg:text-3xl font-light tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ml-4 whitespace-nowrap">
              Trainers List
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <button
              onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
              className="w-full md:w-auto bg-gray-800 border border-gray-700 text-white mobile-text-sm px-4 py-2 rounded-lg hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none"
            >
              {viewMode === "table" ? "Card View" : "Table View"}
            </button>

            <button
              onClick={() => router.push("/add-trainer")}
              className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:scale-105 focus:outline-none"
            >
              <Plus size={20} />
              <span className="mobile-text-sm">Add Trainer</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-16 z-40 bg-gray-900 border-b border-gray-800">
        <div className="w-full px-4 md:px-8 pt-6 md:pt-10">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
              <Search
                className={`h-5 w-5 ${
                  searchFocused ? "dark:text-red-500 text-black" : "text-gray-500"
                }`}
              />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search trainers by name or specialization..."
              className={`w-full bg-gray-800/50 backdrop-blur-sm border
                border-black shadow-lg shadow-black/20 ring-[0.1px] ring-black
                dark:border-red-500 dark:shadow-lg dark:shadow-red-500/20 dark:ring-[0.1px]dark:ring-red-500
                text-black dark:text-white pl-12 md:pl-14 pr-4 py-3 md:py-5 rounded-xl focus:outline-none
                mobile-text-sm md:text-lg bg-white dark:bg-gray-800`}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
      </div>

      <div className={`w-full px-4 md:px-8 pt-6 md:pt-10 pb-12 transition-transform duration-300 ${!showTable && window.innerWidth < 768 ? 'translate-y-full' : 'translate-y-0'}`}>
        {filteredTrainers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 text-gray-600"
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
            <p className="mobile-text-lg md:text-2xl font-light tracking-wider">No trainers found.</p>
          </div>
        ) : viewMode === "table" ? (
          <div 
            ref={tableContainerRef}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/10 custom-scrollbar"
            style={{
              maxHeight: 'calc(100vh - 220px)',
              overflow: 'auto'
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-800">
                <thead className="bg-gray-900/50 sticky top-0 z-10">
                  <tr>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Trainer ID
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Photo
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Specialization
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Availability
                    </th>
                    <th className="py-3 md:py-5 px-4 md:px-6 text-left mobile-text-xs md:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredTrainers.map((trainer) => (
                    <tr
                      key={trainer.trainerID}
                      className="hover:bg-gray-700/30 transition-colors duration-300 group"
                    >
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm font-light">{trainer.trainerID}</td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm">
                        <div className="photo-container">
                          {trainer.passport_photo ? (
                            <div className="trainer-photo w-10 h-10 rounded-full overflow-hidden mx-auto group ring-2 ring-red-500/40 ring-offset-2 ring-offset-gray-800 hover:ring-red-500 transition-all duration-300">
                              <img 
                                src={trainer.passport_photo.startsWith('data:') ? 
                                  trainer.passport_photo : 
                                  `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
                                alt={trainer.trainer_name} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          ) : (
                            <button
                              onClick={() => handlePhotoUpload(trainer.trainerID)}
                              className="trainer-photo bg-gray-700/60 hover:bg-gray-600/60 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ring-2 ring-offset-2 ring-offset-gray-800 ring-red-500/30 hover:ring-red-500 focus:outline-none"
                            >
                              <User size={16} className="text-red-400" />
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm font-medium text-white">
                        {editingId === trainer.trainerID ? (
                          <input
                            type="text"
                            value={editedData.trainer_name}
                            onChange={(e) => handleEditChange('trainer_name', e.target.value)}
                            className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                          />
                        ) : (
                          trainer.trainer_name
                        )}
                      </td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm font-light text-gray-300">
                        {editingId === trainer.trainerID ? (
                          <input
                            type="text"
                            value={editedData.specialization}
                            onChange={(e) => handleEditChange('specialization', e.target.value)}
                            className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                          />
                        ) : (
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {trainer.specialization?.split(',').map((spec, index) => (
                              <span key={index} className="border border-gray-500 px-1 md:px-2 py-0.5 md:py-1 rounded mobile-text-xs md:text-xs">
                                {spec.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm font-light text-gray-300">
                        {editingId === trainer.trainerID ? (
                          <input
                            type="text"
                            value={editedData.phone_number}
                            onChange={(e) => handleEditChange('phone_number', e.target.value)}
                            className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                          />
                        ) : (
                          trainer.phone_number
                        )}
                      </td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm font-light text-gray-300">
                        {editingId === trainer.trainerID ? (
                          <div className="grid grid-cols-2 gap-2">
                            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                              <label key={day} className="flex items-center space-x-2 mobile-text-xs">
                                <input
                                  type="checkbox"
                                  checked={editedData.availability?.[day] || false}
                                  onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
                                  className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
                                />
                                <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                              </label>
                            ))}
                          </div>
                        ) : (
                          renderAvailability(trainer.availability)
                        )}
                      </td>
                      <td className="py-3 md:py-5 px-4 md:px-6 mobile-text-sm">
                        <div className="flex space-x-1 md:space-x-2">
                          {editingId === trainer.trainerID ? (
                            <>
                              <button
                                onClick={handleSave}
                                className="bg-green-500 px-2 md:px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none"
                              >
                                <Save size={16} />
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="bg-gray-600 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-lg transition-colors duration-300 focus:outline-none"
                              >
                                <X size={16} />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleEdit(trainer)}
                                className="bg-blue-500 px-2 md:px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteConfirm(trainer.trainerID)}
                                className="bg-red-500 px-2 md:px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none"
                              >
                                <Trash size={16} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredTrainers.map((trainer) => (
              <div
                key={trainer.trainerID}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 hover:shadow-red-500/10 transition-shadow duration-300 focus:outline-none"
                tabIndex={0}
              >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="card-photo-container">
                    {trainer.passport_photo ? (
                      <div className="trainer-photo w-16 h-16 rounded-full overflow-hidden group">
                        <img 
                          src={trainer.passport_photo.startsWith('data:') ? 
                            trainer.passport_photo : 
                            `data:${trainer.photo_mime_type};base64,${trainer.passport_photo}`} 
                          alt={trainer.trainer_name} 
                          className="w-full h-full object-cover border border-red-500" 
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => handlePhotoUpload(trainer.trainerID)}
                        className="trainer-photo bg-gray-700 p-2 md:p-3 rounded-full transition-all border-2 border-gray-600 hover:border-red-500 hover:bg-gray-600 focus:outline-none"
                      >
                        <User size={16} className="text-red-400" />
                      </button>
                    )}
                  </div>
                  <div>
                    <h3 className="mobile-text-base md:text-lg font-medium text-white">
                      {editingId === trainer.trainerID ? (
                        <input
                          type="text"
                          value={editedData.trainer_name}
                          onChange={(e) => handleEditChange('trainer_name', e.target.value)}
                          className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                        />
                      ) : (
                        trainer.trainer_name
                      )}
                    </h3>
                    <p className="mobile-text-xs md:text-sm text-gray-300">
                      {editingId === trainer.trainerID ? (
                        <input
                          type="text"
                          value={editedData.specialization}
                          onChange={(e) => handleEditChange('specialization', e.target.value)}
                          className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                        />
                      ) : (
                        trainer.specialization
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
                  <p className="mobile-text-xs md:text-sm text-gray-300">
                    <span className="font-medium">Phone:</span>{" "}
                    {editingId === trainer.trainerID ? (
                      <input
                        type="text"
                        value={editedData.phone_number}
                        onChange={(e) => handleEditChange('phone_number', e.target.value)}
                        className="bg-gray-700 text-white p-1 rounded focus:outline-none w-full mobile-text-sm"
                      />
                    ) : (
                      trainer.phone_number
                    )}
                  </p>
                  <p className="mobile-text-xs md:text-sm text-gray-300">
                    <span className="font-medium">Availability:</span>{" "}
                    {editingId === trainer.trainerID ? (
                      <div className="grid grid-cols-2 gap-2">
                        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                          <label key={day} className="flex items-center space-x-2 mobile-text-xs">
                            <input
                              type="checkbox"
                              checked={editedData.availability?.[day] || false}
                              onChange={(e) => handleEditChange(`availability.${day}`, e.target.checked)}
                              className="form-checkbox h-3 w-3 text-red-500 rounded focus:ring-red-500"
                            />
                            <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      renderAvailability(trainer.availability)
                    )}
                  </p>
                </div>
                <div className="mt-4 md:mt-6 flex space-x-2 md:space-x-3">
                  {editingId === trainer.trainerID ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex-1 bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
                      >
                        <Save size={16} />
                        <span className="mobile-text-xs md:text-sm">Save</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
                      >
                        <X size={16} />
                        <span className="mobile-text-xs md:text-sm">Cancel</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(trainer)}
                        className="flex-1 bg-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                        </svg>
                        <span className="mobile-text-xs md:text-sm">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteConfirm(trainer.trainerID)}
                        className="flex-1 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-1 md:space-x-2 focus:outline-none"
                      >
                        <Trash size={16} />
                        <span className="mobile-text-xs md:text-sm">Delete</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteConfirmId && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={cancelDelete}
          ></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full z-10 shadow-lg">
            <h2 className="mobile-text-lg md:text-2xl font-light tracking-wider mb-4 text-center text-white">
              Confirm Delete
            </h2>
            <p className="text-gray-300 mb-6 text-center mobile-text-sm md:text-base">
              Are you sure you want to delete this trainer? This action cannot be undone.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 md:py-3 rounded-lg hover:border-red-500 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmDelete(deleteConfirmId)}
                className="flex-1 bg-red-500 text-white py-2 md:py-3 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {recentlyDeletedTrainer && undoTimeLeft > 0 && (
        <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gray-900 border border-gray-800 rounded-lg p-3 md:p-4 shadow-lg flex items-center space-x-3 md:space-x-4 z-50">
          <p className="mobile-text-xs md:text-sm text-gray-300">
            <span className="font-medium text-white">
              {recentlyDeletedTrainer.trainer_name}
            </span>{" "}
            deleted
          </p>
          <button
            onClick={handleUndoDelete}
            className="flex items-center space-x-1 text-red-500 hover:text-red-400 focus:outline-none rounded mobile-text-xs md:text-sm"
          >
            <Undo2 size={14} />
            <span>Undo ({undoTimeLeft}s)</span>
          </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={onPhotoSelected}
        accept="image/*"
        className="hidden"
        data-trainer-id=""
      />
    </div>
  );
};

export default TrainerManagement;