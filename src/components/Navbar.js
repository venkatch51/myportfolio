import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header-top-fixed one-page-nav  fixed-header">
      <div class="container">
        <div class="logo">
          <a class="navbar-brand">
            <p className="name">Jithendra</p>
          </a>
        </div>
        <ul class="main-menu">
          <li>
            <a class="active">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div class="d-flex">
          <a class="px-btn d-none d-lg-inline-flex">Lets' Talk</a>
          <button class="toggler-menu d-lg-none" fdprocessedid="sjwhul">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
