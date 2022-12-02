import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import JobsFeed from "./pages/JobsFeed";
import WorkingInCanada from "./pages/WorkingInCanada";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UpLoadCv from "./pages/UpLoadCv";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      {/* brought out the navbar from the router because it is consistent on all pages to avoid avoid repetition */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jobfeed" element={<JobsFeed />} />
        <Route path="/work/*" element={<WorkingInCanada />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/uploadcv" element={<UpLoadCv />} />
      </Routes>
    </>
  );
};

export default App