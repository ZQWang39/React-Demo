import React from "react";
import NewMeetupForm from "../meetups/NewMeetupForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
const NewMeetup = () => {
  const history = useHistory();
  const handleAddMeetup = (userInput) => {
    axios
      .post(
        "https://react-demo-de6d4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
        userInput
      )
      .then(history.replace("/"));
    //.replace() back button will not work, .push() backbutton will take the page back to the submit page
  };
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm addMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetup;
