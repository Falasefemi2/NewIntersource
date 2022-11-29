import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className}) => {
  return (
    <>
    <li>
        <Link to="/signup" className={`nav-link ${className}`}>{text}</Link>
    </li>
    </>
  )
}

export default Button