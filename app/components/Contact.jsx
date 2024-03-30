import React from "react";
import Link from "next/link";
import "../globals.css";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <iframe
            src="https://my.spline.design/3dpathslines1copy-ce01ee03911f38e4c9f14fb4d2fd7721/"
            className="left-0 right-0 w-[96%] md:w-[58%] h-64 absolute mx-auto z-0"
            width="100%"
            height="100%"
          ></iframe>
      <div className=" lg:px-2 md:py-16 px-2 py-2 w-full z-20 bg-[#050817] rounded-lg bg-opacity-80">
        <p className="text-lg text-[#64feda] py-2 text-center">
          03. What's Next?
        </p>
        <h2 className=" text-[#e8ddff] md:py-4 text-center md:text-[60px] mx-auto">
          Get In Touch
        </h2>
        <p className="text-[#aba6c4] text-[17px] py-4 text-center items-center mx-auto box box-border w-[340px] h-[120px] md:w-[440px] mb-10">
          If you have any opportunities, insights, or just want to say hi,
          please message me. I will get back to you as soon as possible!
        </p>
        <div className="flex justify-center space-x-4 items-center mt-10 mb-4">
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
        </div>

        <div className="text-sm md:mt-0 mt-5 text-[#aba6c4] styledFooter">
          <a
            className="hover:text-[#64feda] transition-colors duration-500"
            href="https://github.com/NekruzAsh/MyPortfolio.git"
            target="_blank"
          >
            <p>Designed &amp; Built by Nekruz Ashrapov</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
