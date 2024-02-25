"use client";
import React from "react";
import Link from "next/link";

function Catalogues() {
  return (
    <section className=" bg-white">
      <div className="flex flex-col relative">
        <div className=" h-full w-full">
          <img src="Acceuil.jpg" />
        </div>

        <div className="bg-[#192941] absolute  w-1/2 rounded-lg p-2 text-gray-200 top-[85%] text-center">
          <p> Catalogue des formations</p>
        </div>
      </div>

      <div className="p-2 mt-4">
        <p className=" text-lg text-gray-600 font-sans font-medium text-opacity-90 mt-4">
          L'Université Hec Tchad délivre des diplômes nationaux contrôlés par
          l'Etat et la CAMES : BTS, Licence, Master.
        </p>
      </div>
      <div className="p-3">
        <div className=" rounded-xl border-1 shadow-lg p-2 mb-3 h-16 flex justify-center bg-orange-200">
        <Link href={"licence"}>
          <p className="  h-full flex justify-center text-gray-700 text-center flex-col text-lg font-semibold">Licence</p>
          </Link>
          </div>
        <div className=" rounded-xl border-1 shadow-lg p-2 mb-3 h-16 flex justify-center bg-orange-200">
          <Link href={"licence"}>
          <p className="  h-full flex justify-center text-gray-700 text-center flex-col text-lg font-semibold">BTS</p></Link>
          </div>
        <div className=" rounded-xl border-1 shadow-lg p-2 mb-3 h-16 flex justify-center bg-orange-200">
          <Link href={"master"}>
         <p className="  h-full flex justify-center text-gray-700 text-center flex-col text-lg font-semibold"> Master</p></Link>
          </div>
      </div>

      
      
    </section>
  );
}

export default Catalogues;
