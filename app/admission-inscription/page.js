"use client";
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav';

function page() {
  return (
    <div className=' '>
    <Nav/>
    <div className=' '>
    <div className="w-full h-32 bg-[url('/back.png')] bg-cover bg-center mb-12 shadow-xl">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <span className="text-white text-xl w-1/2 text-center">
                Admissions & Inscriptions
          </span>
       
        </div>
      </div>
   <div className='p-4'>
    <div className='mb-16'>
    <p className=' text-lg font-medium dark:text-gray-200 text-zinc-800  '>
        Comment candidater, s'inscrire ou se réinscrire en première année, deuxième année et troisième année de licence ? En première année ou deuxième année de master ? 
        Quels sont les droits d'inscriptions ? Toutes les réponses à vos questions et les informations essentielles se trouve dans cette rubrique.
    </p>
  </div>

   
<div className="grid md:grid-cols-2 gap-4">
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 ">
            <a href="inscription-licence">
                <img class="rounded-t-lg" src="Acceuil.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="inscription-licence">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Licences</h5>
                </a>
            </div>
        </div>

        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
            <a href="inscription-master">
                <img class="rounded-t-lg" src="Acceuil.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="inscription-master">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Master</h5>
                </a>
            </div>
        </div>
</div>

{/* <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img class="rounded-t-lg" src="Acceuil.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTS</h5>
        </a>
    </div>
</div> */}


 </div>
    
    </div>
    <Footer />
    </div>
  )
}

export default page