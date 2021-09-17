import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <a class="navbar-brand text-light" href="/">Survey</a>
  <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <div class="navbar-nav">
          <Link class="nav-item nav-link text-light" to="/register">Register</Link>
          <Link class="nav-item nav-link text-light" to="/login">Login</Link>
          <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                             window.localStorage.removeItem("app_token"); //removing the jwt token for logging out
                             history.push(`/login`);
                        }}>Logout</Link>
          </div>
  </div>
</nav>
      </>
    )
}

export default Nav;
