import { UserSearchIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function Dropdown() {
  return (
 <div className='flex justify-center'>
    <details className="dropdown">
  <summary className="btn bg-white hover:bg-white border-solid border-[3px] border-zinc-300 text-black rounded-[20px]">
    
    {/* menu icon */}
    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
    </svg> 

    {/* profile icon */}
    <div>
    <UserSearchIcon />
    </div>
  </summary>
  
    
  <div className="p-[20px] gap-[10px] shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
      <Link to="/signup">Sign up</Link>
      <Link to="/signup">Log in</Link> 
    <hr />
    <Link to="/signup">Airbnb your home</Link>
    <Link to="/signup">Help center</Link>
  </div> 
</details>


    

 </div>

  )
}

export default Dropdown