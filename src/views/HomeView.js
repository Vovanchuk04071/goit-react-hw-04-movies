import axios from "axios";
import React, { Component } from "react";
import FilmsList from "../Component/FilmsList";
import styles from "../Styles/baseStyles.module.css";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const keyApi = "af69857f8e14e4764e2ee669c4e0f9ab";
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${keyApi}`
    );
    this.setState({
      films: response.data.results,
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
