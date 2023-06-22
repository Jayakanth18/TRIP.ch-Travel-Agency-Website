import React from "react";
import { Topbar } from "./components/TopBar";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Landingpage />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};
