

// const AddMember = () => {
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted");
//     router.push("/members"); // Redirect back to the members page after submission
//   };

//   return (
//     <div className="w-full p-4">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Add New Member</h1>
//         <button
//           onClick={() => router.push("/members")}
//           className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-700"
//         >
//           Cancel
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Personal Details */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Pincode"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Select Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//         </select>

//         {/* Emergency Contact Information */}
//         <input
//           type="text"
//           placeholder="Contact Name"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Relationship"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Emergency Contact Number"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />

//         {/* Membership Details */}
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="Monthly">Monthly</option>
//           <option value="Quarterly">Quarterly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//         <input
//           type="date"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Select Payment Type</option>
//           <option value="Cash">Cash</option>
//           <option value="Card">Card</option>
//           <option value="Online">Online</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Total Amount"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />

//         {/* Health Information */}
//         <textarea
//           placeholder="Medical Condition"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
//           rows="3"
//         />
//         <textarea
//           placeholder="Fitness Goals"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
//           rows="3"
//         />

//         {/* Form Actions */}
//         <div className="col-span-2 flex justify-end space-x-4">
//           <button
//             type="submit"
//             className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
//           >
//             Add Member
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMember;
// const AddMember = () => {
//   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg text-white">
//       <h2 className="text-2xl font-bold mb-6">Add New Member</h2>
//       <form className="grid grid-cols-2 gap-4">
//         {/* Personal Information */}
//         <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Pincode"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="tel"
//           placeholder="Mobile Number"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//         </select>

//         {/* Emergency Information */}
//         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
//         <input
//           type="text"
//           placeholder="Contact Name"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Relationship"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <input
//           type="tel"
//           placeholder="Emergency Contact Number"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
//         />

//         {/* Membership Details */}
//         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Membership Plan</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Quarterly">Quarterly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//         <input
//           type="date"
//           placeholder="Date of Joining"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />
//         <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//           <option value="">Select Payment Type</option>
//           <option value="Cash">Cash</option>
//           <option value="Card">Card</option>
//           <option value="Online">Online</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Total Amount Received"
//           className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//         />

//         {/* Health Information */}
//         <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
//         <div className="col-span-2">
//           <p className="mb-2">Are you suffering from any disease?</p>
//           <div className="flex space-x-4 mb-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="medicalCondition"
//                 onChange={() => setHasMedicalCondition(true)}
//                 className="mr-2"
//               />
//               Yes
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="medicalCondition"
//                 onChange={() => setHasMedicalCondition(false)}
//                 className="mr-2"
//               />
//               No
//             </label>
//           </div>
          
//           {hasMedicalCondition && (
//             <textarea
//               placeholder="Please describe your medical condition"
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mb-4"
//               rows="3"
//             />
//           )}
//         </div>
        
//         <div className="col-span-2 mb-4">
//           <p className="mb-2">Fitness Goals</p>
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full">
//             <option value="">Select Your Primary Fitness Goal</option>
//             <option value="Weight Loss">Weight Loss</option>
//             <option value="Muscle Gain">Muscle Gain</option>
//             <option value="Improved Stamina">Improved Stamina</option>
//             <option value="General Fitness">General Fitness</option>
//             <option value="Strength Training">Strength Training</option>
//             <option value="Flexibility">Flexibility</option>
//             <option value="Sports Performance">Sports Performance</option>
//             <option value="Rehabilitation">Rehabilitation</option>
//           </select>
//           <textarea
//             placeholder="Additional details about your fitness goals"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mt-4"
//             rows="3"
//           />
//         </div>

//         {/* Form Actions */}
//         <div className="col-span-2 flex justify-end space-x-4 mt-4">
//           <button
//             type="reset"
//             className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
//           >
//             Add Member
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddMember;
// "use client"; // Mark this component as a Client Component
// import { useRouter } from "next/navigation";
// import React, { useState } from 'react';

// const AddMember = () => {
//   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

//   return (
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
//       <div className="bg-gray-800 p-6 rounded-lg text-white w-4/5 max-w-4xl h-auto overflow-y-auto shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
//         <form className="grid grid-cols-2 gap-4">
//           {/* Personal Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="text"
//             placeholder="Pincode"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//             <option value="">Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           {/* Emergency Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
//           <input
//             type="text"
//             placeholder="Contact Name"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="text"
//             placeholder="Relationship"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <input
//             type="tel"
//             placeholder="Emergency Contact Number"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 col-span-2"
//           />

//           {/* Membership Details */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//             <option value="">Membership Plan</option>
//             <option value="Monthly">Monthly</option>
//             <option value="Quarterly">Quarterly</option>
//             <option value="Yearly">Yearly</option>
//           </select>
//           <input
//             type="date"
//             placeholder="Date of Joining"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400">
//             <option value="">Select Payment Type</option>
//             <option value="Cash">Cash</option>
//             <option value="Card">Card</option>
//             <option value="Online">Online</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Total Amount Received"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400"
//           />

//           {/* Health Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
//           <div className="col-span-2">
//             <p className="mb-2">Are you suffering from any disease?</p>
//             <div className="flex space-x-4 mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="medicalCondition"
//                   onChange={() => setHasMedicalCondition(true)}
//                   className="mr-2"
//                 />
//                 Yes
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="medicalCondition"
//                   onChange={() => setHasMedicalCondition(false)}
//                   className="mr-2"
//                 />
//                 No
//               </label>
//             </div>
            
//             {hasMedicalCondition && (
//               <textarea
//                 placeholder="Please describe your medical condition"
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mb-4"
//                 rows="3"
//               />
//             )}
//           </div>
          
//           <div className="col-span-2 mb-4">
//             <p className="mb-2">Fitness Goals</p>
//             <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full">
//               <option value="">Select Your Primary Fitness Goal</option>
//               <option value="Weight Loss">Weight Loss</option>
//               <option value="Muscle Gain">Muscle Gain</option>
//               <option value="Improved Stamina">Improved Stamina</option>
//               <option value="General Fitness">General Fitness</option>
//               <option value="Strength Training">Strength Training</option>
//               <option value="Flexibility">Flexibility</option>
//               <option value="Sports Performance">Sports Performance</option>
//               <option value="Rehabilitation">Rehabilitation</option>
//             </select>
//             <textarea
//               placeholder="Additional details about your fitness goals"
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 w-full mt-4"
//               rows="3"
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
//             <button
//               type="reset"
//               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600"
//             >
//               Add Member
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMember;
// "use client"; // Mark this component as a Client Component
// import { useRouter } from "next/navigation";
// import React, { useState } from 'react';

// const AddMember = () => {
//   const [hasMedicalCondition, setHasMedicalCondition] = useState(false);

//   return (
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
//       {/* Changed width from w-4/5 to w-full to make it fit the background */}
//       <div className="bg-gray-800 p-6 rounded-lg text-white w-full max-w-8xl h-auto overflow-y-auto shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
//         <form className="grid grid-cols-2 gap-4">
//           {/* Personal Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             placeholder="Pincode"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
//             <option value="">Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           {/* Emergency Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
//           <input
//             type="text"
//             placeholder="Contact Name"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             placeholder="Relationship"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="tel"
//             placeholder="Emergency Contact Number"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
//           />

//           {/* Membership Details */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
//             <option value="">Membership Plan</option>
//             <option value="Monthly">Monthly</option>
//             <option value="Quarterly">Quarterly</option>
//             <option value="Yearly">Yearly</option>
//           </select>
//           <input
//             type="date"
//             placeholder="Date of Joining"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600">
//             <option value="">Select Payment Type</option>
//             <option value="Cash">Cash</option>
//             <option value="Card">Card</option>
//             <option value="Online">Online</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Total Amount Received"
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />

//           {/* Health Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
//           <div className="col-span-2">
//             <p className="mb-2">Are you suffering from any disease?</p>
//             <div className="flex space-x-4 mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="medicalCondition"
//                   onChange={() => setHasMedicalCondition(true)}
//                   className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-600"
//                 />
//                 Yes
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="medicalCondition"
//                   onChange={() => setHasMedicalCondition(false)}
//                   className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-600"
//                 />
//                 No
//               </label>
//             </div>
            
//             {hasMedicalCondition && (
//               <textarea
//                 placeholder="Please describe your medical condition"
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
//                 rows="3"
//               />
//             )}
//           </div>
          
//           <div className="col-span-2 mb-4">
//             <p className="mb-2">Fitness Goals</p>
//             <select className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full">
//               <option value="">Select Your Primary Fitness Goal</option>
//               <option value="Weight Loss">Weight Loss</option>
//               <option value="Muscle Gain">Muscle Gain</option>
//               <option value="Improved Stamina">Improved Stamina</option>
//               <option value="General Fitness">General Fitness</option>
//               <option value="Strength Training">Strength Training</option>
//               <option value="Flexibility">Flexibility</option>
//               <option value="Sports Performance">Sports Performance</option>
//               <option value="Rehabilitation">Rehabilitation</option>
//             </select>
//             <textarea
//               placeholder="Additional details about your fitness goals"
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
//               rows="3"
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
//             <button
//               type="reset"
//               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
//             >
//               Add Member
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMember;
// "use client"; // Mark this component as a Client Component
// import { useRouter } from "next/navigation";
// import React, { useState } from 'react';

// const AddMember = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     address: '',
//     pincode: '',
//     mobileNumber: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     contactName: '',
//     relationship: '',
//     emergencyContactNumber: '',
//     membershipPlan: '',
//     dateOfJoining: '',
//     paymentType: '',
//     totalAmountReceived: '',
//     hasMedicalCondition: '',
//     medicalConditionDescription: '',
//     fitnessGoal: '',
//     fitnessGoalDetails: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/addMember', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert('Member added successfully!');
//         handleReset();
//       } else {
//         alert('Failed to add member');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding the member');
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       fullName: '',
//       address: '',
//       pincode: '',
//       mobileNumber: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       contactName: '',
//       relationship: '',
//       emergencyContactNumber: '',
//       membershipPlan: '',
//       dateOfJoining: '',
//       paymentType: '',
//       totalAmountReceived: '',
//       hasMedicalCondition: '',
//       medicalConditionDescription: '',
//       fitnessGoal: '',
//       fitnessGoalDetails: ''
//     });
//   };

//   return (
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-20">
//       <div className="bg-gray-800 p-6 rounded-lg text-white w-full max-w-8xl h-auto overflow-y-auto shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10">Add New Member</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//           {/* Personal Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             name="pincode"
//             placeholder="Pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="tel"
//             name="mobileNumber"
//             placeholder="Mobile Number"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <select
//             name="bloodGroup"
//             value={formData.bloodGroup}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           >
//             <option value="">Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           {/* Emergency Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
//           <input
//             type="text"
//             name="contactName"
//             placeholder="Contact Name"
//             value={formData.contactName}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="text"
//             name="relationship"
//             placeholder="Relationship"
//             value={formData.relationship}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <input
//             type="tel"
//             name="emergencyContactNumber"
//             placeholder="Emergency Contact Number"
//             value={formData.emergencyContactNumber}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
//           />

//           {/* Membership Details */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
//           <select
//             name="membershipPlan"
//             value={formData.membershipPlan}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           >
//             <option value="">Membership Plan</option>
//             <option value="Monthly">Monthly</option>
//             <option value="Quarterly">Quarterly</option>
//             <option value="Yearly">Yearly</option>
//           </select>
//           <input
//             type="date"
//             name="dateOfJoining"
//             placeholder="Date of Joining"
//             value={formData.dateOfJoining}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />
//           <select
//             name="paymentType"
//             value={formData.paymentType}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           >
//             <option value="">Select Payment Type</option>
//             <option value="Cash">Cash</option>
//             <option value="Card">Card</option>
//             <option value="Online">Online</option>
//           </select>
//           <input
//             type="number"
//             name="totalAmountReceived"
//             placeholder="Total Amount Received"
//             value={formData.totalAmountReceived}
//             onChange={handleChange}
//             className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//           />

//           {/* Health Information */}
//           <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
//           <div className="col-span-2">
//             <p className="mb-2">Are you suffering from any disease?</p>
//             <select
//               name="hasMedicalCondition"
//               value={formData.hasMedicalCondition}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
//             >
//               <option value="">Select</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
            
//             {formData.hasMedicalCondition === 'Yes' && (
//               <textarea
//                 name="medicalConditionDescription"
//                 placeholder="Please describe your medical condition"
//                 value={formData.medicalConditionDescription}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
//                 rows="3"
//               />
//             )}
//           </div>
          
//           <div className="col-span-2 mb-4">
//             <p className="mb-2">Fitness Goals</p>
//             <select
//               name="fitnessGoal"
//               value={formData.fitnessGoal}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
//             >
//               <option value="">Select Your Primary Fitness Goal</option>
//               <option value="Weight Loss">Weight Loss</option>
//               <option value="Muscle Gain">Muscle Gain</option>
//               <option value="Improved Stamina">Improved Stamina</option>
//               <option value="General Fitness">General Fitness</option>
//               <option value="Strength Training">Strength Training</option>
//               <option value="Flexibility">Flexibility</option>
//               <option value="Sports Performance">Sports Performance</option>
//               <option value="Rehabilitation">Rehabilitation</option>
//             </select>
//             <textarea
//               name="fitnessGoalDetails"
//               placeholder="Additional details about your fitness goals"
//               value={formData.fitnessGoalDetails}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
//               rows="3"
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="col-span-2 flex justify-end space-x-4 mt-4 sticky bottom-0 bg-gray-800 py-4 z-10">
//             <button
//               type="button"
//               onClick={handleReset}
//               className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
//             >
//               Add Member
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMember;
// "use client"; // Mark this component as a Client Component
// import { useRouter } from "next/navigation";
// import React, { useState } from 'react';

// const AddMember = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     address: '',
//     pincode: '',
//     mobileNumber: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     contactName: '',
//     relationship: '',
//     emergencyContactNumber: '',
//     membershipPlan: '',
//     dateOfJoining: '',
//     paymentType: '',
//     totalAmountReceived: '',
//     hasMedicalCondition: '',
//     medicalConditionDescription: '',
//     fitnessGoal: '',
//     fitnessGoalDetails: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/addMember', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert('Member added successfully!');
//         handleReset();
//       } else {
//         alert('Failed to add member');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding the member');
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       fullName: '',
//       address: '',
//       pincode: '',
//       mobileNumber: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       contactName: '',
//       relationship: '',
//       emergencyContactNumber: '',
//       membershipPlan: '',
//       dateOfJoining: '',
//       paymentType: '',
//       totalAmountReceived: '',
//       hasMedicalCondition: '',
//       medicalConditionDescription: '',
//       fitnessGoal: '',
//       fitnessGoalDetails: ''
//     });
//   };

//   return (
//     <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
//       <div className="w-full max-w-8xl">
//         {/* Add Member Title Outside the Box */}
//         <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white">Add New Member</h2>

//         {/* Form Box */}
//         <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
//           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//             {/* Personal Information */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2">Personal Information</h3>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="text"
//               name="pincode"
//               placeholder="Pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="tel"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               value={formData.age}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//             <select
//               name="bloodGroup"
//               value={formData.bloodGroup}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             >
//               <option value="">Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//             </select>

//             {/* Emergency Information */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Emergency Information</h3>
//             <input
//               type="text"
//               name="contactName"
//               placeholder="Contact Name"
//               value={formData.contactName}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="text"
//               name="relationship"
//               placeholder="Relationship"
//               value={formData.relationship}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <input
//               type="tel"
//               name="emergencyContactNumber"
//               placeholder="Emergency Contact Number"
//               value={formData.emergencyContactNumber}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
//             />

//             {/* Membership Details */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Membership Details</h3>
//             <select
//               name="membershipPlan"
//               value={formData.membershipPlan}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             >
//               <option value="">Membership Plan</option>
//               <option value="Monthly">Monthly</option>
//               <option value="Quarterly">Quarterly</option>
//               <option value="Yearly">Yearly</option>
//             </select>
//             <input
//               type="date"
//               name="dateOfJoining"
//               placeholder="Date of Joining"
//               value={formData.dateOfJoining}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//             <select
//               name="paymentType"
//               value={formData.paymentType}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             >
//               <option value="">Select Payment Type</option>
//               <option value="Cash">Cash</option>
//               <option value="Card">Card</option>
//               <option value="Online">Online</option>
//             </select>
//             <input
//               type="number"
//               name="totalAmountReceived"
//               placeholder="Total Amount Received"
//               value={formData.totalAmountReceived}
//               onChange={handleChange}
//               className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
//             />

//             {/* Health Information */}
//             <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4">Health Information</h3>
//             <div className="col-span-2">
//               <p className="mb-2">Are you suffering from any disease?</p>
//               <select
//                 name="hasMedicalCondition"
//                 value={formData.hasMedicalCondition}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
              
//               {formData.hasMedicalCondition === 'Yes' && (
//                 <textarea
//                   name="medicalConditionDescription"
//                   placeholder="Please describe your medical condition"
//                   value={formData.medicalConditionDescription}
//                   onChange={handleChange}
//                   className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
//                   rows="3"
//                 />
//               )}
//             </div>
            
//             <div className="col-span-2 mb-4">
//               <p className="mb-2">Fitness Goals</p>
//               <select
//                 name="fitnessGoal"
//                 value={formData.fitnessGoal}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
//               >
//                 <option value="">Select Your Primary Fitness Goal</option>
//                 <option value="Weight Loss">Weight Loss</option>
//                 <option value="Muscle Gain">Muscle Gain</option>
//                 <option value="Improved Stamina">Improved Stamina</option>
//                 <option value="General Fitness">General Fitness</option>
//                 <option value="Strength Training">Strength Training</option>
//                 <option value="Flexibility">Flexibility</option>
//                 <option value="Sports Performance">Sports Performance</option>
//                 <option value="Rehabilitation">Rehabilitation</option>
//               </select>
//               <textarea
//                 name="fitnessGoalDetails"
//                 placeholder="Additional details about your fitness goals"
//                 value={formData.fitnessGoalDetails}
//                 onChange={handleChange}
//                 className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
//                 rows="3"
//               />
//             </div>

//             {/* Form Actions */}
//             <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 ">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               >
//                 Reset
//               </button>
//               <button
//                 type="submit"
//                 className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
//               >
//                 Add Member
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMember;/
"use client"; // Mark this component as a Client Component
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const AddMember = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    pincode: '',
    mobileNumber: '',
    age: '',
    gender: '',
    bloodGroup: '',
    contactName: '',
    relationship: '',
    emergencyContactNumber: '',
    membershipPlan: '',
    dateOfJoining: '',
    paymentType: '',
    totalAmountReceived: '',
    hasMedicalCondition: '',
    medicalConditionDescription: '',
    fitnessGoal: '',
    fitnessGoalDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Member added successfully!');
        handleReset();
      } else {
        alert('Failed to add member');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the member');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      address: '',
      pincode: '',
      mobileNumber: '',
      age: '',
      gender: '',
      bloodGroup: '',
      contactName: '',
      relationship: '',
      emergencyContactNumber: '',
      membershipPlan: '',
      dateOfJoining: '',
      paymentType: '',
      totalAmountReceived: '',
      hasMedicalCondition: '',
      medicalConditionDescription: '',
      fitnessGoal: '',
      fitnessGoalDetails: ''
    });
  };

  return (
    <div className="p-6 flex justify-center items-start overflow-auto h-screen pt-0">
      <div className="w-full max-w-8xl">
        {/* Add Member Title Outside the Box */}
        <h2 className="text-2xl font-bold mb-6 sticky top-0 bg-gray-800 py-2 z-10 text-white">Add New Member</h2>

        {/* Form Box */}
        <div className="bg-gray-800 p-6 rounded-lg text-white h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Personal Information */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 text-red-500">Personal Information</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            {/* Emergency Information */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Emergency Information</h3>
            <input
              type="text"
              name="contactName"
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              name="emergencyContactNumber"
              placeholder="Emergency Contact Number"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 col-span-2"
            />

            {/* Membership Details */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Membership Details</h3>
            <select
              name="membershipPlan"
              value={formData.membershipPlan}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Membership Plan</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <input
              type="date"
              name="dateOfJoining"
              placeholder="Date of Joining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select Payment Type</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Online">Online</option>
            </select>
            <input
              type="number"
              name="totalAmountReceived"
              placeholder="Total Amount Received"
              value={formData.totalAmountReceived}
              onChange={handleChange}
              className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Health Information */}
            <h3 className="col-span-2 text-xl font-semibold mb-2 mt-4 text-red-500">Health Information</h3>
            <div className="col-span-2">
              <p className="mb-2">Are you suffering from any disease?</p>
              <select
                name="hasMedicalCondition"
                value={formData.hasMedicalCondition}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              
              {formData.hasMedicalCondition === 'Yes' && (
                <textarea
                  name="medicalConditionDescription"
                  placeholder="Please describe your medical condition"
                  value={formData.medicalConditionDescription}
                  onChange={handleChange}
                  className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mb-4"
                  rows="3"
                />
              )}
            </div>
            
            <div className="col-span-2 mb-4">
              <p className="mb-2 text-red-500 font-semibold">Fitness Goals</p>
              <select
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
              >
                <option value="">Select Your Primary Fitness Goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Improved Stamina">Improved Stamina</option>
                <option value="General Fitness">General Fitness</option>
                <option value="Strength Training">Strength Training</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Sports Performance">Sports Performance</option>
                <option value="Rehabilitation">Rehabilitation</option>
              </select>
              <textarea
                name="fitnessGoalDetails"
                placeholder="Additional details about your fitness goals"
                value={formData.fitnessGoalDetails}
                onChange={handleChange}
                className="bg-gray-700 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full mt-4"
                rows="3"
              />
            </div>

            {/* Form Actions */}
            <div className="col-span-2 flex justify-end space-x-4 mt-4 bg-gray-800 py-4 ">
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-600 px-4 py-2 rounded font-bold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-red-500 px-4 py-2 rounded font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Add Member
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMember;