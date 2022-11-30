import React from 'react'
import Button from './Button'
import smiling from "../imgs1/img22.png"

const AboutIntersource = () => {
  return (
    <section className='about-main-section'>
        <div className="container text-dark">
            <div className="row">
                <div className='col-md-6 col-sm-12'>
                    <div className='card-body cards about-main-body'>
                        <h1 className='text-capitalize about-main-header'>about <br /> Intersource</h1>
                        <p className='p8'>Intersource Global Inc, is a staffing solution company and is one Canadian empowerment recruiting agencies,at Intersource Global Inc., we apply the most highly developed and advanced methodologies that strive and recruit qualified candidates that meet the staffing need of companies, as a result of these techniques, Intersource Global Inc.</p>
                        <Button className='cont-btn' text='Contact Us' links='/contact' />
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className="card-body">
                        <img src={smiling} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutIntersource