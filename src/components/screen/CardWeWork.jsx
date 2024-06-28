import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

const data = [
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
      name: `Priya`,
      message:`Ikokas is very good at their job and is able to make everything I desire so effortlessly. 
      My initial idea was augmented manifold thanks to this heaven-sent idea from Ikokas. Masoom and Ikokas 
      have/are working very hard to make my idea as fantastic as possible. 
      I’d promote them to anyone including Mark Zuckerberg`,
      designation:`CEO Intell`,
    
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
      name: `Priya`,
      message:`Ikokas is very good at their job and is able to make everything I desire so effortlessly. 
      My initial idea was augmented manifold thanks to this heaven-sent idea from Ikokas. Masoom and Ikokas 
      have/are working very hard to make my idea as fantastic as possible. 
      I’d promote them to anyone including Mark Zuckerberg`,
      designation:`CEO Intell`,
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
      name: `Priya`,
      message:`Ikokas is very good at their job and is able to make everything I desire so effortlessly. 
      My initial idea was augmented manifold thanks to this heaven-sent idea from Ikokas. Masoom and Ikokas 
      have/are working very hard to make my idea as fantastic as possible. 
      I’d promote them to anyone including Mark Zuckerberg`,
      designation:`CEO Intell`,
    },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
      name: `Priya`,
      message:`Ikokas is very good at their job and is able to make everything I desire so effortlessly. 
      My initial idea was augmented manifold thanks to this heaven-sent idea from Ikokas. Masoom and Ikokas 
      have/are working very hard to make my idea as fantastic as possible. 
      I’d promote them to anyone including Mark Zuckerberg`,
      designation:`CEO Intell`,
    },
   
  ];
const CardWeWork = () => {

    const settings = {
        dots: true,
        autoplay: true,
         autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
          
        
      };
  return (
    <div className=' relative'>
         <section className=" w-full md:w-2/3 flex flex-col mx-auto py-20 ">
        <div className="  text-5xl font-semibold r">
          <h1 className=' flex justify-center  mt-20'>Our Services</h1>
        </div>
        <Slider {...settings} className=' text-[72px] mt-10 py-10'>
          {data.map((d) => (
            <div className=" w-[400px]">
              <div className="  rounded-xl mt-5  w-full flex justify-center items-center">
                <img src={d.img} className=" w-[200px] h-[150px]" />
              </div>
              <div className=' mt-10 px-10 '>
                <p className=' text-xl font-light  leading-[30px]'>{d.message}</p>
              </div>
              <div className=' flex  flex-col  items-center justify-center mt-10 '>
                <p className=' text-lg font-bold '>{d.designation}</p>
                <p className=' text-lg '>{d.name}</p>
              </div>
              
            </div>
          ))}
        </Slider>
      </section>
      <section className=' fixed bottom-10'>
        <div className=' mx-5 flex flex-col gap-10'>
        <TiSocialLinkedin  className=' text-[50px]  rounded-full'/>
        <TiSocialFacebook  className=' text-[50px]'/>
        <SlSocialInstagram  className=' text-[50px]' />
        <FaXTwitter   className=' text-[50px]'/>

        </div>
      </section>
    </div>
  )
}

export default CardWeWork