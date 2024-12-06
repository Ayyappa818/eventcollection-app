import React from 'react'
import { useGeteventscollectionQuery } from '../../services/EventsApi'
import { Link } from 'react-router-dom';

function EventCollection() {
    var{isLoading,data}=useGeteventscollectionQuery();
    console.log(isLoading)
    console.log(data)
  return (
    <div>
      {
        isLoading && <b>Loading...</b>
      }
      <div class="row row-cols-1 row-cols-md-3 g-4 p-2 m-2">
      {
        !isLoading && data?.map((e,i)=>{
            return <div class="col">
            <div class="card h-100">
                <Link  to={`/event/eventitem/${e._id}`}><img src={e.image} class="card-img-top" style={{height:'200px'}} alt="..."/></Link>
              {/* <img src={e.image} class="card-img-top" style={{height:'200px'}} alt="..."/> */}
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
  )
}

export default EventCollection