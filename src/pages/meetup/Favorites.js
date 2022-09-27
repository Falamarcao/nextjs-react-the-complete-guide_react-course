import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import MeetupList from "../../components/meetups/MeetupList";

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <div>Favorites Page</div>
      {content}
    </section>
  );
}

export default Favorites;
