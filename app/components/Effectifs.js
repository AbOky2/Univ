import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const [isVisible, setIsVisible] = useState(false);

  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    const handleScroll = () => {
      // Récupérer la position de défilement
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Vérifier si la position de défilement atteint une certaine valeur (par exemple, 200)
      if (scrollY >= 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écouter les événements de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Le tableau de dépendances est vide, donc cela ne se déclenche qu'une fois

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function ZoneIntervention() {
  return (
    <>
   <section className="py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Chiffres clés
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold mb-2"><Number n={2000} /></h3>
          <p className="text-gray-600">Diplômés</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold mb-2"><Number n={30000} /></h3>
          <p className="text-gray-600">Étudiants</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold mb-2"><Number n={90000} /></h3>
          <p className="text-gray-600">Alumni</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold mb-2"><Number n={40} /></h3>
          <p className="text-gray-600">Entreprises partenaires</p>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}

export default ZoneIntervention;
