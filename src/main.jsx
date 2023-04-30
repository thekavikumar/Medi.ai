import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Appointments from "./components/hospital/Appointments.jsx";
import Profile from "./components/hospital/Profile.jsx";
import PaymentStatus from "./components/hospital/PaymentStatus.jsx";
import Book from "./components/patient/Book.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/hosProfile" element={<Profile />} />
        <Route path="/payment" element={<PaymentStatus />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
