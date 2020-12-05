import styles from "./ServiceList.module.sass";
import ServiceItem from "../ServiceItem/ServiceItem";

export default function ServiceList({ items }) {
  const els = items.map((item, idx) => (
    <ServiceItem key={idx.toString()} item={item} />
  ));
  return <ul className={styles.list}>{els}</ul>;
}
