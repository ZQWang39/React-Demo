import React from "react";
import NewMeetupForm from "../meetups/NewMeetupForm";
import axios from "axios";

const NewMeetup = () => {
  const handleAddMeetup = (userInput) => {
    fetch(
      "https://react-demo-de6d4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm addMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetup;
