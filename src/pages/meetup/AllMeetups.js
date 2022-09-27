import { useEffect, useState } from "react";

import MeeupList from "../../components/meetups/MeetupList.jsx";
// import { meetupsDummyData } from "../../core/services/Dummy.js";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setmeetupsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url =
      "https://react-getting-started-dfff7-default-rtdb.firebaseio.com"; // good before 22 oct 2022

    fetch(url + "/meetups.json").then((response) =>
      response.json().then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setmeetupsData(meetups);
      })
    );
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeeupList meetups={meetupsData} />
    </section>
  );
}

export default AllMeetups;
