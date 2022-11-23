import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { ActorContext } from "../../contexts/actorsContext";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WcIcon from '@mui/icons-material/Wc';
import Divider from '@mui/material/Divider';

export default function ActorCard({ actor, action }) {
  const { favourites, addToFavourites } = useContext(ActorContext);
  const { mustWatch, addToMustWatch } = useContext(ActorContext);
 
   if (favourites.find((id) => id === actor.id)) {
     actor.favourite = true;
   } else {
     actor.favourite = false
   }

   //gender is stored as number value, 1 for female and 2 for male. This translates that number value into a string value
   (actor.gender === 1) ? actor.gender = "  Female" : actor.gender = "  Male"

   //since "title" is used for movies and "name" for tv series, check media_type of known_for entry and return proper naming for each
   function handleMediaType(med){
    if (med.media_type === "movie"){
        return med.title
    }else{
        return med.name
    }
   }
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(actor);
   };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : actor.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <WcIcon/>
              {actor.gender}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={20}>
          <Typography variant="h6" component="p" sx={{fontWeight: 'bold'}}>
                Known for:
          </Typography>
          {actor.known_for.map((med) => (
            // https://smartdevpreneur.com/how-to-make-mui-typography-text-italic-bold-or-with-ellipses/
            <Typography variant="h6" component="p" >
                {handleMediaType(med)}
                <Divider />
            </Typography>
          ))}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}