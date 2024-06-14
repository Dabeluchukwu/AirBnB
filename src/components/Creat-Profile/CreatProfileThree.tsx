// import React from 'react'
import left from "../../assets/chevron-left.svg"
import DownIcon from "../../assets/Icon and link.svg"
import ButtonTwo from '../Button/ButtonTwo'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


function CreatProfileThree() {
  useEffect(()=> {
    AOS.init({ duration: 2000,
      once: false
     });
   }, []);
  return (
    <div className='container mx-auto px-4  bg-white text-black h-[800px] w-[700px]'>
   
         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'data-aos="fade-down">
            <Link to="/create-profile-two"><img src={left} alt="" /></Link>
            <p className='font-bold text-black'data-aos="fade-down">Create your profile</p>
         </div>

         <p className='flex justify-center pt-[30px] text-sm font-bold'data-aos="fade-down">Step 1 of 2</p>

         <p className='flex justify-center pt-[10px] font-bold text-2xl'data-aos="fade-down">Confirm your phone number</p>

         <p className='flex justify-center pt-[10px] mb-[40px]'data-aos="fade-down">This is so your Hosts, guests, or Airbnb can reach you.</p>



         <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] rounded-tr-[20px] rounded-tl-[20px]'data-aos="fade-down">
            <p className='text-sm text-slate-400'>Country/Region</p>
            <div className='flex justify-between'>
              <p>United Kingdom (+44)</p>
              <img src={DownIcon}/>
            </div>
          </div>

          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] border-t-[0] rounded-br-[20px] rounded-bl-[20px] flex items-center'data-aos="fade-down">
            <p className='text-slate-400'>Phone Number</p>
          </div>

          <p className='pt-[10px]'data-aos="fade-down">We'll call or text you to confirm your number. Standard message and data rates apply.</p>

          <hr className='border-[2px] border-solid mt-[20px]'data-aos="fade-down"/>

          <div className='pt-[20px] flex gap-[20px]'data-aos="fade-down">
            <form action="">
                <input type="checkbox"  className='h-[20px] w-[20px]'/>
            </form>

            <p className='pb-[40px]'data-aos="fade-down">Text me a link to the free Airbnb app</p>
          </div>

          <Link to="/create-profile-four"> <ButtonTwo btnText='Continue'/> </Link>
         
         <div><p className='underline decoration-solid pt-[20px] flex justify-center font-bold'data-aos="fade-down">I'll do this later</p></div>

    </div>
  )
}

export default CreatProfileThree