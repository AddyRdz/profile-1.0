import React from 'react'
import MyPetPro from '../assets/MyPetPro.jpeg'
import EBB from '../assets/EBB.jpeg'
import CodingPals from '../assets/CodingPals.jpeg'
import Blackjack from '../assets/Blackjack.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#1b1ba5] text-[#ccd6f6]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6]'>Work</p>
                <p className='py-6'>Here is some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${MyPetPro})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Website</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work