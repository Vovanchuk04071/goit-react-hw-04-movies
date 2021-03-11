import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const keyApi = "af69857f8e14e4764e2ee669c4e0f9ab";
    const baseUrl = `https://api.themoviedb.org/3/movie/`;
    const response = await axios.get(
      `${baseUrl}${this.props.match.params.movieId}/reviews?api_key=${keyApi}`
    );

    this.setState({
      results: response.data.results,
    });
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
