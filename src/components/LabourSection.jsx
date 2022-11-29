import React from "react";
import doctor from "../imgs1/img6.png";
import elect from "../imgs1/img7.png";
import army from "../imgs1/img8.png";
import tech from "../imgs1/tech.png";
import womanNeedle from "../imgs1/img10.png";
import helmet from "../imgs1/img11.png";

const LabourSection = () => {
  return (
    <section className="labour-section">
      <div className="container text-dark round">
        <div className="row">
          <div className="col-12">
            <h1 className="labour-header text-center text-capitalize">
              We Have Excellent Knowledge Of Foreign <br /> Labour Markets
            </h1>
            <div className="round">
              <img src={doctor} alt="" className="imgz" />
              <img src={elect} alt="" className="imgz" />
              <img src={army} alt="" className="imgz" />
              <img src={tech} alt="" className="imgz" />
              <img src={womanNeedle} alt="" className="imgz" />
              <img src={helmet} alt="" className="imgz" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabourSection;
