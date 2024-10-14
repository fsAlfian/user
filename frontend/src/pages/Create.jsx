import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify';

moment.locale('en');

export default function Create() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        identityNumber: '',
        email: '',
        dateOfBirth: ''
    })
    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const createHandler = () => {
      axios({
        url: 'http://localhost:8000/users',
        data: userData,
        method: "POST",
      }).then(({data}) => {
        const notify = () => toast(data.message[0]);
        notify();
      }).catch(({response}) => {
        let { data } = response
        const notify = () => toast(data.message[0]);
        notify();
      })
    }
    return (
        <>
          <div className='flex flex-col gap-y-4'>
            <input onChange={changeHandler} name="name" type="text" placeholder='Name'  className='w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-400 text-black placeholder:text-slate-800 focus:outline-none'/>
            <input onChange={changeHandler} name="identityNumber" type="number" placeholder='Identity Number'  className='w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-400 text-black placeholder:text-slate-800 focus:outline-none'/>
            <input onChange={changeHandler} name="email" type="text" placeholder='Email'  className='w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-400 text-black placeholder:text-slate-800 focus:outline-none'/>
            <input onChange={changeHandler} name="dateOfBirth" type="text" placeholder='Date Of Birth' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}  className='w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-400 text-black placeholder:text-slate-800 focus:outline-none'/>
            <div className='flex justify-between gap-x-4'>
                <button onClick={ () => navigate('/')} className='w-full px-4 py-2  rounded-md bg-gray-300 text-black hover:bg-gray-400'>Cancel</button>
                <button onClick={createHandler} className='w-full px-4 py-2  rounded-md bg-cyan-800 hover:bg-cyan-900 text-white'>Create</button>
            </div>
          </div>
        </>
    )
}