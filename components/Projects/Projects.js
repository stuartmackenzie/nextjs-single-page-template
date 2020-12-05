import styles from "./Projects.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProjectList from "../ProjectList/ProjectList";

export default function Projects({ items }) {
  return (
    <Section id="projects" className={styles.projects}>
      <Container className={styles.container}>
        <SectionHeading title="Projects">
          These are some of my recent projects.
        </SectionHeading>
        <ProjectList items={items} />
      </Container>
      <Divider />
    </Section>
  );
}
