import { React, useState, useEffect } from 'react'
import TableList from './TableList'

export default function Table() {
  const [data, setResumes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className=''>
      {/* Search */}
      <div class='flex mx-auto w-full px-3'>
        <div className='flex justify-between items-center w-full h-full'>
          <div>
            <h1 className='text-3xl text-[#424B5A]'>Applicants</h1>
          </div>
          <div class='flex border-2 rounded-3xl text-[#424B5A]'>
            <button class='flex items-center justify-center px-4 border-r '>
              <svg
                class='w-6 h-6 text-gray-600'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
              </svg>
            </button>
            <input
              type='text'
              class='px-4 py-2 w-80 rounded-3xl'
              placeholder='Search...'
            />
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className='mt-5'>
        <div className='border-b border-gray-200'>
          <table className='table-auto'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Name</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Email</th>
                {/* <th className='px-6 py-2 text-xs text-gray-500'>Number</th> */}
                <th className='px-6 py-2 text-xs text-gray-500'>Applied On</th>
                <th className='px-6 py-2 text-xs text-gray-500'>Resume URL</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {data
                .filter(val => {
                  if (searchTerm === '') {
                    return val
                  } else if (val.resumeString.includes(searchTerm)) {
                    return val
                  }
                })
                .map(resume => (
                  <TableList data={resume} key={resume.id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
