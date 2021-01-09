import styles from "./card.module.css";

export default function Card(props) {
  return (
    <a href={props.url} className={styles.card}>
      {props.children}
    </a>
  );
}
