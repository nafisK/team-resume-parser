import { React } from "react"

export default function TableList({ data }) {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    )
  }
  return (
    <>
      <tr className='whitespace-nowrap'>
        <td className='px-6 py-4 text-sm text-gray-500'>
          {data.id.substring(1, 5)}
        </td>
        <td className='px-6 py-4'>{data.name}</td>
        <td className='px-6 py-4'>
          <Mailto email={data.email} subject='' body=''>
            {data.email}
          </Mailto>
        </td>
        <td>{data.number}</td>
        <td className='px-6 py-4 text-sm text-gray-500'>
          {`${data.created.toDate().getMonth() + 1}/${data.created
            .toDate()
            .getDate()}/${data.created.toDate().getFullYear()}`}
        </td>
        <td className='px-6 py-4 text-center'>
          <a href={data.fileUrl} target='_blank'>
            🔗
          </a>
        </td>
      </tr>
    </>
  )
}
