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
          <div class="col-md-4 p-2">
            <img style={{height:400,width:500}} src={data?.movieImage} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title fw-bold">{data?.movieTitle}</h1>
              <h3 class="card-title">price :{data?.price}</h3>
              <div class="badge text-bg-light text-wrap border border-secondary fw-medium p-2 m-2" style={{width:'6rem'}}>
              {
              data?.movieFormats.map((m)=>{
                return <b>{m},</b>
              })
              }
              </div>
              <br />
              <div class="border border-1 border-secondary rounded text-center bg-light m-2" style={{width:'15rem'}}>
              {
              data?.language.map((l)=>{
                return <b>{l},</b>
              })
              }
              </div>
              <div>
              <b class="card-title font-monospace">{data?.movieDuration}</b>
              <>.</>
              <b class="card-title font-monospace">{data?.movieType}</b>
              <>.</>
              <b class="card-text font-monospace">{data?.movieCensor}</b>
              <>.</>
              <b class="card-text font-monospace">{data?.releaseDate}</b>
              </div>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              <button class="card-btn btn btn-danger">Book tickets</button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-50 p-2 m-2'>
        <h2 className='fw-bold'>About the movie</h2>
      <p class="card-text font-monospace">{data?.aboutUs}</p>
      </div>
    </div>
  )
}

export default AboutMovie
