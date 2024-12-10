import React from 'react'

function Nav() {
  return (
    <div className='sticky-top'>
      <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none dnn">
          <img class='rounded imm'  width="30px" src="data:image/png;base64,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" alt="" />
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="/event" class="nav-link px-2 text-white">Events</a></li>
          <li><a href="/movie" class="nav-link px-2 text-white">Movies</a></li>
          <li><a href="/addevent" class="nav-link px-2 text-white">Add Event</a></li>
          <li><a href="/addmovie" class="nav-link px-2 text-white">Add Movie</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Nav
