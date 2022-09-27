import { useContext } from "react";

import Card from "../ui/Card";
import style from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeeupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemsIsFavorite(props.id);

  function favorite() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        imageUrl: props.imageUrl,
        address: props.address,
      });
    }
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img
            src={props.imageUrl ?? "https://via.placeholder.com/600/92c952"}
            alt={props.title}
          />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.addess}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={favorite}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeeupItem;
