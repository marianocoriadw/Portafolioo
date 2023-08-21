import React from 'react'
import logo from '../assets/porton.png'


function Proyectos() {
  return (
    <div id="proyectos"className='min h-[100vh] h-auto bg-[#1e2326]'>
      <div className='text-center text-5xl text-white p-10'>
          <h1 className='pt-10'>Proyectos</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <div className='grid col-span-1 text-center text-3xl text-white border-solid items-center m-4 bg-[#252A2E] rounded-xl]'>
          <div className='p-5'>
            <img src={logo} alt="" />
          </div>
          <p className='text-xl'>Proyecto responsive e-commerce</p>
          <a href="https://silver-pothos-370fcd.netlify.app/" target='_blank'>Ver</a>
        </div>
        <div className='grid col-span-1 text-center text-3xl text-white border-solid items-center m-4 bg-[#252A2E] rounded-xl]'>
          <div className='p-5'>
            <img src={logo} alt="" />
          </div>
          <p className='text-xl'>Proyecto e-commerce JS</p>
          <a href="https://marianocoriadw.github.io/carritoJs/" target='_blank'>Ver</a>
        </div>
        <div className='grid col-span-1 text-center text-3xl text-white border-solid items-center m-4 bg-[#252A2E] rounded-xl]'>
          <div className='p-5'>
            <img src={logo} alt="" />
          </div>
          <p className='text-xl'>Proyecto seguros mobile html-css</p>
          <a href="https://marianocoriadw.github.io/Seguros/" target='_blank'>Ver</a>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Proyectos
