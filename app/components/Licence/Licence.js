"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

function Licence() {
  return (
    <section className="p-2 dark:bg-gray-900 dark:text-black">
      <div className="w-full h-14 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <span className="text-white text-xl w-1/2 text-center">Licence</span>
        </div>
      </div>

      <div className="bg-[#0c0d3e] dark:bg-gray-100 p-4 rounded-2xl mb-4 dark:text-black ">
        <h1 className=" text-2xl font-bold text-white mb-4 dark:text-gray-800">
          L'offre licence de l'UHT
        </h1>
        <p className=" text-lg mb-2 font-medium text-gray-300 dark:text-gray-900 ">
          Les formations de licence de l'Université Hec Tchad sont organisées de
          façon à proposer une
          <strong> spécialisation progressive</strong> permettant aux étudiants
          de mieux se déterminer en fonction de leur choix et de leurs centres
          d'interêt avec la possibilité de changer d'orientation grâce à un
          système de portails pluridisciplinaires.
        </p>
        <p className=" text-lg font-medium text-gray-300 dark:text-gray-900 text-opacity-90">
          De ce fait, la 1ére année de licence est construite sur le principe de
          pluridisciplinarité et constitue une année d'orientation, la 2e année
          est une année de détermination et la 3e année, celle de
          spécialisation.
        </p>
      </div>

      <h1 className=" text-zinc-800 dark:text-white text-opacity-80 text-2xl font-bold mb-2 mt-2 p-4">
        Les formations
      </h1>

      <div className="bg-gray-200 dark:bg-orange-300 rounded-lg p-4">
        <Accordion selectionMode="multiple" >
          <AccordionItem key="1" aria-label="Accordion 1" title="Gestion" >
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center ">
                Licence Gestion
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Economie">
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Licence Economie
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Admnistration Générale des Affaires"
          >
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Licence Admnistration Générale des Affaires
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Sociologie du développement"
          >
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Licence Sociologie du développement
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="Gestion des ressources humaines"
          >
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                {" "}
                Licence Gestion des ressources humaines
              </p>
            </Link>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            title="Informatique appliquée à la gestion"
          >
            <Link href={"licence-gestion"}>
              <p className=" rounded-lg bg-slate-600 text-white w-full text-center">
                Licence Informatique appliquée à la gestion
              </p>
            </Link>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Licence;
