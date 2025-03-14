// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     setLoading(false);

//     if (res.ok) {
//       const data = await res.json();
//       const token = data.token;
//       const user = { email };

//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);
//       localStorage.setItem("authToken", token);

//       sessionStorage.setItem("checkedAuth", "true");

//       alert("Login Successful!");
//       router.push("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="bg-[#111111] p-8 rounded-lg w-full max-w-lg shadow-lg border-4 border-[#BE121D]">
//         <h2 className="text-3xl font-bold mb-4 text-white">LOGIN</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 mb-4 rounded-md bg-[#333333] text-white"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 mb-4 rounded-md bg-[#333333] text-white"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#BE121D] p-2 rounded-md hover:bg-[#9E1019] transition duration-300 text-white"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           <a href="/forgot-password" className="text-purple-400 hover:underline">
//             Forgot Password?
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     setLoading(false);

//     if (res.ok) {
//       const data = await res.json();
//       const token = data.token;
//       const user = { email };

//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);
//       localStorage.setItem("authToken", token);

//       sessionStorage.setItem("checkedAuth", "true");

//       alert("Login Successful!");
//       router.push("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-black">
//       <div className="w-full max-w-xl bg-black p-10 rounded-lg border-1 border-red-600 shadow-lg">
//         <h1 className="text-white text-3xl font-bold mb-8">LOGIN</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-6">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-4 rounded bg-gray-800 text-white"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-8">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-4 rounded bg-gray-800 text-white"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white p-4 rounded font-medium hover:bg-red-700 transition duration-200 text-lg"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <div className="text-center mt-6">
//             <Link href="/forgot-password" className="text-purple-400 hover:text-purple-300 text-lg">
//               Forgot Password?
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     setLoading(false);

//     if (res.ok) {
//       const data = await res.json();
//       const token = data.token;
//       const user = { email };

//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);
//       localStorage.setItem("authToken", token);

//       sessionStorage.setItem("checkedAuth", "true");

//       alert("Login Successful!");
//       router.push("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
//       <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-red-600 shadow-lg transition-all duration-300 hover:shadow-red-600/40 hover:shadow-xl hover:border-2">
//         <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">LOGIN</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4 sm:mb-6">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none hover:border-red-400 transition-all duration-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6 sm:mb-8">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none hover:border-red-400 transition-all duration-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white p-3 sm:p-4 rounded font-medium hover:bg-red-700 active:bg-red-800 transform hover:translate-y-px active:translate-y-0 transition-all duration-200 text-base sm:text-lg relative overflow-hidden hover:shadow-lg hover:shadow-red-600/20"
//           >
//             <span className="relative z-10 flex justify-center items-center">
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </span>
//           </button>
//           <div className="text-center mt-4 sm:mt-6">
//             <Link 
//               href="/forgot-password" 
//               className="text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors duration-200 hover:underline inline-block"
//             >
//               Forgot Password?
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     setLoading(false);

//     if (res.ok) {
//       const data = await res.json();
//       const token = data.token;
//       const user = { email };

//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", token);
//       localStorage.setItem("authToken", token);

//       sessionStorage.setItem("checkedAuth", "true");

//       alert("Login Successful!");
//       router.push("/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
//       <div 
//         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-red-600 shadow-lg transition-all duration-300 
//         focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 active:border-red-500 active:ring-2 active:ring-red-500
//         hover:shadow-red-600/40 hover:shadow-xl hover:border-2"
//       >
//         <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">LOGIN</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4 sm:mb-6">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 
//                 focus:border-red-500 focus:ring-1 focus:ring-red-500 active:border-red-500 active:ring-1 active:ring-red-500 
//                 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500 transition-all duration-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6 sm:mb-8">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 
//                 focus:border-red-500 focus:ring-1 focus:ring-red-500 active:border-red-500 active:ring-1 active:ring-red-500 
//                 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500 transition-all duration-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-32 sm:w-40 md:w-48 lg:w-56 bg-red-600 text-white p-1 sm:p-2 rounded font-medium hover:bg-red-700 active:bg-red-800 focus:bg-red-700 
//               transform active:translate-y-0 transition-all duration-200 text-base sm:text-lg relative overflow-hidden hover:shadow-lg hover:shadow-red-600/20"
//             disabled={loading}
//           >
//             <span className="relative z-10 flex justify-center items-center">
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </span>
//           </button>
//           <div className="text-center mt-4 sm:mt-6">
//             <Link 
//               href="/forgot-password" 
//               className="text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors duration-200 hover:underline inline-block"
//             >
//               Forgot Password?
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );  
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (res.ok) {
      const data = await res.json();
      const token = data.token;
      const user = { email };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("authToken", token);

      sessionStorage.setItem("checkedAuth", "true");

      alert("Login Successful!");
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
       <div 
           className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black p-6 sm:p-8 md:p-10 rounded-lg border border-red-600 shadow-lg transition-all duration-300 
           focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 active:border-red-500 active:ring-2 active:ring-red-500
           hover:shadow-red-600/40 hover:shadow-xl hover:border-2"
         >
           <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 sm:mb-6">
          <input
  type="email"
  placeholder="Email"
  className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none focus:bg-gray-800 transition-all duration-200"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

          </div>
          <div className="mb-6 sm:mb-8">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-32 sm:w-40 md:w-48 lg:w-56  bg-red-600 text-white p-3 sm:p-2 rounded font-medium hover:bg-red-700 active:bg-red-800 transform hover:translate-y-px active:translate-y-0 transition-all duration-200 text-base sm:text-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex justify-center items-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </span>
            </button>
          </div>
          <div className="text-center mt-4 sm:mt-6">
            <Link 
              href="/forgot-password" 
              className="text-purple-400 hover:text-purple-300 text-sm sm:text-base transition-colors duration-200 hover:underline inline-block"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}