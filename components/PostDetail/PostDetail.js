import styles from "./PostDetail.module.sass";

import Text from "../Text/Text";
import Date from "../Date/Date";

export default function PostDetail({ item }) {
  const { title, html, date } = item;
  return (
    <article className={styles.article}>
      <Text tag="h1" className={styles.title}>
        {title}
      </Text>
      <div className={styles.date}>
        <Date className={styles.time}>{date}</Date>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
