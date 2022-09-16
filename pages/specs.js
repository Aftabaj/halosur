import React from "react";
import Image from "next/image";
const specs = () => {
  return (
    <div className="bg-[#110e11] py-12 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">
          Minimum Specification
          <span className="text-[#08f8ff] p-2  text-4xl">▪</span>
        </h2>
        <p className="text-[#979799] md:text-center pt-2 ">
          lacina nasetur amet enim , augue. sodakes sem  rhincus
          ultrices cras curcus pharaetra morbi.
        </p>
        <div className="mx-auto pt-10 md:pt-24">
        <Image
              className=""
              src="/hulu(1).jpg"
              alt="logo"
              width={1280}
              height={560}
            />
        </div>
        <div className="bg-[#15161c] px-4 md:px-12 ">
            <ul className="flex justify-between items-center space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl"> processor</li>
                <li className="text-[#979799] text-sm "> intel i5-4590/AMD Ryzen 5 1500X or greater</li>

            </ul>
            <ul className="flex justify-between items-center  space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl"> Graphics Card</li>
                <li className="text-[#979799] text-sm "> NVDIA GTX 1060 / AMD Redeon RX 480 or greater</li>

            </ul>
            <ul className="flex justify-between items-center  space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl">Alternate Graphics Card</li>
                <li className="text-[#979799] text-sm ">  NVDIA GTX 970 / AMD Redeon R9 290 or greater</li>

            </ul>
            <ul className="flex justify-between items-center  space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl">Memory</li>
                <li className="text-[#979799] text-sm "> 8GB+ RAM</li>

            </ul>
            <ul className="flex items-center justify-between space-x-4  text-left  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl">Operating system</li>
                <li className="text-[#979799]  text-sm ">Windows 10</li>

            </ul>
            <ul className="flex justify-between items-center  space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl">USB Ports Rift</li>
                <li className="text-[#979799] text-sm "> 3x USB 3.0 Ports,Plus 1x USB 2.0 Port</li>

            </ul>
            <ul className="flex justify-between items-center  space-x-4  py-4  border-b border-[#2c2d35]">
                <li className="text-[#fcfbfe] font-light md:text-2xl">Video Output (Rift)</li>
                <li className="text-[#979799] text-right text-sm "> Complatible HDMI 1.3 Video Output</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default specs;
