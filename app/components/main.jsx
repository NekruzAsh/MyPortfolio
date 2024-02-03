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
          <h1 className="py-4 md:text-[60px] text-[#BFD0E3] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-[#7899BD]">
            I'm a Software Developer from New York.
          </h1>
          <div className="box-border md:h-[141px] md:w-[520px] sm:w-[500px] h-[141px] p-0 border-0">
            <p
              className="text-[#7899BD] md:text-[18px] sm:text-md text-sm md:py-10 py-6"
              style={{ lineHeight: "1.5" }}
            >
              I specialize in building (occasionally designing) responsive and
              interactive web applications. Currently, I'm an undergraduate
              student at the{" "}
              <span className="text-[#f44336]">University of Cincinnati</span>{" "}
              pursuing a degree in{" "}
              <span className="text-[#f44336]">Computer Science</span> with a
              strong focus on Software Engineering and Artificial Intelligence.
            </p>
          </div>
          <div className="flex items-center md:py-12 py-6 sm:py-2">
            <div className="flex space-x-4 cursor-pointer">
            <a
                  href="https://github.com/NekruzAsh" target="_blank"
                  className="relative flex w-[15rem] h-[50px] text-md mt-2 uppercase px-6 py-3 cursor-pointer text-[#f44336] hover:text-[#011222] group"
                >
                  <span className="absolute inset-0 w-full h-[47px] transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0" />
                  <span className="absolute inset-0 w-full h-[47px] border-2 border-[#f44336]" />
                  <span className="relative">Check Out My Github</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
