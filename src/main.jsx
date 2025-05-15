import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import Index from "./pages";
import Login from "./pages/login";
import './global.css'
import '@fontsource/inter'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<Navbar />}>
      <Route element={<Index />} path="/" />
      <Route element={<Login />} path="/login" />
    </Route>
  </Routes>
  </BrowserRouter>
)