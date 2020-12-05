import styles from "./Card.module.sass";

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}
