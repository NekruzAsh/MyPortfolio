"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../globals.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "20px 40px 100px 60px",
  });

  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const LeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  const RightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          className="max-w-3xl"
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={textVariants}
        >
          <p className="text-[#e8ddff] mt-8 py-2 flex items-center">
            <span className=" text-[#64feda]">Other Noteworthy Projects</span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Forum Website */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] rounded-sm bg-[#151030] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className=" card-title text-[#e8ddff]">
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="hover:text-[#64feda] transform duration-500"
                  >
                    Forum Website
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/forumwebsite.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">
                  Express - CSS - JavaScript - MongoDB - Node
                </span>
              </p>
              <p className=" text-[#aba6c4]">
                Forum website clone similar to{" "}
                <a
                  className="text-[#64feda] hover:underline underline-offset-4"
                  target="_blank"
                  href="https://www.reddit.com/"
                >
                  Reddit.com
                </a>{" "}
                where users can signup and login using existing accounts.
                <br />
                <span className="text-[#64feda]"> Try it out:</span>
                <br />
                Username: username
                <br />
                Password: 1234
              </p>
            </div>
          </motion.div>

          {/* Amazon Affiliate */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] rounded-sm bg-[#151030] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#e8ddff]">
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="hover:text-[#64feda] transform duration-500"
                  >
                    Amazon Affiliate
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/amazonaffiliate.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">HTML - CSS - JavaScript</span>
              </p>
              <p className=" text-[#aba6c4]">
                Article website used to promote Amazon products specifically
                technology category and earn commission from{" "}
                <span className="text-[#64feda]">Amazon Affiliate</span>{" "}
                marketing program. Integrated different{" "}
                <span className="text-[#64feda]">SEO techniques</span> to rank
                higher in search results.
              </p>
            </div>
          </motion.div>

          {/* TicTacToe AI */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] rounded-sm bg-[#151030] shadow-lg">

            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className=" card-title text-[#e8ddff]">
                  <a
                    href="https://github.com/NekruzAsh/TicTacToeAI.git"
                    target="_blank"
                    className="hover:text-[#64feda] transform duration-500"
                  >
                    Tic-Tac-Toe AI
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/TicTacToeAI.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">Python - Minimax</span>
              </p>
              <p className=" text-[#aba6c4]">
                Tic-Tac-Toe game with two different game modes: Player Vs.
                Player and Player Vs. AI. Developed with Python's{" "}
                <span className="text-[#64feda]">Tkinter GUI</span> library and{" "}
                <span className="text-[#64feda]">Minimax algorithm</span> to
                make an unbeatable AI opponent.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
