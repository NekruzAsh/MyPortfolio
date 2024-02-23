"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const myResume = "/images/NekruzAshrapov_Resume_Summer2024.pdf";


const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const hamburgerRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    if (hamburgerRef.current) {
      hamburgerRef.current.checked = !nav;
    }
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
            src="/images/logoo.png"
            alt="logo"
            width={70}
            height={70}
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
            <Link href="/#projects">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
                <span className="text-[#f44336]">02.</span> Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md text-[#7899BD] hover:text-[#f44336] transition-colors duration-500">
                <span className=" text-[#f44336]">03.</span> Contact
              </li>
            </Link>
            <button class="button">
            <a
              href={myResume}
              target="_blank"
              className="an mx-4 ml-10  px-6 py-1"
            ><span className="span">
              
                Resume  
                </span>
            </a>
            </button>
          </ul>
          <div className="md:hidden">
            <label className="hamburger">
              <input type="checkbox" ref={hamburgerRef} onClick={handleNav} />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : "hidden"
        }
      >
        <div
          className={
            nav
            ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0F1D2D] p-10 transition-transform duration-500 transform translate-x-0"
            : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div>
          </div>
          <div className="items-center text-center py-4 mx-auto mt-36 flex flex-col">
            <ul className=" hover:text-[#f44336] transition-colors duration-500">
              <Link href="/#about">
                <li className="py-4 text-[17px] text-[#7899BD]">
                  <span className="text-[#f44336]">01.</span>
                  <br />
                  About
                </li>
              </Link>

              <Link href="/#projects">
                <li className="py-4 text-[17px] text-[#7899BD]">
                  <span className="text-[#f44336]">02.</span>
                  <br />
                  Work
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-[17px] text-[#7899BD]">
                  <span className="text-[#f44336]">03.</span>
                  <br />
                  Contact
                </li>
              </Link>
            </ul>
            <a
              href={myResume}
              target="_blank"
              className="relative flex w-[7rem] h-[50px] mt-4 text-md px-6 py-3 cursor-pointer text-[#f44336] hover:text-[#011222] group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 border-2 border-[#f44336] group-hover:bg-[#BFD0E3] group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute inset-0 w-full h-full border-2 border-[#f44336]" />
              <span className="relative">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
