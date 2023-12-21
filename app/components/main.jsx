
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import Link from "next/link";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[50px]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee8700] to-orange-700">
              Nekruz
            </span>
          </h1>
          <h1 className="py-2 text-[50px]">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-100 max-w-[70%] m-auto font-sans">
            I'm a front-end web developer, and my expertise lies in building and
            designing beautiful digital applications. Currently, I'm honing my
            skills in crafting highly responsive webpages while also learning
            more about back-end technologies to expand my toolkit. Also, I'm a second-year
            student at the University of Cincinnati, pursuing a degree in {" "}
            <span className="text-orange-500">Computer Science</span>.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-lg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nekruzash/"
              >
                <FaLinkedinIn size={25} className="text-orange-600" />
              </Link>
            </div>
            
              <button className='group relative h-12 w-48 overflow-hidden rounded-lg bg-[#c24e00] text-gray-200 text-lg shadow-sm shadow-gray-400'>
                <div className='absolute inset-0 w-3 bg-[#222222] transition-all duration-[250ms] ease-out group-hover:w-full'></div>
              <Link className='relative text-xl text-white group-hover:text-white' target="_blank" href="/images/NekruzAshrapovResume.pdf">
                Get Resume
              </Link>
            </button>  
            
            <div className="rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh"
              >
                <FaGithub size={25} className="text-orange-600" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
