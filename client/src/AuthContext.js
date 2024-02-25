// import React, { createContext, useContext, useState } from 'react';

// // Create authentication context
// const AuthContext = createContext();

// // Custom hook to access authentication context
// export const useAuth = () => useContext(AuthContext);

// // Authentication provider component
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     // Perform login logic (e.g., set isAuthenticated to true)
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     // Perform logout logic (e.g., set isAuthenticated to false)
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
