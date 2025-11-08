import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Item from "./components/Item";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [sortBy, setSortBy] = useState(0);
  const handleSubmit = (newItem) => {
    newItem["id"] = Date.now();
    newItem["packed"] = false;
    setAllItems((prev) => [...prev, newItem]);
  };

  const handleChange = ({ target }) => {
    const { id, dataset } = target;
    const itemId = parseInt(id);
    setAllItems((prev) => {
      if (dataset.mode === "mark") {
        return prev.map((item) => {
          if (item.id === itemId) {
            return { ...item, packed: !item.packed };
          } else {
            return item;
          }
        });
      } else if (dataset === "delete") {
        return prev.filter((item) => item.id !== itemId);
      }
    });
  };
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList
        handleSort={({ target }) => {
          setSortBy(parseInt(target.value));
        }}
        handleClear={() => {
          const isClear = prompt("Are you sure to clear the list?");
          if (isClear) {
            setSortBy(0);
          }
        }}
      >
        {allItems.map((item) => (
          <Item key={item.id} item={item} onChange={handleChange} />
        ))}
      </PackingList>
    </div>
  );
}

export default App;
