// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import Link from "next/link";

// // // // // // export default function Login() {
// // // // // //   const router = useRouter();
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleLogin = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const res = await fetch("/api/login", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email, password }),
// // // // // //       });
// // // // // //       setLoading(false);
// // // // // //       if (res.ok) {
// // // // // //         const data = await res.json();
// // // // // //         localStorage.setItem("user", JSON.stringify({ email }));
// // // // // //         localStorage.setItem("token", data.token);
// // // // // //         localStorage.setItem("authToken", data.token);
// // // // // //         sessionStorage.setItem("checkedAuth", "true");
// // // // // //         router.push("/members");
// // // // // //       } else {
// // // // // //         alert("Invalid email or password");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setLoading(false);
// // // // // //       console.error("Login error:", err);
// // // // // //       alert("Login failed");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
// // // // // //       <div 
// // // // // //         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-red-600 shadow-lg transition-all duration-300 
// // // // // //         focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 active:border-red-500 active:ring-2 active:ring-red-500
// // // // // //         hover:shadow-red-600/40 hover:shadow-xl hover:border-2"
// // // // // //       >
// // // // // //         <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">LOGIN</h1>
// // // // // //         <form onSubmit={handleLogin}>
// // // // // //           <div className="mb-4 sm:mb-6">
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               placeholder="Email"
// // // // // //               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none focus:bg-gray-800 transition-all duration-200"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               required
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div className="mb-6 sm:mb-8">
// // // // // //             <input
// // // // // //               type="password"
// // // // // //               placeholder="Password"
// // // // // //               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all duration-200"
// // // // // //               value={password}
// // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // //               required
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div className="flex justify-center mb-4">
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="w-32 sm:w-40 md:w-48 lg:w-56  bg-red-600 text-white p-3 sm:p-2 rounded font-medium hover:bg-red-700 active:bg-red-800 transform hover:translate-y-px active:translate-y-0 transition-all duration-200 text-base sm:text-lg relative overflow-hidden"
// // // // // //               disabled={loading}
// // // // // //             >
// // // // // //               <span className="relative z-10 flex justify-center items-center">
// // // // // //                 {loading ? (
// // // // // //                   <>
// // // // // //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // // //                     </svg>
// // // // // //                     Logging in...
// // // // // //                   </>
// // // // // //                 ) : (
// // // // // //                   "Login"
// // // // // //                 )}
// // // // // //               </span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           <div className="text-center mt-4 sm:mt-6">
// // // // // //             {/* <Link 
// // // // // //               href="/forgot-password" 
// // // // // //               className="text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors duration-200 hover:underline inline-block"
// // // // // //             >
// // // // // //               Forgot Password?
// // // // // //             </Link> */}
// // // // // //           </div>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // 'use client';
// // // // // import { useEffect } from 'react';
// // // // // import { useRouter } from 'next/navigation';
// // // // // import Head from 'next/head';

// // // // // export default function LoginPage() {
// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     // Load OTPLESS SDK script dynamically
// // // // //     const script = document.createElement('script');
// // // // //     script.id = 'otpless-sdk';
// // // // //     script.type = 'text/javascript';
// // // // //     script.src = 'https://otpless.com/v4/auth.js';
// // // // //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// // // // //     script.async = true;
// // // // //     document.body.appendChild(script);

// // // // //     // Define the otpless function globally
// // // // //     window.otpless = (otplessUser) => {
// // // // //       const token = otplessUser.token;
// // // // //       console.log('Token:', token);
// // // // //       console.log('User Details:', JSON.stringify(otplessUser));
      
// // // // //       // Store token in localStorage or cookies
// // // // //       localStorage.setItem('authToken', token);
      
// // // // //       // Redirect to dashboard
// // // // //       router.push('/members');
// // // // //     };

// // // // //     return () => {
// // // // //       // Cleanup
// // // // //       if (document.getElementById('otpless-sdk')) {
// // // // //         document.body.removeChild(document.getElementById('otpless-sdk'));
// // // // //       }
// // // // //       delete window.otpless;
// // // // //     };
// // // // //   }, [router]);

// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
// // // // //       <Head>
// // // // //         <title>Login | Your App</title>
// // // // //       </Head>
      
// // // // //       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
// // // // //         <div className="text-center">
// // // // //           <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
// // // // //           <p className="mt-2 text-sm text-gray-600">
// // // // //             Or{' '}
// // // // //             <span className="font-medium text-indigo-600 hover:text-indigo-500">
// // // // //               continue with email
// // // // //             </span>
// // // // //           </p>
// // // // //         </div>
        
// // // // //         {/* OTPLESS Login UI */}
// // // // //         <div id="otpless-login-page" className="mt-8"></div>
        
// // // // //         <div className="mt-6 text-center text-sm text-gray-600">
// // // // //           <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // 'use client';
// // // // import { useEffect, useState } from 'react';
// // // // import { useRouter } from 'next/navigation';
// // // // import Head from 'next/head';

// // // // export default function LoginPage() {
// // // //   const router = useRouter();
// // // //   const [error, setError] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     // Load OTPLESS SDK script dynamically
// // // //     const script = document.createElement('script');
// // // //     script.id = 'otpless-sdk';
// // // //     script.type = 'text/javascript';
// // // //     script.src = 'https://otpless.com/v4/auth.js';
// // // //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// // // //     script.async = true;
    
// // // //     // Add error handling for script loading
// // // //     script.onerror = () => {
// // // //       setError('Failed to load authentication service. Please try again later.');
// // // //       setIsLoading(false);
// // // //     };

// // // //     document.body.appendChild(script);

// // // //     // Define the otpless function globally
// // // //     window.otpless = (otplessUser) => {
// // // //       setIsLoading(true);
// // // //       setError(null);
      
// // // //       // Check if the flow was cancelled
// // // //       if (otplessUser === 'CANCELLED') {
// // // //         setError('OTP verification was cancelled. Please try again.');
// // // //         setIsLoading(false);
// // // //         return;
// // // //       }

// // // //       // Check for errors in the response
// // // //       if (otplessUser.error) {
// // // //         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
// // // //         setIsLoading(false);
// // // //         return;
// // // //       }

// // // //       try {
// // // //         const token = otplessUser.token;
// // // //         console.log('Token:', token);
// // // //         console.log('User Details:', JSON.stringify(otplessUser));
        
// // // //         // Store token in localStorage or cookies
// // // //         localStorage.setItem('authToken', token);
        
// // // //         // Redirect to members page
// // // //         router.push('/members');
// // // //       } catch (err) {
// // // //         console.error('Authentication error:', err);
// // // //         setError('An error occurred during authentication. Please try again.');
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     return () => {
// // // //       // Cleanup
// // // //       if (document.getElementById('otpless-sdk')) {
// // // //         document.body.removeChild(document.getElementById('otpless-sdk'));
// // // //       }
// // // //       delete window.otpless;
// // // //     };
// // // //   }, [router]);

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
// // // //       <Head>
// // // //         <title>Login | Your App</title>
// // // //       </Head>
      
// // // //       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
// // // //         <div className="text-center">
// // // //           <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
// // // //           <p className="mt-2 text-sm text-gray-600">
// // // //             Or{' '}
// // // //             <span className="font-medium text-indigo-600 hover:text-indigo-500">
// // // //               continue with email
// // // //             </span>
// // // //           </p>
// // // //         </div>
        
// // // //         {/* Loading state */}
// // // //         {isLoading && (
// // // //           <div className="flex justify-center">
// // // //             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
// // // //           </div>
// // // //         )}
        
// // // //         {/* Error message */}
// // // //         {error && (
// // // //           <div className="rounded-md bg-red-50 p-4">
// // // //             <div className="flex">
// // // //               <div className="ml-3">
// // // //                 <h3 className="text-sm font-medium text-red-800">{error}</h3>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
        
// // // //         {/* OTPLESS Login UI */}
// // // //         {!isLoading && <div id="otpless-login-page" className="mt-8"></div>}
        
// // // //         <div className="mt-6 text-center text-sm text-gray-600">
// // // //           <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';
// // // import { useEffect, useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Head from 'next/head';

// // // export default function LoginPage() {
// // //   const router = useRouter();
// // //   const [error, setError] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   useEffect(() => {
// // //     // Load OTPLESS SDK script dynamically
// // //     const script = document.createElement('script');
// // //     script.id = 'otpless-sdk';
// // //     script.type = 'text/javascript';
// // //     script.src = 'https://otpless.com/v4/auth.js';
// // //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// // //     script.async = true;
    
// // //     // Add error handling for script loading
// // //     script.onerror = () => {
// // //       setError('Failed to load authentication service. Please try again later.');
// // //       setIsLoading(false);
// // //     };

// // //     document.body.appendChild(script);

// // //     // Define the otpless function globally
// // //     window.otpless = (otplessUser) => {
// // //       setIsLoading(true);
// // //       setError(null);
      
// // //       // Check if the flow was cancelled
// // //       if (otplessUser === 'CANCELLED') {
// // //         setError('OTP verification was cancelled. Please try again.');
// // //         setIsLoading(false);
// // //         return;
// // //       }

// // //       // Check for errors in the response
// // //       if (otplessUser.error) {
// // //         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
// // //         setIsLoading(false);
// // //         return;
// // //       }

// // //       try {
// // //         const token = otplessUser.token;
// // //         console.log('Token:', token);
        
// // //         // Store token in localStorage or cookies
// // //         localStorage.setItem('authToken', token);
        
// // //         // Redirect to members page
// // //         router.push('/members');
// // //       } catch (err) {
// // //         console.error('Authentication error:', err);
// // //         setError('An error occurred during authentication. Please try again.');
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     return () => {
// // //       // Cleanup
// // //       if (document.getElementById('otpless-sdk')) {
// // //         document.body.removeChild(document.getElementById('otpless-sdk'));
// // //       }
// // //       delete window.otpless;
// // //     };
// // //   }, [router]);

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
// // //       <Head>
// // //         <title>Login | Your App</title>
// // //       </Head>
      
// // //       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
// // //         <div className="text-center mb-8">
// // //           <img 
// // //             src="/logo.png" 
// // //             alt="Company Logo" 
// // //             className="mx-auto h-12 w-auto"
// // //           />
// // //           <h2 className="mt-6 text-2xl font-bold text-gray-900">
// // //             Sign in to your account
// // //           </h2>
// // //         </div>
        
// // //         {/* Loading state */}
// // //         {isLoading && (
// // //           <div className="flex justify-center py-8">
// // //             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
// // //           </div>
// // //         )}
        
// // //         {/* Error message */}
// // //         {error && (
// // //           <div className="mb-6 rounded-md bg-red-50 p-4">
// // //             <div className="flex">
// // //               <div className="ml-3">
// // //                 <h3 className="text-sm font-medium text-red-800">{error}</h3>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         {/* OTPLESS Login UI */}
// // //         {!isLoading && (
// // //           <div className="space-y-6">
// // //             <div id="otpless-login-page"></div>
// // //           </div>
// // //         )}
        
// // //         <div className="mt-8 text-center text-sm text-gray-500">
// // //           <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // 'use client';
// // // import { useEffect, useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Head from 'next/head';

// // // export default function LoginPage() {
// // //   const router = useRouter();
// // //   const [error, setError] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   useEffect(() => {
// // //     // Load OTPLESS SDK script dynamically
// // //     const script = document.createElement('script');
// // //     script.id = 'otpless-sdk';
// // //     script.type = 'text/javascript';
// // //     script.src = 'https://otpless.com/v4/auth.js';
// // //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// // //     script.async = true;
    
// // //     // Add error handling for script loading
// // //     script.onerror = () => {
// // //       setError('Failed to load authentication service. Please try again later.');
// // //       setIsLoading(false);
// // //     };
// // //     document.body.appendChild(script);

// // //     // Define the otpless function globally
// // //     window.otpless = (otplessUser) => {
// // //       setIsLoading(true);
// // //       setError(null);
      
// // //       // Check if the flow was cancelled
// // //       if (otplessUser === 'CANCELLED') {
// // //         setError('OTP verification was cancelled. Please try again.');
// // //         setIsLoading(false);
// // //         return;
// // //       }
// // //       // Check for errors in the response
// // //       if (otplessUser.error) {
// // //         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
// // //         setIsLoading(false);
// // //         return;
// // //       }
// // //       try {
// // //         const token = otplessUser.token;
// // //         console.log('Token:', token);
        
// // //         // Store token in localStorage or cookies
// // //         localStorage.setItem('authToken', token);
        
// // //         // Redirect to members page
// // //         router.push('/members');
// // //       } catch (err) {
// // //         console.error('Authentication error:', err);
// // //         setError('An error occurred during authentication. Please try again.');
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     return () => {
// // //       // Cleanup
// // //       if (document.getElementById('otpless-sdk')) {
// // //         document.body.removeChild(document.getElementById('otpless-sdk'));
// // //       }
// // //       delete window.otpless;
// // //     };
// // //   }, [router]);

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center bg-gray-50 p-4">
// // //       <Head>
// // //         <title>Login | Your App</title>
// // //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// // //       </Head>
      
// // //       <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
// // //         <div className="text-center mb-6 sm:mb-8">
// // //           <img 
// // //             src="/logo.png" 
// // //             alt="Company Logo" 
// // //             className="mx-auto h-8 sm:h-10 md:h-12 w-auto"
// // //           />
// // //           <h2 className="mt-4 md:mt-6 text-xl sm:text-2xl font-bold text-gray-900">
// // //             Sign in to your account
// // //           </h2>
// // //         </div>
        
// // //         {/* Loading state */}
// // //         {isLoading && (
// // //           <div className="flex justify-center py-6 sm:py-8">
// // //             <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-t-2 border-b-2 border-indigo-600"></div>
// // //           </div>
// // //         )}
        
// // //         {/* Error message */}
// // //         {error && (
// // //           <div className="mb-4 sm:mb-6 rounded-md bg-red-50 p-3 sm:p-4">
// // //             <div className="flex">
// // //               <div className="ml-2 sm:ml-3">
// // //                 <h3 className="text-xs sm:text-sm font-medium text-red-800">{error}</h3>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         {/* OTPLESS Login UI */}
// // //         {!isLoading && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div id="otpless-login-page"></div>
// // //           </div>
// // //         )}
        
// // //         <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
// // //           <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // 'use client';
// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Head from 'next/head';

// // export default function LoginPage() {
// //   const router = useRouter();
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   useEffect(() => {
// //     // Load OTPLESS SDK script dynamically
// //     const script = document.createElement('script');
// //     script.id = 'otpless-sdk';
// //     script.type = 'text/javascript';
// //     script.src = 'https://otpless.com/v4/auth.js';
// //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// //     script.async = true;
    
// //     // Add error handling for script loading
// //     script.onerror = () => {
// //       setError('Failed to load authentication service. Please try again later.');
// //       setIsLoading(false);
// //     };
// //     document.body.appendChild(script);

// //     // Define the otpless function globally
// //     window.otpless = (otplessUser) => {
// //       setIsLoading(true);
// //       setError(null);
      
// //       // Check if the flow was cancelled
// //       if (otplessUser === 'CANCELLED') {
// //         setError('OTP verification was cancelled. Please try again.');
// //         setIsLoading(false);
// //         return;
// //       }
// //       // Check for errors in the response
// //       if (otplessUser.error) {
// //         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
// //         setIsLoading(false);
// //         return;
// //       }
// //       try {
// //         const token = otplessUser.token;
// //         console.log('Token:', token);
        
// //         // Store token in localStorage or cookies
// //         localStorage.setItem('authToken', token);
        
// //         // Redirect to members page
// //         router.push('/members');
// //       } catch (err) {
// //         console.error('Authentication error:', err);
// //         setError('An error occurred during authentication. Please try again.');
// //         setIsLoading(false);
// //       }
// //     };

// //     return () => {
// //       // Cleanup
// //       if (document.getElementById('otpless-sdk')) {
// //         document.body.removeChild(document.getElementById('otpless-sdk'));
// //       }
// //       delete window.otpless;
// //     };
// //   }, [router]);

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-50 p-2 sm:p-4">
// //       <Head>
// //         <title>Login | Your App</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
// //       </Head>
      
// //       <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-3 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
// //         <div className="text-center mb-4 sm:mb-6">
// //           <img
// //             src="/logo.png"
// //             alt="Company Logo"
// //             className="mx-auto h-8 w-auto"
// //           />
// //           <h2 className="mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
// //             Sign in to your account
// //           </h2>
// //         </div>
        
// //         {/* Loading state */}
// //         {isLoading && (
// //           <div className="flex justify-center py-4 sm:py-6">
// //             <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-indigo-600"></div>
// //           </div>
// //         )}
        
// //         {/* Error message */}
// //         {error && (
// //           <div className="mb-3 sm:mb-4 rounded-md bg-red-50 p-2 sm:p-3">
// //             <div className="flex">
// //               <div className="ml-2">
// //                 <h3 className="text-xs font-medium text-red-800">{error}</h3>
// //               </div>
// //             </div>
// //           </div>
// //         )}
        
// //         {/* OTPLESS Login UI */}
// //         {!isLoading && (
// //           <div className="space-y-3 sm:space-y-4">
// //             <div 
// //               id="otpless-login-page"
// //               className="w-full min-h-16 sm:min-h-20"
// //             ></div>
// //           </div>
// //         )}
        
// //         <div className="mt-4 sm:mt-6 text-center text-xs text-gray-500">
// //           <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // 'use client';
// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Head from 'next/head';

// // export default function LoginPage() {
// //   const router = useRouter();
// //   const [error, setError] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   useEffect(() => {
// //     // Load OTPLESS SDK script dynamically
// //     const script = document.createElement('script');
// //     script.id = 'otpless-sdk';
// //     script.type = 'text/javascript';
// //     script.src = 'https://otpless.com/v4/auth.js';
// //     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
// //     script.async = true;
    
// //     // Add error handling for script loading
// //     script.onerror = () => {
// //       setError('Failed to load authentication service. Please try again later.');
// //       setIsLoading(false);
// //     };
// //     document.body.appendChild(script);

// //     // Define the otpless function globally
// //     window.otpless = (otplessUser) => {
// //       setIsLoading(true);
// //       setError(null);
      
// //       // Check if the flow was cancelled
// //       if (otplessUser === 'CANCELLED') {
// //         setError('OTP verification was cancelled. Please try again.');
// //         setIsLoading(false);
// //         return;
// //       }
// //       // Check for errors in the response
// //       if (otplessUser.error) {
// //         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
// //         setIsLoading(false);
// //         return;
// //       }
// //       try {
// //         const token = otplessUser.token;
// //         console.log('Token:', token);
        
// //         // Store token in localStorage or cookies
// //         localStorage.setItem('authToken', token);
        
// //         // Redirect to members page
// //         router.push('/members');
// //       } catch (err) {
// //         console.error('Authentication error:', err);
// //         setError('An error occurred during authentication. Please try again.');
// //         setIsLoading(false);
// //       }
// //     };

// //     return () => {
// //       // Cleanup
// //       if (document.getElementById('otpless-sdk')) {
// //         document.body.removeChild(document.getElementById('otpless-sdk'));
// //       }
// //       delete window.otpless;
// //     };
// //   }, [router]);

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-50 px-1 sm:px-4">
// //       <Head>
// //         <title>Login | Your App</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
// //       </Head>
      
// //       <div className="w-full h-full sm:h-auto sm:max-w-sm md:max-w-md p-2 sm:p-6 md:p-8 bg-white rounded-lg shadow-md overflow-y-auto">
// //         <div className="text-center mb-3 sm:mb-6">
// //           <img
// //             src="/logo.png"
// //             alt="Company Logo"
// //             className="mx-auto h-20 sm:h-10 w-auto block"
// //             style={{ maxWidth: '80%' }}
// //           />
// //           <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
// //             Sign in to your account
// //           </h2>
// //         </div>
        
// //         {/* Loading state */}
// //         {isLoading && (
// //           <div className="flex justify-center py-4">
// //             <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
// //           </div>
// //         )}
        
// //         {/* Error message */}
// //         {error && (
// //           <div className="mb-3 rounded-md bg-red-50 p-2">
// //             <div className="flex">
// //               <div className="ml-2">
// //                 <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
// //               </div>
// //             </div>
// //           </div>
// //         )}
        
// //         {/* OTPLESS Login UI */}
// //         {!isLoading && (
// //           <div className="space-y-2 sm:space-y-4">
// //             <div 
// //               id="otpless-login-page"
// //               className="w-full min-h-16 flex justify-center"
// //             ></div>
// //           </div>
// //         )}
        
// //         <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500 px-2">
// //           <p className="break-words">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Load OTPLESS SDK script dynamically
//     const script = document.createElement('script');
//     script.id = 'otpless-sdk';
//     script.type = 'text/javascript';
//     script.src = 'https://otpless.com/v4/auth.js';
//     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
//     script.async = true;
    
//     // Add error handling for script loading
//     script.onerror = () => {
//       setError('Failed to load authentication service. Please try again later.');
//       setIsLoading(false);
//     };
//     document.body.appendChild(script);

//     // Define the otpless function globally
//     window.otpless = (otplessUser) => {
//       setIsLoading(true);
//       setError(null);
      
//       // Check if the flow was cancelled
//       if (otplessUser === 'CANCELLED') {
//         setError('OTP verification was cancelled. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       // Check for errors in the response
//       if (otplessUser.error) {
//         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       try {
//         const token = otplessUser.token;
//         console.log('Token:', token);
        
//         // Store token in localStorage or cookies
//         localStorage.setItem('authToken', token);
        
//         // Redirect to members page
//         router.push('/members');
//       } catch (err) {
//         console.error('Authentication error:', err);
//         setError('An error occurred during authentication. Please try again.');
//         setIsLoading(false);
//       }
//     };

//     return () => {
//       // Cleanup
//       if (document.getElementById('otpless-sdk')) {
//         document.body.removeChild(document.getElementById('otpless-sdk'));
//       }
//       delete window.otpless;
//     };
//   }, [router]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
//       <Head>
//         <title>Login | Your App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//       </Head>
      
//       <div className="w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-md overflow-y-auto overflow-x-hidden">
//         <div className="p-4 sm:p-6">
//           <div className="text-center mb-3 sm:mb-6">
//             <img
//               src="/logo.png"
//               alt="Company Logo"
//               className="mx-auto h-16 sm:h-20 w-auto"
//               style={{ maxWidth: '80%' }}
//             />
//             <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>
          
//           {/* Loading state */}
//           {isLoading && (
//             <div className="flex justify-center py-4">
//               <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
//             </div>
//           )}
          
//           {/* Error message */}
//           {error && (
//             <div className="mb-3 rounded-md bg-red-50 p-2">
//               <div className="flex">
//                 <div className="flex-1">
//                   <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {/* OTPLESS Login UI */}
//           {!isLoading && (
//             <div className="space-y-2 sm:space-y-4">
//               <div 
//                 id="otpless-login-page"
//                 className="w-full min-h-16 flex justify-center"
//               ></div>
//             </div>
//           )}
          
//           <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500">
//             <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Load OTPLESS SDK script dynamically
//     const script = document.createElement('script');
//     script.id = 'otpless-sdk';
//     script.type = 'text/javascript';
//     script.src = 'https://otpless.com/v4/auth.js';
//     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
//     script.async = true;
    
//     // Add error handling for script loading
//     script.onerror = () => {
//       setError('Failed to load authentication service. Please try again later.');
//       setIsLoading(false);
//     };
//     document.body.appendChild(script);

//     // Define the otpless function globally
//     window.otpless = (otplessUser) => {
//       setIsLoading(true);
//       setError(null);
      
//       // Check if the flow was cancelled
//       if (otplessUser === 'CANCELLED') {
//         setError('OTP verification was cancelled. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       // Check for errors in the response
//       if (otplessUser.error) {
//         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       try {
//         const token = otplessUser.token;
//         console.log('Token:', token);
        
//         // Store token in localStorage or cookies
//         localStorage.setItem('authToken', token);
        
//         // Redirect to members page
//         router.push('/members');
//       } catch (err) {
//         console.error('Authentication error:', err);
//         setError('An error occurred during authentication. Please try again.');
//         setIsLoading(false);
//       }
//     };

//     return () => {
//       // Cleanup
//       if (document.getElementById('otpless-sdk')) {
//         document.body.removeChild(document.getElementById('otpless-sdk'));
//       }
//       delete window.otpless;
//     };
//   }, [router]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
//       <Head>
//         <title>Login | Your App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//       </Head>
      
//       <div className="w-full h-full overflow-y-auto overflow-x-hidden sm:h-auto sm:max-w-sm md:max-w-md p-2 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
//         <div className="text-center mb-3 sm:mb-6 w-full">
//           <img
//             src="/logo.png"
//             alt="Company Logo"
//             className="mx-auto h-20 sm:h-10 w-auto block"
//             style={{ maxWidth: '80%' }}
//           />
//           <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
        
//         {/* Loading state */}
//         {isLoading && (
//           <div className="flex justify-center py-4 w-full">
//             <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
//           </div>
//         )}
        
//         {/* Error message */}
//         {error && (
//           <div className="mb-3 rounded-md bg-red-50 p-2 w-full">
//             <div className="flex">
//               <div className="ml-2">
//                 <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* OTPLESS Login UI */}
//         {!isLoading && (
//           <div className="space-y-2 sm:space-y-4 w-full">
//             <div 
//               id="otpless-login-page"
//               className="w-full min-h-16 flex justify-center"
//             ></div>
//           </div>
//         )}
        
//         <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500 px-2 w-full">
//           <p className="break-words">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Load OTPLESS SDK script dynamically
//     const script = document.createElement('script');
//     script.id = 'otpless-sdk';
//     script.type = 'text/javascript';
//     script.src = 'https://otpless.com/v4/auth.js';
//     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
//     script.async = true;
    
//     // Add error handling for script loading
//     script.onerror = () => {
//       setError('Failed to load authentication service. Please try again later.');
//       setIsLoading(false);
//     };
//     document.body.appendChild(script);

//     // Define the otpless function globally
//     window.otpless = (otplessUser) => {
//       setIsLoading(true);
//       setError(null);
      
//       // Check if the flow was cancelled
//       if (otplessUser === 'CANCELLED') {
//         setError('OTP verification was cancelled. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       // Check for errors in the response
//       if (otplessUser.error) {
//         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       try {
//         const token = otplessUser.token;
//         console.log('Token:', token);
        
//         // Store token in localStorage or cookies
//         localStorage.setItem('authToken', token);
        
//         // Redirect to members page
//         router.push('/members');
//       } catch (err) {
//         console.error('Authentication error:', err);
//         setError('An error occurred during authentication. Please try again.');
//         setIsLoading(false);
//       }
//     };

//     return () => {
//       // Cleanup
//       if (document.getElementById('otpless-sdk')) {
//         document.body.removeChild(document.getElementById('otpless-sdk'));
//       }
//       delete window.otpless;
//     };
//   }, [router]);

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 py-8">
//       <Head>
//         <title>Login | Your App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//       </Head>
      
//       <div className="w-full sm:w-auto sm:max-w-sm md:max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
//         <div className="text-center mb-3 sm:mb-6 w-full">
//           <img
//             src="/logo.png"
//             alt="Company Logo"
//             className="mx-auto h-16 sm:h-10 w-auto block"
//             style={{ maxWidth: '80%' }}
//           />
//           <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
        
//         {/* Loading state */}
//         {isLoading && (
//           <div className="flex justify-center py-4 w-full">
//             <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
//           </div>
//         )}
        
//         {/* Error message */}
//         {error && (
//           <div className="mb-3 rounded-md bg-red-50 p-2 w-full">
//             <div className="flex">
//               <div className="ml-2">
//                 <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* OTPLESS Login UI */}
//         {!isLoading && (
//           <div className="space-y-2 sm:space-y-4 w-full">
//             <div 
//               id="otpless-login-page"
//               className="w-full min-h-16 flex justify-center"
//             ></div>
//           </div>
//         )}
        
//         <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500 px-2 w-full">
//           <p className="break-words">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Load OTPLESS SDK script dynamically
//     const script = document.createElement('script');
//     script.id = 'otpless-sdk';
//     script.type = 'text/javascript';
//     script.src = 'https://otpless.com/v4/auth.js';
//     script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
//     script.async = true;
    
//     // Add error handling for script loading
//     script.onerror = () => {
//       setError('Failed to load authentication service. Please try again later.');
//       setIsLoading(false);
//     };
//     document.body.appendChild(script);

//     // Define the otpless function globally
//     window.otpless = (otplessUser) => {
//       setIsLoading(true);
//       setError(null);
      
//       // Check if the flow was cancelled
//       if (otplessUser === 'CANCELLED') {
//         setError('OTP verification was cancelled. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       // Check for errors in the response
//       if (otplessUser.error) {
//         setError(otplessUser.error.message || 'Authentication failed. Please try again.');
//         setIsLoading(false);
//         return;
//       }
//       try {
//         const token = otplessUser.token;
//         console.log('Token:', token);
        
//         // Store token in localStorage or cookies
//         localStorage.setItem('authToken', token);
        
//         // Redirect to members page
//         router.push('/members');
//       } catch (err) {
//         console.error('Authentication error:', err);
//         setError('An error occurred during authentication. Please try again.');
//         setIsLoading(false);
//       }
//     };

//     return () => {
//       // Cleanup
//       if (document.getElementById('otpless-sdk')) {
//         document.body.removeChild(document.getElementById('otpless-sdk'));
//       }
//       delete window.otpless;
//     };
//   }, [router]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
//       <Head>
//         <title>Login | Your App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//       </Head>
      
//       <div className="w-full h-full overflow-y-auto overflow-x-hidden sm:h-auto sm:max-w-sm md:max-w-md p-2 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
//         <div className="text-center mb-3 sm:mb-6 w-full">
//           <img
//             src="/logo.png"
//             alt="Company Logo"
//             className="mx-auto h-20 sm:h-10 w-auto block"
//             style={{ maxWidth: '80%' }}
//           />
//           <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
        
//         {/* Loading state */}
//         {isLoading && (
//           <div className="flex justify-center py-4 w-full">
//             <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
//           </div>
//         )}
        
//         {/* Error message */}
//         {error && (
//           <div className="mb-3 rounded-md bg-red-50 p-2 w-full">
//             <div className="flex">
//               <div className="ml-2">
//                 <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* OTPLESS Login UI */}
//         {!isLoading && (
//           <div className="space-y-2 sm:space-y-4 w-full">
//             <div 
//               id="otpless-login-page"
//               className="w-full min-h-16 flex justify-center"
//             ></div>
//           </div>
//         )}
        
//         <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500 px-2 w-full">
//           <p className="break-words">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load OTPLESS SDK script dynamically
    const script = document.createElement('script');
    script.id = 'otpless-sdk';
    script.type = 'text/javascript';
    script.src = 'https://otpless.com/v4/auth.js';
    script.setAttribute('data-appid', 'GNXFZIZ641YIF1SY2C3P');
    script.async = true;
    
    // Add error handling for script loading
    script.onerror = () => {
      setError('Failed to load authentication service. Please try again later.');
      setIsLoading(false);
    };
    document.body.appendChild(script);

    // Define the otpless function globally
    window.otpless = (otplessUser) => {
      setIsLoading(true);
      setError(null);
      
      // Check if the flow was cancelled
      if (otplessUser === 'CANCELLED') {
        setError('OTP verification was cancelled. Please try again.');
        setIsLoading(false);
        return;
      }
      // Check for errors in the response
      if (otplessUser.error) {
        setError(otplessUser.error.message || 'Authentication failed. Please try again.');
        setIsLoading(false);
        return;
      }
      try {
        const token = otplessUser.token;
        console.log('Token:', token);
        
        // Store token in localStorage or cookies
        localStorage.setItem('authToken', token);
        
        // Redirect to members page
        router.push('/members');
      } catch (err) {
        console.error('Authentication error:', err);
        setError('An error occurred during authentication. Please try again.');
        setIsLoading(false);
      }
    };

    return () => {
      // Cleanup
      if (document.getElementById('otpless-sdk')) {
        document.body.removeChild(document.getElementById('otpless-sdk'));
      }
      delete window.otpless;
    };
  }, [router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <Head>
        <title>Login | Your App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <div className="w-full h-full overflow-y-auto overflow-x-auto sm:h-auto sm:max-w-sm md:max-w-md p-2 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
        <div className="text-center mb-3 sm:mb-6 w-full">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="mx-auto h-20 sm:h-20 w-auto block"
            style={{ maxWidth: '80%' }}
          />
          <h2 className="mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center py-4 w-full">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        )}
        
        {/* Error message */}
        {error && (
          <div className="mb-3 rounded-md bg-red-50 p-2 w-full">
            <div className="flex">
              <div className="ml-2">
                <h3 className="text-xs font-medium text-red-800 break-words">{error}</h3>
              </div>
            </div>
          </div>
        )}
        
        {/* OTPLESS Login UI */}
        {!isLoading && (
          <div className="space-y-2 sm:space-y-4 w-full">
            <div 
              id="otpless-login-page"
              className="w-full min-h-16 flex justify-center"
            ></div>
          </div>
        )}
        
        <div className="mt-3 sm:mt-6 text-center text-xs text-gray-500 px-2 w-full">
          <p className="break-words">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}