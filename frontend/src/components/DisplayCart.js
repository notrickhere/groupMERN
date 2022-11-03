import React from "react";
import { Link } from "react-router-dom";

function DisplayCart({ cart, setCart }) {
  return (
    <div>
      <Link to={"/shoppingCart"} state={{ cart, setCart }}>
        My Cart({cart.length})
      </Link>
    </div>
  );
}

export default DisplayCart;
