"use client";
import React from "react";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function page() {
  return (
    <div className=" bg-white">
      <Nav2 />

 
        <div className="w-full h-32 bg-hec bg-cover bg-center mb-12 shadow-xl">
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <span className="text-white text-xl w-1/2 text-center">
              Inscription Licences
            </span>
          </div>
        </div>


        <div className=" p-4">
        <div className=" text-gray-600 font-normal mb-12">
          <p>
            Vous trouverez dans le tableau ci-dessous, les dates d'ouverture et
            de clôture des différentes étapes de la campagne de candidature.
            <br />
          </p>
          <p>Ces dates concernent toutes les Licences.</p>
        </div>
        <div>
        <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Parcours</TableColumn>
        <TableColumn>Candidature</TableColumn>
        
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="text-black">Licence 1</TableCell>
          <TableCell className="text-black">Du 01 Août au 30 Septembre</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell className="text-black">Licence 2</TableCell>
          <TableCell className="text-black">Du 01 Août au 30 Septembre</TableCell>
        
        </TableRow>
        <TableRow key="3">
          <TableCell className="text-black">Licence 3</TableCell>
          <TableCell className="text-black">Du 01 Août au 30 Novembre</TableCell>
          
        </TableRow>
        
      </TableBody>
    </Table>
        </div>

        <div className="mt-12 mb-4">
            <h1 className="text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">Contact</h1>
            <a href="scolarite"><h2 className=" px-3 mx-3 border-l-blue-300 border-l-3 text-zinc-800 font-medium"> Service Scolarité </h2></a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;