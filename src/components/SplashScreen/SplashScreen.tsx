import React, { useEffect, useState } from "react";
import airbnb from "../../assets/airbnb logo.svg"

function SplashScreen() {
    const [showSplash, setshowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setshowSplash(false);
        }, 2000);
      }, []);
    
  return (

    <div>
        {showSplash && (
          <style>
            {`
      body{
        overflow:hidden;
      }
      `}
          </style>
        )}

        {showSplash && (
          <main className="bg-black pt-[120px] text-red-500 min-h-screen w-full fixed top-0 z-50 ">
            <p className='flex justify-center pt-[70px] animate-bounce'><img src={airbnb} alt="" className="h-[100px]" /></p>
            <p className='flex justify-center pt-[10px] font-bold text-6xl animate-bounce'>Welcom to Airbnb</p>

          </main>

        )}

    </div>
  )
}

export default SplashScreen