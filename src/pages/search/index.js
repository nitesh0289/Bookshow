import React from "react";

import LandscapeCard from "../../components/molecules/landscape-card";
import searchList from "../../data/search-data.json";
import styles from "./search.module.scss";

function SearchPage() {
  return (
    <main className={styles.container}>
      <h1>Search Result</h1>
      <section>
        {!searchList.length ? (
          searchList.map((data, i) => {
            return <LandscapeCard key={i} {...data} type={"search"} />;
          })
        ) : (
          <h2 className={styles.empty}>No Result Found!</h2>
        )}
      </section>
    </main>
  );
}

export default SearchPage;
