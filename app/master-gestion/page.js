import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MasterGestion from '../components/Master/MasterGestion'

function page() {
  return (
    <div className=' bg-white'>
    <Nav />
    <MasterGestion />
    <Footer />
</div>
  )
}

export default page