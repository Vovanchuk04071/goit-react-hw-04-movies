import React, { Component } from 'react';
import FilmsList from '../Component/FilmsList';
import { loadingTrandingFilms } from '../config';
import styles from '../Styles/baseStyles.module.css';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const {
      data: { results: films },
    } = await loadingTrandingFilms();

    this.setState({
      films,
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <p className={styles.title}>Tranding today</p>
        <FilmsList films={films} />
      </>
    );
  }
}

export default HomePage;
