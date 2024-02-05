import React from 'react'
import { FiGithub, FiLinkedin} from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div>
    <div className="fixed left-10 bottom-0 space-y-4 flex flex-col items-center max-md:hidden">
      <a href="https://github.com/NekruzAsh" target="_blank" className='text-[#7899BD] hover:text-[#f44336] hover:translate-y-[-4px] duration-500'>
      <FiGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/nekruzash/" target="_blank" className='text-[#7899BD] hover:text-[#f44336] hover:translate-y-[-4px] duration-500'>
      <FiLinkedin size={24} />
      </a>
      <div className="border-l-2 border-[#7899BD] h-36"></div>
    </div>
    <div className="fixed right-[-12px] bottom-0 space-y-4 flex flex-col items-center text-center max-md:hidden">
      <div className='rotate-90 mb-[75px] pb-1 text-sm text-[#7899BD] hover:cursor-pointer hover:text-[#f44336] hover:translate-y-[-4px] duration-500'>
          <p><a href="mailto:ashrapnz@mail.uc.edu" >ashrapnz@mail.uc.edu</a></p>
      </div>
      <div className="border-l-2 border-[#7899BD] h-16"></div>
    </div>
    </div>
    
  )
}

export default SocialLinks