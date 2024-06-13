// import React from 'react'
import left from "../../assets/chevron-left.svg"
import profileIcon from "../../assets/Union.svg"
import ButtonTwo from '../Button/ButtonTwo'
import download from "../../assets/Icon.svg"
import facebook from "../../assets/facebookRound.svg"
import { Link } from "react-router-dom";

function CreateProfileFive() {
  return (
    <div className='container mx-auto px-4  bg-white text-black h-[800px] w-[700px] relative'>

         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'>
         
            <Link to="/create-profile-four"> <img src={left} alt="" /></Link>
            <p className='font-bold text-black'>Create your profile</p>
         </div>


         <p className='flex justify-center pt-[30px] text-sm font-bold'>Step 2 of 2</p>

         <p className='flex justify-center pt-[10px] font-bold text-2xl'>Add a profile photo</p>

         <p className='flex justify-center pt-[10px] text-sm'>Pick an image that shows your face. Hosts won't be able to</p>

         <p className='flex justify-center pt-[3px] text-sm'>see your profile photo until your reservation is confimed</p>


         <div className='flex justify-center pt-[30px] mb-[80px]'><img src={profileIcon} alt="" /></div>




         <Link to="/create-profile-six"> <ButtonTwo btnText='Continue'/> </Link>



         <p className='bg-black absolute translate-x-[20px] translate-y-[-40px]'><img src={download} alt="" /></p>


         <div className='h-[60px] w-[650px] border-[3px] border-solid border-black rounded-[20px] flex items-center justify-center bg-white text-black mt-[20px]'>
            <p>Use facebook photo</p>
         </div>

         <p className='absolute translate-x-[20px] translate-y-[-40px]'><img src={facebook} alt="" /></p>


         <div className='h-[60px] w-[650px] flex items-center justify-center bg-white text-black mt-[20px]'>
            <p className='underline decoration-solid font-bold'>I'll do this later</p>
         </div>

         


    </div>
  )
}

export default CreateProfileFive