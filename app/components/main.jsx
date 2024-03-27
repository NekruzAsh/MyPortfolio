import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";



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
          <p className="text-[#64feda] text-[22px]">Hi, my name is</p>
          <h1 className="py-4 md:text-[60px] text-[#e8ddff] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-[34px] text-[#aba6c4]">
            I'm a Software Developer from New York.
          </h1>
          <div className="flex space-x-4 items-center mt-8 md:mt-12">
          <a
            href="https://github.com/NekruzAsh"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <FiGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/nekruzash/"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <FiLinkedin size={34} />
          </a>
          <a
            href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <SiDevpost size={34} />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default main;