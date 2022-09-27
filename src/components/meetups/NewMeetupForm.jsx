import { useRef } from "react";
import Card from "../ui/Card";

import style from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageUrlInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const imageUrl = imageUrlInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetupData = {
      title: title,
      imageUrl: imageUrl,
      address: address,
      description: description,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            ref={titleInputRef}
            required
          />
        </div>
        <div className={style.control}>
          <label htmlFor="image-url">Image</label>
          <input
            id="image-url"
            type="url"
            placeholder="Image URL"
            ref={imageUrlInputRef}
          />
        </div>
        <div className={style.control}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            ref={addressInputRef}
          />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" ref={descriptionInputRef} />
        </div>
        <div className={style.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
