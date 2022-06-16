import useFormulario from "../hooks/useFormulario";
import styles from "../styles/Formulario.module.css";
const Formulario = () => {
  const {
    nombre,
    setNombre,
    participantes,
    setParticipantes,
    fecha,
    setFecha,
    descripcion,
    setDescripcion,
    textos,
    handleSubmit,
  } = useFormulario();
  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <header>
        <h1>{textos[2]}</h1>
      </header>
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
      <button type="submit" className={styles.submit}>{textos[2]}</button>
    </form>
  );
};

export default Formulario;
