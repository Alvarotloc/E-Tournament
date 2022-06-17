import { useContext } from "react";
import EventosContext from "../context/EventosProvider";

const useEventos = () => useContext(EventosContext);

export default useEventos;
