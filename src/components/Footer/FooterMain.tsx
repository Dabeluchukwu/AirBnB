import React from 'react'
import FooterOne from './FooterOne/FooterOne'
import FooterTwo from './FooterTwo.tsx/FooterTwo'
import FooterThree from './FooterThree/FooterThree'

function FooterMain() {
  return (
    <div>
        <FooterOne />
        <hr />
        <FooterTwo />
        <hr />
        <FooterThree />
    </div>
  )
}

export default FooterMain