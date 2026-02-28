import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          *{
            font-family: "Geist", sans-serif;
          }
        `}
      </style>

      <div className="bg-black pt-5 px-3">
        <footer className="bg-white w-100 mx-auto text-black pt-4 pt-lg-5 px-3 px-sm-4 px-md-5 px-lg-5 rounded-top-4 overflow-hidden" style={{ maxWidth: "1350px" }}>
          
          <div className="container-fluid px-0">
            <div className="row g-4 g-md-5">
              
              {/* Left Section */}
              <div className="col-lg-6">
                <a href="/" className="d-inline-block mb-3">
                  <img src="/NewsApp.svg" alt="NewsApp Logo" width="60" height="60" className="me-2"/>
                </a>

                <p className="text-muted small" style={{ maxWidth: "24rem" }}>
                  New App is Free and Open Source news application built using React and Bootstrap. It provides users with the latest news articles from various categories, allowing them to stay informed about current events.
                </p>

              </div>

              {/* Right Links */}
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="row g-4">
                  
                  <div className="col-6 col-md-4">
                    <h3 className="fw-medium small mb-3">Full Stack Projects</h3>
                    <ul className="list-unstyled small">
                      <li className="mb-2"><a href="https://resume-builder-vz10.onrender.com/" target="_blank" className="text-dark text-decoration-none">AI Resume Builder</a></li>
                      <li className="mb-2"><a href="https://quickblog-8g0r.onrender.com/" target="_blank" className="text-dark text-decoration-none">Quick Blog</a></li>
                      <li><a href="https://wanderlust-kuwo.onrender.com/" target="_blank" className="text-dark text-decoration-none">WanderLust</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4">
                    <h3 className="fw-medium small mb-3">Social Media</h3>
                    <ul className="list-unstyled small">
                      <li className="mb-2"><a href="https://github.com/aniljoiya/" target="_blank" className="text-dark text-decoration-none">Github</a></li>
                      <li className="mb-2"><a href="https://www.linkedin.com/in/aniljoya/" target="_blank" className="text-dark text-decoration-none">Linked In</a></li>
                      <li className="mb-2"><a href="https://myportfolio-jd1k.onrender.com/" target="_blank" className="text-dark text-decoration-none">PortFolio</a></li>
                      <li className="mb-2"><a href="https://www.instagram.com/its_anil.10/" target="_blank" className="text-dark text-decoration-none">Instagram</a></li>
                    </ul>
                  </div>

                  

                </div>
              </div>

            </div>

            <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
              <p className="text-muted small mb-0">© 2025 News App</p>
              <p className="text-muted small mb-0">All right reserved.</p>
            </div>

            <div className="position-relative text-center mt-4">
              <div className="position-absolute start-50 translate-middle-x bottom-0 w-100 rounded-circle" style={{ maxWidth: "48rem", height: "16rem", background:"#f1f5f9", filter:"blur(100px)" }}></div>
              <h1 className="fw-bold text-transparent mt-3" style={{ fontSize: "clamp(3rem,15vw,15rem)", WebkitTextStroke:"1px #D4D4D4" }}>
                NEWSAPP
              </h1>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;