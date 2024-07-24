"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import Presentation from "./Presentation";
import Admission from "../Admission";
import Programme from "../Programme";

function LicenceGestion() {
  const item = (
    <ul className=" dark:text-white text-opacity-70 font-lg text-lg list-disc px-6">
      <li>Microéconomie</li>
      <li>Econométrie</li>
      <li>Pratique de Logiciel Statistique</li>
      <li>Droit des Afbg-[#0c0d3e]tionales</li>
      <li>Macro Dynamique</li>
      <li>Recherche Operationnelle</li>
      <li>Economie de Développement</li>
      <li>Statistique Inferentielle</li>
      <li>Management</li>
    </ul>
  );

  return (
    <section className="p-2">
      <div className="w-full h-14 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <span className="text-white text-xl w-1/2 text-center">
            Licence Gestion
          </span>
        </div>
      </div>

      <div className="bg-[#0c0d3e] dark:bg-gray-100 dark:text-black p-4 rounded-2xl mb-4 ">
        <h3 className=" text-xl font-bold text-white dark:text-black mb-4 text-opacity-75">
          Information générales
        </h3>
        <div className=" mb-2 border-b-2 border-gray-300 dark:text-black border-opacity-25 p-4">
          <h3 className="text-gray-200 dark:text-black text-sm font-bold mb-2">
            Durée de la formation
          </h3>
          <li className="text-gray-200 text-sm font-bold dark:text-black">3 ans</li>
        </div>
        <div className=" mb-2 border-b-2 border-gray-300 border-opacity-25 p-4">
          <h3 className="text-gray-200 text-sm font-bold mb-2 dark:text-black">
            Lieu de la formation
          </h3>
          <p className="rounded-2xl p-1 bg-[#1bb9e4] w-1/4 text-center text-gray-200 text-xs font-bold">
            Ndjari
          </p>
        </div>
        <div className=" mb-2 p-4">
          <h3 className="text-gray-200 text-sm font-bold mb-2 dark:text-black">
            Langues d'enseignement
          </h3>
          <p className="rounded-2xl p-1 bg-[#1bb9e4] w-1/4 text-center text-gray-200 text-xs font-bold">
            Français
          </p>
        </div>
      </div>

      <Presentation />
      <Admission
        master={
          <div className=" ">
            <div className=" mb-4">
              <h1 className=" font-semibold text-lg">
                Niveau(x) de recrutement
              </h1>
              <p className=" text-opacity-5 text-sm">
                Baccalauréat ou diplôme equivalent
              </p>
            </div>
            <div>
              <h3 className=" font-semibold text-lg ">
                Serie de Bac préconisée
              </h3>
              <p className=" text-opacity-5 text-sm">
                La licence mention économie est ouverte de plein droit aux
                titulaires du baccalauréat ou d'un diplôme de niveau équivalent
              </p>
            </div>
          </div>
        }
        candidature={
          <p className=" rounded-xl p-1 bg-[#1bb6e1e6] text-gray-200 border-1 w-4/6 text-center text-sm font-semibold">
            Candidature Licence Gestion
          </p>
        }
      />

      <Programme
        programme={
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Licence 1"
              className=" bg-[#1bb6e1e6] p-1 px-6 rounded-xl mb-3 font-medium "
            >
              {item}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Licence 2"
              className=" bg-[#1bb6e1e6] p-1 px-6 rounded-xl font-medium  mb-3"
            >
              {item}
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Licence 3"
              className=" bg-[#1bb6e1e6] p-1 px-6 rounded-xl font-medium "
            >
              {item}
            </AccordionItem>
          </Accordion>
        }
        postbac={
          <section className=" text-lg text-gray-600 font-medium  mt-6 p-4">
            <h1 className=" text-zinc-800 dark:text-white text-opacity-80 text-3xl font-bold mb-2">
              Et après ?
            </h1>
            <div className="mb-4">
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold dark:text-white ">
                Année post-bac de sortie
              </h2>
              <p className=" font-semibold text-sm dark:text-gray-100">Bac+3</p>
            </div>
            <div>
              <p>
                La licence mention économie combine de manière équilibrée des
                enseignements en économie et en gestion au cours des deux
                premières années.
              </p>
              <p>
                En troisième année, les enseignements sont spécialisés dans le
                domaine de l'économie.
              </p>

              <p>
                Les étudiants maîtrisent les outils statistiques,
                économétriques, comptables et informatiques.
              </p>

              <p>
                Ils savent analyser les grandes questions économiques, rédiger
                une synthèse, analyser un marché, réaliser une analyse
                financière, une étude socio-économique.
              </p>
              <p>
                La professionnalisation fait partie intégrante des objectifs de
                la formation.
              </p>
            </div>
            <div>
              <h2 className="text-zinc-800 dark:text-white text-opacity-60 text-lg font-bold mt-4 mb-2">
                Poursuites d'études
              </h2>
              <p>
                Les étudiants de la Licence générale Gestion poursuivent
                massivement en Master de Gestion à l'<strong>UHT</strong>. Cela
                correspond à la finalité de cette licence.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-zinc-800 dark:text-white text-opacity-60 text-lg font-bold">
                Débouchés professionnels
              </h2>
              <ul className=" list-disc p-4">
                <li>Direction administrative et financière</li>
                <li>Assistanat de direction</li>
                <li>Comptabilité</li>
              </ul>
            </div>
          </section>
        }
      />
    </section>
  );
}

export default LicenceGestion;
