import React from 'react'
import "./header.css"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-section">
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink> </li>
        <li><NavLink to="/project" activeClassName="active">Projects</NavLink> </li>
      </ul>
    </div>
  )
}

export default Header
