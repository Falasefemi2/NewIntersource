import React from "react";
import Button from "../components/Button";
import LaySection from "../components/LaySection";
import blackMan from "../imgs1/img28.png";
import ladiesMetting from "../imgs1/img29.png";
import menMetting from "../imgs1/img30.png";

const Employment = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 about-main-body">
          <div className="mb-2 mb-lg-3">
            <h1 className="text-capitalize about-main-header">
              Employment <br /> In Canada
            </h1>
            <p className="p8">
              Your candidate is hired in accordance with local labor laws and
              can be onboarded in days instead of the months it typically takes.
              The individual is assigned to work on your team, working on your
              company’s behalf exactly as if he or she were your employee to
              fulfill your in-country requirements.
            </p>
            <Button
              text="Request a quote"
              className="works-btn py-3"
              links="/contact"
            />
          </div>
        </div>
        <div className="col-lg-6 cards">
          <div className="mb-2 mb-lg-3">
            <img src={blackMan} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <LaySection
            img={ladiesMetting}
            headText="Employments Contracts In Canada"
            cardText="Factor in the time it will take to become familiar with provincial nuances for each hire. A written contract of employment is not required by law in Canada, however, it is strongly recommended. Most employers decide to enter into written employment contracts with employees to define the terms of the employment relationship."
          />
        </div>
        <div className="col">
          <LaySection
            img={menMetting}
            headText="Hiring In Canada"
            cardText="Despite the fact that Canada is economically primed for FDI and major growth, making a direct-hire there can be painful from an administrative perspective. Assuming that the process for hiring and setting up a payroll will be fairly straightforward, many organizations quickly discover that the labor legislation creates a series of complications that aren’t easy to overcome labor legislation is onerous in Canada."
          />
        </div>
      </div>
    </>
  );
};

export default Employment;
