import React from "react";
import "./HomeSection.css";
import '../images/hero-img.jpg'
const HomeSection = () => {
  return (
    <div className="bg-color">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6">  
            <h6 className="fade-up-name text-light">Jithendra Chitneedi</h6>
            <h3 className="text-light text-start">HAY IAM JANNA! WEB DEVELOPER</h3>
            <p className="text-light text-start">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
            <div class="d-flex">
              <a class="px-btn d-none d-lg-inline-flex">Lets' Talk</a>
              <button class="toggler-menu d-lg-none" fdprocessedid="sjwhul">
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img className="pic" src='../images/hero-img.jpg' alt="banner-image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
