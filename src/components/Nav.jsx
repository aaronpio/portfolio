import React from "react";
import styles from "./Nav.module.scss";
import Button from "./Button";

const Nav = ({ buttonNames, screen, changeScreen }) => {
  const navButtonComponent = buttonNames.map(name => {
    if (name === screen) {
      return (
        <Button
          key={name}
          selected
          name={name}
          changeScreen={changeScreen}
        ></Button>
      );
    } else {
      return (
        <Button key={name} name={name} changeScreen={changeScreen}></Button>
      );
    }
  });

  return (
    <nav className={styles.nav_bar}>
      <header>
        <h1 className={styles.header_text}>Aaron Pio Lang</h1>
        <div className={styles.contact_info}>
          <h3>Email</h3>
          <h3>phone #</h3>
          <h3>Resume PDF</h3>
        </div>
      </header>
      <div className={styles.nav_buttons}>{navButtonComponent}</div>
    </nav>
  );
};

export default Nav;
