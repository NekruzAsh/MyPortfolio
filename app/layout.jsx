import React from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Main from "./components/main";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Nekruz | Student/Developer",
  description:
    "This is Nekruz Ashrapov, a student at the University of Cincinnati, pursuing a degree in Computer Science. I am a front-end web developer, and my expertise lies in building and designing beautiful digital applications. Currently, I am honing my skills in crafting highly responsive webpages while also learning more about back-end technologies to expand my toolkit.",
  
    icons:{

      icon: [

          '/images/favicon.ico',

      ],
      shortcut: [

          '/images/apple-touch-icon.png',
      ],

      apple: [

          '/images/apple-touch-icon.png',
      ],

    },

  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {children}
      </body>
    </html>
  );
}
