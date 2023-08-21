import React from 'react';
import {  RiCarFill , RiComputerLine , RiRunLine , RiPlaneLine} from "react-icons/ri";
import { CgGym } from "react-icons/cg";

function Datos() {
  return (
    <div id='sobremi' className='min-h-[100vh] bg-[#1e2326]'>
      <div className='text-center text-5xl text-white p-10'>
          <h1 className='pt-10'>Sobre mi</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='col-span-1 mx-5 p-5'>
          <div className='border-solid border-4 p-5 text-xl text-white text-center rounded-xl border-[#236392]'>
            <p className='text-2xl'>
              Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales.
                Siempre tengo la mejor disposición para la realización de mis labores. Busco un puesto
              de trabajo que me ayude a seguir creciendo.
            </p>
            <div>
                <h3 className='text-[#236392] font-bold text-3xl p-5'>Datos personales</h3>
                <div>
                  <ul>
                    <li><span>Numero telefonico : 2477 624289</span></li>
                    <li><span>Email : marianodw@gmail.com</span></li>
                    <li><span>Direccion : Pergamino , Buenos Aires</span></li>
                    <li><span>Fecha de nacimiento : 11/03/1994</span></li>
                  </ul>
                </div>
            </div>
          </div>

        </div>
        <div className='col-span-1 mx-5 p-5'>
          <div className='border-solid border-4 p-5 text-xl text-white text-center rounded-xl border-[#236392]'>
              <h3 className='text-3xl p-5 pt-7'>Mi pasatiempo</h3>
              <div className='flex flex-wrap  gap-1 md:gap-5 justify-center p-2 lg:p-10'>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                <RiCarFill  className='text-5xl w-full'/>
                <p className='w-full'>AUTOS</p>
                </div>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                <RiComputerLine  className='text-5xl w-full'/>
                <p className='w-full'>CODIGO</p>
                </div>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                < CgGym className='text-5xl w-full'/>
                <p className='w-full'>GYM</p>
                </div>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                <RiComputerLine  className='text-5xl w-full'/>
                <p className='w-full'>SERIES</p>
                </div>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                <RiRunLine  className='text-5xl'/>
                <p>CORRER</p>
                </div>
                <div className='w-[100px] h-[100px] p-3 flex flex-col items-center bg-[#252A2E] rounded-xl'>
                <RiPlaneLine  className='text-5xl'/>
                <p>VIAJAR</p>
                </div>
              </div>

          </div>

        </div>
      </div>

      
    </div>
  )
}

export default Datos
