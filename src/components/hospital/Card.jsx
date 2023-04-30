import React from "react";

function Card() {
  return (
    <div className=" h-20 border-2 shadow-lg border-[#03C988] rounded-md max-w-5xl mx-auto w-full hover:scale-110 duration-200 hover:shadow-2xl cursor-pointer">
      <div className="flex items-center w-full p-6 justify-between">
        <h1 className="text-lg text-gray-900 font-medium">Patient Name</h1>
        <h1 className="text-lg text-gray-900 font-medium">02/09/2020</h1>
        <h1 className="text-lg text-gray-900 font-medium hover:underline cursor-pointer hover:text-[#03C988]">
          Click to View
        </h1>
      </div>
    </div>
  );
}

export default Card;
