import styles from "./NavItem.module.sass";

export default function NavItem({ children }) {
  return <li className={styles["nav-item"]}>{children}</li>;
}
