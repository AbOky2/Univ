"use client";
import React from "react";
import Link from "next/link";

function Catalogues() {
  return (
    <section className=" bg-white dark:bg-gray-900 dark:text-white">
      
      <div className="w-full h-32 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            
          </div>
        </div>

        {/* <div className="bg-[#192941] absolute  w-1/2 rounded-lg p-2 text-gray-200 dark:text-white top-[85%] text-center">
          <p> Catalogue des formations</p>
        </div>*/}
      <h2 className="text-3xl md:text-4xl font-bold text-left mt-8 p-4">
            Les diplômes de l'université HEC Tchad
          </h2>
          <div className="border border-2 w-12  mx-4 border-blue-600 " />

      <div className="p-2 mt-4">
        <p className="  text-gray-600 dark:text-gray-200  mt-4">
          L'Université Hec Tchad délivre des diplômes nationaux contrôlés par
          l'Etat et la CAMES : BTS, Licence, Master.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div>
            <div className=" rounded-xl border-1 shadow-md p-2 mb-3 h-16 flex justify-center bg-[#0c0d3e] w-full">
            <Link href={"licence"}>
              <p className="  h-full flex justify-center text-gray-300 text-center flex-col text-lg font-semibold">Licence</p>
              </Link>
              </div>
            <div className=" rounded-xl border-1 shadow-md p-2 mb-3 h-16 flex justify-center bg-[#0c0d3e]">
              <Link href={"licence"}>
              <p className="  h-full flex justify-center text-gray-300 text-center flex-col text-lg font-semibold">BTS</p></Link>
              </div>
            <div className=" rounded-xl border-1 shadow-md p-2 mb-3 h-16 flex justify-center bg-[#0c0d3e]">
              <Link href={"master"}>
            <p className="  h-full flex justify-center text-gray-300 text-center flex-col text-lg font-semibold"> Master</p></Link>
              </div>
          </div>

        <div>
          <div className="border border-t-8 border-t-blue-500 p-3 shadow-md mb-8 rounded-sm">
              <h3 className="text-left font-bold mb-2 "> Reprise d'études</h3>
              <div className="border border-1 w-full mb-2" />
              <p>
                <strong>Vous souhaitez vous inscrire à une de nos formations après avoir interrompu vos études depuis plus de deux ans ?</strong>Quel que soit le niveau auquel vous avez interrompu votre scolarité, vous pouvez reprendre vos études sur un diplôme national (de type Licence, Master, ...). Si vous ne disposez pas du diplôme requis pour l'accès à la formation, vous pouvez demander une validation d'acquis.
              </p>
          </div>
           <div className="border border-t-8 border-t-blue-500 p-3 shadow-md rounded-sm">
              <h3 className="text-left font-bold mb-2"> Contacts</h3>
              <div className="border border-1 w-full mb-2" />
              <p className="text-blue-500">
                <a href="https://wa.me/15551234567">
               <strong className="text-blue-500"> {'>'} Services scolarité</strong></a>
              </p>
              <p>
              <strong className="text-blue-500"> {'>'}</strong> Formulaire de contact
              </p>
          </div>
        </div>
       
          
        </div>
      
      
    </section>
  );
}

export default Catalogues;
