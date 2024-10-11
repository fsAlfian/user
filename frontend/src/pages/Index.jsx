import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export default function App() {
    useEffect(() => {
    document.title = 'List users';
    }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <div className='flex justify-end'>
          <button onClick={ () => navigate('/create')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Create
          </button>
        </div>
        <div>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Identity Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  John Doe
                </th>
                <td className="px-6 py-4">
                  123456789
                </td>
                <td className="px-6 py-4">
                  7qkXU@example.com
                </td>
                <td className="px-6 py-4">
                  01-01-1990
                </td>
                <td className="px-6 py-4">
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}