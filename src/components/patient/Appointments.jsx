import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Card from "../patient/Card";
import { Link } from "react-router-dom";

function Appointments() {
  const { getData, userData } = useAuth();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getData();
    if (userData) {
      setData(userData);
    }
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="font-bold text-3xl text-gray-800">
        Welcome, <span className="text-[#03C988]">{data?.name}!</span>
      </h1>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-gray-800">
            Today's Appointments
          </h1>
          <Link to="/book">
            <button className="bg-[#03C988] text-white rounded-md px-3  py-2 hover:text-gray-900 border-2 border-[#03C988]  hover:bg-white">
              Book an Appointment
            </button>
          </Link>
        </div>
        <hr className="mt-2 border border-[#03C988] mb-4" />
        <div className="p-5 flex flex-col gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Appointments;
