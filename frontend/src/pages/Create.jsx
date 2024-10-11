import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    return (
        <>
          <div className='flex flex-col gap-y-4'>
            <input type="text" placeholder='Name'  className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            <input type="number" placeholder='Identity Number'  className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            <input type="text" placeholder='Email'  className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            <input type="text" placeholder='Date Of Birth' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}  className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            <div className='flex justify-between gap-x-4'>
                <button onClick={ () => navigate('/')} className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-300 text-white'>Cancel</button>
                <button className='w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white'>Create</button>
            </div>
          </div>
        </>
    )
}