import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs'
import JobsFeed from './pages/JobsFeed'
import WorkingInCanada from './pages/WorkingInCanada'
import ContactUs from './pages/ContactUs'
import SignUp from './pages/SignUp'
import SignIn from "./pages/SignIn"
import UpLoadCv from './pages/UpLoadCv'
import Employment from './pages2/Employment'
import Layoff from './pages2/Layoff'
import Health from './pages2/Health'
import Toolkits from './pages2/Toolkits'



const App = () => {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/jobfeed' element={<JobsFeed />} />
          <Route path='/work' element={<WorkingInCanada />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/uploadcv' element={<UpLoadCv />} />
          <Route path='/employment' element={<Employment />} />
          <Route path='/layoff' element={<Layoff />} />
          <Route path='/health' element={<Health />} />
          <Route path='/toolkit' element={<Toolkits />} />
        </Routes>
      </Router>
  )
}

export default App