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
          <span className=" text-[#64feda] txt font-medium text-[70%]">
            02.&nbsp;
          </span>{" "}
          My Work
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
        {/* Forum Website */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">Full Stack Web Application</div>
            <h4 className="project-title">
              <a
                href="https://forumwebsite.onrender.com"
                target="_blank"
                className="hover:text-[#64feda] transform duration-500"
              >
                Forum Website
              </a>
            </h4>
            <div className="project-details">
              <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
                Forum website clone similar to{" "}
                <a
                  className="text-[#64feda] hover:underline underline-offset-4"
                  target="_blank"
                  href="https://www.reddit.com/"
                >
                  Reddit.com
                </a>{" "}
                where users can signup and login using existing accounts.
                Developed with <span className="text-[#64feda]">MongoDB</span>{" "}
                to store user data and{" "}
                <span className="text-[#64feda]">Bcrypt</span> to hash passwords
                securely.
                <span className="text-[#64feda]"> Try it out:</span>
                <br />
                Username: username
                <br />
                Password: 1234
              </p>
              <ul className="font-[15px]">
                <li>Express</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
              <div className="space-x-2 flex justify-end md:justify-start mt-4">
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
          </div>

          <div className="project-img">
            <a href="https://forumwebsite.onrender.com" target="_blank">
              <img src="/images/forum.webp" alt="forum application image" />
            </a>
          </div>
        </div>

        {/* QuizGen AI */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">24-hour Hackathon Project</div>
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
              <p className="shadow-xl text-left md:text-right hover:shadow-black/50 transform-shadow duration-300">
                Tool built for teachers and students to generate quiz questions
                using AI and user text input. Developed with{" "}
                <span className="text-[#64feda]">Cohere AI API</span> to read
                user input and generate questions based on the content.
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

        {/* google ai hack */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">Google AI Hackathon 2024</div>
            <h4 className="project-title">
              <a
                href="https://google-hacks-delta.vercel.app/"
                target="_blank"
                className="hover:text-[#64feda] transform duration-500"
              >
                Friendli
              </a>
            </h4>
            <div className="project-details">
              <p className="shadow-xl hover:shadow-black/50 transform-shadow duration-300">
                Connects volunteers & seniors via a user-friendly platform,
                using{" "}
                <span className="text-[#64feda]">
                  AI to match based on shared interests
                </span>
                . Then uses <span className="text-[#64feda]">video calls</span>{" "}
                to facilitate meaningful conversations, combating elderly
                loneliness and depression.
              </p>
              <ul className="font-[15px]">
                <li>Next.js</li>
                <li>React.js</li>
                <li>AgoraRTC</li>
                <li>Supabase</li>
                <li>Gemini AI</li>
              </ul>
              <div className="space-x-2 flex justify-end md:justify-start mt-4">
                <a
                  href="https://github.com/NekruzAsh/Google-AI-Hack.git"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://google-hacks-delta.vercel.app/"
                  target="_blank"
                  className="text-[#aba6c4] hover:text-[#64feda] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <a href="https://google-hacks-delta.vercel.app/" target="_blank">
              <img src="/images/friendli.webp" alt="chat application image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testProjects;
