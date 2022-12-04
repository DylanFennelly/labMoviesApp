import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getTVGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterMoviesCard(props) {
    const { data, error, isLoading, isError } = useQuery("tvGenres", getTVGenres);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };
  
    const handleGenreChange = (e) => {
      handleChange(e, "genre", e.target.value);
    };

    const handleRatingChange = (e) => {
      handleChange(e, "rating", e.target.value);
    };

    const handleLanguageChange = (e) => {
      handleChange(e, "language", e.target.value);
    };

  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter TV series.
        </Typography>
        <TextField
          sx={formControl}
          id="filled-search"
          label="Name"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={formControl}>
          <InputLabel id="rating-label">Rating greater than...</InputLabel>
          <Select
            labelId="rating-label"
            id="rating-select"
            defaultValue=""
            value={props.ratingFilter}
            onChange={handleRatingChange}
          >
           <MenuItem value={9}>9</MenuItem>
           <MenuItem value={8}>8</MenuItem>
           <MenuItem value={7}>7</MenuItem>
           <MenuItem value={6}>6</MenuItem>
           <MenuItem value={5}>5</MenuItem>
           <MenuItem value={4}>4</MenuItem>
           <MenuItem value={3}>3</MenuItem>
           <MenuItem value={2}>2</MenuItem>
           <MenuItem value={1}>1</MenuItem>
           <MenuItem value={0}>0</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={formControl}>
          <InputLabel id="language-label">Original Language</InputLabel>
          <Select
            labelId="language-label"
            id="language-select"
            defaultValue=""
            value={props.languageFilter}
            onChange={handleLanguageChange}
          >
           <MenuItem value={"All"}>All</MenuItem>
           <MenuItem value={"en"}>English</MenuItem>
           <MenuItem value={"es"}>Spanish</MenuItem>
           <MenuItem value={"fr"}>French</MenuItem>
           <MenuItem value={"de"}>German</MenuItem>
           <MenuItem value={"it"}>Italian</MenuItem>
           <MenuItem value={"ja"}>Japanese</MenuItem>
           <MenuItem value={"ko"}>Korean</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter TV series.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}