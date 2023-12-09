import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-orange-500 uppercase py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

        {/* Project QuizGen */}
          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-orange-500 to-[#a04800]">
            <Image
              className="rounded-xl"
              src="/images/quizgenn.png"
              width={600}
              height={600}
              alt="quizgen"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">QuizGen - MakeUC Hackathon 2023</h2>
            <p>
              This website enables users to input their own text and the amount
              of questions they want to generate. The Cohere AI LLM model's API
              is used to generate questions based on the text inputted by the
              user. This tool can be used by teachers to generate quiz questions
              for their students <span className="text-orange-500">or</span>{" "}  
               students can use this tool to study for their exams.
              <br />
              <span className="text-orange-500">Try it out!</span>
            </p>
            <div className="flex justify-center py-8">
            <button className="px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 mr-9">
              <Link
                target="_blank"
                href="https://nekruzash.github.io/QuizGen/"
                rel="noopener noreferrer"
              > 
                Demo
              </Link>
            </button>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/NekruzAsh/QuizGen.git">
            <Image
              src="/images/github.png"
              width={50}
              height={50}
              alt="github"
            />
            </Link>
            </div>
            <h3 className="text-orange-500 py-2">Tech Stack:</h3>
            <p className="text-gray-300">
              HTML, CSS, JavaScript, Cohere AI LLM, GitHub
            </p>
            <h3 className="py-6 px-auto">
              <span className="text-orange-500">Team:</span>{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/konareic/"
              >
                Ibrahim Konare
              </Link>
            </h3>
          </div>

          {/* Project 2 */}
          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-orange-500 to-[#a04800]">
            <Image
              className="rounded-xl"
              src="/images/quizgenn.png"
              width={600}
              height={600}
              alt="quizgen"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">QuizGen - MakeUC Hackathon 2023</h2>
            <p>
              This website enables users to input their own text and the amount
              of questions they want to generate. The Cohere AI LLM model's API
              is used to generate questions based on the text inputted by the
              user. This tool can be used by teachers to generate quiz questions
              for their students <span className="text-orange-500">or</span>{" "}  
               students can use this tool to study for their exams.
              <br />
              <span className="text-orange-500">Try it out!</span>
            </p>
            <div className="flex justify-center py-8">
            <button className="px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 mr-9">
              <Link
                target="_blank"
                href="https://nekruzash.github.io/QuizGen/"
                rel="noopener noreferrer"
              > 
                Demo
              </Link>
            </button>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/NekruzAsh/QuizGen.git">
            <Image
              src="/images/github.png"
              width={50}
              height={50}
              alt="github"
            />
            </Link>
            </div>
            <h3 className="text-orange-500 py-2">Tech Stack:</h3>
            <p className="text-gray-300">
              HTML, CSS, JavaScript, Cohere AI LLM, GitHub
            </p>
            <h3 className="py-6 px-auto">
              <span className="text-orange-500">Team:</span>{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/konareic/"
              >
                Ibrahim Konare
              </Link>
            </h3>
          </div>
            
            {/* Amazon Affiliate */}

            <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-orange-500 to-[#a04800]">
            <Image
              className="rounded-xl"
              src="/images/amazon.png"
              width={600}
              height={600}
              alt="quizgen"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">Amazon Affiliate</h2>
            <p>
              This is an article website that promotes the technology category
              of Amazon Affiliate partnership marketing. Specifically, the website 
              promotes the best laptops of given year.
              <br />
              <span className="text-orange-500">Try it out!</span>
            </p>
            <div className="flex justify-center py-8">
            <button className="px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 mr-9">
              <Link
                target="_blank"
                href="https://nekruzash.github.io/amazonaffiliate/"
                rel="noopener noreferrer"
              > 
                Demo
              </Link>
            </button>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/NekruzAsh/amazonaffiliate.git">
            <Image
              src="/images/github.png"
              width={50}
              height={50}
              alt="github"
            />
            </Link>
            </div>
            <h3 className="text-orange-500 py-2">Tech Stack:</h3>
            <p className="text-gray-300">
              HTML, CSS, JavaScript, GitHub
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
