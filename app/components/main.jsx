import React from "react";
import Link from "next/link";

import "../globals.css";

const main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(/images/herobg.png)` }}
    >
      {/* <div className="w-full h-96 absolute bottom-0 left-0 z-10">
        <iframe
          src="https://my.spline.design/3dpathslines1copy-aad7b11dec196a4121d5452cddf6b7d4/"
          width="100%"
          height="100%"
          allowtransparency="true"
        ></iframe>
      </div> */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center z-20 relative">
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
