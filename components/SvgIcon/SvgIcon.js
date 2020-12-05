import classNames from "classnames";
import styles from "./SvgIcon.module.sass";

export default function SvgIcon({
  name,
  viewBox = "0 0 512 512",
  children,
  className,
  ...rest
}) {
  const iconClass = styles["svg-icon"];
  const nameClass = styles[`${name}-icon`];
  let cs = classNames(iconClass, nameClass, className);
  return (
    <svg
      className={cs}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
}
