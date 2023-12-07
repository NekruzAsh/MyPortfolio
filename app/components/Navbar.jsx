import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image 
        src="/images/nwanyzch.png" 
        alt="logo"
        width={50} 
        height={50} 
        />
        <div>
          <ul className="hidden md:flex" >  
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
