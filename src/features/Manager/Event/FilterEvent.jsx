import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FilterEvent() {
  var {search} = useLocation();
  var arr=[];
  // console.log(search.substring(1).replaceAll('=',':').split('&'))
  useEffect(()=>{
    var Ef = search.substring(1).replaceAll('=',':').split('&')
    Ef.forEach((e)=>{
      var ar = e.split(':')
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

export default FilterEvent
