import React from 'react'
import Table from './Table'

export default function Admin() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <main className='mb-auto h-10 mt-16'>
        <Table />
      </main>
    </div>
  )
}
