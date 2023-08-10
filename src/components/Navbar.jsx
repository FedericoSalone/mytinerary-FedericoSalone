// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      <div className='container mx-auto px-10 py-7 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <img src='public/iconheader.png' alt='Icon' className='w-16 h-16 mr-2' />
            <h2 className='text-black font-bold text-3xl'>My Tinerary</h2>
          </Link>
        </div>

        <nav className='hidden md:flex space-x-10 items-center'>
          <Link to='/' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>Home</Link>
          <Link to='/cities' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>Cities</Link>
          <button className='bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center text-xl hover:bg-blue-400'>
            <BsFillPersonFill className='text-white mr-2' />
            Login
          </button>
        </nav>

        {/* Menú desplegable mobile */}
        <div className='md:hidden flex items-center'>
          <button
            className='text-black focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <BiMenuAltRight className='w-6 h-6' />
          </button>
        </div>
      </div>

      <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-2 text-center`}>
        <li>
          <Link to='/' className='block text-white font-bold py-2 text-lg'>Home</Link>
        </li>
        <li>
          <Link to='/cities' className='block text-white font-bold py-2 text-lg'>Cities</Link>
        </li>
        <li>
          <div className='flex justify-center'>
            <button className='w-auto bg-blue-600 text-white font-bold py-3 px-14 rounded-lg flex items-center text-lg'>
              <BsFillPersonFill className='text-white mr-2' />
              Login
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
