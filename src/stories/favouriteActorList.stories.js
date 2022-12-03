import React from "react";
import FavouriteActorList from "../components/favouriteActorList";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToActorFavouritesIcon from "../components/cardIcons/addToActorFavourites";
import Grid from "@mui/material/Grid";
import ActorContextProvider from "../contexts/actorsContext";

export default {
  title: "Actor List/FavouriteActorList",
  component: FavouriteActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorContextProvider>{Story()}</ActorContextProvider>,
  ],
};

export const Basic = () => {
  const actors = [
    { ...SampleActor, id: 1 },
    { ...SampleActor, id: 2 },
    { ...SampleActor, id: 3 },
    { ...SampleActor, id: 4 },
    { ...SampleActor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <FavouriteActorList
        actors={actors}
        action={(actor) => <AddToActorFavouritesIcon actor={actor} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
