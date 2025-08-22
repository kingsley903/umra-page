import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame12 = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(180deg, #F0F5FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="container text-center py-5">
        <p className="text-secondary fw-bold mb-1">
          <small>Powered by PonceHealth - Trusted Healthcare Innovation</small>
        </p>
        <h1 className="fw-bold display-4">
          Join the <span className="text-primary">Health Revolution</span>
        </h1>
        <p
          className="text-secondary mx-auto mb-5"
          style={{ maxWidth: "700px" }}
        >
          Get early access to UMRA's revolutionary AI-powered health monitoring.
          Join 10,000+ users already transforming their health management.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Instant Access Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card h-100 p-4 rounded-3 text-center shadow-sm border-0"
              style={{ backgroundColor: "#E8F0FF" }}
            >
              <div className="d-flex justify-content-center mb-3">
                <div
                  className="p-3 rounded-circle"
                  style={{ backgroundColor: "#D6E2FF" }}
                >
                  <i className="bi bi-lightning-charge-fill text-primary fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">Instant Access</h5>
              <p className="text-secondary mb-0">
                Get immediate access to all UMRA features the moment we launch
              </p>
            </div>
          </div>

          {/* VIP Support Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card h-100 p-4 rounded-3 text-center shadow-sm border-0"
              style={{ backgroundColor: "#F0FFF4" }}
            >
              <div className="d-flex justify-content-center mb-3">
                <div
                  className="p-3 rounded-circle"
                  style={{ backgroundColor: "#D9F2E2" }}
                >
                  <i className="bi bi-person-check-fill text-success fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">VIP Support</h5>
              <p className="text-secondary mb-0">
                Priority access to our healthcare experts and dedicated support
                team
              </p>
            </div>
          </div>

          {/* Beta Pricing Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="card h-100 p-4 rounded-3 text-center shadow-sm border-0"
              style={{ backgroundColor: "#FFF0F5" }}
            >
              <div className="d-flex justify-content-center mb-3">
                <div
                  className="p-3 rounded-circle"
                  style={{ backgroundColor: "#FFE6F0" }}
                >
                  <i className="bi bi-star-fill text-purple fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">Beta Pricing</h5>
              <p className="text-secondary mb-0">
                Lock in exclusive early adopter pricing for life
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve Your Spot Form */}
      <div className="container my-5">
        <div
          className="p-5 text-center rounded-3 text-white mx-auto shadow"
          style={{
            maxWidth: "800px",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <h2 className="fw-bold">Reserve Your Spot Now</h2>
          <p className="mb-4">
            Limited spots available • Join 10,000+ early users • No spam, ever
          </p>
          <div className="input-group mb-3">
            <span
              className="input-group-text rounded-start-pill border-0 bg-white-50"
              id="email-icon"
            >
              <i className="bi bi-envelope-fill text-white"></i>
            </span>
            <input
              type="email"
              className="form-control border-0 bg-white-50 text-white"
              placeholder="Enter your email address"
              aria-label="Email address"
              aria-describedby="email-icon"
            />
            <button
              className="btn btn-light rounded-end-pill px-4 fw-bold text-primary"
              type="button"
            >
              Join Early Access <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <p className="small text-white-50 mb-0">
            <i className="bi bi-lock-fill me-1"></i>100% secure • HIPAA
            compliant • No credit card required
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container text-center my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-3">
            <h3 className="fw-bold mb-1">10,000+</h3>
            <p className="text-secondary mb-0">Early Access Users</p>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="fw-bold mb-1">50+</h3>
            <p className="text-secondary mb-0">Healthcare Partners</p>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="fw-bold mb-1">95%</h3>
            <p className="text-secondary mb-0">User Satisfaction</p>
          </div>
          <div className="col-6 col-md-3">
            <h3 className="fw-bold mb-1">24/7</h3>
            <p className="text-secondary mb-0">Health Monitoring</p>
          </div>
        </div>
      </div>

      {/* Limited Time Offer Banner */}
      <div className="container">
        <div
          className="p-4 text-white text-center rounded-3 mx-auto shadow"
          style={{
            maxWidth: "800px",
            background: "linear-gradient(90deg, #FF6B6B 0%, #FFD6A5 100%)",
          }}
        >
          <i className="bi bi-clock-fill me-2"></i>
          <span className="fw-bold">Limited Time Offer</span>
          <p className="small mb-0 mt-2">
            Early access spots are filling up fast. Join now to secure your
            place in the future of healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame12;
