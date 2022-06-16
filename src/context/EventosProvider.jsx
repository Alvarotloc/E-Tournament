import { createContext, useEffect, useState } from "react"

const EventosContext = createContext();

const EventosProvider = ({children}) => {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        const conseguirEventos = async () => {
            const eventos = await fetch(import.meta.env.VITE_BACKEND_URL);
            const eventosJson = await eventos.json();
            setEventos(eventosJson);
        }
        conseguirEventos();
    },[])
    return (
        <EventosContext.Provider value={{
            eventos,
            setEventos
        }}>
            {children}
        </EventosContext.Provider>
    )
}

export { EventosProvider }

export default EventosContext;