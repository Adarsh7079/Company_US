import React, { useEffect, useState } from "react";
import { CardWeWork, RunningText } from "../index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from "react-countup";
import { IoLocationOutline, IoLocate } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const MainScreen = () => {
  const [show, setShow] = useState(false);

  const [text] = useTypewriter({
    words: ["Web Development", "App Development", "Personal Branding"],
    loop: {},
  });

  return (
    <div className="relative">
      <div className="flex h-10 justify-between items-center px-4 sm:px-10 mt-5">
        <div>
          <img
            src="./logo.svg"
            alt="Logo"
            className="w-32 sm:w-52 flex items-center"
          />
        </div>
        <div className="flex gap-3 sm:gap-7">
          <a id="first" href="">About</a>
          <a href="">Services</a>
         
          <a onClick={() => setShow(!show)} href="#">
            Contacts
          </a>
        </div>
      </div>
      <div className="mt-20">
        {/* Section 1 */}
        <section  id="first"className="h-[400px] text-white">
          <div className="flex">
            <div className="px-4 sm:px-10 w-full sm:w-2/3">
              <h1 className="text-3xl sm:text-8xl md:text-5xl">
                We’re ready to share our deepest expertise <br /> in
                <span
                  className="mx-2 sm:mx-5 text-2xl sm:text-7xl"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  {text}
                </span>
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
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  className="text-orange-600"
                />
                + Projects
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                completed for various businesses from e-commerce, retail,
                travel, and insurance
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  className="text-orange-600"
                />
                + Awards
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                from various exhibitions and conferences
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  className="text-orange-600"
                />
                +
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                highly experienced professionals
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp
                  start={0}
                  end={3}
                  duration={3}
                  className="text-orange-600"
                />
                + Years
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                of expertise
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[32px] sm:text-[55px] text-orange-600 font-semibold">
                <CountUp
                  start={0}
                  end={50}
                  duration={3}
                  className="text-orange-600"
                />
                +
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:leading-[40px]">
                delighted customers
              </p>
            </div>
          </div>
        </section>

        <section  className="w-5/6 mt-10 sm:mt-28 flex flex-col mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-[72px] font-bold">Our Expertise</h1>
            <h1 className=" mt-10 text-lg sm:text-xl text-orange-600 font-semibold">
              What they have to say about us
            </h1>
          </div>
          <div className="flex flex-wrap justify-between mt-10 sm:mt-20">
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">
                  01
                </h1>
                <img
                  src="./expertise-1.svg"
                  alt=""
                  className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[80px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Design</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">
                    Corporate Branding
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Infographics Design
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Logo Design
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    PPT Design
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    UI/UX Design
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Web Design
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    App Design
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">
                  02
                </h1>
                <img
                  src="./expertise-2.svg"
                  alt=""
                  className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[100px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Development</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">
                    Ecommerce Development
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Testing and Quality Assurance
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Website Development
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    WordPress Development
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Android Mobile App Development
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    iOS Mobile App Development
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">
                  03
                </h1>
                <img
                  src="./expertise-3.svg"
                  alt=""
                  className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[210px] mx-auto sm:mx-[120px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">Marketing</h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">
                    Local SEO
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    SEO Audit
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    SEO Outsourcing
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    PPC Marketing
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Content Marketing
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Social Media Marketing
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    SEO Services
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-col items-center sm:w-1/4 mb-10">
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[9rem] text-[#d8c7df]">
                  04
                </h1>
                <img
                  src="./expertise-4.svg"
                  alt=""
                  className="w-20 sm:w-[130px] absolute -mt-16 sm:-mt-[110px] mx-auto sm:mx-[80px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-medium text-xl sm:text-3xl">
                  Infrastructure & AI
                </h1>
                <div className="flex flex-col gap-3 sm:gap-5 text-base sm:text-lg font-semibold mt-5">
                  <p className="cursor-pointer hover:text-orange-600">
                    Artificial Intelligence
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Cloud Computing
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Data Warehouse
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Business Intelligence
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Data Center Consulting
                  </p>
                  <p className="cursor-pointer hover:text-orange-600">
                    Resource Augmentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <CardWeWork />
        </section>
      </div>
      <section className=" absolute  top-0 w-full">
        {show && (
          <div className="  w-full backdrop-blur bg-white-100 h-screen border border-white-18 shadow-glass rounded-lg ">
            <div className=" flex flex-col  mx-auto md:w-2/3 w-full bg-blue-300 border-[1px] border-gray-300 rounded-xl">
              <div
                className="  w-full px-10 py-3 text-red-500 text-5xl cursor-pointer  flex justify-end"
                onClick={() => setShow(!show)}
              >
                X
              </div>

              <div className=" px-10">
                <div className="  mt-20 flex  gap-5 justify-center flex-wrap">
                  <div className=" w-[200px] bg-white ">
                    <div className="w-full items-center justify-center flex  flex-col  gap-3 mx-auto  py-5">
                      <IoLocationOutline className="  text-5xl" />
                      <div className=" flex justify-center items-center flex-col px-5 text-center">
                        <h5 className=" uppercase font-bold  text-sm">
                          Our Main Office
                        </h5>
                        <p className=" py-3">asdasd asdasd asdasd asdads</p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[200px] bg-white ">
                    <div className="w-full items-center justify-center flex  flex-col  gap-3 mx-auto  py-5">
                      <a href="tel:+917079429676">
                        {" "}
                        <MdLocalPhone className="  text-5xl" />
                      </a>

                      <div className=" flex justify-center items-center flex-col px-5 text-center">
                        <h5 className=" uppercase font-bold  text-sm">
                          phone number
                        </h5>
                        <div className=" mt-5">
                          <a href="tel:+917079429676" className=" py-3">
                            +91-7079429676
                          </a>{" "}
                          <br />
                          <a href="tel:+917079429676" className=" ">
                            +91-7079429676
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[200px] bg-white ">
                    <div className="w-full items-center justify-center flex  flex-col  gap-3 mx-auto  py-5">
                      <a href="mailto:adarshk8271@gmail.com">
                        {" "}
                        <MdOutlineMail className="  text-5xl" />
                      </a>

                      <div className=" flex justify-center items-center flex-col px- text-center">
                        <h5 className=" uppercase font-bold  text-sm">email</h5>
                        <a
                          href="mailto:adarshk8271@gmail.com"
                          className=" py-3 px-10"
                        >
                          adarshk8271@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[200px] bg-white ">
                    <div className="w-full items-center justify-center flex  flex-col  gap-3 mx-auto  py-5">
                      <a href="">
                        {" "}
                        <FaLinkedinIn className="  text-5xl" />
                      </a>
                      <div className=" flex justify-center items-center flex-col px-5 text-center">
                        <h5 className=" uppercase font-bold  text-sm">
                          Linkedin
                        </h5>
                        <a href="" className=" py-3 underline">
                          asdasdasd
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  flex flex-wrap  gap-20 md:px-20  px-5 py-10">
                <div className=" md:w-[50%] w-full flex flex-col gap-10">
                  <h1 className=" text-white font-semibold text-4xl">
                    Contact info
                  </h1>
                  <p className=" text-white">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates nisi ad quos explicabo ipsum laborum nam aut
                    error provident, voluptatibus eveniet dolores itaque quasi,
                    ab in soluta cum expedita perferendis ipsam similique!
                  </p>
                  <div className=" w-full justify-center items-center"><img
                    src="./ss1.png"
                    alt=""
                    className=" w-[200px] h-[200px] rounded-full"
                  /></div>
                </div>
                <form action="" className=" md:w-[40%] w-full" >
                  <div className=" flex flex-col justify-center gap-10 md:px-20">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className=" border-t-0 border-l-0 border-r-0 h-[45px] outline-none sle"
                    />
                    <input
                      type="text"
                      placeholder="email"
                      className=" border-t-0 border-l-0 border-r-0 h-[45px] outline-none sle"
                    />
                    <textarea
                      name=""
                      placeholder="message..."
                      rows="5"
                      id=""
                    ></textarea>
                    <button className="  bg-[#38c43d] h-[40px] text-white w-full text-xl ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MainScreen;
