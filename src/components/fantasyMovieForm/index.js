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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FantasyMovieForm = () => {
    const defaultValues = {
        author: "",
        review: "",
        agree: false,
        rating: "3",
      };
      const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm(defaultValues);
      const navigate = useNavigate();
      const context = useContext(FantasyMoviesContext);
      const [rating, setRating] = useState(3);
      const [open, setOpen] = React.useState(false);
    
    
      const handleRatingChange = (event) => {
        setRating(event.target.value);
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
              name="author"
              control={control}
              rules={{ required: "Name is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="author"
                  label="Author's name"
                  autoFocus
                />
              )}
            />
            {errors.author && (
              <Typography variant="h6" component="p">
                {errors.author.message}
              </Typography>
            )}
            <Controller
              name="review"
              control={control}
              rules={{
                required: "Review cannot be empty.",
                minLength: { value: 10, message: "Review is too short" },
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
                  label="Review text"
                  id="review"
                  multiline
                  minRows={10}
                />
              )}
            />
            {errors.review && (
              <Typography variant="h6" component="p">
                {errors.review.message}
              </Typography>
            )}
    
            <Controller
              control={control}
              name="rating"
              render={({ field: { onChange, value } }) => (
                <TextField
                  id="select-rating"
                  select
                  variant="outlined"
                  label="Rating Select"
                  value={rating}
                  onChange={handleRatingChange}
                  helperText="Don't forget your rating"
                >
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