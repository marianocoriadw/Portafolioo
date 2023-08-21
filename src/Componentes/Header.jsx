import React,{useState} from 'react';
import logo from '../assets/logotipo.png';
import { RiMenuFill,RiCloseCircleLine } from "react-icons/ri";

function Header() {
    const [showMenu, setShowMenu] = useState()
    const toogleMenu =() =>{
        let responsive = document.getElementById('responsive')
        if(responsive.classList.contains('hidden')){
          responsive.classList.remove('hidden')
        }else{
          responsive.classList.add('hidden')
        }
        setShowMenu(!showMenu)
      }


  return (
    <div className='flex bg-black text-white justify-between p-2 h-auto md:h-20 md:items-center fixed z-50 w-full'>
        <div className='text-4xl text-white md:hidden' onClick={toogleMenu}>
            { showMenu ? < RiCloseCircleLine /> :  <RiMenuFill /> }
        </div>
        <div className='h-full hidden md:block px-5'>
           <img src={logo} alt=""  className='h-full'/>
        </div>
        <div id='responsive' className='hidden md:block'>
            <nav>
                <ul className={`${ showMenu ? 'flex flex-col m-10 text-2xl' : 'flex p-5'} gap-3`}>
                    <li className='hover:text-[#236392] delay-100'><a href="#inicio">INICIO</a></li>
                    <li className='hover:text-[#236392] delay-100'><a href="#sobremi">SOBRE MI</a></li>
                    <li className='hover:text-[#236392] delay-100'><a href="#skills">SKILLS</a></li>
                    <li className='hover:text-[#236392] delay-100'><a href="#proyectos">PROYECTOS</a></li>
                    <li className='hover:text-[#236392] delay-100'><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
