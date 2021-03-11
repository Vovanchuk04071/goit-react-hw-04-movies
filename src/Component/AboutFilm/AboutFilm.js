import React from "react";
import styles from "./AboutFilm.module.css";

const AboutFilm = ({ image, title, overview, genres }) => {
  return (
    <div className={styles.wraper}>
      <img className={styles.img} src={image} alt={title}></img>
      <h1 className={styles.movie_detal__title}>{title}</h1>
      <h2 className={styles.overview}>Overview</h2>
      <p className={styles.text}>{overview}</p>
      {genres && (
        <ul className={styles.genres}>
          <h2>Genres</h2>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AboutFilm;
