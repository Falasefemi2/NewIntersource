import React from "react";

const WhoSection = () => {
  return (
    <section className="who-section">
      <div className="container text-dark">
        <div className="row">
          <div className="col-md-6 cards">
            <div className="features-icons-item  mb-2 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-person mb-2"></i>
              </div>
              <h3 className="text-capitalize who-header">For Job Seekers</h3>
              <p className="p7 mb-0">
                Intersouce focuses on their ethics, abilities, and goals while
                offering a pleasant and honest experience for individuals to
                find job that moves them. Candidates may find employment they
                love thanks to sophisticated job search and discovery tools,
                direct access to teams, and an open hiring process.
              </p>
            </div>
          </div>
          <div className="col-md-6 cards">
            <div className="features-icons-item  mb-2 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-boxes mb-2"></i>
              </div>
              <h3 className="text-capitalize who-header">
                For Foreign Agencies
              </h3>
              <p className="p7 mb-0">
                Is the one-stop portal for recruiting for entrepreneurs. The
                recruiting process may be streamlined by utilizing strong job
                management technologies, network-based sourcing channels, and a
                candidate-first approach. This helps businesses hire excellent
                employees who will progress their goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
