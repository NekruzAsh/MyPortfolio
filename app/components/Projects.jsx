"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="max-w-3xl">
        <h2 className="text-[#BFD0E3] py-4 flex items-center">
          <span className=" text-[#f44336]">03.&nbsp;</span> My Work
          <hr className="border-[#2f3b49] border-t-1 ml-4 flex-grow" />
        </h2>

        <p className="mb-16 text-[#7899BD] text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chat App */}
          <div className="card w-84 md:h-[720px] h-[600px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/chat.png"
                alt="Chat Application"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                Chat Application
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Simple chat application that allows users to signin with their
                Google account and send messages. Developed a Firebase backend
                server to store user data, messages, and to retrieve chat
                messages in real-time. Implemented Firebase Authentication to
                authenticate users through Google accounts. Researched different
                Firebase services like Firestore database to automatically sync
                data across devices in a new collection document.
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">
                  ReactJS
                </div>
                <div className="badge badge-outline">
                  JavaScript
                </div>
                <div className="badge badge-outline">
                  Tailwind CSS
                </div>
                <div className="badge badge-outline">
                  Firebase
                </div>
                <div className="badge badge-outline">
                  DaisyUI
                </div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a target="_blank" href="https://chatapp-3a0e9.web.app/">
                    DEMO
                  </a>
                </button>
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/Chat-app.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Quiz Gen */}

          <div className="card w-84 md:h-[720px] h-[650px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/quizgenn.png"
                alt="QuizGen Website"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                QuizGen Hackathon
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Tool built for teachers and students to generate quiz questions
                using AI and user text input. Developed with Cohere AI API and
                JavaScript to fetch data from the API, read user input and
                generate questions based on the content. Researched 3 different
                AI companies to test and implement their product in our project.
                Leveraged AI parameters like temperature, context length, and
                max tokens to fine-tune the behavior of the AI model to best fit
                our project. Increased productivity and efficiency by 45% during
                studying and test preparation for final exam week.
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline">HTML</div>
                <div className="badge badge-outline">CSS</div>
                <div className="badge badge-outline">
                  JavaScript
                </div>
                <div className="badge badge-outline">
                  Cohere AI
                </div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://nekruzash.github.io/QuizGen/"
                  >
                    DEMO
                  </a>
                </button>
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/QuizGen.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Todo app */}

          <div className="card w-84 md:h-[720px] h-[600px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/todoapp.png"
                alt="To-do"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                To-Do Notes App
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Single page to-do notes web application with CRUD operations
                that allow users to create, delete and mark completed tasks.
                Developed with NextJS and JavaScript using ternary operators and
                event handlers. Utilized 'useState' React hook to manage the
                state of the application. Improved managing tasks, reduced
                mental load, and helped allocate time effectively and meet
                deadlines.
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">
                  ReactJS
                </div>
                <div className="badge badge-outline">
                  JavaScript
                </div>
                <div className="badge badge-outline">
                  Tailwind CSS
                </div>
                <div className="badge badge-outline">
                  DaisyUI
                </div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://to-do-app-weld-seven.vercel.app/"
                  >
                    DEMO
                  </a>
                </button>
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/To-Do-App.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Forum Website */}

          <div className="card w-84 md:h-[720px] h-[600px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/forum.png"
                alt="forum website"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                Forum Website
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Forum website clone similar to{" "}
                <a
                  className="text-[#f44336]"
                  target="_blank"
                  href="https://www.reddit.com/"
                >
                  Reddit.com
                </a>{" "}
                where users can signup and login using existing accounts. Built
                a backend server with ExpressJS web framework, JavaScript, and
                MongoDB to maintain scalability and performance. Implemented
                Bcrypt algorithm to hash and encrypt user passwords to ensure
                security against brute force attacks.
                <br />
                <span className="text-[#f44336]">Try it out!</span>
                <br />
                Username: username
                <br />
                Password: 1234
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline ">
                  ExpressJS
                </div>
                <div className="badge badge-outline ">CSS</div>
                <div className="badge badge-outline ">
                  JavaScript
                </div>
                <div className="badge badge-outline ">
                  MongoDB
                </div>
                <div className="badge badge-outline ">NodeJS</div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a target="_blank" href="https://forumwebsite.onrender.com">
                    DEMO
                  </a>
                </button>
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/forumwebsite.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Amazon Affiliate */}

          <div className="card w-84 md:h-[720px] h-[580px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className="px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/amazon.png"
                alt="Amazon Affiliate"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                Amazon Affiliate
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Article website used to promote Amazon products specifically
                technology category and earn commission from Amazon Affiliate
                marketing program. Developed and designed with HTML, CSS and
                JavaScript to enhance user experience. Researched different
                articles and products to promote based on the market demand and
                competition. Integrated different SEO techniques to rank higher
                in search results.
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline ">HTML</div>
                <div className="badge badge-outline ">CSS</div>
                <div className="badge badge-outline ">
                  JavaScript
                </div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://nekruzash.github.io/amazonaffiliate/"
                  >
                    DEMO
                  </a>
                </button>
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/amazonaffiliate.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* TicTacToe AI */}

          <div className="card w-84 md:h-[720px] h-[580px] bg-[#101922] shadow-lg shadow-blue-900">
            <figure className=" px-4 pt-4 md:px-6 md:pt-6">
              <img
                className="rounded-xl"
                src="/images/tictactoe.png"
                alt="TicTacToeAI"
              />
            </figure>
            <div className="card-body">
              <h2 className="mt-[-18px] mx-[-14px] md:mt-[-10px] md:px-2 uppercase card-title text-[#f44336]">
                Tic-Tac-Toe AI
              </h2>
              <p className="mb-2 mx-[-14px] md:mb-10 md:mt-[-5px] md:px-2 text-[14px] md:text-[16px] text-[#7899BD]">
                Tic-Tac-Toe game with two different game modes: Player Vs.
                Player and Player Vs. AI. Developed with Python's Tkinter GUI
                library and Minimax algorithm to make an unbeatable AI opponent.
                Researched the Minimax algorithm and implemented the algorithm
                for AI decision-making, considering different possible outcomes.
                Utilized event handlers for buttons and managed the state of the
                game using Python's data structures with lists, updating the UI
                accordingly.
              </p>
              <div className="card-actions justify-end mx-[-14px] md:px-2 md:mt-[-100px] text-[#BFD0E3]">
                <div className="badge badge-outline">Python</div>
                <div className="badge badge-outline">
                  Minimax
                </div>
              </div>
              <div className="card-actions justify-end mx-[-14px] mt-2 mb-[-14px] md:px-2">
                <button className="btn1 btn2">
                  <a
                    target="_blank"
                    href="https://github.com/NekruzAsh/TicTacToeAI.git"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
