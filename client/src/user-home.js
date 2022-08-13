import { React, useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    file: null,
    resumeString: '',
    created: new Date(),
  })
  const [submissionAlert, setSubmissionAlert] = useState(false)
  const [file, setFile] = useState(null)

  const handleClick = () => {
    setSubmissionAlert(!submissionAlert)
  }

  const handleForm = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleFile = event => {
    const newData = { ...data }
    file = event.target.files[0]

    const arr = ['', 'Tanvi', 'Rahman', 'tanvi.rahman@nyu.edu', '']

    // setting actual file
    newData['file'] = file
    newData['resumeString'] = arr

    setData(newData)
    console.log(data)
  }

  const handleSubmit = async e => {
    var fileUrl = ''
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/resumes')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Upload your resume!</h1>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl text-center'>
            <form onSubmit={e => handleSubmit(e)}>
              <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  placeholder='Full Name'
                  id='name'
                  onChange={e => handleForm(e)}
                /><br/>
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='email'
                  placeholder='Email'
                  onChange={e => handleForm(e)}
                /><br/>
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='number'
                  placeholder='Phone Number'
                  onChange={e => handleForm(e)}
                /><br/><br/>
                Attach Resume. <br/>
                <input
                  required
                  className='form-control block w-full px-6 py-3 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none'
                  type='file'
                  id='file'
                  onChange={e => handleFile(e)}
                /><br/>
                <button
                  type='submit'
                  className='w-full text-indigo-600 text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1'
                >
                  Submit
                </button>
                {submissionAlert && (
                  <div
                    className='p-3 my-3 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
                    role='alert'
                  >
                    <span className='font-bold'>
                      Your resume has been received.<br/>
                      A recruiter will contact you shortly...
                    </span>
                  </div>
                )}
                <br/><br/>
                Looking for employees?<br/>
                <a href='login'>Recruiter Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
