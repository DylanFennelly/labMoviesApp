import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

//   const handleAddToFavourites = (e) => {
//     e.preventDefault();
//     context.addToFavourites(movie);
//   };

  return (
    <IconButton aria-label="add to must watch">
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;