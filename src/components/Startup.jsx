import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Startup() {
  return (
    <div className="p-5 md:p-0 flex flex-col items-center justify-center text-center m-auto h-screen">
      <h1 className="text-4xl md:text-6xl text-gray-800 font-bold mb-3">
        Welcome to <span className="text-[#03C988] font-extrabold">Med.ai</span>
      </h1>
      <h1 className="text-gray-700 font-medium md:text-lg">
        Get your appointment and medical certificate easily from hospitals near
        you!
      </h1>
      <div className="flex items-center gap-6 mt-8">
        <Link to={"/login"}>
          <Button
            text={"Login"}
            className={
              " hover:text-gray-900 text-white bg-[#03C988] hover:bg-white"
            }
          />
        </Link>
        <Link to={"/register"}>
          <Button
            text={"Sign Up"}
            className={"text-gray-900 hover:text-white hover:bg-[#03C988]"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Startup;
