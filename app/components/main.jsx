import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const myResume = "/images/NekruzAshrapovResume.pdf";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[50px] text-[#f44336]">
            Hello,<span className="text-[#f44336] font-bold"> I'm Nekruz.</span>
          </h1>
          <h1 className="py-0.5 text-[50px] text-[#f44336]">
            I'm a <span className="text-[#222222]">Software Developer</span>{" "}
            from New York.
          </h1>
          <p className="py-4 text-black max-w-[70%] m-auto font-sans">
            I'm currently a second-year Computer Science student at the
            University of Cincinnati. I'm passionate about building and
            designing beautiful digital applications. My expertise lies in
            crafting highly responsive webpages while also implementing and
            learning more about back-end technologies to expand my toolkit.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-lg shadow-md shadow-gray-800 bg-[#222222] p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nekruzash/"
              >
                <FaLinkedinIn size={25} className="text-[#f44336]" />
              </Link>
            </div>

            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#222222] text-gray-200 text-lg shadow-md shadow-gray-800">
              <div className="absolute inset-0 w-3 bg-[#f44336] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <Link
                className="relative text-xl text-white group-hover:text-white"
                href={myResume}
                target="_blank"
              >
                Get Resume
              </Link>
            </button>

            <div className="rounded-md shadow-md shadow-gray-800 p-3 cursor-pointer bg-[#222222] hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh"
              >
                <FaGithub size={25} className="text-[#f44336]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
