// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <div className='container mx-auto px-10 py-7 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <img src='public/iconheader.png' alt='Icon' className='w-16 h-16 mr-2' />
            <h2 className='text-black font-bold text-3xl'>MyTinerary</h2>
          </Link>
        </div>

        <nav className='hidden md:flex space-x-10 items-center'>
          <Link to='/' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>Home</Link>
          <Link to='/cities' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>Cities</Link>
          <Link to='/signin' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>
            <button className='bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center text-xl hover:bg-blue-400 hover:text-white transition duration-300'>
              <BsFillPersonFill className='text-white mr-2' />
              Login
            </button>
          </Link>
          <Link to='/signup' className='text-black font-bold hover:text-gray-400 transition duration-300 text-xl'>
            <button className='bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center text-xl hover:bg-blue-400 hover:text-white transition duration-300'>
              <FaUserPlus className='text-white mr-2' />
              Sign Up
            </button>
          </Link>
        </nav>

        <div className='md:hidden flex items-center'>
          <button
            className='text-black focus:outline-none'
            onClick={toggleMenu}
          >
            <BiMenuAltRight className='w-6 h-6' />
          </button>
        </div>
      </div>

      <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-2 text-center flex flex-col items-center`}>
        <li>
          <Link to='/' className='block text-white font-bold py-2 text-lg'>Home</Link>
        </li>
        <li>
          <Link to='/cities' className='block text-white font-bold py-2 text-lg'>Cities</Link>
        </li>
        <li>
          <Link to='/signin' className='block text-white font-bold py-2 text-lg'>
            <button className='w-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center text-lg hover:bg-blue-400 hover:text-white transition duration-300'>
              <BsFillPersonFill className='text-white mr-2' />
              Login
            </button>
          </Link>
        </li>
        <li>
          <Link to='/signup' className='block text-white font-bold py-2 text-lg'>
            <button className='w-auto bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center text-lg hover:bg-blue-400 hover:text-white transition duration-300'>
              <FaUserPlus className='text-white mr-2' />
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;








