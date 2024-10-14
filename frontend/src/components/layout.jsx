import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
        <div className="grid content-center  h-screen  py-4 w-screen overflow-x-hidden bg-black">
            <ToastContainer />
            <div className='flex justify-center'>
                <div className="w-2/4 rounded-lg h-fit p-4 flex flex-col gap-y-4 bg-slate-800">
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    )
}