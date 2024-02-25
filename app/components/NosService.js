import React from 'react'
import {Skeleton} from "@nextui-org/react";


function NosService() {
  return (

    <section className=' bg-white p-4 ' id='service'>
           <h1 className='mb-9 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'> Nos Services</h1>
  
       <div className='grid md:grid-cols-3 gap-4'>
           
            <div className='bg-sky-700 p-4 rounded-xl md:hover:shadow-2xl'>
                <p className=' font-bold md:text-2xl text-lg font-sans mb-4'>Nettoyage complet des véhicules, Bus et Moto</p>
                <img className=' rounded-lg' src='nett2.jpg'/>
            </div>
           
            <div className='bg-sky-700 p-4 rounded-xl md:hover:shadow-2xl'>
                <p className=' font-bold md:text-2xl text-lg font-sans mb-4'>Entretien des Locaux</p>
                <img className=' rounded-lg' src='nett5.jpg'/>

            </div>
                       <div className='bg-sky-700 p-4 rounded-xl md:hover:shadow-2xl'>
                <p className=' font-bold md:text-2xl text-lg font-sans mb-4'>Nettoyage des vitres accessibles</p>
                <img className=' rounded-lg'src='nett4.jpg'/>

            </div>
                          <div className='bg-sky-700 p-4 rounded-xl md:hover:shadow-2xl'>
                <p className=' font-bold md:text-2xl text-lg font-sans mb-4'>Nettoyage après demenagement et avant aménagement</p>
                <img className=' rounded-lg'src='nett7.jpg'/>

            </div>
       </div>

    </section>
  
  )
}

export default NosService