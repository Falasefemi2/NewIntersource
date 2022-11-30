import React from "react";
import military from "../imgs1/military.png"
import construction from "../imgs1/img13.png"
import health from "../imgs1/health.png"
import girl from "../imgs1/img16.png"
import mechanic from '../imgs1/img17.png'
import store from "../imgs1/img18.png"
import food from "../imgs1/img19.png"
import cleaning from "../imgs1/img20.png"

const RangeSection = () => {
  return (
    <section className="range-section">
      <div className="container text-dark">
        <div className="row">
          <div className="col-12">
            <h1 className="range-header text-capitalize text-center">
              We Serve Diverse <br /> Range Of Industires
            </h1>
            <p className="p3 text-center text-dark text-capitalize">
              Our Goal Is To Match The Right Candidate To The Right Job, In
              Order To Achieve This Goal We Apply Rigorous Selection Process To
              Recruit Candidates For Various Jobs.
            </p>
            <div className="range-img">
              <div className="box">
                <img src={military} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Military</h5>
              </div>
              <div className="box">
                <img src={construction} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Construction</h5>
              </div>
              <div className="box">
                <img src={health} className="img-fluid" alt="" />
                <h5 className="bottom-text">Hospitality</h5>
              </div>
              <div className="box">
                <img src={girl} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Agriculture</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="range-img">
              <div className="box">
                <img src={mechanic} className="img-fluid" alt="" />
                <h5 className="bottom-text">Automotives</h5>
              </div>
              <div className="box">
                <img src={store} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Warehousing</h5>
              </div>
              <div className="box">
                <img src={food} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Food Processing</h5>
              </div>
              <div className="box">
                <img src={cleaning} className="img-fluid" alt="" />
                <h5 className="bottom-text text-capitalize">Cleaning</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
