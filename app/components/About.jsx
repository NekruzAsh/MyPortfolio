import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 md:pl-24 pl-10 pr-10">
          <h2 className="py-4 text-[#BFD0E3] flex items-center">
            <span className="text-[#f44336]">01.&nbsp;</span> About Me
            <hr className="border-[#2f3b49] border-t-1 ml-4 flex-grow" />
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
          <p className="py-2 text-[#7899BD]">
            My tech stack includes <span className="text-[#f44336]">React</span>{" "}
            and <span className="text-[#f44336]">Tailwind CSS</span> for
            front-end development, and I use{" "}
            <span className="text-[#f44336]">NodeJS</span>,{" "}
            <span className="text-[#f44336]">Express</span>, and{" "}
            <span className="text-[#f44336]">MongoDB</span> for back-end
            development. I also have experience with{" "}
            <span className="text-[#f44336]">Python</span>,{" "}
            <span className="text-[#f44336]">C++</span>, and{" "}
            <span className="text-[#f44336]">C</span>.
          </p>

          <a href="/#projects" className="relative flex w-[270px] h-[50px] px-6 py-4 font-medium text-[14px] cursor-pointer text-[#f44336] hover:text-[#011222] group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0"/>
            <span className="absolute inset-0 w-full h-full border-2 border-[#f44336]"/>
            <span className="relative">Check out my recent projects</span>
        </a>
        </div>

        <div className="w-64 h-64 shadow-md shadow-[#476a97] items-center relative overflow-hidden rounded-full justify-center hover:bg-gradient-to-r from-[#f44336] to-[#f44336] hover:scale-105 ease-in duration-300 ml-16 mt-16">
          <Image
            className="hover:opacity-70"
            src="/images/authorimg.jpg"
            width={280}
            height={280}
            quality={100}
            objectPosition="center top"
            alt="picture of author"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
