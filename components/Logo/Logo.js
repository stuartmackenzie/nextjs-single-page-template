import Image from "next/image";
import styles from "./Logo.module.sass";

export default function Logo({ width = 256, height = 241 }) {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/ninjalogo.png"
        alt="Ninjs"
        width={width}
        height={height}
      />
    </div>
  );
}
