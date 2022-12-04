import React, { useState } from "react";
import signup from "../imgs1/signup-img.png";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    console.log(e.target.value);
  };
  return (
    <section className="signup-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={signup} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 signin-form">
            <h3 className="text-uppercase signup-header">FORGOT PASSWORD</h3>
            <label className="labels labels2">
              Please enter your email address
            </label>
            <input
              type="email"
              className="form-control form-control-4 mb-4"
              placeholder="Your email address"
              onChange={handleEmail}
              value={email}
            />
            <button type="submit" onClick={handleSubmit} className="btn-block mt-3 signup-btn">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgottenPassword;
