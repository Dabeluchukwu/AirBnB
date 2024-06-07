import { UserSearchIcon } from 'lucide-react'
import React from 'react'


function Dropdown() {
  return (
 <div className='flex justify-center'>
    <details className="dropdown">
  <summary className="btn shadow-[none] bg-white border-none text-black rounded-[0px]">
    
    {/* menu icon */}
    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
    </svg>
    
    {/* profile icon */}
    <div className=''>
    <UserSearchIcon />
    </div>
  </summary>
    
  <div className="p-[20px] gap-[10px] shadow menu dropdown-content z-[1] rounded-box w-52 bg-white ">
    <p><a href=''>Sign up</a></p>
    <p><a href=''>Log in</a></p>
    <hr />
    <p><a href="">Airbnb your home</a></p>
    <p><a href="">Help center</a></p>
  </div>
</details>


   

 </div>

  )
}

export default Dropdown