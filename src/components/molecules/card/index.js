import { Icon } from "@iconify/react";
import React from "react";

import CardImage from "../../../assets/card-1.png";
import styles from "./card.module.scss";
import Button from "../../atoms/Button";

function Card(props) {
  const { image, title, genre, year, duration, rating, clickHandler } = props;
  return (
    <article className={styles.container}>
      {/* IMG */}
      <img src={image || CardImage} alt={"card-image"} width={300} height={300} />

      {/* Content */}
      <figcaption>
        <h3>{title}</h3>
        <p>
          {year} - {genre} - {duration}
        </p>
      </figcaption>

      <div>
        <Button text={"Buy Ticket"} clickHandler={clickHandler} className={styles.btn} />
        <p>
          <Icon icon={"mdi:star"} /> <span>{rating}</span>
        </p>
      </div>
    </article>
  );
}

export default Card;
