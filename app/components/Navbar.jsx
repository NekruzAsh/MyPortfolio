"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../globals.css";
import { ReactSVG } from "react";

const myResume = "/images/NekruzAshrapov_Resume_Summer2024.pdf";

const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", changeShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 z-[100] bg-[#011222] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#0A131E] shadow-md transition-shadow duration-500"
          : "fixed w-full h-20 z-[100] bg-[#011222]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            className="pt-5"
            src="/images/logoo.svg"
            alt="logo"
            width={80}
            height={80}
            quality={100}
          />
        </Link>
        <div>
          <ul className="hidden items-center md:flex">
            <Link href="/#about">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
              <span className=" text-[#f44336]">01.</span> About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
              <span className=" text-[#f44336]">02.</span> Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
              <span className="text-[#f44336]">03.</span> Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
              <span className=" text-[#f44336]">04.</span> Contact
              </li>
            </Link>
            <a href={myResume} target="_blank" className="relative flex w-[7rem] h-[50px] mx-4 ml-10 text-md px-6 py-3 cursor-pointer text-[#f44336] hover:text-[#011222] group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0"/>
            <span className="absolute inset-0 w-full h-full border-2 border-[#f44336]"/>
            <span className="relative">Resume</span>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden text-[#f44336]">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#011222] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
              <Image
                className="pt-5"
                src="/images/logoo.svg"
                alt="logo"
                width={68}
                height={68}
                quality={100}
              />
              </Link>
              <div onClick={handleNav} className="p-3 cursor-pointer">
                <AiOutlineClose size={30} className="text-[#f44336]" />
              </div>
            </div>
          </div>
          <div className="items-center text-center py-16 flex flex-col">
            <ul className=" hover:text-[#f44336] transition-colors duration-500">
              <Link href="/#about">
               
                <li className="py-4 text-md text-[#7899BD]"><span className="text-[#f44336]">01.</span><br />About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-md text-[#7899BD]"><span className="text-[#f44336]">02.</span><br />Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-md text-[#7899BD]"><span className="text-[#f44336]">03.</span><br />Work</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-md text-[#7899BD]"><span className="text-[#f44336]">04.</span><br />Contact</li>
              </Link>
            </ul>
            <a href={myResume} target="_blank" className="relative flex w-[7rem] h-[50px] mt-4 text-md px-6 py-3 cursor-pointer text-[#f44336] hover:text-[#011222] group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0"/>
            <span className="absolute inset-0 w-full h-full border-2 border-[#f44336]"/>
            <span className="relative">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
