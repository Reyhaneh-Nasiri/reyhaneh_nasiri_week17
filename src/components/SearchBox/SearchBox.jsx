import styles from "./SearchBox.module.css";
const SearchBox = ({ setSearch }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <i className="fa-solid fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBox;
