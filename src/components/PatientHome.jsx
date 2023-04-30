import React from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import PatNav from "./PatNav";
import Appointments from "./patient/Appointments";

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
      <PatNav />
      <Appointments />
      <Toaster position="top-center" />
    </div>
  );
}

export default PatientHome;
