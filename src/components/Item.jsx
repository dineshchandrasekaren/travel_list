const Item = ({ item, onChange }) => {
  console.log(item);

  return (
    <li>
      <input
        type="checkbox"
        id={item.id}
        data-mode="mark"
        onChange={onChange}
        value={item.checked}
      />
      <span>{item.count}</span>
      <label
        htmlFor={item.id}
        style={{
          width: "150px",
          display: "inline-block",
          overflowWrap: "break-word",
        }}
      >
        {item.name}
      </label>
      <button id={item.id} onClick={onChange}>
        ❌
      </button>
    </li>
  );
};

export default Item;
