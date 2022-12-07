import React, {useState} from "react";
import { icons } from "../components/icon";
import signup from "../imgs1/signup-img.png";


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('')
  const [passwordComfirm, setPasswordComfirm] = useState('');



  async function handleClick() {
    let item = {username,email,number,password,passwordComfirm}
    console.warn({username,email,number,password,passwordComfirm});

   let result = await fetch('http://3.99.244.37/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
       body:JSON.stringify(item),
    })
    result = await result.json()
    console.warn("result", result);
  }



 
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
            <form>
              <label className="labels labels1">Username</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Your name"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
              />
              <label className="labels labels1">Email</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Your email address"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <label className="labels labels1">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="Phone"
                value={number}
                onChange={(e) => {setNumber(e.target.value)}}
              />
              <label className="labels labels1">Create Password</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <label className="labels labels1">Confirm Password</label>
              <input
                type="text"
                className="form-control form-control-4 mb-4"
                placeholder="******"
                value={passwordComfirm}
                onChange={(e)=>{setPasswordComfirm(e.target.value)}}
              />
              <button onClick={handleClick}  className="btn-block mt-3 signup-btn">
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