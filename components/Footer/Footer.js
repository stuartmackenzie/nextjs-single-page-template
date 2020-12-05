import styles from "./Footer.module.sass";

import CodeIcon from "../Icons/CodeIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import DevIcon from "../Icons/DevIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function Footer({ settings }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav}>
        <a className={styles.link} href="#hero">
          Home
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#services" className={styles.link}>
          Services
        </a>
        <a href="#projects" className={styles.link}>
          Projects
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </div>
      <div className={styles.by}>
        <p>
          <CodeIcon />
          with 💙 by Stuart MacKenzie &copy; 2020
        </p>
        <p>Built with pure HTML, CSS, and JavaScript</p>
      </div>
      <div className={styles.social}>
        <a href="#" target="_blank" className="contact-link">
          <YoutubeIcon />
        </a>
        <a href="#" target="_blank" className="contact-link">
          <DevIcon />
        </a>
        <a href="#" target="_blank" className="contact-link">
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
}
