import React from "react";
import obj from "../imgs1/img23.png"

const Objective = () => {
  return (
    <section className="objective-section">
      <div className="container text-dark">
        <div className="row">
          <div className="col-md-6 cards">
            <div className="mb-2 mb-lg-3">
                <img src={obj} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 objective-body">
            <h1 className="text-capitalize objective-header">
            Our Objectives
            </h1>
            <p className="p9 mb-2 py-4">At Intersource Global Inc., we are dedicated to providing staffing needs of clients, while at the same time, provide employment opportunities to individuals who wish to work and better their lives. At Intersource Global Inc., one of our objectives, is to promote a good working relationship between the employers and employees.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
