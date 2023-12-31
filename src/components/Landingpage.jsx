import React from "react";

const Landingpage = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1533358122925-6eb2658855bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[30%] md:top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-3xl sm:text-4xl text-white ">
            Find Your Special & Adventures trip
          </h1>
          <h1 className="text-3xl sm:text-4xl py-4 italic text-white ">
            With TRIP.ch
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            animi, quibusdam reiciendis aperiam accusantium perferendis, totam
            porro, odio esse optio vero non deserunt? Deserunt ipsum tempore
            cumque quam consequuntur facilis corrupti alias autem. Veniam, ipsum
            exercitationem accusamus perspiciatis dolores atque vel odio, minus,
            nulla quod corporis recusandae neque. Cum, quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
