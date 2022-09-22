import MeeupItem from "./MeetupItem";
import style from "./MeetupList.module.css";

function MeeupList(props) {
  return (
    <ul className={style.list}>
      {props.meetups.map((meetup) => (
        <MeeupItem
          key={meetup.id}
          id={meetup.id}
          imageUrl={meetup.imageUrl}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeeupList;
