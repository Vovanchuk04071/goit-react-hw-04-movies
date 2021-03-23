import React, { Component } from 'react';
import { loadingReviews } from '../config';

class Reviews extends Component {
  state = {
    results: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await loadingReviews(this.props.match);

      this.setState({
        results: data.results,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { results } = this.state;
    return (
      <>
        {results.length > 0 ? (
          <ul>
            {results.map(({ id, author, content }) => (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
