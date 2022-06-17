import { useEffect, useState } from "react";
import useIdioma from "./useIdioma";
import styles from "../styles/Calendar.module.css";
import useEventos from "./useEventos";

const useCalendario = () => {
  const [anioActual, setAnioActual] = useState(new Date().getFullYear());
  const [mesActual, setMesActual] = useState(new Date().getMonth() + 1);
  const [textos, setTextos] = useState([]);
  const [warning, setWarning] = useState("No hay eventos para este día");
  const { isSpanish } = useIdioma();
  const { eventos, modal, setModal, setObjetoModal } = useEventos();

  useEffect(() => {
    if (isSpanish) {
      setTextos(["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]);
      setWarning("No hay eventos para este día");
      return;
    }
    setTextos(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    setWarning("No events for this day");
  }, [isSpanish]);
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
  const comprobarEvento = (dia) => {
    return eventos.some((evento) => {
      const eventoPartido = evento.fecha.split("-");
      let mes;
      if (mesActual.toString().length === 1) {
        mes = "0" + mesActual;
      }
      return (
        eventoPartido[0] === anioActual.toString() &&
        eventoPartido[1] === mes &&
        eventoPartido[2] === dia.toString()
      );
    });
  };
  const conseguirEventoEditar = (dia) => {
    setObjetoModal(
      eventos.find((evento) => {
        const eventoPartido = evento.fecha.split("-");
        let mes;
        if (mesActual.toString().length === 1) {
          mes = "0" + mesActual;
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
  const DIAS_SEMANA = {
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
