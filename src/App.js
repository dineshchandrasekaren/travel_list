import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [sortBy, setSortBy] = useState(0);
  const handleSubmit = (newItem) => {
    newItem["packed"] = false;
    setAllItems((prev) => [...prev, newItem]);
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
        <li>
          <input type="checkbox" id="item"></input>
          <label htmlFor="item"></label>
        </li>
        {}
      </PackingList>
    </div>
  );
}

export default App;
