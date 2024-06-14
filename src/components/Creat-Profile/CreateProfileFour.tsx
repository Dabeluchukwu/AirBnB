// import React from 'react'
import left from "../../assets/chevron-left.svg"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function CreateProfileFour() {
  useEffect(()=> {
    AOS.init({ duration: 2000,
      once: false
     });
   }, []);
  return (
    <div className='container mx-auto px-4  bg-white text-black h-[800px] w-[700px]'>


         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'data-aos="fade-down">
         
            <Link to="/create-profile-three"> <img src={left} alt="" /> </Link>
            <p className='font-bold text-black'>Create your profile</p>
         </div>

         <p className='flex justify-center pt-[30px] text-sm font-bold'data-aos="fade-down">Step 1 of 2</p>

         <p className='flex justify-center pt-[10px] font-bold text-2xl'data-aos="fade-down">Confirm your phone number</p>

         <p className='flex justify-center pt-[10px] text-sm'data-aos="fade-down">Enter the 4-digit Airbnb just code to +44 1234 567890 </p>


       <div className='flex justify-center mt-[20px]'data-aos="fade-down">
         <div className='h-[50px] w-[150px] flex gap-[20px] border-[3px] items-center justify-center rounded-[20px]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
         </div>
       </div>

       <div className='flex justify-center'>

       <Link to="/create-profile-five"> 
       <p className='flex justify-center mt-[20px] h-[50px] w-[100px] border-[3px] items-center rounded-[20px] bg-black text-white'data-aos="fade-down">Continue</p>
        </Link>
       </div>

       <div className='flex justify-center gap-[10px]'>
        <p className=''data-aos="fade-down">Didn't get a text?</p>
        <p className='underline decoration-solid font-bold'data-aos="fade-down">Send again</p>
       </div>

       <p className='flex justify-center pt-[30px] text-sm font-bold underline decoration-solid'data-aos="fade-down">Call me instead</p>


       <p className='flex justify-center pt-[30px] text-sm font-bold underline decoration-solid'data-aos="fade-down">I'll do this later</p>

       


    </div>
  )
}

export default CreateProfileFour