import React, { Component } from 'react';
import CastList from '../Component/CastList';
import { loadingCast, baseUrlImg } from '../config';

class Cast extends Component {
  state = {
    casts: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { cast },
      } = await loadingCast(this.props.match.params.movieId);

      const casts = cast.map(({ profile_path, cast_id, name, character }) => ({
        profile_path: profile_path ? `${baseUrlImg}${profile_path}` : null,
        cast_id,
        name,
        character,
      }));

      this.setState({
        casts,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  }

  render() {
    const { casts, error } = this.state;

    return (
      <>
        {error !== null && <p>{error}</p>}
        {casts.length > 0 ? <CastList casts={casts} /> : <p>We don't have any cast for this movie</p>}
      </>
    );
  }
}

export default Cast;
