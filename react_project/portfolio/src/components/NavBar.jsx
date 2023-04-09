import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex h-24 items-center text-xl font-bold justify-between mx-auto'>
      <h1 className='w-full uppercase p-4 md:p-10 text-4xl font-bold text-[var(--titles)]'>K4mp4t</h1>
      <ul className='md:flex mx-30 hidden md:p-10'>
        <li className='p-6'>Home</li>
        <li className='p-6'>Projects</li>
        <li className='p-6'>About</li>
        <li className='p-6'>Contact</li>
      </ul>
      <div className='p-6 md:hidden block' onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-[-100%] w-[60%] h-full top-0 border-r border-r-gray-600 ease-in-out duration-500' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[var(--background)] ease-in-out duration-500'}>
        <h1 className='w-full uppercase py-7 px-4 text-4xl font-bold text-[var(--titles)]'>React.</h1>  
        <ul className='pt-20 uppercase'>
          <li className='mx-3 p-1 border-b border-b-gray-600'>Home</li>
          <li className='mx-3 p-1 border-b border-b-gray-600'>Projects</li>
          <li className='mx-3 p-1 border-b border-b-gray-600'>About</li>
          <li className='mx-3 p-1 border-b border-b-gray-600'>Contact</li>
        </ul> 
      </div>
    </div>
  );
}

export default NavBar;
