import cx from "classnames";
import styles from "./NavList.module.sass";

import YoutubeIcon from "../Icons/YoutubeIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import DevIcon from "../Icons/DevIcon";
import NavItem from "../NavItem/NavItem";
import ProfilePic from "../ProfilePic/ProfilePic";
import NavLink from "../NavLink/NavLink";

export default function NavList({ open, settings, onItemClick }) {
  return (
    <ul className={cx({ [styles.list]: true, [styles.open]: open })}>
      <NavItem>
        <NavLink href="#hero" onClick={onItemClick} rel="noreferrer">
          <ProfilePic />
          <span className={styles.caption}>Stuart MacKenzie</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#about" onClick={onItemClick} rel="noreferrer">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#services" onClick={onItemClick} rel="noreferrer">
          Services
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#projects" onClick={onItemClick} rel="noreferrer">
          Projects
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#videos" onClick={onItemClick} rel="noreferrer">
          Videos
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact" rel="noreferrer">
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={settings.youtube.uri} target="_blank" rel="noreferrer">
          <YoutubeIcon className={styles.svg} />
        </NavLink>
        <NavLink href={settings.dev.uri} target="_blank" rel="noreferrer">
          <DevIcon className={styles.svg} />
        </NavLink>
        <NavLink href={settings.twitter.uri} target="_blank" rel="noreferrer">
          <TwitterIcon className={styles.svg} />
        </NavLink>
      </NavItem>
      <div className={styles.cta}>
        <NavLink
          href={settings.coffee.uri}
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          Buy Me A Coffee
        </NavLink>
      </div>
    </ul>
  );
}
