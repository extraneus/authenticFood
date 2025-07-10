import styles from "./footerall.module.css"; // Create this CSS module file
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footerall = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Restaurant Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>First React Pizza Co.</h3>
          <p className={styles.footerText}>
            Authentic Italian cuisine from our stone oven. All organic, all
            delicious.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt /> 123 Pizza Street, Food City
            </li>
            <li>
              <FaPhone /> (123) 456-7890
            </li>
            <li>
              <FaEnvelope /> info@reactpizza.com
            </li>
            <li>
              <FaClock /> Open: 9AM - 11PM Daily
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Newsletter</h3>
          <p className={styles.footerText}>Subscribe for special offers</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} First React Pizza Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footerall;
