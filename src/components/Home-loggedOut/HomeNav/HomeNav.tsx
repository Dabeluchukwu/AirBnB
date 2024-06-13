import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Home, PanelsTopLeftIcon, LoaderPinwheelIcon, SnowflakeIcon, PianoIcon, SchoolIcon, AlarmSmokeIcon, WavesIcon, HandPlatterIcon, SailboatIcon, ShipIcon, TentTreeIcon, CircleChevronRight, SlidersHorizontalIcon} from 'lucide-react'

// interface Inav {
//   icon : React.FC;
//   description : string
// }

function HomeNav() {
  useEffect(()=> {
    AOS.init({ duration: 2000 });
   }, []);
  const NavBar = [
    {
      icon : <PanelsTopLeftIcon />,
      description : "Amazing Views",
    },
    {
      icon : <Home/>,
      description : "Cabins",
    },
    {
      icon : <LoaderPinwheelIcon />,
      description : "Beachfront",
    },
    {
      icon : <SnowflakeIcon />,
      description : "Skiing",
    },
    {
      icon : <PianoIcon />,
      description : "Grand pianos",
    },
    {
      icon :<SchoolIcon />, 
      description : "Mansions",
    },
    {
      icon : <AlarmSmokeIcon />,
      description : "OMG!",
    },
    {
      icon : <WavesIcon />,
      description : "Amazing Pools",
    },
    {
      icon : <HandPlatterIcon />,
      description : "Luxe",
    },
    {
      icon : <SailboatIcon />,
      description : "Boats",
    },
    {
      icon : <ShipIcon />,
      description : "Lakefront",
    },
    {
      icon : <TentTreeIcon />,
      description : "Treehouses",
    }
  ]
  return (
    <div className='flex justify-between pt-[10px] pb-[20px]' data-aos="fade-right">
       
        {NavBar.map((items, index) => (
          <div key={index}>
           <div className='flex justify-center' data-aos="fade-down">{items.icon}</div>
           <p data-aos="fade-up">{items.description}</p>
          </div>       
        ))}

      <div className='flex items-center'><CircleChevronRight/></div>
      
      <div className='flex items-center h-[full] w-[full] border-2 rounded-[10px]'>
        <div className=''><SlidersHorizontalIcon/></div>
        <p className=''>Filters</p>
      </div>



    </div>
  )
}

export default HomeNav