import React, { createContext, useEffect, useState } from "react";
import { FetchData, postData } from "../utils/REST";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(0);
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const body = {
        id: token,
      };
      const resu = await postData("/staffid", false, null, body);
      setUser(resu.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (data) => {
    setToken(data);
    window.localStorage.setItem("token",data)
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  const ctx = {
    user: user,
    login,
    loggedin: window.localStorage.getItem("token") ? true : false
  };

  return (
    <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
}
