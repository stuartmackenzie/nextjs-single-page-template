import Image from "next/image";
import styles from "./ProfilePic.module.sass";

export default function ProfilePic({ width = 144, height = 144 }) {
  return (
    <div className={styles["profile-pic"]}>
      <Image
        src="/images/me.png"
        alt="Stuart MacKenzie"
        width={width}
        height={height}
      />
    </div>
  );
}
