import React, { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorties, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.filter(
        (preUserFavorite) => preUserFavorite.id !== meetupId
      );
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorties.some((userFavorite) => userFavorite.id === meetupId);
  };
  const context = {
    favorites: userFavorties,
    totalFavorites: userFavorties.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContextProvider, FavoritesContext };
