import React , {useState}from 'react'
import logo from '../assetes/logo1.png'
import{FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
  const [nav , setNav] = useState(false)
  const handleClick=() => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} alt="Logo Image" style={{width:'50px'}} />
      </div>

      {/*menu */}
        <ul className=' hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
     {/* hamburger*/}
     <div onClick={handleClick} className='md:hidden z-10'>
     {!nav ? <FaBars/> : <FaTimes />}
     </div>

     {/* mobile menu*/}
     <div className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center '}>
        <ul>
            <li className='py-6 text-4xl'> Home</li>
            <li className='py-6 text-4xl'> About</li>
            <li className='py-6 text-4xl'> Skills</li>
            <li className='py-6 text-4xl'> Work </li>
            <li className='py-6 text-4xl'> Contact</li>
        </ul>
     </div>

     {/* social icons*/}
     <div className='hidden'>
        
     </div>


    </div>
  )
}

export default Navbar

