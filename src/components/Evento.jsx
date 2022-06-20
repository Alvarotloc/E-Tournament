import useEventos from "../hooks/useEventos";
import styles from "../styles/SideBar.module.css";
const Evento = ({ evento }) => { //Creamos el componente de Evento para el SideBar y recibe como props el evento
  const { nombre, fecha, _id } = evento; //Desestructuramos lo que nos interesa de cada evento para mostrarlo o utilizarlo en caso del _id
  const {handleEliminar} = useEventos(); //Hacemos una referencia a la función que elimina un evento desde el context
  return (
    <div className={styles.evento}>
      <div className={styles.textos}>
        <h4>{nombre}</h4>
        <p>{fecha}</p>
      </div>
      <svg
        width="42"
        height="42"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => handleEliminar(_id)}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>
    </div>
  );
};

export default Evento;
