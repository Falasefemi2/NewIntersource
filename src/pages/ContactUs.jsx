import axios from "axios";
import React from "react";
import { useState } from "react";
import { FooterSection, QuoteSection } from "../components";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const socialArray = [
    { value: "facebook", media: "Facebook" },
    { value: "twitter", media: "Twiter" },
    { value: "whatsapp", media: "WhatsApp" },
    { value: "instagram", media: "Instagram" },
    { value: "youtube", media: "Youtube" },
  ];

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.99.244.37/api/admin/contact", {
        email: email,
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        message: message,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
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
                workers, please fill out the form below to get a free
                assessment. We are always glad to help Canadian businesses
                address their labour shortages with qualified staff.
              </p>
              <form
                className="row g-3 py-4  align-items-center justify-content-center"
                onSubmit={handleSumbit}
              >
                <div className="col-md-5">
                  <label className="labels">FirstName</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control form-control-1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">LastName</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control form-control-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Company Name</label>
                  <input
                    type="text"
                    name="companyname"
                    className="form-control form-control-1"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="labels">How did you hear about us?</label>
                  <select
                    name="socials"
                    className="navbar-nav hear"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  >
                    {socialArray.map((option, index) => (
                      <option
                        key={index}
                        value={option.value}
                        className="nav-item"
                      >
                        {option.media}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-5">
                  <label className="labels">Message</label>
                  <textarea
                    className="form-control textarea1"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
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
