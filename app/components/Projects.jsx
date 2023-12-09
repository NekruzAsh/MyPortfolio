import React from "react";
import Image from "next/image";
import Link from "next/link";


const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-orange-500 uppercase py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-orange-500 to-[#a04800]">
            <Image
              className="rounded-xl"
              src="/images/quizgenn.png"
              width={600}
              height={600}
              alt="quizgen"
            />
          </div>
          <div>
                <h3>QuizGen</h3>
                <p>HTML, CSS, JavaScript, Cohere AI LLM</p>
                <Link href="https://nekruzash.github.io/QuizGen/">Demo</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
