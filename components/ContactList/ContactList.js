import styles from "./ContactList.module.sass";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ items }) {
  const els = items.map((item, idx) => (
    <ContactItem key={idx.toString()} item={item} />
  ));
  return <ul className={styles.list}>{els}</ul>;
}
