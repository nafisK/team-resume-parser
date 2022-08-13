import React from 'react'

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
  )
}

export default Table
