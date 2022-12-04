import React, { useState } from "react";
import { icons } from "../components/icon";
import signup from "../imgs1/signup-img.png";

const SignUp = () => {
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    console.log(e.target.value);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    console.log(e.target.value);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    console.log(e.target.value);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
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
            <h3 className="text-uppercase signup-header">
              PERSONAL INFORMATION
            </h3>
            <form>
              <label className="labels labels1">Username</label>
              <input
                type="email"
                className="form-control form-control-4 mb-4"
                placeholder="Your name"
                onChange={handleName}
                value={name}
              />
              <label className="labels labels1">Email</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Your email address"
                onChange={handleEmail}
                value={email}
              />
              <label className="labels labels1">Phone Number</label>
              <input
                type="number"
                className="form-control form-control-4 mb-4"
                placeholder="Phone"
              />
              <label className="labels labels1">Create Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                onChange={handlePassword}
                value={password}
              />
              <label className="labels labels1">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                onChange={handlePassword}
                value={password}
              />
              <button onClick={handleSubmit} type="submit" className="btn-block mt-3 signup-btn">
                Sign Up
              </button>
            </form>
            <p>
              By continuing , you agree that you have read our{" "}
              <a href="/" className="terms">
                terms of use and our privacy policy
              </a>
            </p>
            <p className="sign-icons">Or Sign Up with</p>
            <ul className="list-unstyled list-inline">
              {icons.map((icon) => (
                <li className="list-inline-item" key={icon.id}>
                  <a href="/" className="btn-floating btn-sm text-white">
                    <i className={`${icon.icon} sign-icon`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
