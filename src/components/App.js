import React, { useState, useEffect } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const changeSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      const newArr = searchArray.filter(item =>
        item.toLowerCase().includes(search)
      );
      setData(newArr);
    } else {
      setData([]);
    }
  }, [search]);

  return (
    <div id="main">
      <h2>Search</h2>
      <input id="search-input" onChange={changeSearch} value={search} />
      <h2>Result</h2>
      <ul>{data && data.map(i => <li>{i}</li>)}</ul>
    </div>
  );
};

export default App;
