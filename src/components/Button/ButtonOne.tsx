// import React from 'react'


interface myBtn{
    btnText : string
}

function ButtonOne({btnText} : myBtn) {

   

  return (

          <div className='h-[60px] w-[650px] border-[3px] border-solid rounded-[20px] flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-400 text-white'>
            <p>{btnText}</p>
          </div>
  )
}

export default ButtonOne