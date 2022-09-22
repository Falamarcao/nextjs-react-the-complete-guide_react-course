import style from "./MeetupItem.module.css";

function MeeupItem(props) {
  return (
    <li className={style.item}>
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
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeeupItem;
