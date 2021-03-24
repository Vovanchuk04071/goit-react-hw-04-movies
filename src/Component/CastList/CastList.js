import React from 'react';
import baseImg from '../../img/baseImg.jpg';
import PropTypes from 'prop-types';
import styles from './CastList.module.css';

const CastList = ({ casts }) => {
  return (
    <ul>
      {casts.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          {profile_path ? (
            <img src={profile_path} alt={name} className={styles.img} />
          ) : (
            <img src={baseImg} alt={name} className={styles.img} />
          )}
          <h4>{name}</h4>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  casts: PropTypes.array.isRequired,
};

export default CastList;
