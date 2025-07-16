import React from "react";
import { Icon } from "@iconify/react";

import styles from "./button.module.scss";

function Button(props) {
  const { text, fIcon, bIcon, className, clickHandler } = props;
  return (
    <button className={`${styles.button} ${className}`} onClick={clickHandler}>
      {bIcon && <Icon icon={bIcon} />}
      <span>{text}</span>
      {fIcon && <Icon icon={fIcon} />}
    </button>
  );
}

export default Button;
