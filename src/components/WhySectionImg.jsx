import React from 'react'

const WhySectionImg = ({bigText,headText,bodyText,img,reverse}) => {
  return (
    <div className="container text-dark">
      <div className={`row ${reverse}`}>
        <div className="col-md-6 col-sm-12">
          <h1 className="why-header text-uppercase">{bigText}</h1>
          <div className="card-body cards">
            <h5 className="card-title text-R text-capitalize">{headText}</h5>
            <p className="card-text text-fluid">{bodyText}</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card-body">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySectionImg