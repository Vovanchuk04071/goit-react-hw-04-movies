import React, { Component } from "react";
import SearchFilms from "../Component/SearchFilms";
import FilmsList from "../Component/FilmsList";
import queryString from "query-string";
import axios from "axios";

class MoviesPage extends Component {
  state = {
    films: [],
    query: "",
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      const keyApi = "af69857f8e14e4764e2ee669c4e0f9ab";
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${query}`
        )
        .then(({ data }) =>
          this.setState({
            films: data.results,
          })
        );
    }
  }

  onChangeFilms = (query) => {
    const keyApi = "af69857f8e14e4764e2ee669c4e0f9ab";
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${query}`
      )
      .then(({ data }) =>
        this.setState({
          films: data.results,
        })
      );
    this.setState({
      query,
    });

    this.props.history.push({
      search: `query=${query}`,
    });
  };

  render() {
    const { films } = this.state;
    // console.log(query);
    // console.log(films);

    return (
      <>
        <SearchFilms onSubmit={this.onChangeFilms} />
        <FilmsList films={films} />
      </>
    );
  }
}

export default MoviesPage;
