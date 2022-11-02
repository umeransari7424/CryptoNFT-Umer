import React from 'react'
// import {Link} from 'react-router-dom'
// import {GrSearch} from 'react-icons/gr';

function Header() {
  return (
    <div >
       <nav className="navbar navbar-expand-lg py-3 px-3">
        <div className="container-fluid">
          <img className='nav-logo' src="Assets/logo.svg" width={"100px"} alt="PorkSwap" />
          &nbsp; &nbsp;&nbsp;
          <div className='search'>
          <img src="Assets/search.svg" alt="Search" width={"30px"} />
                <input type="text" placeholder='Search' />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link market active" aria-current="page" href="/">
                  Marketplace
                </a>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link market active" aria-current="page" href="/">
                 Drops
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
              <div class="dropdown">
                <a className="nav-link market active dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="/"> 
    Brands
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/">Action</a></li>
    <li><a class="dropdown-item" href="/">Another action</a></li>
    <li><a class="dropdown-item" href="/">Something else here</a></li>
  </ul>
                </a>
                </div>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="btn nav-button market nav-link active px-3" type='button' aria-current="page" href="/">
                  Create
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link market active" aria-current="page" href="/">
                  Sign In
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link market active" aria-current="page" href="/">
                  Sign Up
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link market active" aria-current="page" href="/">
                  English
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header