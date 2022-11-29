import React from "react";

const ChooseSection = () => {
  return (
    <section className="choose choose-section">
      <div className="container">
        <div className="row">
          <h1 className="choose-header text-center">
            Choose Our <br /> Foreign Workers
          </h1>
          <div className="col-lg-6 mb-3 mt-3 text-center text-capitalize">
            <div className="mb-lg-3">
              <h3 className="choose-sub-header">Experience</h3>
              <p className="p2">
                We are highly experienced, qualified and <br /> hard-working in
                every are there are into.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mt-3 text-center text-capitalize">
            <div className="mb-lg-3">
              <h3 className="choose-sub-header">Loyalty</h3>
              <p className="p2">
                Loyal And Committed To Long-Term <br />
                Employment Been Morally Upright In There <br />
                Work.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 mt-3 text-center">
            <div className="mb-lg-3">
              <h3 className="choose-sub-header text-capitalize">
                Intergrated Workforce
              </h3>
              <p className="p2">
                Our workers have successfully integrated into the <br />{" "}
                Canadian workforce. Many apply for residency and
                <br /> become permanent workers.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mt-3 text-center">
            <div className="mb-lg-3">
              <h3 className="choose-sub-header text-capitalize">
                Communication
              </h3>
              <p className="p2">
                English is widely used or officially spoken in <br /> all the
                countries where we recruit from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
