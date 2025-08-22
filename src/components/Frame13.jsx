import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center">
              <span className="text-primary me-2">UMRA</span>
            </h5>
            <p className="text-secondary">
              UMRA is a revolutionary AI-powered health monitoring platform by
              PonceHealth, designed to transform how you manage chronic
              conditions.
            </p>
            <div className="mt-4">
              <a href="#" className="text-dark me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary text-center text-md-start">
          <p className="mb-0">© 2024 PonceHealth. All rights reserved.</p>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-3 mt-md-0">
            <a href="#" className="text-secondary mx-2 text-decoration-none">
              Security
            </a>
            <a href="#" className="text-secondary mx-2 text-decoration-none">
              Data Privacy
            </a>
            <a href="#" className="text-secondary mx-2 text-decoration-none">
              GDPR Compliant
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
