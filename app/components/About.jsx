"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../projects.scss";
import { GoTriangleRight } from "react-icons/go";

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
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 md:ml-0 lg:-ml-24"
    >
      <div className="max-w-[720px] m-auto flex flex-col items-start">
        <div className="flex flex-col md:flex-row items-start w-full">
          <motion.h2
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 1 }}
            className="py-4 text-[#cfcfcf] text-xl flex-shrink-0 md:mr-6 md:-mt-3"
          >
            About Me
          </motion.h2>
          <div>
            <motion.p
              ref={ref}
              animate={animation}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1 }}
              className="py-1 px-1 text-[#707173]"
            >
              Hi I'm Nekruz, a junior{" "}
              <span className="text-[#cfcfcf]">Computer Science</span> student{" "}
              <a href="https://www.uc.edu/" target="_blank">
                <span className="text-[#fa243c] hover:underline underline-offset-4">
                  @University of Cincinnati
                </span>
              </a>
              . My passion lies in Software Engineering and Artificial
              Intelligence. Currently, I'm learning more about{" "}
              <span className="text-[#cfcfcf]">
                developing web applications
              </span>{" "}
              using different frameworks and libraries. During my free time, I'm{" "}
              <span className="text-[#cfcfcf]">
                experimenting with different AI language models
              </span>{" "}
              to better tailor them for my personal projects.
            </motion.p>
            <motion.p
              className="py-1 px-1 text-[#707173]"
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
              8th grade in <span className="text-[#cfcfcf]">Brooklyn, NY</span>.
              I was fascinated by the idea that I could create such beautiful
              software using various programming languages. I was hooked. Those
              initial lines of code evolved into a love for programming, driving
              me to explore the intricate aspects of this craft.
            </motion.p>
            <motion.div
              className="py-1 px-1 text-[#707173]"
              ref={ref}
              animate={animation}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 1 }}
            >
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <br />
              <ul className="grid grid-cols-2 gap-y-1 gap-1 text-sm">
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;Angular
                </li>
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;TypeScript
                </li>
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;ASP.NET
                </li>
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;CSharp
                </li>
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;Spring Boot
                </li>
                <li className="flex items-center">
                  <GoTriangleRight className="text-[#fa243c]" size={13} />
                  &nbsp;&nbsp;Java
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
