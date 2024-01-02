import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <h2 className="py-4 text-[#f44336] uppercase">
            Where it all started.
          </h2>
          <p className="py-2 text-[#f0f8ff]">
            My coding journey began when I wrote my first line of HTML code in
            8th grade during my middle school's after-school program in New
            York. I was fascinated by the idea that I could create such
            beautiful software using various programming languages. I was
            hooked. Those initial lines of code evolved into a love for
            programming, driving me to explore the intricate aspects of this
            craft.
          </p>

          <p className="py-2 text-[#f0f8ff]">
            I am currently an undergraduate student at the University at
            Cincinnati pursuing a degree in Computer Science. Also, I'm a
            self-taught Software Developer with a passion for building dynamic
            and responsive web applications. I love to learn new technologies
            and apply them to my projects. My tech stack includes React and
            Tailwind CSS for front-end development, and I use NodeJS, Express,
            and MongoDB for back-end development. I also have experience with
            Python, C++, and C.
          </p>

          <button className="py-2 text-[#f0f8ff] cursor-pointer hover:text-[#f44336] bg-[#101720] shadow-sm shadow-[#476a97] btn btn-sm">
            <Link href="/#projects">Check out my latest projects</Link>
          </button>
        </div>

        <div className="w-64 h-64 shadow-lg shadow-[#476a97] items-center relative overflow-hidden rounded-full justify-center hover:scale-105 ease-in duration-300 ml-16 mt-16">
          <Image
            src="/images/picture.jpg"
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
