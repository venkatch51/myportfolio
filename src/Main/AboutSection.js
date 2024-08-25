import React from "react";
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className="aboutsection">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="banner-image">
            <img src="https://janna-react.vercel.app/images/about-banner.png" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-content">
            <div class="section-heading text-left">
              <h6 className="text-light">
                <span>About Us</span>
              </h6>
              <h2 className="text-light">
                I AM AVAILABLE FOR <span>Front End Development</span> PROJECTS
              </h2>
            </div>
            <p className="text-light">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
