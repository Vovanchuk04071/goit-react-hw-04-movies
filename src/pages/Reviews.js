import React, { Component } from 'react';
import { loadingReviews } from '../config';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await loadingReviews(this.props.match.params.movieId);

      this.setState({
        reviews: data.results,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
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
