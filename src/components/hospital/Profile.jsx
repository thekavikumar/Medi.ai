import React from "react";
import HosNav from "../HosNav";
import { useAuth } from "../../contexts/AuthContext";
import Card from "./Card";

function Profile() {
  const { getData, userData } = useAuth();
  const [data, setData] = React.useState(null);
  // call a function to get the data from the database only once when the app loads useing useEffect

  React.useEffect(() => {
    getData();
    if (userData) {
      setData(userData);
    }
  }, []);
  return (
    <div>
      <HosNav />
      <div className="max-w-6xl mx-auto mb-3">
        <div className="border-2 border-[#03C988] flex items-center gap-10 p-4 mt-10 rounded-md">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg"
            alt="profilepic"
            className="rounded-full h-32 w-32 border border-black"
          />
          <div className="max-w-2xl w-full">
            <div className="flex w-full items-center justify-between mb-3">
              <h1 className="text-lg font-medium text-gray-800">
                Name:{" "}
                <span className="font-bold text-xl text-[#03C988]">
                  {" "}
                  {data?.name}
                </span>
              </h1>
              <h1 className="text-lg font-medium text-gray-800">
                Email:
                <span className="font-bold text-xl text-[#03C988]">
                  {" "}
                  {data?.email}
                </span>
              </h1>
            </div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-lg font-medium text-gray-800">
                Phone:{" "}
                <span className="font-bold text-xl text-[#03C988]">
                  {" "}
                  {data?.phone}
                </span>
              </h1>
              <h1 className="text-lg font-medium text-gray-800">
                Address:{" "}
                <span className="font-bold text-xl text-[#03C988]">
                  {" "}
                  {data?.name}
                </span>
              </h1>
            </div>
            <button className="bg-[#03C988] text-white rounded-md px-3  py-2 hover:text-gray-900 border-2 border-[#03C988]  hover:bg-white mt-3 ">
              Update Profile
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-medium text-gray-800 mt-10">
            Successful Appointments
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
    </div>
  );
}

export default Profile;
