import React from "react";
import Startup from "./components/Startup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import PatientHome from "./components/PatientHome";
import HospitalHome from "./components/HospitalHome";

function App() {
  const { currentUser, getData, userData } = useAuth();

  // call a function to get the data from the database only once when the app loads useing useEffect
  React.useEffect(() => {
    getData();
  }, []);
  let userType = null;
  React.useEffect(() => {
    if (userData) {
      userType = userData.userType;
    }
  }, []);
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              userData?.userType === "hospital" ? (
                <HospitalHome />
              ) : (
                <PatientHome />
              )
            ) : (
              <Startup />
            )
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
