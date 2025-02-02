import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Navbar.css';
import logo from "../../assets/logo3.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar'; // Import Sidebar component

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="70" height="70" className="d-inline-block align-top" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={showSidebar}>
          {sidebar ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/properties" activeClassName="active">Our Properties</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </>
  );
}

export default Navbar;
