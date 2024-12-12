import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGetfiltereventsMutation } from '../../../services/EventsApi';

function FilterEvent() {
  var {search} = useLocation();
  // console.log(search.substring(1).replaceAll('=',':').split('&'))
  var [EfilterdataFn]=useGetfiltereventsMutation();
  var arr=[];
  var [eventfilter,setEventfilter]=useState([]);

  useEffect(()=>{
    async function fetchData() {
      var Ef = search.substring(1).replaceAll('=',':').split('&')
    Ef.forEach((e)=>{
      var ar = e.split(':')
      var obj={}
      obj[ar[0]]=ar[1]
      arr.push(obj)
      console.log(arr)
    })
    var filterdata=await EfilterdataFn(arr)
    setEventfilter(filterdata.data)
    console.log(eventfilter)
    }
    fetchData()
  },[search])
  return (
    <div>
      <div>
        <h1>Event Collection</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4 p-2 m-2">
        {
          eventfilter?.map((item)=>{
            return <div class="col hov p-0 m-2 rounded">
            <div class="card h-100">
            {/* <Link to={`/event/eventitem/${item.title}`}></Link> */}
              <img src={item.image} style={{height:'200px'}} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h3 class="card-title">{item.category}</h3>
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">Price :{item.price}</p>
              </div>
            </div>
          </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default FilterEvent
