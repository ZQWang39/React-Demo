import React, { useContext } from "react";
import { FavoritesContext } from "../store/FavoritesContext";
import MeetupList from "../meetups/MeetupList";
const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>You have no favorites yet. Adding some?</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default Favorites;
