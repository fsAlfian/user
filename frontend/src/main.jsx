import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Create from './pages/Create.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Create/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
