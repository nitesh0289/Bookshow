import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const randomAvatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10"
];

const randomNames = [
  { rname: "Emma Stone", cname: "Captain Jane" },
  { rname: "Tom Hardy", cname: "Blaze" },
  { rname: "Zendaya", cname: "Nova" },
  { rname: "Chris Hemsworth", cname: "Thunder" },
  { rname: "Scarlett Johansson", cname: "Phantom" },
  { rname: "Idris Elba", cname: "Shadow" },
  { rname: "Gal Gadot", cname: "Valkyrie" },
  { rname: "Ryan Gosling", cname: "Spectre" },
  { rname: "Millie Bobby Brown", cname: "Echo" },
  { rname: "Pedro Pascal", cname: "Dagger" }
];

const Cast = () => {
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const num = Math.floor(Math.random() * 4) + 4; // between 4 and 8
    const list = Array.from({ length: num }, (_, idx) => {
      const name = randomNames[idx % randomNames.length];
      return {
        ...name,
        avatar: randomAvatars[idx % randomAvatars.length]
      };
    });
    setCastList(list);
  }, []);

  return (
    <article className={styles.container}>
      <h2>Your Favorite Cast</h2>
      <div className={styles.grid}>
        {castList.map((cast, idx) => (
          <div key={idx} className={styles.card}>
            <img src={cast.avatar} alt={cast.rname} className={styles.avatar} />
            <h3 className={styles.name}>{cast.rname}</h3>
            <p className={styles.character}>{cast.cname}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Cast;
