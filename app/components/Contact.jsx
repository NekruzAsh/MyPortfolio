import React from "react";
import Link from "next/link";

import { FiGithub, FiLinkedin} from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <div className="max-w-[760px] m-auto lg:px-2 md:px-20 md:py-16 px-2 py-2 w-full">
        <p className="text-lg text-[#f44336] py-2 text-center">
          03. What's Next?
        </p>
        <h2 className=" text-[#BFD0E3] py-4 text-center md:text-[60px] mx-auto">
          Get In Touch
        </h2>
        <p className="text-[#7899BD] text-[17px] py-4 text-center mx-10 mb-10">
          If you have any opportunities, insights, or just want to say hi,
          please message me. I will get back to you as soon as possible!
        </p>
        <div className="flex justify-center space-x-4 items-center mt-10 lg:hidden md:hidden">
          <a
            href="https://github.com/NekruzAsh"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nekruzash/"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <SiDevpost size={24} />
          </a>
        </div>
        <div className="text-sm text-center md:mt-36 mt-4 text-[#7899BD] cursor-pointer">
          <a
            className="hover:text-[#f44336] transition-colors duration-500"
            href="https://github.com/NekruzAsh/MyPortfolio.git"
            target="_blank"
          >
            Designed and Built by Nekruz Ashrapov
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
