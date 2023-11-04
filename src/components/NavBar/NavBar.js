import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="star-nav">
      <p className="star-logo" onClick={() => navigate("/")}>
        starseeker
      </p>
      <ul className="star-links">
        <li className="star-link">Favourite</li>
        <li
          className="star-link"
          onClick={() => navigate("/starseeker/cheap-travel")}
        >
          Cheap Travel
        </li>
        <li className="star-link">Login/sign up</li>
      </ul>
    </nav>
  );
};

export default NavBar;
