import { useContext } from "react";
import EventosContext from "../context/EventosProvider";

const useEventos = () => useContext(EventosContext); //Creamos un custom hook para poder utilizar el context más fácilmente

export default useEventos;
