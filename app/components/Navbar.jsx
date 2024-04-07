"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import anime from "animejs/lib/anime.es.js";
import "../projects.scss";

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
          ? "fixed w-full h-24 z-[100] bg-[#050817] backdrop-filter backdrop-blur-lg bg-opacity-50 transition-shadow duration-500"
          : "fixed w-full h-24 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <svg
            id="hexagon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50"
            height="50"
          >
            <g>
              <g
                id="B"
                transform="translate(32, 34)"
                fill="#64FFDA"
                style={{ opacity: 1 }}
                fontFamily="system-ui,Calibre-Medium, Calibre,sans-serif"
                fontSize="50"
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
                stroke="#64FFDA"
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
        <div>
          <ul className="hidden items-center md:flex">
            <Link href="/#about">
              <li className="ml-10 text-lg text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                <span className=" text-[#64feda]">01.</span> About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-lg text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                <span className="text-[#64feda]">02.</span> Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-lg text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                <span className=" text-[#64feda]">03.</span> Contact
              </li>
            </Link>
            <a
              href={myResume}
              target="_blank"
              className="button ml-10 mr-6 text-lg"
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
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#050817] p-10 transition-transform duration-500 transform translate-x-0"
              : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div className="items-center text py-4 mx-auto flex flex-col justify-center h-full">
            <Link href="/#about">
              <div className="py-4 text-[17px] text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                
                About
              </div>
            </Link>

            <Link href="/#projects">
              <div className="py-4 text-[17px] text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                
                Work
              </div>
            </Link>
            <Link href="/#contact">
              <div className="py-4 text-[17px] text-[#aba6c4] hover:text-[#64feda] transition-colors duration-500">
                
                Contact
              </div>
            </Link>
            <a href={myResume} target="_blank" className="button mt-5 text-lg">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
