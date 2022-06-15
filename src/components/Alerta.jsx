import styles from '../styles/Alerta.module.css';
const Alerta = ({error,mensaje}) => {
  return (
    <div className={`${error ? styles.error : styles.success} ${styles.alerta}`}>{mensaje}</div>
  )
}

export default Alerta