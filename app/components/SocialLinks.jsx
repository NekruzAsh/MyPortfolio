import React from 'react'
import { FiGithub, FiLinkedin} from "react-icons/fi";
import { SiDevpost } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div>
    <div className="fixed left-10 bottom-0 space-y-6 flex flex-col items-center max-md:hidden z-20">
      <a href="https://github.com/NekruzAsh" target="_blank" className='text-[#aba6c4] hover:text-[#915fff] hover:translate-y-[-4px] duration-500'>
      <FiGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/nekruzash/" target="_blank" className='text-[#aba6c4] hover:text-[#915fff] hover:translate-y-[-4px] duration-500'>
      <FiLinkedin size={24} />
      </a>
      <a href="https://devpost.com/NekruzAsh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" className='text-[#aba6c4] hover:text-[#915fff] hover:translate-y-[-4px] duration-500'>
      <SiDevpost size={24} />
      </a>
      <div className="border-l-2 border-[#aba6c4] h-32"></div>
    </div>
    <div className="fixed right-[-12px] bottom-0 space-y-4 flex flex-col items-center text-center max-md:hidden z-20">
      <div className='rotate-90 mb-[75px] pb-1 text-md text-[#aba6c4] hover:text-[#915fff] hover:translate-y-[-4px] duration-500'>
          <p><a href="mailto:ashrapnz@mail.uc.edu" >ashrapnz@mail.uc.edu</a></p>
      </div>
      <div className="border-l-2 border-[#aba6c4] h-20"></div>
    </div>
    </div>
    
  )
}

export default SocialLinks