import React from "react";
import circle from "../imgs1/img24.png"

const Recruitment = () => {
  return (
    <section className="recruit-section">
      <div className="container text-dark">
        <div className="row">
          <div className="curve">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="col-lg-6 recruit-body">
            <div className="mb-2 mb-lg-3">
              <h1 className="text-capitalize recruit-header">
                Our Recruitment <br />
                Network
              </h1>
              <p className="p9 mb-2 py-4">
                We have formed a network of specialized agencies that allow us
                to source workers from different cultural and professional
                backgrounds.
              </p>
            </div>
          </div>
          <div className="col-lg-6 cards">
            <div className="mb-2 mb-lg-3">
              <img src={circle} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
