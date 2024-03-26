"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const myResume = "https://www.linkedin.com/in/nekruzash/";

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
          ? "fixed w-full h-20 z-[100] bg-[#050817] backdrop-filter backdrop-blur-lg bg-opacity-50 transition-shadow duration-500"
          : "fixed w-full h-20 z-[100]"
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
              <li className="ml-10 text-md text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                <span className=" text-[#915fff]">01.</span> About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                <span className="text-[#915fff]">02.</span> Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                <span className=" text-[#915fff]">03.</span> Contact
              </li>
            </Link>
            <div className="button-borders ml-12 mr-8">
              <a href={myResume} target="_blank">
                <button
                  className="primary-button"
                  style={{ padding: "10px 20px" }}
                >
                  Resume
                </button>
              </a>
            </div>
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
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70"
            : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0F1D2D] p-10 transition-transform duration-500 transform translate-x-0"
              : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div></div>
          <div className="items-center text-center py-4 mx-auto mt-36 flex flex-col">
            <ul>
              <Link href="/#about">
                <li className="py-4 text-[17px] text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                  <span className="text-[#915fff]">01.</span>
                  <br />
                  About
                </li>
              </Link>

              <Link href="/#projects">
                <li className="py-4 text-[17px] text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                  <span className="text-[#915fff]">02.</span>
                  <br />
                  Work
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-[17px] text-[#aba6c4] hover:text-[#915fff] transition-colors duration-500">
                  <span className="text-[#915fff]">03.</span>
                  <br />
                  Contact
                </li>
              </Link>
            </ul>
            <div className="button-borders mt-5">
            <a
              href={myResume}
              target="_blank"
            >
              <button
                className="primary-button"
                style={{ padding: "10px 20px" }}
              >
                Resume
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
