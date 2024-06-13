import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function FooterTwo() {
    useEffect(()=> {
        AOS.init({ duration: 2000,
          once: false
         });
       }, []);
         
     const others = [
             {
                title : "Support",
                description : [
                    {word : "Help centre", wordUrl : ""},
                    {word : "Airbnbyour home", wordUrl : ""},
                    {word : "Newsroom", wordUrl : ""},
                    {word : "AirCover", wordUrl : ""},
                    {word : "AirCover for hosts", wordUrl : ""},
                    {word : "New features", wordUrl : ""}

                ]
             },
             {
                title : "Hosting",
                description : [
                    {word : "Anti-discrimination", wordUrl : ""},
                    {word : "Hosting resources", wordUrl : ""},
                    {word : "Careers", wordUrl : ""},
                    {word : "Disability Support", wordUrl : ""},
                    {word : "Community forum", wordUrl : ""},

                ]
             },
             {
                title : "Airbnb",
                description : [
                    {word : "Cancellation options", wordUrl : ""},
                    {word : "Hosting responsibly", wordUrl : ""},
                    {word : "Gift cards", wordUrl : ""},
                    {word : "Report neighbourhood concern", wordUrl : ""},
                    {word : "Invenstors", wordUrl : ""},
                    {word : "Airbnb emergency stays", wordUrl : ""}

                ]
             },
     ]

  return (
    <div className='flex justify-between pt-[20px]  bg-zinc-100 shadow pb-[20px]  border-t-[3px] border-black w-[full]'>
        {others.map((items, i) => (

            <div key={i}>
                <p className='pb-[10px] font-bold' data-aos="fade-right">{items.title}</p>
                <div className='flex flex-col gap-[10px]  text-slate-500' data-aos="fade-left">
                    {items.description.map((item) => (
                        <a href={item.wordUrl}>{item.word}</a>

                    ))}
                </div>

            </div>

        ))}
        
    </div>
  )
}

export default FooterTwo