import React from "react";

function ShoppingCart({ cart, setCart }) {
  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      {cart &&
        cart.map((item) => (
          <div key={item._id}>
            <div>
              {item.name} x 1{" "}
              <span onClick={() => handleDelete(item._id)}>delete</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShoppingCart;
