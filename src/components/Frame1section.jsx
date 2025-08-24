import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const HeroSection = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(../assets/Section1.png)", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-lg-6 col-md-8">
            <h1
              className="display-3 fw-bold mb-4 text-white"
              style={{ fontSize: "3.5rem" }}
            >
              Your Health, In Your <br /><span className="text-primary"> Hands.</span>
            </h1>
            <p className="lead text-white mb-4">
              Real-time, AI-powered insights for better chronic condition
              management across Africa and beyond.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-4">
              <a
                href="#early-access"
                className="btn btn-primary text-primary btn-lg rounded-4 px-5 me-md-3 mb-2 mb-md-0 fw-bold"
                style={{
     
                  border: "none",
                  background: "#fff"
                }}
              >
                Join Early Access      
                           <img src="../icons/variant=87.png" />
              </a>
   
            </div>

            <p className="text-white">Join early </p>


            
          <div className="frame2-boxes col-lg-12">
            <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
              <div className="frame2bg-white text-center">
                <h1 className="col-lg-12 text-white">10,000+</h1>
                <p className="col-lg-12 text-white">Beta User </p>
              
                              </div>
            </div>

           <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
              <div className="frame2bg-white text-center">
                <h1 className="col-lg-12 text-white">95%</h1>
                   <p className="col-lg-12 text-white">AI Accuracy </p>
              
                              </div>
            </div>


            <div className="col-lg-4 col-sm-12 frame2-boxes-gaps">
              <div className="frame2bg-white text-center">
                <h1 className="col-lg-12 text-white">255m</h1>
                   <p className="col-lg-12 text-white">Monitoring</p>
              
                              </div>
            </div>
          </div>

            <div
              className="d-flex flex-column flex-md-row align-items-center p-3 mt-5 rounded-3 shadow"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <i className="bi bi-shield-check-fill text-success fs-4 me-3"></i>
              <div className="text-secondary fw-bold flex-grow-1 text-center text-md-start">
                HIPAA Compliant |{" "}
                <span className="text-success">50+ Expert Team</span> |{" "}
                <span className="text-primary">100% Secure</span>
              </div>
            </div>
          </div>
          {/* This is where the phone image would go if you wanted to add it to the column */}

          <div className="col-lg-6 d-none d-lg-block hero-second">
            {/* The phone image would be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
