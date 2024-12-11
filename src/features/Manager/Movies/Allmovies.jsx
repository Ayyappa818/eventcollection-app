import React from 'react'
import SideMoviebar from './SideMoviebar'
import { Outlet } from 'react-router-dom'

function Allmovies() {
  return (
    <div class="d-flex">
        <div className='w-25'><SideMoviebar></SideMoviebar></div>
        <div className='w-75'><Outlet></Outlet></div>
    </div>
  )
}

export default Allmovies
