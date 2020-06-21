import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p>Hello, It's me</p>
        <h1>Yu Zhou</h1>
        <p>Software engineer | Photographer</p>
        <a href="https://www.linkedin.com/in/yu-zhou-40372a136">Linkedin</a>
        <a href="https://github.com/insomniachou">Github</a>
      </div>
    </div>
  );
}
