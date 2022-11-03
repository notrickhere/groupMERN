import React from "react";

function DeleteButton({ id, usedItems, setUsedItems }) {
  const deleteHandler = async () => {
    setUsedItems(usedItems.filter((item) => item._id !== id));
    // console.log(usedItems)

    const response = await fetch("/api/usedItems/" + id, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default DeleteButton;
