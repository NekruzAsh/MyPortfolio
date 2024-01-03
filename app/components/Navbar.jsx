
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    }

    window.addEventListener("scroll", changeShadow);
  }, []);

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-lg shadow-black z-[100] bg-[#011222]" : "fixed w-full h-20 z-[100] bg-[#011222]"}>
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
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#f44336]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#f44336]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#f44336]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#f44336]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#f44336]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
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
              <div
                onClick={handleNav}
                className="p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} className="text-[#f44336]" />
              </div>
            </div>
            <div className="border-b border-[#f44336] my-4">
              <p className="text-[#f0f8ff] w-[85%] md:w-[90%] py-4">
                Let's Build the Future Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li className="py-4 text-sm text-[#f0f8ff]">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm text-[#f0f8ff]">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm text-[#f0f8ff]">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm text-[#f0f8ff]">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm text-[#f0f8ff]">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
