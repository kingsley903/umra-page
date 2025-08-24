import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const HeroSection = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(./your-background.png)", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-lg-6 col-md-8">
            <h1
              className="display-3 fw-bold mb-4"
              style={{ fontSize: "3.5rem" }}
            >
              Your Health, In Your <br /> Hands.
            </h1>
            <p className="lead text-secondary mb-4">
              Real-time, AI-powered insights for better chronic condition
              management across Africa and beyond.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-4">
              <a
                href="#early-access"
                className="btn btn-primary btn-lg rounded-pill px-5 me-md-3 mb-2 mb-md-0 fw-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  border: "none",
                }}
              >
                Join Early Access
              </a>
              <a
                href="#how-it-works"
                className="text-decoration-none fw-bold text-primary"
              >
                How it works <i className="bi bi-arrow-right"></i>
              </a>
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
          <div className="col-lg-6 d-none d-lg-block">
            {/* The phone image would be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
