import React from "react";
import { useState } from "react";
import { FooterSection, QuoteSection } from "../components";

const ContactUs = () => {
  const [inputs, setInputs] = useState({});

  const socialArray = [
    { value: "facebook", media: "Facebook" },
    { value: "twitter", media: "Twiter" },
    { value: "whatsapp", media: "WhatsApp" },
    { value: "instagram", media: "Instagram" },
    { value: "youtube", media: "Youtube" },
  ];

  const handleSocial = (event) => {
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
    <section className="contacts">
      <div className="container text-black">
        <div className="row">
          <div className="col-12">
            <h1 className="contact-header text-capitalize text-center">
              Onboard Talents In Days
            </h1>
            <p className="contact-info text-center col-md-12 align-items-center justify-content-center">
              If you are a company searching how to hire temporary or foreign
              workers, please fill out the form below to get a free assessment.
              We are always glad to help Canadian businesses address their
              labour shortages with qualified staff.
            </p>
            <form
              onSubmit={handleSubmit}
              className="row g-3 py-4  align-items-center justify-content-center"
            >
              <div className="col-md-5">
                <label className="labels">FirstName</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control form-control-1"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <label className="labels">LastName</label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control form-control-2"
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <label className="labels">Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  className="form-control form-control-1"
                  value={inputs.companyname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <label className="labels">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control form-control-2"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <label className="labels">How did you hear about us?</label>
                <select
                  onChange={handleSocial}
                  name="socials"
                  className="navbar-nav hear"
                  value={inputs.name || ""}
                >
                  {socialArray.map((option, index) => (
                    <option
                      key={index}
                      value={option.value}
                      onChange={handleSocial}
                      className="nav-item"
                    >
                    
                        {option.media}
                      
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5">
                <label className="labels">Message</label>
                <textarea className="form-control textarea1" onChange={handleSocial} name='message' value={inputs.message}></textarea>
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

export default ContactUs;
