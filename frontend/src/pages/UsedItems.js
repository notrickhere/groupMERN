import DeleteButton from "./../components/DeleteButton";
import { useState, useEffect } from "react";

function UsedItems() {
  const [usedItems, setUsedItems] = useState([]);

  useEffect(() => {
    const fetchUsed = async () => {
      const response = await fetch("/api/usedItems");
      const json = await response.json();
      if (response.ok) {
        setUsedItems(json);
      }
    };
    fetchUsed();
  }, []);

  return (
    <div>
      {usedItems.map((item) => {
        return (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
            <img src={item.img} alt={`this is a ${item.name}`} />
            <h4>{`Condition: ${item.condition}`}</h4>
            <h4>{item.description}</h4>
            <DeleteButton
              usedItems={usedItems}
              setUsedItems={setUsedItems}
              id={item._id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UsedItems;
