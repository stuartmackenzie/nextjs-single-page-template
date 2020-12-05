import cx from "classnames";
import styles from "./Container.module.sass";

export default function Container({ children, className, ...rest }) {
  return (
    <div className={cx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
