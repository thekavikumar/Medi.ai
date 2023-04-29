import React from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function PatientHome() {
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
}

export default PatientHome;
