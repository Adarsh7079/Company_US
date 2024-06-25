import React from "react";
import {CardWeWork} from "../index"

const MainScreen = () => {
  return (
    <div className=" mt-20">
      {/* Section 1 */}
      <section className="px-10 w-2/3">
        <div className=" text-8xl ">
          We’re ready to share our deepest expertice in
        </div>
      </section>

      {/* Section 2 */}
      <section className=" mx-10 mt-[12rem]">asdasd</section>

      {/* section 3 */}
      <section className=" w-5/6 mt-28 flex mx-auto ">
        <div className=" text-[52px] w-[80%] leading-[75px]">
          MediaSoft Solutions is a software development company that provides
          full cycle of a product development from the scratch.
        </div>
      </section>

      {/* Section 4 */}
      <section className=" w-5/6 mt-32 flex mx-auto ">
        <div className="  w-full flex justify-between">
          <div className=" text-3xl w-[500px] leading-[45px]">
            Check out our Services to learn more about what we can do for you.
          </div>
          <div className=" flex flex-col ">
            <div className=" flex flex-col  h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
                200+ Projects
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                completed for a number of businesses from e-commerce, retail,
                travel and insurance
              </h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
                13+ Awards
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                from various exhibitions and conferences
              </h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">80+</h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                highly experienced professionals
              </h1>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">
                10+ Years
              </h1>
              <h1 className="w-[300px] text-xl leading-[40px]">of expertise</h1>
            </div>
            <div className=" flex flex-col h-[250px]">
              <h1 className=" text-[55px] text-orange-600 font-semibold">50+</h1>
              <h1 className="w-[300px] text-xl leading-[40px]">
                delighted customers
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CardWeWork/>
      </section>
    </div>
  );
};

export default MainScreen;
