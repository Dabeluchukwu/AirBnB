import React from 'react'
import left from "../../assets/chevron-left.svg"
import { Link } from "react-router-dom";

function CreateProfileFour() {
  return (
    <div className='container mx-auto px-4  bg-white text-black h-[800px] w-[700px]'>


         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'>
         
            <Link to="/create-profile-three"> <img src={left} alt="" /> </Link>
            <p className='font-bold text-black'>Create your profile</p>
         </div>

         <p className='flex justify-center pt-[30px] text-sm font-bold'>Step 1 of 2</p>

         <p className='flex justify-center pt-[10px] font-bold text-2xl'>Confirm your phone number</p>

         <p className='flex justify-center pt-[10px] text-sm'>Enter the 4-digit Airbnb just code to +44 1234 567890 </p>


       <div className='flex justify-center mt-[20px]'>
         <div className='h-[50px] w-[150px] flex gap-[20px] border-[3px] items-center justify-center rounded-[20px]'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
         </div>
       </div>

       <div className='flex justify-center'>

       <Link to="/create-profile-five"> 
       <p className='flex justify-center mt-[20px] h-[50px] w-[100px] border-[3px] items-center rounded-[20px] bg-black text-white'>Continue</p>
        </Link>
       </div>

       <div className='flex justify-center gap-[10px]'>
        <p className=''>Didn't get a text?</p>
        <p className='underline decoration-solid font-bold'>Send again</p>
       </div>

       <p className='flex justify-center pt-[30px] text-sm font-bold underline decoration-solid'>Call me instead</p>


       <p className='flex justify-center pt-[30px] text-sm font-bold underline decoration-solid'>I'll do this later</p>

       


    </div>
  )
}

export default CreateProfileFour