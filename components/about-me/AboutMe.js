import styles from "./styles.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.picture}>
            <img src="/images/profile.jpg" alt="my profile picture" />
          </div>
          <h3 className={styles.heading}>Personal Info</h3>
          <div className={styles.headingLine} />
          <div className={styles.infoRow}>
            <h4>Name:</h4>
            <p>Yu Zhou</p>
          </div>
          <div className={styles.infoRow}>
            <h4>Email:</h4>
            <p>
              <a href="mailto:yuzhousde@gmail.com">yuzhousde@gmail.com</a>
            </p>
          </div>
          <div className={styles.infoRow}>
            <h4>Phone Number:</h4>
            <p>+1 631 838 9681</p>
          </div>
          <div className={styles.infoRow}>
            <h4>Website:</h4>
            <p>
              <a href="#">www.thedecker.net</a>
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h3 className={styles.heading}>Greetings</h3>
          <div className={styles.headingLine} />
          <p>
            My name is Yu, I'm a senior software engineer based at NYC. My
            expertise is building modern website in a scalable fashion. I enjoy
            working either independently or collaboratively. I feel
            self-accomplishment when solving different issues coming up from
            software development.
          </p>
          <p>
            I am also a photography enthusiast. Started shooting photos since
            the end of 2019, I still have a lot of things to learn. But since
            I'm getting so much fun from it, I believe I will become a
            profession photography in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
