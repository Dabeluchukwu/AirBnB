// import React from 'react'
import facebook from "../../assets/FacebookColored.svg"
import google from "../../assets/Google.svg"
import apple from "../../assets/Apple.svg"
import email from "../../assets/mail-01.svg"

function ImgWord() {

    const display = [
        {
          word : "Continue with Facebook",
          emoji: <img src={facebook} alt="" />
        },
        {
          word : "Continue with Google",
          emoji: <img src={google} alt="" />
        },
        {
          word : "Continue with Apple",
          emoji: <img src={apple} alt="" />
        },
        {
          word : "Continue with Email",
          emoji: <img src={email} alt="" />
        }
      ]


  return (
    <div className='pt-[30px]'>
    {display.map((items, i) => (

      <div key={i} className='h-[60px] w-[650px] border-[3px] border-solid rounded-[20px] border-black flex items-center pl-[50px] gap-[170px] mb-[20px]'>
           <div>{items.emoji}</div>
           <div>{items.word}</div>
       </div>

    ))}

</div>

  )
}

export default ImgWord