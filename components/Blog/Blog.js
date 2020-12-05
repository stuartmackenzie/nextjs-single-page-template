import styles from "./Blog.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import BlogList from "../BlogList/BlogList";

export default function Blog({ items }) {
  return (
    <Section id="blog" className={styles.blog}>
      <Container className={styles.container}>
        <SectionHeading title="Blog">
          These are some of my recent blog posts.
        </SectionHeading>
        <BlogList items={items} />
      </Container>
      <Divider />
    </Section>
  );
}
