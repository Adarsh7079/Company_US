import React from "react";
import { CardWeWork } from "../index";

const MainScreen = () => {
  return (
    <div className="mt-20">
      {/* Section 1 */}
      <section className="px-4 sm:px-10 w-full sm:w-2/3">
        <div className="text-4xl sm:text-8xl">
          We’re ready to share our deepest expertise in
        </div>
      </section>

      {/* Section 2 */}
      <section className="mx-4 sm:mx-10 mt-12 sm:mt-[12rem]">asdasd</section>

      {/* Section 3 */}
      <section className="w-full sm:w-5/6 mt-16 sm:mt-28 flex mx-auto">
        <div className="text-2xl sm:text-[52px] w-full sm:w-[80%] leading-tight sm:leading-[75px]">
          MediaSoft Solutions is a software development company that provides
          full cycle of a product development from the scratch.
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full sm:w-5/6 mt-20 sm:mt-32 flex flex-col sm:flex-row mx-auto">
        <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-between">
          <div className="text-xl sm:text-3xl leading-tight sm:leading-[45px] mb-6 sm:mb-0 sm:w-[500px]">
            Check out our Services to learn more about what we can do for you.
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-6">
            <div className="flex flex-col h-auto sm:h-[250px] mb-6 sm:mb-0">
              <h1 className="text-3xl sm:text-[55px] text-orange-600 font-semibold">
                200+ Projects
              </h1>
              <h1 className="w-full sm:w-[300px] text-lg sm:text-xl leading-tight sm:leading-[40px]">
                completed for a number of businesses from e-commerce, retail,
                travel and insurance
              </h1>
            </div>
            <div className="flex flex-col h-auto sm:h-[250px] mb-6 sm:mb-0">
              <h1 className="text-3xl sm:text-[55px] text-orange-600 font-semibold">
                13+ Awards
              </h1>
              <h1 className="w-full sm:w-[300px] text-lg sm:text-xl leading-tight sm:leading-[40px]">
                from various exhibitions and conferences
              </h1>
            </div>
            <div className="flex flex-col h-auto sm:h-[250px] mb-6 sm:mb-0">
              <h1 className="text-3xl sm:text-[55px] text-orange-600 font-semibold">80+</h1>
              <h1 className="w-full sm:w-[300px] text-lg sm:text-xl leading-tight sm:leading-[40px]">
                highly experienced professionals
              </h1>
            </div>
            <div className="flex flex-col h-auto sm:h-[250px] mb-6 sm:mb-0">
              <h1 className="text-3xl sm:text-[55px] text-orange-600 font-semibold">
                10+ Years
              </h1>
              <h1 className="w-full sm:w-[300px] text-lg sm:text-xl leading-tight sm:leading-[40px]">
                of expertise
              </h1>
            </div>
            <div className="flex flex-col h-auto sm:h-[250px]">
              <h1 className="text-3xl sm:text-[55px] text-orange-600 font-semibold">50+</h1>
              <h1 className="w-full sm:w-[300px] text-lg sm:text-xl leading-tight sm:leading-[40px]">
                delighted customers
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* CardWeWork Section */}
      <section className="mt-16 sm:mt-32">
        <CardWeWork />
      </section>
    </div>
  );
};

export default MainScreen;
