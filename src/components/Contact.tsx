import React from "react";
import styles from "./Contact.module.css";
import Footerall from "./footerall"; // Import Footerall

const Contact: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Have questions? Reach out to us anytime!
        </p>
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>

      {/* Add Footerall */}
      <Footerall />
    </>
  );
};

export default Contact;
