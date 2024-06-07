import React from 'react'

function FooterThree() {
         
     const others = [
        {
            view: 'Support'
        },
        {
            view: 'Hosting'
        },
        {
            view: 'Airbnb'
        },
        {
            title: 'Help centre'
        },
        {
            title: 'Airbnbyour home'
        },
        {
            title: 'Newsroom'
        },
        {
            title: 'AirCover'
        },
        {
            title: 'AirCover for hosts'
        },
        {
            title: 'New features'
        },
        {
            title: 'Anti-discrimination'
        },
        {
            title: 'Hosting resources'
        },
        {
            title: 'Careers'
        },
        {
            title: 'Disability Support'
        },
        {
            title: 'Community forum'
        },
        {
            title: 'Invenstors'
        },
        {
            title: 'Cancellation options'
        },
        {
            title: 'Hosting responsibly'
        },
        {
            title: 'Gift cards'
        },
        {
            title: 'Report neighbourhood concern'
        },
        {
            title: 'Airbnb emergency stays'
        }
     ]

  return (
    <div>
        {others.map((items, index) => (
          <div key={index} className='bg-blue-300 flex'>
               <div style={{display: 'flex'}}>
                   {items.view}
               </div>
               <div>
                {items.title}
               </div>
          </div>
        ))}
    </div>
  )
}

export default FooterThree