"use client";
import React from "react";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import LicenceGestion from "../components/Licence/LicenceGestion";

function page() {
  return (
    <div className=" bg-white">
      <Nav2 />
      <LicenceGestion/>
      <Footer />
    </div>
  );
}

export default page;
