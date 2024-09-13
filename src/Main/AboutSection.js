import React from "react";
import "./AboutSection.css";
import "../images/hero-img.jpg";

const AboutSection = () => {
  return (
    <div className="aboutsection mx-auto" id="about-section">
      <div className="row align-items-center container mx-auto pt-4 pb-4">
        <div className="col-md-6">
          <div className="banner-image">
            <img src="../images/hero-img.jpg" alt="Jithendra" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-content">
            <div class="section-heading text-left">
              <h6 className="text-light pb-2">
                <span className="h3">About Me!</span>
              </h6>
              <h2 className="text-light pb-2">
                I AM AVAILABLE FOR <span>Front End Development</span> PROJECTS
              </h2>
            </div>
            <p className="text-light pb-2">
              Front End Developer having 3 years experience in developing
              efficient and responsive web based applications. Backend with
              NodeJS, MySQL frontend in HTML5, CSS, JavaScript, ReactJS.
              Experienced in Node.JS for backend development meaning server side
              API’S and back end databases. Good knowledge of the responsive
              design concept enhances the functionality of applications for
              users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
