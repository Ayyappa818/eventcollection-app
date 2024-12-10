import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useAddmoviesMutation } from '../../services/EventsApi';
import { useNavigate } from 'react-router-dom';

function AddMovies() {
    var[AddMovieFn]=useAddmoviesMutation();
    var navigate=useNavigate();
  return (
    <div className='w-50 border border-2 m-auto mt-2 rounded shadow-lg p-2'>
            <Formik initialValues={{
                movieImage:String,
                movieTitle:String,
                price:String,
                movieDuration:String,
                movieType:String,
                movieCensor:String,
                releaseDate:String,
                language:Array,
                aboutUs:String,
                movieFormats:Array
            }}
            onSubmit={(values)=>{
                AddMovieFn(values).then((res)=>{
                console.log(res)
                navigate('/movie')
              })
              console.log(values)
            }}
            >
              <Form>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieImage" class="form-control" id="movieImage" placeholder="name@example.com"></Field>
                <label for="movieImage">MovieImage</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieTitle" class="form-control" id="movieTitle" placeholder="name@example.com"></Field>
                <label for="movieTitle">MovieTitle</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="price" class="form-control" id="price" placeholder="name@example.com"></Field>
                <label for="price">Price</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieDuration" class="form-control" id="movieDuration" placeholder="name@example.com"></Field>
                <label for="movieDuration">MovieDuration</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieType" class="form-control" id="movieType" placeholder="name@example.com"></Field>
                <label for="movieType">MovieType</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieCensor" class="form-control" id="movieCensor" placeholder="name@example.com"></Field>
                <label for="movieCensor">MovieCensor</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="releaseDate" class="form-control" id="releaseDate" placeholder="name@example.com"></Field>
                <label for="releaseDate">ReleaseDate</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="language"  class="form-control" id="language" placeholder="name@example.com"></Field>
                <label for="language">Language</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="aboutUs" class="form-control" id="aboutUs" placeholder="name@example.com"></Field>
                <label for="aboutUs">aboutUs</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieFormats" class="form-control" id="movieFormats" placeholder="name@example.com"></Field>
                <label for="movieFormats">MovieFormats</label>
              </div>
              <button type='submit' class="btn btn-outline-primary">ADD Movie</button>
              </Form>
            </Formik>
    </div>
  )
}

export default AddMovies
