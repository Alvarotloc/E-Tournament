import { conseguirNombreMes, generarDias } from "../helpers";
import useCalendario from "../hooks/useCalendario";
import styles from "../styles/Calendar.module.css";
const Calendar = () => {
  const {
    anioActual,
    mesActual,
    textos,
    handleSiguienteMes,
    handleAnteriorMes,
  } = useCalendario();
  
  const DIAS_SEMANA = {
    0 : `${styles.domingo}`,
    1 : `${styles.lunes}`,
    2 : `${styles.martes}`,
    3 : `${styles.miercoles}`,
    4 : `${styles.jueves}`,
    5 : `${styles.viernes}`,
    6 : `${styles.sabado}`,
  };
  return (
    <div className={styles.contenedorCalendar}>
      <header>
        <p onClick={handleAnteriorMes}>&#60;</p>
        <h1>
          {conseguirNombreMes(anioActual, mesActual)}{" "}
          <span>{`/ ${anioActual}`}</span>
        </h1>
        <p onClick={handleSiguienteMes}>&#62;</p>
      </header>
      <div className={styles.contenedorDias}>
        {textos.map((texto) => (
          <p key={texto}>{texto}</p>
        ))}
        <div
          className={
            DIAS_SEMANA[new Date(anioActual, mesActual - 1, 1).getDay()]
          }
        >
          1
        </div>{" "}
        {/* Damos estilos al primer dia del mes en base al diccionario de arriba, ya que el new Date nos da el día de la semana */}
        {generarDias(new Date(anioActual, mesActual, 0).getDate()).map(
          (dia, index) => (
            <div key={index}>{dia}</div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
