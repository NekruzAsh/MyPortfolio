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
            craft and to pursue a degree in Computer Science. I'm currently a second-year Computer Science student at the
            University of Cincinnati.
          </p>

          <p className="py-2 text-[#f0f8ff]">
            For the past years I spent time learning more about
            different programming languages and how they are used in different
            applications. I started experimenting with HTML and CSS and started
            building and designing these beautiful websites. Later on, I learned about complex animations with JavaScript in order to
            provide my websites with interactivity they needed. This led me to
            learn React and backend databases like MongoDB, now I'm practing
            with a different tech stack that includes NextJS and TailwindCSS to
            build innovative websites.
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
