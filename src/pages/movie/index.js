import { useParams } from "react-router";
import React from "react";

import styles from "./movie.module.scss";
import Details from "./sections/details";
import BookingDate from "./sections/booking";
import Recommendation from "./sections/recommendation";

function MovieDetails() {
  const { id } = useParams();

  return (
    <main className={styles.container}>
      <Details />
      <BookingDate />
      <Recommendation />
    </main>
  );
}

export default MovieDetails;
