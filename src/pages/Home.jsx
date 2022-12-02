import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  Hero,
  WhySection,
  ChooseSection,
  LabourSection,
  RangeSection,
  PartnerSection,
} from "../components";

const Home = () => {
  // const navigate = useNavigate();
  // const handlePage = () => {
  //   navigate("/home");
  // };
  // removed unnecessary repetition of navbar
  // routed properly
  return (
    <>
      <Hero />
      <WhySection />
      <ChooseSection />
      <LabourSection />
      <RangeSection />
      <PartnerSection />
    </>
  );
};

export default Home