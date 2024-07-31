"use client";
import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Button } from "../ui/button";
import Link from "next/link";
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
    <div className=" bg-white dark:bg-gray-900 dark:text-gray-200">
      <Nav />

 
        <div className="w-full h-32 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <span className="text-white text-xl w-1/2 text-center">
              Inscription Master
            </span>
          </div>
        </div>


        <div className=" p-4">
        <div className=" text-gray-600 font-normal mb-12 dark:text-gray-200">
          <p>
            Vous trouverez dans le tableau ci-dessous, les dates d'ouverture et
            de clôture des différentes étapes de la campagne de candidature.
            <br />
          </p>
          <p>Ces dates concernent tous les Masters.</p>
        </div>
        <div>
        <Table aria-label="Example static collection table" className="shadow-md dark:bg-gray-700 rounded-md">
      <TableHeader>
        <TableColumn>Parcours</TableColumn>
        <TableColumn>Candidature</TableColumn>
        
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Master 1</TableCell>
          <TableCell>Du 01 Octobre au 31 Decembre</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>Master 2</TableCell>
          <TableCell>Du 01 Octobre au 31 Decembre</TableCell>
        
        </TableRow>
        
        
      </TableBody>
    </Table>
        </div>

        <div className="mt-12 mb-4">
            <h1 className="text-zinc-800 text-opacity-80 text-3xl font-bold mb-2 dark:text-gray-200">Contact</h1>
            <Link href={"https://wa.me/15551234567"}>
          <Button  >Contactez la Scolarité</Button>{" "}</Link>
            
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page