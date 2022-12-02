import React from 'react'

const Contain = ({img, left, right, heading, smallText, pText}) => {
  return (
    <>
      <div className={`contain ${left} ${right}`}>
        <img src={img} className="img-fluid" alt="" />
        <div className="text-box">
          <small>{smallText}</small>
          <h2>{heading}</h2>
          <p>{pText}</p>
        </div>
      </div>
    </>
  );
}

export default Contain