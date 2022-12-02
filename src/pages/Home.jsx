import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  Hero,
  WhySection,
  ChooseSection,
  LabourSection,
  RangeSection,
  PartnerSection,
  QuoteSection,
  FooterSection,
} from "../components";

const Home = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/home");
  };
  // removed unnecessary repetition of navbar
  // routed properly
  return (
    <div onLoad={handlePage}>
      <Hero />
      <WhySection />
      <ChooseSection />
      <LabourSection />
      <RangeSection />
      <PartnerSection />
      <QuoteSection />
      <FooterSection />
      {/* <AboutMain /> */}
    </div>
  );
};

export default Home