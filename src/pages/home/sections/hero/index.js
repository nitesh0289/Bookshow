import { Icon } from "@iconify/react";
import React from "react";

import Button from "../../../../components/atoms/Button";
import Marvel from "../../../../assets/marvels.svg";
import styles from "./hero.module.scss";

function Hero() {
  const onExplore = () => {
    console.log("Explore clicked!");
  };
  return (
    <section className={styles.container}>
      <article>
        <img src={Marvel} alt="Marvel" />
        <h1>
          Avengers <br />
          Infinity War
        </h1>
        <p className={styles.genre}>
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

        <p className={styles.description}>
          In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
          two people meet in London and try to stop a conspiracy.
        </p>
        <Button
          text={"Explore Movies"}
          clickHandler={onExplore}
          className={styles["explore-btn"]}
          fIcon={"solar:arrow-right-linear"}
        />
      </article>
    </section>
  );
}

export default Hero;
