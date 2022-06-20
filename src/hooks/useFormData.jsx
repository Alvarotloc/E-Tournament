import { useContext } from "react";
import FormularioContext from "../context/FormularioProvider";

const useFormData = () => useContext(FormularioContext); //Creamos un custom hook para poder utilizar el context más fácilmente

export default useFormData;
