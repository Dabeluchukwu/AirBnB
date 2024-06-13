import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomeFooter() {
  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);
  return (
    <div className='flex justify-center' >
      <div className='h-[150px] w-[full] content-center'>
        <div className='items-center font-bold'>
        <p  data-aos="fade-down">Continue enjoying amazing views</p>
        </div>
        <div className='flex justify-center'>
        <button className='bg-black text-white h-[50px] w-[150px] rounded-[10px]'  data-aos="fade-up">Show more</button>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter