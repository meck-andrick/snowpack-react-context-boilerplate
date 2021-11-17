import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../store";

export const ChangeAddress = () => {
  const allStore = useContext(AppContext);
  return (
    <div>
      <button onClick={() => allStore.setAddress("1818 Newbern Road")}>
        Change Address
      </button>
    </div>
  );
};
