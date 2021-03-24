import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Component/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./pages/HomeView.js' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаю</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.moviesDetal} component={MovieDetailsPage} />

          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
