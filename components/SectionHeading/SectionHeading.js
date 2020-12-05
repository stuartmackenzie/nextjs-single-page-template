import styles from "./SectionHeading.module.sass";

export default function SectionHeading({ title, children }) {
  return (
    <div className={styles["section-heading"]}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
