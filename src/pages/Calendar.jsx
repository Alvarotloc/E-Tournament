import { useState } from "react";
import { conseguirNombreMes, generarDias } from "../helpers";
import styles from "../styles/Calendar.module.css";
const Calendar = () => {
  const [anioActual, setAnioActual] = useState(new Date().getFullYear());
  const [mesActual, setMesActual] = useState(new Date().getMonth() + 1);
  const handleSiguienteMes = () => {
    if (mesActual === 11) {
      setAnioActual(anioActual + 1);
      setMesActual(0);
      return;
    }
    setMesActual(mesActual + 1);
  };
  const handleAnteriorMes = () => {
    if (mesActual === 0) {
      setAnioActual(anioActual - 1);
      setMesActual(11);
      return;
    }
    setMesActual(mesActual - 1);
  };
  const DIAS_SEMANA = {
    0: `${styles.domingo}`,
    1: `${styles.lunes}`,
    2: `${styles.martes}`,
    3: `${styles.miercoles}`,
    4: `${styles.jueves}`,
    5: `${styles.viernes}`,
    6: `${styles.sabado}`,
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
        <div className={styles.diasSemana}>
          <p>Lun</p>
          <p>Mar</p>
          <p>Mie</p>
          <p>Jue</p>
          <p>Vie</p>
          <p>Sab</p>
          <p>Dom</p>
        </div>
        <div className={styles.numeros}>
          <div
            className={`${
              DIAS_SEMANA[new Date(anioActual, mesActual - 1, 1).getDay()]
            }`}
          >
            1
          </div>
          {generarDias(new Date(anioActual, mesActual, 0).getDate()).map(
            (dia, index) => (
              <div key={index}>{dia}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
