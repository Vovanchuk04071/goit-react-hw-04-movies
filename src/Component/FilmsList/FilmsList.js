import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./FilmsList.module.css";

const FilmsList = ({ films, location }) => {
  return (
    <>
      {films && (
        <ul className={styles.item}>
          {films.map((film) => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`,

                  state: {
                    from: location,
                  },
                }}
              >
                {film.original_title || film.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default withRouter(FilmsList);
