
import { Rubik } from 'next/font/google'
import './globals.css'
 


//components
import Navbar from './components/Navbar'
import Main from './components/main'
import About from './components/About'
import Skills from './components/skills'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Nekruz | Student/Developer',
  description: 'This is the portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <Main />
        <About />
        <Skills />
        
        {children}</body>
    </html>
  )
}
