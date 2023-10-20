import React from 'react'
import logo from '../assetes/logo1.png'
import{FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} alt="Logo Image" style={{width:'50px'}} />
      </div>

      {/*menu */}
      <div className='hidden md:flex' >
        <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      </div>
     {/* hamburger*/}
     <div className='hidden'>
     <FaBars/>
     </div>

     {/* mobile menu*/}
     <div className='hidden'>
        <ul>
            <li> home</li>
            <li> about</li>
            <li> home</li>
            <li> home</li>
        </ul>
     </div>

     {/* social icons*/}
     <div className='hidden'>
        
     </div>


    </div>
  )
}

export default Navbar

