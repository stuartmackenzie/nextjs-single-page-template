import styles from "./About.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Divider from "../Divider/Divider";
import ProfilePic from "../ProfilePic/ProfilePic";
import Text from "../Text/Text";

export default function About() {
  return (
    <Section id="about" className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.pic}>
          <ProfilePic />
        </div>
        <div className={styles.content}>
          <Text tag="h2">Hello 👋</Text>
          <Text>
            I'm Stu, a coffee lover ☕, 30-something-year-old
            <b>front-end developer</b> 💻 with a background in computer and
            electrical engineering. I am based out of sunny ☀️ Edinburgh,
            Scotland and currently doing freelance work and consulting for
            international clients.
          </Text>
          <Text>
            I started creating cool web designs using HTML and CSS back in 2006.
            I am JavaScript enthusiast and extremely passionate about coding. I
            love to learn new things every day and keep up with the new
            technologies. In many ways, websites and apps are my first love. 🧡
          </Text>
          <Text>
            Last but not least, one of my favorite actuvutes is to educate and
            mentor others in the field to fulfill their potential and deepen my
            knowledge. You can find out more on my YouTube Channel.
          </Text>
        </div>
      </Container>
      <Divider />
    </Section>
  );
}
