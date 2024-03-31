"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import "../globals.css";

const main = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      id="home"
      className="w-full h-screen text-center relative"
      // style={{ backgroundImage: `url(/images/herobg.png)` }}
    >
      <iframe
        src="https://my.spline.design/theorbhand-8ae8c3c7b68060908fb34260df538c4a/"
        className="left-0 right-0 bottom-0 w-full h-full absolute z-10"
        width="100%"
        height="100%"
      ></iframe>
      <div className=" bg-[#050817] bg-opacity-50 w-full h-full mx-auto p-4 flex justify-center items-center z-20 relative">
        <div className="text-left mb-20">
          <motion.p
            className="text-[#64feda] text-[22px]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="py-4 md:text-[60px] text-[#e8ddff] font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Nekruz Ashrapov.
          </motion.h1>
          <motion.h1
            className="md:text-[50px] text-[30px] text-[#aba6c4]"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            I'm a Software Developer from New York.
          </motion.h1>

          <div className="flex items-center mt-8 md:mt-12">
            <motion.a
              href="https://github.com/NekruzAsh"
              target="_blank"
              className="button text-lg"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Check out my GitHub!
            </motion.a>
          </div>
          <div className="flex flex-col transform translate-y-[200%] md:translate-y-[270%]">
            <motion.div
              className="scroll-button-wrapper"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <a href="/#about">
                <div className="scroll-button"></div>
                <div className="scroll-txt"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
