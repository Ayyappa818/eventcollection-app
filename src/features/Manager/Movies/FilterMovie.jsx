import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FilterMovie() {
  var {search}= useLocation()
  //  console.log(search.substring(1).replaceAll('=',':').split('&'))
  var arr = [];

  useEffect(()=>{
    var MF = search.substring(1).replaceAll('=',':').split('&')
     MF.forEach((m)=>{
       var ar=m.split(':')
       var obj={}
       obj[ar[0]]=ar[1]
       arr.push(obj)
       console.log(arr)
      })
   },[search])
  return (
    <div>
      <h1>Filter movie</h1>
    </div>
  )
}

export default FilterMovie
