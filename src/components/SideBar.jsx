import { useEffect } from "react";
import { useState } from "react";
import useEventos from "../hooks/useEventos";
import useIdioma from "../hooks/useIdioma";
import styles from "../styles/SideBar.module.css";
import Evento from "./Evento";
const SideBar = () => {
  const [activo, setActivo] = useState(false);
    const [textos, setTextos] = useState([]);
    const {isSpanish} = useIdioma();
  const {eventos} = useEventos();
  useEffect(() => {
    if (isSpanish) {
        setTextos(['Próximos Eventos','No hay Eventos Disponibles']);
        return;
    }
    setTextos(['Next Events','No Events Available']);
  },[isSpanish])
  return (
    <div className={`${styles.contendorSidebar} ${activo ? styles.activo : ''}`}>
        <aside className={`${styles.sidebar} ${activo ? styles.activo : ''}`} onClick={() => setActivo(!activo)}>
      {activo ? (
        <>
          <header>
            <h3>{textos[0]}</h3>
            <p onClick={() => setActivo(false)}>&#215;</p>
          </header>
          <div className={styles.contenedorEventos}>
            {eventos.length > 0 ? (eventos.map((evento) => (<Evento key={evento._id} evento={evento}/>))) : (<p>{textos[1]}</p>)}
          </div>
        </>
      ) : (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
        </svg>
      )}
      </aside>
    </div>
  );
};

export default SideBar;
