import Footer from "./Footer";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Effectifs from "./Effectifs"

export function Acceuil() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div>
 <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/student.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          <motion.div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8"
          initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold text-center" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              Bienvenue  à l'Université HEC Tchad
            </motion.h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl text-center">
            Apprendre pour Entreprendre !<br/>
              Découvrez nos programmes d'études innovants et nos opportunités
              passionnantes.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4">
              <Button className="w-full md:w-auto">En savoir plus</Button>
              
              <Button variant="secondary" className="w-full md:w-auto">
                Candidater
              </Button>
            </div>
          </motion.div>
        </div>
        <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Nos offres de formation
          </h2>
          <p className="text-gray-600 mb-4">
            Pour que chaque étudiant.e puisse construire son projet personnel et
            professionnel
          </p>
        </div>
        <div className=" flex justify-end">
          {" "}
          <Link href={"formations"}>
          <Button  >Découvrir le catalogue</Button>{" "}</Link>
        </div>
      </div>
    </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Actualités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Acceuil.jpg"
                  alt="Actualité 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                  8 filières approuvé par la CAMES
                  </h3>
                  <p className="text-gray-600 mb-4">
                  La CAMES approuve huit (8) filières de l'UHT
                  </p>
                  <Button className="w-full">En savoir plus</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/promo.jpg"
                  alt="Actualité 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2"> Les diplômés de la 19e promo reçoivent leurs parchemins</h3>
                  <p className="text-gray-600 mb-4">
                  107 diplômés de l'UHT ont reçu ce 31 octobre leur diplôme.
                  </p>
                  <Button className="w-full">En savoir plus</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Actualité 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Événement à venir</h3>
                  <p className="text-gray-600 mb-4">
                    Ne manquez pas notre prochain événement passionnant sur le
                    campus.
                  </p>
                  <Button className="w-full">En savoir plus</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Événements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Événement 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Conférence sur l\'innovation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Rejoignez-nous pour une conférence passionnante sur les
                    dernières tendances en innovation.
                  </p>
                  <Button className="w-full">Participer</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Événement 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Salon de l\'emploi</h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez les opportunités de carrière lors de notre salon de
                    l\'emploi annuel.
                  </p>
                  <Button className="w-full">Participer</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Événement 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Journée portes ouvertes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Venez découvrir notre campus lors de notre journée portes
                    ouvertes.
                  </p>
                  <Button className="w-full">Participer</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Événement 4"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Atelier de développement personnel
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Participez à notre atelier de développement personnel pour
                    vous épanouir.
                  </p>
                  <Button className="w-full">Participer</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Effectifs/>
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Nos entreprises partenaires
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 1"
                  className="max-w-full max-h-12"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 2"
                  className="max-w-full max-h-12"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 3"
                  className="max-w-full max-h-12"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 4"
                  className="max-w-full max-h-12"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 5"
                  className="max-w-full max-h-12"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Entreprise 6"
                  className="max-w-full max-h-12"
                />
              </div>
            </div>
          </div>
        </section>    
        <Footer/>
         
    </div>
  );
}
