import React from "react";
import Startup from "./components/Startup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
function App() {
  const { currentUser } = useAuth();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={currentUser ? <Dashboard /> : <Startup />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
