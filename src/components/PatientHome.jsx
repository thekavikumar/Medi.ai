import React from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
function PatientHome() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	return (
		<div>
			<Navbar />

			<h2>{currentUser.email}</h2>

			<Toaster position="top-center" />
		</div>
	);
}

export default PatientHome;
