import React from 'react'
import { useGetfiltertitleQuery } from '../../../services/EventsApi'
import { useParams } from 'react-router-dom';

function AboutFilterEvent() {
    var {id}=useParams()
    var {isLoading,data}=useGetfiltertitleQuery(id);
    console.log(isLoading);
    console.log(data);
  return (
    <div>
      <h1>Filteritem</h1>
    </div>
  )
}

export default AboutFilterEvent
