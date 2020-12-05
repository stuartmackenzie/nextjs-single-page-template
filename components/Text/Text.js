import cx from "classnames";
import styles from "./Text.module.sass";

export default function Text({
  tag = "p",
  className,
  children,
  gradient,
  ...rest
}) {
  const Tag = `${tag}`;
  const cls = cx(styles[tag], className, gradient ? styles.gradient : "");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
