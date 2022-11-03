import { useState } from "react";

function AddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Create a handle change method to keep track of changes inside the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = { name, price, img, category, condition, description, error };
    try {
      // Make a copy of our data
      const formData = { ...state };

      delete formData["error"];

      const response = await fetch("/api/usedItems", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // // Send the data to our backend
      // const item = await signUp(formData);
    } catch (error) {
      setError("Sign Up Failed - Try Again");
    }
  };
  // Reder component
  return (
    <div>
      <div className="form-container">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            return handleFormSubmission(e);
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              return handleNameChange(e);
            }}
            value={name}
            required
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              return handlePriceChange(e);
            }}
            value={price}
            required
          />
          <label>Img</label>
          <input
            type="text"
            name="img"
            onChange={(e) => {
              return handleImgChange(e);
            }}
            value={img}
            required
          />
          <label>Category</label>
          <input
            type="text"
            name="category"
            onChange={(e) => {
              return handleCategoryChange(e);
            }}
            value={category}
            required
          />
          <label>Condition</label>
          <select
            name="condition"
            value={condition}
            onChange={(e) => {
              return handleConditionChange(e);
            }}
            required
          >
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
            <option value="Defunct">Defunct</option>
          </select>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              return handleDescriptionChange(e);
            }}
            value={description}
            required
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

export default AddForm;
