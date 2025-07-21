import React from "react";

import Button from "../../components/atoms/Button";
import TimeSlot from "./partials/TimeSlot";
import Heading from "./partials/Heading";
import Seats from "./partials/Seats";

import styles from "./booking.module.scss";

function Booking() {
  const handleCheckout = () => {
    console.log("Checkout Page");
  };
  return (
    <>
      <main className={styles.container}>
        <TimeSlot />
        <div className={styles.right}>
          <Heading />
          <Seats />
          <Button
            text={"Proceed to Checkout"}
            fIcon={"icons8:right-arrow"}
            className={styles["checkout-btn"]}
            clickHandler={handleCheckout}
          />
        </div>
      </main>
    </>
  );
}

export default Booking;
