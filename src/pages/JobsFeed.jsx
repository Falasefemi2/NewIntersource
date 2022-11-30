import React from "react";
import { FormSelection, Navbar } from "../components";

const JobsFeed = () => {
  return (
    <>
      <Navbar />
      <section className="jobs-section">
        <div className="container text-white">
          <div className="row">
            <div className="col-12">
              <form className="row g-3 py-4">
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control form-control-1"
                    placeholder="What"
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control form-control-1"
                    placeholder="Where"
                  />
                </div>
                <div className="col">
                  <button type="submit" className="jobs-btn">
                    Find Jobs
                  </button>
                </div>
              </form>
              <FormSelection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsFeed;
