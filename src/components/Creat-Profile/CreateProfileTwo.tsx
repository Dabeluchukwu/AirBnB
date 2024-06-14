// import React from 'react'
import airbnb from "../../assets/airbnb logo.svg"
import ButtonTwo from '../Button/ButtonTwo'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function CreateProfileTwo() {
  useEffect(()=> {
    AOS.init({ duration: 2000,
      once: false
     });
   }, []);
  return (
    <div  className='container mx-auto  bg-white text-black h-[800px] w-[700px]'data-aos="fade-down">

         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'data-aos="fade-down">
          
         <Link to="/create-profile-one"> X </Link>
            <p className='font-bold text-black'data-aos="fade-down">Create your profile</p>
         </div>


         <div className='flex justify-center pt-[40px]'data-aos="fade-down"><img src={airbnb} alt="" /></div>
         
         <p className='flex justify-center pt-[10px] font-bold text-2xl'data-aos="fade-down">Welcom to Airbnb</p>

         <p className='flex justify-center pt-[10px]'data-aos="fade-down">Discover places to stay and unique experiences around the</p> <p className='flex justify-center pt-[3px]'> world.</p>

         <div className='px-4 pt-[20px]'>

         <Link to="/create-profile-three"> <ButtonTwo btnText='Continue'data-aos="fade-down"/> </Link> 

         </div>

    

    </div>
  )
}

export default CreateProfileTwo