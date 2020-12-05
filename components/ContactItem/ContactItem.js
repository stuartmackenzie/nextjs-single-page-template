import styles from "./ContactItem.module.sass";

import icons from "../Icons";
import Text from "../Text/Text";
import IconLink from "../IconLink/IconLink";

export default function ContactItem({ item }) {
  const { icon, uri, text } = item;
  return (
    <li className={styles.item}>
      <Text>
        <IconLink icon={icons(icon)} href={uri} className={styles.link}>
          {text}
        </IconLink>
      </Text>
    </li>
  );
}
