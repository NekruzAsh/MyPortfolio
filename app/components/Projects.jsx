import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-orange-500 uppercase py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

        {/* To-Do App */}
        <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
            <Image
              className="rounded-xl"
              src="/images/todoapp.png"
              width={600}
              height={600}
              alt="to-do application"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">To-Do Notes App</h2>
            <p className="text-[15px]">
              
              
              · This is a simple to-do notes application that allows users to create, delete and mark completed tasks.
              <br />
              · The data is saved in the local storage of the browser.
              <br />
              · Developed with NextJS and JavaScript using ternary operators and event handlers.
              <br />
              · Utilized 'useState' React hook to manage the state of the application.
              <br />
              · Improved managing tasks, reduced mental load, and helped allocate time effectively and meet deadlines. 
              <br />
              <span className="text-orange-500 text-[15px]">Try it out!</span>
            
            </p>
            <div className="flex justify-center py-8">
              <button className="mr-10 px-4 py-2 border-2 border-orange-500 rounded-lg text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
                <Link
                  target="_blank"
                  href="https://to-do-app-weld-seven.vercel.app/"
                  rel="noopener noreferrer"
                >
                  Demo
                </Link>
              </button>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NekruzAsh/To-do-App.git"
              >
                <Image
                  className="hover:scale-105 duration-300 ease-in"
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">
              JavaScript · ReactJS · NextJS · TailwindCSS · DaisyUI · GitHub
            </p>
          </div>


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
            <p className="text-[15px]">
            
              · This is a tool built for teachers and students to generate quiz questions using AI and user text input. 
              <br />
              · Developed with Cohere AI API and JavaScript to fetch data from the API, read user input and generate questions based on the content.
              <br />
              · Researched 3 different AI companies to test and implement their product in our project.
              <br />
              · Leveraged AI parameters like temperature, context length, and max tokens to fine-tune the behavior of the AI model to best fit our project.
              <br />
              · Increased productivity and efficiency by 45% during studying and test preparation for final exam week.
              <br />
              <span className="text-orange-500 text-[15px]">Try it out!</span>
              
            </p>
            <div className="flex justify-center py-8">
              <button className="mr-10 px-4 py-2 border-2 border-orange-500 rounded-lg text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
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
                  className="hover:scale-105 duration-300 ease-in"
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">
              HTML · CSS · JavaScript · Cohere AI · GitHub
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
              alt="forum website"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">Forum Website</h2>
            <p className="text-[15px]">
              · This is a forum website clone similar to <a className="text-orange-500" target="_blank" href="https://www.reddit.com/">Reddit.com</a> where users can signup and 
              login using existing accounts. Posting and commenting on posts (coming soon).
              <br />
              · Researched database management systems like MongoDB and PostgreSQL to store user data in a cloud database.
              <br />
              · Built a backend server with ExpressJS web framework and JavaScript to maintain scalability and performance.
              <br />
              · Implemented Bcrypt algorithm to hash and encrypt user passwords to ensure security against brute force attacks.
              <br />
              <span className="text-orange-500 text-[15px]">Try it out!</span>
              <br />
              Username: username
              <br />
              Password: 1234
            </p>
            <div className="flex justify-center py-8">
              <button className="mr-10 px-4 py-2 border-2 border-orange-500 rounded-lg text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
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
                  className="hover:scale-105 duration-300 ease-in"
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">
              ExpressJS · CSS · JavaScript · MongoDB · NodeJS · GitHub
            </p>
          </div>

          {/* Amazon Affiliate */}

          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
            <Image
              className="rounded-xl"
              src="/images/amazon.png"
              width={600}
              height={600}
              alt="Amazon Affiliate"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">Amazon Affiliate</h2>
            <p className="text-[15px]">
            
              · This is an article website used to promote Amazon products specifically technology category and earn commission from Amazon Affiliate marketing program.
              <br />
              · Developed and designed with HTML, CSS and JavaScript to enhance user experience.
              <br />
              · Researched different articles and products to promote based on the market demand and competition.
              <br />
              · Integrated different SEO techniques to rank higher in search results.
              <br />
              <span className="text-orange-500 text-[15px]">Try it out!</span>
            </p>
            <div className="flex justify-center py-8">
              <button className="mr-10 px-4 py-2 border-2 border-orange-500 rounded-lg text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
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
                  className="hover:scale-105 duration-300 ease-in"
                  src="/images/github.png"
                  width={50}
                  height={50}
                  alt="github"
                />
              </Link>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">HTML · CSS · JavaScript · GitHub</p>
          </div>

          {/* Autonomous Robot */}
          <div className="relative flex items-center md:m-auto justify-center h-auto w-full shadow-lg shadow-gray-600 rounded-xl p-4 bg-gradient-to-r from-black to-[#222222]">
            <Image
              className="rounded-xl"
              src="/images/atrrobot.png"
              width={600}
              height={600}
              alt="Atr Robot"
            />
          </div>
          <div className="m-auto px-4 sm:px-8 md:px-20 lg:px-28">
            <h2 className="py-4">Autonomous Robot</h2>
            <p className="text-[15px]">
              · Built and designed an autonomous robot similar to Amazon's Proteus warehouse robot that can scan barcodes and deliver packages to the designated location. 
              <br />
              · Developed with Python and LEGO Mindstorms to control the robot's movement and behavior.
              <br />
              · Collaborated with a team of 4 different engineering discipline students to design and build the robot for an Engineering Design course at the University 
              of Cincinnati.
              <br />
              · Reached the final demo where the robot was able to autonomously scan barcodes and deliver packages to the designated locations in the maze.
              <br />
              
              <span className="text-orange-500 text-[15px]">
                Check out the docs for more information.
              </span>
            </p>
            <div className="flex justify-center py-8">
              <button className="px-5 py-3 border-2 border-orange-500 rounded-lg text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
                <Link
                  target="_blank"
                  href="/images/P4_DN_Team297.pdf"
                  rel="noopener noreferrer"
                >
                  Docs
                </Link>
              </button>
            </div>
            <h3 className="text-orange-500 py-2">Technologies</h3>
            <p className="text-gray-300">Python · EV3 Brick · Microsoft Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
