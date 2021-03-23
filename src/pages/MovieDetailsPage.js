import React, { Component } from 'react';
import AboutFilm from '../Component/AboutFilm';
import AdditionalInformation from '../Component/AdditionalInformation';
import GoBackBtn from '../Component/GoBackBtn';
import { loadFilms, loadingImgPoster } from '../config';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    title: '',
    overview: '',
    image: '',
    popularity: null,
    vote_average: null,
    genres: [],
    error: null,
  };

  async componentDidMount() {
    const { data } = await loadFilms(this.props.match);

    this.setState(data);

    try {
      const {
        config: { url },
      } = await loadingImgPoster(data);
      if (url) {
        this.setState({
          image: url,
        });
      }
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(routes.home);
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
