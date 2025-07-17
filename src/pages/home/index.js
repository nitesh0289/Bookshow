import React from "react";

import Trailers from "./sections/trailers";
import styles from "./home.module.scss";
import Movies from "./sections/movies";
import Hero from "./sections/hero";

function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Movies />
      <Trailers />
    </main>
  );
}

export default Home;
