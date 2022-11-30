import React from "react";
import Contain from "./Contain";
import dot1 from "../imgs1/img25.png";

const Staff = () => {
  return (
    <section className="staff-section">
      <div className="container">
        <div className="row">
          <div className="col-12 staff-body text-center">
            <div className="mb-lg-3">
              <h1 className="text-capitalize staff-header">
                Our Staffing Process
              </h1>
            </div>
            <div className="timeline">
              <Contain
                img={dot1}
                left="left-contain"
                smallText="Step 1"
                pText="we identify employers labour needs."
              />
              <Contain
                img={dot1}
                right="right-contain"
                smallText="Step 2"
                heading="Screening"
                pText="We filter and interview candidates and make sure they will
be able to perform the duties."
              />
              <Contain
                img={dot1}
                right="left-contain"
                smallText="Step 3"
                heading="Presentation"
                pText="We present our candidates to our clients who will have
                the opportunity to interview."
              />

              <Contain
                img={dot1}
                right="right-contain"
                smallText="Step 4"
                heading="Government Approval"
                pText="We handle the LMIA application and represent our clients
                with the Canadian Government."
              />

              <Contain
                img={dot1}
                right="left-contain"
                smallText="Step 5"
                heading="Immigration"
                pText="Our allied certified consultation companies expertly handle foreign worker’s immigration applications (work permit and travel visa)."
              />

              <Contain
                img={dot1}
                right="right-contain"
                smallText="Step 6"
                heading="Guidiance"
                pText="If needed, we also offer guidance on booking airline tickets, health, accommodation, and relocation services."
              />

              <Contain
                img={dot1}
                right="left-contain"
                smallText="Step 7"
                heading="Orientation"
                pText="If required, we provide companies and new employees with orientations to adapt quickly to their job in Canada."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
