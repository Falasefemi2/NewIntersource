import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../imgs1/signup-img.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
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
          <div className="col-md-5 signup-form">
            <h3 className="text-uppercase signup-header">SIGN IN</h3>
            <form>
              <label className="labels labels1">Email</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Your email address"
                onChange={handleEmail}
                value={email}
              />
              <label className="labels labels1">Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                onChange={handlePassword}
                value={password}
              />
              <button type="submit" onClick={handleSubmit} className="btn-block mt-3 signup-btn">Sign In</button>
            </form>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-controls">Remember Me</label>
              </div>
              <div className="forgot float-right">
                <Link to='/forgotpassword' className="Fpwd">Forgotten Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
