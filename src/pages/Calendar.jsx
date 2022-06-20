import { conseguirNombreMes, generarDias } from "../helpers";
import useCalendario from "../hooks/useCalendario";
import styles from "../styles/Calendar.module.css";
import { toast } from "react-toastify";
import ModalCard from "../components/ModalCard";
import SideBar from "../components/SideBar";
const Calendar = () => {
  const {
    anioActual,
    mesActual,
    textos,
    handleSiguienteMes,
    handleAnteriorMes,
    DIAS_SEMANA,
    warning,
    comprobarEvento,
    conseguirEventoEditar,
    modal,
  } = useCalendario(); //Traemos los datos del custom hook

  return (
    <>
      <SideBar />
      {modal && <ModalCard />} {/*Si modal es true se muestra la modal */}
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
          {/* Damos estilos al primer dia del mes en base al diccionario de arriba, ya que el new Date nos da el día de la semana en número, además con la función comprobarEvento le damos el estilo de activo en base a si hay o no evento */}
          {generarDias(new Date(anioActual, mesActual, 0).getDate()).map(
            (dia, index) => (
              <div
                key={index}
                className={`${comprobarEvento(dia) ? styles.activo : ''} ${(dia === 1 ? DIAS_SEMANA[new Date(anioActual, mesActual - 1, 1).getDay()] : '' )}`}
                onClick={() =>
                  comprobarEvento(dia)
                    ? conseguirEventoEditar(dia)
                    : toast.warning(warning) //Si no hay evento, se muestra un toast de advertencia
                }
              >
                {dia}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
