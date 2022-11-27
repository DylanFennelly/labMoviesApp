import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { FantasyMoviesContext } from "../../contexts/fantasyMoviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import genres from "./genres";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FantasyMovieForm = () => {
    const defaultValues = {
        author: "",
        review: "",
        agree: false,
      };
      const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm(defaultValues);
      const navigate = useNavigate();
      const context = useContext(FantasyMoviesContext);
      const [genre, setGenre] = useState( [] );
      const [open, setOpen] = React.useState(false);

      console.warn = () => {};
    
    
      const handleGenreChange = (event) => {
        //finds selected genre in genres array by finding the index of the coreesponding element based on the returned target value
        const selectedGenre = genres[genres.indexOf(genres.find(e => e.id === event.target.value))]
        //https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
        //https://www.w3schools.com/jsref/jsref_indexof_array.asp
        if (!genre.includes(selectedGenre)){
          genre.push(selectedGenre)
        }
        
        // console.log(event.target)
        console.log(genre)
      };
    
      const handleSnackClose = (event) => {
        setOpen(false);
        navigate("/movies/favourites");
      };
    
      const onSubmit = (fantasy) => {
        // review.movieId = movie.id;
        // review.rating = rating;
        context.addToFantasyMovies(fantasy);
        setOpen(true); 
      };

      //updates the genre select box with latest selected genre
      function genreBoxName (g){
        if (g.length > 0){
          return g[g.length - 1].name
        } 
      }

    return (
        <Box component="div" sx={styles.root}>
          <Snackbar
            sx={styles.snack}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            onClose={handleSnackClose}
          >
            <Alert
              severity="success"
              variant="filled"
              onClose={handleSnackClose}
            >
              <Typography variant="h4">
                Thank you for submitting a review
              </Typography>
            </Alert>
          </Snackbar>
          <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="title"
                  label="Movie title"
                  autoFocus
                />
              )}
            />
            {errors.title && (
              <Typography variant="h6" component="p" style={{color: 'red'}}>
                {errors.title.message}
              </Typography>
            )}
            <Controller
              name="overview"
              control={control}
              rules={{
                required: "Overview cannot be empty.",
                minLength: { value: 10, message: "Overview is too short" },
              }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label="Overview text"
                  id="overview"
                  multiline
                  minRows={10}
                />
              )}
            />
            {errors.overview && (
              <Typography variant="h6" component="p">
                {errors.overview.message}
              </Typography>
            )}
    
            <Controller
              control={control}
              name="genre"
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="select-genre"
                  select
                  variant="outlined"
                  label="Genre Select"
                  value={genreBoxName(genre)}
                  onChange={handleGenreChange}
                  helperText="Don't forget your rating"
                >
                  {genres.map((option) => (
                <MenuItem key={option.id} value={option.id} >
                  {option.name}
                </MenuItem>
              ))}
                </TextField>
              )}
            />
            
    
            <Box sx={styles.buttons}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={styles.submit}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="contained"
                color="secondary"
                sx={styles.submit}
                onClick={() => {
                  reset({
                    author: "",
                    content: "",
                  });
                }}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      );
  
};

export default FantasyMovieForm;