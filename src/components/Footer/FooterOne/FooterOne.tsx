import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function FooterOne() {
    useEffect(()=> {
        AOS.init({ duration: 2000,
          once: false
         });
       }, []);
    const Places = [
        {
            place : "Aberfeldy",
            view : "Holiday rentals"
        },
        {
            place : "Aberfeldy",
            view : "Flat rentals"
        },
        {
            place : "Aberfeldy",
            view : "Villa rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Holiday rentals"
        },
        {
            place : "Aberfeldy",
            view : "Cottage rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Villa rentals"
        },
        {
            place : "Aberfeldy",
            view : "Cottage rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Villa rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Cottage rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Villa rentals"
        },
        {
            place : "Aberfeldy",
            view : "House rentals"
        },
        {
            place : "Aberfeldy",
            view : "Cottage rentals"
        },
    ]
  return (
    <div className='h-[400px] w-[full] bg-zinc-100 shadow  border-t-[3px] border-black'>

        <div className='font-bold text-2xl' data-aos="fade-down">Inspiration for future getways</div>

        <div className='flex gap-[40px] pt-[20px] font-bold text-slate-500 border-b-[3px] border-black w-[67%]' data-aos="fade-up">
            <h1>Popular</h1>
            <h1>Historic</h1>
            <h1>Coastal</h1>
            <h1>Islands</h1>
            <h1>Lakes</h1>
            <h1>Unique stays</h1>
            <h1>Categories</h1>
            <h1>Things to do</h1>
        </div>
        
        

        <div className='flex flex-wrap gap-x-[100px] gap-y-[50px] pt-[20px]'>
             {Places.map((items, index) => (
             
               <div key={index}>
                   <div className=''>
                      <div className='font-bold' data-aos="fade-right">{items.place}</div>
                      <div className=' text-slate-500' data-aos="fade-left">{items.view}</div>
                    </div>
               </div>

             ))}
           
        </div>
    </div>
  )
}

export default FooterOne