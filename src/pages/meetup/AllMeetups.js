import MeeupList from "../../components/meetups/MeetupList.jsx";
import { meetupsDummyData } from "../../core/services/Dummy.js";

function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeeupList meetups={meetupsDummyData} />
    </section>
  );
}

export default AllMeetups;
