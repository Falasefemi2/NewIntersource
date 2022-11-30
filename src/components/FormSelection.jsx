import React from "react";

const FormSelection = () => {
  return (
    <>
      <select className="form-selection">
        <option defaultValue="" disabled="">
          Date Posted
        </option>
        <option value="1">01</option>
      </select>
      <select className="form-selection">
        <option defaultValue="">Salary Estimate</option>
        <option value="1">$100</option>
        <option value="2">$300</option>
        <option value="3">$3,000</option>
      </select>

      <select className="form-selection">
        <option defaultValue="">Experience Level</option>
        <option value="1">0 - 6 months</option>
        <option value="2">1 year</option>
        <option value="3">2 years</option>
      </select>

      <select className="form-selection">
        <option defaultValue="">job Type</option>
        <option value="1">Intern</option>
        <option value="2">Beginner</option>
        <option value="3">Professional</option>
        <option value="3">Expert</option>
      </select>

      <select className="form-selection">
        <option defaultValue="">Location</option>
        <option value="1">Canada</option>
        <option value="2">USA</option>
        <option value="3">Australia</option>
      </select>

      <select className="form-selection">
        <option defaultValue="">Education</option>
        <option value="1">Undergraduates</option>
        <option value="2">BSc</option>
        <option value="3">Master</option>
      </select>

      <select className="form-selection">
        <option defaultValue="">Industries</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};

export default FormSelection;
