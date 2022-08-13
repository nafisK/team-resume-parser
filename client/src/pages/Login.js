import { useRef, useState, useEffect, useContext } from 'react'
import { MailIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import React from 'react'

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    // setSuccess(true)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='p-5'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold text-[#424B5A]'>Welcome Back</h2>
            <h4 className='text-[#424B5A] mt-4'>
              Sign in to keep track of all your applicants!
            </h4>
          </div>

          <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='flex block border border-grey-light bg-white w-full p-3 mb-4 rounded-3xl pl-5 shadow-xl'>
                <MailIcon className='w-8 flex justify-between items-center text-gray-500' />
                <input
                  required
                  type='text'
                  className='w-full p-3 ml-3 rounded-3xl pl-5'
                  placeholder='Email Address'
                  id='email'
                  onChange={e => console.log(e.target.value)}
                />
              </div>

              <div className='flex block border border-grey-light bg-white w-full p-3 mb-4 rounded-3xl pl-5 shadow-xl'>
                <LockClosedIcon className='w-8 flex justify-between items-center text-gray-500' />
                <input
                  required
                  type='text'
                  className='w-full p-3 ml-3 rounded-3xl pl-5'
                  placeholder='Password'
                  id='password'
                  onChange={e => console.log(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='text-white bg-[#707FDD] w-full text-center py-3 rounded-2xl  my-1 shadow-xl'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
