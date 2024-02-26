import React from "react";

function Programme(props) {
  const item = (
    <ul className="text-sky-600 text-opacity-70 font-base text-base list-disc px-6">
      <li>Microéconomie</li>
      <li>Econométrie</li>
      <li>Pratique de Logiciel Statistique</li>
      <li>Droit des Affaires Internationales</li>
      <li>Macro Dynamique</li>
      <li>Recherche Operationnelle</li>
      <li>Economie de Développement</li>
      <li>Statistique Inferentielle</li>
      <li>Management</li>
    </ul>
  );

  return (
    <>
      <section className=" text-lg text-gray-600 font-normal mt-6 p-4">
        <h1 className=" text-zinc-800 dark:text-white text-opacity-80 text-3xl font-bold mb-2">
          Programme
        </h1>
        <p className="mb-4">
          Les informations ci-dessous sont données à titre indicatif et peuvent
          faire l'objet de mises à jour.
        </p>

        {props.programme}
      </section>
      
        {props.postbac}
     
    </>
  );
}

export default Programme;
