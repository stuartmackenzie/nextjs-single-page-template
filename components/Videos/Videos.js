import styles from "./Videos.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import VideoList from "../VideoList/VideoList";

export default function Projects({ items }) {
  return (
    <Section id="videos" className={styles.videos}>
      <Container className={styles.container}>
        <SectionHeading title="Videos">
          These are some of my recent videos.
        </SectionHeading>
        <VideoList items={items} />
      </Container>
      <Divider />
    </Section>
  );
}
