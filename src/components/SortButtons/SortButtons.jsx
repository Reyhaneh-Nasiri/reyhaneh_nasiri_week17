import styles from "./SortButtons.module.css";
const SortButtons = () => {
  return (
    <div className={styles.sortButtons}>
      <p>Sort by: </p>
      <button className={styles.active}>Latest Added</button>
      <button>Alphabet</button>
      <button>First Added</button>
    </div>
  );
};

export default SortButtons;
