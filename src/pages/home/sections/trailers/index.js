import ReactPlayer from "react-player";
import React from "react";

import styles from "./trailers.module.scss";

function Trailers() {
  return (
    <section className={styles.container}>
      <header>
        <h2>Trailers</h2>
      </header>
      <div className={styles.trailers}>
        {/* Player */}
        <ReactPlayer
          src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          className={styles.videoPlayer}
        />
        {/* Content Menu */}
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default Trailers;
