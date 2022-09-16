import React from "react";
import Image from "next/image";
const contact = () => {
  return (
    <div className="bg-[#101012] py-16 md:py-28">
      <div className="grid md:grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="hidden md:block">
          <Image
            className=""
            src="/hulu(3).jpg"
            alt="logo"
            width={650}
            height={800}
          />
        </div>
        <div className="md:px-0 px-4">
          <h2 className=" text-center md:text-left text-4xl md:text-5xl tracking-wider font-semibold text-white">
            Contact Us
            <span className="text-[#08f8ff] p-2 text-4xl">▪</span>
          </h2>
          <p className="text-[#979799] pt-2 md:text-justify">
            lacina nasetur amet enim , augue. sodakes sem rhincus
            ultrices cras curcus pharaetra morbi. lacina nasetur.
          </p>
          
            <ul className="justify-between pt-10">
              <li className=" mb-2 w-full">
                <label
                  htmlFor="name"
                  className="leading-7 text-lg text-[#a1a0a3] flex "
                >
                  Full name
                </label>
                <input
                  className="w-full h-16  bg-[#15161c] rounded border-b border-[#6b689b]   text-base outline-none text-[#909198] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="name"
                  type="text"
                  placeholder="Name"
                  minLength="3"
                  required
                />
              </li>
            </ul>
            <div className=" my-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg text-[#a1a0a3] flex"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="developer123@gmail.com"
                id="email"
                name="email"
                required
                pattern="[^ @]*@[^ @]*"
                className="w-full h-16 bg-[#15161c] rounded border-b border-[#6b689b]   text-base outline-none text-[#909198] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="label-float my-4">
              <label
                htmlFor="message"
                className="leading-7 text-lg text-[#a1a0a3] flex"
              >
                Message
              </label>
              <textarea
                type="message"
                placeholder="Type your meesage..."
                id="message"
                name="message"
                required
                pattern="[^ @]*@[^ @]*"
                className="w-full h-60 resize-y bg-[#15161c] rounded border-b border-[#6b689b]   text-base outline-none text-[#909198] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="px-10 py-4 bg-[#675aec] text-white text-xl mt-8">
              {" "}
              Lets talk
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default contact;
