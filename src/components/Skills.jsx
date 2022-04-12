import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css3.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.png';
import Node from '../assets/node-js.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/file_type_tailwind_icon_130128.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#1b1ba5] text-[#ccd6f6]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Experience</p>
                <p className='py-4'>These are the technologies I've dabbled with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cold-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p>HTML</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills