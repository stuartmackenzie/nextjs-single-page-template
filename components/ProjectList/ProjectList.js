import styles from "./ProjectList.module.sass";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectList({ items }) {
  const els = items.map((item, idx) => (
    <ProjectItem key={idx.toString()} item={item} />
  ));
  return <ul className={styles.list}>{els}</ul>;
}
