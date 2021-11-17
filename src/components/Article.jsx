import React from "react";

export const Article = ({ article }) => {
  return (
    <div>
      <p>{article.id}</p>
      <p>{article.title}</p>
      <p>{article.body}</p>
    </div>
  );
};
