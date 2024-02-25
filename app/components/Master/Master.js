"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

function Master() {
  return (
    <section className="p-2">
      <div className="w-full h-24 bg-hec bg-cover bg-center mb-12 shadow-xl">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <span className="text-white text-xl w-1/2 text-center">Master</span>
        </div>
      </div>

      <div className=" p-4  mb-4 ">
        <h1 className=" text-2xl font-bold text-gray-500 mb-4">
          L'offre Master de l'UHT
        </h1>
        <p className=" text-lg mb-2 text-gray-900 text-opacity-90">
          Le diplôme de master de l'Université Hec Tchad associe savoirs académiques, professionnalisation et recherche. Il vise avant tout 
          une insertion professionnalisation à bac+5 et permet de poursuivre d'études en doctorat.
        </p>
      
      </div>

      <h1 className=" text-zinc-800 text-opacity-80 text-xl font-bold mb-2 mt-2 p-4">
        Les formations
      </h1>

      <div className="bg-gray-200 rounded-lg p-4">
        <Accordion selectionMode="multiple">
          <AccordionItem key="1" aria-label="Accordion 1" title="Gestion">
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Master Gestion
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Economie">
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Master Economie
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Admnistration Générale des Affaires"
          >
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Master Admnistration Générale des Affaires
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Sociologie du développement"
          >
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Master Sociologie du développement
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="Gestion des ressources humaines"
          >
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                {" "}
                Master Gestion des ressources humaines
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            title="Informatique appliquée à la gestion"
          >
            <Link href={"master-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Master Informatique appliquée à la gestion
              </p>
            </Link>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Master