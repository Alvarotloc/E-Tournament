import { useContext } from "react";
import IdiomaContext from "../context/IdiomaProvider";

const useIdioma = () => useContext(IdiomaContext); //Creamos un custom hook para poder utilizar el context más fácilmente

export default useIdioma;
