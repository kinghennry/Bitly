import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-section spacing">
          <div className="hero-img">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2022/08/home-hero-mobile-v2.png"
              alt="homepage"
            />
          </div>
          <div className="hero-text">
            <h1>
              We’ve expanded!
              <br />
              Shorten URLs. Generate QR Codes.
              <br id="br" /> And now, create Link-in-bios.
            </h1>
            <div className="hero-btn flex-dir">
              <button className="btn-sty sm">Get Started for free</button>
              <button className="btn-sty sm blue-text">Get Quote </button>
            </div>
          </div>
        </div>
        <div className="hr" style={{ marginTop: "30px" }} />
      </div>
    </section>
  );
}

export default Hero;
