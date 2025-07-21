import { Icon } from "@iconify/react";
import React, { useState } from "react";

import styles from "./styles.module.scss";

const TimeSlots = ["06:30", "09:30", "12:30", "15:30", "18:30"];
function TimeSlot() {
  const [selected, setSelected] = useState(TimeSlots[0]);

  const handleTimeSlot = (slot) => {
    setSelected(slot);
  };

  return (
    <aside className={styles.timeSlot}>
      <h3>Available Slots</h3>

      <ul>
        {TimeSlots.map((timeSlot, i) => {
          return (
            <li
              key={i}
              onClick={() => handleTimeSlot(timeSlot)}
              className={selected === timeSlot && styles.active}
            >
              <Icon icon={"mdi:clock"} />
              <p>{timeSlot}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default TimeSlot;
