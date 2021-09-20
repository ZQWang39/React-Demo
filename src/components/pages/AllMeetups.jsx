import React, { useEffect, useState } from "react";
import MeetupList from "../meetups/MeetupList";
import axios from "axios";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState();
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://react-demo-de6d4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
      )
      .then((res) => {
        const data = res.data;
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetUps(meetups);
        console.log(meetups);
      });
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
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetUps} />
    </section>
  );
};

export default AllMeetUps;
