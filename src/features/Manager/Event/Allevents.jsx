import React from 'react'
import SideEventbar from './SideEventbar'
import { Outlet } from 'react-router-dom'

function Allevents() {
  return (
    <div className='d-flex'>
      <div class="w-25"><SideEventbar></SideEventbar></div>
      <div class="w-75"><Outlet></Outlet></div>
    </div>
  )
}

export default Allevents
