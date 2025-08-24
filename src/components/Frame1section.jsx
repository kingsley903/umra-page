export const Frame1 = () => {
  return (
    <>
      <div className="herosection-container">
        <div className="herosection row">
          <div className="col-lg-7 col-sm-12 hero-first hero-container row self-center">
            <div>
              <button className="hero-first-bnt center"></button>
            </div>

            <div>
              <button className="hero-sec-bnt center">
                <div className="green-dot"></div>
                <p> Limited Beta Access • Join 10,000+ Early Users</p>
              </button>
            </div>
            <h1>
              your health, in your
              <br /> <span className="hand">hand</span>
            </h1>

            <h2 className="in-real-time">In Real Time.</h2>
            <p className="umra-by-poncehealth">
              UMRA by PonceHealth revolutionizes chronic health management
              across
              <br />
              Africa. Track your blood pressure and sugar levels, get instant AI
              advice, and
              <br />
              stay connected to your health—anytime, anywhere with intelligent
              <br />
              monitoring.
            </p>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <button className="join-button">
                  Join Early Access Now
                  <img
                    className="img"
                    alt="Container"
                    src="../icons/variant=42.png"
                  />
                </button>
              </div>

              <p className="hero-first-smallest">
                {" "}
                🔥 Join 10,000+ users • Free during beta • No credit card
                required
              </p>
            </div>

            <div className="qualities">
              <div className="section">
                <h2>10,000+</h2>
                <p className="hero-first-smallest"> Beta users</p>
              </div>
              <div className="section">
                <h2>95%</h2>
                <p className="hero-first-smallest"> AI Accuracy</p>
              </div>
              <div className="section">
                <h2>24/7</h2>
                <p className="hero-first-smallest"> Monitoring</p>
              </div>
            </div>

            <div className="qualities">
              <button className="gap-s last-button">
                <img
                  className="img"
                  alt="Container"
                  src="../icons/variant=43.png"
                />
                HIPAA Compliant
              </button>

              <button className="gap-s last-button-final">
                <img
                  className="img"
                  alt="Container"
                  src="../icons/variant=44.png"
                />
                Healthcare Professional Trusted
              </button>
            </div>

            <div className="hero-footer">
              <div className="hero-footer-container">
                <button className="footer-content col-lg-12">
                  Discover UMRA&#39;s features
                </button>

                <div className="footer-line"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12 hero-second hero-container row self-center"></div>
        </div>
      </div>
    </>
  );
};
