import { collection, getDocs } from "firebase/firestore"
import { React, useState, useEffect } from "react"
import { db } from "./firebase"
import TableList from "./TableList"

<<<<<<< Updated upstream
export default function Table() {
  const [data, setResumes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const usersCollectionRef = collection(db, "resumes")

  useEffect(() => {
    const getResumes = async () => {
      var data = await getDocs(usersCollectionRef)

      setResumes(data.docs.map(docs => ({ ...docs.data(), id: docs.id })))
    }

    getResumes()

    console.log(data)
  }, [])

  return (
    <div className='container flex justify-center mx-auto '>
      <div className='flex flex-col '>
        <div className='mb-3 w-full'>
          <div className='input-group relative flex flex-wrap items-stretch w-full mb-4'>
            <input
              type='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Search Key Word in Resume'
              onChange={event => setSearchTerm(event.target.value)}
            />
            <button
              className='btn inline-block px-6 py-2 border-2 border-indigo-500 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              type='button'
            >
              Search
            </button>
          </div>
        </div>
        <div className='w-full '>
          <div className='border-b border-gray-200 shadow '>
            <table className='table-auto'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Name</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Email</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>Number</th>
                  <th className='px-6 py-2 text-xs text-gray-500'>
                    Applied On
                  </th>
                  <th className='px-6 py-2 text-xs text-gray-500'>
                    Resume URL
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data
                  .filter(val => {
                    if (searchTerm === "") {
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
    </div>
=======
const Table = ({data}) => {
  return (
    <table>
      <tbody>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
          </tr>
          {data.map((item)=>(
          <tr key={item.id}>
              <td>{item.author}</td>
              <td>{item.email}</td>
              <td>{item.filename}</td>
          </tr>
          ))}
      </tbody>
    </table>
>>>>>>> Stashed changes
  )
}

export default Table

// Nafis's Table.js file:

// export default function Table() {
//   const [data, setResumes] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')

//   return (
//     <div className='container flex justify-center mx-auto '>
//       <div className='flex flex-col '>
//         <div className='mb-3 w-full'>
//           <div className='input-group relative flex flex-wrap items-stretch w-full mb-4'>
//             <input
//               type='search'
//               className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
//               placeholder='Search Key Word in Resume'
//               onChange={event => setSearchTerm(event.target.value)}
//             />
//             <button
//               className='btn inline-block px-6 py-2 border-2 border-indigo-500 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
//               type='button'
//             >
//               Search
//             </button>
//           </div>
//         </div>
//         <div className='w-full '>
//           <div className='border-b border-gray-200 shadow '>
//             <table className='table-auto'>
//               <thead className='bg-gray-50'>
//                 <tr>
//                   <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
//                   <th className='px-6 py-2 text-xs text-gray-500'>Name</th>
//                   <th className='px-6 py-2 text-xs text-gray-500'>Email</th>
//                   <th className='px-6 py-2 text-xs text-gray-500'>Number</th>
//                   <th className='px-6 py-2 text-xs text-gray-500'>
//                     Applied On
//                   </th>
//                   <th className='px-6 py-2 text-xs text-gray-500'>
//                     Resume URL
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className='bg-white'>
//                 {data
//                   .filter(val => {
//                     if (searchTerm === '') {
//                       return val
//                     } else if (val.resumeString.includes(searchTerm)) {
//                       return val
//                     }
//                   })
//                   .map(resume => (
//                     <TableList data={resume} key={resume.id} />
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
