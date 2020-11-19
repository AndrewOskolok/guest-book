import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footer__container}>
        <p className={css.footer__copyright}>COPYRIGHT © 2020</p>
      </div>
    </div>
  );
};

export default Footer;
