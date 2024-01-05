import React from "react";
import Link from "next/link";


import { IoIosMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-[150%] flex justify-center items-center"
    >
      <div className="max-w-[760px] m-auto px-2 py-16 w-full">
        <p className="text-lg text-[#f44336] py-2 text-center">
          04. What's Next?
        </p>
        <h2 className=" text-[#BFD0E3] py-4 text-center md:text-[60px] mx-auto">
          Get In Touch
        </h2>
        <p className="text-[#7899BD] text-[17px] py-4 text-center mx-10 mb-10">
          I am actively looking for a <span className="text-[#f44336]"> Summer 2024 Internship/Co-op</span>. If you have any
          opportunities, insights, or just want to say hi, please message me. I will get back to you as soon as possible!
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
                    <label className=" text-md py-2 text-[#f0f8ff]">
                      Your Name
                    </label>
                    <input
                      className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3 flex"
                      type="text"
                      placeholder="What's your name?"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" text-md py-2 text-[#f0f8ff]">
                      Your Email
                    </label>
                    <input
                      className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3 flex"
                      type="email"
                      placeholder="What's your email?"
                      name="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#f0f8ff]">
                    Your Message
                  </label>
                  <textarea
                    className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3"
                    rows="10"
                    placeholder="What do you want to say?"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="btn7 btn5 uppercase">send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-sm text-center mt-36 text-[#7899BD] cursor-pointer hover:text-[#f44336] transition-colors duration-500">
          <a href="https://github.com/NekruzAsh/MyPortfolio.git" target="_blank">Designed and Built by Nekruz Ashrapov</a>
        </div>
          <p className="text-sm text-center text-[#7899BD]">ashrapnz@mail.uc.edu</p>
          <p className="text-sm text-center text-[#7899BD]">+1 (929) 554-0055</p>
      </div>
    </div>
  );
};

export default Contact;
