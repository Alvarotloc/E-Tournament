import { createContext, useEffect, useState } from "react";
import useIdioma from "../hooks/useIdioma";
import { toast } from "react-toastify";

const EventosContext = createContext();

const EventosProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);
  const [objetoModal, setObjetoModal] = useState({});
  const [modal, setModal] = useState(false);
  const { isSpanish } = useIdioma();

  useEffect(() => {
    const conseguirEventos = async () => {
      const eventos = await fetch(import.meta.env.VITE_BACKEND_URL);
      const eventosJson = await eventos.json();
      setEventos(eventosJson);
    };
    conseguirEventos();
  }, []);
  const handleEliminar = async (id) => {
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
      value={{
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
