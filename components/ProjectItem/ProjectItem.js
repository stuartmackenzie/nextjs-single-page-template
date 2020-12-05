import Image from "next/image";
import styles from "./ProjectItem.module.sass";

import Text from "../Text/Text";
import IconLink from "../IconLink/IconLink";
import GithubIcon from "../Icons/GithubIcon";

export default function ProjectItem({ item }) {
  const { uri, image, title, text } = item;
  return (
    <li className={styles.item}>
      <div className={styles.img}>
        <Image src={image} alt={title} width={274} height={209} />
      </div>
      <div className={styles.description}>
        <Text tag="h2" gradient className={styles.h2}>
          {title}
        </Text>
        <Text className={styles.p}>{text}</Text>
        <IconLink
          href={uri}
          icon={<GithubIcon />}
          target="_blank"
          rel="noreferrer"
        >
          View code
        </IconLink>
      </div>
    </li>
  );
}
