import React from "react";

import LandscapeCard from "../../components/molecules/landscape-card";
import searchList from "../../data/search-data.json";
import styles from "./wishlist.module.scss";

function Wishlist() {
  return (
    <main className={styles.container}>
      <h1>My Wishlist</h1>
      <section>
        {!searchList.length ? (
          searchList.map((data, i) => {
            return <LandscapeCard key={i} {...data} type={"wishlist"} />;
          })
        ) : (
          <h2 className={styles.empty}>No Movies Added in Wishlist!</h2>
        )}
      </section>
    </main>
  );
}

export default Wishlist;
