import React, { useEffect } from "react";
import { CardWeWork, RunningText } from "../index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from "react-countup";

const MainScreen = () => {

 
  const [ text ] = useTypewriter({
    words: ["Web Development", "App Development", "Personal Branding"],
    loop: {},
  });
  return (
    <div className=" mt-20">
      {/* Section 1 */}
      <section className=" h-[400px] text-white">
       <div className=" flex">
       <div className="px-10 w-2/3">
          <h1 className=" text-8xl md:2xl ">
            We’re ready to share our deepest expertice <br /> in 
            <span className=" mx-5 text-7xl" style={{ fontWeight: 'bold' , color:'red'}}>{text}</span>
            <span className=" text-7xl" style={{ color: "red" }}>
              <Cursor />
            </span>
          </h1>
        </div>
        
       </div>
      </section>

    

      {/* section 3 */}
      <section className=" w-5/6 mt-28 flex mx-auto ">
        <div className=" text-[42px] w-[80%] leading-[75px]">
          MediaSoft Solutions is a software development company that provides
          full cycle of a product development from the scratch.
        </div>
      </section>

      {/* Section 4 */}
      <section className=" w-5/6 mt-28 flexco flex mx-auto ">
        <div className="  w-full flex flex-wrap  gap-20 justify-between">
          <div className=" text-3xl w-[500px] leading-[45px]">
            Check out our Services to learn more about what we can do for you.
          </div>
          <div className=" flex flex-col ">
            <div className=" flex flex-col  h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
             <CountUp
                    start={0}
                    end={100}
                    duration={3}
                className=" text-orange-600" />+  Projects
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                completed for a number of businesses from e-commerce, retail,
                travel and insurance
              </h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
              <CountUp
                    start={0}
                    end={10}
                    duration={3}
                className=" text-orange-600" />+  Awards
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                from various exhibitions and conferences
              </h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
              <CountUp
                    start={0}
                    end={100}
                    duration={3}
                className=" text-orange-600" />+ 
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                highly experienced professionals
              </h1>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
              <CountUp
                    start={0}
                    end={3}
                    duration={3}
                className=" text-orange-600" />+  Years
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">of expertise</h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
              <CountUp
                    start={0}
                    end={50}
                    duration={3}
                className=" text-orange-600" />+ 
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                delighted customers
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-5/6 mt-28 flex  flex-col mx-auto">
        <div className=" flex mx-auto flex-col">
          <h1 className=" text-[72px] font-bold flex justify-center items-center  ">
            Our Expertise
          </h1>
          <h1 className=" flex  text-orange-600 items-center font-semibold justify-center text-xl">
            What they have to say about us
          </h1>
        </div>

        <div className=" flex justify-between mt-20">
          <div className=" w-[250px]">
            <div className="relative ">
              <h1 className=" text-[9rem] text-[#d8c7df] ">01</h1>
              <img
                src="./expertise-1.svg"
                alt=""
                className=" w-[130px] -mt-[110px] mx-[80px] absolute"
              />
            </div>
            <div className="mx-5 mt-5">
              <h1 className=" font-medium text-3xl ">Design</h1>
              <div className=" flex flex-col gap-5 text-lg font-semibold mt-5">
                <p className=" cursor-pointer  hover:text-orange-600">
                  Corporate Branding
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Infographics Design
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Logo Design
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  PPT Design
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  UI/UX Design
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Web Design
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  App Design
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[250px] -mt-10">
            <div className="relative ">
              <h1 className=" text-[9rem] text-[#d8c7df]  ">02</h1>
              <img
                src="./expertise-2.svg"
                alt=""
                className=" w-[130px] -mt-[110px] mx-[100px] absolute"
              />
            </div>
            <div className="mx-5 mt-5">
              <h1 className=" font-medium text-3xl ">Development</h1>
              <div className=" flex flex-col gap-5 text-lg font-semibold mt-5">
                <p className=" cursor-pointer  hover:text-orange-600">
                  Ecommerce Development
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Testing and Quality Assurance
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Website Development
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  WordPress Development
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Android Mobile App Development
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  IOS Mobile App Development
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[250px]">
            <div className="relative ">
              <h1 className=" text-[9rem] text-[#d8c7df] mt-10 ">03</h1>
              <img
                src="./expertise-3.svg"
                alt=""
                className=" w-[130px] -mt-[210px] mx-[120px] absolute"
              />
            </div>
            <div className="mx-5 mt-5">
              <h1 className=" font-medium text-3xl ">Marketing</h1>
              <div className=" flex flex-col gap-5 text-lg font-semibold mt-5">
                <p className=" cursor-pointer  hover:text-orange-600">
                  Local SEO
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  SEO Audit
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  SEO Outsourcing
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  PPC Marketing
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Content Marketing
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Social Media Marketing
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  SEO Services
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[300px]">
            <div className="relative ">
              <h1 className=" text-[9rem] text-[#d8c7df] ">04</h1>
              <img
                src="./expertise-4.svg"
                alt=""
                className=" w-[130px] -mt-[110px] mx-[80px] absolute"
              />
            </div>
            <div className="mx-5 mt-5">
              <h1 className=" font-medium text-3xl ">Infrastructure & AI</h1>
              <div className=" flex flex-col gap-5 text-lg font-semibold mt-5">
                <p className=" cursor-pointer  hover:text-orange-600">
                  Artificial Intelligence
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Cloud Computing
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Data Warehouse
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Business Intelligence
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
                  Data Center Consulting
                </p>
                <p className=" cursor-pointer  hover:text-orange-600">
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
  );
};

export default MainScreen;
