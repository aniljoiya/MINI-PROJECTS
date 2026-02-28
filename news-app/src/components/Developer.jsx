import React from "react";
import developer from '../assets/Anil.png';

const Developer = () => {
  return (
    <div className="container my-5">
      <div className="card border-0 rounded-4 p-4">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-7 text-center text-md-start">
            <h2 className="fw-bold mb-3 display-4 display-md-3 display-lg-2">
              Meet the <span className="text-primary">Developer</span>
            </h2>

            <p className="text-muted">
               I am an experienced Full Stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>

            <a
              href="https://github.com/aniljoiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark px-4 py-2 rounded-pill mt-2"
            >
              View GitHub
            </a>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={developer}
              alt="Developer"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;