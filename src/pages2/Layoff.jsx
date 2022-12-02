import React from "react";
import LaySection from "../components/LaySection";
import xmasTree from "../imgs1/img31.png";
import dinning from "../imgs1/img32.png";

const Layoff = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <LaySection
            img={xmasTree}
            headText="Holidays In Canada"
            cardText="Canada celebrates both Federal and Provincial public holidays. There are 4 Federal specific public holidays that are celebrated nationwide for which employees are given paid days off, and the remainder are Provincial public holidays including New Year’s Day (National), Islander Day (PEI), Louis Riel Day (MB), Heritage Day (NS), Family Day (BC, AB, SK, ON, NB), Good Friday (National except QC), Easter Monday (QC), Victoria Day (National except NB, NS, NL), Aboriginal Day (NWT)."
          />
        </div>
        <div className="col">
          <LaySection
            img={dinning}
            headText="Vacation In Canada"
            cardText="Most employees have the right to an annual paid vacation. In British Columbia, Alberta, Manitoba, Ontario, and Québec, employees must receive two weeks of paid vacation after completing one year with an employer. There are some differences across the country with respect to entitlements and eligibility. Most employers offer 2-4 weeks’ paid vacation, depending on the type of company and the seniority of the employees."
          />
        </div>
      </div>
    </>
  );
};

export default Layoff;
