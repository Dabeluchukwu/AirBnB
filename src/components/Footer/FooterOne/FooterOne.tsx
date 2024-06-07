import React from 'react'

function FooterOne() {
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
    <div className='h-[400px] w-[full] bg-zinc-100 rounded-[10px]'>

        <div className='font-bold text-2xl'>Inspiration for future getways</div>

        <div className='flex gap-[40px] pt-[20px] font-bold text-slate-500'>
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
                      <div className='font-bold'>{items.place}</div>
                      <div className=' text-slate-500'>{items.view}</div>
                    </div>
               </div>

             ))}
           
        </div>
    </div>
  )
}

export default FooterOne