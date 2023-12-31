"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../globals.css";

const myResume = "/images/NekruzAshrapovResume.pdf";

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
          ? "fixed w-full h-20 shadow-lg shadow-black z-[100] bg-[#011222]"
          : "fixed w-full h-20 z-[100] bg-[#011222]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src="/images/jolly.png"
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
            <Link
              className="btn1 btn2 mx-4 text-md ml-10"
              href={myResume}
              target="_blank"
            >
                  Resume
            </Link>
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
              <Image
                src="/images/jolly.png"
                alt="logo"
                width={68}
                height={68}
                quality={100}
              />
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
            <div className="py-4">
              <Link
                className="btn1 btn2 mx-4 text-sm"
                href={myResume}
                target="_blank"
              >
                    Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
