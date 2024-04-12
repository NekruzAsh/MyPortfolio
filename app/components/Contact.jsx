"use client";
import React from "react";
import Link from "next/link";
import "../globals.css";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <div
    ref={ref}
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <div className="py-2 mt-14 md:mt-32 w-full">
        <motion.p
          
          className="text-lg text-[#64feda] py-2 text-center"
          initial="hidden"
          animate={animation}
          variants={textVariants}
        >
          03. What's Next?
        </motion.p>
        <motion.h2
         
          className=" text-[#e8ddff] md:py-4 text-center md:text-[60px] mx-auto"
          initial="hidden"
          animate={animation}
          variants={lineVariants}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          
          className="text-[#aba6c4] text-[17px] py-4 text-center items-center mx-auto box box-border w-[340px] h-[120px] md:w-[580px] mb-10"
          initial="hidden"
          animate={animation}
          variants={textVariants}
        >
          If you have any opportunities, insights, or just want to say hi,
          please message me. I will get back to you as soon as possible!
        </motion.p>
        <motion.div
          
          className="flex justify-center space-x-4 items-center mt-10 mb-4"
          initial="hidden"
          animate={animation}
          variants={lineVariants}
        >
          <a
            href="https://github.com/NekruzAsh"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nekruzash/"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            className="text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500"
          >
            <SiDevpost size={24} />
          </a>
        </motion.div>

        <motion.div
          
          initial="hidden"
          animate={animation}
          variants={lineVariants}
          className="text-sm md:mt-0 mt-5 text-[#aba6c4] styledFooter"
        >
          <a
            className="hover:text-[#64feda] transition-colors duration-500"
            href="https://github.com/NekruzAsh/MyPortfolio.git"
            target="_blank"
          >
            <p>Designed &amp; Built by Nekruz Ashrapov</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
