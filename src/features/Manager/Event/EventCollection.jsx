import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGeteventscollectionQuery, useLazyGeteventscollectionQuery } from '../../../services/EventsApi';
import SideEventbar from './SideEventbar';

function EventCollection() {
    var{isLoading,data}=useGeteventscollectionQuery();
    var [EventFn]=useLazyGeteventscollectionQuery();
    useEffect(()=>{
      EventFn();
    },[EventFn])
    console.log(isLoading)
    console.log(data)
  return (
    <div class="d-flex">
      {
        isLoading && <b>Loading...</b>
      }
      <div class="w-25">
        {
          !isLoading && <SideEventbar></SideEventbar>
        }
      </div>

      <div class="w-75 m-2 p-2">
        <h1>Event Collection</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 p-2 m-2">
      {
        !isLoading && data?.map((e,i)=>{
            return <div class="col hov p-0 m-2 rounded">
            <div class="card h-100">
                <Link  to={`/event/eventitem/${e._id}`}><img src={e.image} class="card-img-top" style={{height:'200px'}} alt="..."/></Link>
              <div class="card-body">
              <h3 class="card-title">Category :{e.category}</h3>
              <h5 class="card-title">Title :{e.title}</h5>
              <b>Description :</b><p class="card-text">{e.description}</p>
            </div>
            </div>
          </div>
        })
      }
      </div>
      </div>
      
      {/* <div class="w-75 m-2 p-2">
        <h1>Event Collection</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 p-2 m-2">
      {
        !isLoading && data?.map((e,i)=>{
            return <div class="col hov rounded">
            <div class="card h-100">
                <Link  to={`/event/eventitem/${e._id}`}><img src={e.image} class="card-img-top" style={{height:'200px'}} alt="..."/></Link>
              <div class="card-body">
              <h3 class="card-title">Category :{e.category}</h3>
              <h5 class="card-title">Title :{e.title}</h5>
              <b>Description :</b><p class="card-text">{e.description}</p>
            </div>
            </div>
          </div>
        })
      }
      </div>
      </div> */}

    </div>
  )
}

export default EventCollection