import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
  const [favourites, setFavourites] = useState([])
  const [myReviews, setMyReviews] = useState({})
  const [mustWatch, setMustWatch] = useState([])

  const addToFavourites = (tv) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter(
      (tId) => tId !== tv.id
    ))
  };

  const addReview = (tv, review) => {
    setMyReviews({ ...myReviews, [tv.id]: review })
  };

  const addToMustWatch = (tv) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(tv.id)) {
      newMustWatch.push(tv.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch)
  };

  const removeFromMustWatch = (tv) => {
    setMustWatch(mustWatch.filter(
      (tId) => tId !== tv.id
    ))
  };


  return (
    <TVContext.Provider
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
    </TVContext.Provider>
  );
};

export default TVContextProvider;