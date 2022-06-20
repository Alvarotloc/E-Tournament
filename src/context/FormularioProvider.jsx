import React, { createContext, useState } from "react";

const FormularioContext = createContext();

const FormularioProvider = ({ children }) => {
  const [objetoEditar, setObjetoEditar] = useState({}); // Creamos el context global de objeto editar porque necesitarán acceder a él desde el formulario y desde el calendario

  return (
    <FormularioContext.Provider
      value={{
        objetoEditar,
        setObjetoEditar,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

export { FormularioProvider };

export default FormularioContext;
