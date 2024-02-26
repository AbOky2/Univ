import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Licence from '../components/Licence/Licence'

function page() {
  return (
    <div className='  dark:text-black'>
        <Nav />
        <Licence />
        <Footer />
    </div>
  )
}

export default page