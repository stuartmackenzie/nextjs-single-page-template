import styles from "./YoutubeEmbed.module.sass";

export default function YoutubeEmbed({
  id,
  width = 160,
  height = 90,
  frameborder = 0
}) {
  const src = `https://www.youtube.com/embed/${id}`;
  const allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  return (
    <div className={styles.wrap}>
      <iframe
        className={styles.embed}
        width={width}
        height={height}
        src={src}
        frameBorder={frameborder}
        allow={allow}
        allowFullScreen
      ></iframe>
    </div>
  );
}
