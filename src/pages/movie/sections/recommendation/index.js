import { Icon } from "@iconify/react";
import React from "react";

import recommendation from "../../../../data/recommendation.json";
import Button from "../../../../components/atoms/Button";
import Card from "../../../../components/molecules/card";
import styles from "./recom.module.scss";

function Recommendation() {
  const handleShowMore = () => {
    console.log("Show More clicked!");
  };

  return (
    <section className={styles.container}>
      <header>
        <h2>You Also May Like </h2>
        <span>
          View All <Icon icon={"icons8:right-arrow"} />
        </span>
      </header>
      <ul>
        {recommendation.map((recom, i) => {
          return <Card key={i} {...recom} />;
        })}
      </ul>

      <Button text={"Show more"} clickHandler={handleShowMore} className={styles.showMoreBtn} />
    </section>
  );
}

export default Recommendation;
