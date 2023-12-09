"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#222222]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/images/nwanyzch.png" alt="logo" width={68} height={68} quality={100}  />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-orange-500">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-orange-500">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-orange-500">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-orange-500">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:border-orange-500">
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
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/images/nwanyzch.png"
                alt="logo"
                width={68}
                height={68}
                quality={100}
                
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} className="text-orange-500" />
              </div>
            </div>
            <div className="border-b border-orange-500 my-4">
              <p className="text-black w-[85%] md:w-[90%] py-4">
                Let's Build the Future Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm text-black">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm text-black">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm text-black">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm text-black">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm text-black">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase text-[#f55600] tracking-widest">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn size={25} className="text-[#f55600]" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={25} className="text-[#f55600]" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={25} className="text-[#f55600]" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <LuNewspaper size={25} className="text-[#f55600]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
