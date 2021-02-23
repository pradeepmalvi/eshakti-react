import React from "react";
import "./feedbackForm.styles.scss";

import RatingStars from "../ratingstars/RatingStars.component";

// react modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function FeedbackForm({ open, onCloseModal }) {
  return (
    <Modal open={open} onClose={onCloseModal}>
      <div className="feedback-form">
        <h5>Please share your feedback on the website and its ease of use.</h5>
        <input
          type="text"
          className="suggestion-title"
          placeholder="suggestion-title"
        />
        <textarea
          placeholder="enter you comment or suggestion here"
          className="feedback-text-area"
          name="suggestion"
          cols="30"
          rows="5"
        ></textarea>
        <div className="rating">
          <RatingStars />
        </div>
        <div className="permission">
          <input
            type="checkbox"
            name="permission-check"
            className="publish-permission"
          />
          <label htmlFor="permition-check">
            I permit my feedback to be published
          </label>
        </div>
        <button className="submit">Submit</button>
      </div>
    </Modal>
  );
}
