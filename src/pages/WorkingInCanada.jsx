import React from "react";
import { AboutMain, Navbar } from "../components";

const WorkingInCanada = () => {
  return (
    <>
      <Navbar />
      <section className="works works-section">
        <div className="container text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="works-header text-capitalize text-center">
                Canada <br /> Employer Of <br /> Record Service
              </h1>
              <p className="p6 text-center">Intersource Staffing provides employer of record services for customers that want to hire employees and run payroll without first establishing a branch office or subsidiary in Canada.</p>
            </div>
          </div>
        </div>
      </section>
      <AboutMain />
    </>
  );
};

export default WorkingInCanada;
