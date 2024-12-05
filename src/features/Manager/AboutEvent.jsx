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
            <img src={data?.image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{data?.category}</h3>
              <h3 class="card-title">{data?.title}</h3>
              <h3 class="card-title">{data?.location}</h3>
              <h5 class="card-title">{data?.price}</h5>
              <h5 class="card-title">{data?.venue}</h5>
              <p class="card-text">{data?.language}</p>
              <p class="card-text">{data?.description}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutEvent
