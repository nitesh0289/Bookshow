import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Icon } from "@iconify/react";

import trailers from "../../../../data/trailers.json";
import styles from "./trailers.module.scss";

function Trailers() {
  const [currentSrc, setCurrentSrc] = useState(trailers[0].src);
  return (
    <section className={styles.container}>
      <header>
        <h2>Trailers</h2>
      </header>
      <div className={styles.trailers}>
        {/* Player */}
        <ReactPlayer src={currentSrc} className={styles.videoPlayer} />
        {/* Content Menu */}
        <ul>
          {trailers.map((trailer) => {
            return (
              <li key={trailer.id} onClick={() => setCurrentSrc(trailer.src)}>
                <img src={trailer.image} alt={trailer.alt} width={150} />
                <Icon icon={"icon-park-twotone:play"} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Trailers;
