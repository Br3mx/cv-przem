import React from "react";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={`${style.content} col-md-12`}>
            <p className="text-center">
              Copyright &copy; 2024{" "}
              <a href="https://github.com/Br3mx">Przemysław</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
