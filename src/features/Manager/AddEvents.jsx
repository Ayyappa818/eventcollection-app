import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useAddeventsMutation } from '../../services/EventsApi';

function AddEvents() {
    var navigate=useNavigate();
    var[AddEventFn]=useAddeventsMutation();
  return (
    <div className='w-50 border border-2 m-auto mt-2 rounded shadow-lg p-2'>
            <Formik initialValues={{
                category:"",
                title:"",
                image:"",
                price:"",
                location:"",
                venue:"",
                language:"",
                description:"",
                eventdate:"",
            }}
            onSubmit={(values)=>{
                AddEventFn(values).then((res)=>{
                console.log(res)
                // navigate('/event')
              })
              console.log(values)
            }}
            >
              <Form>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="category" class="form-control" id="category" placeholder="name@example.com"></Field>
                <label for="category">Category</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="title" class="form-control" id="title" placeholder="name@example.com"></Field>
                <label for="title">Title</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="image" class="form-control" id="image" placeholder="name@example.com"></Field>
                <label for="image">Image</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="price" class="form-control" id="price" placeholder="name@example.com"></Field>
                <label for="price">Price</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="location" class="form-control" id="location" placeholder="name@example.com"></Field>
                <label for="location">Location</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="venue" class="form-control" id="venue" placeholder="name@example.com"></Field>
                <label for="venue">Venue</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="language" class="form-control" id="language" placeholder="name@example.com"></Field>
                <label for="language">Language</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="description"  class="form-control" id="description" placeholder="name@example.com"></Field>
                <label for="description">Description</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="date" name="eventdate" class="form-control" id="eventdate" placeholder="name@example.com"></Field>
                <label for="eventdate">Eventdate</label>
              </div>
              <button type='submit' class="btn btn-outline-primary">ADD Event</button>
              </Form>
            </Formik>
    </div>
  )
}

export default AddEvents
