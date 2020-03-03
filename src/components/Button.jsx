import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { produceWithPatches } from "immer";

const Button = ({ selected, name, changeScreen }) => {
  const buttonClass = classNames(styles.button, {
    [styles.selected]: selected
  });

  return (
    <button className={buttonClass} onClick={() => changeScreen(name)}>
      {name}
    </button>
  );
};

export default Button;
