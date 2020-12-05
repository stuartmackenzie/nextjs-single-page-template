import styles from "./Contact.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import SectionHeading from "../SectionHeading/SectionHeading";
import ContactList from "../ContactList/ContactList";

export default function Contact({ settings }) {
  const items = [
    {
      icon: "email",
      uri: `mailto:${settings.email}`,
      text: settings.email
    },
    {
      icon: "youtube",
      uri: settings.youtube.uri,
      text: `@${settings.youtube.username}`
    },
    {
      icon: "dev",
      uri: settings.dev.uri,
      text: `@${settings.dev.username}`
    },
    {
      icon: "twitter",
      uri: settings.twitter.uri,
      text: `@${settings.twitter.username}`
    }
  ];

  return (
    <Section id="contact" className={styles.contact}>
      <Container className={styles.container}>
        <SectionHeading title="Get In Touch">
          I'd love to hear from you. Even if it's just to say "Hey!". Drop me a
          line and I'll get back to you ASAP.
        </SectionHeading>
        <ContactList items={items} />
      </Container>
      <Divider />
    </Section>
  );
}
