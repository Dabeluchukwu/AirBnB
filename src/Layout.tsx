import React from 'react'
import NavBar from './components/NavBar/NavBar'
import HomeMain from './components/Home-loggedOut/HomeMain'
import FooterMain from './components/Footer/FooterMain'

function Layout() {
  return (
    <div>

<div className='container mx-auto px-4 bg-white text-black'>
        
        <NavBar />
        <hr />
         <HomeMain />
         <FooterMain />
         
    </div>


    </div>
  )
}

export default Layout