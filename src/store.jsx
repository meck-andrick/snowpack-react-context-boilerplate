import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ]);
  const [addressValue, setAddressValue] = useState("1612 Oline Place");
  //   const saveArticle = (article) => {
  //     const newArticle = {
  //       id: Math.random(), // not really unique but it's just an example
  //       title: article.title,
  //       body: article.body,
  //     };
  //     setArticles([...articles, newArticle]);
  //   };
  return (
    <AppContext.Provider
      value={{
        getAddress: addressValue,
        setAddress: setAddressValue,
        getArticles: articles,
        setArticles: setArticles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
