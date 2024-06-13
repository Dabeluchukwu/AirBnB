import HomeNav from './HomeNav/HomeNav'
import HomeView from './HomeView/HomeView'
import HomeFooter from './HomeFooter/HomeFooter'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomeMain() {
  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);
  return (
    <div className='' data-aos="fade-down">

        <HomeNav />
        <HomeView />
        <HomeFooter />

    </div>
  )
}

export default HomeMain