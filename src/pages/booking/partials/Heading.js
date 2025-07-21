import React from "react";

import CurvSVG from "../../../assets/curve.svg";
import styles from "./styles.module.scss";

function Heading() {
  return (
    <header className={styles.header}>
      <h1>Select Your Seats</h1>
      <br />
      <img src={CurvSVG} alt="vector" />
    </header>
  );
}

export default Heading;
