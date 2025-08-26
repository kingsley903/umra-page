import React from "react";
import { Carousel } from "react-bootstrap"; // Make sure to install react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const Frame10 = () => {
  const testimonials = [
    {
      quote:
        "UMRA represents a breakthrough in chronic disease management. The AI insights are remarkably accurate, and the platform's ability to monitor diverse patients across all demographics. This will revolutionize how we monitor patient health between visits.",
      name: "Dr. Amara Okafor",
      title: "Cardiologist, Lagos University Hospital",
      avatar: "../icons/variant=55.png",
      rate: "../icons/variant=13.png",
    },
    {
      quote:
        "As someone managing type 2 diabetes, UMRA has been life-changing. The real-time monitoring and AI advice have given me a level of confidence I've never had before. The interface is so intuitive and knowing PonceHealth is behind it gives me complete confidence in the platform.",
      name: "Sarah Mwamgi",
      title: "Business Analyst, Nairobi",
      avatar: "../icons/variant=55.png",
      rate: "../icons/variant=13.png",
    },
    {
      quote:
        "The potential of UMRA to address healthcare accessibility challenges in Africa is enormous. The technology is seamless, and the emphasis on a community of chronic disease management addresses one of our continent's most pressing health challenges. PonceHealth has created something truly special.",
      name: "Prof. David Akinto",
      title: "Public Health Researcher, Ghana",
      avatar: "../icons/variant=55.png",
      rate: "../icons/variant=13.png",
    },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      {/* Top Section with Stats */}
      <div className="container text-center py-5">
        <p className="text-secondary fw-bold mb-1">
          → Trusted Healthcare Innovation
        </p>
        <h1 className="fw-bold display-5">
          Built on <span className="text-primary">Trust & Expertise</span>
        </h1>
        <p
          className="text-secondary mt-3 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Your health data is secure, and our team is committed to excellence.
          Join thousands who trust PonceHealth's innovative approach to
          healthcare technology.
        </p>

        <div className="row g-4 justify-content-center mt-4">
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow-sm border-0 h-100">
              <div class="p-2 rounded-3 me-3 bg-primary round-images">
                <img alt="Container" src="../icons/variant=9.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">50+</h3>
              <b><p className="text-dark mb-0">Expert Team</p></b>
              <p className="small text-muted mt-2">
                10+ passionate health and tech experts with a proven track
                record of success in shaping healthcare innovation across Africa
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow-sm border-0 h-100">
              <div class="p-2 rounded-3 me-3 bg-primary round-images">
                <img alt="Container" src="../icons/variant=10.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">15+</h3>
              <b><p className="text-dark mb-0">Strategic Partnerships</p></b>
              <p className="small text-muted mt-2">
                Active partnerships with SwiftAir Ambulance and local hospitals
                to expand access for healthcare providers
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow-sm border-0 h-100">
              <div class="p-2 rounded-3 me-3 bg-primary round-images">
                <img alt="Container" src="../icons/variant=11.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">100%</h3>
              <b><p className="text-dark mb-0">Regulatory Compliance</p></b>
              <p className="small text-muted mt-2">
                HIPAA compliance certification in progress, ensuring the highest
                data security and privacy protection standards
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="p-4 bg-light rounded-3 shadow-sm border-0 h-100">
              <div class="p-2 rounded-3 me-3 bg-primary round-images">
                <img alt="Container" src="../icons/variant=12.png" />
              </div>
              <h3 className="text-primary fw-bold mt-2">1000+</h3>
              <b><p className="text-dark mb-0">Early Access Ready</p></b>
              <p className="small text-muted mt-2">
                Beta platform tested with 1000+ users, ready for widespread user
                adoption in Q4 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Slideshow Section */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-5">
          What Healthcare Professionals & Users Say
        </h2>
        <Carousel indicators={true} controls={false} fade interval={3000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <div
                  className="p-4 mx-2 rounded-3"
                  style={{ backgroundColor: "#ffffff", maxWidth: "450px" }}
                >
                  <div className="col-lg-12 testimonial-img-box">
                    <img src={testimonial.rate} />
                    <img src={testimonial.rate} />
                    <img src={testimonial.rate} />
                    <img src={testimonial.rate} />
                    <img src={testimonial.rate} />
                  </div>
                  <div className="col-lg-12 testimonial-img-box pt-4">
                    <img src="../icons/variant=18.png" />
                  </div>
                  <p className="fst-italic text-secondary">
                    <span className="fs-3 text-muted me-2">"</span>
                    {testimonial.quote}
                    <span className="fs-3 text-muted ms-2">"</span>
                  </p>
                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div className="text-start">
                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                      <p className="small text-muted mb-0">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Strategic Partnerships Section */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4">
          Strategic Healthcare Partnerships
        </h2>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 mb-4">
            <div className="p-4 bg-light rounded-3 shadow-sm border-start border-4 border-danger h-100">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-truck fs-1 text-danger me-3"></i>
                <div>
                  <h5 className="fw-bold mb-0">SwiftAir Ambulance</h5>
                  <p className="text-secondary small mb-0">
                    Partnership for emergency response integration
                  </p>
                </div>
              </div>
              <p className="text-secondary mb-0">
                Partnering for emergency response integration, enabling rapid
                medical assistance when UMRA detects critical events, and
                connecting users to emergency services across major African
                cities.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="p-4 bg-light rounded-3 shadow-sm border-start border-4 border-primary h-100">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-mic-fill fs-1 text-primary me-3"></i>
                <div>
                  <h5 className="fw-bold mb-0">Vocal Serve</h5>
                  <p className="text-secondary small mb-0">
                    Voice-enabled health assistance integration
                  </p>
                </div>
              </div>
              <p className="text-secondary mb-0">
                Voice-enabled health assistance integration, making UMRA
                accessible through natural language interactions. Doctors can
                give advice or book appointments via simple voice commands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Security Banner */}
      <div className="container mt-5">
        <div
          className="p-5 rounded-3 text-white"
          style={{
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h4 className="fw-bold mb-2">Your Data Is Completely Secure</h4>
              <p className="small">
                UMRA employs military-grade encryption to protect your health
                data. We comply with international healthcare data protection
                standards including HIPAA and GDPR. Your personal data is never
                shared without your explicit consent. All data is stored in
                secure, geographically-distributed data centers with multiple
                backup systems.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row g-3 text-center">
                <div className="col-lg-12 f10gap-s justify-content-center">
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">256-bit</h5>
                    <p className="small mb-0">Encryption</p>
                  </div>
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">ISO 27001</h5>
                    <p className="small mb-0">Certified</p>
                  </div>
                </div>
                <div className="col-lg-12 f10gap-s justify-content-center">
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">99.9%</h5>
                    <p className="small mb-0">Uptime SLA</p>
                  </div>
                  <div className="col-6 py-4 rounded-3">
                    <h5 className="fw-bold mb-1">24/7</h5>
                    <p className="small mb-0">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame10;
