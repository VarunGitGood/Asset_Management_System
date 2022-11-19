import React, { createContext, useEffect, useState } from "react";
import { FetchData, postData } from "../utils/REST";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [token, setToken] = useState("");

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      let id  = await window.localStorage.getItem('token') || token;
      const body = {
        token: id
      };
      console.log(id);
      const resu = await postData("/staffid", true, id, body);
      setUser(resu.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    window.localStorage.setItem("token",data)
    setToken(data);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken("");
    setUser(null);
  }
  console.log(user);
  useEffect(() => {
    fetchUser();
  }, [token]);

  const ctx = {
    user: user,
    login,
    loggedin: window.localStorage.getItem("token") ? true : false,
    logout,
    fetchUser,
    token

  };

  return (
    <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
}
