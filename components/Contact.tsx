import React from "react";
import contactStyles from "../styles/Contact.module.scss";
import { handleClick } from "../utils/contactutils";

export const Contact: React.FunctionComponent = () => {
  return (
    <div className={contactStyles.contactContainer}>
      <div className={contactStyles.msg}>
        <h3>Feel free to drop your suggestions!</h3>
        <p>
          Your feedback is invaluable to me. Please do not hesitate to drop any
          feedback or report a bug. I appreciate your time!
        </p>
      </div>
      <div className={contactStyles.contactForm}>
        <span>SUBJECT</span>
        <textarea
          name="subject"
          id={contactStyles.subject}
          cols={60}
          rows={5}
        ></textarea>
        <span>BODY</span>
        <textarea
          name="body"
          id={contactStyles.body}
          cols={60}
          rows={20}
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className={contactStyles.submit}
          onClick={() => {
            handleClick(contactStyles.subject, contactStyles.body);
          }}
        />
      </div>
    </div>
  );
};
