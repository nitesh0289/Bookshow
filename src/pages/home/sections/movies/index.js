import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import React from "react";

import Card from "../../../../components/molecules/card";
import movies from "../../../../data/movies.json";
import styles from "./movies.module.scss";

function Movies() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <header>
        <h2>Now Showing</h2>
        <span>
          View All <Icon icon={"mdi-light:arrow-right"} />
        </span>
      </header>
      <div className={styles.movies}>
        {movies.map((movie, i) => {
          return <Card {...movie} key={movie.id} clickHandler={() => navigate(`/${movie.id}`)} />;
        })}
      </div>
    </section>
  );
}

export default Movies;
