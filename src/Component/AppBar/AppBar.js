import React from "react";
import styles from "./AppBar.module.css";
import Navigation from "../Navigation";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
