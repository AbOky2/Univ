'use client'
import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Baniere from './components/Baniere';
import Effectifs from './components/Effectifs'
import Offres from './components/Offres';
import Actualites from './components/Actualites';
import { FadeDown } from './components/Fade';


function page() {
  return (
    <div className=' bg-white'>
      <Nav />
      {/* <Description /> */}
      <FadeDown />
      <Baniere />
      <Effectifs />
       <Offres />
      <Actualites/>
      <Footer />
    </div>

  )      
}

export default page