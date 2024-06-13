// import React from 'react'

interface myBtn{
    btnText : string
}



function ButtonTwo({btnText} : myBtn) {
  return (
    <div className='h-[60px] w-[650px] border-[3px] border-solid rounded-[20px] flex items-center justify-center bg-black text-white'>
    <p>{btnText}</p>
  </div>
  )
}

export default ButtonTwo