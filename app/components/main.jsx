import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const myResume = "/images/NekruzAshrapovResume.pdf";

const main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(/images/herobg.png)` }}
    >
      <div className="w-full h-96 absolute bottom-0 left-0 z-10">
        <iframe
          src="https://my.spline.design/3dpathslines1copy-aad7b11dec196a4121d5452cddf6b7d4/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center z-20 relative">
        <div className="text-left mb-20">
          <p className="text-[#915fff] text-[22px]">Hi, my name is</p>
          <h1 className="py-4 md:text-[60px] text-[#e8ddff] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-[34px] text-[#aba6c4]">
            I'm a Software Developer from New York.
          </h1>
          <div className="button-borders mt-8 ml-2 md:ml-1 md:mt-16">
            <a href="https://github.com/NekruzAsh" target="_blank">
              <button class="primary-button">Check out my Github!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;