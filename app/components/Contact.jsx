import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <div className="max-w-[760px] m-auto lg:px-2 md:px-20 md:py-16 px-2 py-2 w-full">
        <p className="text-lg text-[#f44336] py-2 text-center">
          04. What's Next?
        </p>
        <h2 className=" text-[#BFD0E3] py-4 text-center md:text-[60px] mx-auto">
          Get In Touch
        </h2>
        <p className="text-[#7899BD] text-[17px] py-4 text-center mx-10 mb-10">
          I am actively seeking a{" "}
          <span className="text-[#f44336]"> Summer 2024 Internship/Co-op</span>.
          If you have any opportunities, insights, or just want to say hi,
          please message me. I will get back to you as soon as possible!
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-full w-full h-auto bg-[#101922] shadow-md shadow-blue-900 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/6d5bba2d-1ebe-4f38-80a4-03e0c4dbd955"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col ">
                    <label className=" text-md py-2 text-[#7899BD]">
                      Your Name
                    </label>
                    <input
                      className="text-[#f3f7fc] bg-[#2e3846] rounded-lg p-3 flex"
                      type="text"
                      placeholder="What's your name?"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" text-md py-2 text-[#7899BD]">
                      Your Email
                    </label>
                    <input
                      className="text-[#f3f7fc] bg-[#2e3846] rounded-lg p-3 flex"
                      type="email"
                      placeholder="What's your email?"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#7899BD]">
                    Your Subject
                  </label>
                  <input
                    className="text-[#f3f7fc] bg-[#2e3846] rounded-lg p-3 flex"
                    type="text"
                    placeholder="What's your subject?"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#7899BD]">
                    Your Message
                  </label>
                  <textarea
                    className="text-[#f3f7fc] bg-[#2e3846] rounded-lg p-3"
                    rows="10"
                    placeholder="What do you want to say?"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button>
                    <a className="relative flex w-[6rem] h-[50px] text-md mt-2 uppercase px-6 py-3 cursor-pointer text-[#f44336] hover:text-[#011222] group">
                      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0" />
                      <span className="absolute inset-0 w-full h-full border-2 border-[#f44336]" />
                      <span className="relative">send</span>
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 items-center mt-10 lg:hidden md:hidden">
          <a
            href="https://github.com/NekruzAsh"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/nekruzash/"
            target="_blank"
            className="text-[#7899BD] hover:text-[#f44336] transition-colors duration-500"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
        <div className="text-sm text-center md:mt-16 mt-4 text-[#7899BD] cursor-pointer hover:text-[#f44336] transition-colors duration-500">
          <a
            href="https://github.com/NekruzAsh/MyPortfolio.git"
            target="_blank"
          >
            Designed and Built by Nekruz Ashrapov
          </a>
        </div>
        <p className="text-sm text-center text-[#7899BD] pb-10">
          +1 (929) 554-0055
        </p>
      </div>
    </div>
  );
};

export default Contact;
