import React from "react";
import {
  AboutIntersource,
  WhoSection,
  Objective,
  Recruitment,
  Staff,
  QuoteSection,
  FooterSection
} from "../components";

// removed unnecessary repetition of navbar
const AboutUs = () => {
  return (
    <>
      <section className="about about-section">
        <div className="container text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="about-header text-capitalize text-center">
                assisting <br /> employers to <br /> recruit diverse.
              </h1>
              <p className="p6 text-center">
                One of our goals at Intersource Global Inc., Is to match the
                right candidate to the right job, in order to achieve this goal
                we apply rigorous selection process to recruit candidates for
                various jobs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhoSection />
      <AboutIntersource />
      <Objective />
      <Recruitment />
      <Staff />
      <QuoteSection />
      <FooterSection />
    </>
  );
};

export default AboutUs;
