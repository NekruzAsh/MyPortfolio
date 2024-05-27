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
    <div id="home" className="w-full h-screen text-center relative">
      {/* <div className="loader">
        <div className="face face1">
          <div className="circle"></div>
        </div>
        <div className="face face2">
          <div className="circle"></div>
        </div>
      </div> */}
      <div className="w-full h-full mx-auto p-4 flex justify-center items-center z-20 relative">
        <div className="text-left">
          <motion.p
            className="text-[#fa243c] text-[22px]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="py-4 md:text-[60px] text-[#1d1d1f] font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Nekruz Ashrapov.
          </motion.h1>
          <motion.h1
            className="md:text-[50px] text-[30px] text-[#58585a]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            I'm a Software Developer from New York.
          </motion.h1>

          <div className="flex items-center mt-8 md:mt-12">
            <motion.a
              href="https://github.com/NekruzAsh"
              target="_blank"
              className="button text-md"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Check out my GitHub!
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
