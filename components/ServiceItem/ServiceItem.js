import styles from "./ServiceItem.module.sass";
import icons from "../Icons";
import Text from "../Text/Text";

export default function ServiceItem({ item }) {
  const { icon, title, text } = item;
  const iconEl = icons(icon);
  return (
    <li className={styles.item}>
      {iconEl}
      <Text tag="h2" gradient>
        {title}
      </Text>
      <Text>{text}</Text>
    </li>
  );
}
