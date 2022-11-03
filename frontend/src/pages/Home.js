import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Item from "../components/Item";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items/");
      const json = await response.json();

      if (response.ok) {
        setItems(json);
      }
      // console.log(items);
    };

    fetchItems();
  }, []);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Sidebar items={items} setItems={setItems} />
      <div className="homeItemContainer">
        {items.map((item, i) => {
          return (
            <Item item={item} key={item._id} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    </>
  );
}

export default Home;
