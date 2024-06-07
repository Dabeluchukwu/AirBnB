import { GlobeIcon, MenuIcon, SearchIcon, UserSearchIcon } from 'lucide-react'
import React from 'react'
import Dropdown from '../Hamburger/Dropdown'

function NavBar() {
  return (
    <div className='flex justify-between h-[50px] w-full pt-[10px] pb-[50px]'>

           <div><p className='text-red-400 text-3xl'>airbnb</p></div>

            <div className='flex justify-center pt-[5px] gap-[10px] h-[40px] w-[350px] rounded-[30px] border-solid border-2 border-black '>
                <div className='border-r-[2px]  border-black'><p>Anywhere</p></div>
                <div className='border-r-[2px]  border-black'><p>Any week</p></div>
                <div>
                    <form action="">
                        <label htmlFor="">
                            <input type="text" className='w-[100px] border-solid border-2 rounded-[20px] bg-white'placeholder='Add guests' />
                        </label>
                    </form>
                    
                </div>
                <div className='h-[full] w-[full] rounded-[50px] bg-red-400'><SearchIcon /></div>
            </div>

            <div className='flex gap-[10px] pt-[10px]'>
              <p className=''>Airbnb your home </p>
              <div><GlobeIcon /></div>
            </div>

          <Dropdown />
       
    </div>
    
  )
}

export default NavBar