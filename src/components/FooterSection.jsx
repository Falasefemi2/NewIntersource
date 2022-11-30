import React from "react";
import logo2 from "../imgs1/logo2.png";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-4">
              <img src={logo2} alt="" />
              <p className="p5">
                At Intersource Global Inc., we apply the most highly developed
                and advanced methodologies that strive and recruit qualified
                candidates that meet the staffing need of companies.
              </p>
            </div>
            <div className="col-lg-4 py-4">
              <ul className="list-unstyled footer-link">
                <li className="d-flex">
                  <span className="me-3">Privacy & Terms</span>
                  <span className="text-dark">Help & Support</span>
                </li>
                <li className="d-flex">
                  <span className="me-5">Feedbacks</span>
                  <span className="text-dark">Feedbacks</span>
                </li>
                <li className="d-flex">
                  <span className="me-5">Contact Us</span>
                  <span className="text-dark">Contact Us</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 mb-2 py-5">
              <p>Subscribe to our newsletter for more info.</p>
              <form>
                <input
                  type="search"
                  className="form-control form-contorl3 mb-2"
                  placeholder="Enter Email"
                />
                <span className="border-0">
                  <button
                    className="subscribe-btn btn-block py-3"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </span>
              </form>
            </div>
            <hr className="mb-2 col mx-5" />
          </div>
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-6">
              <p>Copyright © 2022 All rights reserved by</p>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/" className="btn-floating btn-sm text-dark">
                    <i className="fab fa-facebook "></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://instagram.com/" className="btn-floating btn-sm text-dark"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://www.twitter.com" className="btn-floating btn-sm text-dark"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://www.whatsapp.com" className="btn-floating btn-sm text-dark"><i className="fab fa-whatsapp"></i></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://www.youtube.com" className="btn-floating btn-sm text-dark"><i className="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
