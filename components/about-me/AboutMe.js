import styles from "./styles.module.scss";

export default function AboutMe({
  picture,
  name,
  email,
  phone,
  website,
  greetings,
}) {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.picture}>
            <img src={picture} alt="my profile picture" />
          </div>
          <h3 className={styles.heading}>Personal Info</h3>
          <div className={styles.headingLine} />
          <div className={styles.infoRow}>
            <h4>Name:</h4>
            <p>{name}</p>
          </div>
          <div className={styles.infoRow}>
            <h4>Email:</h4>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className={styles.infoRow}>
            <h4>Phone Number:</h4>
            <p>{phone}</p>
          </div>
          <div className={styles.infoRow}>
            <h4>Website:</h4>
            <p>
              <a href="#">{website}</a>
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h3 className={styles.heading}>Greetings</h3>
          <div className={styles.headingLine} />
          {greetings.map((paragraph, index) => {
            return <p key={`greetings-${index}`}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
