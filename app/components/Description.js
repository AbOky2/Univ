import React from 'react'

export function Description() {
  const text = "Bienvenue à l'UHT";
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <section className="flex h-screen justify-center items-center flex-col">
        <div
            className="w-full h-screen  bg-hec bg-cover bg-center">
            <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
    <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
      
      {displayedText ? displayedText : "Bienvenue à l'UHT"}
    </h1>
    </div>
    </div>
    </section>
  );
}


// function Description() {
//   return (

    
// <section className="flex h-screen justify-center items-center flex-col">
//     <div
//         className="w-full h-screen  bg-hec bg-cover bg-center">
//         <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
//                 <span className="text-white text-4xl w-1/2 text-center"></span>
//         </div>
//     </div>
// </section>



//   )
// }

export default Description