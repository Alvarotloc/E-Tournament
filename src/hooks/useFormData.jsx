import { useContext } from "react";
import FormularioContext from "../context/FormularioProvider";

const useFormData = () => useContext(FormularioContext);

export default useFormData;
