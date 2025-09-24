// import React, { createContext, useContext, useState, useEffect } from "react";
// import { isTokenExpired } from "../Utils/jwtUtils";

// type AuthContextType = {
//   token: string | null;
//   login: (token: string) => void;
//   logout: () => void;
//   isAuthenticated: boolean;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     // Check if token exists in localStorage on initial load
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       // Clear expired token
//       localStorage.removeItem("authToken");
//       setToken(null);
//     }
//   }, []);

//   const login = (newToken: string) => {
//     setToken(newToken);
//     localStorage.setItem("authToken", newToken);
//   };

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("verifyToken"); // Also clear the verify token
//   };
// const isAuthenticated = !!token && !isTokenExpired(token);
//   return (
//     <AuthContext.Provider value={{ token, login, logout,isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };

import React, { createContext, useContext, useState, useEffect } from "react";
import { isTokenExpired } from "../Utils/jwtUtils";

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   // Check if token exists in localStorage on initial load
  //   const storedToken = localStorage.getItem("authToken");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   } else {
  //     // Clear expired token
  //     localStorage.removeItem("authToken");
  //     setToken(null);
  //   }
  // }, []);

   useEffect(() => {
    // Check if token exists in localStorage on initial load
    const storedToken = localStorage.getItem("authToken");
    // Only use the token if it's a valid JWT (starts with 'eyJ')
    if (storedToken && storedToken.startsWith('eyJ')) {
      setToken(storedToken);
    } else {
      // Clear invalid token
      if (storedToken) {
        console.log("Clearing invalid token from localStorage");
        localStorage.removeItem("authToken");
      }
      setToken(null);
    }
  }, []);
  // const login = (newToken: string) => {
  //   setToken(newToken);
  //   localStorage.setItem("authToken", newToken);
  // };
 const login = (newToken: string) => {
    // Only store valid JWT tokens (starts with 'eyJ')
    if (newToken && newToken.startsWith('eyJ')) {
      setToken(newToken);
      localStorage.setItem("authToken", newToken);
    } else {
      console.log("Not storing invalid token");
      setToken(null);
    }
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("verifyToken"); // Also clear the verify token
  };
const isAuthenticated = !!token && !isTokenExpired(token);
  return (
    <AuthContext.Provider value={{ token, login, logout,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};