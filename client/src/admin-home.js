import React from 'react'
<<<<<<< Updated upstream:client/src/admin-home.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table'

export default function Admin() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])
       
  const keys = ["author", "email", "filename"]
  useEffect(() => {
    const fetchUsers = async () =>{
      const res = await axios.get("http://localhost:3001/resumes")
      setData(res.data);
    };
    fetchUsers()
  }, [])

  const search = (data)=>{
    console.log(data)
    return data.filter((item)=>keys.some(key=>item[key].toLowerCase().includes(query)));
  }

=======
import Table from '../Table'

export default function Admin() {
>>>>>>> Stashed changes:client/src/pages/tanvi-Admin.js
  return (
    <div className="app">
      <input type="text" 
        placeholder="Search..." 
        className="search" 
        onChange={(e)=>setQuery(e.target.value)} 
      /> 
      <Table data={data}/>
    </div>
  )
}

  // return (
  //   <div className='flex flex-col h-screen justify-between'>
  //     <main className='mb-auto h-10 mt-16'>
  //       <Table />
  //     </main>
  //   </div>
  // )
  //}
