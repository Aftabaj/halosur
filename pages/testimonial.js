import React from "react";
import Image from "next/image";
const testimonial = () => {
  return (
    <div className="bg-[#15191f] pt-12 md:pt-32">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 ">
        <div>
          <h2 className=" text-center md:text-left text-3xl md:text-5xl font-semibold text-white">
            Testimonial
            <span className="text-[#08f8ff] p-2 text-4xl">▪</span>
          </h2>
        </div>
        <div>
          <p className="text-[#979799] pt-2 text-justify px-4 md:px-0s">
            lacina nasetur amet enim , augue. sodakes sem rhincus ultrices cras
            curcus pharaetra morbi. lacina nasetur amet enim , augue. sodakes
            sem rhincus ultrices cras curcus pharaetra morbi.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:flex justify-between  md:mt-20">
        <div className="bg-[#110e11] md:w-[60vh] md:h-[30vh] h-fit w-fit mx-4 my-10">
          <p className="text-[#fffeff] px-10 py-8  text-justify font-extralight text-lg">
            lacina nasetur amet enim , augue. sodakes sem rhincus ultrices cras
            curcus pharaetra morbi. lacina nasetur amet enim , augue. sodakes
            sem rhincus ultrices cras curcus pharaetra morbi. lacina nasetur
            amet enim , augue. sodakes sem rhincus ultrices cras curcus
            pharaetra morbi. lacina nasetur amet enim
            <ul className="flex justify-between pt-4">
              <li className="text-[#868485] text-2xl font-light">
                Nezuko Kamado
              </li>
              <li className="flex text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-[#6b65a7]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
            </ul>
          </p>
        </div>
        <div className="px-4">
          <Image
            className=""
            src="/hulu(2).jpg"
            alt="logo"
            width={700}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default testimonial;
