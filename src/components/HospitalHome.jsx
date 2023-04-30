import React from "react";
import { Toaster } from "react-hot-toast";
import HosNav from "./HosNav";
import Appointments from "../components/hospital/Appointments";

function HospitalHome() {
  return (
    <div>
      <HosNav />
      <Appointments />
      <Toaster position="top-center" />
    </div>
  );
}

export default HospitalHome;
