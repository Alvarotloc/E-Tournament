import { useNavigate } from "react-router-dom";
import useEventos from "../hooks/useEventos";
import useFormData from "../hooks/useFormData";
import styles from "../styles/ModalCard.module.css";
const ModalCard = () => {
  const { setModal, objetoModal, setObjetoModal, handleEliminar } =
    useEventos();
  const { setObjetoEditar } = useFormData();
  const navigate = useNavigate();
  const { nombre, fecha, participantes, descripcion, _id } = objetoModal;
  const handleEditar = () => {
    setObjetoEditar(objetoModal);
    setModal(false);
    navigate("/formulario");
    setObjetoModal({});
  };
  return (
    <div className={styles.modal} onClick={() => setModal(false)}>
      <div className={styles.card}>
        <img src="https://picsum.photos/id/3/350/200" alt="Imagen del evento" />
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
              Editar
            </button>
            <button type="button" onClick={() => handleEliminar(_id)}>
              Borrar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModalCard;
