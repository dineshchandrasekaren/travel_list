import { useState } from "react";
const reset = { count: 1, name: "" };
const Form = ({ onSubmit = () => {} }) => {
  const [newItem, setNewItem] = useState(reset);
  const handleChange = ({ target }) => {
    setNewItem((prev) => ({ ...prev, [target.id]: target.value }));
  };
  const handleSubmit = () => {
    console.log(newItem);
    onSubmit(newItem);

    setNewItem(reset);
  };
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <select onChange={handleChange} id="count" value={newItem.count}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
      </select>
      <input
        type="text"
        onChange={handleChange}
        id="name"
        value={newItem.name}
        placeholder="Item"
      />
      <button disabled={!newItem.count || !newItem.name} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Form;
