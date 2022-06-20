import { useEffect, useState } from "react";
import useIdioma from "./useIdioma";
import styles from "../styles/Calendar.module.css";
import useEventos from "./useEventos";

const useCalendario = () => { //Custom Hook para sacar lógica de la pagina de calendario
  // Creamos los states
  const [anioActual, setAnioActual] = useState(new Date().getFullYear());
  const [mesActual, setMesActual] = useState(new Date().getMonth() + 1);
  const [textos, setTextos] = useState([]);
  const [warning, setWarning] = useState("No hay eventos para este día");
  const { isSpanish } = useIdioma(); //Extraemos si es inglés o español
  const { eventos, modal, setModal, setObjetoModal } = useEventos(); //Extraemos los datos del context de eventos
  const textosEspanol = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const textosIngles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => { //Comprobamos cuando cambie la dependencia isSpanish para cambiar el texto de los días
    if (isSpanish) {
      setTextos(textosEspanol);
      setWarning("No hay eventos para este día");
      return;
    }
    setTextos(textosIngles);
    setWarning("No events for this day");
  }, [isSpanish]);

  const handleSiguienteMes = () => { //Creamos una función para cambiar el mes actual y si llega a diciembre que cambie el año
    if (mesActual === 11) {
      setAnioActual(anioActual + 1);
      setMesActual(0);
      return;
    }
    setMesActual(mesActual + 1);
  };

  const handleAnteriorMes = () => { //Creamos una función para cambiar el mes actual y si llega a enero que cambie el año
    if (mesActual === 0) {
      setAnioActual(anioActual - 1);
      setMesActual(11);
      return;
    }
    setMesActual(mesActual - 1);
  };
  const comprobarEvento = (dia) => { //Creamos una función para comprobar si hay eventos para un día
    return eventos.some((evento) => {
      const eventoPartido = evento.fecha.split("-");
      let mes;
      if (mesActual.toString().length === 1) {
        mes = "0" + mesActual;
      }
      if(dia.toString().length === 1){
        dia = "0" + dia;
      }
      return (
        eventoPartido[0] === anioActual.toString() &&
        eventoPartido[1] === mes &&
        eventoPartido[2] === dia.toString()
      );
    });
  };
  const conseguirEventoEditar = (dia) => { //Creamos una función para conseguir el evento que se va a editar
    setObjetoModal(
      eventos.find((evento) => {
        const eventoPartido = evento.fecha.split("-");
        let mes;
        if (mesActual.toString().length === 1) {
          mes = "0" + mesActual;
        }
        if(dia.toString().length === 1){
          dia = "0" + dia;
        }
        return (
          eventoPartido[0] === anioActual.toString() &&
          eventoPartido[1] === mes &&
          eventoPartido[2] === dia.toString()
        );
      })
    );
    setModal(true);
  };
  const DIAS_SEMANA = { // Creamos un diccionario para pasar los días de la semana en números tal y como los devuelve la función helper y así asignar la clase correspondiente
    0: `${styles.domingo}`,
    1: `${styles.lunes}`,
    2: `${styles.martes}`,
    3: `${styles.miercoles}`,
    4: `${styles.jueves}`,
    5: `${styles.viernes}`,
    6: `${styles.sabado}`,
  };
  return {
    anioActual,
    mesActual,
    textos,
    handleSiguienteMes,
    handleAnteriorMes,
    DIAS_SEMANA,
    comprobarEvento,
    conseguirEventoEditar,
    warning,
    modal,
    setModal,
  };
};

export default useCalendario;
