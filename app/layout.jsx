import React from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Main from "./components/main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/SocialLinks";
import Project1 from "./components/testProjects";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Nekruz Ashrapov | Portfolio",
  description:
    "This is Nekruz Ashrapov, a Computer Science student at the University of Cincinnati, pursuing a degree in Computer Science. I am a full-stack web developer, and my expertise lies in building and designing beautiful digital applications. Currently, I am honing my skills in crafting highly responsive webpages while also learning more about back-end technologies to expand my toolkit.",

  icons: {
    icon: ["/images/favicon.ico"],
    shortcut: ["/images/apple-touch-icon.png"],

    apple: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <Main />
        <About />
        <Project1 />
        <Projects />
        <Contact />

        {children}
      </body>
    </html>
  );
}
