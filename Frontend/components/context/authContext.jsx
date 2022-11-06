import React, { createContext, useEffect, useState } from "react";
import { FetchData, postData } from "../utils/REST";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(0);
  const [user, setUser] = useState([]);
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

  const logout = () => {
    setToken(0);
    setUser(null);
    window.localStorage.removeItem("token");
  }

  useEffect(() => {
    fetchUser();
  }, [token]);

  const ctx = {
    user: user,
    login,
    loggedin: window.localStorage.getItem("token") ? true : false,
    logout,
    fetchUser

  };

  return (
    <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
}
