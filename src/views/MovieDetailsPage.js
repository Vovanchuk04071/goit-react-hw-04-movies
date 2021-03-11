import React, { Component } from 'react';
import axios from 'axios';
import AboutFilm from '../Component/AboutFilm';
import AdditionalInformation from '../Component/AdditionalInformation';
import GoBackBtn from '../Component/GoBackBtn';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    image: null,
    popularity: null,
    vote_average: null,
    genres: null,
  };
  async componentDidMount() {
    const keyApi = 'af69857f8e14e4764e2ee669c4e0f9ab';
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${keyApi}`,
    );
    this.setState({
      ...response.data,
    });

    const posterImage = await axios
      .get(`https://image.tmdb.org/t/p/w500/${response.data.poster_path}`)
      .catch(error => console.error(error));

    if (posterImage) {
      this.setState({
        image: posterImage.config.url,
      });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    console.log(location);
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { image, title, overview, genres } = this.state;
    const { match } = this.props;

    return (
      <>
        <GoBackBtn onChange={this.handleGoBack} />
        <AboutFilm
          image={image}
          title={title}
          overview={overview}
          genres={genres}
        />
        <AdditionalInformation match={match} />
      </>
    );
  }
}

export default MovieDetailsPage;
