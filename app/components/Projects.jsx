import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-orange-500 uppercase py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project QuizGen */}
          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
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
              is used to generate quiz questions based on the text inputted by the
              user. This tool can be used by teachers to generate quiz questions
              for their students <span className="text-orange-500">or</span>{" "}
              students can use this tool to study for their exams. This website is built with HTML, CSS, and JavaScript.
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
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh/QuizGen.git"
              >
                <Image
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">
              HTML, CSS, JavaScript, Cohere AI API, GitHub
            </p>
            <h3 className="py-6 px-auto">
              <span className="text-orange-500">Team:</span>{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/konareic/"
              >
                <span className="underline">Ibrahim Konare</span>
              </Link>
            </h3>
          </div>

          {/* Forum Website */}
          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
            <Image
              className="rounded-xl"
              src="/images/forum.png"
              width={600}
              height={600}
              alt="quizgen"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">Forum Website</h2>
            <p>
              This is a forum website clone similar to{" "}
              <Link
                className="text-orange-500 underline"
                target="_blank"
                href="https://www.reddit.com/"
                rel="noopener noreferrer"
              >
                Reddit.com
              </Link> where users can create an account and make a forum post (coming soon). This website 
              is designed to be a social media platform where users can share their thoughts and ideas about upcoming new
              games in the gaming industry. The user passwords are 
              hashed with bcrypt function and the data is saved in a MongoDB cloud database. The website is built with Express.js
              for server side rendering with Node.js, and JavaScript. 
              <br />
              <span className="text-orange-500">Try it out!</span>
              <br />
                Username: username
                <br />
                Password: 1234
              
            </p>
            <div className="flex justify-center py-8">
              <button className="px-4 py-2 rounded-md hover:scale-105 ease-in duration-300 mr-9">
                <Link
                  target="_blank"
                  href="https://forumwebsite.onrender.com"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
              </button>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh/forumwebsite.git"
              >
                <Image
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">
              Express.js, CSS, JavaScript, MongoDB, Node.js, GitHub
            </p>
          </div>

          {/* Amazon Affiliate */}

          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
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
              of Amazon Affiliate partnership marketing. Specifically, the
              website promotes the best laptops of a given year. This website is built with HTML, CSS, and JavaScript.
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
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh/amazonaffiliate.git"
              >
                <Image
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">HTML, CSS, JavaScript, GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
