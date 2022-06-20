import useIdioma from "../hooks/useIdioma";
import styles from "../styles/Layout.module.css";
const ToggleIdioma = () => { //Creamos el componente ToggleIdioma para cambiar entre inglés y español, recibe datos del contexto de idioma
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
