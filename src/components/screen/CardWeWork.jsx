import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
      name: `Software Testing`,
      url:`/painter`
    },
    {
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTqIrvgbAP4kFd6Vjfe4IwSEt1N0QavTqWZo_9iijFTkLdgPLIYHx-8_ceL1wOCHzlhc&usqp=CAU`,
        name: `Web Development`,
      url:`/sofa`
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FXVeXoG8CGEqTTVn9ZmDQQWWavi46x0KYw&s`,
      name: `App Development`,
      url:`/carpenter`
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbg64-Y-dhzAAN-6flieyn99SU9_tMfcNWnA&s`,
      name: `AI/ML`,
       url:`/painter`
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
        
      };
  return (
    <div>
         <section className=" w-full md:w-2/3 flex flex-col mx-auto py-20 ">
        <div className="  text-5xl font-semibold r">
          <h1 className=' text-orange-600'>Our Services</h1>
        </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="  py-10">
              <div className="  rounded-xl md:w-[300px] w-full flex justify-center items-center">
                <img src={d.img} className=" w-full h-[300px]  rounded-xl" />
              </div>
              <div className=" mt-2 ">
                <p className=" text-lg font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  )
}

export default CardWeWork