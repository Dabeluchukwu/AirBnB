// import React from 'react'
import { Link } from 'react-router-dom'
import left from "../../assets/chevron-left.svg"
import { useState } from 'react';
import ButtonOne from '../Button/ButtonOne';

function FinishSigninOne() {
    //   this two useState is for password input form, to toogle visibility
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);}
    
   





  return (
    <div className='container mx-auto px-4 bg-white text-slate-400 h-[800px] w-[700px]'>

         <div className='h-[50px] w-[full] flex gap-[250px] border-b-[3px] items-center'>

        
         {/* <Link to="/login"> <img src={left} alt="" /> </Link> */}
            <p className='font-bold text-black'>Finish signing up</p>
         </div>


         <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] rounded-tr-[20px] rounded-tl-[20px] mt-[20px] flex items-center'>
            <form action="">
                <label htmlFor="">
                    <input type="text"
                    placeholder='First name'    className='bg-white text-black'       
                    />
                </label>
            </form>
          </div>

          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 pt-[5px] border-t-[0] rounded-br-[20px] rounded-bl-[20px] flex items-center'>
          <form action="">
                <label htmlFor="password">
                    <input type="password"
                    placeholder='Password'    className='bg-white text-black'       
                    />
                </label>
            </form> 
          </div>

          <p className='pt-[10px] text-slate-400'>Make sure it matches the name on your government ID.</p>

          
          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 rounded-[20px] flex items-center mt-[20px]'>
               <form action="">
                     <label htmlFor="Birthday">
                     <input type="Number"
                      placeholder='Birthday'    className='bg-white text-black'       
                       />
                    </label>
               </form> 
          </div>

          <p className='pt-[10px]'>To sign up, you need to be at least 18. Your birthday won't be shared with other people who use AirBnB</p>


          <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 rounded-[20px] flex items-center mt-[20px]'>
               <form action="">
                     <label htmlFor="Email">
                     <input type="Email"
                      placeholder='Email'    className='bg-white text-black'       
                       />
                    </label>
               </form> 
          </div>

          <p className='pt-[10px]'> We'll email you trip confirmation and receipts</p>


                     {/* password input form */}
                 <div>
                    <div className='h-[60px] w-[650px] border-[3px] border-solid px-4 rounded-[20px] flex items-center mt-[30px] justify-between'>
                      <input 
                        type={passwordVisible ? "text" : "password"} 
                        value={password} 
                         placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className='bg-white text-black'
                        />
                        <span className="toggle-btn" onClick={togglePasswordVisibility}>
                        {passwordVisible ? "Lock" : "Show"}
                       </span>
                    </div>
                </div>


                <div>
                    


                </div>


                <p className='pt-[10px] pb-[20px]'>By selecting <a className='font-bold text-black'>Agree and Continue</a>, i Agree to AirBnB's <a href="" className='text-blue-600 underline decoration-solid' >Terms of service</a>, <a href="" className='text-blue-600 underline decoration-solid'>Payments of Terms of service</a> and <a href="" className='text-blue-600 underline decoration-solid'>Nondiscrimination Policy</a> and acknowledge the <a href="" className='text-blue-600 underline decoration-solid'>Privacy Policy</a></p>
                 



                <Link to="/finish-signup-two"><ButtonOne btnText='Agree and continue'/> </Link>
                 


    </div>
  )
}

export default FinishSigninOne