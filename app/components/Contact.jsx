import React from "react";
import Link from "next/link";

import { HiChevronDoubleUp } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";



const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className=" uppercase text-[#f44336] py-4">Contact.</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-blue-900 rounded-xl p-4 bg-[#101720]">
            <div className="lg:p-4 h-full">
              <div className="text-[#f0f8ff]">
                <h2 className="py-2">Nekruz Ashrapov</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for Summer 2024 Co-op/Internship. <br /> If you
                  have any opportunities, insights, or questions please reach
                  out to me at:
                </p>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><IoIosMail size={25} /></span>{" "}
                  <span className="ml-2">ashrapnz@mail.uc.edu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><IoLogoLinkedin size={25} /></span>{" "}
                  <a className="ml-2 hover:text-[#f44336]" href="https://www.linkedin.com/in/nekruzash/" target="_blank">Nekruz | LinkedIn</a>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto bg-[#101720] shadow-md shadow-blue-900 rounded-xl lg:p-4">
            <div className="p-4">
              <form method="POST" action="https://getform.io/f/6d5bba2d-1ebe-4f38-80a4-03e0c4dbd955">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col ">
                    <label className=" text-md py-2 text-[#f0f8ff]">Your Name</label>
                    <input
                      className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3 flex"
                      type="text"
                      placeholder="What's your name?"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" text-md py-2 text-[#f0f8ff]">Your Email</label>
                    <input
                      className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3 flex"
                      type="email"
                      placeholder="What's your email?"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#f0f8ff]">Your Subject</label>
                  <input
                    className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3 flex"
                    type="text"
                    placeholder="What's your subject?"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-md py-2 text-[#f0f8ff]">Your Message</label>
                  <textarea
                    className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3"
                    rows="10"
                    placeholder="What's your message?"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="text-[#f0f8ff] bg-[#f44336] hover:bg-blue-900 hover:shadow-sm hover:shadow-[#0e2a44] font-bold rounded shadow-md shadow-black py-2 px-6 inline-flex items-center">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className=" bg-[#101720] shadow-md shadow-blue-900 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiChevronDoubleUp className="m-auto text-[#f44336]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
