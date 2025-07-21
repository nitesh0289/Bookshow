import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const Rows = ["A", "B", "C", "D", "E", "F", "G"];
const Theater_Sheet = [
  ["A1", "A2", "A3", "A4", "A5", "A6"],
  ["B1", "B2", "B3", "B4", "B5", "B6"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
  ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"]
];

function Seats() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState([]);

  useEffect(() => {
    //API CALL to fetch occupied seats

    setAlreadyFilled(["A1", "B2", "C6", "F5"]);
  }, []);

  const handleSeat = (s) => {
    if (alreadyFilled.includes(s)) return;
    setSelectedSeat(s);
    console.log(`${s} seat is selected`);
  };
  return (
    <article className={styles.seatsWrapper}>
      {Theater_Sheet.map((seat, i) => {
        return (
          <tr className={styles.rows}>
            <h3>{Rows[i]}</h3>
            <div>
              {seat.map((s) => {
                return (
                  <td
                    className={
                      selectedSeat === s
                        ? styles.selected
                        : alreadyFilled.includes(s)
                        ? styles.alreadyFilled
                        : ""
                    }
                    onClick={() => handleSeat(s)}
                  ></td>
                );
              })}
            </div>
          </tr>
        );
      })}
    </article>
  );
}

export default Seats;
