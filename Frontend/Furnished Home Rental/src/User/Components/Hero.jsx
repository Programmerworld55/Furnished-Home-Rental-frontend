import React from "react";
import "../../Styles/hero.css"; // Ensure this path is correct and matches case sensitivity
import { FaSearch, FaUserFriends, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find your next stay</h1>
        <p>Search deals on hotels, homes, and much more...updated again</p>
      </div>
      <div className="search-box">
        <div className="search-item">
          <FaMapMarkerAlt className="icon" />
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="search-item">
          <FaCalendarAlt className="icon" />
          <input type="text" placeholder="Check-in Date | check-out-date" />
        </div>
        <div className="search-item">
          <FaUserFriends className="icon" />
          <input type="text" placeholder="adults" />
        </div>
        <button className="search-btn">
          <FaSearch className="search-icon" /> Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
