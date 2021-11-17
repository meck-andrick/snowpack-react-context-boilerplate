import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../store";
import { Article } from "./Article";

function Counter() {
  const allStore = useContext(AppContext);
  const [newAddress, setNewAddress] = useState();
  const calcValue = () => {
    const oldValue = allStore.getAddress;
    const newValue = oldValue + " IS AN ADDRESS";
    setNewAddress(newValue);
  };

  useEffect(() => {
    calcValue();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This has been open for {newAddress} seconds. and then{" "}
          {allStore.getAddress}
        </p>
        {allStore.getArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </header>
    </div>
  );
}

export default Counter;
