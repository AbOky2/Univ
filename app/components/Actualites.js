import React from "react";

function Actualites() {
  return (
    <section className="p-4 bg-[#b8973f]">
    
      <h1 className=" text-2xl font-bold mb-4">Actualités</h1>

      <div class=" bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 mb-4">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="Acceuil.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              8 filières approuvé par la CAMES
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            La CAMES approuve huit (8) filières de l'UHT
          </p>
          
        </div>
      </div>

      <div class=" bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 mb-4">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="promo.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Les diplômés de la 19e promo reçoivent leurs parchemins
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            107 diplômés de l'UHT ont reçu ce 31 octobre leur diplôme.
          </p>
          
        </div>
      </div>
     
    </section>
  );
}

export default Actualites;
