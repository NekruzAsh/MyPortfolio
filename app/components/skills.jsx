import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1065px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-[#BFD0E3] py-4 sm:px-24 md:py-10 md:px-24 flex">
          <span className=" text-[#f44336]">02.&nbsp;</span> Languages & Tools
          
        </h2>
        <div className="grid md:grid-cols-2 sm:px-[100px] md:px-[100px] lg:grid-cols-3 gap-8">
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/html.png"
                  width={64}
                  height={64}
                  alt="html"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/images/css.png" width={64} height={64} alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/tailwind.png"
                  width={94}
                  height={94}
                  alt="tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase text-[#BFD0E3]">tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/javascript.png"
                  width={64}
                  height={64}
                  alt="javascript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase text-[#BFD0E3]">javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/react.png"
                  width={64}
                  height={64}
                  alt="react"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/github.png"
                  width={64}
                  height={64}
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/mongodb.png"
                  width={32}
                  height={32}
                  alt="mongodb"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">MONGODB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/cplusplus.png"
                  width={64}
                  height={64}
                  alt="cplusplus"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">C++</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/python.png"
                  width={60}
                  height={60}
                  alt="Python"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3] uppercase">Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/node.png"
                  width={64}
                  height={64}
                  alt="nodejs"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3] uppercase">nodejs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/images/git.png" width={64} height={64} alt="GIT" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3] uppercase">Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#101922] shadow-md shadow-blue-900 rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/clanguage.png"
                  width={64}
                  height={64}
                  alt="C programming language"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#BFD0E3]">C Programming Language</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
