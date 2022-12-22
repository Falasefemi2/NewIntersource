import React, { useState } from "react";
import { QuoteSection, FooterSection } from "../components";
import axios from "axios";
import { useEffect } from "react";

const UpLoadCv = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [job, setJob] = useState("");
  const [passport, setPassport] = useState(null);
  const [uploadcv, setUploadCv] = useState(null);
  const [salary, setSalary] = useState("");
  const [relocate, setRelocate] = useState("");
  const [incanada, setInCanada] = useState("");

  useEffect(() => {
    const contryUrl = "http://3.99.244.37/api/auth/country";
    axios.get(contryUrl)
    .then((response) => {
      console.log(response.data);
      setCountry(response.data);
         setState(response.data)
      });
  }, [country,state])

  const handleChange = (e) => {
    setPassport(e.target.files[0]);
    setUploadCv(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://3.99.244.37/api/auth/job-application";
    const formData = new FormData();
    formData.append("passport_id", passport);
    formData.append("upload_cv", uploadcv);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone_number", number);
    formData.append("desired_salary", salary);
    formData.append("to_relocate", relocate);
    formData.append("currently_in_canada", incanada);
    formData.append("country_id", country);
    formData.append("state_id", state);
    formData.append("job_title_id", job)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };

  const { data } = country;
  // console.log(data);
  
  return (
    <>
      <section className="contacts">
        <div className="container text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="upload-header">Upload Cv</h1>
              <p className="personal-info">personal information</p>
              <form
                className="row g-3 py-4  align-items-center justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="col-md-5">
                  <label className="labels">Firstname</label>
                  <input
                    type="text"
                    className="form-control form-control-1"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Lastname</label>
                  <input
                    type="text"
                    className="form-control form-control-2"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control form-control-1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Phone Number</label>
                  <input
                    type="number"
                    className="form-control form-control-2"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Country</label>
                  <select>
                    {data?.map((item) => {
                      return <option key={item.id} value={item.name}>{item.name}</option>
                    })}
                  </select>
                </div>
                <div className="col-md-5">
                  <label className="labels">State/Province</label>
                  <select>
                    {data?.map((item) => {
                      const {name,state} = item
                        return state.map((states) => {
                          return <option key={states.id} value={states.name}>{states.name}</option>
                        })
                    })}
                  </select>
                </div>
                <div className="col-md-5">
                  <label className="text-dark ">Willing to relocate</label>
                  <br />
                  <button
                    className="btn btn-primary mb-3 py-2 px-5"
                    onClick={() => setRelocate("1")}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-primary mb-3 py-2 px-5"
                    onClick={() => setRelocate("0")}
                  >
                    No
                  </button>
                </div>
                <div className="col-md-5">
                  <label className="text-dark ">Currently in Canada</label>
                  <br />
                  <button
                    className="btn btn-primary mb-3 py-2 px-5"
                    onClick={() => setInCanada("1")}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-primary mb-3 py-2 px-5"
                    onClick={() => setInCanada("0")}
                  >
                    No
                  </button>
                </div>
                <p className="personal-info">Looking to apply for</p>
                <div className="col-md-5">
                  <label className="text-dark">Job Title</label>
                  <input type="text" className="form-control form-control-1" />
                </div>
                <div className="col-md-5">
                  <label className="labels">Md Salary Desire</label>
                  <input
                    type="text"
                    className="form-control form-control-2"
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Upload Resume/Cv</label>
                  <input
                    type="file"
                    className="form-control form-control-1"
                    onChange={handleChange}
                  />
                  <small style={{ color: "#3480F1" }}>
                    Maximum file size: 6Mb
                  </small>
                </div>
                <div className="col-md-5">
                  <label className="labels">Passport ID (Optional)</label>
                  <input
                    type="file"
                    className="form-control form-control-2"
                    multiple
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <input type="submit" className="cont-btn col-md-10 mb-3" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <QuoteSection />
      <FooterSection />
    </>
  );
};

export default UpLoadCv;
