import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlus,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((preVal) => !preVal);
  };

  return (
    <div className="w-full h-[50px] flex justify-between items-center absolute z-10 text-white bg-[var(--primary-dark)]">
      <ul className="hidden sm:flex px-4">
        <li className="text-lg font-medium">
          <a href="/" className="hover:text-blue-100">
            Home
          </a>
        </li>
        <li className="text-lg font-medium">
          <a href="#gallery" className="hover:text-blue-100">
            Gallery
          </a>
        </li>
        <li className="text-lg font-medium">
          <a href="#deals" className="hover:text-blue-100">
            Booking
          </a>
        </li>
        <li className="text-lg font-medium">
          <a href="#contact" className="hover:text-blue-100">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-between mr-3">
        <FaFacebookF className="mx-3 sm:mx-4 md:cursor-pointer md:text-xl text-lg hover:scale-110 ease-in-out" />
        <FaTwitter className="mx-3 sm:mx-4 md:cursor-pointer md:text-xl text-lg hover:scale-110 ease-in-out" />
        <FaGooglePlus className="mx-3 sm:mx-4 md:cursor-pointer md:text-xl text-lg hover:scale-110 ease-in-out" />
        <FaInstagram className="mx-3 sm:mx-4 md:cursor-pointer md:text-xl text-lg hover:scale-110 ease-in-out" />
      </div>
      {/* mobile nav */}
      <div className="md:hidden z-10 mr-5 cursor-pointer" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="text-black" size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? " h-screen w-full overflow-y-hidden ease-in-out duration-300 absolute top-0  bg-[var(--primary-dark)] px-4 py-9 flex flex-col"
            : "absolute left-[-100%] top-0"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Booking</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
