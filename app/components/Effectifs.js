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
    <section
      className=" bg-[#11136e] p-4 h-screen mb-8 flex  flex-col "
      id="zone"
    >
      {" "}
      {/* <h1 className=" mb-4 text-3xl font-bold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
          Université HEC en chiffres{" "}
        </h1> */}
        <div className="  h-full p-4">
      <div className=" flex items-center mt-12 mb-12 flex-col">
        <h2 className=" font-black text-5xl text-gray-600">
          {" "}
          <Number n={30000} />
        </h2>
        <p className=" font-extrabold text-2xl text-gray-600">Etudiants</p>
      </div>
      <div className=" flex items-center mt-12 mb-12 flex-col">
        <h2 className=" font-black text-5xl text-gray-600">
          <Number n={50} />
        </h2>
        <p className=" font-extrabold text-2xl text-gray-600">Personnels</p>
      </div>
      <div className=" flex items-center mt-12 mb-12 flex-col">
        <h2 className=" font-black text-5xl text-gray-600">
          <Number n={2000} />
        </h2>
        <p className=" font-extrabold text-2xl text-gray-600">Diplômés/an</p>
      </div>
      <div className=" flex items-center mt-12 mb-12 flex-col">
        <h2 className=" font-black text-5xl text-gray-600">
          <Number n={90000} />
        </h2>
        <p className=" font-extrabold text-2xl text-gray-600">Alumni</p>
      </div>
      </div>
      <br />
    </section>
  );
}

export default ZoneIntervention;
