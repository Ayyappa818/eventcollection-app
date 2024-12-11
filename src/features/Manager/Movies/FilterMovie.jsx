import React from 'react'
import { useLocation } from 'react-router-dom'

function FilterMovie() {
   var {search}= useLocation()
   console.log(search)
  return (
    <div>
      <h1>Filter movie</h1>
    </div>
  )
}

export default FilterMovie
