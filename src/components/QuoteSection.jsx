import React from "react";
import { Link } from "react-router-dom";


const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col quote1">
            <div className="card text-center border-0">
              <div className="card-body quote2 py-5 border-0">
                <h3 className="card-title card-title1 text-capitalize">
                  What Are You Waiting For?
                </h3>
                <p className="card-text text-white p4">
                  intersource is ready to help you find the workers your company
                  needs!
                </p>
                <Link to='/' className="req-btn py-3">Request a quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
