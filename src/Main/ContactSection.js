import React, { useEffect, useState } from "react";
import "./ContactSection.css";
import axios from "axios";

const ContactSection = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [error, setError] = useState(null);
  const [formdata, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    try {
      axios.post("http://localhost:5000/api/contact-data", formdata,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Submitted sucessfully");
      setFormData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Error while submitting the form");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact-data")
      .then((res) => {
        setContactDetails(res.data);
      })
      .catch((err) => {
        console.error("Error fetching contact data:", err);
        setError("Failed to fetch data");
      });
  }, []);
  return (
    <div className="contactus-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="ban-img">
              <img src="../images/hero-img.jpg" alt="" />
            </div>
            <p className="text-light pt-2">Contact Details</p>
            {contactDetails.map((item) => {
              return (
                <div key={item.emailId}>
                  <p className="text-light">{item.emailId}</p>
                  <p className="text-light">Contact on Mobile</p>
                  <p className="text-light">{item.phone}</p>
                </div>
              );
            })}
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
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </div>
              <div class="col-md-6">
                <label for="inputName4" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName4"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
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
                  name="subject"
                  value={formdata.subject}
                  onChange={handleChange}
                />
              </div>
              <div class="col-md-12">
                <label for="inputMessage" class="form-label">
                  Your Message
                </label>
                <textarea
                  type="textarea"
                  class="form-control"
                  id="inputMessage"
                  style={{ height: "100px" }}
                  name="message"
                  value={formdata.message}
                  onChange={handleChange}
                />
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                >
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
