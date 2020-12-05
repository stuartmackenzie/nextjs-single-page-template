import cx from "classnames";
import styles from "./NavLink.module.sass";

export default function NavLink({ children, className, ...rest }) {
  const linkClass = cx(styles["nav-link"], className);
  return (
    <a className={linkClass} {...rest}>
      {children}
    </a>
  );
}
