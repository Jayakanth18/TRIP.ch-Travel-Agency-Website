import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-xl font-bold text-[var(--primary-dark)] p-4">
        Gallery
      </h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1602194146204-5830e1aafa1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1627924531443-5a3261bcac81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
