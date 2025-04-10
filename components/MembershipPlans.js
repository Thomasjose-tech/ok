// // // // // // components/MembershipPlan.js
// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { CreditCard } from "lucide-react";
// // // // // import { useRouter } from "next/navigation";

// // // // // export default function MembershipPlan() {
// // // // //   const [selectedPlan, setSelectedPlan] = useState(null);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const router = useRouter();

// // // // //   // Membership plans data
// // // // //   const membershipPlans = [
// // // // //     { 
// // // // //       type: "Monthly", 
// // // // //       price: 999, 
// // // // //       description: "Perfect for short-term fitness goals",
// // // // //       features: [
// // // // //         "Access to all gym equipment",
// // // // //         "Group classes included",
// // // // //         "1 free personal training session",
// // // // //         "24/7 gym access"
// // // // //       ]
// // // // //     },
// // // // //     { 
// // // // //       type: "Quarterly", 
// // // // //       price: 2599, 
// // // // //       description: "Ideal for consistent training over 3 months",
// // // // //       features: [
// // // // //         "All Monthly benefits",
// // // // //         "5 personal training sessions",
// // // // //         "Nutrition consultation",
// // // // //         "10% discount on merchandise"
// // // // //       ]
// // // // //     },
// // // // //     { 
// // // // //       type: "Annually", 
// // // // //       price: 8999, 
// // // // //       description: "Best value for long-term commitment",
// // // // //       features: [
// // // // //         "All Quarterly benefits",
// // // // //         "Unlimited personal training",
// // // // //         "Body composition analysis",
// // // // //         "20% discount on merchandise",
// // // // //         "Free locker rental"
// // // // //       ]
// // // // //     },
// // // // //   ];

// // // // //   const handlePayment = async (event) => {
// // // // //     event.stopPropagation();

// // // // //     if (!selectedPlan) {
// // // // //       alert("Please select a membership plan");
// // // // //       return;
// // // // //     }

// // // // //     const plan = membershipPlans.find((p) => p.type === selectedPlan);
// // // // //     if (!plan) {
// // // // //       alert("Invalid membership plan selected");
// // // // //       return;
// // // // //     }

// // // // //     setIsLoading(true);

// // // // //     try {
// // // // //       // Simulate payment processing
// // // // //       await new Promise(resolve => setTimeout(resolve, 1500));
      
// // // // //       // In a real app, you would redirect to a payment gateway here
// // // // //       alert(`Redirecting to payment for ${plan.type} plan (₹${plan.price})`);
      
// // // // //       // For demo purposes, we'll just show a success message
// // // // //       alert("Payment successful! Thank you for your membership.");
      
// // // // //       // Redirect to dashboard or success page
// // // // //       router.push("/dashboard");
// // // // //     } catch (err) {
// // // // //       console.error("Payment error:", err);
// // // // //       setError("Failed to initiate payment. Please try again.");
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // // // //         <h1 className="text-3xl font-bold mb-6">Select Membership Plan</h1>
// // // // //         <div className="text-red-500">{error}</div>
// // // // //         <button 
// // // // //           onClick={() => window.location.reload()}
// // // // //           className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // // //         >
// // // // //           Try Again
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // // // //       <h1 className="text-3xl font-bold mb-6">Membership Plans</h1>
// // // // //       <p className="text-gray-400 mb-8">Choose the plan that fits your fitness journey</p>
      
// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //         {membershipPlans.map((plan) => (
// // // // //           <div
// // // // //             key={plan.type}
// // // // //             className={`p-6 rounded-lg border ${
// // // // //               selectedPlan === plan.type
// // // // //                 ? "border-red-600 bg-red-600/10"
// // // // //                 : "border-gray-700 bg-gray-800 hover:bg-gray-700"
// // // // //             } transition-all cursor-pointer`}
// // // // //             onClick={() => setSelectedPlan(plan.type)}
// // // // //           >
// // // // //             <h2 className="text-xl font-semibold capitalize mb-2">{plan.type}</h2>
// // // // //             <p className="text-2xl font-bold text-red-500 mb-2">₹{plan.price}</p>
// // // // //             <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
            
// // // // //             <ul className="mb-6 space-y-2">
// // // // //               {plan.features.map((feature, index) => (
// // // // //                 <li key={index} className="flex items-start">
// // // // //                   <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // // //                   </svg>
// // // // //                   <span className="text-gray-300">{feature}</span>
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>

// // // // //             <button
// // // // //               className={`w-full py-2 rounded-lg ${
// // // // //                 selectedPlan === plan.type
// // // // //                   ? "bg-red-600 hover:bg-red-700"
// // // // //                   : "bg-gray-700 hover:bg-gray-600"
// // // // //               } text-white font-medium transition-all`}
// // // // //               onClick={(e) => {
// // // // //                 e.stopPropagation();
// // // // //                 handlePayment(e);
// // // // //               }}
// // // // //               disabled={isLoading}
// // // // //             >
// // // // //               {isLoading ? "Processing..." : "Select Plan"}
// // // // //             </button>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {selectedPlan && (
// // // // //         <div className="mt-8 flex justify-center">
// // // // //           <button
// // // // //             onClick={handlePayment}
// // // // //             className="flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg"
// // // // //             disabled={isLoading}
// // // // //           >
// // // // //             <CreditCard className="h-5 w-5 mr-2" />
// // // // //             {isLoading ? "Processing..." : "Proceed to Payment"}
// // // // //           </button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // components/MembershipPlan.js
// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { CreditCard, Loader2 } from "lucide-react";
// // // // import { useRouter } from "next/navigation";
// // // // import { toast } from "react-hot-toast";

// // // // export default function MembershipPlan() {
// // // //   const [selectedPlan, setSelectedPlan] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [plansLoading, setPlansLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [membershipPlans, setMembershipPlans] = useState([]);
// // // //   const router = useRouter();

// // // //   // Fetch plans from backend on component mount
// // // //   useEffect(() => {
// // // //     const fetchPlans = async () => {
// // // //       try {
// // // //         const response = await fetch("http://localhost:5000/api/membership/plans'");
// // // //         const data = await response.json();
        
// // // //         if (!response.ok) {
// // // //           throw new Error(data.error || 'Failed to fetch plans');
// // // //         }

// // // //         // Transform backend data to frontend format
// // // //         const transformedPlans = [
// // // //           { 
// // // //             type: "Monthly", 
// // // //             price: data.plans.Monthly, 
// // // //             description: "Perfect for short-term fitness goals",
// // // //             features: [
// // // //               "Access to all gym equipment",
// // // //               "Group classes included",
// // // //               "1 free personal training session",
// // // //               "24/7 gym access"
// // // //             ]
// // // //           },
// // // //           { 
// // // //             type: "Quarterly", 
// // // //             price: data.plans.Quarterly, 
// // // //             description: "Ideal for consistent training over 3 months",
// // // //             features: [
// // // //               "All Monthly benefits",
// // // //               "5 personal training sessions",
// // // //               "Nutrition consultation",
// // // //               "10% discount on merchandise"
// // // //             ]
// // // //           },
// // // //           { 
// // // //             type: "Annually", 
// // // //             price: data.plans.Annually, 
// // // //             description: "Best value for long-term commitment",
// // // //             features: [
// // // //               "All Quarterly benefits",
// // // //               "Unlimited personal training",
// // // //               "Body composition analysis",
// // // //               "20% discount on merchandise",
// // // //               "Free locker rental"
// // // //             ]
// // // //           }
// // // //         ];

// // // //         setMembershipPlans(transformedPlans);
// // // //       } catch (err) {
// // // //         console.error("Error fetching plans:", err);
// // // //         setError(err.message);
// // // //       } finally {
// // // //         setPlansLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPlans();
// // // //   }, []);

// // // //   const handlePayment = async (event) => {
// // // //     event.stopPropagation();

// // // //     if (!selectedPlan) {
// // // //       toast.error("Please select a membership plan");
// // // //       return;
// // // //     }

// // // //     const plan = membershipPlans.find((p) => p.type === selectedPlan);
// // // //     if (!plan) {
// // // //       toast.error("Invalid membership plan selected");
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);

// // // //     try {
// // // //       // In a real app, you would create a payment intent first
// // // //       const paymentResponse = await fetch('/api/payment/create-intent', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           planType: plan.type,
// // // //           amount: plan.price,
// // // //         }),
// // // //       });

// // // //       const paymentData = await paymentResponse.json();

// // // //       if (!paymentResponse.ok) {
// // // //         throw new Error(paymentData.error || 'Payment failed');
// // // //       }

// // // //       // Here you would typically redirect to a payment gateway
// // // //       // For demo, we'll simulate a successful payment
// // // //       const confirmResponse = await fetch('/api/membership/initialize', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           planType: plan.type,
// // // //           amount: plan.price,
// // // //         }),
// // // //       });

// // // //       const confirmData = await confirmResponse.json();

// // // //       if (!confirmResponse.ok) {
// // // //         throw new Error(confirmData.error || 'Payment confirmation failed');
// // // //       }

// // // //       toast.success(`Payment successful! ${plan.type} membership activated.`);
// // // //       router.push("/dashboard");
// // // //     } catch (err) {
// // // //       console.error("Payment error:", err);
// // // //       setError(err.message);
// // // //       toast.error(err.message || "Payment failed. Please try again.");
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   if (error) {
// // // //     return (
// // // //       <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // // //         <h1 className="text-3xl font-bold mb-6">Select Membership Plan</h1>
// // // //         <div className="text-red-500">{error}</div>
// // // //         <button 
// // // //           onClick={() => window.location.reload()}
// // // //           className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // //         >
// // // //           Try Again
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (plansLoading) {
// // // //     return (
// // // //       <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
// // // //         <Loader2 className="h-12 w-12 animate-spin text-red-500" />
// // // //         <p className="mt-4 text-gray-400">Loading membership plans...</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // // //       <h1 className="text-3xl font-bold mb-6">Membership Plans</h1>
// // // //       <p className="text-gray-400 mb-8">Choose the plan that fits your fitness journey</p>
      
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         {membershipPlans.map((plan) => (
// // // //           <div
// // // //             key={plan.type}
// // // //             className={`p-6 rounded-lg border ${
// // // //               selectedPlan === plan.type
// // // //                 ? "border-red-600 bg-red-600/10"
// // // //                 : "border-gray-700 bg-gray-800 hover:bg-gray-700"
// // // //             } transition-all cursor-pointer`}
// // // //             onClick={() => setSelectedPlan(plan.type)}
// // // //           >
// // // //             <h2 className="text-xl font-semibold capitalize mb-2">{plan.type}</h2>
// // // //             <p className="text-2xl font-bold text-red-500 mb-2">₹{plan.price}</p>
// // // //             <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
            
// // // //             <ul className="mb-6 space-y-2">
// // // //               {plan.features.map((feature, index) => (
// // // //                 <li key={index} className="flex items-start">
// // // //                   <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                   </svg>
// // // //                   <span className="text-gray-300">{feature}</span>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>

// // // //             <button
// // // //               className={`w-full py-2 rounded-lg ${
// // // //                 selectedPlan === plan.type
// // // //                   ? "bg-red-600 hover:bg-red-700"
// // // //                   : "bg-gray-700 hover:bg-gray-600"
// // // //               } text-white font-medium transition-all flex items-center justify-center`}
// // // //               onClick={(e) => {
// // // //                 e.stopPropagation();
// // // //                 handlePayment(e);
// // // //               }}
// // // //               disabled={isLoading}
// // // //             >
// // // //               {isLoading && selectedPlan === plan.type ? (
// // // //                 <Loader2 className="h-4 w-4 animate-spin mr-2" />
// // // //               ) : null}
// // // //               {isLoading && selectedPlan === plan.type ? "Processing..." : "Select Plan"}
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {selectedPlan && (
// // // //         <div className="mt-8 flex justify-center">
// // // //           <button
// // // //             onClick={handlePayment}
// // // //             className="flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg"
// // // //             disabled={isLoading}
// // // //           >
// // // //             {isLoading ? (
// // // //               <Loader2 className="h-5 w-5 animate-spin mr-2" />
// // // //             ) : (
// // // //               <CreditCard className="h-5 w-5 mr-2" />
// // // //             )}
// // // //             {isLoading ? "Processing..." : "Proceed to Payment"}
// // // //           </button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // // components/MembershipPlan.js
// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { CreditCard, Loader2 } from "lucide-react";
// // // import { useRouter } from "next/navigation";
// // // import { toast } from "react-hot-toast";

// // // const API_BASE_URL = "http://localhost:5000"; // Your backend base URL

// // // export default function MembershipPlan() {
// // //   const [selectedPlan, setSelectedPlan] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [plansLoading, setPlansLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [membershipPlans, setMembershipPlans] = useState([]);
// // //   const router = useRouter();

// // //   // Enhanced API fetch function
// // //   const fetchAPI = async (endpoint, options = {}) => {
// // //     try {
// // //       const response = await fetch(`${API_BASE_URL}${endpoint}`, {
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         credentials: "include",
// // //         ...options,
// // //       });

// // //       // Check for non-JSON responses
// // //       const contentType = response.headers.get("content-type");
// // //       if (!contentType?.includes("application/json")) {
// // //         const text = await response.text();
// // //         console.error("Non-JSON response:", text.substring(0, 200));
// // //         throw new Error(
// // //           `Server returned ${response.status} ${response.statusText}`
// // //         );
// // //       }

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message || `Request failed with status ${response.status}`);
// // //       }

// // //       return data;
// // //     } catch (err) {
// // //       console.error(`API call to ${endpoint} failed:`, err);
// // //       throw err;
// // //     }
// // //   };

// // //   // Fetch plans from backend
// // //   useEffect(() => {
// // //     const loadPlans = async () => {
// // //       try {
// // //         setPlansLoading(true);
// // //         const data = await fetchAPI("/api/membership/plans");
        
// // //         if (!data?.plans) {
// // //           throw new Error("Invalid plans data received from server");
// // //         }

// // //         // Transform backend data to frontend format
// // //         setMembershipPlans([
// // //           {
// // //             type: "Monthly",
// // //             price: data.plans.Monthly,
// // //             description: "Perfect for short-term fitness goals",
// // //             features: [
// // //               "Access to all gym equipment",
// // //               "Group classes included",
// // //               "1 free personal training session",
// // //               "24/7 gym access",
// // //             ],
// // //           },
// // //           {
// // //             type: "Quarterly",
// // //             price: data.plans.Quarterly,
// // //             description: "Ideal for consistent training over 3 months",
// // //             features: [
// // //               "All Monthly benefits",
// // //               "5 personal training sessions",
// // //               "Nutrition consultation",
// // //               "10% discount on merchandise",
// // //             ],
// // //           },
// // //           {
// // //             type: "Annually",
// // //             price: data.plans.Annually,
// // //             description: "Best value for long-term commitment",
// // //             features: [
// // //               "All Quarterly benefits",
// // //               "Unlimited personal training",
// // //               "Body composition analysis",
// // //               "20% discount on merchandise",
// // //               "Free locker rental",
// // //             ],
// // //           },
// // //         ]);
// // //       } catch (err) {
// // //         setError(err.message);
// // //         toast.error("Failed to load plans. Please check backend connection.");
// // //       } finally {
// // //         setPlansLoading(false);
// // //       }
// // //     };

// // //     loadPlans();
// // //   }, []);

// // //   const handlePayment = async (event) => {
// // //     event.preventDefault();
// // //     event.stopPropagation();

// // //     if (!selectedPlan) {
// // //       toast.error("Please select a membership plan");
// // //       return;
// // //     }

// // //     const plan = membershipPlans.find((p) => p.type === selectedPlan);
// // //     if (!plan) {
// // //       toast.error("Invalid membership plan selected");
// // //       return;
// // //     }

// // //     setIsLoading(true);

// // //     try {
// // //       // Step 1: Create payment intent
// // //       await fetchAPI("/api/payment/create-intent", {
// // //         method: "POST",
// // //         body: JSON.stringify({
// // //           planType: plan.type,
// // //           amount: plan.price,
// // //         }),
// // //       });

// // //       // Step 2: Simulate payment processing
// // //       await new Promise((resolve) => setTimeout(resolve, 1500));

// // //       // Step 3: Confirm payment
// // //       await fetchAPI("/api/membership/initialize", {
// // //         method: "POST",
// // //         body: JSON.stringify({
// // //           planType: plan.type,
// // //           amount: plan.price,
// // //         }),
// // //       });

// // //       toast.success(
// // //         `Payment successful! ${plan.type} membership activated. Redirecting...`
// // //       );
// // //       setTimeout(() => router.push("/dashboard"), 2000);
// // //     } catch (err) {
// // //       setError(err.message);
// // //       toast.error(err.message || "Payment processing failed");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   if (error) {
// // //     return (
// // //       <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // //         <h1 className="text-3xl font-bold mb-6">Select Membership Plan</h1>
// // //         <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-6">
// // //           <h3 className="text-lg font-medium text-red-300 mb-2">
// // //             Connection Error
// // //           </h3>
// // //           <p className="text-red-100 mb-2">{error}</p>
// // //           <div className="text-sm text-red-300">
// // //             <p className="font-medium">Please verify:</p>
// // //             <ul className="list-disc pl-5 mt-1 space-y-1">
// // //               <li>Backend server is running at {API_BASE_URL}</li>
// // //               <li>Check browser console for detailed errors</li>
// // //               <li>Verify network connectivity</li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //         <button
// // //           onClick={() => {
// // //             setError(null);
// // //             setPlansLoading(true);
// // //             setTimeout(() => window.location.reload(), 300);
// // //           }}
// // //           className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
// // //         >
// // //           Retry Connection
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   if (plansLoading) {
// // //     return (
// // //       <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
// // //         <Loader2 className="h-12 w-12 animate-spin text-red-500 mb-4" />
// // //         <h2 className="text-xl font-medium mb-2">Loading Membership Plans</h2>
// // //         <p className="text-gray-400 text-center max-w-md">
// // //           Connecting to the server at {API_BASE_URL}
// // //           <br />
// // //           This may take a moment if the server is starting up
// // //         </p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white">
// // //       <h1 className="text-3xl font-bold mb-6">Membership Plans</h1>
// // //       <p className="text-gray-400 mb-8">
// // //         Choose the plan that fits your fitness journey
// // //       </p>

// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         {membershipPlans.map((plan) => (
// // //           <div
// // //             key={plan.type}
// // //             className={`p-6 rounded-lg border transition-all cursor-pointer ${
// // //               selectedPlan === plan.type
// // //                 ? "border-red-600 bg-red-600/10"
// // //                 : "border-gray-700 bg-gray-800 hover:bg-gray-700"
// // //             }`}
// // //             onClick={() => setSelectedPlan(plan.type)}
// // //           >
// // //             <h2 className="text-xl font-semibold capitalize mb-2">
// // //               {plan.type}
// // //             </h2>
// // //             <p className="text-2xl font-bold text-red-500 mb-2">
// // //               ₹{plan.price}
// // //             </p>
// // //             <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

// // //             <ul className="mb-6 space-y-2">
// // //               {plan.features.map((feature, index) => (
// // //                 <li key={index} className="flex items-start">
// // //                   <svg
// // //                     className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
// // //                     fill="none"
// // //                     viewBox="0 0 24 24"
// // //                     stroke="currentColor"
// // //                   >
// // //                     <path
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                       strokeWidth={2}
// // //                       d="M5 13l4 4L19 7"
// // //                     />
// // //                   </svg>
// // //                   <span className="text-gray-300">{feature}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             <button
// // //               className={`w-full py-2 rounded-lg flex items-center justify-center font-medium transition-all ${
// // //                 selectedPlan === plan.type
// // //                   ? "bg-red-600 hover:bg-red-700"
// // //                   : "bg-gray-700 hover:bg-gray-600"
// // //               }`}
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 handlePayment(e);
// // //               }}
// // //               disabled={isLoading}
// // //             >
// // //               {isLoading && selectedPlan === plan.type ? (
// // //                 <>
// // //                   <Loader2 className="h-4 w-4 animate-spin mr-2" />
// // //                   Processing...
// // //                 </>
// // //               ) : (
// // //                 "Select Plan"
// // //               )}
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {selectedPlan && (
// // //         <div className="mt-8 flex justify-center">
// // //           <button
// // //             onClick={handlePayment}
// // //             className="flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg"
// // //             disabled={isLoading}
// // //           >
// // //             {isLoading ? (
// // //               <Loader2 className="h-5 w-5 animate-spin mr-2" />
// // //             ) : (
// // //               <CreditCard className="h-5 w-5 mr-2" />
// // //             )}
// // //             {isLoading ? "Processing Payment..." : "Proceed to Payment"}
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import React from 'react';

// // const MembershipPlans = () => {
// //   return (
// //     <div className="bg-slate-900 text-white min-h-screen p-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-2">Membership Plans</h1>
// //         <p className="text-gray-400 mb-10">Choose the plan that fits your fitness journey</p>
        
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {/* Monthly Plan */}
// //           <div className="bg-slate-800 rounded-lg p-6 flex flex-col">
// //             <h2 className="text-2xl font-bold mb-2">Monthly</h2>
// //             <p className="text-red-500 text-3xl font-bold mb-2">₹4500</p>
// //             <p className="text-gray-400 mb-6">Perfect for short-term fitness goals</p>
            
// //             <ul className="space-y-3 flex-grow">
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Access to all gym equipment</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Group classes included</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>1 free personal training session</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>24/7 gym access</span>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Quarterly Plan */}
// //           <div className="bg-slate-800 rounded-lg p-6 flex flex-col">
// //             <h2 className="text-2xl font-bold mb-2">Quarterly</h2>
// //             <p className="text-red-500 text-3xl font-bold mb-2">₹5000</p>
// //             <p className="text-gray-400 mb-6">Ideal for consistent training over 3 months</p>
            
// //             <ul className="space-y-3 flex-grow">
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>All Monthly benefits</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>5 personal training sessions</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Nutrition consultation</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>10% discount on merchandise</span>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Annual Plan */}
// //           <div className="bg-slate-800 rounded-lg p-6 flex flex-col">
// //             <h2 className="text-2xl font-bold mb-2">Annually</h2>
// //             <p className="text-red-500 text-3xl font-bold mb-2">₹4500</p>
// //             <p className="text-gray-400 mb-6">Best value for long-term commitment</p>
            
// //             <ul className="space-y-3 flex-grow">
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>All Quarterly benefits</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Unlimited personal training</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Body composition analysis</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>20% discount on merchandise</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <span className="text-green-500 mr-2">✓</span>
// //                 <span>Free locker rental</span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MembershipPlans;
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Edit, Check, X } from 'lucide-react';

// const MembershipPlans = () => {
//   const [plans, setPlans] = useState({
//     Monthly: 4500,
//     Quarterly: 5000,
//     Annually: 4500
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editing, setEditing] = useState(null);
//   const [editValue, setEditValue] = useState('');

//   // Fetch plans from backend
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/membership/plans');
//         if (!response.ok) throw new Error('Failed to fetch plans');
//         const data = await response.json();
//         if (data.plans) {
//           setPlans(data.plans);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const startEditing = (planName) => {
//     setEditing(planName);
//     setEditValue(plans[planName]);
//   };

//   const cancelEditing = () => {
//     setEditing(null);
//     setEditValue('');
//   };

//   const handlePriceUpdate = async (planName) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/membership/update-price', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           planName,
//           newPrice: editValue
//         })
//       });

//       if (!response.ok) throw new Error('Failed to update price');

//       const data = await response.json();
//       setPlans(prev => ({
//         ...prev,
//         [planName]: editValue
//       }));
//       setEditing(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="bg-slate-900 text-white min-h-screen p-8 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-slate-900 text-white min-h-screen p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
//             <p className="text-red-300">Error: {error}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-slate-900 text-white min-h-screen p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-start mb-10">
//           <div>
//             <h1 className="text-4xl font-bold mb-2">Membership Plans</h1>
//             <p className="text-gray-400">Choose the plan that fits your fitness journey</p>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Monthly Plan */}
//           <div className="bg-slate-800 rounded-lg p-6 flex flex-col relative">
//             <div className="flex justify-between items-start">
//               <h2 className="text-2xl font-bold mb-2">Monthly</h2>
//               {editing === 'Monthly' ? (
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={() => handlePriceUpdate('Monthly')}
//                     className="p-1 text-green-500 hover:bg-green-500/10 rounded"
//                   >
//                     <Check size={18} />
//                   </button>
//                   <button 
//                     onClick={cancelEditing}
//                     className="p-1 text-red-500 hover:bg-red-500/10 rounded"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>
//               ) : (
//                 <button 
//                   onClick={() => startEditing('Monthly')}
//                   className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
//                 >
//                   <Edit size={18} />
//                 </button>
//               )}
//             </div>
            
//             {editing === 'Monthly' ? (
//               <input
//                 type="number"
//                 value={editValue}
//                 onChange={(e) => setEditValue(Number(e.target.value))}
//                 className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
//               />
//             ) : (
//               <p className="text-red-500 text-3xl font-bold mb-2">₹{plans.Monthly}</p>
//             )}
            
//             <p className="text-gray-400 mb-6">Perfect for short-term fitness goals</p>
            
//             <ul className="space-y-3 flex-grow">
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Access to all gym equipment</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Group classes included</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>1 free personal training session</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>24/7 gym access</span>
//               </li>
//             </ul>
//           </div>

//           {/* Quarterly Plan */}
//           <div className="bg-slate-800 rounded-lg p-6 flex flex-col relative">
//             <div className="flex justify-between items-start">
//               <h2 className="text-2xl font-bold mb-2">Quarterly</h2>
//               {editing === 'Quarterly' ? (
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={() => handlePriceUpdate('Quarterly')}
//                     className="p-1 text-green-500 hover:bg-green-500/10 rounded"
//                   >
//                     <Check size={18} />
//                   </button>
//                   <button 
//                     onClick={cancelEditing}
//                     className="p-1 text-red-500 hover:bg-red-500/10 rounded"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>
//               ) : (
//                 <button 
//                   onClick={() => startEditing('Quarterly')}
//                   className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
//                 >
//                   <Edit size={18} />
//                 </button>
//               )}
//             </div>
            
//             {editing === 'Quarterly' ? (
//               <input
//                 type="number"
//                 value={editValue}
//                 onChange={(e) => setEditValue(Number(e.target.value))}
//                 className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
//               />
//             ) : (
//               <p className="text-red-500 text-3xl font-bold mb-2">₹{plans.Quarterly}</p>
//             )}
            
//             <p className="text-gray-400 mb-6">Ideal for consistent training over 3 months</p>
            
//             <ul className="space-y-3 flex-grow">
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>All Monthly benefits</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>5 personal training sessions</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Nutrition consultation</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>10% discount on merchandise</span>
//               </li>
//             </ul>
//           </div>

//           {/* Annual Plan */}
//           <div className="bg-slate-800 rounded-lg p-6 flex flex-col relative">
//             <div className="flex justify-between items-start">
//               <h2 className="text-2xl font-bold mb-2">Annually</h2>
//               {editing === 'Annually' ? (
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={() => handlePriceUpdate('Annually')}
//                     className="p-1 text-green-500 hover:bg-green-500/10 rounded"
//                   >
//                     <Check size={18} />
//                   </button>
//                   <button 
//                     onClick={cancelEditing}
//                     className="p-1 text-red-500 hover:bg-red-500/10 rounded"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>
//               ) : (
//                 <button 
//                   onClick={() => startEditing('Annually')}
//                   className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
//                 >
//                   <Edit size={18} />
//                 </button>
//               )}
//             </div>
            
//             {editing === 'Annually' ? (
//               <input
//                 type="number"
//                 value={editValue}
//                 onChange={(e) => setEditValue(Number(e.target.value))}
//                 className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
//               />
//             ) : (
//               <p className="text-red-500 text-3xl font-bold mb-2">₹{plans.Annually}</p>
//             )}
            
//             <p className="text-gray-400 mb-6">Best value for long-term commitment</p>
            
//             <ul className="space-y-3 flex-grow">
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>All Quarterly benefits</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Unlimited personal training</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Body composition analysis</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>20% discount on merchandise</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-500 mr-2">✓</span>
//                 <span>Free locker rental</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembershipPlans;
"use client";
import React, { useState, useEffect } from 'react';
import { Edit, Check, X } from 'lucide-react';

const MembershipPlans = () => {
  const [plans, setPlans] = useState({
    Monthly: 4500,
    Quarterly: 5000,
    Annually: 4500
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Fetch plans from backend
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('https://flexzone-gyms.onrender.com/api/membership/plans');
        if (!response.ok) throw new Error('Failed to fetch plans');
        const data = await response.json();
        if (data.plans) {
          setPlans(data.plans);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const startEditing = (planName) => {
    setEditing(planName);
    setEditValue(plans[planName]);
  };

  const cancelEditing = () => {
    setEditing(null);
    setEditValue('');
  };

  const handlePriceUpdate = async (planName) => {
    try {
      const response = await fetch('https://flexzone-gyms.onrender.com/api/membership/update-price', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
          newPrice: editValue
        })
      });

      if (!response.ok) throw new Error('Failed to update price');

      const data = await response.json();
      setPlans(prev => ({
        ...prev,
        [planName]: editValue
      }));
      setEditing(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mx-4">
        <p className="text-red-300">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-6 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Membership Plans</h1>
            <p className="text-gray-400">Choose the plan that fits your fitness journey</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Monthly Plan */}
          <div className="bg-slate-800 rounded-lg p-4 md:p-6 flex flex-col relative">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Monthly</h2>
              {editing === 'Monthly' ? (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handlePriceUpdate('Monthly')}
                    className="p-1 text-green-500 hover:bg-green-500/10 rounded"
                  >
                    <Check size={18} />
                  </button>
                  <button 
                    onClick={cancelEditing}
                    className="p-1 text-red-500 hover:bg-red-500/10 rounded"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => startEditing('Monthly')}
                  className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
                >
                  <Edit size={18} />
                </button>
              )}
            </div>
            
            {editing === 'Monthly' ? (
              <input
                type="number"
                value={editValue}
                onChange={(e) => setEditValue(Number(e.target.value))}
                className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
              />
            ) : (
              <p className="text-red-500 text-2xl md:text-3xl font-bold mb-2">₹{plans.Monthly}</p>
            )}
            
            <p className="text-gray-400 mb-4 md:mb-6">Perfect for short-term fitness goals</p>
            
            <ul className="space-y-2 md:space-y-3 flex-grow">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Access to all gym equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Group classes included</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>1 free personal training session</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 gym access</span>
              </li>
            </ul>
          </div>

          {/* Quarterly Plan */}
          <div className="bg-slate-800 rounded-lg p-4 md:p-6 flex flex-col relative">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Quarterly</h2>
              {editing === 'Quarterly' ? (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handlePriceUpdate('Quarterly')}
                    className="p-1 text-green-500 hover:bg-green-500/10 rounded"
                  >
                    <Check size={18} />
                  </button>
                  <button 
                    onClick={cancelEditing}
                    className="p-1 text-red-500 hover:bg-red-500/10 rounded"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => startEditing('Quarterly')}
                  className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
                >
                  <Edit size={18} />
                </button>
              )}
            </div>
            
            {editing === 'Quarterly' ? (
              <input
                type="number"
                value={editValue}
                onChange={(e) => setEditValue(Number(e.target.value))}
                className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
              />
            ) : (
              <p className="text-red-500 text-2xl md:text-3xl font-bold mb-2">₹{plans.Quarterly}</p>
            )}
            
            <p className="text-gray-400 mb-4 md:mb-6">Ideal for consistent training over 3 months</p>
            
            <ul className="space-y-2 md:space-y-3 flex-grow">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All Monthly benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>5 personal training sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Nutrition consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>10% discount on merchandise</span>
              </li>
            </ul>
          </div>

          {/* Annual Plan */}
          <div className="bg-slate-800 rounded-lg p-4 md:p-6 flex flex-col relative">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Annually</h2>
              {editing === 'Annually' ? (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handlePriceUpdate('Annually')}
                    className="p-1 text-green-500 hover:bg-green-500/10 rounded"
                  >
                    <Check size={18} />
                  </button>
                  <button 
                    onClick={cancelEditing}
                    className="p-1 text-red-500 hover:bg-red-500/10 rounded"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => startEditing('Annually')}
                  className="p-1 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
                >
                  <Edit size={18} />
                </button>
              )}
            </div>
            
            {editing === 'Annually' ? (
              <input
                type="number"
                value={editValue}
                onChange={(e) => setEditValue(Number(e.target.value))}
                className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white w-24 mb-2"
              />
            ) : (
              <p className="text-red-500 text-2xl md:text-3xl font-bold mb-2">₹{plans.Annually}</p>
            )}
            
            <p className="text-gray-400 mb-4 md:mb-6">Best value for long-term commitment</p>
            
            <ul className="space-y-2 md:space-y-3 flex-grow">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>All Quarterly benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited personal training</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Body composition analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>20% discount on merchandise</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Free locker rental</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;