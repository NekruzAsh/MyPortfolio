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
          <h1 className="text-[50px] text-[#f44336]">
            I'm a <span className="text-[#f0f8ff]">Software Developer</span>{" "}
            from New York.
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-12">
            <div className="rounded shadow-sm shadow-[#476a97] bg-[#101720] p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nekruzash/"
              >
                <FaLinkedinIn size={25} className="text-[#f44336]" />
              </Link>
            </div>

            <button className="group relative h-12 w-48 overflow-hidden rounded bg-[#101720] text-[#f0f8ff] text-lg shadow-sm shadow-[#476a97]">
              <div className="absolute inset-0 w-3 bg-[#f44336] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <Link
                className="relative text-xl text-[#f0f8ff] group-hover:text-[#f0f8ff]"
                href={myResume}
                target="_blank"
              >
                Get Resume
              </Link>
            </button>

            <div className="rounded shadow-sm shadow-[#476a97] p-3 cursor-pointer bg-[#101720] hover:scale-110 ease-in duration-200">
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
