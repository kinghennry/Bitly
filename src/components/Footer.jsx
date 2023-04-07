import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer_item1 flex-dir gap">
            <div className="footer-links">
              <h3>Why Bitly</h3>
              <p>Bitly 101</p>
              <p>Integrations & API</p>
              <p>Enterprise Class </p>
              <p>Pricing</p>
            </div>

            <div className="footer-links">
              <h3>Products</h3>
              <p>Link Management</p>
              <p>QR Codes</p>
              <p>Link-in-bio</p>
            </div>

            <div className="footer-links" id="company">
              <h3>Company</h3>
              <p>About Bitly</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>Press</p>
              <p>Contact </p>
              <p>Reviews</p>
            </div>

            <div className=" flex-dir" id="footer_img">
              <div className="footer_img">
                <img src="https://shrtco.de/NGC6Uf" alt="logo" />
              </div>
              <div className="footer_copy">
                © 2023 Bitly | Handmade in New York City, Denver, Berlin,
                Bielefeld, and all over the world
              </div>
              <div className="footer_icons flex-sty">
                <div>
                  <BsTwitter className="footer_icon" />
                </div>
                <div className="footer_icon">
                  <BsInstagram />
                </div>
                <div className="footer_icon">
                  <BsLinkedin />
                </div>
                <div className="footer_icon">
                  <BsFacebook />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_item2 flex-dir gap">
            <div className="footer-links">
              <h3>Solutions </h3>
              <p> Social Media</p>
              <p> Digital Marketing</p>
              <p>Customer Service </p>
              <p>For Developers </p>
            </div>

            <div className="footer-links">
              <h3>Features </h3>
              <p>Branded Links </p>
              <p>Mobile Links </p>
              <p>Campaign </p>
              <p>Management & </p>
              <p>Analytics </p>
            </div>
          </div>
          <div className="footer_item3 flex-dir gap">
            <div className="footer-links">
              <h3>Resources </h3>
              <p>Blog </p>
              <p>Resource Library </p>
              <p>Developers </p>
              <p>App Connectors </p>
              <p>Support </p>
              <p>Trust Center </p>
              <p> Browser Extension </p>
              <p> Mobile App </p>
            </div>

            <div className="footer-links">
              <h3>Legal </h3>
              <p>Privacy Policy</p>
              <p>Cookie Policy </p>
              <p>Terms of Service</p>
              <p>Acceptable Use Policy</p>
              <p>Code of Conduct</p>
            </div>
          </div>
          <div className="footer_item4 flex-dir gap">
            <div className="footer-links">
              <h3>Company</h3>
              <p>About Bitly</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>Press</p>
              <p>Contact </p>
              <p>Reviews</p>
            </div>
          </div>
          <div className="footer_item5 flex-dir">
            <div className="footer_img">
              <img src="https://shrtco.de/NGC6Uf" alt="logo" />
            </div>
            <div className="footer_copy">
              © 2023 Bitly | Handmade in New York City, Denver, Berlin,
              Bielefeld, and all over the world
            </div>
            <div className="footer_icons flex-sty">
              <div>
                <BsTwitter className="footer_icon" />
              </div>
              <div className="footer_icon">
                <BsInstagram />
              </div>
              <div className="footer_icon">
                <BsLinkedin />
              </div>
              <div className="footer_icon">
                <BsFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
