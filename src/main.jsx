import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
<<<<<<< HEAD
import Profile from "./components/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</AuthProvider>
	</BrowserRouter>
=======
import Appointments from "./components/hospital/Appointments.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
>>>>>>> b2528b373f1bdc75b97aa1bd63d23e9184112e4b
);
