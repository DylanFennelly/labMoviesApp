import React, {useContext} from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateFantasyMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { FantasyMoviesContext } from "../../contexts/fantasyMoviesContext";


const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const context = useContext(FantasyMoviesContext);
  const movie = context.fantasy[id]


  return (
    <PageTemplate movie={movie}>
        <MovieDetails movie={movie} />
    </PageTemplate>
  );
};

export default MovieDetailsPage;