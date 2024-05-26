"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import anime from "animejs/lib/anime.es.js";
import "../projects.scss";

import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

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

  useEffect(() => {
    anime({
      targets: "#hexagon path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuart",
      duration: 2000,
      delay: function (el, i) {
        return i * 250;
      },
    });

    anime({
      targets: "#hexagon #B",
      duration: 1000,
      opacity: 1,
      easing: "easeInOutQuart",
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[3.3rem] z-[100] border-b-[1px] border-b-[#d6d6d6] bg-[#fbfbfd] backdrop-filter backdrop-blur-2xl bg-opacity-10 transition-shadow duration-500"
          : "fixed w-full h-[3.3rem] z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex justify-center items-center">
          <Link href="/#home">
            <svg
              id="hexagon"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="40"
              height="40"
            >
              <g>
                <g
                  id="B"
                  transform="translate(34, 33.4)"
                  fill="#fa243c"
                  style={{ opacity: 1 }}
                  fontFamily="system-ui,Calibre-Medium, Calibre,sans-serif"
                  fontSize="44"
                  fontWeight="400"
                  letterSpacing="4.16666603"
                >
                  <text>
                    <tspan x="0.141666985" y="33">
                      N
                    </tspan>
                  </text>
                </g>
                <path
                  stroke="#fa243c"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 50, 5
 L 11, 27
 L 11, 72
 L 50, 95
 L 89, 73
 L 89, 28 z"
                />
              </g>
            </svg>
          </Link>
          {/* <Link href="/#home">
          <Image
            src="/images/logoo.webp"
            alt="logo"
            width={80}
            height={80}
            quality={100}
          />
        </Link> */}

          <ul className="hidden items-center md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase text-[#333333] hover:text-[#000] transition-colors duration-500">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-7 text-sm uppercase text-[#333333] hover:text-[#000] transition-colors duration-500">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-7 text-sm uppercase text-[#333333] hover:text-[#000] transition-colors duration-500">
                Contact
              </li>
            </Link>
            <a
              href={myResume}
              target="_blank"
              className="ml-7 text-sm uppercase text-[#333333] hover:text-[#000] transition-colors duration-500"
            >
              Resume
            </a>
          </ul>

          <div className="md:hidden">
            <label className="hamburger">
              <input type="checkbox" ref={hamburgerRef} onClick={handleNav} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="hidden justify-end md:flex items-center">
          <ul className="flex space-x-8">
            <a href="https://x.com/NAshrapov" target="_blank">
              <li>
                <FaXTwitter
                  className="text-[#333333] hover:text-[#000] transform duration-500"
                  size={18}
                />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/nekruzash/" target="_blank">
              <li>
                <FaLinkedin
                  className="text-[#333333] hover:text-[#000] transform duration-500"
                  size={18}
                />
              </li>
            </a>
            <a href="https://github.com/NekruzAsh" target="_blank">
              <li>
                <FaGithub
                  className="text-[#333333] hover:text-[#000] transform duration-500"
                  size={18}
                />
              </li>
            </a>

            <a
              href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
            >
              <li>
                <SiDevpost
                  className="text-[#333333] hover:text-[#000] transform duration-500"
                  size={18}
                />
              </li>
            </a>
            <a href="mailto:nekruzashrapov16@gmail.com" target="_blank">
              <li>
                <MdOutlineEmail
                  className="text-[#333333] hover:text-[#000] transform duration-500"
                  size={18}
                />
              </li>
            </a>
          </ul>
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
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fafafa] p-10 transition-transform duration-500 transform translate-x-0"
              : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div className="flex flex-col items-center justify-center text py-4 mx-auto h-full mt-[-40px]">
            <Link href="/#about">
              <div className="flex flex-col items-center uppercase py-4 text-[17px] text-black transition-colors duration-500">
                About
              </div>
            </Link>

            <Link href="/#projects">
              <div className="flex flex-col items-center uppercase py-4 text-[17px] text-black transition-colors duration-500">
                Work
              </div>
            </Link>

            <Link href="/#contact">
              <div className="flex flex-col items-center uppercase py-4 text-[17px] text-black transition-colors duration-500">
                Contact
              </div>
            </Link>

            <a
              href={myResume}
              target="_blank"
              className="mt-5 uppercase text-[17px]"
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center mt-[-20px]">
            <ul className="flex space-x-8">
              <a href="https://x.com/NAshrapov" target="_blank">
                <li>
                  <FaXTwitter
                    className="text-[#333333] hover:text-[#000] transform duration-500"
                    size={22}
                  />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/nekruzash/" target="_blank">
                <li>
                  <FaLinkedin
                    className="text-[#333333] hover:text-[#000] transform duration-500"
                    size={22}
                  />
                </li>
              </a>
              <a href="https://github.com/NekruzAsh" target="_blank">
                <li>
                  <FaGithub
                    className="text-[#333333] hover:text-[#000] transform duration-500"
                    size={22}
                  />
                </li>
              </a>

              <a
                href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                target="_blank"
              >
                <li>
                  <SiDevpost
                    className="text-[#333333] hover:text-[#000] transform duration-500"
                    size={22}
                  />
                </li>
              </a>
              <a href="mailto:nekruzashrapov16@gmail.com" target="_blank">
                <li>
                  <MdOutlineEmail
                    className="text-[#333333] hover:text-[#000] transform duration-500"
                    size={22}
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
