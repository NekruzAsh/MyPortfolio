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
  const [showMore, toggleShowMore] = useState(false);

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
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center">
        <motion.div
          className="max-w-3xl"
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={textVariants}
        >
          <p className=" mt-6 py-2 flex items-center">
            <span className=" text-[#fa243c]">Other Noteworthy Projects</span>
          </p>
        </motion.div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Chat app */}
          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://chatapp-3a0e9.web.app/"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    Chat app
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/Chat-app.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://chatapp-3a0e9.web.app/"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">
                  Next.js - Tailwind CSS - JavaScript - Firebase
                </span>
              </p>
              <p className=" text-[#707173]">
                Simple chat application that allows users to signin with their
                Google account and send messages. Developed a{" "}
                <span className="text-[#cfcfcf]">Firebase server</span> to store
                user data, messages, and to retrieve chat messages in real-time.
              </p>
            </div>
          </motion.div>

          {/* To-do App */}
          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://to-do-app-weld-seven.vercel.app/"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    To-do app
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/To-Do-App.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://to-do-app-weld-seven.vercel.app/"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">
                  Next.js - React.js - Tailwind CSS - JavaScript
                </span>
              </p>
              <p className=" text-[#707173]">
                Single page to-do notes web application with CRUD operations
                that allow users to create, delete and mark completed tasks.
                Developed with <span className="text-[#cfcfcf]">NextJS</span>{" "}
                and <span className="text-[#cfcfcf]">JavaScript</span>.
              </p>
            </div>
          </motion.div>

          {/* QuizGen AI */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://nekruzash.github.io/QuizGenAI/"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    QuizGenAI
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/QuizGen.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/QuizGenAI/"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">
                  HTML - CSS - JavaScript - Cohere AI
                </span>
              </p>
              <p className=" text-[#707173]">
                Tool built for teachers and students to generate quiz questions
                using AI and user text input. Developed with{" "}
                <span className="text-[#cfcfcf]">Cohere AI API</span> to read
                user input and generate questions based on the content.
              </p>
            </div>
          </motion.div>

          {/* Forum Website */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    Forum Website
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/forumwebsite.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://forumwebsite.onrender.com"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">
                  Express - CSS - JavaScript - Node.js - MongoDB
                </span>
              </p>
              <p className=" text-[#707173]">
                Forum website clone similar to{" "}
                <a
                  className="text-[#fa243c] hover:underline underline-offset-4"
                  target="_blank"
                  href="https://www.reddit.com/"
                >
                  Reddit.com
                </a>{" "}
                where users can signup and login using existing accounts.
                Developed with <span className="text-[#cfcfcf]">MongoDB</span>{" "}
                to store user data and{" "}
                <span className="text-[#cfcfcf]">Bcrypt</span> to hash passwords
                securely.
                <span className="text-[#fa243c]"> Try it out:</span>
                <br />
                Username: username
                <br />
                Password: 1234
              </p>
            </div>
          </motion.div>

          {/* Friendli */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://google-hacks-delta.vercel.app/"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    Friendli
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/Google-AI-Hack.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://google-hacks-delta.vercel.app/"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">
                  Next.js - React.js - AgoraRTC - Supabase - Gemini AI
                </span>
              </p>
              <p className=" text-[#707173]">
                Connects volunteers & seniors via a user-friendly platform,
                using{" "}
                <span className="text-[#cfcfcf]">
                  AI to match based on shared interests
                </span>
                . Then uses <span className="text-[#cfcfcf]">video calls</span>{" "}
                to facilitate meaningful conversations, combating elderly
                loneliness and depression.
              </p>
            </div>
          </motion.div>
          {/* Amazon Affiliate */}

          <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-[#cfcfcf]">
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="hover:text-[#fa243c] transform duration-500"
                  >
                    Amazon Affiliate
                  </a>
                </h2>
                <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                <div className="space-x-2 flex items-center">
                  <a
                    href="https://github.com/NekruzAsh/amazonaffiliate.git"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiGithub size={23} />
                  </a>
                  <a
                    href="https://nekruzash.github.io/amazonaffiliate/"
                    target="_blank"
                    className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                  >
                    <FiExternalLink size={25} />
                  </a>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-[#fa243c]">HTML - CSS - JavaScript</span>
              </p>
              <p className=" text-[#707173]">
                Article website used to promote Amazon products specifically
                technology category and earn commission from{" "}
                <span className="text-[#cfcfcf]">Amazon Affiliate</span>{" "}
                marketing program. Integrated different{" "}
                <span className="text-[#cfcfcf]">SEO techniques</span> to rank
                higher in search results.
              </p>
            </div>
          </motion.div>

          {showMore && (
            <>
              {/* TicTacToe AI */}

              <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className=" card-title text-[#cfcfcf]">
                      <a
                        href="https://github.com/NekruzAsh/TicTacToeAI.git"
                        target="_blank"
                        className="hover:text-[#fa243c] transform duration-500"
                      >
                        Tic-Tac-Toe AI
                      </a>
                    </h2>
                    <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                    <div className="space-x-2 flex items-center">
                      <a
                        href="https://github.com/NekruzAsh/TicTacToeAI.git"
                        target="_blank"
                        className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                      >
                        <FiGithub size={23} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm">
                    <span className="text-[#fa243c]">Python - Minimax</span>
                  </p>
                  <p className=" text-[#707173]">
                    Tic-Tac-Toe game with two different game modes: Player Vs.
                    Player and Player Vs. AI. Developed with Python's{" "}
                    <span className="text-[#cfcfcf]">Tkinter GUI</span> library
                    and{" "}
                    <span className="text-[#cfcfcf]">Minimax algorithm</span> to
                    make an unbeatable AI opponent.
                  </p>
                </div>
              </motion.div>

              {/* A Star Pathfinding */}

              <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className=" card-title text-[#cfcfcf]">
                      <a
                        href="https://github.com/NekruzAsh/A-Star-Pathfinding.git"
                        target="_blank"
                        className="hover:text-[#fa243c] transform duration-500"
                      >
                        A - Star Pathfinding
                      </a>
                    </h2>
                    <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                    <div className="space-x-2 flex items-center">
                      <a
                        href="https://github.com/NekruzAsh/A-Star-Pathfinding.git"
                        target="_blank"
                        className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                      >
                        <FiGithub size={23} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm">
                    <span className="text-[#fa243c]">Python </span>
                  </p>
                  <p className=" text-[#707173]">
                    A-Star Pathfinding algorithm visualized using{" "}
                    <span className="text-[#cfcfcf]">Python libraries</span>,
                    where the algorithm searches for the shortest path from a
                    starting node to target node. The cost of the path is
                    estimated using a{" "}
                    <span className="text-[#cfcfcf]">heuristic</span> approach.
                  </p>
                </div>
              </motion.div>
              {/* Cryptocurrency Website */}
              <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className=" card-title text-[#cfcfcf]">
                      <a
                        href="https://cryptocurrency-club-website.vercel.app/"
                        target="_blank"
                        className="hover:text-[#fa243c] transform duration-500"
                      >
                        Crypto Website
                      </a>
                    </h2>
                    <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                    <div className="space-x-2 flex items-center">
                      <a
                        href="https://github.com/NekruzAsh/Cryptocurrency-club-website.git"
                        target="_blank"
                        className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                      >
                        <FiGithub size={23} />
                      </a>
                      <a
                        href="https://cryptocurrency-club-website.vercel.app/"
                        target="_blank"
                        className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                      >
                        <FiExternalLink size={25} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm">
                    <span className="text-[#fa243c]">
                      Next.js - Tailwind CSS - JavaScript - CSS - Spline
                    </span>
                  </p>
                  <p className=" text-[#707173]">
                    Building and designing a website for a Cryptocurrency Club{" "}
                    <a href="https://www.uc.edu/" target="_blank">
                      <span className="text-[#fa243c] hover:underline underline-offset-4">
                        @University of Cincinnati
                      </span>
                    </a>
                    .
                    <br />
                    *Work in Progress*
                  </p>
                </div>
              </motion.div>

              {/* Autonomous Retrieval System */}
              <motion.div className="card h-[330px] w-[330px] md:h-[330px] md:w-[350px] lg:w-[350px] lg:h-[350px] transform transition-all hover:-translate-y-2 duration-300 rounded-sm bg-[#191a1e] shadow-lg">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className=" card-title text-[#cfcfcf]">
                      <a
                        href="https://drive.google.com/file/d/1yZuABIqW8cpnE0LzjnIuGm_Hjy1wAHO0/view"
                        target="_blank"
                        className="hover:text-[#fa243c] transform duration-500"
                      >
                        A.R.T
                      </a>
                    </h2>
                    <hr className="border-[#2f2f30] border-t-1 mx-3 flex-grow" />
                    <div className="space-x-2 flex items-center">
                      <a
                        href="https://drive.google.com/file/d/1yZuABIqW8cpnE0LzjnIuGm_Hjy1wAHO0/view"
                        target="_blank"
                        className="text-[#707173] hover:text-[#fa243c] transform duration-500"
                      >
                        <FiExternalLink size={25} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm">
                    <span className="text-[#fa243c]">Python - Pybricks</span>
                  </p>
                  <p className=" text-[#707173]">
                    Collaborated in a team of 4 students to build, program, and
                    document a robot for an Engineering Design course. This is a
                    robot similar to{" "}
                    <span className="text-[#cfcfcf]">Amazon's Proteus</span>{" "}
                    warehouse robots that scan barcodes and move objects around
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>

        <div className="mt-12">
          <a className="button" onClick={() => toggleShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
