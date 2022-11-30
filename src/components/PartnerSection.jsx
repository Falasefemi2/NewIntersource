import React from "react";
import light from "../imgs1/light-square.png";

const PartnerSection = () => {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="partner-header text-capitalize text-center mb-4">
              Trusted And Supported By
            </h1>
            <div className="row row-cols-2 col-md-12 me-2 ailgn-items-center justify-content-center row-cols-lg-4 g-3 g-lg-12">
              <div className="col-md-3">
                <div className="border">
                  <h3>LOADING...</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="border">
                  <img src={light} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="border">
                  <h3>LOADING...</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
