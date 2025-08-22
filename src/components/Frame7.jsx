import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Frame7 = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container text-center py-5">
        <p className="text-primary fw-bold mb-1">→ How UMRA Works</p>
        <h1 className="fw-bold display-5">
          Simple, Smart, and Always{" "}
          <span className="text-primary">Connected</span>
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Experience the future of health monitoring with AI-powered insights
          and real-time tracking
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Card 1: Track Your Vitals */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-sm border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary-subtle p-2 rounded-3 me-3">
                  <i className="bi bi-graph-up text-primary fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Track Your Vitals</h5>
              </div>
              <p className="card-text text-secondary">
                Connect your BP & sugar stats to get real-time updates with
                intelligent insights.
              </p>
            </div>
          </div>

          {/* Card 2: Get Smart Advice */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-sm border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success-subtle p-2 rounded-3 me-3">
                  <i className="bi bi-chat-left-dots text-success fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Get Smart Advice</h5>
              </div>
              <p className="card-text text-secondary">
                AI + doctors deliver personalized care recommendations based on
                your health data.
              </p>
            </div>
          </div>

          {/* Card 3: Medication Logs */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-sm border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-purple-subtle p-2 rounded-3 me-3">
                  <i className="bi bi-card-checklist text-purple fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Medication Logs</h5>
              </div>
              <p className="card-text text-secondary">
                Keep your treatment history and prescriptions organized with
                smart reminders.
              </p>
            </div>
          </div>

          {/* Card 4: Wearable Integration */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-sm border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-warning-subtle p-2 rounded-3 me-3 position-relative">
                  <i className="bi bi-smartwatch text-warning fs-4"></i>
                  <span className="badge text-bg-secondary position-absolute top-0 start-100 translate-middle rounded-pill">
                    Coming Soon
                  </span>
                </div>
                <h5 className="card-title fw-bold mb-0">
                  Wearable Integration
                </h5>
              </div>
              <p className="card-text text-secondary">
                Sync your wearables for 360° health monitoring and continuous
                tracking.
              </p>
            </div>
          </div>

          {/* Card 5: Mobile Medical Bank */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-3 shadow-sm border-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-info-subtle p-2 rounded-3 me-3">
                  <i className="bi bi-wallet2 text-info fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Mobile Medical Bank</h5>
              </div>
              <p className="card-text text-secondary">
                Your medical records, always with you. Share with doctors
                instantly.
              </p>
              <ul className="list-unstyled mt-3">
                <li className="d-flex justify-content-between align-items-center text-primary-emphasis mb-2">
                  Blood Test Results <i className="bi bi-arrow-right"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center text-primary-emphasis mb-2">
                  Prescription History <i className="bi bi-arrow-right"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center text-primary-emphasis">
                  Doctor Notes <i className="bi bi-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div
          className="p-5 rounded-3 shadow"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E8F0FE 100%)",
          }}
        >
          <div className="text-center mb-5">
            <h2 className="fw-bold">Your Health Journey in 3 Simple Steps</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
              Get started with UMRA and transform how you monitor and manage
              your health
            </p>
          </div>
          <div className="row justify-content-center text-center">
            {/* Step 1 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex bg-primary-subtle rounded-circle p-3 mb-3">
                <i className="bi bi-graph-up text-primary fs-3"></i>
              </div>
              <h5 className="fw-bold">Step 1</h5>
              <p className="fw-bold text-primary">Connect & Track</p>
              <p className="text-secondary">
                Log your vitals and connect your devices for comprehensive
                monitoring
              </p>
            </div>
            {/* Step 2 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex bg-success-subtle rounded-circle p-3 mb-3">
                <i className="bi bi-robot text-success fs-3"></i>
              </div>
              <h5 className="fw-bold">Step 2</h5>
              <p className="fw-bold text-success">Get AI insights</p>
              <p className="text-secondary">
                Receive personalized recommendations and smart health advice
              </p>
            </div>
            {/* Step 3 */}
            <div className="col-md-4 mb-4">
              <div className="d-inline-flex bg-purple-subtle rounded-circle p-3 mb-3">
                <i className="bi bi-heart-pulse-fill text-purple fs-3"></i>
              </div>
              <h5 className="fw-bold">Step 3</h5>
              <p className="fw-bold text-purple">Stay Healthy</p>
              <p className="text-secondary">
                Make informed decisions and maintain optimal health daily
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
              }}
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
