import React, { Component } from "react";
import axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
    profile_path: [],
  };

  async componentDidMount() {
    const keyApi = "af69857f8e14e4764e2ee669c4e0f9ab";
    const baseUrl = "https://api.themoviedb.org/3/movie/";
    const baseUrlImg = "https://image.tmdb.org/t/p/w500";
    const responseCast = await axios.get(
      `${baseUrl}${this.props.match.params.movieId}/credits?api_key=${keyApi}`
    );

    this.setState({
      cast: responseCast.data.cast,
    });

    if (responseCast) {
      // console.log(responseCast.data.cast);
      return responseCast.data.cast.map(({ profile_path }) =>
        this.setState({
          profile_path: [
            ...responseCast.data.cast,
            (profile_path = `${baseUrlImg}${profile_path}`),
          ],
        })
      );

      // this.setState({ profile_path: `${baseUrlImg}${profile_path}` })

      // const responseImg = await axios.get(
      //   `${baseUrlImg}${responseCast.data.cast.profile_path}`
      // );
      // console.log(responseImg);
    }
  }

  render() {
    const { cast } = this.state;
    console.log(this.state.profile_path);
    return (
      <>
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ cast_id, name, character }) => (
              <li key={cast_id}>
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
