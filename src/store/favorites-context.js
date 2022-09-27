import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavoriteHandler: (meetupId) => {},
  itemsIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(favoriteMeetup) {
    setUserFavorites((previousUserFavorites) =>
      previousUserFavorites.concat(favoriteMeetup)
    );
  }
  function removeFavorite(meetupId) {
    // [!==] checks if they are not identical in value and type,
    // while [!=] checks only for value inequality.
    setUserFavorites((previousUserFavorites) =>
      previousUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function itemsIsFavorite(meetupId) {
    // [===] checks if they are identical in value and type,
    // while [==] checks for only value equiality.
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    itemsIsFavorite: itemsIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
