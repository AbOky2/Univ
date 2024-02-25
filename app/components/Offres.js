import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

function Offres() {
  return (
   
    <section className=" p-4 h-72"> 
      <div className=" h-full flex flex-col justify-around">
        <div>
          <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-8">
            Notre offre de formation
          </h1>
          <p className=" text-lg text-gray-600 font-normal sm:text-sm">
            Pour que chaque étudiant.e puisse construire son projet personnel et
            professionnel
          </p>
        </div>
        <div className=" flex justify-end">
          {" "}
          <Link href={"formations"}>
          <Button variant="flat" className=" bg-cyan-500" >Découvrir le catalogue</Button>{" "}</Link>
        </div>
      </div>
    </section>
    
  );
}

export default Offres;
