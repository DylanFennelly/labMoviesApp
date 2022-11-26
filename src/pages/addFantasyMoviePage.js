import React from "react";
import PageTemplate from "../components/templateFantasyMoviePage";
import FantasyMovieForm from "../components/fantasyMovieForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const AddFantasyMoviePage = (props) => {
  
  // const { data: movie, error, isLoading, isError } = useQuery(
  //   ["movie", { id: movieId }],
  //   getMovie
  // );

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  return (
    <PageTemplate>
      <FantasyMovieForm />
    </PageTemplate>
  );
};

export default AddFantasyMoviePage;