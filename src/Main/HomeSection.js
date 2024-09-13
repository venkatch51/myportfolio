import React from "react";
import "./HomeSection.css";
import "../images/hero-img.jpg";

const HomeSection = () => {
  return (
    <div className="bg-color">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6 className="fade-up-name text-light">Jithendra Chitneedi</h6>
            <marquee className="text-light text-start">
              <h3>Hello -- I AM Jithendra Web Developer</h3>
            </marquee>
            <p className="text-light text-start">
              Passionate Front-End Developer with expertise in Angular and
              React.js, delivering dynamic and responsive web applications.
              Proficient in HTML, CSS, and Bootstrap for crafting visually
              appealing and user-friendly interfaces.
            </p>
            <div class="d-flex">
              <a class="px-btn d-none d-lg-inline-flex">Lets' Talk</a>
              <button class="toggler-menu d-lg-none" fdprocessedid="sjwhul">
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="pic"
              src="../images/hero-img.jpg"
              alt="banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
