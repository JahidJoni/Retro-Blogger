import React, {useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { UserContext } from "../../App"
import "./Navbar.css"

const NavBar = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("user"))
  console.log(loggedInUser);

  return (
    <div className="sticky-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            Retro Blogger
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto d-flex align-items-center">
              <Link
                to="/"
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
                Home
              </Link>

        
              <Link to="dashboard" className="nav-link mx-1" href="#">
                Dashboard
              </Link>
              
              {!loggedInUser && (
                <Link to="login" className="nav-link mx-3">
                  Login
                </Link>
              )}

              {loggedInUser && (
                <Link
                  className="nav-link mx-3"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img
                    style={{ width: "40px", borderRadius: "50px", marginRight: "7px" }}
                    src={loggedInUser.photoURL}
                    alt={loggedInUser.name}
                  />{" "}
                  {loggedInUser.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar