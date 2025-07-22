import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";

import Button from "../../../../components/atoms/Button";
import styles from "./booking.module.scss";

function BookingDate() {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const BOOKING_DATE_AVALIABLE = 15;

  const next7Days = useMemo(() => {
    const today = new Date();
    const days = [...new Array(BOOKING_DATE_AVALIABLE).fill(0).map((_, i) => i++)]; // simple array to map over

    return days.map((offset) => {
      const date = new Date(today);
      date.setDate(today.getDate() + offset);

      return {
        label: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate()
      };
    });
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 150;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleBooking = () => {
    navigate("/booking");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className={styles.container}>
      <h3>Choose Date</h3>
      <article>
        <div className={styles.left}>
          <button onClick={() => handleScroll("left")}>
            <Icon icon={"picon:left"} />
          </button>
          <ul ref={scrollRef}>
            {next7Days.map((day, i) => {
              return (
                <li
                  key={i}
                  className={selectedDate === day.date ? styles.selected : ""}
                  onClick={() => handleDateSelect(day.date)}
                >
                  <span>{day.label}</span>
                  <span>{day.date}</span>
                </li>
              );
            })}
          </ul>
          <button onClick={() => handleScroll("right")}>
            <Icon icon={"picon:right"} />
          </button>
        </div>

        <div className={styles.right}>
          <Button text={"Book Now"} className={styles.bookBtn} clickHandler={handleBooking} />
        </div>
      </article>
    </section>
  );
}

export default BookingDate;
