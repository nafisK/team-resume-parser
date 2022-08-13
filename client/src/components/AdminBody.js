import React from 'react'
import Table from './Table'

export default function AdminBody() {
  return (
    <div className='container mx-auto mt-40 '>
      <div class='grid grid-cols-3 gap-4'>
        <div className='w-full px-4 py-5 bg-white rounded-lg shadow text-[#424B5A]'>
          Graphs Shown Here
        </div>
        <div className='w-full px-4 py-5 bg-white rounded-lg shadow col-span-2 '>
          <Table />
        </div>
      </div>
    </div>
  )
}
