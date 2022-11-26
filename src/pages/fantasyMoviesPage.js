import React, { useContext } from "react";
import PageTemplate from "../components/templateFantasyMovieListPage";
import { FantasyMoviesContext } from "../contexts/fantasyMoviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const FantasyMoviesPage = (props) => {
  const { fantasy: fantasyIds } = useContext(FantasyMoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    fantasyIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => { 
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Fantasy Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default FantasyMoviesPage;