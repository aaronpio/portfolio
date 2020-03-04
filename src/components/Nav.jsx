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
        <div className={styles.header_div}>
          <h1 className={styles.header_text}>Aaron Pio Lang</h1>
          {/* <h2>Full Stack Web Developer</h2> */}
        </div>

        <div className={styles.contact_info}>
          <div className={styles.contact_text}>
            <h3>aaronpiolang@gmail.com</h3>
            <h3>(519) 301-6960</h3>
            <a href="Aaron Lang Resume.pdf" download>
              <h3 className={styles.download}>Download Resume (pdf)</h3>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aaron-p-lang/" target="_blank">
              <img src="LinkedIn-logo-blk.png" alt="linkedin" />
            </a>
            <a href="https://github.com/aaronpio" target="_blank">
              <img src="GitHub-Mark-64px.png" alt="github" />
            </a>
          </div>
        </div>
      </header>
      <div className={styles.nav_buttons}>{navButtonComponent}</div>
    </nav>
  );
};

export default Nav;
