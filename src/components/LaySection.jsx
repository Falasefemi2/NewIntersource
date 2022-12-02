import React from "react";

const LaySection = ({ img, headText, cardText }) => {
  return (
    <section>
      <div className="container text-white layoff-container bg-0">
            <div className="card card-bg  border-0">
              <img src={img} alt="" className="card-img-top img-fluid" />
              <div className=" card-body1 text-dark">
                <h4 className="text-capitalize canada-header">{headText}</h4>
                <p className="card-text">{cardText}</p>
              </div>
            </div>
      </div>
    </section>
  );
};

export default LaySection;
