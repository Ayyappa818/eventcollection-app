import React from 'react'
import { useGeteventdetailsQuery } from '../../services/EventsApi'
import { useParams } from 'react-router-dom';

function AboutEvent() {
    var {id}=useParams()
    var{isLoading,data}=useGeteventdetailsQuery(id);
    console.log(isLoading)
    console.log(data)
  return (
    <div>
      {
        isLoading &&  <b>Loading...</b>
      }
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img style={{height:400,width:500}} src={data?.image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">Category :{data?.category}</h3>
              <h3 class="card-title">Title :{data?.title}</h3>
              <h3 class="card-title">Location :{data?.location}</h3>
              <h5 class="card-title">Price :{data?.price}</h5>
              <h5 class="card-title">Venue :{data?.venue}</h5>
              <b class="card-text">Language :{data?.language}</b>
              <p class="card-text">Description :{data?.description}</p>
              <b class="card-text">Eventdate :{data?.eventdate}</b>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              <button class="card-btn btn btn-danger">Book tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutEvent
