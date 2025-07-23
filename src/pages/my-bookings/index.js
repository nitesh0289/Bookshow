import React from "react";

import LandscapeCard from "../../components/molecules/landscape-card";
import bookingsList from "../../data/my-bookings.json";
import styles from "./styles.module.scss";

function MyBookings() {
  return (
    <main className={styles.container}>
      <h1>My Bookings</h1>
      <section>
        {!bookingsList.length ? (
          bookingsList.map((data, i) => {
            return <LandscapeCard key={i} {...data} type={"bookings"} />;
          })
        ) : (
          <h2 className={styles.empty}>No Bookings are available!</h2>
        )}
      </section>
    </main>
  );
}

export default MyBookings;
