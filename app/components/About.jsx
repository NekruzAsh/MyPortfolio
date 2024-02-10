import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { RiStarFill } from "react-icons/ri";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 md:pl-40 md:pr-40 pl-6 pr-6">
          <h2 className="py-4 text-[#BFD0E3] flex items-center">
            <span className="text-[#f44336]">01.&nbsp;</span> About Me
            <hr className="border-[#1E3B5A] border-t-1 ml-4 flex-grow" />
          </h2>
          <p className="py-2 text-[#7899BD]">
            I'm a self-taught Software Developer with a passion for building
            dynamic and responsive web applications. I love to learn new
            technologies and apply them to my projects. Currently, I am learning
            more about{" "}
            <span className="text-[#f44336]">developing web applications</span>{" "}
            using different frameworks and libraries. During my free time, I'm{" "}
            <span className="text-[#f44336]">
              experimenting with different AI language models
            </span>{" "}
            to better tailor them for my personal projects.
          </p>
          <p className="py-2 text-[#7899BD]">
            My coding journey began when I wrote my first line of HTML code in
            8th grade during an after-school program in New York. I was
            fascinated by the idea that I could create such beautiful software
            using various programming languages. I was hooked. Those initial
            lines of code evolved into a love for programming, driving me to
            explore the intricate aspects of this craft.
          </p>
          <div className="py-2 text-[#7899BD]">
            <p>
            Here are a few technologies I've been working with recently:
            </p>
            <br />
              <ul className="grid grid-cols-2 gap-y-1 gap-1 text-sm">
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;JavaScript (ES6+)</li>
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;Python</li>
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;React</li>
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;C++</li>
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;Node.js</li>
                <li className="flex items-center"><RiStarFill className="text-[#f44336]" size={10}/>&nbsp;&nbsp;MongoDB</li>
              </ul>
          </div>
        </div>

        <div className="image-style shadow-lg items-center rounded-sm relative justify-center ml-20 md:ml-[-50px] mt-16">
          <img
            src="/images/authorimage.jpg"
            quality={100}

            alt="picture of author"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
