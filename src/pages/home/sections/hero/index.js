import { Icon } from "@iconify/react";
import React from "react";

import Marvel from "../../../../assets/marvels.svg";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <article>
        <img src={Marvel} alt="Marvel" />
        <h1>
          Avengers <br />
          Infinity War
        </h1>
        <p>
          <span>Action | Adventure | Sci-Fi</span>{" "}
          <span>
            <Icon icon={"mdi:calendar"} />
            2018
          </span>
          <span>
            <Icon icon={"mdi:clock"} />
            2h 8m
          </span>
        </p>
      </article>
    </section>
  );
}

export default Hero;
