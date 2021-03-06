import React, { Component } from 'react';
import SearchFilms from '../Component/SearchFilms';
import FilmsList from '../Component/FilmsList';
import queryString from 'query-string';
import { loadingChangeFilms } from '../config';

class MoviesPage extends Component {
  state = {
    films: [],
    error: null,
  };

  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    try {
      if (query) {
        const { data } = await loadingChangeFilms(query);

        this.setState({
          films: data.results,
        });
      }
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  handleChangeQuery = async query => {
    try {
      const { data } = await loadingChangeFilms(query);

      this.setState({
        films: data.results ?? [],
      });
    } catch (error) {
      this.setState({
        error,
      });
    }

    this.props.history.push({
      search: `query=${query}`,
    });
  };

  render() {
    const { films, error } = this.state;

    return (
      <>
        {error ? (
          <p>Щось пішло не так</p>
        ) : (
          <>
            <SearchFilms onSubmit={this.handleChangeQuery} />
            <FilmsList films={films} />
          </>
        )}
      </>
    );
  }
}

export default MoviesPage;
