import React from "react";
import styles from "./GoBackBtn.module.css";

const GoBackBtn = ({ onChange }) => {
  return (
    <button className={styles.btn} onClick={onChange} type="button">
      Go back
    </button>
  );
};

export default GoBackBtn;
