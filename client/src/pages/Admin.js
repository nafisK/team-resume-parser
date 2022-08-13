import React from 'react'
import AdminSidebar from '../components/AdminSideBar'
import AdminBody from '../components/AdminBody'

export default function Sidebar() {
  return (
    <div className='flex'>
      <AdminSidebar />
      <AdminBody />
    </div>
  )
}
