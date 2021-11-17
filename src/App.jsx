import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import { ChangeAddress } from "./components/ChangeAddress";
import AppProvider from "./store";

function App() {
  // Create the root element state.
  //const [count, setCount] = useState(0);
  return (
    <div className="MainApp">
      <AppProvider>
        <Counter></Counter>
        <ChangeAddress></ChangeAddress>
      </AppProvider>
    </div>
  );
}

export default App;
