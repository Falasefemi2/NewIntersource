import axios from "axios";
import React, { useState } from "react";
import { icons } from "../components/icon";
import signup from "../imgs1/signup-img.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== passwordComfirm) {
      alert("Password does not match")
    }
    axios
      .post("http://3.99.244.37/api/auth/register", {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordComfirm,
        phone: number,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="signup-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={signup} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 signup-form mt-3">
            <h3 className="text-uppercase signup-header">
              PERSONAL INFORMATION
            </h3>
            <form onSubmit={handleClick}>
              <label className="labels labels1">Username</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="labels labels1">Email</label>
              <input
                type="email"
                className="form-control form-control-4 mb-4"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="labels labels1">Phone Number</label>
              <input
                type="number"
                className="form-control form-control-4 mb-4"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <label className="labels labels1">Create Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="labels labels1">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                value={passwordComfirm}
                onChange={(e) => setPasswordComfirm(e.target.value)}
                required
              />
              <button type="submit" className="btn-block mt-3 signup-btn">
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

// http://3.99.244.37/api/auth/register
