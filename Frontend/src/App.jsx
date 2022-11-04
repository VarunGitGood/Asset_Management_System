import React from "react";
import Landing from "../components/auth/Landing";
import Dashboard from "../components/UI/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../components/context/authContext";
import { CookiesProvider } from "react-cookie";

export default function App() {
  return (
    <AuthProvider>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </AuthProvider>
  );
}
