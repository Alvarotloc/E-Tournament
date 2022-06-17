import { useContext } from "react";
import IdiomaContext from "../context/IdiomaProvider";

const useIdioma = () => useContext(IdiomaContext);

export default useIdioma;
