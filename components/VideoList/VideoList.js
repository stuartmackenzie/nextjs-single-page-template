import styles from "./VideoList.module.sass";
import VideoItem from "../VideoItem/VideoItem";

export default function VideoList({ items }) {
  const els = items.map((item, idx) =>
    item.enabled ? <VideoItem key={idx.toString()} item={item} /> : null
  );
  return <ul className={styles.list}>{els}</ul>;
}
