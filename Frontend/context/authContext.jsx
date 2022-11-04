import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    //use cookie from server
    
  const ctx = {
    user: user
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
