// import { useState, useEffect, useRef } from "react";
// import { useAuth } from "../Auth/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { generateToken } from "../Utils/jwtUtils";

// export default function Login() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [bearerToken, setBearerToken] = useState("");
//   const [otpExpiry, setOtpExpiry] = useState<number | null>(null);
//   const [expired, setExpired] = useState(false);
//   // const intervalRef = useRef<number | null>(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   // Generate bearer token
//   useEffect(() => {
//     const generateTokenAsync = async () => {
//       try {
//         const token = await generateToken({
//           version_name: "1.0.0",
//           version_code: "1",
//           device_id: "web-" + Date.now(),
//           device_type: "web",
//           device_model: navigator.userAgent.substring(0, 50)
//         });
//         setBearerToken(token);
//         console.log("Generated Token:", token);
//       } catch (error) {
//         console.error('Error generating token:', error);
//       }
//     };
//     generateTokenAsync();
//   }, []);

//   // Countdown timer for OTP expiry
//   useEffect(() => {
//     if (otpExpiry) {
//       intervalRef.current = setInterval(() => {
//         const remaining = otpExpiry - Math.floor(Date.now() / 1000);
//         if (remaining <= 0) {
//           setExpired(true);
//           if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//           }
//         }
//       }, 1000);
//       return () => {
//         if (intervalRef.current) {
//           clearInterval(intervalRef.current);
//         }
//       };
//     }
//   }, [otpExpiry]);

//   const sendMobile = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     if (!mobile || mobile.length !== 10) {
//       alert("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     if (!bearerToken) {
//       alert("Token not ready yet. Please try again.");
//       return;
//     }

//     try {
//       const response = await fetch("https://api-dev.ironbhai.com/v1/app/users/login-mobile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${bearerToken}`
//         },
//         body: JSON.stringify({ mobile }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(`Failed to send OTP: ${data.message || "Please try again."}`);
//         return;
//       }

//       if (data.data?.verifyToken) {
//         localStorage.setItem("verifyToken", data.data.verifyToken);
//         setStep(2);
//         setExpired(false);

//         // Set expiry timestamp (assuming backend sends 60 sec token)
//         setOtpExpiry(Math.floor(Date.now() / 1000) + 60);
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       alert("Network error. Please check your connection and try again.");
//     }
//   };

//   const verifyOtp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }

//     if (!bearerToken) {
//       alert("Token not ready yet. Please try again.");
//       return;
//     }

//     if (expired) {
//       alert("OTP expired! Please resend OTP.");
//       return;
//     }

//     try {
//       const response = await fetch("https://api-dev.ironbhai.com/v1/app/users/login/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${bearerToken}`
//         },
//         body: JSON.stringify({
//           verifyToken: localStorage.getItem("verifyToken"),
//           otp,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         if (data.message === "jwt expired") {
//           setExpired(true);
//           alert("OTP expired! Please resend OTP.");
//         } else {
//           alert(`Invalid OTP: ${data.message || "Please try again."}`);
//         }
//         return;
//       }

//       if (data.data?.token) {
//         localStorage.setItem("authToken", data.data.token);
//         login(data.data.token);

//         if (data.data.updateProfile) {
//           navigate("/cart");
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       alert("Network error. Please check your connection and try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       {step === 1 && (
//         <form onSubmit={sendMobile}>
//           <input
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Enter mobile number"
//             style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
//           />
//           <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
//             Send OTP
//           </button>
//         </form>
//       )}

//       {step === 2 && (
//         <form onSubmit={verifyOtp}>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
//           />
//           <div style={{ marginBottom: "10px" }}>
//             {expired ? (
//               <button type="button" onClick={sendMobile} style={{ width: "100%", padding: "10px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "4px" }}>
//                 Resend OTP
//               </button>
//             ) : (
//               <div>OTP expires in: {otpExpiry ? otpExpiry - Math.floor(Date.now() / 1000) : 0}s</div>
//             )}
//           </div>
//           <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginBottom: "10px" }}>
//             Verify OTP
//           </button>
//           <button type="button" onClick={() => setStep(1)} style={{ width: "100%", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px" }}>
//             Back to Mobile
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { useAuth } from "../Auth/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { generateToken } from "../Utils/jwtUtils";
// // import { generateToken } from "../Utils";
// // import { generateToken } from "../Utils/jwtUtils";

// export default function Login() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [bearerToken, setBearerToken] = useState("");
//   const [otpExpiry, setOtpExpiry] = useState<number | null>(null);
//   const [expired, setExpired] = useState(false);
//   // const intervalRef = useRef<number | null>(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   // Generate bearer token
  
//   useEffect(() => {
//     const generateTokenAsync = async () => {
//       try {
//         const token = await generateToken({
//           version_name: "1.0.0",
//           version_code: "1",
//           device_id: "web-" + Date.now(),
//           device_type: "web",
//           device_model: navigator.userAgent.substring(0, 50)
//         });
//         setBearerToken(token);
//         console.log("Generated Token:", token);
//       } catch (error) {
//         console.error('Error generating token:', error);
//       }
//     };
//     generateTokenAsync();
//   }, []);

//   // Countdown timer for OTP expiry
//  useEffect(() => {
//     if (otpExpiry) {
//       intervalRef.current = setInterval(() => {
//         const remaining = otpExpiry - Math.floor(Date.now() / 1000);
//         if (remaining <= 0) {
//           setExpired(true);
//           if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//           }
//         }
//       }, 1000);
//       return () => {
//         if (intervalRef.current) {
//           clearInterval(intervalRef.current);
//         }
//       };
//     }
//   }, [otpExpiry]);

//   const sendMobile = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     if (!mobile || mobile.length !== 10) {
//       alert("Please enter a valid 10-digit mobile number");
//       return;
//     }
//      if (!bearerToken) {
//       alert("Token not ready yet. Please try again.");
//       return;
//     }

//     try {
//       const response = await fetch("https://api-dev.ironbhai.com/v1/app/users/login-mobile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${bearerToken}`
//         },
//         body: JSON.stringify({ mobile }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(`Failed to send OTP: ${data.message || "Please try again."}`);
//         return;
//       }

//       if (data.data?.verifyToken) {
//         localStorage.setItem("verifyToken", data.data.verifyToken);
//         setStep(2);
//         setExpired(false);

//         // Set expiry timestamp (assuming backend sends 60 sec token)
//         setOtpExpiry(Math.floor(Date.now() / 1000) + 60);
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       alert("Network error. Please check your connection and try again.");
//     }
//   };

//   const verifyOtp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }
//      if (!bearerToken) {
//       alert("Token not ready yet. Please try again.");
//       return;
//     }

//     if (expired) {
//       alert("OTP expired! Please resend OTP.");
//       return;
//     }

//    try {
//       const response = await fetch("https://api-dev.ironbhai.com/v1/app/users/login/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${bearerToken}`
//         },
//         body: JSON.stringify({
//           verifyToken: localStorage.getItem("verifyToken"),
//           otp,
//         }),
//       });

//      const data = await response.json();

//       if (!response.ok) {
//         if (data.message === "jwt expired") {
//           setExpired(true);
//           alert("OTP expired! Please resend OTP.");
//         } else {
//           alert(`Invalid OTP: ${data.message || "Please try again."}`);
//         }
//         return;
//       }

//       if (data.data?.token) {
//         localStorage.setItem("authToken", data.data.token);
//         login(data.data.token);

//         if (data.data.updateProfile) {
//           navigate("/cart");
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       alert("Network error. Please check your connection and try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       {step === 1 && (
//         <form onSubmit={sendMobile}>
//           <input
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Enter mobile number"
//             style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
//           />
//           <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
//             Send OTP
//           </button>
//         </form>
//       )}

//       {step === 2 && (
//         <form onSubmit={verifyOtp}>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
//           />
//           <div style={{ marginBottom: "10px" }}>
//             {expired ? (
//               <button type="button" onClick={sendMobile} style={{ width: "100%", padding: "10px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "4px" }}>
//                 Resend OTP
//               </button>
//             ) : (
//               <div>OTP expires in: {otpExpiry ? otpExpiry - Math.floor(Date.now() / 1000) : 0}s</div>
//             )}
//           </div>
//           <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", marginBottom: "10px" }}>
//             Verify OTP
//           </button>
//           <button type="button" onClick={() => setStep(1)} style={{ width: "100%", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px" }}>
//             Back to Mobile
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }




import { useState, useEffect, useRef } from "react";
import { Smartphone, Shield, Timer, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [bearerToken, setBearerToken] = useState("");
  const [otpExpiry, setOtpExpiry] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate bearer token
  useEffect(() => {
    const generateTokenAsync = async () => {
      try {
        // Simulated token generation - replace with your actual implementation
        const token = "your-generated-token";
        setBearerToken(token);
        console.log("Generated Token:", token);
      } catch (error) {
        console.error('Error generating token:', error);
      }
    };
    generateTokenAsync();
  }, []);

  // Countdown timer for OTP expiry
  useEffect(() => {
    if (otpExpiry) {
      intervalRef.current = setInterval(() => {
        const remaining = otpExpiry - Math.floor(Date.now() / 1000);
        if (remaining <= 0) {
          setExpired(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, 1000);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [otpExpiry]);

  const sendMobile = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!mobile || mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!bearerToken) {
      alert("Token not ready yet. Please try again.");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep(2);
      setExpired(false);
      setOtpExpiry(Math.floor(Date.now() / 1000) + 60);
    } catch (err) {
      console.error("Network Error:", err);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    if (!bearerToken) {
      alert("Token not ready yet. Please try again.");
      return;
    }

    if (expired) {
      alert("OTP expired! Please resend OTP.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Login successful!");
    } catch (err) {
      console.error("Network Error:", err);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingTime = otpExpiry ? Math.max(0, otpExpiry - Math.floor(Date.now() / 1000)) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Iron Bhai</h1>
          <p className="text-gray-600">Sign in to access your laundry services</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/20">
          {step === 1 ? (
            // Mobile Number Step
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter Your Mobile</h2>
                <p className="text-gray-600">We'll send you a verification code</p>
              </div>

              <form onSubmit={sendMobile} className="space-y-6">
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 font-medium">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-gray-50 focus:bg-white"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    {mobile.length > 0 && (
                      <span className={mobile.length === 10 ? 'text-green-600' : 'text-orange-500'}>
                        {mobile.length}/10 digits
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={mobile.length !== 10 || isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Send OTP
                    </>
                  )}
                </button>
              </form>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure & encrypted login</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No spam or promotional messages</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Quick and hassle-free process</span>
                </div>
              </div>
            </div>
          ) : (
            // OTP Verification Step
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Number</h2>
                <p className="text-gray-600">
                  Enter the 6-digit code sent to
                  <br />
                  <span className="font-semibold text-gray-800">+91 {mobile}</span>
                </p>
              </div>

              <form onSubmit={verifyOtp} className="space-y-6">
                <div>
                  <label htmlFor="otp" className="block text-gray-700 font-semibold mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium text-center tracking-widest bg-gray-50 focus:bg-white"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                  />
                  <div className="mt-2 text-sm text-gray-500 text-center">
                    {otp.length > 0 && (
                      <span className={otp.length === 6 ? 'text-green-600' : 'text-orange-500'}>
                        {otp.length}/6 digits
                      </span>
                    )}
                  </div>
                </div>

                {/* Timer & Resend */}
                <div className="text-center">
                  {!expired ? (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Timer className="w-4 h-4" />
                      <span>Code expires in {formatTime(remainingTime)}</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={sendMobile}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={otp.length !== 6 || expired || isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Verify & Continue
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setOtp("");
                    setExpired(false);
                    setOtpExpiry(null);
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Mobile Number
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}