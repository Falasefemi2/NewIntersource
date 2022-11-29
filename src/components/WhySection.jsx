import React from "react";
import WhySectionImg from "./WhySectionImg";
import pic from "../imgs1/img2.png";
import women from "../imgs1/img3.png";
import writing from "../imgs1/img4.png";
import board from "../imgs1/img5.png";

const WhySection = () => {
  return (
    <section className="why why-section">
      <WhySectionImg
        bigText="WHY INTERSOURCE"
        headText="the ability and Competencies"
        bodyText="We care about our clients and we understand the evolving needs of our customers. Hence, we work diligently to meet their staffing needs. We send qualified and competent workers who understand the work ethics of our clients who are responsive to the challenges of the organization."
        img={pic}
      />

      <WhySectionImg
        reverse="flex-row-reverse"
        headText="Personal Sustainability"
        bodyText="We understand that to ensure a good “fit” in staffing, is to have a close relationship with our clients Consistently, we look to know our clients and their organizations better so when so when a position needs to be filled, we supply the best candidate for the job."
        img={women}
      />

      <WhySectionImg
        headText="Key Strength With An Area Of Improvement"
        bodyText="We have dedicated Human Resource Consultants whose primary goals are the enablement of the success of our individual corporate clients. To serve our diverse client base for which, we provide excellent temporary opportunities while processing permanent position for our highly trained and very motivated workers."
        img={writing}
      />

      <WhySectionImg
        reverse="flex-row-reverse"
        headText="Care And Attentiveness"
        bodyText="As providers of temporary and permanent workers to clients, we recognize that our client’s success depends on finding workers with the right skills and knowledge to fit well into our client’s corporate culture."
        img={board}
      />
    </section>
  );
};

export default WhySection;
