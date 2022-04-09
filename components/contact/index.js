import { useRef } from "react";
import classes from "./index.module.scss";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id={classes.contactContainer}>
      <div>
        <h2>Let's talk!</h2>
        <p>
          If you have any inquiries, suggestions, or want to simply chat, I'd
          love to hear from you.
        </p>
      </div>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <span className={classes.nameContainer}>
          <label>
            Name <span>*</span>
          </label>
          <input type="text" placeholder="John Doe" />
        </span>
        <span className={classes.emailContainer}>
          <label>
            Email <span>*</span>
          </label>
          <input type="email" placeholder="email@email.com" />
        </span>
        <span className={classes.emailContainer}>
          <label>
            Subject <span>*</span>
          </label>
          <input type="email" placeholder="Header" />
        </span>
        <span className={classes.messageContainer}>
          <label>
            Message <span>*</span>
          </label>
          <textarea placeholder="Message" />
        </span>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
