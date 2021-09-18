import classes from "./MeetupList.module.css";
import React from "react";
import MeetupItem from "./MeetupItem";

const MeetyupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
      ;
    </ul>
  );
};

export default MeetyupList;
