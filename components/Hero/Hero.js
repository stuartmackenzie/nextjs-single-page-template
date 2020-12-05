import styles from "./Hero.module.sass";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Button from "../Button/Button";
import ChevronDownIcon from "../Icons/ChevronDownIcon";

export default function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <Container>
        <div className={styles.message}>
          <h2>Stuart MacKenzie</h2>
          <h3>
            {"{"}Software Architect{"}"}
          </h3>
          <p>HTML • CSS • JavaScript • React • Gatsby</p>
          <div className={styles.buttons}>
            <Button href="#contact" className={styles.button}>
              Get In Touch
            </Button>
            <Button href="#projects" className={styles.button}>
              My Projects
            </Button>
          </div>
          <div>
            <a href="#about">
              <ChevronDownIcon className={styles.icon} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
