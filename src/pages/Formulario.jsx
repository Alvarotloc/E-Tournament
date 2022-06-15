import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import useIdioma from "../hooks/useIdioma";
import styles from "../styles/Formulario.module.css";
const Formulario = () => {
  const [alerta, setAlerta] = useState({ error: false, mensaje: "" });
  const [nombre, setNombre] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [textos, setTextos] = useState([]);

  const { isSpanish } = useIdioma();

  const textosEspaniol = [
    "Todos los campos son obligatorios",
    "Evento creado con éxito",
    "Crear Evento",
    "Nombre",
    "Ingrese el nombre del evento",
    "Participantes",
    "Ingrese el número de participantes",
    "Fecha",
    "Descripción",
    "Ingrese la descripción del evento",
  ];
  const textosIngles = [
    "All fields are required",
    "Event created successfully",
    "Create Event",
    "Name",
    "Enter the name of the event",
    "Participants",
    "Enter the number of participants",
    "Date",
    "Description",
    "Enter the description of the event",
  ];
  useEffect(() => {
    if (isSpanish) {
      setTextos(textosEspaniol);
      return;
    }
    setTextos(textosIngles);
  }, [isSpanish]);

  useEffect(() => {
    if (alerta.mensaje) {
      setTimeout(() => {
        setAlerta({ error: false, mensaje: "" });
      }, 3000);
    }
  }, [alerta]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, participantes, fecha, descripcion].includes("")) {
      setAlerta({ error: true, mensaje: textos[0] });
      return;
    }
    setAlerta({ error: false, mensaje: textos[1] });
  };
  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <header>
        <h1>{textos[2]}</h1>
      </header>
      {alerta.mensaje && (
        <Alerta mensaje={alerta.mensaje} error={alerta.error} />
      )}
      <fieldset>
        <div className={styles.campo}>
          <label htmlFor="nombre">{textos[3]}</label>
          <input
            type="text"
            placeholder={textos[4]}
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="participantes">{textos[5]}</label>
          <input
            type="number"
            placeholder={textos[6]}
            name="participantes"
            id="participantes"
            value={participantes}
            onChange={(e) => setParticipantes(e.target.value)}
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="fecha">{textos[7]}</label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="descripcion">{textos[8]}</label>
          <textarea
            name="descripcion"
            id="descripcion"
            placeholder={textos[9]}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
      </fieldset>
      <input type="submit" value={textos[2]} />
    </form>
  );
};

export default Formulario;
