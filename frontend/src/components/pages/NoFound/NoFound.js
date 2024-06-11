import React from "react";
import style from "./NoFound.module.scss";
const NoFound = () => {
  return (
    <div className={style.container}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <div className={style.buttonDiv}>
        <a href="/">
          <button>Back home</button>
        </a>
      </div>
    </div>
  );
};

export default NoFound;
