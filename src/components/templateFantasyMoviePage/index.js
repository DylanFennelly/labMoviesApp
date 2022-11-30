import React from "react";
import FantasyMovieHeader from "../fantasyMovieHeader";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const TemplateMoviePage = ({ movie, children }) => {
  const navigate = useNavigate();

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }

  return (
    <>
      <FantasyMovieHeader movie={movie}/>

      <Grid container sx={{ padding: "15px" }}>
        <Grid item xs={1}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          </div>
        </Grid>

        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;