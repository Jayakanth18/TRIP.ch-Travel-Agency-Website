import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-xl font-bold">
          Skydiving & Parachuting
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1418846531910-2b7bb1043512?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-lg font-bold">
          Under - Water Excusion
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
