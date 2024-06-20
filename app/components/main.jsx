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
      <div className="absolute z-10 w-full h-screen">
        <img
          src="/images/stars.jpg"
          alt="this is the background image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full h-full bg-black opacity-90 backdrop-blur-lg z-20"></div>
      <div className="loader z-30">
        <div className="face face1">
          <div className="circle"></div>
        </div>
        <div className="face face2">
          <div className="circle"></div>
        </div>
      </div>

      <div className="w-full h-full mx-auto p-4 flex justify-center items-center z-40 relative">
        <div className="text-center">
          <div className="avatar">
            <motion.div
              className="w-24 rounded-full mb-4 ring ring-[#191a1e] ring-offset-base-100 ring-offset-2"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <img src="/images/authorimg.jpg" />
            </motion.div>
          </div>
          <motion.h3
            className="py-4 text-2xl text-white font-bold uppercase"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            I'm Nekruz Ashrapov.
          </motion.h3>
          <motion.h1
            className="md:text-[50px] text-[30px] text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Welcome To My Portfolio.
          </motion.h1>

          <div className="flex gap-x-3 justify-center items-center mt-8 md:mt-12">
            <motion.a
              href="https://github.com/NekruzAsh"
              target="_blank"
              className="button text-sm md:text-md flex items-center"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              style={{
                background: "#cfcfcf",
                color: "#000",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-4 mr-1 md:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              Go to GitHub
            </motion.a>
            <motion.a
              href="/images/NekruzAshrapovResume.pdf"
              download={true}
              className="button text-sm md:text-md flex items-center"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              style={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-4 mr-1 md:mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Get Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
