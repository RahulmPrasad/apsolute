import React from "react";

const ContentWrapper = ({ content, title, description,data,children }) => {
  return (
    <div className="content-wrapper">
      <h4>{content}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
      <button>{data} <span className="material-symbols-outlined">north_east</span></button>

    </div>
  );
};

export default ContentWrapper;