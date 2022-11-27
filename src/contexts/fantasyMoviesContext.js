import React, { useState } from "react";

export const FantasyMoviesContext = React.createContext(null);

const FantasyMoviesContextProvider = (props) => {
  const [fantasy, setFantasy] = useState( [] )

  // const addToFantasyMovies = (fantasy) => {
  //   let newFantasy = [...fantasy];
  //   if (!fantasy.includes(fantasy.id)) {
  //     newFantasy.push(fantasy.id);
  //   }
  //   setFantasy(newFantasy);
  //   //console.log(newFavourites);
  // };

  const addToFantasyMovies = (newFantasy) => {
    fantasy.push(newFantasy)
    // setFantasy( {...fantasy, newFantasy } )
  };

  // We will use this function in a later section
  const removeFromFantasyMovies = (fantasy) => {
    setFantasy( fantasy.filter(
      (fId) => fId !== fantasy.id
    ) )
  };


  return (
    <FantasyMoviesContext.Provider
      value={{
        fantasy,
        addToFantasyMovies,
        removeFromFantasyMovies
      }}
    >
      {props.children}
    </FantasyMoviesContext.Provider>
  );
};

export default FantasyMoviesContextProvider;