import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

const main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hi, I'm <span className="text-orange-500">Nekruz</span>
          </h1>
          <h1 className="py-2">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-100 max-w-[70%] m-auto font-sans">
            I'm a front-end developer, and my expertise lies in constructing and
            designing beautiful digital applications. Currently, I'm honing my skills in
            crafting highly responsive webpages while also learning more about
            back-end technologies to expand my toolkit. I'm also a student at
            the University of Cincinnati, pursuing a degree in Computer Science.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaLinkedinIn size={25} className="text-[#f55600]" />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub size={25} className="text-[#f55600]" />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineMail size={25} className="text-[#f55600]" />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <LuNewspaper size={25} className="text-[#f55600]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
