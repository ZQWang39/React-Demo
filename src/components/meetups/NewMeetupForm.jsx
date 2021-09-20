import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
const NewMeetupForm = (props) => {
  const titleInput = useRef();
  const imgInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, img, address, description);
    const title = titleInput.current.value;
    const img = imgInput.current.value;
    const description = descriptionInput.current.value;
    const address = addressInput.current.value;
    const userInput = {
      title: title,
      img: img,
      description: description,
      address: address,
    };
    props.addMeetup(userInput);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInput} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imgInput} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" ref={addressInput} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" ref={descriptionInput} required />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
    // <Card>
    //   <form className={classes.form} onSubmit={submitHandler}>
    //     <div className={classes.control}>
    //       <label htmlFor="title">Meetup Title</label>
    //       <input
    //         type="text"
    //         id="title"
    //         value={title}
    //         onChange={handleTitleChange}
    //         required
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="image">Meetup Image</label>
    //       <input
    //         type="url"
    //         id="image"
    //         value={img}
    //         onChange={handleImgChange}
    //         required
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="address">Meetup Address</label>
    //       <input
    //         type="text"
    //         id="address"
    //         value={address}
    //         onChange={handleAddressChange}
    //         required
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="description">Description</label>
    //       <textarea
    //         id="description"
    //         rows="5"
    //         value={description}
    //         onChange={handleDescriptionChange}
    //         required
    //       />
    //     </div>
    //     <div className={classes.actions}>
    //       <button>Add Meetup</button>
    //     </div>
    //   </form>
    // </Card>
  );
};

export default NewMeetupForm;
