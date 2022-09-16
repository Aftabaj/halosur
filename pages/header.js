import React from "react";

const header = () => {
  return (
    <div className="">
      <div className=" max-w-screen-xl mx-auto pt-8 md:pt-12">
        <div className="flex  justify-between space-x-10 scrollbar-hide md:scrollbar-default overflow-x-auto px-4 ">

        <ul className="flex font-bold items-center">
          <li className="px-2 py-2 bg-[#675aec] text-white text-2xl">Halu</li>
          <li className="text-white  text-2xl py-1 pl-2">slur</li>
        </ul>
        <ul className="flex space-x-10 font-light relative items-center">
          <li className="text-white  font-semibold border-b-2 border-[#675aec]">
            Home
          </li>
          <li className="text-[#c2c2c4]">Product</li>
          <li className="text-[#c2c2c4]">Specification</li>
          <li className="text-[#c2c2c4]">Testimonials</li>
          <li className="text-[#c2c2c4]">Contact us</li>
        </ul>
        </div>
        
      </div>
    </div>
  );
};

export default header;
