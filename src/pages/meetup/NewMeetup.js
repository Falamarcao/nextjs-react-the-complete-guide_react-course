import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    /*
    Sends data to Firebase's Realtime Database;
    Navigate back to the home replacing stack of pages
    not allowing user use back button.
    */

    const url =
      "https://react-getting-started-dfff7-default-rtdb.firebaseio.com"; // good before 22 oct 2022

    fetch(url + "/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then(() => navigate("/", { replace: true }));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
