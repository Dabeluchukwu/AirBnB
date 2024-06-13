import React from 'react'
import frame from "../../assets/FrameSmall.svg"
import { Link } from "react-router-dom";

function DropdownLogedin() {
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
        <img src={frame} alt="" />
    </div>
  </summary>
  
    
  <div className="p-[20px] gap-[10px] shadow menu dropdown-content z-[1] rounded-box w-52 bg-white text-black">
    <p><a href=''>Messages</a></p>
    <p><a href=''>Trips</a></p>
    <p><a href=''>Whislist</a></p>
    <hr />
    <p><a href="">Manage listings</a></p>
    <p><a href="">Accounts</a></p>
    <hr />
    <p><a href="">Help centre</a></p>
    <Link to="/"> Log out </Link>
  </div>
</details>


    

 </div>

  )
}

export default DropdownLogedin