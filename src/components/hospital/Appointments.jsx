import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Card from "./Card";

function Appointments() {
  const { getData, userData } = useAuth();
  const [data, setData] = React.useState(null);
  // call a function to get the data from the database only once when the app loads useing useEffect
  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
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
        <h1 className="text-2xl font-medium text-gray-800">
          Today's Appointments
        </h1>
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
