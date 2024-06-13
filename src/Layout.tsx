// import React from 'react'
import NavBar from './components/NavBar/NavBar'
import FooterMain from './components/Footer/FooterMain'
import Frame from "../src/assets/Frame.svg"
import HomeMain from './components/Home-loggedOut/HomeMain'
import SplashScreen from './components/SplashScreen/SplashScreen'

function Layout() {
  return (
    <div className='relative'>

            <div className='container mx-auto px-4 bg-white text-black'>
        
                <NavBar />
                 <hr />
                <HomeMain />
                <FooterMain />
                <SplashScreen />
            </div>




          {/* show map button */}
       <div className='absolute translate-x-[600px] translate-y-[-70px] bg-black text-white h-[40px] w-[100px] content-center rounded-[20px]' >
        <p className='flex justify-center'>Show map <img src={Frame} alt=""/>
        </p>
        </div>


    </div>
  )
}

export default Layout