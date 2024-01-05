import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const myResume = "/images/NekruzAshrapovResume.pdf";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="text-left">
          <p className="text-[#f44336] text-[22px]">Hi, my name is</p>
          <h1 className="py-4 md:text-[60px] text-[#f0f8ff] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-gray-400">
            I'm a Software Developer from New York.
          </h1>
          <div className="box-border md:h-[141px] md:w-[520px] sm:w-[500px] h-[141px] p-0 border-0">
            <p className="text-gray-400 md:text-[18px] sm:text-md text-sm md:py-10 py-6" style={{ lineHeight: "1.5" }}>
              I specialize in building (occasionally designing) responsive and
              interactive web applications. Currently, I'm an undergraduate
              student at the University of Cincinnati pursuing a degree in{" "}
              <span className="text-[#f44336]">Computer Science</span>{" "}
              with a strong focus in Software Engineering and Artificial
              Intelligence.
            </p>
          </div>
          <div className="flex items-center md:py-12 py-14 sm:py-2">
          <div className="flex space-x-4 cursor-pointer">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/nekruzash/"
                >
                  <FaLinkedinIn
                    size={25}
                    className="text-[#f44336] hover:text-[#f0f8ff] transition-colors duration-400"
                  />
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NekruzAsh"
                >
                  <FaGithub
                    size={25}
                    className="text-[#f44336] hover:text-[#f0f8ff] transition-colors duration-400"
                  />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
