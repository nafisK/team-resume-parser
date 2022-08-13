import React from 'react'
import LineGraph from '../components/Chart'
import Table from '../Table'

export default function Admin() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <div className='mb-auto h-10 mt-40'>
        <Table />
        <LineGraph/>
      </div>
    </div>
  )
}
