import React, { useState } from 'react'
import { MenuIcon, XIcon, NewspaperIcon } from '@heroicons/react/outline'
import { Navigate } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='w-screen h-[120px] z-10 fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center ml-60 text-[#424B5A]'>
          <NewspaperIcon className='w-10 ' />
          <h1 className='text-3cl font-bold mr-4 sm:text-4xl text-[#424B5A]'>
            Resume Parser.
          </h1>
        </div>

        <div className='hidden md:flex pr-4 mr-60'>
          <h4 className='border-none bg-transparent text-[#424B5A] font-bold mr-4 flex justify-center items-center'>
            Administrator Login
          </h4>
          <button className='px-8 py-3 bg-[#424B5A] text-white rounded-2xl'>
            Sign Up
          </button>
        </div>

        <div onClick={handleClick} className='md:hidden'>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        {' '}
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>Success</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
