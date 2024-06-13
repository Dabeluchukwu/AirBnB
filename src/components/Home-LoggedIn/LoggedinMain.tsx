// import React from 'react'
import HomeNav from '../Home-loggedOut/HomeNav/HomeNav'
import HomeView from '../Home-loggedOut/HomeView/HomeView'
import HomeFooter from '../Home-loggedOut/HomeFooter/HomeFooter'
import Frame from "../../assets/Frame.svg"
import FooterMain from '../Footer/FooterMain'
import NavbarLogedin from '../NavBar/NavbarLogedin'


function LoggedinMain() {
  return (
    <div className='relative'>

             <div className='container mx-auto px-4 bg-white text-black'>

                <NavbarLogedin />
                <HomeNav />
                <hr />
                <HomeView />
                <HomeFooter />
                <FooterMain />

            </div>


                      {/* show map button */}
       <div className='absolute translate-x-[600px] translate-y-[-70px] bg-black text-white h-[40px] w-[100px] content-center rounded-[20px]' >
        <p className='flex justify-center'>Show map <img src={Frame} alt=""/>
        </p>
        </div>

    </div>
  )
}

export default LoggedinMain