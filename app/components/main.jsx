import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const myResume = "/images/NekruzAshrapovResume.pdf";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-center bg-cover" style={{ backgroundImage: `url(/images/herobg.png)` }}>
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="text-left">
          <p className="text-[#915fff] text-[22px]">Hi, my name is</p>
          <h1 className="py-4 md:text-[60px] text-[#e8ddff] font-bold">
            Nekruz Ashrapov.
          </h1>
          <h1 className="md:text-[50px] text-[34px] text-[#aba6c4]">
            I'm a Software Developer from New York.
          </h1>
          <div className="box-border md:h-[141px] md:w-[560px] sm:w-[500px] h-[141px] p-0 border-0">
            <p
              className="text-[#aba6c4] md:text-[18px] sm:text-md text-sm md:py-10 py-6"
              style={{ lineHeight: "1.5" }}
            >
              I specialize in building (occasionally designing) responsive and
              interactive web applications. Currently, I'm an undergraduate
              student at the{" "}
              <span className="text-[#915fff]">University of Cincinnati</span>{" "}
              pursuing a degree in{" "}
              <span className="text-[#915fff]">Computer Science</span> with a
              strong focus on Software Engineering and Artificial Intelligence.
            </p>
          </div>
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
