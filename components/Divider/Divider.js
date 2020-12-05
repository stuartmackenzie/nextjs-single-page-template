import cx from "classnames";
import styles from "./Divider.module.sass";

export default function Divider({ className, ...rest }) {
  return <hr className={cx(styles.divider, className)} {...rest} />;
}
