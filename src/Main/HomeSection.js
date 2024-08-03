import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <div className="bg-color">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="text-light">HAY IAM JANNA! WEB DEVELOPER</h3>
            <p className="text-light">
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
            <img className="pic" src="https://janna-react.vercel.app/images/home-banner.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
