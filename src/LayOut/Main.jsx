import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Home/Navbar/Navbar'

const Main = () => {
  return (
    <div>
        <div className='bg-[#e6ecf0]'>
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Main