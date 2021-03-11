import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
    profile_path: [],
    error: null,
  };

  async componentDidMount() {
    const keyApi = 'af69857f8e14e4764e2ee669c4e0f9ab';
    const baseUrl = 'https://api.themoviedb.org/3/movie/';
    const baseUrlImg = 'https://image.tmdb.org/t/p/w500';
    await axios
      .get(
        `${baseUrl}${this.props.match.params.movieId}/credits?api_key=${keyApi}`,
      )
      .then(({ data }) => data.cast)
      .then(cast =>
        cast.forEach(({ profile_path, cast_id, name, character }) =>
          this.setState(prevState => ({
            cast: [
              {
                profile_path: `${baseUrlImg}${profile_path}`,
                cast_id,
                name,
                character,
              },
              ...prevState.cast,
            ],
          })),
        ),
      )
      .catch(error => this.setState({ error }));

    // this.setState({
    //   cast: responseCast,
    // });

    // if (responseCast) {
    //   return this.state.cast.forEach(
    //     ({ profile_path, cast_id, name, character }) =>
    //       this.setState(prevState => ({
    //         profile_path: [
    //           {
    //             profile_path: `${baseUrlImg}${profile_path}`,
    //             cast_id,
    //             name,
    //             character,
    //           },
    //           ...prevState.profile_path,
    //         ],
    //       })),
    //   );
    // }
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ cast_id, name, character, profile_path }) => (
              <li key={cast_id}>
                <img src={profile_path} alt={name} width="100" />
                <h4>{name}</h4>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any cast for this movie</p>
        )}
      </>
    );
  }
}

export default Cast;
