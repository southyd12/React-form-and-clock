import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function SiteNav() {
  return (
    <nav>
      <Link to={`/`}>Form</Link>
      <Link to={`/clock`}>Clock</Link>
      <Link to={`/cars`}>Cars</Link>
    </nav>
  )
}

export default SiteNav