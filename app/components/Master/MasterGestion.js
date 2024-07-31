"use client";
import React from "react";
import Admission from "../Admission";
import Programme from "../Programme";
import Presentation from "./Presentation";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function MasterGestion() {
  const item = (
    <ul className="text-white text-opacity-70 font-base text-base list-disc px-6">
      <li>Pratique de Logiciel Statistique</li>
      <li>Droit des Affaires Internationales</li>
      <li>Macro Dynamique</li>
      <li>Recherche Operationnelle</li>
      <li>Management</li>
    </ul>
  );
  return (
    <section className="p-2">
      <div className="w-full h-24 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <span className="text-white text-xl w-1/2 text-center">
            Master Gestion
          </span>
        </div>
      </div>

      <div className="bg-[#11136e] p-4 rounded-2xl mb-4 ">
        <h3 className=" text-xl font-bold text-white mb-4 text-opacity-75">
          Information générales
        </h3>
        <div className=" mb-2 border-b-2 border-gray-300 border-opacity-25 p-4">
          <h3 className="text-gray-200 text-sm font-bold mb-2">
            Durée de la formation
          </h3>
          <li className="text-gray-200 text-sm font-bold">2 ans</li>
        </div>
        <div className=" mb-2 border-b-2 border-gray-300 border-opacity-25 p-4">
          <h3 className="text-gray-200 text-sm font-bold mb-2">
            Lieu de la formation
          </h3>
          <p className="rounded-2xl p-1 bg-[#1bb9e4] w-1/4 text-center text-gray-200 text-xs font-bold">
            Ndjari
          </p>
        </div>
        <div className=" mb-2 p-4">
          <h3 className="text-gray-200 text-sm font-bold mb-2">
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
                Licence ou diplôme equivalent
              </p>
            </div>
          </div>
        }
        candidature={
          <p className=" rounded-xl p-1 bg-[#1bb6e1e6] text-gray-200 border-1 w-4/6 text-center text-sm font-semibold">
            Candidature Master Gestion
          </p>
        }
      />

      <Programme
        programme={
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Master 1"
              className=" bg-[#1bb6e1e6] p-1 px-6 rounded-xl mb-3 font-medium"
            >
              {item}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Master 2"
              className=" bg-[#1bb6e1e6] p-1 px-6 rounded-xl font-medium  mb-3"
            >
              {item}
            </AccordionItem>
          </Accordion>
        }

        postbac={
          <section className=" text-base text-gray-600 font-normal mt-6 p-4">
            <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">
              Et après ?
            </h1>
            <div className="mb-4">
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold ">
                Année post-bac de sortie
              </h2>
              <p className=" font-semibold text-sm">Bac+5</p>
            </div>
            <div>
              <p>
              La mention « Gestion de Production, Logistique, Achats » entend répondre aux besoins des entreprises à travers la formation
               de cadres de haut niveau dans le domaine de la logistique 
              entendue comme un mode global du pilotage et de rationalisation des processus constitutifs d’une organisation.
              </p>
              <p>
              La spécialité permet de développer les capacités des futurs diplômés à mobiliser l’ensemble
               des outils et démarches dans une optique d’intégration des processus industriels et logistiques.
              </p>

              <p>
              La formation de la mention « Gestion Logistique » a pour objet de former des cadres capables d’évoluer dans leur carrière
               suite à une connaissance approfondie des concepts de 
               la logistique industrielle ainsi que les méthodes et les outils appropriés. 
              </p>
            </div>
            <div>
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold mt-4 mb-2">
                Poursuites d'études
              </h2>
              <p>
              Compte tenu de l’orientation des étudiants et du taux élevé d’insertion professionnelle des
               diplômés les personnes souhaitant poursuivre leurs études s’orientent uniquement vers le Doctorat.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold">
                Débouchés professionnels
              </h2>
              <ul className=" list-disc p-4">
                <li>Management et ingénierie gestion industrielle et logistique</li>
                <li>Direction de grande entreprise ou d'établissement public</li>
                <li>Direction de petite ou moyenne entreprise</li>
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold mb-4">
                Secteurs d'activités ou type d'emploi
              </h2>
              <p>
              Les objectifs professionnels et les débouchés de cette mention sont clairement identifiables.
              </p>
              <p>En effet, la mention répond aux besoins de secteurs en pleine expansion offrant de nombreux débouchés pour des postes
                 qualifiés dans les différents secteurs suivants : PME, création d’entreprises,
                 Industrie, Agroalimentaire, Services, Grande Distribution, Conseil, Administrations, Banques, Sociétés d’assurance ....  </p>
            </div>

            <div className="mt-4">
              <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold mb-4">
                Instertion professionnelle
              </h2>
              <p>
              Les diplômés pourront occuper des postes de cadre à vocation managériale tout en visant à moyen terme des fonctions d’encadrement. Ils pourront en particulier être de précieux collaborateurs 
              pour les responsables de grandes structures, mais aussi  pour les responsables de PME/PMI.
              </p>
              <p>Les diplômés de la mention « Gestion de Production, Logistique, Achats » pourront occuper des postes en logistique ou/et en systèmes d’information. Les types d’emplois accessibles sont : consultant fonctionnel logistique, consultant fonctionnel contrôle de gestion et gestion financière,
                 consultant progiciel de gestion intégrée, responsable gestion de production, responsable logistique, chef projet système d’information ..  </p>
            </div>

            <div className="mt-4">
            <h2 className="text-zinc-800 text-opacity-60 text-lg font-bold mb-4">
            Taux d'insertion Master 2ème année
              </h2>
        <Table aria-label="Example static collection table" className="shadow-md">
      <TableHeader>
        <TableColumn></TableColumn>
        <TableColumn>Taux</TableColumn>
        
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>1 an du diplôme</TableCell>
          <TableCell>84%</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>18 mois du diplôme</TableCell>
          <TableCell>92%</TableCell>
        
        </TableRow>
        <TableRow key="3">
          <TableCell>2 ans du diplôme</TableCell>
          <TableCell>100%</TableCell>
          
        </TableRow>
        
      </TableBody>
    </Table>
        </div>
            
          </section>
        }
      />
    </section>
  );
}

export default MasterGestion;
