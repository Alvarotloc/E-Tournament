import { createContext, useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";

const EventosContext = createContext(); //Creamos el contexto

const EventosProvider = ({ children }) => {
  //Creamos los states globales, de todos los eventos actuales, el objetoModal que será el que se llene cuando hagas click en un día con evento y el de modal visible
  const [eventos, setEventos] = useState([]);
  const [objetoModal, setObjetoModal] = useState({});
  const [modal, setModal] = useState(false);
  const { isSpanish } = useIdioma();

  useEffect(() => { //Creamos un useEffect sin dependencias para que haga una llamada al backend una vez cargue la página
    const conseguirEventos = async () => {
      const eventos = await fetch(import.meta.env.VITE_BACKEND_URL);
      const eventosJson = await eventos.json();
      setEventos(eventosJson);
    };
    conseguirEventos();
  }, []);

  useEffect(() => {
    const eventosOrdenadosPorFecha = eventos.sort((a, b) => {
      return new Date(a.fecha) - new Date(b.fecha);
    });
    setEventos(eventosOrdenadosPorFecha);
  },[eventos]); //Creamos un useEffect para que se ejecute cuando cambie el state de eventos

  const handleEliminar = async (id) => { //Creamos una función para eliminar un evento, recibe un id y si todo sale bien nos muestra una notificación toast
    try {
      await fetch(import.meta.env.VITE_BACKEND_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });
      const eventosFiltrados = eventos.filter((evento) => evento._id !== id);
      setEventos(eventosFiltrados);
      toast.success(isSpanish ? "Evento eliminado" : "Event deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EventosContext.Provider
      value={{ //Creamos el value que será el contexto al que tendrán acceso el resto de componentes
        eventos,
        setEventos,
        objetoModal,
        setObjetoModal,
        modal,
        setModal,
        handleEliminar,
      }}
    >
      {children}
    </EventosContext.Provider>
  );
};

export { EventosProvider };

export default EventosContext;
