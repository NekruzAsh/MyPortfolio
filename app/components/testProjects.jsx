"use client";
import React from "react";
import "../projects.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";


const testProjects = () => {
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

  return (
    <div id="projects" className="project-container">
      <motion.div
        className="max-w-3xl mt-44"
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={textVariants}
      >
        <h2 className="text-[#e8ddff] pl-7 pr-7 md:pl-6 md:pr-0 py-4 mt-8 flex items-center">
          <span className=" text-[#64feda] font-medium text-[70%]">02.&nbsp;&nbsp;</span> My Work
          <hr className="border-[#251f41] border-t-1 ml-4 flex-grow" />
        </h2>
        <p className="mb-16 text-[#aba6c4] text-[17px] pl-7 pr-7 md:pl-6 md:pr-0 max-w-3xl leading-[30px] z-10 relative">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>

      <div className="projects-grid">

      {/* Chat Application */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Most recent project</div>
          <h4 className="project-title">
            <a
              href="https://chatapp-3a0e9.web.app/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              Chat App
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Simple chat application that allows users to signin with their
              Google account and send messages. Developed a{" "}
              <span className="text-[#64feda]">Firebase server</span> to store
              user data, messages, and to retrieve chat messages in real-time.
            </p>
            <ul className="font-[15px]">
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>Firebase</li>
            </ul>
            <div className="space-x-2 flex justify-end md:justify-start mt-4">
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
        </div>
        
        <div className="project-img">
        <a href="https://chatapp-3a0e9.web.app/" target="_blank">
          <img src="/images/chat.png" alt="chat application image" />
          </a>
        </div>
      
      </div>

      {/* QuizGen AI */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">Hackathon Project</div>
          <h4 className="project-title">
            <a
              href="https://nekruzash.github.io/QuizGenAI/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              QuizGenAI
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Tool built for teachers and students to generate quiz questions
              using AI and user text input. Developed with{" "}
              <span className="text-[#64feda]">Cohere AI API</span> to read user input and
              generate questions based on the content.
            </p>
            <ul className="font-[15px]">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Cohere AI</li>
            </ul>
            <div className="space-x-2 flex justify-end mt-4">
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
        </div>

        <div className="project-img">
          <a href="https://nekruzash.github.io/QuizGenAI/" target="_blank">
          <img src="/images/quizgenn.png" alt="QuizGenAI image" />
          </a>
        </div>
      </div>

      {/* Todo APP */}
      <div className="project">
        <div className="project-content">
          <div className="project-label">CRUD Operations Project</div>
          <h4 className="project-title">
            <a
              href="https://to-do-app-weld-seven.vercel.app/"
              target="_blank"
              className="hover:text-[#64feda] transform duration-500"
            >
              To-do App
            </a>
          </h4>
          <div className="project-details">
            <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
              Single page to-do notes web application with CRUD operations that
              allow users to create, delete and mark completed tasks. Developed
              with <span className="text-[#64feda]">NextJS</span> and <span className="text-[#64feda]">JavaScript</span>.
            </p>
            <ul className="font-[15px]">
              <li>Next.js</li>
              <li>React.js</li>
              <li>TailwindCSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="space-x-2 flex justify-end md:justify-start mt-4">
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
        </div>

        <div className="project-img">
          <a href="https://to-do-app-weld-seven.vercel.app/" target="_blank">
          <img src="/images/todoapp.png" alt="chat application image" />
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default testProjects;
