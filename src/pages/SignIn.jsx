import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../imgs1/signup-img.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendHttpRequest = async (method,url,data) => {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? {
        accept: "application/json",
        'Content-Type': 'application/json'
      } : {}
    })
    const responseData = await response.json();
    console.log(responseData);
  }
  
  
  const handleSignIn = (e) => {
    e.preventDefault();
    sendHttpRequest('POST', 'http://3.99.244.37/api/auth/login', {
      email_or_username: email,
     password: password,
    })
    .then(responseData => {
      console.log(responseData);
    })
  }


  // const submitRegistration = async () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email_or_username: email,
  //       password: password
  //     }),
  //   };
  //   await axios
  //   .post('http://3.99.244.37/api/auth/login', requestOptions)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // };

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   submitRegistration();
  // }

  return (
    <section className="signup-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={signup} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 mt-3 signup-form">
            <h3 className="text-uppercase signup-header">SIGN IN</h3>
            <form onSubmit={handleSignIn}>
              <label className="labels labels1">Email</label>
              <input
                type="email"
                className="form-control form-control-4 mb-4"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="labels labels1">Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="btn-block mt-3 signup-btn"
              >
                Sign In
              </button>
            </form>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-controls">Remember Me</label>
              </div>
              <div className="forgot float-right">
                <Link to="/forgotpassword" className="Fpwd">
                  Forgotten Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
