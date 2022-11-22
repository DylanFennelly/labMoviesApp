import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import TodayIcon from '@mui/icons-material/Today';
import AlbumIcon from '@mui/icons-material/Album';
import TvIcon from '@mui/icons-material/Tv';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => { 
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
      </Paper>
      <Paper component="ul" sx={root}>
        test
      </Paper>
      <Paper component="ul" sx={root}>
        test
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Networks" sx={chip} color="primary" />
        </li>
      </Paper>
      </>
  );
};
export default ActorDetails ;