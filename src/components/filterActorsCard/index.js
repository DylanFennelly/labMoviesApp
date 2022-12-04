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
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  

  export default function FilterActorsCard(props) {
    console.warn = () => {};
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };
  
    const handleGenderChange = (e) => {
      handleChange(e, "gender", e.target.value);
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
          Filter the actors.
        </Typography>
        <TextField
          sx={formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.nameFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender-select"
            defaultValue=""
            value={props.genderFilter}
            onChange={handleGenderChange}
          >
           <MenuItem value={0}>Both</MenuItem>
           <MenuItem value={1}>Female</MenuItem>
           <MenuItem value={2}>Male</MenuItem>
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
          Filter the actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}