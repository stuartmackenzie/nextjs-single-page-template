import styles from "./Services.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import ServiceList from "../ServiceList/ServiceList";

export default function Services({ items }) {
  return (
    <Section id="services" className={styles.services}>
      <Container className={styles.container}>
        <SectionHeading title="Digitize your business">
          I will help you to create a remarkable first impression with creative
          designs.
        </SectionHeading>
        <ServiceList items={items} />
      </Container>
      <Divider />
    </Section>
  );
}
