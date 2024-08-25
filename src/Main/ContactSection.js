import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contactus-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="ban-img">
              <img
                src="https://janna-react.vercel.app/images/contact-us.png"
                alt=""
              />
            </div>
            <p className="text-light">Write an Email</p>
            <p className="text-light">jithendravenkat51@gmail.com</p>
            <p className="text-light">Contact on Mobile</p>
            <p className="text-light">+91 9959429779</p>
          </div>
          <div className="col-md-8">
            <h3 className="text-light">Let's discuss your Project</h3>
            <p className="text-light">
              Always Avaialable for freelancing if the right project come in
              Feel Free to Contact me
            </p>
            <form class="row g-3 contact-form">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputName4" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName4"
                />
              </div>        
              <div class="col-12">
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                />
              </div>
              <div class="col-md-12">
                <label for="inputMessage" class="form-label">
                  Your Message
                </label>
                <textarea type="textarea" class="form-control" id="inputMessage" style={{height: "100px"}}/>
              </div>
              
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
