import React, { Component } from 'react';
import AboutFilm from '../Component/AboutFilm';
import AdditionalInformation from '../Component/AdditionalInformation';
import GoBackBtn from '../Component/GoBackBtn';
import { loadFilms, loadingImgPoster } from '../config';
import routes from '../routes';
import baseImg from '../img/baseImg.jpg';

class MovieDetailsPage extends Component {
  state = {
    film: {
      title: '',
      overview: '',
      image: '',
      genres: [],
    },
    error: null,
  };

  async componentDidMount() {
    const {
      data: { title, overview, genres, poster_path },
    } = await loadFilms(this.props.match.params.movieId);

    let image = baseImg;

    if (poster_path) {
      const {
        config: { url },
      } = await loadingImgPoster(poster_path);
      image = url;
    }

    this.setState({ film: { title, overview, genres, image } });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(routes.home);
  };

  render() {
    const { image, title, overview, genres } = this.state.film;

    return (
      <>
        <GoBackBtn onChange={this.handleGoBack} />
        {genres && <AboutFilm image={image} title={title} overview={overview} genres={genres} />}
        <AdditionalInformation />
      </>
    );
  }
}

export default MovieDetailsPage;
