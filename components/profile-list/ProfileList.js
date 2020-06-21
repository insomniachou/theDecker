import Link from "next/link";
import styles from "./styles.module.scss";

export default function ProfileList() {
  return (
    <div className={styles.profileList}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <Link href="/yu">
            <img src="/images/profile-yu.jpg" alt="Yu's profile picture" />
          </Link>
        </div>
        <div className={styles.picture}>
          <Link href="/ya">
            <img src="/images/profile-ya.jpg" alt="Ya's profile picture" />
          </Link>
        </div>
      </div>
    </div>
  );
}
