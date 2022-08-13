import { React, useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import DropFileInput from '../components/DragDrop'

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
    const file = event.target.files[0]

    const arr = ['', 'Tanvi', 'Rahman', 'tanvi.rahman@nyu.edu', '']

    // setting actual file
    newData['file'] = file
    newData['resumeString'] = arr

    setData(newData)
    console.log(newData)
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
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>

          {/* @team The 'Upload your resume!' shifted up, don't know why */}

          <br/>
          <br/> 
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 className='text-5xl font-bold text-[#424B5A]'>
            Upload your resume!
          </h2>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <form onSubmit={e => handleSubmit(e)}>
              {/* <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'> */}
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                placeholder='Full Name'
                id='name'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                id='email'
                placeholder='Email'
                onChange={e => handleForm(e)}
              />
              <input
                required
                type='text'
                className='block border border-grey-light w-full p-3 mb-4 rounded-3xl pl-5'
                id='number'
                placeholder='Phone Number'
                onChange={e => handleForm(e)}
              />
              <DropFileInput onFileChange={(file) => handleFile(file)} />
              {/* <input
                required
                className='form-control block w-full px-6 py-3 rounded-3xl mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                    border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none'
                type='file'
                id='file'
                onChange={e => handleFile(e)}
              /> 
              
              @team: replaced old resume upload component with drag/drop*/}
              <br/>
              <button
                type='submit'
                className='text-white bg-[#707FDD] w-6/12	 text-center py-3 rounded-2xl  my-1'
              >
                SUBMIT
              </button>
              {submissionAlert && (
                <div
                  className='p-3 my-3 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
                  role='alert'
                >
                  <span className='font-bold'>
                    Resume successfully uploaded.
                  </span>
                </div>
              )}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
