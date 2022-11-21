import React, { useState } from "react";

export const ActorContext = React.createContext(null);

const ActorContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (tId) => tId !== actor.id
    ) )
  };

  const addReview = (actor, review) => {
    setMyReviews( {...myReviews, [actor.id]: review } )
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
    setMustWatch( mustWatch.filter(
      (tId) => tId !== actor.id
    ) )
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
        removeFromMustWatch
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;