import styles from "./BlogList.module.sass";
import BlogItem from "../BlogItem/BlogItem";

export default function BlogList({ items }) {
  const els = items.map((item) => (
    <BlogItem key={item.id.toString()} item={item} />
  ));
  return <ul className={styles.list}>{els}</ul>;
}
