import styles from "./Navbar.module.css";

const Navbar = ({ aboutRef, currentProjectRef }: any): JSX.Element => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex" }}>
        <span className={styles.item}>HOME</span>{" "}
        <span
          className={styles.item}
          onClick={() => aboutRef.current.scrollIntoView()}
        >
          ABOUT
        </span>
        <span
          className={styles.item}
          onClick={() => currentProjectRef.current.scrollIntoView()}
        >
          WORKS
        </span>
      </div>
    </div>
  );
};

export default Navbar;
