import styles from "./styles.module.scss";

export default function Hero({ name, title, links }) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p>Hello, It's me</p>
        <h1>{name}</h1>
        <p>{title}</p>
        {links.map(({ name, url }, key) => {
          return (
            <a key={`link-${key}`} href={url}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
