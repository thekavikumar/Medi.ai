import React from "react";
function App() {
  return (
    <>
      <form className="p-10">
        <div className="max-w-xl mx-auto gap-4 flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border focus:ring-1 focus:ring-[#0505d9] placeholder:gray-400 rounded-md p-2 w-full  "
            placeholder="Enter your name"
          />
        </div>
      </form>
    </>
  );
}

export default App;
