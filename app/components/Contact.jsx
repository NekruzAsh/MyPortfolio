
import React from "react";
import Link from "next/link";

import { HiChevronDoubleUp } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";



const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-[#f44336] uppercase text-[17px]">What's next?</p>
        <h2 className=" text-[#f0f8ff] py-4">Contact.</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-blue-900 rounded-xl p-4 bg-[#101720]">
            <div className="lg:p-4 h-full">
              <div className="text-[#f0f8ff]">
                <h2 className="py-2">Nekruz Ashrapov</h2>
                <p className="text-gray-400 uppercase">Student/Developer</p>
                <p className="py-4 text-[#f0f8ff]">
                  Available for Summer 2024 Co-op/Internship. <br /> If you
                  have any opportunities, insights, or questions please reach
                  out to me at:
                </p>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><IoIosMail size={25} /></span>{" "}
                  <span className="ml-2 text-[#f0f8ff]">ashrapnz@mail.uc.edu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#f44336]"><FaPhoneSquare size={25} /></span>{" "}
                  <span className="ml-2 text-[#f0f8ff]">+1 (929) 554-0055</span>
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
                  <label className=" text-md py-2 text-[#f0f8ff]">Your Message</label>
                  <textarea
                    className="text-[#f0f8ff] bg-[#0e2a44] rounded-lg p-3"
                    rows="10"
                    placeholder="What do you want to say?"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="btn7 btn5 uppercase">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className=" bg-[#101720] shadow-sm animate-bounce shadow-blue-900 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiChevronDoubleUp className="m-auto text-[#f44336]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

