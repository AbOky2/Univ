"use client";
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import LicenceGestion from "../components/Licence/LicenceGestion";

function page() {
  return (
    <div className=" ">
      <Nav />
      <LicenceGestion/>
      <Footer />
    </div>
  );
}

export default page;
