import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Employment from '../pages2/Employment'
import Health from '../pages2/Health'
import Layoff from '../pages2/Layoff'
import Toolkits from '../pages2/Toolkits'



const AboutMain = () => {
  return (
        <section className='about-main-section'>
            <Routes>
            <Route path='/employment' element={<Employment /> }  />
            <Route path='/layoff' element={<Layoff />} />
            <Route path='/health' element={<Health />} />
            <Route path='/toolkit' element={<Toolkits />} />

            
            </Routes>
        <div className="container text-dark">
            <div className="topnav">
                <Link to='/home/employment'  className='active text-capitalize'>Employment in Canada</Link>
                <Link to='/home/layoff'>Layoffs</Link>
                <Link to='/home/health'>Health</Link>
                <Link to='/home/toolkit'>Toolkits</Link>            </div>
        </div>
    </section>
  )
}

export default AboutMain