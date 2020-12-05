import cx from "classnames";
import styles from "./Button.module.sass";

export default function Button({ className, children, ...rest }) {
  return (
    <div className={cx(styles.button, className)}>
      <a className={styles.link} {...rest}>
        {children}
      </a>
    </div>
  );
}
