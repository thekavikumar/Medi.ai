import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Toaster } from "react-hot-toast";

function HospitalHome() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
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
      <h1>Hospital Dashboard</h1>
      <h2>{currentUser.email}</h2>
      <button onClick={handleLogout}>LogOut</button>
      <Toaster position="top-center" />
    </div>
  );
}

export default HospitalHome;
