
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

    // Add CSS to ensure the body always shows a scrollbar
    document.body.style.overflow = 'scroll';
    document.documentElement.style.overflow = 'scroll';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';

    return () => {
      // Cleanup
      if (document.getElementById('otpless-sdk')) {
        document.body.removeChild(document.getElementById('otpless-sdk'));
      }
      delete window.otpless;
      
      // Reset styles when component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Login | Your App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      {/* Outer container with fixed position and scrollbar */}
      <div className="fixed inset-0 overflow-y-scroll bg-gray-50">
        {/* Content container for centering */}
        <div className="min-h-screen flex items-center justify-center py-6">
          {/* Login box with original styling */}
          <div className="w-full h-full sm:h-auto sm:max-w-sm md:max-w-md p-2 sm:p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
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
      </div>
    </>
  );
}