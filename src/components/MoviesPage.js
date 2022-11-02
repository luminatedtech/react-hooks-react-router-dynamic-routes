import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
export default MoviesPage;
