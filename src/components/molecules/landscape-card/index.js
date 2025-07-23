import { Icon } from "@iconify/react";
import React from "react";

import styles from "./landscape.module.scss";
import Hero from "../../../assets/hero.png";

function LandscapeCard(props) {
  const { image, title, description, price, rating, type, ...rest } = props;
  return (
    <article className={styles.container}>
      <img src={image || Hero} alt={`card-img`} />
      <div className={styles.contents}>
        <header>
          <h3>{title}</h3>
          {type === "bookings" && <p>#{rest?.bookingId}</p>}
        </header>
        <p>{description}</p>
        {type === "bookings" && (
          <div className={styles.extra}>
            <li>
              Date: <span>{rest.date}</span>
            </li>
            <li>
              Time Slot: <span>{rest.timeSlot}</span>
            </li>
          </div>
        )}
        <div className={styles.bottom}>
          <span>
            {type !== "bookings" ? (
              <>
                Ticket Price: <span>₹{price}</span>
              </>
            ) : (
              <>
                Seat No: <span>{rest.seat}</span>
              </>
            )}
          </span>
          <span>
            {type !== "bookings" ? (
              <>
                <Icon icon={"mdi:star"} /> {rating}
              </>
            ) : (
              <>
                Booking Date: <span>{rest.bookingDate}</span>
              </>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}

export default LandscapeCard;
