import useIdioma from "../hooks/useIdioma";
import styles from "../styles/Layout.module.css";
const ToggleIdioma = () => {
  const { isSpanish, setIsSpanish } = useIdioma();
  return (
    <div className={styles.cambioIdioma}>
      Es
      <div className={styles.toggle} onClick={() => setIsSpanish(!isSpanish)}>
        <div className={isSpanish ? "" : styles.activo}></div>
      </div>
      En
    </div>
  );
};

export default ToggleIdioma;
