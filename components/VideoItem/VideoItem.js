import styles from "./VideoItem.module.sass";
import Text from "../Text/Text";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

export default function VideoItem({ item }) {
  const { video, title, text } = item;
  return (
    <li className={styles.item}>
      <YoutubeEmbed id={video} />
      <Text tag="h2" gradient>
        {title}
      </Text>
      <Text>{text}</Text>
    </li>
  );
}
