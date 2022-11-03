import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav>
        <div className="singleNavButton">
          <Link to="/">Home</Link>&nbsp;
        </div>
        <div className="singleNavButton">
          <Link to="/about">About</Link>&nbsp;
        </div>
        <div className="singleNavButton">
          <Link to="/used">Used Items</Link>&nbsp;
        </div>
        <div className="singleNavButton">
          <Link to="/shoppingCart">Cart</Link>&nbsp;
        </div>
        <div className="singleNavButton">
          <Link to="/add">Submit Item</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
