import { FacebookIcon, GlobeIcon, InstagramIcon, PoundSterlingIcon, TwitchIcon } from 'lucide-react'
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Frame from "../../../assets/Frame.svg"
import FbIcon from "../../../assets/Facebook.svg"
import TwIcon from "../../../assets/Twitter.svg"
import IgIcon from "../../../assets/Instagram.svg"


function FooterThree() {
  useEffect(()=> {
    AOS.init({ duration: 2000,
      once: false
     });
   }, []);
  return (
    <div className='relative flex justify-between border-t-[3px] border-black p-[10px]'>

      <div className='flex gap-[10px]'  data-aos="fade-left">
          <p>@2023 Airbnb, Inc</p>
          <div className=' list-disc flex gap-[10px]'>
           <li><a href="">Privacy</a></li>
           <li><a href="">Terms</a></li>
           <li><a href="">Sitemap</a></li>
           <li><a href="">UK Modern Slavery Act</a></li>
           <li><a href="">Company details</a></li>
          </div>
      </div>
       


       <div className='flex gap-[10px] justify-center font-bold'  data-aos="fade-right">
            <GlobeIcon />
            <p>English(GB)</p>
            <p><PoundSterlingIcon  className='h-[20px]'/></p>
            <p>GBP</p>
            <p><img src={FbIcon} alt="" /></p>
            <p><img src={TwIcon} alt="" /></p>
            <p><img src={IgIcon} alt="" /></p>
       </div>



    </div>
  )
}

export default FooterThree