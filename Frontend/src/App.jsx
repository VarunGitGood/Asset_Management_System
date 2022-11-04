import React from 'react'
import Landing from '../components/UI/auth/Landing'
import Dashboard from '../components/UI/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}
