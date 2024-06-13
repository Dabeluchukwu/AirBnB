import React from 'react'
import DownIcon from "../../assets/Icon and link.svg"
import ButtonOne from '../Button/ButtonOne'
import ImgWord from '../Button/ImgWord'
import { Link } from 'react-router-dom'

function LoginOne() {
  return (

    <div className='container mx-auto px-4 bg-white text-black h-[800px] w-[700px] relative'>

             


         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center'>

         <Link to="/"> X </Link>
            <p>Log in or Sign up</p>
         </div>
          <div className='h-[70px] w-[full] flex items-center font-bold text-2xl'>
            <p>Welcome to AirBnB</p>
          </div>
          
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

          <p className='pt-[5px] pb-[15px]'>We'll call or text you to comfirm your number. Standard message and data rates apply. <a href="" className='underline decoration-solid font-bold'>Privacy policy</a></p>

              {/* button continue */}
          <Link to="/login"> <ButtonOne btnText='Continue'/> </Link>
          


            {/* Border line */}
          <div className='w-[full] border-solid border-b-[3px] pt-[40px]'></div>

          {/* or on the border line in the middle */}
          <div className='rounded-[50px] bg-white text-black h-[25px] w-[40px] flex justify-center absolute translate-x-[310px] translate-y-[-15px]'><p>or</p></div>


          <ImgWord />

    </div>
  )
}

export default LoginOne