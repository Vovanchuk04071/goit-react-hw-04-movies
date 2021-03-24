import React from 'react';
import styles from './GoBackBtn.module.css';
import PropTypes from 'prop-types';

const GoBackBtn = ({ onChange }) => {
  return (
    <button className={styles.btn} onClick={onChange} type="button">
      Go back
    </button>
  );
};

GoBackBtn.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default GoBackBtn;
