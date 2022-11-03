import React from "react";

function Sidebar({ items, setItems }) {
  const handleClick = (event) => {
    let category = event.target.id;
    console.log(category);

    fetch("/api/items/category/" + category)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  const handleClickAll = (event) => {
    fetch("/api/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };
  return (
    <div className="sidebar">
      <button className="button-19" onClick={handleClickAll}>
        All
      </button>
      <button className="button-19" onClick={handleClick} id="Headphones">
        Headphones
      </button>
      <button className="button-19" onClick={handleClick} id="Keyboard & Mouse">
        Keyboard & Mouse
      </button>
      <button className="button-19" onClick={handleClick} id="Monitor">
        Monitor
      </button>
      <button className="button-19" onClick={handleClick} id="Cell Phones">
        Cell Phones
      </button>
      <button className="button-19" onClick={handleClick} id="televisions">
        Televisions
      </button>
    </div>
  );
}

export default Sidebar;
