import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Sidebar.css';

const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <NavLink className="sidebar-link" exact to="/" onClick={showSidebar}>Home</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to="/properties" onClick={showSidebar}>Our Properties</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to="/about" onClick={showSidebar}>About Us</NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to="/contact" onClick={showSidebar}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
