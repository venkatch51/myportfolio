import React, { useState } from "react";
import "./HomeSection.css";
import "../images/hero-img.jpg";
import myImg from '../images/my-img.png';

const HomeSection = () => {
 
  return (
    <div className="bg-color">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-left">
            <h6 className="text-light fade-up-name mt-5">Jithendra Chitneedi</h6>

            {/* Updated Animated Headline */}
            <div className="headline-container">
              <h3 className="animated-heading text-light">
                Hello! I am Jithendra, a Passionate Web Developer
              </h3>
            </div>

            <p className="text-light text-start">
              Passionate Front-End Developer with 3+ years of experience
              specializing in Adobe Experience Manager (AEM), React.js, and
              Angular. Adept at delivering dynamic and responsive web
              applications that drive user engagement and satisfaction.
            </p>
            <p className="text-light text-start">
              Proficient in HTML, CSS, JavaScript, React.js, and modern
              frameworks, ensuring seamless integration of various technologies
              into user-friendly, visually appealing interfaces.
            </p>
            <p className="text-light text-start">
              With extensive experience in AEM, I excel at developing and
              maintaining AEM-based websites, integrating APIs, optimizing
              performance, and ensuring compatibility across multiple devices
              and browsers.
            </p>
            <div className="d-flex">
              <a href="#contact" className="px-btn d-none d-lg-inline-flex">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="pic img-fluid rounded-circle"
              src={myImg}
              alt="Jithendra Chitneedi"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section mt-5" id="projects">
          <h2 className="text-light">Previous Projects</h2>
          <div className="projects-container">
            {/* Project 1 - AstraZeneca */}
            <div className="project-card">
              <h3 className="text-light">
                AstraZeneca - AEM Front-End Developer
              </h3>
              <p className="text-light">
                <strong>Duration:</strong> Aug 2021 - Feb 2024
              </p>
              <p className="text-light">
                As an AEM Front-End Developer, I worked on developing and
                maintaining AEM-based websites, ensuring responsive design,
                optimal performance, and compatibility across different browsers
                and devices. I collaborated with UI/UX designers to transform
                wireframes into interactive AEM components.
              </p>
              <h5 className="text-light">Roles and Responsibilities:</h5>
              <ul className="text-light">
                <li>
                  Developed and maintained AEM-based websites, ensuring flawless
                  performance and responsive design across various devices and
                  browsers.
                </li>
                <li>
                  Collaborated with UI/UX designers to convert wireframes into
                  interactive AEM components.
                </li>
                <li>
                  Optimized website loading times through efficient code and
                  asset management.
                </li>
                <li>
                  Extending and customizing AEM core components as required.
                </li>
                <li>Consumed JSON data from Sling Models and REST APIs.</li>
                <li>
                  Managed AEM client libraries to efficiently organize and
                  optimize CSS, JavaScript delivery.
                </li>
              </ul>
              <h5 className="text-light">Technical Skills:</h5>
              <ul className="text-light">
                <li>HTML5, CSS3, JavaScript, ES6</li>
                <li>React.js, Sightly HTL</li>
                <li>Adobe Experience Manager, Apache Sling</li>
                <li>CSS Media Queries, Bootstrap</li>
              </ul>
            </div>

            {/* Project 2 - Optiva */}
            <div className="project-card">
              <h3 className="text-light">Optiva - ReactJS Developer</h3>
              <p className="text-light">
                <strong>Duration:</strong> Apr 2024 - Sept 2024
              </p>
              <p className="text-light">
                I am designing and developing responsive user interfaces using
                ReactJS and managing state with Redux and Context API.
                Additionally, I develop Restful APIs using ASP.NET Core and
                integrate with databases using Entity Framework Core.
              </p>
              <h5 className="text-light">Roles and Responsibilities:</h5>
              <ul className="text-light">
                <li>Design and develop responsive UI using ReactJS.</li>
                <li>Manage application state using Redux or Context API.</li>
                <li>Design and develop Restful APIs using ASP.NET Core.</li>
                <li>
                  Integrate with databases using Entity Framework Core and SQL
                  queries.
                </li>
                <li>
                  Implement client-side routing using React Router for a
                  seamless SPA experience.
                </li>
              </ul>
              <h5 className="text-light">Technical Skills:</h5>
              <ul className="text-light">
                <li>ReactJS, Redux, Context API</li>
                <li>ASP.NET Core, Entity Framework Core</li>
                <li>SQL, Entity Relationship, React Router</li>
              </ul>
            </div>

            {/* Project 3 - United Health Group Optum Advisory */}
            <div className="project-card">
              <h3 className="text-light">
                United Health Group - Optum Advisory
              </h3>
              <p className="text-light">
                <strong>Duration:</strong> Nov 2024 - Present
              </p>
              <p className="text-light">
                As an Adobe Analyst, I am primarily involved in analyzing the
                current AEM architecture and optimizing content management and
                delivery using the MSM approach.
              </p>
              <h5 className="text-light">Roles and Responsibilities:</h5>
              <ul className="text-light">
                <li>
                  Assessed current AEM architecture and provided solutions to
                  optimize content management across multiple sites.
                </li>
                <li>
                  Collaborated with stakeholders to understand challenges and
                  provide improvements for AEM-based workflows.
                </li>
                <li>
                  Developed POCs to address accessibility, performance, and
                  uniformity issues, using React components.
                </li>
                <li>
                  Involved in improving AEM component libraries and templates.
                </li>
              </ul>
              <h5 className="text-light">Technical Skills:</h5>
              <ul className="text-light">
                <li>Adobe Experience Manager, ReactJS</li>
                <li>Abyss Component Library</li>
                <li>JavaScript, CSS, HTML</li>
                <li>Multi-Site Manager (MSM), AEM Components, Templates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
