"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { FaGooglePlay } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const lineVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 md:pl-40 md:pr-40 pl-6 pr-6">
          <motion.h2
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
            className="py-4 text-[#e8ddff] flex items-center"
          >
            <span className="text-[#64feda]">01.&nbsp;</span> About Me
            <hr className="border-[#251f41] border-t-1 ml-4 flex-grow" />
          </motion.h2>
          <motion.p
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
            className="py-2 text-[#aba6c4]"
          >
            I'm a self-taught Software Developer with a passion for building
            dynamic and responsive web applications. I love to learn new
            technologies and apply them to my projects. Currently, I am learning
            more about{" "}
            <span className="text-[#64feda]">developing web applications</span>{" "}
            using different frameworks and libraries. During my free time, I'm{" "}
            <span className="text-[#64feda]">
              experimenting with different AI language models
            </span>{" "}
            to better tailor them for my personal projects.
          </motion.p>
          <motion.p
            className="py-2 text-[#aba6c4]"
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
          >
            My coding journey began when I wrote my first line of HTML code in
            8th grade during an after-school program in New York. I was
            fascinated by the idea that I could create such beautiful software
            using various programming languages. I was hooked. Those initial
            lines of code evolved into a love for programming, driving me to
            explore the intricate aspects of this craft.
          </motion.p>
          <motion.div
            className="py-2 text-[#aba6c4]"
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
          >
            <p>Here are a few technologies I've been working with recently:</p>
            <br />
            <ul className="grid grid-cols-2 gap-y-1 gap-1 text-sm">
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;Python
              </li>
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;React
              </li>
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;C++
              </li>
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;Node.js
              </li>
              <li className="flex items-center">
                <FaGooglePlay className="text-[#64feda]" size={7} />
                &nbsp;&nbsp;MongoDB
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="image-style shadow-lg items-center relative justify-center ml-20 md:ml-[-50px] mt-16"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          <img
            src="/images/authorimage.jpg"
            quality={100}
            className="rounded-md"
            alt="picture of author"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
