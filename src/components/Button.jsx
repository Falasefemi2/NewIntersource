import React from 'react'

const Button = ({text, className}) => {
  return (
    <>
    <li>
        <a href="/" className={`nav-link ${className}`}>{text}</a>
    </li>
    </>
  )
}

export default Button