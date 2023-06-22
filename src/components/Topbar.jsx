import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

export const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center ">
        <BsChatSquareDots
          size={28}
          className="text-[var(--primary-dark)] mr-1"
        />
        <h1 className="text-[var(--primary-dark)] cursor-pointer">TRIP.ch</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-8">
          <AiOutlineClockCircle
            size={20}
            className="text-[var(--primary-dark)] mr-2"
          />
          <p className="text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-8">
          <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2" />
          <p className="text-gray-700">044-271653</p>
        </div>
        <button className="px-2 rounded-md text-xs md:px-5">
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};
