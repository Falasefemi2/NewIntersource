import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="home hero-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="home-header">
              Get the <span>best</span>
              <br />
              <span>foreign</span> staff on
              <br />
              your team
            </h1>

            <p className="p1 col-lg-5 col-sm-12 col-md-12 mr-4">
              At Intersource Global Inc., we apply the most highly developed and
              advanced methodologies that strive and recruit qualified
              candidates that meet the staffing need of companies.
            </p>

            <Button
              className="hero-btn a-color"
              type="submit"
              text="Upload Cv"
              links="/uploadcv"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
