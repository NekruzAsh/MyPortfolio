"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../globals.css";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div id="projects" className="w-full flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto px-2 py-20 lg:px-2 md:px-24 md:py-36 lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-[#e8ddff] py-4 flex items-center">
            <span className=" text-[#915fff]">02.&nbsp;</span> My Work
            <hr className="border-[#251f41] border-t-1 ml-4 flex-grow" />
          </h2>

          <p className="mb-16 text-[#aba6c4] text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat App */}
          <div className="card md:w-[500px] w-84 md:h-[620px] h-[520px] bg-[#151030] rounded-sm shadow-lg">
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
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://chatapp-3a0e9.web.app/"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  Chat Application
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#aba6c4]">
                Simple chat application that allows users to signin with their
                Google account and send messages. Developed a{" "}
                <span className="text-[#915fff]">Firebase server</span> to store
                user data, messages, and to retrieve chat messages in real-time.
                Implemented{" "}
                <span className="text-[#915fff]">Firebase Authentication</span>{" "}
                to authenticate users through Google accounts.
              </p>
              <div className="card-actions justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  NEXT
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  React
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  JavaScript
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  TailwindCSS
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  Firebase
                </div>
              </div>
              <div className="card-actions space-x-2 justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2 items-center">
                <a
                  href="https://github.com/NekruzAsh/Chat-app.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://chatapp-3a0e9.web.app/"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Quiz Gen */}

          <div className="card md:w-[500px] w-84 md:h-[620px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
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
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://nekruzash.github.io/QuizGenAI/"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  QuizGen Hackathon
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#aba6c4]">
                Tool built for teachers and students to generate quiz questions
                using AI and user text input. Developed with{" "}
                <span className="text-[#915fff]">Cohere AI API</span> and
                JavaScript to fetch data from the API, read user input and
                generate questions based on the content.
              </p>
              <div className="card-actions text-[14px] md:text-md justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  HTML
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  CSS
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  JavaScript
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  Cohere AI
                </div>
              </div>
              <div className="card-actions space-x-2 items-center justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <a
                  href="https://github.com/NekruzAsh/QuizGen.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://nekruzash.github.io/QuizGenAI/"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Todo app */}

          <div className="card md:w-[500px] w-84 md:h-[620px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
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
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://to-do-app-weld-seven.vercel.app/"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  To-Do Notes App
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#aba6c4]">
                Single page to-do notes web application with CRUD operations
                that allow users to create, delete and mark completed tasks.
                Developed with{" "}
                <span className="text-[#915fff]">Next and JavaScript</span>{" "}
                using ternary operators and event handlers.
              </p>
              <div className="card-actions justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  NEXT
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  React
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  JavaScript
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  TailwindCSS
                </div>
              </div>
              <div className="card-actions space-x-2 items-center justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <a
                  href="https://github.com/NekruzAsh/To-Do-App.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://to-do-app-weld-seven.vercel.app/"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Forum Website */}

          <div className="card md:w-[500px] w-84 md:h-[620px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
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
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://forumwebsite.onrender.com"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  Forum Website
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[13px] md:text-[16px] text-[#aba6c4]">
                Forum website clone similar to{" "}
                <a
                  className="text-[#915fff] hover:text-[#aba6c4] duration-500 transition"
                  target="_blank"
                  href="https://www.reddit.com/"
                >
                  Reddit.com
                </a>{" "}
                where users can signup and login using existing accounts.
                Implemented{" "}
                <span className="text-[#915fff]">Bcrypt algorithm</span> to hash
                passwords and store them in the{" "}
                <span className="text-[#915fff]">MongoDB</span>.
                <br />
                <span className="text-[#915fff]"> Try it out:</span>
                <br />
                Username: username
                <br />
                Password: 1234
              </p>
              <div className="card-actions justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  EXPRESS
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  CSS
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  JavaScript
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  MongoDB
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  NODE
                </div>
              </div>
              <div className="card-actions space-x-2 items-center justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <a
                  href="https://github.com/NekruzAsh/forumwebsite.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://forumwebsite.onrender.com"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Amazon Affiliate */}

          <div className="card md:w-[500px] w-84 md:h-[620px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
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
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://nekruzash.github.io/amazonaffiliate/"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  Amazon Affiliate
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#aba6c4]">
                Article website used to promote Amazon products specifically
                technology category and earn commission from{" "}
                <span className="text-[#915fff]">Amazon Affiliate</span>{" "}
                marketing program. Researched different articles and products to
                promote based on the market demand and competition. Integrated
                different <span className="text-[#915fff]">SEO techniques</span>{" "}
                to rank higher in search results.
              </p>
              <div className="card-actions justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  HTML
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  CSS
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  JavaScript
                </div>
              </div>
              <div className="card-actions space-x-2 items-center justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <a
                  href="https://github.com/NekruzAsh/amazonaffiliate.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://nekruzash.github.io/amazonaffiliate/"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* TicTacToe AI */}

          <div className="card md:w-[500px] w-84 md:h-[620px] h-[480px] rounded-sm bg-[#151030] shadow-lg">
            <figure className=" px-4 pt-4 md:px-6 md:pt-6">
              <a href="https://github.com/NekruzAsh/TicTacToeAI.git"
                  target="_blank">
              <img
                className="rounded-sm w-[375px] h-[160px] md:h-[250px] md:w-[450px]"
                src="/images/tictactoe.png"
                alt="TicTacToeAI"
              />
              </a>
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#e8ddff]">
                <a
                  href="https://github.com/NekruzAsh/TicTacToeAI.git"
                  target="_blank"
                  className="hover:text-[#aba6c4] transform duration-500"
                >
                  Tic-Tac-Toe AI
                </a>
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#aba6c4]">
                Tic-Tac-Toe game with two different game modes: Player Vs.
                Player and Player Vs. AI. Developed with Python's{" "}
                <span className="text-[#915fff]">Tkinter GUI</span>{" "}
                library and{" "}
                <span className="text-[#915fff]">Minimax algorithm</span> to
                make an unbeatable AI opponent. Researched the Minimax algorithm
                and implemented the algorithm for AI decision-making,
                considering different possible outcomes.
              </p>
              <div className="card-actions justify-start mx-[-14px] md:px-2 md:mt-[-100px] text-[#aba6c4]">
                <div className="badge badge-outline text-xs md:text-[15px]">
                  Python
                </div>
                <div className="badge badge-outline text-xs md:text-[15px]">
                  Minimax
                </div>
              </div>
              <div className="card-actions space-x-2 items-center justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <a
                  href="https://github.com/NekruzAsh/TicTacToeAI.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#915fff] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
