import React from 'react';
import imagen from '../assets/perfil2.png';
import { RiGithubFill , RiLinkedinBoxFill} from "react-icons/ri";

function Inicio() {
  return (
    <div id='inicio' className="bg-[url('/fondo.png')] h-[100vh] w-full bg-no-repeat bg-cover p-10 pt-24">
      <div className='mx-auto min-h-[80%] p-10 bg-[#1e2326] max-w-[350px] rounded-xl'> 
        <div className='mt-3 rounded-full'>
          <img src={imagen} alt="" className='rounded-full border-[#236392] border-4 w-full' />
        </div>
        <div className='text-white text-center p-4 gap-3'>
            <h1 className='text-2xl'>Mariano Coria</h1>
            <h2 className='text-l'>Desarrollador FrontEnd Trainee</h2>
        </div>
        <div className='flex justify-center gap-1'>
            <div className='p-1 text-5xl text-white '>
                <RiLinkedinBoxFill className='hover:bg-[#236392] hover:text-black border rounded-full p-2' />
            </div>
            <div className='p-1 text-5xl text-white'>
                <RiGithubFill className='hover:bg-[#236392] hover:text-black border rounded-full p-2' />
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Inicio
