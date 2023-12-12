import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import Link from "next/link";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee8700] to-orange-700">Nekruz</span>
          </h1>
          <h1 className="py-2">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-100 max-w-[70%] m-auto font-sans">
            I'm a front-end web developer, and my expertise lies in building
            and designing beautiful digital applications. Currently, I'm honing
            my skills in crafting highly responsive webpages while also learning
            more about back-end technologies to expand my toolkit. Also, I'm a
            student at the University of Cincinnati, pursuing a degree in {" "}
            <span className="text-orange-500">Computer Science</span>.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nekruzash/"
              >
                <FaLinkedinIn size={25} className="text-[#f55600]" />
              </Link>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh"
              >
                <FaGithub size={25} className="text-[#f55600]" />
              </Link>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineMail size={25} className="text-[#f55600]" />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <LuNewspaper size={25} className="text-[#f55600]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
