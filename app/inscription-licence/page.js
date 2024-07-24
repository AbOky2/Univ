"use client";
import React from "react";
import Nav from "../components/Nav";
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
    <div className=" ">
      <Nav />

 
        <div className="w-full h-32 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <span className="text-white text-xl w-1/2 text-center">
              Inscription Licences
            </span>
          </div>
        </div>


        <div className=" p-4">
        <div className=" text-gray-600 text-lg mb-12 font-medium">
          <p>
            Vous trouverez dans le tableau ci-dessous, les dates d'ouverture et
            de clôture des différentes étapes de la campagne de candidature.
            <br />
          </p>
          <p>Ces dates concernent toutes les Licences.</p>
        </div>
        <div>
        <Table aria-label="Example static collection table" className="bg-red-gray-100 border-1 shadow-lg border-gray-200 rounded-md dark:bg-gray-900">
      <TableHeader>
        <TableColumn>Parcours</TableColumn>
        <TableColumn>Candidature</TableColumn>
        
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="">Licence 1</TableCell>
          <TableCell className="">Du 01 Août au 30 Septembre</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell className="">Licence 2</TableCell>
          <TableCell className="">Du 01 Août au 30 Septembre</TableCell>
        
        </TableRow>
        <TableRow key="3">
          <TableCell className="">Licence 3</TableCell>
          <TableCell className="">Du 01 Août au 30 Novembre</TableCell>
          
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
