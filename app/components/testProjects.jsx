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
        <h2 className="text-[#cfcfcf] text-xl pl-7 pr-7 md:pl-6 md:pr-0 py-4 mt-8 flex items-center">
          My Work
          <hr className="border-[#2f2f30] border-t-1 ml-4 flex-grow" />
        </h2>
        <p className="mb-16 text-[#707173] pl-7 pr-7 md:pl-6 md:pr-0 max-w-3xl leading-[30px] z-10 relative">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>

      <div className="projects-grid">
        {/* Flashcard AI */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">AI Flashcard SaaS</div>
            <h4 className="project-title">
              <a
                href=""
                target="_blank"
                className="hover:text-[#fa243c] transform duration-500"
              >
                Flashcard AI
              </a>
            </h4>
            <div className="project-details">
              <p className="md:shadow-xl md:hover:shadow-black/50 transform-shadow duration-300">
                AI-driven flashcard SaaS app that uses{" "}
                <span className="text-[#cfcfcf]">OpenAI</span> for content
                generation, enhancing user engagement. The app also features
                integrated user authentication and payment systems through{" "}
                <span className="text-[#cfcfcf]">Clerk</span> and{" "}
                <span className="text-[#cfcfcf]">Stripe</span>, improving
                subscription rates.{" "}
                <span className="text-[#cfcfcf]">*Deployment in progress</span>.
              </p>
              <ul className="font-[15px]">
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
                <li>Clerk</li>
                <li>Stripe</li>
              </ul>
              <div className="space-x-2 flex justify-end md:justify-start mt-4">
                <a
                  href="https://github.com/Coroz2/flashcards"
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <a href="" target="_blank">
              <img src="/images/flashcard.png" alt="forum application image" />
            </a>
          </div>
        </div>

        {/* Chatbot AI */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">AI-Powered Chatbot</div>
            <h4 className="project-title">
              <a
                href="https://chatbot-ai-indol-five.vercel.app/"
                target="_blank"
                className="hover:text-[#fa243c] transform duration-500"
              >
                J.A.R.V.I.S
              </a>
            </h4>
            <div className="project-details">
              <p className="md:shadow-xl text-left md:text-right md:hover:shadow-black/50 transform-shadow duration-300">
                Developed and deployed a multi-level AI chatbot application on{" "}
                <span className="text-[#cfcfcf]">AWS EC2</span> servers,
                significantly improving deployment efficiency. Enhanced user
                satisfaction by integrating advanced features such as a
                real-time feedback mechanism algorithm.
              </p>
              <ul className="font-[15px]">
                <li>TypeScript</li>
                <li>React.js</li>
                <li>AWS</li>
                <li>Next.js</li>
              </ul>
              <div className="space-x-2 flex justify-end mt-4">
                <a
                  href="https://github.com/NekruzAsh/Chatbot-AI"
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://chatbot-ai-indol-five.vercel.app/"
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <a href="https://chatbot-ai-indol-five.vercel.app/" target="_blank">
              <img src="/images/jarvis.png" alt="QuizGenAI image" />
            </a>
          </div>
        </div>

        {/* Inventory Management */}
        <div className="project">
          <div className="project-content">
            <div className="project-label">Inventory Management</div>
            <h4 className="project-title">
              <a
                href="https://inventory-management-app-gold.vercel.app/"
                target="_blank"
                className="hover:text-[#fa243c] transform duration-500"
              >
                Pantry Tracker
              </a>
            </h4>
            <div className="project-details">
              <p className="md:shadow-xl md:hover:shadow-black/50 transform-shadow duration-300">
                Built a real-time inventory management app capable of handling
                numerous item transactions and{" "}
                <span className="text-[#cfcfcf]">search functionalities</span>.
                The app also features an accessible user interface, improving
                accessibility for individuals with{" "}
                <span className="text-[#cfcfcf]">diverse</span> abilities.
              </p>
              <ul className="font-[15px]">
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>React.js</li>
                <li>Firebase</li>
              </ul>
              <div className="space-x-2 flex justify-end md:justify-start mt-4">
                <a
                  href="https://github.com/NekruzAsh/inventory-management-app"
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiGithub size={23} />
                </a>
                <a
                  href="https://inventory-management-app-gold.vercel.app/"
                  target="_blank"
                  className="text-[#999a9e] hover:text-[#fa243c] transform duration-500"
                >
                  <FiExternalLink size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <a
              href="https://inventory-management-app-gold.vercel.app/"
              target="_blank"
            >
              <img
                src="/images/inventoryapp.png"
                alt="chat application image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testProjects;
