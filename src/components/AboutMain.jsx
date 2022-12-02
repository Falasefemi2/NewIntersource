import React from "react";
import { Link } from "react-router-dom";

const AboutMain = () => {
  return (
    <section className="about-main-section">
      <div className="container text-dark">
        <div className="topnav">
          <Link to="/employment" className="active text-capitalize">
            Employment in Canada
          </Link>
          <Link to="/layoff">Layoffs</Link>
          <Link to="/health">Health</Link>
          <Link to="/toolkit">Toolkits</Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
