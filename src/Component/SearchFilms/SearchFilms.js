import React, { Component } from 'react';
import styles from './Search.module.css';

class SearchFilms extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
      films: null,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.onSubmit(this.state.query);

      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={this.handleChange}
        ></input>
        <button className={styles.btn} type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchFilms;
