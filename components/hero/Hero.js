import styles from "./styles.module.scss";

export default function Hero({ name, title, linkedin, github }) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p>Hello, It's me</p>
        <h1>{name}</h1>
        <p>{title}</p>
        <a href={linkedin}>Linkedin</a>
        <a href={github}>Github</a>
      </div>
    </div>
  );
}
