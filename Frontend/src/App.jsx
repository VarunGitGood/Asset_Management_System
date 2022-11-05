import React from "react";
import Landing from "../components/UI/auth/Landing";
import Dashboard from "../components/UI/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../components/context/authContext";
import Profile from "../components/UI/Profile";


export default function App() {
  return (
    <AuthProvider>
   
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>

    </AuthProvider>
  );
}
