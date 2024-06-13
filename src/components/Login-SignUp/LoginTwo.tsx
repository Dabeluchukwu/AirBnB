// import React from 'react'
import { Link } from 'react-router-dom'
import ButtonOne from '../Button/ButtonOne'
import ImgWord from '../Button/ImgWord'

function LoginTwo() {
  return (
    <div  className='container mx-auto px-4 bg-white text-black h-[700px] w-[700px] relative'>
           
           <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center'>
            
           <Link to="/signup"> X </Link>
            <p>Log in or Sign up</p>
         </div>
          <div className='h-[70px] w-[full] flex items-center font-bold text-2xl'>
            <p>Welcome to AirBnB</p>
          </div>


          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] rounded-[20px] flex items-center mb-[20px]'>
            <p className='text-slate-400'>Email</p>
          </div>

   
          <Link to="/finish-signup-one"> <ButtonOne btnText='Continue'/> </Link>

            {/* Border line */}
          <div className='w-[full] border-solid border-b-[3px] pt-[40px]'></div>

          {/* or on the border line in the middle */}
          <div className='rounded-[50px] bg-white text-black h-[25px] w-[40px] flex justify-center absolute translate-x-[310px] translate-y-[-15px]'><p>or</p></div>


          <ImgWord />







    </div>
  )
}

export default LoginTwo