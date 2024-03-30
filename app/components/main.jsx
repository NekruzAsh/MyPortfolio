import React from "react";
import Link from "next/link";

import "../globals.css";

const main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center relative"
      // style={{ backgroundImage: `url(/images/herobg.png)` }}
    >
      <iframe
        src="https://my.spline.design/theorbhand-8ae8c3c7b68060908fb34260df538c4a/"
        className="left-0 right-0 bottom-0 w-full h-full absolute z-10"
        width="100%"
        height="100%"
      ></iframe>
      <div className=" bg-[#050817] bg-opacity-70 w-full h-full mx-auto p-4 flex justify-center items-center z-20 relative">
        <div className="text-left mb-20">
          <p className="text-[#64feda] text-[22px]">Hi, my name is</p>
          <h1 className="py-4 md:text-[60px] text-[#e8ddff] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-[30px] text-[#aba6c4]">
            I'm a Software Developer from New York.
          </h1>

          <div className="flex items-center mt-8 md:mt-12">
            <a
              href="https://github.com/NekruzAsh"
              target="_blank"
              className="button text-lg"
            >
              Check out my GitHub!
            </a>
          </div>
          <div className="flex flex-col transform translate-y-[200%] md:translate-y-[270%]">
            <div className="scroll-button-wrapper">
              <a href="/#about">
                <div className="scroll-button"></div>
                <div className="scroll-txt"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
