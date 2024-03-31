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
    <div id="projects" className="w-full flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto px-2 py-20 lg:px-2 md:px-24 md:py-36 lg:py-16">
        <motion.div
          className="max-w-3xl"
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={textVariants}
        >
          <h2 className="text-[#e8ddff] pl-6 pr-6 md:pl-0 md:pr-0 py-4 mt-8 flex items-center">
            <span className=" text-[#64feda]">02.&nbsp;</span> My Work
            <hr className="border-[#251f41] border-t-1 ml-4 flex-grow" />
          </h2>
          <p className="mb-16 text-[#aba6c4] text-[17px] pl-6 pr-6 md:pl-0 md:pr-0 max-w-3xl leading-[30px] z-10 relative">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat App */}
          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[520px] bg-[#151030] rounded-sm shadow-lg">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <a href="https://chatapp-3a0e9.web.app/" target="_blank">
                <img
                  className="rounded-sm w-[374px] h-[180px] md:h-[250px] md:w-[450px]"
                  src="/images/chat.png"
                  alt="Chat Application"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className=" card-title text-[#e8ddff]">
                  <a
                    href="https://chatapp-3a0e9.web.app/"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
                  >
                    Chat Application
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/Chat-app.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://chatapp-3a0e9.web.app/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">
                  NEXT - React - JavaScript - Tailwind - Firebase
                </span>
              </p>
              <p className=" text-[#aba6c4]">
                Simple chat application that allows users to signin with their
                Google account and send messages. Developed a{" "}
                <span className="text-[#64feda]">Firebase server</span> to store
                user data, messages, and to retrieve chat messages in real-time.
                Implemented{" "}
                <span className="text-[#64feda]">Firebase Authentication</span>{" "}
                to authenticate users through Google accounts.
              </p>
            </div>
          </motion.div>

          {/* Quiz Gen */}

          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <a href="https://nekruzash.github.io/QuizGenAI/" target="_blank">
                <img
                  className="rounded-sm"
                  src="/images/quizgenn.png"
                  alt="QuizGen Website"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#e8ddff]">
                  <a
                    href="https://nekruzash.github.io/QuizGenAI/"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
                  >
                    QuizGen AI
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/QuizGen.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/QuizGenAI/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">
                  HTML - CSS - JavaScript - Cohere AI
                </span>
              </p>
              <p className=" text-[#aba6c4]">
                Tool built for teachers and students to generate quiz questions
                using AI and user text input. Developed with{" "}
                <span className="text-[#64feda]">Cohere AI API</span> and
                JavaScript to fetch data from the API, read user input and
                generate questions based on the content.
              </p>
            </div>
          </motion.div>

          {/* Todo app */}

          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <a
                href="https://to-do-app-weld-seven.vercel.app/"
                target="_blank"
              >
                <img
                  className="rounded-sm"
                  src="/images/todoapp.png"
                  alt="To-do"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#e8ddff]">
                  <a
                    href="https://to-do-app-weld-seven.vercel.app/"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
                  >
                    To-Do App
                  </a>
                </h2>
                <hr className="border-[#251f41] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/To-Do-App.git"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://to-do-app-weld-seven.vercel.app/"
                    target="_blank"
                    className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#64feda]">
                  NEXT - React - JavaScript - Tailwind
                </span>
              </p>
              <p className=" text-[#aba6c4]">
                Single page to-do notes web application with CRUD operations
                that allow users to create, delete and mark completed tasks.
                Developed with{" "}
                <span className="text-[#64feda]">NextJS and JavaScript</span>{" "}
                using ternary operators and event handlers.
              </p>
            </div>
          </motion.div>

          {/* Forum Website */}

          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <a href="https://forumwebsite.onrender.com" target="_blank">
                <img
                  className="rounded-sm w-[375px] h-[160px] md:h-[250px] md:w-[450px]"
                  src="/images/forum.png"
                  alt="forum website"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className=" card-title text-[#e8ddff]">
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
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
                  className="text-[#64feda] hover:text-[#aba6c4] duration-500 transition"
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

          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <a
                href="https://nekruzash.github.io/amazonaffiliate/"
                target="_blank"
              >
                <img
                  className="rounded-sm w-[371px] h-[160px] md:h-[250px] md:w-[450px]"
                  src="/images/amazon.png"
                  alt="Amazon Affiliate"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#e8ddff]">
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
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
                marketing program. Researched different articles and products to
                promote based on the market demand and competition. Integrated
                different <span className="text-[#64feda]">SEO techniques</span>{" "}
                to rank higher in search results.
              </p>
            </div>
          </motion.div>

          {/* TicTacToe AI */}

          <motion.div className="card md:w-[500px] w-84 md:h-[550px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className=" px-4 pt-4 md:px-6 md:pt-6">
              <a
                href="https://github.com/NekruzAsh/TicTacToeAI.git"
                target="_blank"
              >
                <img
                  className="rounded-sm w-[375px] h-[160px] md:h-[250px] md:w-[450px]"
                  src="/images/tictactoe.png"
                  alt="TicTacToeAI"
                />
              </a>
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className=" card-title text-[#e8ddff]">
                  <a
                    href="https://github.com/NekruzAsh/TicTacToeAI.git"
                    target="_blank"
                    className="hover:text-[#aba6c4] transform duration-500"
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
                make an unbeatable AI opponent. Researched the Minimax algorithm
                for AI decision-making, considering different possible outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
