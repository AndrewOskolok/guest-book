import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.header__container}>
        <a className={css.header__logo_link} href="/">
          <h1 className={css.header__title}>Guest Book</h1>
        </a>
        <p className={css.header__description}>
          Here you can leave your comment about our product
        </p>
      </div>
    </div>
  );
};

export default Header;
