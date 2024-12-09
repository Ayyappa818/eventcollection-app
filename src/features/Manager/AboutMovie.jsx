import React from 'react'
import { useGetmoviedetailsQuery } from '../../services/EventsApi'
import { useParams } from 'react-router-dom';

function AboutMovie() {
    var {id}=useParams();
    var {isLoading,data}=useGetmoviedetailsQuery(id);
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
            <img style={{height:400,width:500}} src={data?.movieImage} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">movieTitle :{data?.movieTitle}</h3>
              <h3 class="card-title">price :{data?.price}</h3>
              <h3 class="card-title">Location :{data?.location}</h3>
              <h5 class="card-title">movieDuration :{data?.movieDuration}</h5>
              <h5 class="card-title">movieType :{data?.movieType}</h5>
              <p class="card-text">movieCensor :{data?.movieCensor}</p>
              <b class="card-text">releaseDate :{data?.releaseDate}</b>
              <b class="card-text">language :{data?.language}</b>
              <p class="card-text">aboutUs :{data?.aboutUs}</p>
              <p class="card-text">movieFormats :{data?.movieFormats}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              <button class="card-btn btn btn-danger">Book tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMovie
