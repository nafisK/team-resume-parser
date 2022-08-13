import React from 'react'
import Table from '../tanviTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])

  const keys = ["author", "email", "filename"]

  useEffect(() => {
    const fetchUsers = async () =>{
      const res = await axios.get("http://localhost:3001")
      setData(res.data);
    };
    fetchUsers()
  }, [])

  const search = (data)=>{
    return data.filter((item)=>keys.some(key=>item[key].toLowerCase().includes(query)));
  }

  return (
    <div className='flex flex-col h-screen justify-between'>
      <div className='mb-auto h-10 mt-40'>
        <Table />
      </div>
    </div>
  )
}
