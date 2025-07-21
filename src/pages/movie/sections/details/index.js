import { Icon } from "@iconify/react";
import React from "react";

import GGalaxy from "../../../../assets/gardian-galaxy.png";
import Button from "../../../../components/atoms/Button";
import styles from "./details.module.scss";
import Cast from "./partials/Cast";

function Details() {
  const handleWatchTrailer = () => {
    console.log("Handle Watch Trailer Click!");
  };
  const handleBuyTicket = () => {
    console.log("Handle Buy Ticket Click!");
  };
  const handleAddWishlist = () => {
    console.log("Handle Add Wishlist click!");
  };

  return (
    <section className={styles.container}>
      {/* Details */}
      <article>
        <img src={GGalaxy} alt="gardian" />

        <figcaption>
          <div className={styles.mainContent}>
            <h3>English</h3>
            <h1>
              Guardian <br /> of the Galaxy
            </h1>
            <span className={styles.rating}>
              <Icon icon={"mdi:star"} />
              &nbsp;4.5 IMDb Rating
            </span>
            <p>
              From the Marvel Cinematic Universe comes an epic space adventure. Peter Quill, a brash
              space adventurer who calls himself Star-Lord, finds himself the target of relentless
              bounty hunters after stealing a mysterious orb. To evade capture, he forms an uneasy
              alliance with a group of misfits: Gamora, Drax the Destroyer, Rocket Raccoon, and
              Groot.
            </p>
            <p>
              <span>2h 19m</span> &bull; <span>Action | Adventure</span> &bull;{" "}
              <span>1 May, 2025</span>
            </p>
          </div>

          <div className={styles.actions}>
            <Button
              text={"Watch Trailer"}
              className={styles.trailer}
              bIcon={"icon-park-outline:play"}
              clickHandler={handleWatchTrailer}
            />
            <Button text={"Buy Tickets"} clickHandler={handleBuyTicket} className={styles.ticket} />
            <div onClick={handleAddWishlist} className={styles.wishlist}>
              <Icon icon={"mdi:heart-outline"} />
            </div>
          </div>
        </figcaption>
      </article>
      {/* Cast */}
      <Cast />
    </section>
  );
}

export default Details;
