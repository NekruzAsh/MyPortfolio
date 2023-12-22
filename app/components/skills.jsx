import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-orange-500 uppercase py-4">Languages and Tools</h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222]">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/images/css.png" width={64} height={64} alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#222222]">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="uppercase text-[#222222]">tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="uppercase text-[#222222]">javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222]">REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222]">GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/mongodb.png"
                  width={36}
                  height={36}
                  alt="mongodb"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#222222]">MONGODB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222]">C++</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222] uppercase">Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                
                <Image
                  src="/images/expressjs.png"
                  width={64}
                  height={64}
                  alt="Expressjs"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#222222] uppercase">ExpressJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/images/nextjs.png"
                  width={64}
                  height={64}
                  alt="NextJS"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-[#222222] uppercase">NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-200 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300">
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
                <h3 className="text-[#222222]">C</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
