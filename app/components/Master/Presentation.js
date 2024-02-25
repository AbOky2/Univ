import React from "react";

function Presentation() {
  return (
    <>
      <section className="bg-white text-base text-gray-600 font-normal p-4">
        <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">
          Présentation
        </h1>
        <p>
          Les choix pédagogiques et les décisions relatives à la structure de la
          formation, l’organisation pédagogique et l’accompagnement des
          étudiants sont motivés par la spécialisation et la
          professionnalisation des S3-S4 avec leur corollaire : l’obligation
          d’informer, d’orienter et de commencer à professionnaliser la
          formation en Master première année. Il est donc prévu :
        </p>{" "}
        <br />
        <ul className=" list-disc px-2 ">
          <li>
            {" "}
            Un important tronc en Master première année (S1-S2) correspondant au
            socle des compétences nécessaires pour atteindre les objectifs à
            travers une formation polyvalente et progressive débouchant sur des
            semestres S3 et S4 fortement spécialisés.
          </li>
          <li>
            Une approche des parcours développés en S4, grâce à l’organisation
            de deux parcours en Semestre 4 représentant chacun 14 ECTS soit 25%
            du volume horaire global de Master deuxième année.
          </li>
          <li>
            Des activités terrain avec la réalisation d’un mémoire en groupe de
            4 ou 5 étudiants, en étroite liaison avec une entreprise ou une
            organisation, ainsi que des exercices de simulation de gestion.
          </li>
          <li>
            Une immersion dans le monde professionnel grâce à un stage en
            entreprise effectué soit en fin de cursus pendant 3 à 6 mois, soit
            de façon alternée durant toute l’année.{" "}
          </li>
        </ul>
        En S3 et S4 l’année de formation est effectuée en formation classique
        avec un stage en fin de cursus.
      </section>

      <section className="bg-white text-base text-gray-600 font-normal mt-6 p-4">
        <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">
          Enjeux
        </h1>
        <p>
          L’objectif est de former des cadres de haut niveau capables d’apporter
          des solutions afin de satisfaire les besoins fondamentaux de chaque
          entreprise qui consiste à assurer sa pérennité et à accroître sa
          rentabilité en créant de la valeur pour le client et en proposant un
          meilleur service client.{" "}
        </p>
        <p>
          Dans son intégralité, la formation de la mention « Gestion de
          Logistique » vise à fournir aux diplômés les méthodes et les outils
          nécessaires pour la mise en place de ces stratégies d’entreprise.
          Ainsi, la première année du Master, permet d’ajouter une compétence et
          une culture transversales, recherchées par les employeurs, en gestion
          de production, logistique et achats, à leur formation de base en
          gestion et en management acquise en licence.
        </p>
        La deuxième année du Master permet ensuite l’approfondissement et la
        spécialisation sur un des domaines clés en fonction du parcours choisi.
        En s’appuyant sur une équipe pédagogique adaptée tant au niveau
        scientifique que professionnel, la formation consiste à dispenser et à
        faire maîtriser les fondamentaux de la gestion de production, de la
        logistique et des achats.
      </section>
    </>
  );
}

export default Presentation;
