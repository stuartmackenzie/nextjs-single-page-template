import cx from "classnames";
import styles from "./IconLink.module.sass";

export default function IconLink({ icon, className, children, ...rest }) {
  const cls = cx(styles.link, className);
  return (
    <a {...rest} className={cls}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
