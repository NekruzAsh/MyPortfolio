import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-10 bottom-0 space-y-4 flex flex-col items-center max-md:hidden">
      <a href="https://github.com/NekruzAsh" target="_blank" className='text-[#7899BD] hover:text-[#f44336] transition-colors duration-500'>
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/nekruzash/" target="_blank" className='text-[#7899BD] hover:text-[#f44336] transition-colors duration-500'>
        <FaLinkedinIn size={24} />
      </a>
      <div className="border-l-2 border-[#7899BD] h-20"></div>
    </div>
  )
}

export default SocialLinks