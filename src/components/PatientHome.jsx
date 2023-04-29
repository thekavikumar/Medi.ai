import React from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
function PatientHome() {
<<<<<<< HEAD
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	return (
		<div>
			<Navbar />

			<h2>{currentUser.email}</h2>

			<Toaster position="top-center" />
		</div>
	);
=======
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <h2>{currentUser.email}</h2>
      <button onClick={handleLogout}>LogOut</button>
      <Toaster position="top-center" />
    </div>
  );
>>>>>>> b2528b373f1bdc75b97aa1bd63d23e9184112e4b
}

export default PatientHome;
