import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

import Card from "../../../../components/molecules/card";
import { getAllMovies } from "../../../../apis/movies";
import movies from "../../../../data/movies.json";
import styles from "./movies.module.scss";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const response = await getAllMovies();
      if (response.status === 200) setMovieList(response.data);
      else setMovieList([]);
    } catch (error) {
      console.log({ error });
    }
  };

  const convertMinToHour = (duration) => {
    return `${parseInt(duration / 60)}h ${parseInt(duration % 60)}m`;
  };

  console.log(convertMinToHour(300));

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className={styles.container}>
      <header>
        <h2>Now Showing</h2>
        <span>
          View All <Icon icon={"mdi-light:arrow-right"} />
        </span>
      </header>
      <div className={styles.movies}>
        {movieList.length ? (
          movieList.map((movie, i) => {
            return (
              <Card
                rating={"4.5"}
                key={movie._id}
                title={movie.title}
                genre={movie.genres}
                image={movie.thumbnailImage}
                year={movie.releaseDate.split("-")[0]}
                duration={convertMinToHour(movie.duration)}
                clickHandler={() => navigate(`/${movie._id}`)}
              />
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}

export default Movies;
