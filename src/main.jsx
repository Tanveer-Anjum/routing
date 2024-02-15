import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Router, RouterProvider,Routes,createBrowserRouter, createRoutesFromChildren, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contect from './Components/Contect/Contect.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
// {
//   path:'/',
//   element:<Layout />,
//   children:[
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"About",
//       element:<About />
//     },
//     {
//       path:"Contect",
//       element:<Contect />
//     },
//     {
//     path:"User/:id",
//     element:<User />
//     }
//   ]
// }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />}/>
       <Route path='about' element={<About />}/>
       <Route path='Contect' element={<Contect />}/>
       <Route path='User' element={<User />}/>
       <Route path='User/:userid' element={<User />}/>
       <Route path='Github' element={<Github />}/>


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  < RouterProvider router={router} />
  
  </React.StrictMode>,
)
