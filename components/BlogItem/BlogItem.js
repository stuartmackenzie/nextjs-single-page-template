import Image from "next/image";
import Link from "next/link";
import styles from "./BlogItem.module.sass";

import Text from "../Text/Text";
import Date from "../Date/Date";

export default function BlogItem({ item }) {
  const { id, date, title, html } = item;
  return (
    <li className={styles.item}>
      <Link href={`/posts/${id}`}>
        <a className={styles.link}>
          {/* <div className={styles.img}>
            <Image src={image} alt={title} width={274} height={209} />
          </div> */}
          <div className={styles.content}>
            <Text tag="h2" gradient className={styles.h2}>
              {title}
            </Text>
            <small className={styles.date}>
              <Date>{date}</Date>
            </small>
            <Text className={styles.p}>{html}</Text>
          </div>
        </a>
      </Link>
    </li>
  );
}
