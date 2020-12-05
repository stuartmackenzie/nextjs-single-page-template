import cx from "classnames";
import styles from "./MenuButton.module.sass";

export default function MenuButton({ open, onClick }) {
  const className = cx({
    [styles["menu-button"]]: true,
    [styles["open"]]: open
  });

  const lineClass = styles["menu-line"];

  return (
    <div className={className} onClick={onClick}>
      <div className={cx(lineClass, styles["menu-line1"])}></div>
      <div className={cx(lineClass, styles["menu-line2"])}></div>
      <div className={cx(lineClass, styles["menu-line3"])}></div>
    </div>
  );
}
