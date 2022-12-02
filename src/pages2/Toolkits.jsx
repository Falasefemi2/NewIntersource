import React from 'react'
import guide from "../imgs1/img36.png"
import book from "../imgs1/img37.png"
import books from "../imgs1/img38.png"
import holiday from "../imgs1/img39.png"

const Toolkits = () => {
  return (
    <div className='row'>
      <div className="col-12">
        <h1 className='range-header text-capitalize text-center'>Your Global Talent <br /> Toolkits</h1>
        <div className="range-img">
          <div className="box">
            <img src={guide} alt="" className='img-fluid' />
            <h5 className='bottom-text text-capitalize'>Hiring Guide</h5>
          </div>
          <div className="box">
            <img src={book} alt="" className='img-fluid' />
            <h5 className='bottom-text text-capitalize'>Quick Guide</h5>
          </div>
          <div className="box">
            <img src={books} alt="" className='img-fluid' />
            <h5 className='bottom-text text-capitalize'>Hiring Internationally</h5>
          </div>
          <div className="box">
            <img src={holiday} alt="" className='img-fluid' />
            <h5 className='bottom-text text-capitalize'>Canada Holidays</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolkits