import React, { Fragment, useEffect, useState } from "react";

import styles from "./styles.module.scss";

const Rows = ["A", "B", "C", "D", "E", "F", "G"];
const Theater_Sheet = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  [
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "C11",
    "C12",
    "C13",
    "C14",
    "C15",
    "C16",
    "C17",
    "C18"
  ],
  [
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12",
    "D13",
    "D14",
    "D15",
    "D16",
    "D17",
    "D18"
  ],
  [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9",
    "E10",
    "E11",
    "E12",
    "E13",
    "E14",
    "E15",
    "E16",
    "E17",
    "E18"
  ],
  [
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18"
  ],
  [
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8",
    "G9",
    "G10",
    "G11",
    "G12",
    "G13",
    "G14",
    "G15",
    "G16",
    "G17",
    "G18"
  ]
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
          <Fragment key={i}>
            <tr className={styles.rows}>
              <h3>{Rows[i]}</h3>
              <div className={styles.cell}>
                {seat.map((s, j) => {
                  return (
                    <div key={j}>
                      {j + 1 === Math.floor(seat.length / 2) &&
                        ["E", "F", "G"].includes(Rows[i]) && <div className={styles.space}></div>}
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
                      {["B", "G"].includes(Rows[i]) && <span>{j + 1}</span>}
                    </div>
                  );
                })}
              </div>
            </tr>
            {["B", "D"].includes(Rows[i]) ? <br /> : <></>}
          </Fragment>
        );
      })}
    </article>
  );
}

export default Seats;
