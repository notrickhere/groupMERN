import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="itemContainer">
      <Link to={"/" + item.id}>
        <div>{item.name}</div>
      </Link>
      <div>Price: {item.price}</div>
      <img src={item.img} alt="monitor"></img>
    </div>
  );
}

export default Item;
