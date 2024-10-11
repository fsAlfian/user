import {  useLocation, Outlet } from 'react-router-dom';
import { useState } from 'react'
export default function Layout({ children }) {
    const location = useLocation();
    const  [header, setHeader] = useState([
        {
            path: '/',
            title: 'List of users',
        },
        {
            path: '/create',
            title: 'Create user',
        }
    ]);

    return (
        <>
        <div className="flex justify-center bg-gray-100 h-screen  py-4 w-screen overflow-x-hidden">
            <div className="w-1/2 bg-white rounded-lg h-auto p-4 flex flex-col gap-y-4">
                <p className="text-2xl font-bold text-center">{
                    header.filter(data =>data.path ===location.pathname).length ? header.filter(data =>data.path ===location.pathname)[0].title : 'Simple user application'
                    }</p>
                <Outlet />
            </div>
        </div>
        </>
    )
}