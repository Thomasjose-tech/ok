

// // // // const AddMember = () => {
// // // //   const router = useRouter();

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // Handle form submission logic here
// // // //     console.log("Form submitted");
// // // //     router.push("/members"); // Redirect back to the members page after submission
// // // //   };

// // // //   return (
// // // //     <div className="w-full p-4">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h1 className="text-2xl font-bold">Add New Member</h1>
// // // //         <button
// // // //           onClick={() => router.push("/members")}
// // // //           className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-700"
// // // //         >
// // // //           Cancel
// // // //         </button>
// // // //       </div>

// // // //       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //         {/* Personal Details */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Full Name"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Address"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Pincode"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Mobile Number"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Age"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Select Gender</option>
// // // //           <option value="Male">Male</option>
// // // //           <option value="Female">Female</option>
// // // //           <option value="Other">Other</option>
// // // //         </select>
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Select Blood Group</option>
// // // //           <option value="A+">A+</option>
// // // //           <option value="A-">A-</option>
// // // //           <option value="B+">B+</option>
// // // //           <option value="B-">B-</option>
// // // //           <option value="O+">O+</option>
// // // //           <option value="O-">O-</option>
// // // //           <option value="AB+">AB+</option>
// // // //           <option value="AB-">AB-</option>
// // // //         </select>

// // // //         {/* Emergency Contact Information */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Contact Name"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Relationship"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Emergency Contact Number"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />

// // // //         {/* Membership Details */}
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="Monthly">Monthly</option>
// // // //           <option value="Quarterly">Quarterly</option>
// // // //           <option value="Yearly">Yearly</option>
// // // //         </select>
// // // //         <input
// // // //           type="date"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Select Payment Type</option>
// // // //           <option value="Cash">Cash</option>
// // // //           <option value="Card">Card</option>
// // // //           <option value="Online">Online</option>
// // // //         </select>
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Total Amount"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />

// // // //         {/* Health Information */}
// // // //         <textarea
// // // //           placeholder="Medical Condition"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
// // // //           rows="3"
// // // //         />
// // // //         <textarea
// // // //           placeholder="Fitness Goals"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
// // // //           rows="3"
// // // //         />

// // // //         {/* Form Actions */}
// // // //         <div className="col-span-2 flex justify-end space-x-4">
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
// // // //           >
// // // //             Add Member
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // const AddMember = () => {
// // // //   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

// // // //   return (
// // // //     <div className="bg-gray-800 p-6 rounded-lg text-white">
// // // //       <h2 className="text-2xl font-bold mb-6">Add New Member</h2>
// // // //       <form className="grid grid-cols-2 gap-4">
// // // //         {/* Personal Information */}
// // // //         <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Full Name"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Address"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Pincode"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="tel"
// // // //           placeholder="Mobile Number"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Age"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Select Gender</option>
// // // //           <option value="Male">Male</option>
// // // //           <option value="Female">Female</option>
// // // //           <option value="Other">Other</option>
// // // //         </select>
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Blood Group</option>
// // // //           <option value="A+">A+</option>
// // // //           <option value="A-">A-</option>
// // // //           <option value="B+">B+</option>
// // // //           <option value="B-">B-</option>
// // // //           <option value="AB+">AB+</option>
// // // //           <option value="AB-">AB-</option>
// // // //           <option value="O+">O+</option>
// // // //           <option value="O-">O-</option>
// // // //         </select>

// // // //         {/* Emergency Information */}
// // // //         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Contact Name"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Relationship"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <input
// // // //           type="tel"
// // // //           placeholder="Emergency Contact Number"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
// // // //         />

// // // //         {/* Membership Details */}
// // // //         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Membership Plan</option>
// // // //           <option value="Monthly">Monthly</option>
// // // //           <option value="Quarterly">Quarterly</option>
// // // //           <option value="Yearly">Yearly</option>
// // // //         </select>
// // // //         <input
// // // //           type="date"
// // // //           placeholder="Date of Joining"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />
// // // //         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //           <option value="">Select Payment Type</option>
// // // //           <option value="Cash">Cash</option>
// // // //           <option value="Card">Card</option>
// // // //           <option value="Online">Online</option>
// // // //         </select>
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Total Amount Received"
// // // //           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //         />

// // // //         {/* Health Information */}
// // // //         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
// // // //         <div className="col-span-2">
// // // //           <p className="mb-2">Are you suffering from any disease?</p>
// // // //           <div className="flex space-x-4 mb-4">
// // // //             <label className="flex items-center">
// // // //               <input
// // // //                 type="radio"
// // // //                 name="medicalCondition"
// // // //                 onChange={() => setHasMedicalCondition(true)}
// // // //                 className="mr-2"
// // // //               />
// // // //               Yes
// // // //             </label>
// // // //             <label className="flex items-center">
// // // //               <input
// // // //                 type="radio"
// // // //                 name="medicalCondition"
// // // //                 onChange={() => setHasMedicalCondition(false)}
// // // //                 className="mr-2"
// // // //               />
// // // //               No
// // // //             </label>
// // // //           </div>
          
// // // //           {hasMedicalCondition && (
// // // //             <textarea
// // // //               placeholder="Please describe your medical condition"
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mb-4"
// // // //               rows="3"
// // // //             />
// // // //           )}
// // // //         </div>
        
// // // //         <div className="col-span-2 mb-4">
// // // //           <p className="mb-2">Fitness Goals</p>
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full">
// // // //             <option value="">Select Your Primary Fitness Goal</option>
// // // //             <option value="Weight Loss">Weight Loss</option>
// // // //             <option value="Muscle Gain">Muscle Gain</option>
// // // //             <option value="Improved Stamina">Improved Stamina</option>
// // // //             <option value="General Fitness">General Fitness</option>
// // // //             <option value="Strength Training">Strength Training</option>
// // // //             <option value="Flexibility">Flexibility</option>
// // // //             <option value="Sports Performance">Sports Performance</option>
// // // //             <option value="Rehabilitation">Rehabilitation</option>
// // // //           </select>
// // // //           <textarea
// // // //             placeholder="Additional details about your fitness goals"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mt-4"
// // // //             rows="3"
// // // //           />
// // // //         </div>

// // // //         {/* Form Actions */}
// // // //         <div className="col-span-2 flex justify-end space-x-4 mt-4">
// // // //           <button
// // // //             type="reset"
// // // //             className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500"
// // // //           >
// // // //             Reset
// // // //           </button>
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
// // // //           >
// // // //             Add Member
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddMember = () => {
// // // //   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
// // // //       <div className="bg-gray-800 p-6 rounded-lg text-white w-4/5 max-w-4xl h-auto overflow-y-auto shadow-lg">
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
// // // //         <form className="grid grid-cols-2 gap-4">
// // // //           {/* Personal Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Full Name"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Address"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Pincode"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             placeholder="Mobile Number"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             placeholder="Age"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //             <option value="">Select Gender</option>
// // // //             <option value="Male">Male</option>
// // // //             <option value="Female">Female</option>
// // // //             <option value="Other">Other</option>
// // // //           </select>
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //             <option value="">Blood Group</option>
// // // //             <option value="A+">A+</option>
// // // //             <option value="A-">A-</option>
// // // //             <option value="B+">B+</option>
// // // //             <option value="B-">B-</option>
// // // //             <option value="AB+">AB+</option>
// // // //             <option value="AB-">AB-</option>
// // // //             <option value="O+">O+</option>
// // // //             <option value="O-">O-</option>
// // // //           </select>

// // // //           {/* Emergency Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Contact Name"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Relationship"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             placeholder="Emergency Contact Number"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
// // // //           />

// // // //           {/* Membership Details */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //             <option value="">Membership Plan</option>
// // // //             <option value="Monthly">Monthly</option>
// // // //             <option value="Quarterly">Quarterly</option>
// // // //             <option value="Yearly">Yearly</option>
// // // //           </select>
// // // //           <input
// // // //             type="date"
// // // //             placeholder="Date of Joining"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
// // // //             <option value="">Select Payment Type</option>
// // // //             <option value="Cash">Cash</option>
// // // //             <option value="Card">Card</option>
// // // //             <option value="Online">Online</option>
// // // //           </select>
// // // //           <input
// // // //             type="number"
// // // //             placeholder="Total Amount Received"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
// // // //           />

// // // //           {/* Health Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
// // // //           <div className="col-span-2">
// // // //             <p className="mb-2">Are you suffering from any disease?</p>
// // // //             <div className="flex space-x-4 mb-4">
// // // //               <label className="flex items-center">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="medicalCondition"
// // // //                   onChange={() => setHasMedicalCondition(true)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 Yes
// // // //               </label>
// // // //               <label className="flex items-center">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="medicalCondition"
// // // //                   onChange={() => setHasMedicalCondition(false)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 No
// // // //               </label>
// // // //             </div>
            
// // // //             {hasMedicalCondition && (
// // // //               <textarea
// // // //                 placeholder="Please describe your medical condition"
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mb-4"
// // // //                 rows="3"
// // // //               />
// // // //             )}
// // // //           </div>
          
// // // //           <div className="col-span-2 mb-4">
// // // //             <p className="mb-2">Fitness Goals</p>
// // // //             <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full">
// // // //               <option value="">Select Your Primary Fitness Goal</option>
// // // //               <option value="Weight Loss">Weight Loss</option>
// // // //               <option value="Muscle Gain">Muscle Gain</option>
// // // //               <option value="Improved Stamina">Improved Stamina</option>
// // // //               <option value="General Fitness">General Fitness</option>
// // // //               <option value="Strength Training">Strength Training</option>
// // // //               <option value="Flexibility">Flexibility</option>
// // // //               <option value="Sports Performance">Sports Performance</option>
// // // //               <option value="Rehabilitation">Rehabilitation</option>
// // // //             </select>
// // // //             <textarea
// // // //               placeholder="Additional details about your fitness goals"
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mt-4"
// // // //               rows="3"
// // // //             />
// // // //           </div>

// // // //           {/* Form Actions */}
// // // //           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
// // // //             <button
// // // //               type="reset"
// // // //               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500"
// // // //             >
// // // //               Reset
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
// // // //             >
// // // //               Add Member
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddMember = () => {
// // // //   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
// // // //       {/* Changed width from w-4/5 to w-full to make it fit the background */}
// // // //       <div className="bg-gray-800 p-6 rounded-lg text-white w-full max-w-8xl h-auto overflow-y-auto shadow-lg">
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
// // // //         <form className="grid grid-cols-2 gap-4">
// // // //           {/* Personal Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Full Name"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Address"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Pincode"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             placeholder="Mobile Number"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             placeholder="Age"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
// // // //             <option value="">Select Gender</option>
// // // //             <option value="Male">Male</option>
// // // //             <option value="Female">Female</option>
// // // //             <option value="Other">Other</option>
// // // //           </select>
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
// // // //             <option value="">Blood Group</option>
// // // //             <option value="A+">A+</option>
// // // //             <option value="A-">A-</option>
// // // //             <option value="B+">B+</option>
// // // //             <option value="B-">B-</option>
// // // //             <option value="AB+">AB+</option>
// // // //             <option value="AB-">AB-</option>
// // // //             <option value="O+">O+</option>
// // // //             <option value="O-">O-</option>
// // // //           </select>

// // // //           {/* Emergency Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Contact Name"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Relationship"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             placeholder="Emergency Contact Number"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
// // // //           />

// // // //           {/* Membership Details */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
// // // //             <option value="">Membership Plan</option>
// // // //             <option value="Monthly">Monthly</option>
// // // //             <option value="Quarterly">Quarterly</option>
// // // //             <option value="Yearly">Yearly</option>
// // // //           </select>
// // // //           <input
// // // //             type="date"
// // // //             placeholder="Date of Joining"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
// // // //             <option value="">Select Payment Type</option>
// // // //             <option value="Cash">Cash</option>
// // // //             <option value="Card">Card</option>
// // // //             <option value="Online">Online</option>
// // // //           </select>
// // // //           <input
// // // //             type="number"
// // // //             placeholder="Total Amount Received"
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />

// // // //           {/* Health Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
// // // //           <div className="col-span-2">
// // // //             <p className="mb-2">Are you suffering from any disease?</p>
// // // //             <div className="flex space-x-4 mb-4">
// // // //               <label className="flex items-center">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="medicalCondition"
// // // //                   onChange={() => setHasMedicalCondition(true)}
// // // //                   className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //                 />
// // // //                 Yes
// // // //               </label>
// // // //               <label className="flex items-center">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="medicalCondition"
// // // //                   onChange={() => setHasMedicalCondition(false)}
// // // //                   className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //                 />
// // // //                 No
// // // //               </label>
// // // //             </div>
            
// // // //             {hasMedicalCondition && (
// // // //               <textarea
// // // //                 placeholder="Please describe your medical condition"
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                 rows="3"
// // // //               />
// // // //             )}
// // // //           </div>
          
// // // //           <div className="col-span-2 mb-4">
// // // //             <p className="mb-2">Fitness Goals</p>
// // // //             <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full">
// // // //               <option value="">Select Your Primary Fitness Goal</option>
// // // //               <option value="Weight Loss">Weight Loss</option>
// // // //               <option value="Muscle Gain">Muscle Gain</option>
// // // //               <option value="Improved Stamina">Improved Stamina</option>
// // // //               <option value="General Fitness">General Fitness</option>
// // // //               <option value="Strength Training">Strength Training</option>
// // // //               <option value="Flexibility">Flexibility</option>
// // // //               <option value="Sports Performance">Sports Performance</option>
// // // //               <option value="Rehabilitation">Rehabilitation</option>
// // // //             </select>
// // // //             <textarea
// // // //               placeholder="Additional details about your fitness goals"
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
// // // //               rows="3"
// // // //             />
// // // //           </div>

// // // //           {/* Form Actions */}
// // // //           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
// // // //             <button
// // // //               type="reset"
// // // //               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //             >
// // // //               Reset
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //             >
// // // //               Add Member
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddMember = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     address: '',
// // // //     pincode: '',
// // // //     mobileNumber: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     bloodGroup: '',
// // // //     contactName: '',
// // // //     relationship: '',
// // // //     emergencyContactNumber: '',
// // // //     membershipPlan: '',
// // // //     dateOfJoining: '',
// // // //     paymentType: '',
// // // //     totalAmountReceived: '',
// // // //     hasMedicalCondition: '',
// // // //     medicalConditionDescription: '',
// // // //     fitnessGoal: '',
// // // //     fitnessGoalDetails: ''
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
// // // //     try {
// // // //       const response = await fetch('/api/addMember', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });
// // // //       if (response.ok) {
// // // //         alert('Member added successfully!');
// // // //         handleReset();
// // // //       } else {
// // // //         alert('Failed to add member');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert('An error occurred while adding the member');
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       fullName: '',
// // // //       address: '',
// // // //       pincode: '',
// // // //       mobileNumber: '',
// // // //       age: '',
// // // //       gender: '',
// // // //       bloodGroup: '',
// // // //       contactName: '',
// // // //       relationship: '',
// // // //       emergencyContactNumber: '',
// // // //       membershipPlan: '',
// // // //       dateOfJoining: '',
// // // //       paymentType: '',
// // // //       totalAmountReceived: '',
// // // //       hasMedicalCondition: '',
// // // //       medicalConditionDescription: '',
// // // //       fitnessGoal: '',
// // // //       fitnessGoalDetails: ''
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
// // // //       <div className="bg-gray-800 p-6 rounded-lg text-white w-full max-w-8xl h-auto overflow-y-auto shadow-lg">
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
// // // //         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// // // //           {/* Personal Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             name="fullName"
// // // //             placeholder="Full Name"
// // // //             value={formData.fullName}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="address"
// // // //             placeholder="Address"
// // // //             value={formData.address}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="pincode"
// // // //             placeholder="Pincode"
// // // //             value={formData.pincode}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             name="mobileNumber"
// // // //             placeholder="Mobile Number"
// // // //             value={formData.mobileNumber}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="age"
// // // //             placeholder="Age"
// // // //             value={formData.age}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <select
// // // //             name="gender"
// // // //             value={formData.gender}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           >
// // // //             <option value="">Select Gender</option>
// // // //             <option value="Male">Male</option>
// // // //             <option value="Female">Female</option>
// // // //             <option value="Other">Other</option>
// // // //           </select>
// // // //           <select
// // // //             name="bloodGroup"
// // // //             value={formData.bloodGroup}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           >
// // // //             <option value="">Blood Group</option>
// // // //             <option value="A+">A+</option>
// // // //             <option value="A-">A-</option>
// // // //             <option value="B+">B+</option>
// // // //             <option value="B-">B-</option>
// // // //             <option value="AB+">AB+</option>
// // // //             <option value="AB-">AB-</option>
// // // //             <option value="O+">O+</option>
// // // //             <option value="O-">O-</option>
// // // //           </select>

// // // //           {/* Emergency Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
// // // //           <input
// // // //             type="text"
// // // //             name="contactName"
// // // //             placeholder="Contact Name"
// // // //             value={formData.contactName}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="relationship"
// // // //             placeholder="Relationship"
// // // //             value={formData.relationship}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <input
// // // //             type="tel"
// // // //             name="emergencyContactNumber"
// // // //             placeholder="Emergency Contact Number"
// // // //             value={formData.emergencyContactNumber}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
// // // //           />

// // // //           {/* Membership Details */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
// // // //           <select
// // // //             name="membershipPlan"
// // // //             value={formData.membershipPlan}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           >
// // // //             <option value="">Membership Plan</option>
// // // //             <option value="Monthly">Monthly</option>
// // // //             <option value="Quarterly">Quarterly</option>
// // // //             <option value="Yearly">Yearly</option>
// // // //           </select>
// // // //           <input
// // // //             type="date"
// // // //             name="dateOfJoining"
// // // //             placeholder="Date of Joining"
// // // //             value={formData.dateOfJoining}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />
// // // //           <select
// // // //             name="paymentType"
// // // //             value={formData.paymentType}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           >
// // // //             <option value="">Select Payment Type</option>
// // // //             <option value="Cash">Cash</option>
// // // //             <option value="Card">Card</option>
// // // //             <option value="Online">Online</option>
// // // //           </select>
// // // //           <input
// // // //             type="number"
// // // //             name="totalAmountReceived"
// // // //             placeholder="Total Amount Received"
// // // //             value={formData.totalAmountReceived}
// // // //             onChange={handleChange}
// // // //             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //           />

// // // //           {/* Health Information */}
// // // //           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
// // // //           <div className="col-span-2">
// // // //             <p className="mb-2">Are you suffering from any disease?</p>
// // // //             <select
// // // //               name="hasMedicalCondition"
// // // //               value={formData.hasMedicalCondition}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //             >
// // // //               <option value="">Select</option>
// // // //               <option value="Yes">Yes</option>
// // // //               <option value="No">No</option>
// // // //             </select>
            
// // // //             {formData.hasMedicalCondition === 'Yes' && (
// // // //               <textarea
// // // //                 name="medicalConditionDescription"
// // // //                 placeholder="Please describe your medical condition"
// // // //                 value={formData.medicalConditionDescription}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                 rows="3"
// // // //               />
// // // //             )}
// // // //           </div>
          
// // // //           <div className="col-span-2 mb-4">
// // // //             <p className="mb-2">Fitness Goals</p>
// // // //             <select
// // // //               name="fitnessGoal"
// // // //               value={formData.fitnessGoal}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
// // // //             >
// // // //               <option value="">Select Your Primary Fitness Goal</option>
// // // //               <option value="Weight Loss">Weight Loss</option>
// // // //               <option value="Muscle Gain">Muscle Gain</option>
// // // //               <option value="Improved Stamina">Improved Stamina</option>
// // // //               <option value="General Fitness">General Fitness</option>
// // // //               <option value="Strength Training">Strength Training</option>
// // // //               <option value="Flexibility">Flexibility</option>
// // // //               <option value="Sports Performance">Sports Performance</option>
// // // //               <option value="Rehabilitation">Rehabilitation</option>
// // // //             </select>
// // // //             <textarea
// // // //               name="fitnessGoalDetails"
// // // //               placeholder="Additional details about your fitness goals"
// // // //               value={formData.fitnessGoalDetails}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
// // // //               rows="3"
// // // //             />
// // // //           </div>

// // // //           {/* Form Actions */}
// // // //           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
// // // //             <button
// // // //               type="button"
// // // //               onClick={handleReset}
// // // //               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //             >
// // // //               Reset
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //             >
// // // //               Add Member
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddMember = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     address: '',
// // // //     pincode: '',
// // // //     mobileNumber: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     bloodGroup: '',
// // // //     contactName: '',
// // // //     relationship: '',
// // // //     emergencyContactNumber: '',
// // // //     membershipPlan: '',
// // // //     dateOfJoining: '',
// // // //     paymentType: '',
// // // //     totalAmountReceived: '',
// // // //     hasMedicalCondition: '',
// // // //     medicalConditionDescription: '',
// // // //     fitnessGoal: '',
// // // //     fitnessGoalDetails: ''
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
// // // //     try {
// // // //       const response = await fetch('/api/addMember', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });
// // // //       if (response.ok) {
// // // //         alert('Member added successfully!');
// // // //         handleReset();
// // // //       } else {
// // // //         alert('Failed to add member');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert('An error occurred while adding the member');
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       fullName: '',
// // // //       address: '',
// // // //       pincode: '',
// // // //       mobileNumber: '',
// // // //       age: '',
// // // //       gender: '',
// // // //       bloodGroup: '',
// // // //       contactName: '',
// // // //       relationship: '',
// // // //       emergencyContactNumber: '',
// // // //       membershipPlan: '',
// // // //       dateOfJoining: '',
// // // //       paymentType: '',
// // // //       totalAmountReceived: '',
// // // //       hasMedicalCondition: '',
// // // //       medicalConditionDescription: '',
// // // //       fitnessGoal: '',
// // // //       fitnessGoalDetails: ''
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// // // //       <div className="w-full max-w-8xl">
// // // //         {/* Add Member Title Outside the Box */}
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white">Add New Member</h2>

// // // //         {/* Form Box */}
// // // //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// // // //             {/* Personal Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="fullName"
// // // //               placeholder="Full Name"
// // // //               value={formData.fullName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="address"
// // // //               placeholder="Address"
// // // //               value={formData.address}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               placeholder="Pincode"
// // // //               value={formData.pincode}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="mobileNumber"
// // // //               placeholder="Mobile Number"
// // // //               value={formData.mobileNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               name="age"
// // // //               placeholder="Age"
// // // //               value={formData.age}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <select
// // // //               name="gender"
// // // //               value={formData.gender}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Select Gender</option>
// // // //               <option value="Male">Male</option>
// // // //               <option value="Female">Female</option>
// // // //               <option value="Other">Other</option>
// // // //             </select>
// // // //             <select
// // // //               name="bloodGroup"
// // // //               value={formData.bloodGroup}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Blood Group</option>
// // // //               <option value="A+">A+</option>
// // // //               <option value="A-">A-</option>
// // // //               <option value="B+">B+</option>
// // // //               <option value="B-">B-</option>
// // // //               <option value="AB+">AB+</option>
// // // //               <option value="AB-">AB-</option>
// // // //               <option value="O+">O+</option>
// // // //               <option value="O-">O-</option>
// // // //             </select>

// // // //             {/* Emergency Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="contactName"
// // // //               placeholder="Contact Name"
// // // //               value={formData.contactName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="relationship"
// // // //               placeholder="Relationship"
// // // //               value={formData.relationship}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="emergencyContactNumber"
// // // //               placeholder="Emergency Contact Number"
// // // //               value={formData.emergencyContactNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
// // // //             />

// // // //             {/* Membership Details */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
// // // //             <select
// // // //               name="membershipPlan"
// // // //               value={formData.membershipPlan}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Membership Plan</option>
// // // //               <option value="Monthly">Monthly</option>
// // // //               <option value="Quarterly">Quarterly</option>
// // // //               <option value="Yearly">Yearly</option>
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               name="dateOfJoining"
// // // //               placeholder="Date of Joining"
// // // //               value={formData.dateOfJoining}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <select
// // // //               name="paymentType"
// // // //               value={formData.paymentType}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Select Payment Type</option>
// // // //               <option value="Cash">Cash</option>
// // // //               <option value="Card">Card</option>
// // // //               <option value="Online">Online</option>
// // // //             </select>
// // // //             <input
// // // //               type="number"
// // // //               name="totalAmountReceived"
// // // //               placeholder="Total Amount Received"
// // // //               value={formData.totalAmountReceived}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />

// // // //             {/* Health Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
// // // //             <div className="col-span-2">
// // // //               <p className="mb-2">Are you suffering from any disease?</p>
// // // //               <select
// // // //                 name="hasMedicalCondition"
// // // //                 value={formData.hasMedicalCondition}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //               >
// // // //                 <option value="">Select</option>
// // // //                 <option value="Yes">Yes</option>
// // // //                 <option value="No">No</option>
// // // //               </select>
              
// // // //               {formData.hasMedicalCondition === 'Yes' && (
// // // //                 <textarea
// // // //                   name="medicalConditionDescription"
// // // //                   placeholder="Please describe your medical condition"
// // // //                   value={formData.medicalConditionDescription}
// // // //                   onChange={handleChange}
// // // //                   className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                   rows="3"
// // // //                 />
// // // //               )}
// // // //             </div>
            
// // // //             <div className="col-span-2 mb-4">
// // // //               <p className="mb-2">Fitness Goals</p>
// // // //               <select
// // // //                 name="fitnessGoal"
// // // //                 value={formData.fitnessGoal}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
// // // //               >
// // // //                 <option value="">Select Your Primary Fitness Goal</option>
// // // //                 <option value="Weight Loss">Weight Loss</option>
// // // //                 <option value="Muscle Gain">Muscle Gain</option>
// // // //                 <option value="Improved Stamina">Improved Stamina</option>
// // // //                 <option value="General Fitness">General Fitness</option>
// // // //                 <option value="Strength Training">Strength Training</option>
// // // //                 <option value="Flexibility">Flexibility</option>
// // // //                 <option value="Sports Performance">Sports Performance</option>
// // // //                 <option value="Rehabilitation">Rehabilitation</option>
// // // //               </select>
// // // //               <textarea
// // // //                 name="fitnessGoalDetails"
// // // //                 placeholder="Additional details about your fitness goals"
// // // //                 value={formData.fitnessGoalDetails}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
// // // //                 rows="3"
// // // //               />
// // // //             </div>

// // // //             {/* Form Actions */}
// // // //             <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 ">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //               >
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //               >
// // // //                 Add Member
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;/
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState } from 'react';

// // // // const AddMember = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     address: '',
// // // //     pincode: '',
// // // //     mobileNumber: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     bloodGroup: '',
// // // //     contactName: '',
// // // //     relationship: '',
// // // //     emergencyContactNumber: '',
// // // //     membershipPlan: '',
// // // //     dateOfJoining: '',
// // // //     paymentType: '',
// // // //     totalAmountReceived: '',
// // // //     hasMedicalCondition: '',
// // // //     medicalConditionDescription: '',
// // // //     fitnessGoal: '',
// // // //     fitnessGoalDetails: ''
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
// // // //     try {
// // // //       const response = await fetch('/api/addMember', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });
// // // //       if (response.ok) {
// // // //         alert('Member added successfully!');
// // // //         handleReset();
// // // //       } else {
// // // //         alert('Failed to add member');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert('An error occurred while adding the member');
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       fullName: '',
// // // //       address: '',
// // // //       pincode: '',
// // // //       mobileNumber: '',
// // // //       age: '',
// // // //       gender: '',
// // // //       bloodGroup: '',
// // // //       contactName: '',
// // // //       relationship: '',
// // // //       emergencyContactNumber: '',
// // // //       membershipPlan: '',
// // // //       dateOfJoining: '',
// // // //       paymentType: '',
// // // //       totalAmountReceived: '',
// // // //       hasMedicalCondition: '',
// // // //       medicalConditionDescription: '',
// // // //       fitnessGoal: '',
// // // //       fitnessGoalDetails: ''
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// // // //       <div className="w-full max-w-8xl">
// // // //         {/* Add Member Title Outside the Box */}
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white">Add New Member</h2>

// // // //         {/* Form Box */}
// // // //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// // // //             {/* Personal Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">Personal Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="fullName"
// // // //               placeholder="Full Name"
// // // //               value={formData.fullName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="address"
// // // //               placeholder="Address"
// // // //               value={formData.address}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               placeholder="Pincode"
// // // //               value={formData.pincode}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="mobileNumber"
// // // //               placeholder="Mobile Number"
// // // //               value={formData.mobileNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               name="age"
// // // //               placeholder="Age"
// // // //               value={formData.age}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <select
// // // //               name="gender"
// // // //               value={formData.gender}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Select Gender</option>
// // // //               <option value="Male">Male</option>
// // // //               <option value="Female">Female</option>
// // // //               <option value="Other">Other</option>
// // // //             </select>
// // // //             <select
// // // //               name="bloodGroup"
// // // //               value={formData.bloodGroup}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Blood Group</option>
// // // //               <option value="A+">A+</option>
// // // //               <option value="A-">A-</option>
// // // //               <option value="B+">B+</option>
// // // //               <option value="B-">B-</option>
// // // //               <option value="AB+">AB+</option>
// // // //               <option value="AB-">AB-</option>
// // // //               <option value="O+">O+</option>
// // // //               <option value="O-">O-</option>
// // // //             </select>

// // // //             {/* Emergency Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Emergency Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="contactName"
// // // //               placeholder="Contact Name"
// // // //               value={formData.contactName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="relationship"
// // // //               placeholder="Relationship"
// // // //               value={formData.relationship}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="emergencyContactNumber"
// // // //               placeholder="Emergency Contact Number"
// // // //               value={formData.emergencyContactNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
// // // //             />

// // // //             {/* Membership Details */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Membership Details</h3>
// // // //             <select
// // // //               name="membershipPlan"
// // // //               value={formData.membershipPlan}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Membership Plan</option>
// // // //               <option value="Monthly">Monthly</option>
// // // //               <option value="Quarterly">Quarterly</option>
// // // //               <option value="Yearly">Yearly</option>
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               name="dateOfJoining"
// // // //               placeholder="Date of Joining"
// // // //               value={formData.dateOfJoining}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <select
// // // //               name="paymentType"
// // // //               value={formData.paymentType}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Select Payment Type</option>
// // // //               <option value="Cash">Cash</option>
// // // //               <option value="Card">Card</option>
// // // //               <option value="Online">Online</option>
// // // //             </select>
// // // //             <input
// // // //               type="number"
// // // //               name="totalAmountReceived"
// // // //               placeholder="Total Amount Received"
// // // //               value={formData.totalAmountReceived}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />

// // // //             {/* Health Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Health Information</h3>
// // // //             <div className="col-span-2">
// // // //               <p className="mb-2">Are you suffering from any disease?</p>
// // // //               <select
// // // //                 name="hasMedicalCondition"
// // // //                 value={formData.hasMedicalCondition}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //               >
// // // //                 <option value="">Select</option>
// // // //                 <option value="Yes">Yes</option>
// // // //                 <option value="No">No</option>
// // // //               </select>
              
// // // //               {formData.hasMedicalCondition === 'Yes' && (
// // // //                 <textarea
// // // //                   name="medicalConditionDescription"
// // // //                   placeholder="Please describe your medical condition"
// // // //                   value={formData.medicalConditionDescription}
// // // //                   onChange={handleChange}
// // // //                   className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                   rows="3"
// // // //                 />
// // // //               )}
// // // //             </div>
            
// // // //             <div className="col-span-2 mb-4">
// // // //               <p className="mb-2 text-red-500 font-semibold">Fitness Goals</p>
// // // //               <select
// // // //                 name="fitnessGoal"
// // // //                 value={formData.fitnessGoal}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
// // // //               >
// // // //                 <option value="">Select Your Primary Fitness Goal</option>
// // // //                 <option value="Weight Loss">Weight Loss</option>
// // // //                 <option value="Muscle Gain">Muscle Gain</option>
// // // //                 <option value="Improved Stamina">Improved Stamina</option>
// // // //                 <option value="General Fitness">General Fitness</option>
// // // //                 <option value="Strength Training">Strength Training</option>
// // // //                 <option value="Flexibility">Flexibility</option>
// // // //                 <option value="Sports Performance">Sports Performance</option>
// // // //                 <option value="Rehabilitation">Rehabilitation</option>
// // // //               </select>
// // // //               <textarea
// // // //                 name="fitnessGoalDetails"
// // // //                 placeholder="Additional details about your fitness goals"
// // // //                 value={formData.fitnessGoalDetails}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
// // // //                 rows="3"
// // // //               />
// // // //             </div>

// // // //             {/* Form Actions */}
// // // //             <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 ">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //               >
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //               >
// // // //                 Add Member
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState, useRef } from 'react';
// // // // import Image from 'next/image';

// // // // const AddMember = () => {
// // // //   const router = useRouter(); // Initialize router for redirection
// // // //   const fileInputRef = useRef(null);
// // // //   const [photoPreview, setPhotoPreview] = useState(null);
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     address: '',
// // // //     pincode: '',
// // // //     mobileNumber: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     bloodGroup: '',
// // // //     contactName: '',
// // // //     relationship: '',
// // // //     emergencyContactNumber: '',
// // // //     membershipPlan: '',
// // // //     trainer: '',
// // // //     dateOfJoining: '',
// // // //     paymentType: '',
// // // //     totalAmountReceived: '',
// // // //     hasMedicalCondition: '',
// // // //     medicalConditionDescription: '',
// // // //     fitnessGoal: '',
// // // //     fitnessGoalDetails: '',
// // // //     photo: null
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value
// // // //     });
// // // //   };

// // // //   const handlePhotoChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       setFormData({
// // // //         ...formData,
// // // //         photo: file
// // // //       });
      
// // // //       // Create a preview URL for the selected image
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setPhotoPreview(reader.result);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const triggerFileInput = () => {
// // // //     fileInputRef.current.click();
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     try {
// // // //       // Create a FormData object to handle file upload
// // // //       const submitData = new FormData();
      
// // // //       // Append all form fields to FormData
// // // //       Object.keys(formData).forEach(key => {
// // // //         if (key === 'photo' && formData[key]) {
// // // //           submitData.append('photo', formData[key]);
// // // //         } else {
// // // //           submitData.append(key, formData[key]);
// // // //         }
// // // //       });
      
// // // //       const response = await fetch('/api/addMember', {
// // // //         method: 'POST',
// // // //         body: submitData, // Send FormData instead of JSON
// // // //       });
      
// // // //       if (response.ok) {
// // // //         alert('Member added successfully!');
// // // //         router.push('/members'); // Redirect to members page
// // // //       } else {
// // // //         alert('Failed to add member');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert('An error occurred while adding the member');
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       fullName: '',
// // // //       email: '',
// // // //       address: '',
// // // //       pincode: '',
// // // //       mobileNumber: '',
// // // //       age: '',
// // // //       gender: '',
// // // //       bloodGroup: '',
// // // //       contactName: '',
// // // //       relationship: '',
// // // //       emergencyContactNumber: '',
// // // //       membershipPlan: '',
// // // //       trainer: '',
// // // //       dateOfJoining: '',
// // // //       paymentType: '',
// // // //       totalAmountReceived: '',
// // // //       hasMedicalCondition: '',
// // // //       medicalConditionDescription: '',
// // // //       fitnessGoal: '',
// // // //       fitnessGoalDetails: '',
// // // //       photo: null
// // // //     });
// // // //     setPhotoPreview(null);
// // // //   };

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// // // //       <div className="w-full max-w-8xl">
// // // //         {/* Add Member Title Outside the Box */}
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white">Add New Member</h2>

// // // //         {/* Form Box */}
// // // //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            
// // // //             {/* Photo Upload Section */}
// // // //             <div className="col-span-2 flex flex-col items-center mb-6">
// // // //               <div 
// // // //                 className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400"
// // // //                 onClick={triggerFileInput}
// // // //               >
// // // //                 {photoPreview ? (
// // // //                   <img src={photoPreview} alt="Member Photo" className="w-full h-full object-cover" />
// // // //                 ) : (
// // // //                   <div className="text-center">
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //                     </svg>
// // // //                     <p className="text-sm text-gray-400 mt-1">Add Photo</p>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //               <input 
// // // //                 ref={fileInputRef}
// // // //                 type="file" 
// // // //                 accept="image/*" 
// // // //                 onChange={handlePhotoChange}
// // // //                 className="hidden"
// // // //               />
// // // //             </div>

// // // //             {/* Personal Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">Personal Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="fullName"
// // // //               placeholder="Full Name"
// // // //               value={formData.fullName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Email Address"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="address"
// // // //               placeholder="Address"
// // // //               value={formData.address}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               placeholder="Pincode"
// // // //               value={formData.pincode}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="mobileNumber"
// // // //               placeholder="Mobile Number"
// // // //               value={formData.mobileNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               name="age"
// // // //               placeholder="Age"
// // // //               value={formData.age}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />
// // // //             <select
// // // //               name="gender"
// // // //               value={formData.gender}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             >
// // // //               <option value="">Select Gender</option>
// // // //               <option value="Male">Male</option>
// // // //               <option value="Female">Female</option>
// // // //               <option value="Other">Other</option>
// // // //             </select>
// // // //             <select
// // // //               name="bloodGroup"
// // // //               value={formData.bloodGroup}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             >
// // // //               <option value="">Blood Group</option>
// // // //               <option value="A+">A+</option>
// // // //               <option value="A-">A-</option>
// // // //               <option value="B+">B+</option>
// // // //               <option value="B-">B-</option>
// // // //               <option value="AB+">AB+</option>
// // // //               <option value="AB-">AB-</option>
// // // //               <option value="O+">O+</option>
// // // //               <option value="O-">O-</option>
// // // //             </select>

// // // //             {/* Emergency Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Emergency Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="contactName"
// // // //               placeholder="Contact Name"
// // // //               value={formData.contactName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="relationship"
// // // //               placeholder="Relationship"
// // // //               value={formData.relationship}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="emergencyContactNumber"
// // // //               placeholder="Emergency Contact Number"
// // // //               value={formData.emergencyContactNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
// // // //             />

// // // //             {/* Membership Details */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Membership Details</h3>
// // // //             <select
// // // //               name="membershipPlan"
// // // //               value={formData.membershipPlan}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             >
// // // //               <option value="">Membership Plan</option>
// // // //               <option value="Monthly">Monthly</option>
// // // //               <option value="Quarterly">Quarterly</option>
// // // //               <option value="Yearly">Yearly</option>
// // // //             </select>
// // // //             <select
// // // //               name="trainer"
// // // //               value={formData.trainer}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             >
// // // //               <option value="">Select Trainer</option>
// // // //               <option value="John Doe">John Doe</option>
// // // //               <option value="Jane Smith">Jane Smith</option>
// // // //               <option value="Mike Johnson">Mike Johnson</option>
// // // //               <option value="Sarah Williams">Sarah Williams</option>
// // // //               <option value="None">No Trainer</option>
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               name="dateOfJoining"
// // // //               placeholder="Date of Joining"
// // // //               value={formData.dateOfJoining}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />
// // // //             <select
// // // //               name="paymentType"
// // // //               value={formData.paymentType}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             >
// // // //               <option value="">Select Payment Type</option>
// // // //               <option value="Cash">Cash</option>
// // // //               <option value="Card">Card</option>
// // // //               <option value="Online">Online</option>
// // // //             </select>
// // // //             <input
// // // //               type="number"
// // // //               name="totalAmountReceived"
// // // //               placeholder="Total Amount Received"
// // // //               value={formData.totalAmountReceived}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
// // // //               required
// // // //             />

// // // //             {/* Health Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Health Information</h3>
// // // //             <div className="col-span-2">
// // // //               <p className="mb-2">Are you suffering from any disease?</p>
// // // //               <select
// // // //                 name="hasMedicalCondition"
// // // //                 value={formData.hasMedicalCondition}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select</option>
// // // //                 <option value="Yes">Yes</option>
// // // //                 <option value="No">No</option>
// // // //               </select>
              
// // // //               {formData.hasMedicalCondition === 'Yes' && (
// // // //                 <textarea
// // // //                   name="medicalConditionDescription"
// // // //                   placeholder="Please describe your medical condition"
// // // //                   value={formData.medicalConditionDescription}
// // // //                   onChange={handleChange}
// // // //                   className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
// // // //                   rows="3"
// // // //                   required
// // // //                 />
// // // //               )}
// // // //             </div>
            
// // // //             <div className="col-span-2 mb-4">
// // // //               <p className="mb-2 text-red-500 font-semibold">Fitness Goals</p>
// // // //               <select
// // // //                 name="fitnessGoal"
// // // //                 value={formData.fitnessGoal}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select Your Primary Fitness Goal</option>
// // // //                 <option value="Weight Loss">Weight Loss</option>
// // // //                 <option value="Muscle Gain">Muscle Gain</option>
// // // //                 <option value="Improved Stamina">Improved Stamina</option>
// // // //                 <option value="General Fitness">General Fitness</option>
// // // //                 <option value="Strength Training">Strength Training</option>
// // // //                 <option value="Flexibility">Flexibility</option>
// // // //                 <option value="Sports Performance">Sports Performance</option>
// // // //                 <option value="Rehabilitation">Rehabilitation</option>
// // // //               </select>
// // // //               <textarea
// // // //                 name="fitnessGoalDetails"
// // // //                 placeholder="Additional details about your fitness goals"
// // // //                 value={formData.fitnessGoalDetails}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
// // // //                 rows="3"
// // // //               />
// // // //             </div>

// // // //             {/* Form Actions */}
// // // //             <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 ">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //               >
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //               >
// // // //                 Add Member
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // // "use client"; // Mark this component as a Client Component
// // // // import { useRouter } from "next/navigation";
// // // // import React, { useState, useRef } from 'react';
// // // // import Image from 'next/image';

// // // // const AddMember = () => {
// // // //   const router = useRouter(); // Initialize router for redirection
// // // //   const fileInputRef = useRef(null);
// // // //   const [photoPreview, setPhotoPreview] = useState(null);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [successMessage, setSuccessMessage] = useState(null);

// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     address: '',
// // // //     pincode: '',
// // // //     mobileNumber: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     bloodGroup: '',
// // // //     contactName: '',
// // // //     relationship: '',
// // // //     emergencyContactNumber: '',
// // // //     membershipPlan: '',
// // // //     trainer: '',
// // // //     dateOfJoining: '',
// // // //     paymentType: '',
// // // //     totalAmountReceived: '',
// // // //     hasMedicalCondition: '',
// // // //     medicalConditionDescription: '',
// // // //     fitnessGoal: '',
// // // //     fitnessGoalDetails: '',
// // // //     photo: null
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value
// // // //     });
// // // //   };

// // // //   const handlePhotoChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       setFormData({
// // // //         ...formData,
// // // //         photo: file
// // // //       });

// // // //       // Create a preview URL for the selected image
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setPhotoPreview(reader.result);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const triggerFileInput = () => {
// // // //     fileInputRef.current.click();
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
// // // //     setError(null);
// // // //     setSuccessMessage(null);

// // // //     try {
// // // //       // Create a FormData object to handle file upload
// // // //       const submitData = new FormData();

// // // //       // Append all form fields to FormData
// // // //       Object.keys(formData).forEach(key => {
// // // //         if (key === 'photo' && formData[key]) {
// // // //           submitData.append('photo', formData[key]);
// // // //         } else {
// // // //           submitData.append(key, formData[key]);
// // // //         }
// // // //       });

// // // //       const response = await fetch('/api/addMember', {
// // // //         method: 'POST',
// // // //         body: submitData, // Send FormData instead of JSON
// // // //       });

// // // //       if (response.ok) {
// // // //         setSuccessMessage('Member added successfully!');
// // // //         setTimeout(() => {
// // // //           router.push('/members'); // Redirect to members page
// // // //         }, 2000);
// // // //       } else {
// // // //         const errorData = await response.json();
// // // //         setError(errorData.message || 'Failed to add member');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       setError('An error occurred while adding the member');
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setFormData({
// // // //       fullName: '',
// // // //       email: '',
// // // //       address: '',
// // // //       pincode: '',
// // // //       mobileNumber: '',
// // // //       age: '',
// // // //       gender: '',
// // // //       bloodGroup: '',
// // // //       contactName: '',
// // // //       relationship: '',
// // // //       emergencyContactNumber: '',
// // // //       membershipPlan: '',
// // // //       trainer: '',
// // // //       dateOfJoining: '',
// // // //       paymentType: '',
// // // //       totalAmountReceived: '',
// // // //       hasMedicalCondition: '',
// // // //       medicalConditionDescription: '',
// // // //       fitnessGoal: '',
// // // //       fitnessGoalDetails: '',
// // // //       photo: null
// // // //     });
// // // //     setPhotoPreview(null);
// // // //     setError(null);
// // // //     setSuccessMessage(null);
// // // //   };

// // // //   return (
// // // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// // // //       <div className="w-full max-w-8xl">
// // // //         {/* Add Member Title Outside the Box */}
// // // //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white dark:bg-gray-900">Add New Member</h2>

// // // //         {/* Form Box */}
// // // //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg dark:bg-gray-900">
// // // //           {error && (
// // // //             <div className="bg-red-500 text-white p-4 rounded mb-6">
// // // //               {error}
// // // //             </div>
// // // //           )}
// // // //           {successMessage && (
// // // //             <div className="bg-green-500 text-white p-4 rounded mb-6">
// // // //               {successMessage}
// // // //             </div>
// // // //           )}

// // // //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// // // //             {/* Photo Upload Section */}
// // // //             <div className="col-span-2 flex flex-col items-center mb-6">
// // // //               <div 
// // // //                 className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 dark:bg-gray-700"
// // // //                 onClick={triggerFileInput}
// // // //               >
// // // //                 {photoPreview ? (
// // // //                   <img src={photoPreview} alt="Member Photo" className="w-full h-full object-cover" />
// // // //                 ) : (
// // // //                   <div className="text-center">
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // // //                     </svg>
// // // //                     <p className="text-sm text-gray-400 mt-1">Add Photo</p>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //               <input 
// // // //                 ref={fileInputRef}
// // // //                 type="file" 
// // // //                 accept="image/*" 
// // // //                 onChange={handlePhotoChange}
// // // //                 className="hidden"
// // // //               />
// // // //             </div>

// // // //             {/* Personal Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">Personal Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="fullName"
// // // //               placeholder="Full Name"
// // // //               value={formData.fullName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Email Address"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="address"
// // // //               placeholder="Address"
// // // //               value={formData.address}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               placeholder="Pincode"
// // // //               value={formData.pincode}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="mobileNumber"
// // // //               placeholder="Mobile Number"
// // // //               value={formData.mobileNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               name="age"
// // // //               placeholder="Age"
// // // //               value={formData.age}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />
// // // //             <select
// // // //               name="gender"
// // // //               value={formData.gender}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             >
// // // //               <option value="">Select Gender</option>
// // // //               <option value="Male">Male</option>
// // // //               <option value="Female">Female</option>
// // // //               <option value="Other">Other</option>
// // // //             </select>
// // // //             <select
// // // //               name="bloodGroup"
// // // //               value={formData.bloodGroup}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //             >
// // // //               <option value="">Blood Group</option>
// // // //               <option value="A+">A+</option>
// // // //               <option value="A-">A-</option>
// // // //               <option value="B+">B+</option>
// // // //               <option value="B-">B-</option>
// // // //               <option value="AB+">AB+</option>
// // // //               <option value="AB-">AB-</option>
// // // //               <option value="O+">O+</option>
// // // //               <option value="O-">O-</option>
// // // //             </select>

// // // //             {/* Emergency Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Emergency Information</h3>
// // // //             <input
// // // //               type="text"
// // // //               name="contactName"
// // // //               placeholder="Contact Name"
// // // //               value={formData.contactName}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="relationship"
// // // //               placeholder="Relationship"
// // // //               value={formData.relationship}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="emergencyContactNumber"
// // // //               placeholder="Emergency Contact Number"
// // // //               value={formData.emergencyContactNumber}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 col-span-2"
// // // //             />

// // // //             {/* Membership Details */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Membership Details</h3>
// // // //             <select
// // // //               name="membershipPlan"
// // // //               value={formData.membershipPlan}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             >
// // // //               <option value="">Membership Plan</option>
// // // //               <option value="Monthly">Monthly</option>
// // // //               <option value="Quarterly">Quarterly</option>
// // // //               <option value="Yearly">Yearly</option>
// // // //             </select>
// // // //             <select
// // // //               name="trainer"
// // // //               value={formData.trainer}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             >
// // // //               <option value="">Select Trainer</option>
// // // //               <option value="John Doe">John Doe</option>
// // // //               <option value="Jane Smith">Jane Smith</option>
// // // //               <option value="Mike Johnson">Mike Johnson</option>
// // // //               <option value="Sarah Williams">Sarah Williams</option>
// // // //               <option value="None">No Trainer</option>
// // // //             </select>
// // // //             <input
// // // //               type="date"
// // // //               name="dateOfJoining"
// // // //               placeholder="Date of Joining"
// // // //               value={formData.dateOfJoining}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />
// // // //             <select
// // // //               name="paymentType"
// // // //               value={formData.paymentType}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             >
// // // //               <option value="">Select Payment Type</option>
// // // //               <option value="Cash">Cash</option>
// // // //               <option value="Card">Card</option>
// // // //               <option value="Online">Online</option>
// // // //             </select>
// // // //             <input
// // // //               type="number"
// // // //               name="totalAmountReceived"
// // // //               placeholder="Total Amount Received"
// // // //               value={formData.totalAmountReceived}
// // // //               onChange={handleChange}
// // // //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// // // //               required
// // // //             />

// // // //             {/* Health Information */}
// // // //             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Health Information</h3>
// // // //             <div className="col-span-2">
// // // //               <p className="mb-2">Are you suffering from any disease?</p>
// // // //               <select
// // // //                 name="hasMedicalCondition"
// // // //                 value={formData.hasMedicalCondition}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full mb-4"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select</option>
// // // //                 <option value="Yes">Yes</option>
// // // //                 <option value="No">No</option>
// // // //               </select>
              
// // // //               {formData.hasMedicalCondition === 'Yes' && (
// // // //                 <textarea
// // // //                   name="medicalConditionDescription"
// // // //                   placeholder="Please describe your medical condition"
// // // //                   value={formData.medicalConditionDescription}
// // // //                   onChange={handleChange}
// // // //                   className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full mb-4"
// // // //                   rows="3"
// // // //                   required
// // // //                 />
// // // //               )}
// // // //             </div>
            
// // // //             <div className="col-span-2 mb-4">
// // // //               <p className="mb-2 text-red-500 font-semibold">Fitness Goals</p>
// // // //               <select
// // // //                 name="fitnessGoal"
// // // //                 value={formData.fitnessGoal}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full"
// // // //                 required
// // // //               >
// // // //                 <option value="">Select Your Primary Fitness Goal</option>
// // // //                 <option value="Weight Loss">Weight Loss</option>
// // // //                 <option value="Muscle Gain">Muscle Gain</option>
// // // //                 <option value="Improved Stamina">Improved Stamina</option>
// // // //                 <option value="General Fitness">General Fitness</option>
// // // //                 <option value="Strength Training">Strength Training</option>
// // // //                 <option value="Flexibility">Flexibility</option>
// // // //                 <option value="Sports Performance">Sports Performance</option>
// // // //                 <option value="Rehabilitation">Rehabilitation</option>
// // // //               </select>
// // // //               <textarea
// // // //                 name="fitnessGoalDetails"
// // // //                 placeholder="Additional details about your fitness goals"
// // // //                 value={formData.fitnessGoalDetails}
// // // //                 onChange={handleChange}
// // // //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full mt-4"
// // // //                 rows="3"
// // // //               />
// // // //             </div>

// // // //             {/* Form Actions */}
// // // //             <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 dark:bg-gray-900">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={handleReset}
// // // //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// // // //               >
// // // //                 Reset
// // // //               </button>
// // // //               <button
// // // //                 type="submit"
// // // //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// // // //                 disabled={isSubmitting}
// // // //               >
// // // //                 {isSubmitting ? 'Submitting...' : 'Add Member'}
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddMember;
// // // "use client";
// // // import { useRouter } from "next/navigation";
// // // import React, { useState } from "react";

// // // const AddMember = () => {
// // //   const router = useRouter();
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [successMessage, setSuccessMessage] = useState(null);

// // //   const [formData, setFormData] = useState({
// // //     full_name: "",
// // //     email: "",
// // //     phone_number: "",
// // //     age: "",
// // //     gender: "",
// // //     pincode: "",
// // //     emergency_contact: "",
// // //     membership_plan: "",
// // //     amount_paid: "",
// // //     payment_date: "",
// // //     renewal_date: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     setError(null);
// // //     setSuccessMessage(null);

// // //     try {
// // //       // Validate required fields
// // //       if (
// // //         !formData.full_name ||
// // //         !formData.email ||
// // //         !formData.phone_number ||
// // //         !formData.age ||
// // //         !formData.gender ||
// // //         !formData.pincode ||
// // //         !formData.emergency_contact ||
// // //         !formData.membership_plan ||
// // //         !formData.amount_paid ||
// // //         !formData.payment_date ||
// // //         !formData.renewal_date
// // //       ) {
// // //         setError("All fields are required");
// // //         return;
// // //       }

// // //       // Log form data for debugging
// // //       console.log("Form Data:", formData);

// // //       // Send JSON data to the server
// // //       const response = await fetch("http://localhost:5000/api/admin/members", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       // Log response for debugging
// // //       console.log("Response Status:", response.status);
// // //       console.log("Response OK:", response.ok);

// // //       if (response.ok) {
// // //         const responseData = await response.json();
// // //         console.log("Response Data:", responseData);
// // //         setSuccessMessage("Member added successfully!");
// // //         setTimeout(() => {
// // //           router.push("/members");
// // //         }, 2000);
// // //       } else {
// // //         const errorData = await response.json();
// // //         console.error("Backend Error:", errorData);
// // //         setError(errorData.error || "Failed to add member");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error in handleSubmit:", error);
// // //       setError("An error occurred while adding the member");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const handleReset = () => {
// // //     setFormData({
// // //       full_name: "",
// // //       email: "",
// // //       phone_number: "",
// // //       age: "",
// // //       gender: "",
// // //       pincode: "",
// // //       emergency_contact: "",
// // //       membership_plan: "",
// // //       amount_paid: "",
// // //       payment_date: "",
// // //       renewal_date: "",
// // //     });
// // //     setError(null);
// // //     setSuccessMessage(null);
// // //   };

// // //   return (
// // //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0 bg-gradient-to-br from-gray-900 to-gray-800">
// // //       <div className="w-full max-w-4xl">
// // //         {/* Premium Header */}
// // //         <div className="bg-black bg-opacity-60 backdrop-blur-sm p-6 rounded-t-xl border-b border-red-500">
// // //           <h2 className="text-3xl font-bold text-white flex items-center">
// // //             <span className="mr-2">✦</span>
// // //             Add New Member
// // //             <span className="ml-2">✦</span>
// // //           </h2>
// // //           <p className="text-gray-300 mt-2 italic">Create a new membership profile</p>
// // //         </div>

// // //         {/* Form Container */}
// // //         <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-b-xl shadow-2xl border-l border-r border-b border-gray-700">
// // //           {/* Alert Messages */}
// // //           {error && (
// // //             <div className="bg-red-900 bg-opacity-70 text-white p-4 rounded-lg mb-6 border-l-4 border-red-500 flex items-center">
// // //               <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
// // //                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
// // //               </svg>
// // //               {error}
// // //             </div>
// // //           )}
          
// // //           {successMessage && (
// // //             <div className="bg-green-900 bg-opacity-70 text-white p-4 rounded-lg mb-6 border-l-4 border-green-500 flex items-center">
// // //               <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
// // //                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // //               </svg>
// // //               {successMessage}
// // //             </div>
// // //           )}

// // //           <form onSubmit={handleSubmit} className="space-y-8">
// // //             {/* Personal Information */}
// // //             <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
// // //               <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
// // //                 <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 text-white">1</span>
// // //                 Personal Information
// // //               </h3>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Full Name</label>
// // //                   <input
// // //                     type="text"
// // //                     name="full_name"
// // //                     value={formData.full_name}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Email Address</label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Phone Number</label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone_number"
// // //                     value={formData.phone_number}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Age</label>
// // //                   <input
// // //                     type="number"
// // //                     name="age"
// // //                     value={formData.age}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Gender</label>
// // //                   <select
// // //                     name="gender"
// // //                     value={formData.gender}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   >
// // //                     <option value="">Select Gender</option>
// // //                     <option value="Male">Male</option>
// // //                     <option value="Female">Female</option>
// // //                     <option value="Other">Other</option>
// // //                   </select>
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Pincode</label>
// // //                   <input
// // //                     type="text"
// // //                     name="pincode"
// // //                     value={formData.pincode}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Emergency Information */}
// // //             <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
// // //               <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
// // //                 <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 text-white">2</span>
// // //                 Emergency Information
// // //               </h3>
// // //               <div className="space-y-2">
// // //                 <label className="block text-gray-300 text-sm font-medium">Emergency Contact</label>
// // //                 <input
// // //                   type="tel"
// // //                   name="emergency_contact"
// // //                   value={formData.emergency_contact}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                   required
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Membership Details */}
// // //             <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
// // //               <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
// // //                 <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2 text-white">3</span>
// // //                 Membership Details
// // //               </h3>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Membership Plan</label>
// // //                   <select
// // //                     name="membership_plan"
// // //                     value={formData.membership_plan}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   >
// // //                     <option value="">Select Plan</option>
// // //                     <option value="Monthly">Monthly</option>
// // //                     <option value="Quarterly">Quarterly</option>
// // //                     <option value="Yearly">Yearly</option>
// // //                   </select>
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Amount Paid</label>
// // //                   <input
// // //                     type="number"
// // //                     name="amount_paid"
// // //                     value={formData.amount_paid}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Payment Date</label>
// // //                   <input
// // //                     type="date"
// // //                     name="payment_date"
// // //                     value={formData.payment_date}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
                
// // //                 <div className="space-y-2">
// // //                   <label className="block text-gray-300 text-sm font-medium">Renewal Date</label>
// // //                   <input
// // //                     type="date"
// // //                     name="renewal_date"
// // //                     value={formData.renewal_date}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-gray-900 bg-opacity-70 p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-600 transition-all duration-300"
// // //                     required
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Form Actions */}
// // //             <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700">
// // //               <button
// // //                 type="button"
// // //                 onClick={handleReset}
// // //                 className="bg-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
// // //               >
// // //                 Reset Form
// // //               </button>
// // //               <button
// // //                 type="submit"
// // //                 className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-lg font-medium hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 shadow-lg"
// // //                 disabled={isSubmitting}
// // //               >
// // //                 {isSubmitting ? (
// // //                   <span className="flex items-center">
// // //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                     </svg>
// // //                     Processing...
// // //                   </span>
// // //                 ) : (
// // //                   "Add Member"
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddMember;
// // import { useRouter } from "next/navigation";
// // import React, { useState } from "react";

// // const AddMember = () => {
// //   const router = useRouter();
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState(null);
// //   const [profilePhoto, setProfilePhoto] = useState(null);

// //   const [formData, setFormData] = useState({
// //     full_name: "",
// //     email: "",
// //     phone_number: "",
// //     age: "",
// //     gender: "",
// //     pincode: "",
// //     emergency_contact: "",
// //     membership_plan: "",
// //     amount_paid: "",
// //     payment_date: "",
// //     renewal_date: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handlePhotoChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
// //       setProfilePhoto(file);
// //     } else {
// //       alert("File size should be less than 5MB");
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setError(null);
// //     setSuccessMessage(null);

// //     try {
// //       // Validate required fields
// //       if (
// //         !formData.full_name ||
// //         !formData.email ||
// //         !formData.phone_number ||
// //         !formData.age ||
// //         !formData.gender ||
// //         !formData.pincode ||
// //         !formData.emergency_contact ||
// //         !formData.membership_plan ||
// //         !formData.amount_paid ||
// //         !formData.payment_date ||
// //         !formData.renewal_date
// //       ) {
// //         setError("All fields are required");
// //         return;
// //       }

// //       // Validate phone number (minimum 10 digits)
// //       if (formData.phone_number.length < 10) {
// //         setError("Phone number must be at least 10 digits");
// //         return;
// //       }

// //       // Validate pincode (exactly 6 digits)
// //       if (formData.pincode.length !== 6) {
// //         setError("Pincode must be exactly 6 digits");
// //         return;
// //       }

// //       // Validate emergency contact (minimum 10 digits)
// //       if (formData.emergency_contact.length < 10) {
// //         setError("Emergency contact number must be at least 10 digits");
// //         return;
// //       }

// //       // Log form data for debugging
// //       console.log("Form Data:", formData);

// //       // Send JSON data to the server
// //       const response = await fetch("http://localhost:5000/api/admin/members", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       // Log response for debugging
// //       console.log("Response Status:", response.status);
// //       console.log("Response OK:", response.ok);

// //       if (response.ok) {
// //         const responseData = await response.json();
// //         console.log("Response Data:", responseData);
// //         setSuccessMessage("Member added successfully!");
// //         setTimeout(() => {
// //           router.push("/members");
// //         }, 2000);
// //       } else {
// //         const errorData = await response.json();
// //         console.error("Backend Error:", errorData);
// //         setError(errorData.error || "Failed to add member");
// //       }
// //     } catch (error) {
// //       console.error("Error in handleSubmit:", error);
// //       setError("An error occurred while adding the member");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setFormData({
// //       full_name: "",
// //       email: "",
// //       phone_number: "",
// //       age: "",
// //       gender: "",
// //       pincode: "",
// //       emergency_contact: "",
// //       membership_plan: "",
// //       amount_paid: "",
// //       payment_date: "",
// //       renewal_date: "",
// //     });
// //     setProfilePhoto(null);
// //     setError(null);
// //     setSuccessMessage(null);
// //   };

// //   return (
// //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// //       <div className="w-full max-w-8xl">
// //         {/* Add Member Title Outside the Box */}
// //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white dark:bg-gray-900">
// //           Add New Member
// //         </h2>

// //         {/* Form Box */}
// //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg dark:bg-gray-900">
// //           {error && (
// //             <div className="bg-red-500 text-white p-4 rounded mb-6">{error}</div>
// //           )}
// //           {successMessage && (
// //             <div className="bg-green-500 text-white p-4 rounded mb-6">
// //               {successMessage}
// //             </div>
// //           )}

// //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// //             {/* Profile Photo Upload */}
// //             <div className="col-span-2 flex flex-col items-center mb-8">
// //               <div 
// //                 className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group"
// //                 onClick={() => document.getElementById('fileInput').click()}
// //               >
// //                 {profilePhoto ? (
// //                   <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
// //                 ) : (
// //                   <div className="text-center">
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                     </svg>
// //                     <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
// //                   </div>
// //                 )}
// //               </div>
// //               <input 
// //                 id="fileInput"
// //                 type="file" 
// //                 accept="image/*" 
// //                 onChange={handlePhotoChange}
// //                 className="hidden"
// //               />
// //               <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
// //             </div>

// //             {/* Personal Information */}
// //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">
// //               Personal Information
// //             </h3>
// //             <input
// //               type="text"
// //               name="full_name"
// //               placeholder="Full Name"
// //               value={formData.full_name}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="tel"
// //               name="phone_number"
// //               placeholder="Phone Number"
// //               value={formData.phone_number}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="age"
// //               placeholder="Age"
// //               value={formData.age}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <select
// //               name="gender"
// //               value={formData.gender}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             >
// //               <option value="">Select Gender</option>
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //               <option value="Other">Other</option>
// //             </select>
// //             <input
// //               type="text"
// //               name="pincode"
// //               placeholder="Pincode "
// //               value={formData.pincode}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />

// //             {/* Emergency Information */}
// //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 mt-6">
// //               Emergency Information
// //             </h3>
// //             <input
// //               type="tel"
// //               name="emergency_contact"
// //               placeholder="Emergency Contact"
// //               value={formData.emergency_contact}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />

// //             {/* Membership Details */}
// //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 mt-6">
// //               Membership Details
// //             </h3>
// //             <select
// //               name="membership_plan"
// //               value={formData.membership_plan}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             >
// //               <option value="">Membership Plan</option>
// //               <option value="Monthly">Monthly</option>
// //               <option value="Quarterly">Quarterly</option>
// //               <option value="Yearly">Yearly</option>
// //             </select>
// //             <input
// //               type="number"
// //               name="amount_paid"
// //               placeholder="Amount Paid"
// //               value={formData.amount_paid}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <div className="col-span-1">
// //               <h4 className="text-lg font-semibold mb-2">Payment Date</h4>
// //               <input
// //                 type="date"
// //                 name="payment_date"
// //                 value={formData.payment_date}
// //                 onChange={handleChange}
// //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full"
// //                 required
// //               />
// //             </div>
// //             <div className="col-span-1">
// //               <h4 className="text-lg font-semibold mb-2">Renewal Date</h4>
// //               <input
// //                 type="date"
// //                 name="renewal_date"
// //                 value={formData.renewal_date}
// //                 onChange={handleChange}
// //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full"
// //                 required
// //               />
// //             </div>

// //             {/* Form Actions */}
// //             <div className="col-span-2 flex justify-end space-x-4 mt-6 bg-gray-800 py-4 dark:bg-gray-900">
// //               <button
// //                 type="button"
// //                 onClick={handleReset}
// //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// //               >
// //                 Reset
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// //                 disabled={isSubmitting}
// //               >
// //                 {isSubmitting ? "Submitting..." : "Add Member"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddMember;
// // import { useRouter } from "next/navigation";
// // import React, { useState } from "react";

// // const AddMember = () => {
// //   const router = useRouter();
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState(null);
// //   const [profilePhoto, setProfilePhoto] = useState(null);

// //   const [formData, setFormData] = useState({
// //     full_name: "",
// //     email: "",
// //     phone_number: "",
// //     age: "",
// //     gender: "",
// //     trainer_name: "",
// //     pincode: "",
// //     emergency_contact: "",
// //     membership_plan: "",
// //     amount_paid: "",
// //     payment_status: "Pending",
// //     membership_status: "Inactive",
// //     payment_date: "",
// //     renewal_date: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handlePhotoChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
// //       setProfilePhoto(file);
// //     } else {
// //       alert("File size should be less than 5MB");
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setError(null);
// //     setSuccessMessage(null);

// //     try {
// //       // Validate required fields
// //       if (
// //         !formData.full_name ||
// //         !formData.email ||
// //         !formData.phone_number ||
// //         !formData.age ||
// //         !formData.gender ||
// //         !formData.pincode ||
// //         !formData.emergency_contact ||
// //         !formData.membership_plan ||
// //         !formData.amount_paid ||
// //         !formData.payment_date ||
// //         !formData.renewal_date
// //       ) {
// //         setError("All fields are required");
// //         return;
// //       }

// //       // Validate phone number (minimum 10 digits)
// //       if (formData.phone_number.length < 10) {
// //         setError("Phone number must be at least 10 digits");
// //         return;
// //       }

// //       // Validate pincode (exactly 6 digits)
// //       if (formData.pincode.length !== 6) {
// //         setError("Pincode must be exactly 6 digits");
// //         return;
// //       }

// //       // Validate emergency contact (minimum 10 digits)
// //       if (formData.emergency_contact.length < 10) {
// //         setError("Emergency contact number must be at least 10 digits");
// //         return;
// //       }

// //       // Prepare form data for submission
// //       const submissionData = new FormData();
      
// //       // Append all form fields
// //       Object.keys(formData).forEach(key => {
// //         submissionData.append(key, formData[key]);
// //       });
      
// //       // Append profile photo if exists
// //       if (profilePhoto) {
// //         submissionData.append('passport_photo', profilePhoto);
// //       }

// //       // Send data to the server
// //       const response = await fetch("http://localhost:5000/api/admin/members", {
// //         method: "POST",
// //         body: submissionData,
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || "Failed to add member");
// //       }

// //       const responseData = await response.json();
// //       setSuccessMessage("Member added successfully!");
      
// //       // Redirect after 2 seconds
// //       setTimeout(() => {
// //         router.push("/members");
// //       }, 2000);
// //     } catch (error) {
// //       console.error("Error in handleSubmit:", error);
// //       setError(error.message || "An error occurred while adding the member");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setFormData({
// //       full_name: "",
// //       email: "",
// //       phone_number: "",
// //       age: "",
// //       gender: "",
// //       trainer_name: "",
// //       pincode: "",
// //       emergency_contact: "",
// //       membership_plan: "",
// //       amount_paid: "",
// //       payment_status: "Pending",
// //       membership_status: "Inactive",
// //       payment_date: "",
// //       renewal_date: "",
// //     });
// //     setProfilePhoto(null);
// //     setError(null);
// //     setSuccessMessage(null);
// //   };

// //   return (
// //     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
// //       <div className="w-full max-w-8xl">
// //         {/* Add Member Title Outside the Box */}
// //         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white dark:bg-gray-900">
// //           Add New Member
// //         </h2>

// //         {/* Form Box */}
// //         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg dark:bg-gray-900">
// //           {error && (
// //             <div className="bg-red-500 text-white p-4 rounded mb-6">{error}</div>
// //           )}
// //           {successMessage && (
// //             <div className="bg-green-500 text-white p-4 rounded mb-6">
// //               {successMessage}
// //             </div>
// //           )}

// //           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
// //             {/* Profile Photo Upload */}
// //             <div className="col-span-2 flex flex-col items-center mb-8">
// //               <div 
// //                 className="w-36 h-36 rounded-full bg-gray-800 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group"
// //                 onClick={() => document.getElementById('fileInput').click()}
// //               >
// //                 {profilePhoto ? (
// //                   <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
// //                 ) : (
// //                   <div className="text-center">
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //                     </svg>
// //                     <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
// //                   </div>
// //                 )}
// //               </div>
// //               <input 
// //                 id="fileInput"
// //                 type="file" 
// //                 accept="image/*" 
// //                 onChange={handlePhotoChange}
// //                 className="hidden"
// //               />
// //               <p className="text-xs text-gray-500">Maximum file size: 5MB</p>
// //             </div>

// //             {/* Personal Information */}
// //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">
// //               Personal Information
// //             </h3>
// //             <input
// //               type="text"
// //               name="full_name"
// //               placeholder="Full Name"
// //               value={formData.full_name}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="tel"
// //               name="phone_number"
// //               placeholder="Phone Number"
// //               value={formData.phone_number}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="age"
// //               placeholder="Age"
// //               value={formData.age}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <select
// //               name="gender"
// //               value={formData.gender}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             >
// //               <option value="">Select Gender</option>
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //               <option value="Other">Other</option>
// //             </select>
// //             <input
// //               type="text"
// //               name="trainer_name"
// //               placeholder="Trainer Name (optional)"
// //               value={formData.trainer_name}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //             />
// //             <input
// //               type="text"
// //               name="pincode"
// //               placeholder="Pincode"
// //               value={formData.pincode}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />
// //             <input
// //               type="tel"
// //               name="emergency_contact"
// //               placeholder="Emergency Contact"
// //               value={formData.emergency_contact}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             />

// //             {/* Membership Details */}
// //             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 mt-6">
// //               Membership Details
// //             </h3>
// //             <select
// //               name="membership_plan"
// //               value={formData.membership_plan}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //             >
// //               <option value="">Membership Plan</option>
// //               <option value="Monthly">Monthly</option>
// //               <option value="Quarterly">Quarterly</option>
// //               <option value="Yearly">Yearly</option>
// //             </select>
// //             <input
// //               type="number"
// //               name="amount_paid"
// //               placeholder="Amount Paid"
// //               value={formData.amount_paid}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //               required
// //               min="0"
// //               step="0.01"
// //             />
// //             <select
// //               name="payment_status"
// //               value={formData.payment_status}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //             >
// //               <option value="Pending">Pending</option>
// //               <option value="Completed">Completed</option>
// //             </select>
// //             <select
// //               name="membership_status"
// //               value={formData.membership_status}
// //               onChange={handleChange}
// //               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700"
// //             >
// //               <option value="Inactive">Inactive</option>
// //               <option value="Active">Active</option>
// //             </select>
// //             <div className="col-span-1">
// //               <h4 className="text-lg font-semibold mb-2">Payment Date</h4>
// //               <input
// //                 type="date"
// //                 name="payment_date"
// //                 value={formData.payment_date}
// //                 onChange={handleChange}
// //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full"
// //                 required
// //               />
// //             </div>
// //             <div className="col-span-1">
// //               <h4 className="text-lg font-semibold mb-2">Renewal Date</h4>
// //               <input
// //                 type="date"
// //                 name="renewal_date"
// //                 value={formData.renewal_date}
// //                 onChange={handleChange}
// //                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 dark:focus:ring-red-600 dark:border-gray-700 w-full"
// //                 required
// //               />
// //             </div>

// //             {/* Form Actions */}
// //             <div className="col-span-2 flex justify-end space-x-4 mt-6 bg-gray-800 py-4 dark:bg-gray-900">
// //               <button
// //                 type="button"
// //                 onClick={handleReset}
// //                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
// //               >
// //                 Reset
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// //                 disabled={isSubmitting}
// //               >
// //                 {isSubmitting ? "Submitting..." : "Add Member"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddMember;
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import Image from 'next/image';

// const AddMember = () => {
//   const router = useRouter();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);

//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone_number: "",
//     age: "",
//     gender: "",
//     trainer_name: "",
//     pincode: "",
//     emergency_contact: "",
//     membership_plan: "",
//     amount_paid: "",
//     payment_status: "Pending",
//     membership_status: "Inactive",
//     payment_date: "",
//     renewal_date: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file type
//       if (!file.type.match(/image.*/)) {
//         setError("Please select an image file (JPEG, PNG)");
//         return;
//       }

//       // Validate file size (5MB limit)
//       if (file.size > 5 * 1024 * 1024) {
//         setError("File size should be less than 5MB");
//         return;
//       }

//       setProfilePhoto(file);
//       setError(null); // Clear previous errors

//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const validateForm = () => {
//     const requiredFields = [
//       'full_name', 'email', 'phone_number', 'age', 'gender',
//       'pincode', 'emergency_contact', 'membership_plan',
//       'amount_paid', 'payment_date', 'renewal_date'
//     ];

//     // Check for missing required fields
//     const missingFields = requiredFields.filter(field => !formData[field].trim());
//     if (missingFields.length > 0) {
//       setError(`Missing required fields: ${missingFields.join(', ')}`);
//       return false;
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email address");
//       return false;
//     }

//     // Validate phone numbers (minimum 10 digits, numbers only)
//     const phoneRegex = /^\d{10,}$/;
//     if (!phoneRegex.test(formData.phone_number)) {
//       setError("Phone number must be at least 10 digits and contain only numbers");
//       return false;
//     }

//     if (!phoneRegex.test(formData.emergency_contact)) {
//       setError("Emergency contact must be at least 10 digits and contain only numbers");
//       return false;
//     }

//     // Validate pincode (exactly 6 digits)
//     if (!/^\d{6}$/.test(formData.pincode)) {
//       setError("Pincode must be exactly 6 digits");
//       return false;
//     }

//     // Validate age (between 12 and 100)
//     const age = parseInt(formData.age);
//     if (isNaN(age)) {
//       setError("Age must be a number");
//       return false;
//     }
//     if (age < 12 || age > 100) {
//       setError("Age must be between 12 and 100");
//       return false;
//     }

//     // Validate amount is a positive number
//     if (isNaN(formData.amount_paid) || parseFloat(formData.amount_paid) <= 0) {
//       setError("Amount paid must be a positive number");
//       return false;
//     }

//     // Validate dates
//     const today = new Date();
//     const paymentDate = new Date(formData.payment_date);
//     const renewalDate = new Date(formData.renewal_date);

//     if (paymentDate > renewalDate) {
//       setError("Renewal date must be after payment date");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);
//     setSuccessMessage(null);

//     // Validate form before submission
//     if (!validateForm()) {
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Prepare form data for submission
//       const submissionData = new FormData();
      
//       // Append all form fields
//       Object.keys(formData).forEach(key => {
//         // Skip trainer_name if empty to avoid validation error
//         if (key === 'trainer_name' && !formData[key]) {
//           return;
//         }
//         submissionData.append(key, formData[key]);
//       });
      
//       // Append profile photo if exists
//       if (profilePhoto) {
//         submissionData.append('passport_photo', profilePhoto);
//       }

//       // Log the data being sent (for debugging)
//       console.log("Submitting data:", {
//         ...formData,
//         passport_photo: profilePhoto ? profilePhoto.name : 'None'
//       });

//       // Send data to the server
//       const response = await fetch("http://localhost:5000/api/admin/members", {
//         method: "POST",
//         body: submissionData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.error || 
//           errorData.message || 
//           `Server responded with status ${response.status}`
//         );
//       }

//       const responseData = await response.json();
//       setSuccessMessage(responseData.message || "Member added successfully!");
      
//       // Reset form after successful submission
//       setTimeout(() => {
//         handleReset();
//         router.push("/members");
//       }, 2000);
//     } catch (error) {
//       console.error("Submission error:", error);
//       setError(error.message || "An error occurred while adding the member. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       full_name: "",
//       email: "",
//       phone_number: "",
//       age: "",
//       gender: "",
//       trainer_name: "",
//       pincode: "",
//       emergency_contact: "",
//       membership_plan: "",
//       amount_paid: "",
//       payment_status: "Pending",
//       membership_status: "Inactive",
//       payment_date: "",
//       renewal_date: "",
//     });
//     setProfilePhoto(null);
//     setPhotoPreview(null);
//     setError(null);
//     setSuccessMessage(null);
//   };

//   // Calculate minimum date (today) for date inputs
//   const today = new Date().toISOString().split('T')[0];

//   return (
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
//       <div className="w-full max-w-8xl">
//         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white dark:bg-gray-900">
//           Add New Member
//         </h2>

//         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg dark:bg-gray-900">
//           {error && (
//             <div className="bg-red-500 text-white p-4 rounded mb-6">
//               <div className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//                 {error}
//               </div>
//             </div>
//           )}
          
//           {successMessage && (
//             <div className="bg-green-500 text-white p-4 rounded mb-6">
//               <div className="flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 {successMessage}
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Profile Photo Upload */}
//             <div className="col-span-2 flex flex-col items-center mb-8">
//               <div 
//                 className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group relative"
//                 onClick={() => document.getElementById('fileInput').click()}
//               >
//                 {photoPreview ? (
//                   <img 
//                     src={photoPreview} 
//                     alt="Profile Preview" 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
//                   />
//                 ) : (
//                   <div className="text-center p-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//               </div>
//               <input 
//                 id="fileInput"
//                 type="file" 
//                 accept="image/*" 
//                 onChange={handlePhotoChange}
//                 className="hidden"
//               />
//               <p className="text-xs text-gray-400">Accepted formats: JPEG, PNG (Max 5MB)</p>
//               {profilePhoto && (
//                 <p className="text-xs text-gray-400 mt-1">{profilePhoto.name}</p>
//               )}
//             </div>

//             {/* Personal Information */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 border-b border-gray-700 pb-2">
//               Personal Information
//             </h3>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Full Name *</label>
//               <input
//                 type="text"
//                 name="full_name"
              
//                 value={formData.full_name}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Email Address *</label>
//               <input
//                 type="email"
//                 name="email"
             
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Phone Number *</label>
//               <input
//                 type="tel"
//                 name="phone_number"
              
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Age *</label>
//               <input
//                 type="number"
//                 name="age"
              
//                 value={formData.age}
//                 onChange={handleChange}
//                 min="12"
//                 max="100"
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Gender *</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//                 <option value="Prefer not to say">Prefer not to say</option>
//               </select>
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Trainer Name </label>
//               <input
//                 type="text"
//                 name="trainer_name"
              
//                 value={formData.trainer_name}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Pincode *</label>
//               <input
//                 type="text"
//                 name="pincode"
              
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Emergency Contact *</label>
//               <input
//                 type="tel"
//                 name="emergency_contact"
             
//                 value={formData.emergency_contact}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>

//             {/* Membership Details */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 mt-6 border-b border-gray-700 pb-2">
//               Membership Details
//             </h3>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Membership Plan *</label>
//               <select
//                 name="membership_plan"
//                 value={formData.membership_plan}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               >
//                 <option value="">Select Plan</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Quarterly">Quarterly (3 Months)</option>
//                 <option value="Half-Yearly">Half-Yearly (6 Months)</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Amount Paid (₹) *</label>
//               <input
//                 type="number"
//                 name="amount_paid"
              
//                 value={formData.amount_paid}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//                 min="0"
//                 step="0.01"
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Payment Status</label>
//               <select
//                 name="payment_status"
//                 value={formData.payment_status}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Failed">Failed</option>
//                 <option value="Refunded">Refunded</option>
//               </select>
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Membership Status</label>
//               <select
//                 name="membership_status"
//                 value={formData.membership_status}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//               >
//                 <option value="Inactive">Inactive</option>
//                 <option value="Active">Active</option>
//                 <option value="Expired">Expired</option>
//                 <option value="On Hold">On Hold</option>
//               </select>
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Payment Date *</label>
//               <input
//                 type="date"
//                 name="payment_date"
//                 value={formData.payment_date}
//                 onChange={handleChange}
//                 max={today}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>
            
//             <div className="space-y-1">
//               <label className="text-sm text-gray-300">Renewal Date *</label>
//               <input
//                 type="date"
//                 name="renewal_date"
//                 value={formData.renewal_date}
//                 onChange={handleChange}
//                 min={formData.payment_date || today}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
//                 required
//               />
//             </div>

//             {/* Form Actions */}
//             <div className="col-span-2 flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-700">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="px-6 py-2 rounded font-medium bg-gray-600 hover:bg-gray-500 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//               >
//                 Reset Form
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-6 py-2 rounded font-medium bg-red-600 hover:bg-red-500 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing...
//                   </>
//                 ) : (
//                   "Add Member"
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMember;
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from 'next/image';

const AddMember = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    age: "",
    gender: "",
    trainer_name: "",
    pincode: "",
    emergency_contact: "",
    membership_plan: "",
    amount_paid: "",
    payment_status: "Pending",
    membership_status: "Inactive",
    payment_date: "",
    renewal_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/image.*/)) {
        setError("Please select an image file (JPEG, PNG)");
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }

      setProfilePhoto(file);
      setError(null); // Clear previous errors

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const requiredFields = [
      'full_name', 'email', 'phone_number', 'age', 'gender',
      'pincode', 'emergency_contact', 'membership_plan',
      'amount_paid', 'payment_date', 'renewal_date'
    ];

    // Check for missing required fields
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    if (missingFields.length > 0) {
      setError(`Missing required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Validate phone numbers (minimum 10 digits, numbers only)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      setError("Phone number must be at least 10 digits and contain only numbers");
      return false;
    }

    if (!phoneRegex.test(formData.emergency_contact)) {
      setError("Emergency contact must be at least 10 digits and contain only numbers");
      return false;
    }

    // Validate pincode (exactly 6 digits)
    if (!/^\d{6}$/.test(formData.pincode)) {
      setError("Pincode must be exactly 6 digits");
      return false;
    }

    // Validate age (between 12 and 100)
    const age = parseInt(formData.age);
    if (isNaN(age)) {
      setError("Age must be a number");
      return false;
    }
    if (age < 12 || age > 100) {
      setError("Age must be between 12 and 100");
      return false;
    }

    // Validate amount is a positive number
    if (isNaN(formData.amount_paid) || parseFloat(formData.amount_paid) <= 0) {
      setError("Amount paid must be a positive number");
      return false;
    }

    // Validate dates
    const today = new Date();
    const paymentDate = new Date(formData.payment_date);
    const renewalDate = new Date(formData.renewal_date);

    if (paymentDate > renewalDate) {
      setError("Renewal date must be after payment date");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    // Validate form before submission
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare form data for submission
      const submissionData = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        // Skip trainer_name if empty to avoid validation error
        if (key === 'trainer_name' && !formData[key]) {
          return;
        }
        submissionData.append(key, formData[key]);
      });
      
      // Append profile photo if exists
      if (profilePhoto) {
        submissionData.append('passport_photo', profilePhoto);
      }

      // Log the data being sent (for debugging)
      console.log("Submitting data:", {
        ...formData,
        passport_photo: profilePhoto ? profilePhoto.name : 'None'
      });

      // Send data to the server
      const response = await fetch("http://localhost:5000/api/admin/members", {
        method: "POST",
        body: submissionData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || 
          errorData.message || 
          `Server responded with status ${response.status}`
        );
      }

      const responseData = await response.json();
      setSuccessMessage(responseData.message || "Member added successfully!");
      
      // Reset form after successful submission
      setTimeout(() => {
        handleReset();
        router.push("/members");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setError(error.message || "An error occurred while adding the member. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: "",
      email: "",
      phone_number: "",
      age: "",
      gender: "",
      trainer_name: "",
      pincode: "",
      emergency_contact: "",
      membership_plan: "",
      amount_paid: "",
      payment_status: "Pending",
      membership_status: "Inactive",
      payment_date: "",
      renewal_date: "",
    });
    setProfilePhoto(null);
    setPhotoPreview(null);
    setError(null);
    setSuccessMessage(null);
  };

  // Calculate minimum date (today) for date inputs
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
      <div className="w-full max-w-8xl">
        <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white dark:bg-gray-900">
          Add New Member
        </h2>

        <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg dark:bg-gray-900">
          {error && (
            <div className="bg-red-500 text-white p-4 rounded mb-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}
          
          {successMessage && (
            <div className="bg-green-500 text-white p-4 rounded mb-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {successMessage}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Profile Photo Upload */}
            <div className="col-span-2 flex flex-col items-center mb-8">
              <div 
                className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden cursor-pointer border-2 border-red-500 hover:border-red-400 shadow-lg transition-all duration-300 hover:shadow-red-500/20 group relative"
                onClick={() => document.getElementById('fileInput').click()}
              >
                {photoPreview ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={photoPreview}
                      alt="Profile Preview"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized={true}
                    />
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-400 mx-auto group-hover:text-red-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-sm text-gray-400 mt-2 font-light group-hover:text-white transition-colors duration-300">Add Profile Photo</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <input 
                id="fileInput"
                type="file" 
                accept="image/*" 
                onChange={handlePhotoChange}
                className="hidden"
              />
              <p className="text-xs text-gray-400">Accepted formats: JPEG, PNG (Max 5MB)</p>
              {profilePhoto && (
                <p className="text-xs text-gray-400 mt-1">{profilePhoto.name}</p>
              )}
            </div>

            {/* Personal Information */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 border-b border-gray-700 pb-2">
              Personal Information
            </h3>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Full Name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Phone Number *</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="12"
                max="100"
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Trainer Name </label>
              <input
                type="text"
                name="trainer_name"
                value={formData.trainer_name}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Emergency Contact *</label>
              <input
                type="tel"
                name="emergency_contact"
                value={formData.emergency_contact}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>

            {/* Membership Details */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500 mt-6 border-b border-gray-700 pb-2">
              Membership Details
            </h3>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Membership Plan *</label>
              <select
                name="membership_plan"
                value={formData.membership_plan}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              >
                <option value="">Select Plan</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly (3 Months)</option>
                <option value="Half-Yearly">Half-Yearly (6 Months)</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Amount Paid (₹) *</label>
              <input
                type="number"
                name="amount_paid"
                value={formData.amount_paid}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Payment Status</label>
              <select
                name="payment_status"
                value={formData.payment_status}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Membership Status</label>
              <select
                name="membership_status"
                value={formData.membership_status}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
              >
                <option value="Inactive">Inactive</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Payment Date *</label>
              <input
                type="date"
                name="payment_date"
                value={formData.payment_date}
                onChange={handleChange}
                max={today}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-300">Renewal Date *</label>
              <input
                type="date"
                name="renewal_date"
                value={formData.renewal_date}
                onChange={handleChange}
                min={formData.payment_date || today}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-gray-600"
                required
              />
            </div>

            {/* Form Actions */}
            <div className="col-span-2 flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-700">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 rounded font-medium bg-gray-600 hover:bg-gray-500 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Reset Form
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded font-medium bg-red-600 hover:bg-red-500 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Add Member"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMember;