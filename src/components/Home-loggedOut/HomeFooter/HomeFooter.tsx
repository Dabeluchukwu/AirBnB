import React from 'react'

function HomeFooter() {
  return (
    <div className='flex justify-center' >
      <div className='h-[150px] w-[full] content-center'>
        <div className='items-center font-bold'>
        <p>Continue enjoying amazing views</p>
        </div>
        <div className='flex justify-center'>
        <button className='bg-black text-white h-[50px] w-[150px] rounded-[10px]'>Show more</button>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter