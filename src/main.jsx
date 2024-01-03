import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Destination from './components/destination/Destination.jsx'
import Crew from './components/crew/Crew.jsx'
import Technology from './components/technology/Technology.jsx'


const router = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='destination' element={<Destination />} />
    <Route path='crew' element={<Crew />} />
    <Route path='technology' element={<Technology />} />
  </Route>
) )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
