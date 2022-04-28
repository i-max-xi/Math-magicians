import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Math Magicians</h2>
      </div>
      <div className="navHolder">
        <nav>
          <Link to="/">Home</Link>
          <Link to="./quote">Quote</Link>
          <Link to="./calc">Calculator</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
