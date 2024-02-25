import React from "react";

function Presentation() {
  return (
    <>
      <section className="bg-white text-base text-gray-600 font-normal p-4">
        <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">
          Présentation
        </h1>
        <p>
          La formation est organisée en 3 niveaux (N1, N2 et N3) de deux
          semestres chacun, de manière à assurer une spécialisation progressive.
        </p>

        <p>
          {" "}
          La première année est une année d’orientation, la deuxième année est
          une année de détermination et la troisième une année de
          spécialisation. Aux niveaux 1 et 2 (N1 et N2), chaque semestre est
          organisé en unités d’enseignement (UE) regroupées en blocs de
          connaissances et de compétences. Un bloc de compétences fondamentales
          est commun à l’ensemble des étudiants de la mention. Il est complété
          par un bloc de compétences transversales permettant d’acquérir des
          compétences relationnelles et linguistiques indispensables, selon des
          modalités pouvant s’adapter au profil des étudiants.
        </p>
        <p>
          {" "}
          Par ailleurs, les étudiants choisissent parmi différents blocs de
          compétences complémentaires leur offrant la possibilité soit
          d’approfondir les connaissances disciplinaires soit de s’ouvrir à
          d’autres disciplines.
        </p>
        <p>
          {" "}
          Sont ainsi proposées des blocs de compétences complémentaires en
          économie, droit, sciences sociales et gestion.
        </p>
        <p>
          {" "}
          Les choix de compétences complémentaires à chaque semestre ne
          conditionnent pas la poursuite d’études dans les différents parcours
          de la mention économie ou l’accès au master de l’Ecole d’Economie. En
          revanche, ils peuvent constituer un prérequis pour une réorientation
          au sein du portail droit-économie-gestion.
        </p>
        <p>
          {" "}
          Les étudiants ont la possibilité de s’inscrire dans un second bloc de
          compétences complémentaires afin d’obtenir une qualification
          complémentaire en droit, sciences sociales ou gestion. Dans le cas du
          parcours langues vivantes, une qualification complémentaire de
          renforcement en langues vivantes est proposée.
        </p>
        <p>
          {" "}
          Au niveau 3 (N3), les étudiants font un choix de parcours : Analyse et
          politique économique, Economie du développement ou Langues vivantes.
          Par ailleurs, il est possible de valider en parallèle à sa licence
          mention économie une seconde mention de licence en droit, gestion ou
          AES
        </p>
      </section>
      <section className="bg-white text-base text-gray-600 font-normal mt-6 p-4">
        <h1 className=" text-zinc-800 text-opacity-80 text-3xl font-bold mb-2">
          Enjeux
        </h1>
        <p>
          L'ensemble des parcours de la formation vise à acquérir un socle de
          connaissances générales en économie, gestion et méthodes
          quantitatives.
        </p>

        <p>
          Destinée prioritairement à la poursuite d’études jusqu’au niveau
          Bac+5, la licence mention économie prépare à l’entrée dans le monde
          professionnel via l’acquisition de compétences transversales, la
          présence de modules de professionnalisation et la possibilité
          d’effectuer chaque année des stages en entreprise, administration ou
          milieu associatif.
        </p>

        <p>
          Le parcours langues vivantes favorise une orientation internationale
          pour la poursuite d’études et l’insertion professionnelle grâce à un
          enseignement renforcé en langues vivantes et l'utilisation progressive
          de l'anglais comme langue de travail.
        </p>

        <p>
          Le parcours économie du développement (1ère année de magistère de
          développement économique, accessible sur concours) est caractérisé par
          une orientation plus spécifique des enseignements autour de la
          thématique du développement international en troisième année de
          licence.{" "}
        </p>
      </section>
    </>
  );
}

export default Presentation;
