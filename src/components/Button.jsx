import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className, links, navLink}) => {
  return (
    <>
      <li>
        <Link to={links} className={`${navLink} ${className}`}>
          {text}
        </Link>
      </li>
    </>
  );
}

export default Button