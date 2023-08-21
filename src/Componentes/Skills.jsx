import React from 'react';
import logo from '../assets/html.png';
import logo1 from '../assets/css.png';
import logo2 from '../assets/logojs.png';
import logo3 from '../assets/reactjs.png';
import logo4 from '../assets/sass.png';
import logo5 from '../assets/git.png';
import logo6 from '../assets/tailwindcss.png'
import logo7 from '../assets/node.png'


function Skills() {
  return (
    <div id='skills' className='min-h-[100vh] bg-[#1e2326]'>
      <div className='text-center text-5xl text-white p-10'>
          <h2 className='pt-10'>SKILLS</h2>
      </div>
      <div className='border-solid border-4 p-5 text-xl text-white text-center rounded-xl border-[#236392] flex flex-wrap gap-2 md:gap-5 justify-center  lg:p-10 w-[90%] lg:w-[70%] mx-auto h-auto' >
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>HTML</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo1} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>CSS</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1  flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo4} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>SASS</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1  flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo2} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>Javascript</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo3} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>ReactJS</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo5} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>GIT</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo6} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>Tailwind</p>
          </div>
          <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] lg:p-7 m-1 flex flex-col items-center bg-[#252A2E] rounded-xl'>
            <img src={logo7} alt="" className='w-full h-full'/>
            <p className='hidden lg:block w-full h-full'>NodeJS</p>
          </div>
      </div>
      
    </div>
  )
}

export default Skills
