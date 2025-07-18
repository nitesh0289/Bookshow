import { Icon } from "@iconify/react";
import React from "react";

import movies from "../../../../data/movies.json";
import styles from "./movies.module.scss";
import Card from "../../../../components/molecules/card";

function Movies() {
  return (
    <section className={styles.container}>
      <header>
        <h2>Now Showing</h2>
        <span>
          View All <Icon icon={"mdi-light:arrow-right"} />
        </span>
      </header>
      <div className={styles.movies}>
        {movies.map((movies, i) => {
          return <Card {...movies} key={movies.id} />;
        })}
      </div>
    </section>
  );
}

export default Movies;
