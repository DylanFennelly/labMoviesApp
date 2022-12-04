import React, { useState } from "react";

export const ActorContext = React.createContext(null);

const ActorContextProvider = (props) => {
  const [favourites, setFavourites] = useState([])
  //for displaying in fantasyMovie with name
  const [favouritesWithNames, setFavouritesWithNames] = useState([])
  const [myReviews, setMyReviews] = useState({})
  const [mustWatch, setMustWatch] = useState([])

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    let newFavouritesWithName = [...favouritesWithNames]
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
      newFavouritesWithName.push({
        id: actor.id,
        name: actor.name
      })
    }
    setFavourites(newFavourites);
    setFavouritesWithNames(newFavouritesWithName)
    console.log(newFavourites);
    console.log(newFavouritesWithName)
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites(favourites.filter(
      (tId) => tId !== actor.id
    ))

    const i = favouritesWithNames.findIndex(a => a.id === actor.id);
    console.log(i)
    if (i > -1) {
      favouritesWithNames.splice(i, 1)
      setFavouritesWithNames(favouritesWithNames)
    }

    console.log(favourites);
    console.log(favouritesWithNames)
  };

  const addReview = (actor, review) => {
    setMyReviews({ ...myReviews, [actor.id]: review })
  };

  const addToMustWatch = (actor) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(actor.id)) {
      newMustWatch.push(actor.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch)
  };

  const removeFromMustWatch = (actor) => {
    setMustWatch(mustWatch.filter(
      (tId) => tId !== actor.id
    ))
  };


  return (
    <ActorContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatch,
        mustWatch,
        removeFromMustWatch,
        favouritesWithNames
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;