import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './FilmsList.module.css';
import PropTypes from 'prop-types';

const FilmsList = ({ films, location }) => {
  return (
    <>
      {films && (
        <ul className={styles.item}>
          {films.map(film => (
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

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(FilmsList);
