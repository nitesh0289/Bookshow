import React from "react";

import styles from "./booking.module.scss";
import Seats from "./partials/Seats";

function Booking() {
  return (
    <main className={styles.container}>
      <Seats />
    </main>
  );
}

export default Booking;
