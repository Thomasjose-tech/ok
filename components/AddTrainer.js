// // // // // "use client"; // Mark this component as a Client Component
// // // // // import { useRouter } from "next/navigation";
// // // // // import React, { useState, useRef } from 'react';
// // // // // import Image from 'next/image';

// // // // // const AddTrainer = () => {
// // // // //   const router = useRouter(); // Initialize router for redirection
// // // // //   const fileInputRef = useRef(null);
// // // // //   const [photoPreview, setPhotoPreview] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [formData, setFormData] = useState({
// // // // //     id: '',
// // // // //     name: '',
// // // // //     email: '',
// // // // //     specialization: '',
// // // // //     experience: '',
// // // // //     phone: '',
// // // // //     availability: '',
// // // // //     photo: null
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [name]: value
// // // // //     });
// // // // //   };

// // // // //   const handlePhotoChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       // Check file size (limit to 5MB)
// // // // //       if (file.size > 5 * 1024 * 1024) {
// // // // //         setError("Photo size exceeds 5MB limit. Please choose a smaller image.");
// // // // //         return;
// // // // //       }
      
// // // // //       setFormData({
// // // // //         ...formData,
// // // // //         photo: file
// // // // //       });
      
// // // // //       // Create a preview URL for the selected image
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setPhotoPreview(reader.result);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   const triggerFileInput = () => {
// // // // //     fileInputRef.current.click();
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     setError(null);
    
// // // // //     try {
// // // // //       // Create a FormData object to handle file upload
// // // // //       const submitData = new FormData();
      
// // // // //       // Append all form fields to FormData
// // // // //       Object.keys(formData).forEach(key => {
// // // // //         if (key === 'photo' && formData[key]) {
// // // // //           submitData.append('photo', formData[key]);
// // // // //         } else {
// // // // //           submitData.append(key, formData[key]);
// // // // //         }
// // // // //       });
      
// // // // //       console.log('Form data being sent:', Object.fromEntries(submitData.entries()));
      
// // // // //       const response = await fetch('/api/addTrainer', {
// // // // //         method: 'POST',
// // // // //         body: submitData, // Send FormData instead of JSON
// // // // //       });
      
// // // // //       if (response.ok) {
// // // // //         alert('Trainer added successfully!');
// // // // //         router.push('/trainers'); // Redirect to trainers page
// // // // //       } else {
// // // // //         const errorData = await response.json().catch(() => ({ message: 'Unknown error occurred' }));
// // // // //         setError(`Failed to add trainer: ${errorData.message || response.statusText || 'Server returned an error'}`);
// // // // //         console.error('Server response:', response.status, errorData);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error submitting form:', error);
// // // // //       setError(`An error occurred while adding the trainer: ${error.message}`);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleReset = () => {
// // // // //     setFormData({
// // // // //       id: '',
// // // // //       name: '',
// // // // //       email: '',
// // // // //       specialization: '',
// // // // //       experience: '',
// // // // //       phone: '',
// // // // //       availability: '',
// // // // //       photo: null
// // // // //     });
// // // // //     setPhotoPreview(null);
// // // // //     setError(null);
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-b from-gray-900 to-gray-800">
// // // // //       <div className="w-full max-w-6xl">
// // // // //         {/* Add Trainer Title Outside the Box */}
// // // // //         <h2 className="text-3xl font-bold mb-6 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 py-4 z-10 text-white tracking-wide border-b border-red-500/30">
// // // // //           <span className="text-red-500">Add</span> New Trainer
// // // // //         </h2>

// // // // //         {/* Form Box */}
// // // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-2xl border border-gray-700">
// // // // //           {/* Error display */}
// // // // //           {error && (
// // // // //             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400">
// // // // //               <p className="font-medium">Error:</p>
// // // // //               <p>{error}</p>
// // // // //             </div>
// // // // //           )}

// // // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            
// // // // //             {/* Photo Upload Section */}
// // // // //             <div className="col-span-2 flex flex-col items-center mb-8">
// // // // //               <div 
// // // // //                 className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20"
// // // // //                 onClick={triggerFileInput}
// // // // //               >
// // // // //                 {photoPreview ? (
// // // // //                   <img src={photoPreview} alt="Trainer Photo" className="w-full h-full object-cover" />
// // // // //                 ) : (
// // // // //                   <div className="text-center">
// // // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // // //                     </svg>
// // // // //                     <p className="text-sm text-gray-400 mt-2 font-light">Add Profile Photo</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //               <input 
// // // // //                 ref={fileInputRef}
// // // // //                 type="file" 
// // // // //                 accept="image/*" 
// // // // //                 onChange={handlePhotoChange}
// // // // //                 className="hidden"
// // // // //               />
// // // // //               <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
// // // // //             </div>

// // // // //             {/* Trainer Information */}
// // // // //             <h3 className="col-span-2 text-xl font-semibold mb-4 text-red-500 tracking-wide border-b border-gray-700 pb-2">
// // // // //               Trainer Information
// // // // //             </h3>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="id"
// // // // //                 placeholder="ID"
// // // // //                 value={formData.id}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="name"
// // // // //                 placeholder="Name"
// // // // //                 value={formData.name}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 placeholder="Email Address"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="specialization"
// // // // //                 placeholder="Specialization"
// // // // //                 value={formData.specialization}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="experience"
// // // // //                 placeholder="Experience"
// // // // //                 value={formData.experience}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="tel"
// // // // //                 name="phone"
// // // // //                 placeholder="Phone"
// // // // //                 value={formData.phone}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="availability"
// // // // //                 placeholder="Availability"
// // // // //                 value={formData.availability}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Form Actions */}
// // // // //             <div className="col-span-2 flex justify-end space-x-6 mt-8 py-4 border-t border-gray-700">
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={handleReset}
// // // // //                 className="bg-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-gray-700/30"
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 Reset
// // // // //               </button>
// // // // //               <button
// // // // //                 type="submit"
// // // // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-md font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2"
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 {loading ? (
// // // // //                   <>
// // // // //                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                     </svg>
// // // // //                     <span>Processing...</span>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <span>Add Trainer</span>
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddTrainer;
// // // // // "use client";
// // // // // import { useRouter } from "next/navigation";
// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import Image from 'next/image';

// // // // // const AddTrainer = () => {
// // // // //   const router = useRouter();
// // // // //   const fileInputRef = useRef(null);
// // // // //   const [photoPreview, setPhotoPreview] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [showSuccess, setShowSuccess] = useState(false);
// // // // //   const [formData, setFormData] = useState({
// // // // //     id: '',
// // // // //     name: '',
// // // // //     email: '',
// // // // //     specialization: '',
// // // // //     experience: '',
// // // // //     phone: '',
// // // // //     availability: '',
// // // // //     bio: '',
// // // // //     certifications: '',
// // // // //     photo: null
// // // // //   });

// // // // //   // Generate a unique ID when component mounts
// // // // //   useEffect(() => {
// // // // //     const generateUniqueId = () => {
// // // // //       const timestamp = Date.now().toString(36);
// // // // //       const randomStr = Math.random().toString(36).substring(2, 8);
// // // // //       return `TR-${timestamp}${randomStr}`.toUpperCase();
// // // // //     };

// // // // //     setFormData(prev => ({
// // // // //       ...prev,
// // // // //       id: generateUniqueId()
// // // // //     }));
// // // // //   }, []);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [name]: value
// // // // //     });
// // // // //   };

// // // // //   const handlePhotoChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       // Check file size (limit to 5MB)
// // // // //       if (file.size > 5 * 1024 * 1024) {
// // // // //         setError("Photo size exceeds 5MB limit. Please choose a smaller image.");
// // // // //         return;
// // // // //       }
      
// // // // //       setFormData({
// // // // //         ...formData,
// // // // //         photo: file
// // // // //       });
      
// // // // //       // Create a preview URL for the selected image
// // // // //       const reader = new FileReader();
// // // // //       reader.onloadend = () => {
// // // // //         setPhotoPreview(reader.result);
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     }
// // // // //   };

// // // // //   const triggerFileInput = () => {
// // // // //     fileInputRef.current.click();
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     setError(null);
    
// // // // //     try {
// // // // //       // Create a FormData object to handle file upload
// // // // //       const submitData = new FormData();
      
// // // // //       // Append all form fields to FormData
// // // // //       Object.keys(formData).forEach(key => {
// // // // //         if (key === 'photo' && formData[key]) {
// // // // //           submitData.append('photo', formData[key]);
// // // // //         } else {
// // // // //           submitData.append(key, formData[key]);
// // // // //         }
// // // // //       });
      
// // // // //       // Add timestamp for created_at field
// // // // //       submitData.append('created_at', new Date().toISOString());
      
// // // // //       const response = await fetch('/api/addTrainer', {
// // // // //         method: 'POST',
// // // // //         body: submitData,
// // // // //       });
      
// // // // //       if (response.ok) {
// // // // //         setShowSuccess(true);
        
// // // // //         // Show success message for 2 seconds before redirecting
// // // // //         setTimeout(() => {
// // // // //           router.push('/trainers');
// // // // //         }, 2000);
// // // // //       } else {
// // // // //         const errorData = await response.json().catch(() => ({ message: 'Unknown error occurred' }));
// // // // //         setError(`Failed to add trainer: ${errorData.message || response.statusText || 'Server returned an error'}`);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error submitting form:', error);
// // // // //       setError(`An error occurred while adding the trainer: ${error.message}`);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleReset = () => {
// // // // //     const currentId = formData.id; // Keep the ID
// // // // //     setFormData({
// // // // //       id: currentId,
// // // // //       name: '',
// // // // //       email: '',
// // // // //       specialization: '',
// // // // //       experience: '',
// // // // //       phone: '',
// // // // //       availability: '',
// // // // //       bio: '',
// // // // //       certifications: '',
// // // // //       photo: null
// // // // //     });
// // // // //     setPhotoPreview(null);
// // // // //     setError(null);
// // // // //   };

// // // // //   if (showSuccess) {
// // // // //     return (
// // // // //       <div className="p-6 flex justify-center items-center overflow-auto h-screen bg-gradient-to-b from-gray-900 to-gray-800">
// // // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-lg text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// // // // //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // //             </svg>
// // // // //           </div>
// // // // //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// // // // //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// // // // //           <div className="w-full bg-gray-700 h-1 mb-3 rounded-full overflow-hidden">
// // // // //             <div className="bg-red-500 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
// // // // //           </div>
// // // // //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-b from-gray-900 to-gray-800">
// // // // //       <div className="w-full max-w-6xl">
// // // // //         {/* Add Trainer Title Outside the Box */}
// // // // //         <h2 className="text-3xl font-bold mb-6 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 py-4 z-10 text-white tracking-wide border-b border-red-500/30">
// // // // //           <span className="text-red-500">Add</span> New Trainer
// // // // //         </h2>

// // // // //         {/* Form Box */}
// // // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-2xl border border-gray-700 relative">
// // // // //           {/* Luxury accent decorations */}
// // // // //           <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg"></div>
// // // // //           <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-500/50 rounded-br-lg"></div>
          
// // // // //           {/* Error display */}
// // // // //           {error && (
// // // // //             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 animate-pulse">
// // // // //               <p className="font-medium">Error:</p>
// // // // //               <p>{error}</p>
// // // // //             </div>
// // // // //           )}

// // // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            
// // // // //             {/* Photo Upload Section */}
// // // // //             <div className="col-span-2 flex flex-col items-center mb-8">
// // // // //               <div 
// // // // //                 className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group"
// // // // //                 onClick={triggerFileInput}
// // // // //               >
// // // // //                 {photoPreview ? (
// // // // //                   <img src={photoPreview} alt="Trainer Photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
// // // // //                 ) : (
// // // // //                   <div className="text-center">
// // // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // // //                     </svg>
// // // // //                     <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //               <input 
// // // // //                 ref={fileInputRef}
// // // // //                 type="file" 
// // // // //                 accept="image/*" 
// // // // //                 onChange={handlePhotoChange}
// // // // //                 className="hidden"
// // // // //               />
// // // // //               <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
// // // // //             </div>

// // // // //             {/* Trainer Information */}
// // // // //             <h3 className="col-span-2 text-xl font-semibold mb-4 text-red-500 tracking-wide border-b border-gray-700 pb-2 flex items-center">
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // // //               </svg>
// // // // //               Trainer Information
// // // // //             </h3>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="id"
// // // // //                 placeholder="ID"
// // // // //                 value={formData.id}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 readOnly
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="name"
// // // // //                 placeholder="Name"
// // // // //                 value={formData.name}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 placeholder="Email Address"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="specialization"
// // // // //                 placeholder="Specialization"
// // // // //                 value={formData.specialization}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="experience"
// // // // //                 placeholder="Experience (e.g., 5 years)"
// // // // //                 value={formData.experience}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="tel"
// // // // //                 name="phone"
// // // // //                 placeholder="Phone"
// // // // //                 value={formData.phone}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="relative">
// // // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="availability"
// // // // //                 placeholder="Availability (e.g., Mon-Fri 9AM-5PM)"
// // // // //                 value={formData.availability}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             {/* Additional Premium Fields */}
// // // // //             <h3 className="col-span-2 text-xl font-semibold mb-4 mt-6 text-red-500 tracking-wide border-b border-gray-700 pb-2 flex items-center">
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // // //               </svg>
// // // // //               Additional Information
// // // // //             </h3>

// // // // //             <div className="col-span-2 relative">
// // // // //               <div className="absolute top-3 left-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <textarea
// // // // //                 name="bio"
// // // // //                 placeholder="Trainer Biography"
// // // // //                 value={formData.bio}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600 min-h-32 resize-none"
// // // // //               ></textarea>
// // // // //             </div>

// // // // //             <div className="col-span-2 relative">
// // // // //               <div className="absolute top-3 left-3 flex items-center pointer-events-none">
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <textarea
// // // // //                 name="certifications"
// // // // //                 placeholder="Certifications and Qualifications (separate with commas)"
// // // // //                 value={formData.certifications}
// // // // //                 onChange={handleChange}
// // // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600 min-h-20 resize-none"
// // // // //               ></textarea>
// // // // //             </div>

// // // // //             {/* Form Actions */}
// // // // //             <div className="col-span-2 flex justify-end space-x-6 mt-8 py-4 border-t border-gray-700">
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={handleReset}
// // // // //                 className="bg-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-gray-700/30 flex items-center"
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // // // //                 </svg>
// // // // //                 Reset
// // // // //               </button>
// // // // //               <button
// // // // //                 type="submit"
// // // // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-md font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2"
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 {loading ? (
// // // // //                   <>
// // // // //                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                     </svg>
// // // // //                     <span>Processing...</span>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <>
// // // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                     </svg>
// // // // //                     <span>Add Trainer</span>
// // // // //                   </>
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // export default AddTrainer;
// // // // "use client";
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState, useRef } from 'react';

// // // // const AddTrainer = () => {
// // // //   const router = useRouter();
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [showSuccess, setShowSuccess] = useState(false);
// // // //   const [formData, setFormData] = useState({
// // // //     trainer_name: '',
// // // //     specialization: '',
// // // //     phone_number: ''
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError(null);
    
// // // //     try {
// // // //       const response = await fetch('/api/addTrainer', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });
      
// // // //       if (response.ok) {
// // // //         setShowSuccess(true);
        
// // // //         // Show success message for 2 seconds before redirecting
// // // //         setTimeout(() => {
// // // //           router.push('/trainers');
// // // //         }, 2000);
// // // //       } else {
// // // //         const errorData = await response.json().catch(() => ({ message: 'Unknown error occurred' }));
// // // //         setError(`Failed to add trainer: ${errorData.message || response.statusText || 'Server returned an error'}`);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error submitting form:', error);
// // // //       setError(`An error occurred while adding the trainer: ${error.message}`);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       trainer_name: '',
// // // //       specialization: '',
// // // //       phone_number: ''
// // // //     });
// // // //     setError(null);
// // // //   };

// // // //   if (showSuccess) {
// // // //     return (
// // // //       <div className="p-6 flex justify-center items-center overflow-auto h-screen bg-gradient-to-b from-gray-900 to-gray-800">
// // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-lg text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// // // //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //             </svg>
// // // //           </div>
// // // //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// // // //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// // // //           <div className="w-full bg-gray-700 h-1 mb-3 rounded-full overflow-hidden">
// // // //             <div className="bg-red-500 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
// // // //           </div>
// // // //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-b from-gray-900 to-gray-800">
// // // //       <div className="w-full max-w-6xl">
// // // //         {/* Add Trainer Title Outside the Box */}
// // // //         <h2 className="text-3xl font-bold mb-6 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 py-4 z-10 text-white tracking-wide border-b border-red-500/30">
// // // //           <span className="text-red-500">Add</span> New Trainer
// // // //         </h2>

// // // //         {/* Form Box */}
// // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-2xl border border-gray-700 relative">
// // // //           {/* Error display */}
// // // //           {error && (
// // // //             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 animate-pulse">
// // // //               <p className="font-medium">Error:</p>
// // // //               <p>{error}</p>
// // // //             </div>
// // // //           )}

// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            
// // // //             {/* Trainer Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-4 text-red-500 tracking-wide border-b border-gray-700 pb-2 flex items-center">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //               </svg>
// // // //               Trainer Information
// // // //             </h3>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="trainer_name"
// // // //                 placeholder="Trainer Name"
// // // //                 value={formData.trainer_name}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="specialization"
// // // //                 placeholder="Specialization"
// // // //                 value={formData.specialization}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone_number"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone_number}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             {/* Form Actions */}
// // // //             <div className="col-span-2 flex justify-end space-x-6 mt-8 py-4 border-t border-gray-700">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-gray-700/30 flex items-center"
// // // //                 disabled={loading}
// // // //               >
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // // //                 </svg>
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-md font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2"
// // // //                 disabled={loading}
// // // //               >
// // // //                 {loading ? (
// // // //                   <>
// // // //                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                     </svg>
// // // //                     <span>Processing...</span>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                     </svg>
// // // //                     <span>Add Trainer</span>
// // // //                   </>
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // // export default AddTrainer;
// // // // "use client";
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddTrainer = () => {
// // // //   const router = useRouter();
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [showSuccess, setShowSuccess] = useState(false);
// // // //   const [formData, setFormData] = useState({
// // // //     trainer_name: '',
// // // //     specialization: '',
// // // //     phone_number: ''
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       // Updated API endpoint URL to match your backend route
// // // //       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       // Check if the server is responding
// // // //       if (!response) {
// // // //         throw new Error("No response from server. Please check if the backend is running.");
// // // //       }

// // // //       // Log the raw response for debugging
// // // //       const rawResponse = await response.text();
// // // //       console.log("Raw Response:", rawResponse);

// // // //       let data;
// // // //       try {
// // // //         // Try to parse the response as JSON
// // // //         data = JSON.parse(rawResponse);
// // // //       } catch (parseError) {
// // // //         console.error("Failed to parse response as JSON:", parseError);
// // // //         throw new Error("Server returned invalid response. Please check the backend configuration.");
// // // //       }

// // // //       if (response.ok) {
// // // //         setShowSuccess(true);
// // // //         setTimeout(() => {
// // // //           router.push('/trainers');
// // // //         }, 2000);
// // // //       } else {
// // // //         setError(data.error || "Failed to add trainer. Please try again.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error submitting form:', error);
// // // //       setError(error.message || "An error occurred while adding the trainer. Please try again.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       trainer_name: '',
// // // //       specialization: '',
// // // //       phone_number: ''
// // // //     });
// // // //     setError(null);
// // // //   };

// // // //   if (showSuccess) {
// // // //     return (
// // // //       <div className="p-6 flex justify-center items-center overflow-auto h-screen bg-gradient-to-b from-gray-900 to-gray-800">
// // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-lg text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// // // //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //             </svg>
// // // //           </div>
// // // //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// // // //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// // // //           <div className="w-full bg-gray-700 h-1 mb-3 rounded-full overflow-hidden">
// // // //             <div className="bg-red-500 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
// // // //           </div>
// // // //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-b from-gray-900 to-gray-800">
// // // //       <div className="w-full max-w-6xl">
// // // //         <h2 className="text-3xl font-bold mb-6 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 py-4 z-10 text-white tracking-wide border-b border-red-500/30">
// // // //           <span className="text-red-500">Add</span> New Trainer
// // // //         </h2>

// // // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-2xl border border-gray-700 relative">
// // // //           {error && (
// // // //             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 animate-pulse">
// // // //               <p className="font-medium">Error:</p>
// // // //               <p>{error}</p>
// // // //             </div>
// // // //           )}

// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-4 text-red-500 tracking-wide border-b border-gray-700 pb-2 flex items-center">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //               </svg>
// // // //               Trainer Information
// // // //             </h3>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="trainer_name"
// // // //                 placeholder="Trainer Name"
// // // //                 value={formData.trainer_name}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="specialization"
// // // //                 placeholder="Specialization"
// // // //                 value={formData.specialization}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>
            
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone_number"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone_number}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="col-span-2 flex justify-end space-x-6 mt-8 py-4 border-t border-gray-700">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-gray-700/30 flex items-center"
// // // //                 disabled={loading}
// // // //               >
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // // //                 </svg>
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-md font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2"
// // // //                 disabled={loading}
// // // //               >
// // // //                 {loading ? (
// // // //                   <>
// // // //                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                     </svg>
// // // //                     <span>Processing...</span>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                     </svg>
// // // //                     <span>Add Trainer</span>
// // // //                   </>
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // // export default AddTrainer;
// // // "use client";
// // // import { useRouter } from "next/navigation";
// // // import React, { useState } from 'react';

// // // const AddTrainer = () => {
// // //   const router = useRouter();
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [showSuccess, setShowSuccess] = useState(false);
// // //   const [profilePhoto, setProfilePhoto] = useState(null);

// // //   const [formData, setFormData] = useState({
// // //     trainer_name: '',
// // //     specialization: '',
// // //     phone_number: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value
// // //     });
// // //   };

// // //   const handlePhotoChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
// // //       setProfilePhoto(file);
// // //     } else {
// // //       alert("File size should be less than 5MB");
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       if (!response) {
// // //         throw new Error("No response from server. Please check if the backend is running.");
// // //       }

// // //       const rawResponse = await response.text();
// // //       console.log("Raw Response:", rawResponse);

// // //       let data;
// // //       try {
// // //         data = JSON.parse(rawResponse);
// // //       } catch (parseError) {
// // //         console.error("Failed to parse response as JSON:", parseError);
// // //         throw new Error("Server returned invalid response. Please check the backend configuration.");
// // //       }

// // //       if (response.ok) {
// // //         setShowSuccess(true);
// // //         setTimeout(() => {
// // //           router.push('/trainers');
// // //         }, 2000);
// // //       } else {
// // //         setError(data.error || "Failed to add trainer. Please try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error('Error submitting form:', error);
// // //       setError(error.message || "An error occurred while adding the trainer. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleReset = () => {
// // //     setFormData({
// // //       trainer_name: '',
// // //       specialization: '',
// // //       phone_number: ''
// // //     });
// // //     setProfilePhoto(null);
// // //     setError(null);
// // //   };

// // //   if (showSuccess) {
// // //     return (
// // //       <div className="p-6 flex justify-center items-center overflow-auto h-screen bg-gradient-to-b from-gray-900 to-gray-800">
// // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-lg text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// // //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //             </svg>
// // //           </div>
// // //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// // //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// // //           <div className="w-full bg-gray-700 h-1 mb-3 rounded-full overflow-hidden">
// // //             <div className="bg-red-500 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
// // //           </div>
// // //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-b from-gray-900 to-gray-800">
// // //       <div className="w-full max-w-6xl">
// // //         <h2 className="text-3xl font-bold mb-6 sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 py-4 z-10 text-white tracking-wide border-b border-red-500/30">
// // //           <span className="text-red-500">Add</span> New Trainer
// // //         </h2>

// // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-2xl border border-gray-700 relative">
// // //           {error && (
// // //             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 animate-pulse">
// // //               <p className="font-medium">Error:</p>
// // //               <p>{error}</p>
// // //             </div>
// // //           )}

// // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
// // //             {/* Profile Photo Upload */}
// // //             <div className="col-span-2 flex flex-col items-center mb-8">
// // //               <div 
// // //                 className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group"
// // //                 onClick={() => document.getElementById('fileInput').click()}
// // //               >
// // //                 {profilePhoto ? (
// // //                   <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
// // //                 ) : (
// // //                   <div className="text-center">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // //                     </svg>
// // //                     <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //               <input 
// // //                 id="fileInput"
// // //                 type="file" 
// // //                 accept="image/*" 
// // //                 onChange={handlePhotoChange}
// // //                 className="hidden"
// // //               />
// // //               <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
// // //             </div>

// // //             <h3 className="col-span-2 text-xl font-semibold mb-4 text-red-500 tracking-wide border-b border-gray-700 pb-2 flex items-center">
// // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // //               </svg>
// // //               Trainer Information
// // //             </h3>
            
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // //                 </svg>
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 name="trainer_name"
// // //                 placeholder="Trainer Name"
// // //                 value={formData.trainer_name}
// // //                 onChange={handleChange}
// // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // //                 required
// // //               />
// // //             </div>
            
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// // //                 </svg>
// // //               </div>
// // //               <input
// // //                 type="text"
// // //                 name="specialization"
// // //                 placeholder="Specialization"
// // //                 value={formData.specialization}
// // //                 onChange={handleChange}
// // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // //                 required
// // //               />
// // //             </div>
            
// // //             <div className="relative">
// // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // //                 </svg>
// // //               </div>
// // //               <input
// // //                 type="tel"
// // //                 name="phone_number"
// // //                 placeholder="Phone Number"
// // //                 value={formData.phone_number}
// // //                 onChange={handleChange}
// // //                 className="bg-gray-800/80 p-3 pl-10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 w-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-gray-600"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="col-span-2 flex justify-end space-x-6 mt-8 py-4 border-t border-gray-700">
// // //               <button
// // //                 type="button"
// // //                 onClick={handleReset}
// // //                 className="bg-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-lg hover:shadow-gray-700/30 flex items-center"
// // //                 disabled={loading}
// // //               >
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// // //                 </svg>
// // //                 Reset
// // //               </button>
// // //               <button
// // //                 type="submit"
// // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-md font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? (
// // //                   <>
// // //                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                     </svg>
// // //                     <span>Processing...</span>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                     </svg>
// // //                     <span>Add Trainer</span>
// // //                   </>
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default AddTrainer;
// // // "use client";
// // // import { useRouter } from "next/navigation";
// // // import React, { useState, useRef } from 'react';
// // // import { Plus, User, X, Trash2, ArrowLeft } from 'lucide-react';

// // // const AddTrainer = () => {
// // //   const router = useRouter();
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [showSuccess, setShowSuccess] = useState(false);
// // //   const [previewImage, setPreviewImage] = useState(null);
// // //   const fileInputRef = useRef(null);

// // //   const [formData, setFormData] = useState({
// // //     trainer_name: '',
// // //     specialization: '',
// // //     phone_number: '',
// // //     availability: true
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value
// // //     });
// // //   };

// // //   const handlePhotoChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       // Validate file type and size
// // //       if (!file.type.startsWith('image/')) {
// // //         setError("Only image files are allowed");
// // //         return;
// // //       }
// // //       if (file.size > 5 * 1024 * 1024) {
// // //         setError("File size should be less than 5MB");
// // //         return;
// // //       }
      
// // //       // Create preview URL
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         setPreviewImage(reader.result);
// // //         setError(null);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const removePhoto = () => {
// // //     setPreviewImage(null);
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.value = '';
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const formDataToSend = new FormData();
      
// // //       // Append all form fields
// // //       Object.entries(formData).forEach(([key, value]) => {
// // //         formDataToSend.append(key, value);
// // //       });
      
// // //       // Append photo if exists
// // //       if (fileInputRef.current?.files[0]) {
// // //         formDataToSend.append('passport_photo', fileInputRef.current.files[0]);
// // //       }

// // //       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// // //         method: 'POST',
// // //         body: formDataToSend
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message || data.error || "Failed to add trainer");
// // //       }

// // //       setShowSuccess(true);
// // //       setTimeout(() => {
// // //         router.push('/trainers');
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error('Error submitting form:', error);
// // //       setError(error.message || "An error occurred while adding the trainer");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleReset = () => {
// // //     setFormData({
// // //       trainer_name: '',
// // //       specialization: '',
// // //       phone_number: '',
// // //       availability: true
// // //     });
// // //     setPreviewImage(null);
// // //     setError(null);
// // //     if (fileInputRef.current) {
// // //       fileInputRef.current.value = '';
// // //     }
// // //   };

// // //   if (showSuccess) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
// // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// // //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //             </svg>
// // //           </div>
// // //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// // //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// // //           <div className="w-full bg-gray-700 h-1.5 mb-3 rounded-full overflow-hidden">
// // //             <div className="bg-red-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
// // //           </div>
// // //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="flex items-center mb-8">
// // //           <button
// // //             onClick={() => router.back()}
// // //             className="flex items-center text-gray-300 hover:text-white transition-colors mr-4"
// // //           >
// // //             <ArrowLeft className="mr-2" size={20} />
// // //             Back
// // //           </button>
// // //           <h1 className="text-2xl md:text-3xl font-bold text-white">
// // //             <span className="text-red-500">Add</span> New Trainer
// // //           </h1>
// // //         </div>

// // //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
// // //           {error && (
// // //             <div className="bg-red-500/10 border border-red-500/30 p-4 text-red-400">
// // //               <p className="font-medium">Error:</p>
// // //               <p>{error}</p>
// // //             </div>
// // //           )}

// // //           <form onSubmit={handleSubmit} className="p-6 md:p-8">
// // //             {/* Profile Photo Upload */}
// // //             <div className="flex flex-col items-center mb-8">
// // //               <div 
// // //                 className="relative w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-gray-600 hover:border-red-500 transition-all duration-300 group"
// // //                 onClick={() => fileInputRef.current.click()}
// // //               >
// // //                 {previewImage ? (
// // //                   <>
// // //                     <img 
// // //                       src={previewImage} 
// // //                       alt="Preview" 
// // //                       className="w-full h-full object-cover"
// // //                     />
// // //                     <button
// // //                       type="button"
// // //                       onClick={(e) => {
// // //                         e.stopPropagation();
// // //                         removePhoto();
// // //                       }}
// // //                       className="absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
// // //                     >
// // //                       <X size={16} className="text-white" />
// // //                     </button>
// // //                   </>
// // //                 ) : (
// // //                   <div className="text-center p-4">
// // //                     <User className="h-12 w-12 text-gray-400 mx-auto group-hover:text-red-400 transition-colors" />
// // //                     <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">
// // //                       Add Profile Photo
// // //                     </p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //               <input 
// // //                 ref={fileInputRef}
// // //                 type="file" 
// // //                 accept="image/*" 
// // //                 onChange={handlePhotoChange}
// // //                 className="hidden"
// // //               />
// // //               <p className="text-xs text-gray-500">Maximum file size: 5MB (JPEG, PNG)</p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Trainer Name */}
// // //               <div className="col-span-1">
// // //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// // //                   Trainer Name *
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="trainer_name"
// // //                   placeholder="John Doe"
// // //                   value={formData.trainer_name}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Specialization */}
// // //               <div className="col-span-1">
// // //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// // //                   Specialization *
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="specialization"
// // //                   placeholder="e.g. Weight Training, Yoga"
// // //                   value={formData.specialization}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Phone Number */}
// // //               <div className="col-span-1">
// // //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// // //                   Phone Number *
// // //                 </label>
// // //                 <input
// // //                   type="tel"
// // //                   name="phone_number"
// // //                   placeholder="+1234567890"
// // //                   value={formData.phone_number}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Availability */}
// // //               <div className="col-span-1">
// // //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// // //                   Availability *
// // //                 </label>
// // //                 <select
// // //                   name="availability"
// // //                   value={formData.availability}
// // //                   onChange={(e) => handleChange({
// // //                     target: {
// // //                       name: "availability",
// // //                       value: e.target.value === "true"
// // //                     }
// // //                   })}
// // //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// // //                   required
// // //                 >
// // //                   <option value="true">Available</option>
// // //                   <option value="false">Not Available</option>
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             {/* Form Actions */}
// // //             <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mt-8 pt-6 border-t border-gray-700">
// // //               <button
// // //                 type="button"
// // //                 onClick={handleReset}
// // //                 className="flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-colors"
// // //                 disabled={loading}
// // //               >
// // //                 <Trash2 className="mr-2" size={18} />
// // //                 Clear Form
// // //               </button>
// // //               <button
// // //                 type="submit"
// // //                 className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? (
// // //                   <>
// // //                     <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                     </svg>
// // //                     Processing...
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <Plus className="mr-2" size={18} />
// // //                     Add Trainer
// // //                   </>
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddTrainer;
// // "use client";
// // import { useRouter } from "next/navigation";
// // import React, { useState, useRef } from 'react';
// // import { Plus, User, X, Trash2, ArrowLeft } from 'lucide-react';

// // const AddTrainer = () => {
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [showSuccess, setShowSuccess] = useState(false);
// //   const [previewImage, setPreviewImage] = useState(null);
// //   const fileInputRef = useRef(null);

// //   const [formData, setFormData] = useState({
// //     trainer_name: '',
// //     specialization: '',
// //     phone_number: '',
// //     availability: {
// //       monday: false,
// //       tuesday: false,
// //       wednesday: false,
// //       thursday: false,
// //       friday: false,
// //       saturday: false,
// //       sunday: false
// //     }
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleAvailabilityChange = (day) => {
// //     setFormData({
// //       ...formData,
// //       availability: {
// //         ...formData.availability,
// //         [day]: !formData.availability[day]
// //       }
// //     });
// //   };

// //   const handlePhotoChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       // Validate file type and size
// //       if (!file.type.startsWith('image/')) {
// //         setError("Only image files are allowed");
// //         return;
// //       }
// //       if (file.size > 5 * 1024 * 1024) {
// //         setError("File size should be less than 5MB");
// //         return;
// //       }
      
// //       // Create preview URL
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setPreviewImage(reader.result);
// //         setError(null);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const removePhoto = () => {
// //     setPreviewImage(null);
// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = '';
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const formDataToSend = new FormData();
      
// //       // Append all form fields
// //       formDataToSend.append('trainer_name', formData.trainer_name);
// //       formDataToSend.append('specialization', formData.specialization);
// //       formDataToSend.append('phone_number', formData.phone_number);
// //       formDataToSend.append('availability', JSON.stringify(formData.availability));
      
// //       // Append photo if exists
// //       if (fileInputRef.current?.files[0]) {
// //         formDataToSend.append('passport_photo', fileInputRef.current.files[0]);
// //       }

// //       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
// //         method: 'POST',
// //         body: formDataToSend
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || data.error || "Failed to add trainer");
// //       }

// //       setShowSuccess(true);
// //       setTimeout(() => {
// //         router.push('/trainers');
// //       }, 2000);
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       setError(error.message || "An error occurred while adding the trainer");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setFormData({
// //       trainer_name: '',
// //       specialization: '',
// //       phone_number: '',
// //       availability: {
// //         monday: false,
// //         tuesday: false,
// //         wednesday: false,
// //         thursday: false,
// //         friday: false,
// //         saturday: false,
// //         sunday: false
// //       }
// //     });
// //     setPreviewImage(null);
// //     setError(null);
// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = '';
// //     }
// //   };

// //   if (showSuccess) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
// //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
// //           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //             </svg>
// //           </div>
// //           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
// //           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
// //           <div className="w-full bg-gray-700 h-1.5 mb-3 rounded-full overflow-hidden">
// //             <div className="bg-red-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
// //           </div>
// //           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="flex items-center mb-8">
// //           <button
// //             onClick={() => router.back()}
// //             className="flex items-center text-gray-300 hover:text-white transition-colors mr-4"
// //           >
// //             <ArrowLeft className="mr-2" size={20} />
// //             Back
// //           </button>
// //           <h1 className="text-2xl md:text-3xl font-bold text-white">
// //             <span className="text-red-500">Add</span> New Trainer
// //           </h1>
// //         </div>

// //         <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
// //           {error && (
// //             <div className="bg-red-500/10 border border-red-500/30 p-4 text-red-400">
// //               <p className="font-medium">Error:</p>
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           <form onSubmit={handleSubmit} className="p-6 md:p-8">
// //             {/* Profile Photo Upload */}
// //             <div className="flex flex-col items-center mb-8">
// //               <div 
// //                 className="relative w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-gray-600 hover:border-red-500 transition-all duration-300 group"
// //                 onClick={() => fileInputRef.current.click()}
// //               >
// //                 {previewImage ? (
// //                   <>
// //                     <img 
// //                       src={previewImage} 
// //                       alt="Preview" 
// //                       className="w-full h-full object-cover"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         removePhoto();
// //                       }}
// //                       className="absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
// //                     >
// //                       <X size={16} className="text-white" />
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <div className="text-center p-4">
// //                     <User className="h-12 w-12 text-gray-400 mx-auto group-hover:text-red-400 transition-colors" />
// //                     <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">
// //                       Add Profile Photo
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //               <input 
// //                 ref={fileInputRef}
// //                 type="file" 
// //                 accept="image/*" 
// //                 onChange={handlePhotoChange}
// //                 className="hidden"
// //               />
// //               <p className="text-xs text-gray-500">Maximum file size: 5MB (JPEG, PNG)</p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Trainer Name */}
// //               <div className="col-span-1">
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Trainer Name *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="trainer_name"
// //                   placeholder="John Doe"
// //                   value={formData.trainer_name}
// //                   onChange={handleChange}
// //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// //                   required
// //                 />
// //               </div>

// //               {/* Specialization */}
// //               <div className="col-span-1">
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Specialization *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="specialization"
// //                   placeholder="e.g. Weight Training, Yoga"
// //                   value={formData.specialization}
// //                   onChange={handleChange}
// //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// //                   required
// //                 />
// //               </div>

// //               {/* Phone Number */}
// //               <div className="col-span-1">
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Phone Number *
// //                 </label>
// //                 <input
// //                   type="tel"
// //                   name="phone_number"
// //                   placeholder="+1234567890"
// //                   value={formData.phone_number}
// //                   onChange={handleChange}
// //                   className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all"
// //                   required
// //                 />
// //               </div>

// //               {/* Availability Section */}
// //               <div className="col-span-1 md:col-span-2">
// //                 <label className="block text-gray-300 text-sm font-medium mb-2">
// //                   Availability *
// //                 </label>
// //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
// //                   {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
// //                     <div key={day} className="flex flex-col items-center">
// //                       <button
// //                         type="button"
// //                         onClick={() => handleAvailabilityChange(day)}
// //                         className={`w-full py-2 px-1 rounded-lg text-center transition-colors ${formData.availability[day] ? 'bg-red-500 text-white' : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600'}`}
// //                       >
// //                         {day.charAt(0).toUpperCase() + day.slice(1, 3)}
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Form Actions */}
// //             <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mt-8 pt-6 border-t border-gray-700">
// //               <button
// //                 type="button"
// //                 onClick={handleReset}
// //                 className="flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-colors"
// //                 disabled={loading}
// //               >
// //                 <Trash2 className="mr-2" size={18} />
// //                 Clear Form
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20"
// //                 disabled={loading}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                     </svg>
// //                     Processing...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Plus className="mr-2" size={18} />
// //                     Add Trainer
// //                   </>
// //                 )}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddTrainer;
// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState, useRef } from 'react';
// import { Plus, User, X, Trash2, ArrowLeft } from 'lucide-react';

// const AddTrainer = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const [formData, setFormData] = useState({
//     trainer_name: '',
//     specialization: '',
//     phone_number: '',
//     availability: {
//       monday: false,
//       tuesday: false,
//       wednesday: false,
//       thursday: false,
//       friday: false,
//       saturday: false,
//       sunday: false
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleAvailabilityChange = (day) => {
//     setFormData({
//       ...formData,
//       availability: {
//         ...formData.availability,
//         [day]: !formData.availability[day]
//       }
//     });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file type and size
//       if (!file.type.startsWith('image/')) {
//         setError("Only image files are allowed");
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) {
//         setError("File size should be less than 5MB");
//         return;
//       }
      
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//         setError(null);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removePhoto = () => {
//     setPreviewImage(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const formDataToSend = new FormData();
      
//       // Append all form fields
//       formDataToSend.append('trainer_name', formData.trainer_name);
//       formDataToSend.append('specialization', formData.specialization);
//       formDataToSend.append('phone_number', formData.phone_number);
//       formDataToSend.append('availability', JSON.stringify(formData.availability));
      
//       // Append photo if exists
//       if (fileInputRef.current?.files[0]) {
//         formDataToSend.append('passport_photo', fileInputRef.current.files[0]);
//       }

//       const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || data.error || "Failed to add trainer");
//       }

//       setShowSuccess(true);
//       setTimeout(() => {
//         router.push('/trainers');
//       }, 2000);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError(error.message || "An error occurred while adding the trainer");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       trainer_name: '',
//       specialization: '',
//       phone_number: '',
//       availability: {
//         monday: false,
//         tuesday: false,
//         wednesday: false,
//         thursday: false,
//         friday: false,
//         saturday: false,
//         sunday: false
//       }
//     });
//     setPreviewImage(null);
//     setError(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   if (showSuccess) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
//         <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
//           <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
//           <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
//           <div className="w-full bg-gray-700 h-1.5 mb-3 rounded-full overflow-hidden">
//             <div className="bg-red-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
//           </div>
//           <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//       {/* Fixed Header Section with Red Outline */}
//       <div className="sticky top-0 z-10 bg-gray-900 pt-4 px-4 md:px-8">
//         <div className="max-w-5xl mx-auto">  {/* Changed from max-w-4xl to max-w-6xl */}
//           <div className="border-2 border-red-500 rounded-lg p-3 shadow-lg bg-gray-800">
//             <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
//               Add New Trainer
//             </h1>
//           </div>
//         </div>
//       </div>
  
//       {/* Scrollable Content Area - Wider Container */}
//       <div className="px-4 md:px-8 pb-8 max-w-6xl mx-auto mt-6">  {/* Changed from max-w-4xl to max-w-6xl */}
//         <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
//           <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-6">
//             <form onSubmit={handleSubmit}>
//               {/* Profile Photo Upload */}
//               <div className="flex flex-col items-center mb-8">
//                 <div className="relative w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-gray-600 hover:border-red-500 transition-all duration-300 group"
//                   onClick={() => fileInputRef.current.click()}>
//                   {previewImage ? (
//                     <>
//                       <img src={previewImage} alt="Preview" className="w-full h-full object-cover"/>
//                       <button type="button" onClick={(e) => { e.stopPropagation(); removePhoto(); }}
//                         className="absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors">
//                         <X size={16} className="text-white"/>
//                       </button>
//                     </>
//                   ) : (
//                     <div className="text-center p-4">
//                       <User className="h-12 w-12 text-gray-400 mx-auto group-hover:text-red-400 transition-colors"/>
//                       <p className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">
//                         Add Profile Photo
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="hidden"/>
//                 <p className="text-xs text-gray-500">Maximum file size: 5MB (JPEG, PNG)</p>
//               </div>
  
//               {/* Trainer Information - Wider Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {/* Trainer Name */}
//                 <div className="col-span-1">
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Trainer Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="trainer_name"
//                     value={formData.trainer_name}
//                     onChange={handleChange}
//                     className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all"
//                     required
//                   />
//                 </div>
  
//                 {/* Specialization */}
//                 <div className="col-span-1">
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Specialization *
//                   </label>
//                   <input
//                     type="text"
//                     name="specialization"
//                     value={formData.specialization}
//                     onChange={handleChange}
//                     className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all"
//                     required
//                   />
//                 </div>
  
//                 {/* Phone Number */}
//                 <div className="col-span-1">
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleChange}
//                     className="w-full bg-gray-700/80 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all"
//                     required
//                   />
//                 </div>
//               </div>
  
//               {/* Availability Section */}
//               <div className="mb-8">
//                 <label className="block text-gray-300 text-sm font-medium mb-2">
//                   Availability *
//                 </label>
//                 <div className="grid grid-cols-7 gap-2">
//                   {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
//                     <div key={day} className="flex flex-col items-center">
//                       <button
//                         type="button"
//                         onClick={() => handleAvailabilityChange(day)}
//                         className={`w-full py-2 px-1 rounded-lg text-center transition-colors ${formData.availability[day] ? 'bg-red-500 text-white' : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600'}`}
//                       >
//                         {day.charAt(0).toUpperCase() + day.slice(1, 3)}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
  
//               {/* Form Actions */}
//               <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-700">
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-colors"
//                 >
//                   <Trash2 className="mr-2" size={18} />
//                   Reset
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <Plus className="mr-2" size={18} />
//                       Add Trainer
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTrainer;
"use client";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from 'react';
import { Plus, User, X, Trash2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const AddTrainer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    trainer_name: '',
    specialization: '',
    phone_number: '',
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAvailabilityChange = (day) => {
    setFormData({
      ...formData,
      availability: {
        ...formData.availability,
        [day]: !formData.availability[day]
      }
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setError("Only image files are allowed");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields
      formDataToSend.append('trainer_name', formData.trainer_name);
      formDataToSend.append('specialization', formData.specialization);
      formDataToSend.append('phone_number', formData.phone_number);
      formDataToSend.append('availability', JSON.stringify(formData.availability));
      
      // Append photo if exists
      if (fileInputRef.current?.files[0]) {
        formDataToSend.append('passport_photo', fileInputRef.current.files[0]);
      }

      const response = await fetch('http://localhost:5000/api/admin/trainers/add-trainer', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to add trainer");
      }

      setShowSuccess(true);
      setTimeout(() => {
        router.push('/trainers');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || "An error occurred while adding the trainer");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      trainer_name: '',
      specialization: '',
      phone_number: '',
      availability: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
    });
    setPreviewImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-2xl border border-gray-700 max-w-md w-full text-center">
          <div className="mb-6 bg-green-500/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Success!</h2>
          <p className="text-gray-300 mb-8">Trainer has been added successfully.</p>
          <div className="w-full bg-gray-700 h-1.5 mb-3 rounded-full overflow-hidden">
            <div className="bg-red-500 h-1.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
          <p className="text-gray-400 text-sm">Redirecting to trainers page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Fixed Header Section with Red Outline */}
      <div className="sticky top-0 z-10 bg-gray-900 pt-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-red-500 rounded-lg p-3 shadow-lg bg-gray-800">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Add New Trainer
            </h1>
          </div>
        </div>
      </div>
  
      {/* Scrollable Content Area */}
      <div className="px-4 md:px-6 lg:px-8 pb-8 max-w-6xl mx-auto mt-6">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-4 sm:p-6">
            <form onSubmit={handleSubmit}>
              {/* Profile Photo Upload */}
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-700 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden cursor-pointer border-2 border-gray-600 hover:border-red-500 transition-all duration-300 group"
                  onClick={() => fileInputRef.current.click()}>
                  {previewImage ? (
                    <>
                      <Image 
                        src={previewImage} 
                        alt="Preview" 
                        fill
                        className="object-cover"
                        sizes="(max-width: 128px) 100vw"
                      />
                      <button type="button" onClick={(e) => { e.stopPropagation(); removePhoto(); }}
                        className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors">
                        <X size={14} className="text-white"/>
                      </button>
                    </>
                  ) : (
                    <div className="text-center p-2 sm:p-4">
                      <User className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto group-hover:text-red-400 transition-colors"/>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 group-hover:text-white transition-colors">
                        Add Photo
                      </p>
                    </div>
                  )}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="hidden"/>
                <p className="text-xs text-gray-500 text-center">Max 5MB (JPEG, PNG)</p>
              </div>
  
              {/* Trainer Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Trainer Name */}
                <div className="col-span-1">
                  <label className="block text-gray-300 text-sm font-medium mb-1 sm:mb-2">
                    Trainer Name *
                  </label>
                  <input
                    type="text"
                    name="trainer_name"
                    value={formData.trainer_name}
                    onChange={handleChange}
                    className="w-full bg-gray-700/80 p-2 sm:p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>
  
                {/* Specialization */}
                <div className="col-span-1">
                  <label className="block text-gray-300 text-sm font-medium mb-1 sm:mb-2">
                    Specialization *
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full bg-gray-700/80 p-2 sm:p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>
  
                {/* Phone Number */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-gray-300 text-sm font-medium mb-1 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full bg-gray-700/80 p-2 sm:p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-600 transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
  
              {/* Availability Section */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-gray-300 text-sm font-medium mb-1 sm:mb-2">
                  Availability *
                </label>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                    <div key={day} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => handleAvailabilityChange(day)}
                        className={`w-full py-1 sm:py-2 px-0 sm:px-1 rounded-lg text-center transition-colors text-xs sm:text-sm ${formData.availability[day] ? 'bg-red-500 text-white' : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600'}`}
                      >
                        {day.charAt(0).toUpperCase() + day.slice(1, 3)}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}
  
              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  <Trash2 className="mr-2" size={16} />
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/20 text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2" size={16} />
                      Add Trainer
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainer;
3.0
