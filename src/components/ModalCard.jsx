import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos de react router la posibilidad de hacer una navegación una vez pase algo
import useEventos from "../hooks/useEventos";
import useFormData from "../hooks/useFormData";
import useIdioma from "../hooks/useIdioma";
import styles from "../styles/ModalCard.module.css";
const ModalCard = () => {
  const [textos, setTextos] = useState([]);
  const { setModal, objetoModal, setObjetoModal, handleEliminar } = useEventos(); //Desestructuramos lo necesario de el context de Eventos
  const {isSpanish} = useIdioma();
  const { setObjetoEditar } = useFormData(); //Desestructuramos lo necesario de el context de FormData
  const { nombre, fecha, participantes, descripcion, _id } = objetoModal; // Desestructuramos los datos de objeto modal que es el que se llena cuando haces click en un día que tiene un evento asignado
  const navigate = useNavigate(); //Definimos la constante navigate para hacer la navegación una vez pase algo

  useEffect(() => {
    if(isSpanish){
      setTextos(['Editar','Borrar']);
      return;
    }
    setTextos(['Edit','Delete']);
  })

  const handleEditar = () => { //Definimos la función que se ejectutará cuando se edite un evento para ir al formulario y que éste tenga acceso al evento que queremos editar
    setObjetoEditar(objetoModal);
    setModal(false);
    navigate("/formulario");
    setObjetoModal({});
  };
  return (
    <div className={styles.modal} onClick={() => setModal(false)}>
      <div className={styles.card}>
        <img src="https://picsum.photos/id/3/350/200" alt="Imagen del evento" /> {/* Imagen del evento, de momento un placeholder */}
        <section className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <div className={styles.topCard} onClick={() => setModal(false)}>
            <p>&#215;</p>
            <p>{fecha}</p>
          </div>
          <p>Participantes: {participantes}</p>
          <div className={styles.botones}>
            <button type="button" onClick={handleEditar}>
              {textos[0]}
            </button>
            <button type="button" onClick={() => handleEliminar(_id)}> {/* HandleEliminar nos llega desde el context y necesita de un id */}
              {textos[1]}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModalCard;
