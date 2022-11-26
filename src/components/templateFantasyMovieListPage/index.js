import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import FantasyMovieList from "../fantasyMovieList";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";

function FantasyMovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <FantasyMovieList action={action} movies={displayedMovies}></FantasyMovieList>
            
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => console.log("Wow!")}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <AddIcon />
        New Fantasy Movie
      </Fab>
    </Grid>
    
  );
}
export default FantasyMovieListPageTemplate;