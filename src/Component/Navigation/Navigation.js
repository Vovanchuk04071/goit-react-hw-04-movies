import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.header}>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
