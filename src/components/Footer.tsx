import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_bar}>
      <div className={styles.powered_by}>
        <h3>Website Created With React</h3>
        <img alt="react-icon" />
      </div>
      <h3>Updated March 2020</h3>
    </div>
  );
};

export default Footer;
