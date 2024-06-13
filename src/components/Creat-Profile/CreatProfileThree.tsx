// import React from 'react'
import left from "../../assets/chevron-left.svg"
import DownIcon from "../../assets/Icon and link.svg"
import ButtonTwo from '../Button/ButtonTwo'
import { Link } from "react-router-dom";


function CreatProfileThree() {
  return (
    <div className='container mx-auto px-4  bg-white text-black h-[800px] w-[700px]'>
   
         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center px-4'>
            <Link to="/create-profile-two"><img src={left} alt="" /></Link>
            <p className='font-bold text-black'>Create your profile</p>
         </div>

         <p className='flex justify-center pt-[30px] text-sm font-bold'>Step 1 of 2</p>

         <p className='flex justify-center pt-[10px] font-bold text-2xl'>Confirm your phone number</p>

         <p className='flex justify-center pt-[10px] mb-[40px]'>This is so your Hosts, guests, or Airbnb can reach you.</p>



         <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] rounded-tr-[20px] rounded-tl-[20px]'>
            <p className='text-sm text-slate-400'>Country/Region</p>
            <div className='flex justify-between'>
              <p>United Kingdom (+44)</p>
              <img src={DownIcon}/>
            </div>
          </div>

          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] border-t-[0] rounded-br-[20px] rounded-bl-[20px] flex items-center'>
            <p className='text-slate-400'>Phone Number</p>
          </div>

          <p className='pt-[10px]'>We'll call or text you to confirm your number. Standard message and data rates apply.</p>

          <hr className='border-[2px] border-solid mt-[20px]'/>

          <div className='pt-[20px] flex gap-[20px]'>
            <form action="">
                <input type="checkbox"  className='h-[20px] w-[20px]'/>
            </form>

            <p className='pb-[40px]'>Text me a link to the free Airbnb app</p>
          </div>

          <Link to="/create-profile-four"> <ButtonTwo btnText='Continue'/> </Link>
         
         <div><p className='underline decoration-solid pt-[20px] flex justify-center font-bold'>I'll do this later</p></div>

    </div>
  )
}

export default CreatProfileThree