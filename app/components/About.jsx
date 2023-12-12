import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <h2 className="py-4 text-orange-500 uppercase">Where it all started</h2>
          <p className="py-2 text-gray-300">
            My coding journey began when I wrote my first line of HTML code in
            8th grade during my middle school's after-school program in New
            York. I was fascinated by the idea that I could create such
            beautiful software using various programming languages. I was
            hooked. Those initial lines of code evolved into a love for
            programming, driving me to explore the intricate aspects of this
            craft.
          </p>

          <p className="py-2 text-gray-300">
            For the past 4-5 years I spent time learning more and more about
            different programming languages and how they were used in different applications. I started
            experimenting with HTML5 and CSS3 and started building and designing
            these beautiful websites. Later on, I started learning about complex
            animations with JavaScript in order to provide my websites with
            animations they needed. This led me to learn React and
            backend databases like MongoDB, now I'm practing with a different tech stack that includes
            Next.js and TailwindCSS to build innovative websites.
          </p>
          
          
          <p className="py-2 text-gray-300 underline cursor-pointer border-b-orange-500"><Link href="/#projects">Check out my latest projects</Link></p>
          
          
        </div>
        <div className="w-64 h-64 shadow-xl shadow-gray-400 items-center relative overflow-hidden rounded-full justify-center hover:scale-105 ease-in duration-300 ml-16 mt-16">
            <Image
                src="/images/picture.jpg"
                width={280}
                height={280}
                quality={100}
                objectPosition="center top"
            />
        </div>
      </div>
    </div>
  );
};

export default About;
