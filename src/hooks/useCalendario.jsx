import { useEffect, useState } from "react";
import useIdioma from "./useIdioma";
import styles from "../styles/Calendar.module.css";

const useCalendario = () => {
    const [anioActual, setAnioActual] = useState(new Date().getFullYear());
    const [mesActual, setMesActual] = useState(new Date().getMonth() + 1);
    const [textos, setTextos] = useState([]);
    const {isSpanish} = useIdioma();
    useEffect(() => {
      if(isSpanish){
        setTextos(['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']);
        return;
      }
      setTextos(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    },[isSpanish]);
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
      0 : `${styles.domingo}`,
      1 : `${styles.lunes}`,
      2 : `${styles.martes}`,
      3 : `${styles.miercoles}`,
      4 : `${styles.jueves}`,
      5 : `${styles.viernes}`,
      6 : `${styles.sabado}`,
    };
    return {
        anioActual,
        mesActual,
        textos,
        handleSiguienteMes,
        handleAnteriorMes,
        DIAS_SEMANA
    };
}

export default useCalendario