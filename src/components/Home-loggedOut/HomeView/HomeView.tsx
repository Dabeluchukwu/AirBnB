import imageOne from "../../../assets/airbnb images/IMG-1.jpeg"
import imageTwo from "../../../assets/airbnb images/IMG-2.jpg"
import imageThree from "../../../assets/airbnb images/IMG-3.jpeg"
import imageFour from "../../../assets/airbnb images/IMG-4.jpg"
import imageFive from "../../../assets/airbnb images/IMG-5.jpeg"
import imageSix from "../../../assets/airbnb images/IMG-6.jpg"
import imageSeven from "../../../assets/airbnb images/IMG-7.jpg"
import imageEight from "../../../assets/airbnb images/IMG-8.jpeg"
import imageNine from "../../../assets/airbnb images/IMG-9.jpg"
import imageTen from "../../../assets/airbnb images/IMG-10.jpg"
import imageEleven from "../../../assets/airbnb images/IMG-11.jpg"
import imageTwelve from "../../../assets/airbnb images/IMG12.jpeg"
import imageThirteen from "../../../assets/airbnb images/IMG-13.jpg"
import imageFourteen from "../../../assets/airbnb images/IMG-14.jpg"
import imageFiveteen from "../../../assets/airbnb images/IMG-15.jpeg"
import imageSixteen from "../../../assets/airbnb images/IMG-16.jpeg"
import imageSeventeen from "../../../assets/airbnb images/IMG-17.jpg"
import imageEighteen from "../../../assets/airbnb images/IMG-18.jpg"
import imageNineteen from "../../../assets/airbnb images/IMG-19.jpg"
import imageTwenty from "../../../assets/airbnb images/IMG-20.jpg"
import StarIcon from "../../../assets/Ratings.svg"
import LoveIcon from "../../../assets/Like icon.svg"
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination,Autoplay, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";


function HomeView() {
  useEffect(()=> {
    AOS.init({ duration: 2000,
      once: false
     });
   }, []);
  const HomeImage = [
    {
      img : imageOne ,
      imgg : imageFour,
      imggg : imageNine,
      imgggg :imageEight ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img : imageTwo ,
      imgg : imageSeven ,
      imggg :imageTen ,
      imgggg : imageThree,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img : imageThree  ,
      imgg :imageEighteen ,
      imggg : imageEight,
      imgggg : imageFiveteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageFour,
      imgg : imageNine ,
      imggg :imageSeven ,
      imgggg : imageOne,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageFive,
      imgg : imageEight,
      imggg : imageNine,
      imgggg :imageFive ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageSix,
      imgg : imageEight,
      imggg :imageFiveteen ,
      imgggg :imageTwenty ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageSeven,
      imgg : imageFour ,
      imggg : imageNine,
      imgggg : imageFourteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageEight,
      imgg : imageFour,
      imggg : imageNine,
      imgggg :imageEight ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageNine,
      imgg : imageFour ,
      imggg : imageNine,
      imgggg : imageFourteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageTen,
      imgg :imageEighteen ,
      imggg : imageEight,
      imgggg : imageFiveteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageEleven,
      imgg : imageFour,
      imggg : imageNine,
      imgggg :imageEight ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageTwelve,
      imgg : imageNine ,
      imggg :imageSeven ,
      imgggg : imageOne,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageThirteen,
      imgg : imageSeven ,
      imggg :imageTen ,
      imgggg : imageThree,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageFourteen,
      imgg : imageFive,
      imggg : imageFour,
      imgggg : imageNineteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageFiveteen,
      imgg : imageEight,
      imggg : imageNine,
      imgggg :imageFive ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageSixteen,
      imgg : imageSeventeen,
      imggg : imageEight,
      imgggg :imageEleven ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageSeventeen,
      imgg : imageNine ,
      imggg :imageSeven ,
      imgggg : imageOne,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageEighteen,
      imgg : imageFour ,
      imggg : imageNine,
      imgggg : imageFourteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageNineteen,
      imgg : imageEight,
      imggg :imageFiveteen ,
      imgggg :imageTwenty ,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    },
    {
      img :  imageTwenty,
      imgg :imageEighteen ,
      imggg : imageEight,
      imgggg : imageFiveteen,
      alt : "airBnB Images",
      title : "Half Moon Bay, California, US",
      description : "Beach and Ocean views",
      date : "22-27 Oct . Individual Host",
      rating : "5.0",
      price : "$1,634 total"

    }

  ]
  return (
    <div className='grid grid-cols-4 gap-[50px] justify-center'>
        
         {HomeImage.map((items, i) => (
          <div key={i}>

            {/* z-10 is for making the LoveIcon to show */}
            <div className='relative'><img src={LoveIcon} className='absolute pt-[20px] pl-[200px] z-10' />

            <Swiper
            modules={[Navigation, Pagination, Scrollbar,Autoplay]} 
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={() => console.log(Swiper)}
            pagination= {{clickable:true}}
            scrollbar= {{draggable:true}}
            autoplay= {{delay:1000}}

            >

  <SwiperSlide> <img src={items.img} alt={items.alt} className='h-[250px] w-[250px] rounded-[10px] ' data-aos="fade-down" /> </SwiperSlide>
  <SwiperSlide> <img src={items.imgg} alt={items.alt} className='h-[250px] w-[250px] rounded-[10px] ' data-aos="fade-down" /> </SwiperSlide>
  <SwiperSlide> <img src={items.imggg} alt={items.alt} className='h-[250px] w-[250px] rounded-[10px] ' data-aos="fade-down" /> </SwiperSlide>
  <SwiperSlide> <img src={items.imgggg} alt={items.alt} className='h-[250px] w-[250px] rounded-[10px] ' data-aos="fade-down" /> </SwiperSlide>


            </Swiper>
            
            </div>
            <p className='pl-[200px] font-bold flex' data-aos="fade-right"><img src={StarIcon}  />{items.rating}</p>
            <p className='font-bold'data-aos="fade-up">{items.title}</p>
            <p data-aos="fade-down">{items.description}</p>
            <p data-aos="fade-up">{items.date}</p>
            <p className='underline decoration-solid' data-aos="fade-down">{items.price}</p>
           
          </div>
         ))}

    </div>
  )
}

export default HomeView