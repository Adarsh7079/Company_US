import React, { useEffect, useState } from "react";
import { CardWeWork, RunningText } from "../index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from "react-countup";

const MainScreen = () => {
  const [show, setShow] = useState(false);
  
  const [text] = useTypewriter({
    words: ["Web Development", "App Development", "Personal Branding"],
    loop: {},
  });

  return (
    <div>
      <div className='flex h-10 justify-between items-center px-4 sm:px-10 mt-5'>
        <div>
          <img src="./logo.svg" alt="Logo" className='w-32 sm:w-52 flex items-center' />
        </div>
        <div className='flex gap-3 sm:gap-7'>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Values</a>
          <a onClick={() => setShow(!show)} href="#">Contacts</a>
        </div>
      </div>
      <div className="mt-20">
        {/* Section 1 */}
        <section className="h-[400px] text-white">
          <div className="flex">
            <div className="px-4 sm:px-10 w-full sm:w-2/3">
              <h1 className="text-3xl sm:text-8xl md:text-5xl">
                We’re ready to share our deepest expertise <br /> in 
                <span className="mx-2 sm:mx-5 text-2xl sm:text-7xl" style={{ fontWeight: 'bold', color: 'red' }}>{text}</span>
                <span className="text-2xl sm:text-7xl" style={{ color: "red" }}>
                  <Cursor />
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-5/6  flex mx-auto">
          <div className="text-lg sm:text-[42px] w-full sm:w-[80%] leading-relaxed sm:leading-[75px]">
            MediaSoft Solutions is a software development company that provides
            full cycle of product development from scratch.
          </div>
        </section>

        {/* Section 4 */}
        <section className="w-5/6 mt-10 sm:mt-28 flex flex-col sm:flex-row mx-auto">
          <div className="w-full sm:w-1/2 text-xl sm:text-3xl leading-relaxed sm:leading-[45px]">
            Check out our Services to learn more about what we can do for you.
          </div>
          <div className="w-full sm:w-1/2 flex flex-wrap gap-10 sm:gap-20 justify-between mt-10 sm:mt-0">
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp start={0} end={100} duration={3} className="text-orange-600" />+ Projects
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                completed for various businesses from e-commerce, retail, travel, and insurance
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp start={0} end={10} duration={3} className="text-orange-600" />+ Awards
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                from various exhibitions and conferences
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp start={0} end={100} duration={3} className="text-orange-600" />+ 
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                highly experienced professionals
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp start={0} end={3} duration={3} className="text-orange-600" />+ Years
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                of expertise
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp start={0} end={50} duration={3} className="text-orange-600" />+ 
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                delighted customers
              </p>
            </div>
          </div>
        </section>

        <section className="w-5/6 mt-10 sm:mt-28 flex flex-col mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-[72px] font-bold">Our Expertise</h1>
            <h1 className=" mt-10 text-lg sm:text-xl text-orange-600 font-semibold">What they have to say about us</h1>
          </div>
          <div className="flex flex-wrap justify-between mt-10 sm:mt-20">
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">01</h1>
                <img src="./expertise-1.svg" alt="" className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[80px]" />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Design</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">Corporate Branding</p>
                  <p className="cursor-pointer hover:text-orange-600">Infographics Design</p>
                  <p className="cursor-pointer hover:text-orange-600">Logo Design</p>
                  <p className="cursor-pointer hover:text-orange-600">PPT Design</p>
                  <p className="cursor-pointer hover:text-orange-600">UI/UX Design</p>
                  <p className="cursor-pointer hover:text-orange-600">Web Design</p>
                  <p className="cursor-pointer hover:text-orange-600">App Design</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">02</h1>
                <img src="./expertise-2.svg" alt="" className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[100px]" />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Development</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">Ecommerce Development</p>
                  <p className="cursor-pointer hover:text-orange-600">Testing and Quality Assurance</p>
                  <p className="cursor-pointer hover:text-orange-600">Website Development</p>
                  <p className="cursor-pointer hover:text-orange-600">WordPress Development</p>
                  <p className="cursor-pointer hover:text-orange-600">Android Mobile App Development</p>
                  <p className="cursor-pointer hover:text-orange-600">iOS Mobile App Development</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">03</h1>
                <img src="./expertise-3.svg" alt="" className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[210px] mx-auto sm:mx-[120px]" />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Marketing</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">Local SEO</p>
                  <p className="cursor-pointer hover:text-orange-600">SEO Audit</p>
                  <p className="cursor-pointer hover:text-orange-600">SEO Outsourcing</p>
                  <p className="cursor-pointer hover:text-orange-600">PPC Marketing</p>
                  <p className="cursor-pointer hover:text-orange-600">Content Marketing</p>
                  <p className="cursor-pointer hover:text-orange-600">Social Media Marketing</p>
                  <p className="cursor-pointer hover:text-orange-600">SEO Services</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">04</h1>
                <img src="./expertise-4.svg" alt="" className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[80px]" />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Infrastructure & AI</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">Artificial Intelligence</p>
                  <p className="cursor-pointer hover:text-orange-600">Cloud Computing</p>
                  <p className="cursor-pointer hover:text-orange-600">Data Warehouse</p>
                  <p className="cursor-pointer hover:text-orange-600">Business Intelligence</p>
                  <p className="cursor-pointer hover:text-orange-600">Data Center Consulting</p>
                  <p className="cursor-pointer hover:text-orange-600">Resource Augmentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <CardWeWork />
        </section>
        <section className="bg-gray-600 w-full h-full">
          {show && <div className="bg-red-900 text-5xl sm:text-[10rem]">adasd</div>}
        </section>
      </div>
    </div>
  );
};

export default MainScreen;
