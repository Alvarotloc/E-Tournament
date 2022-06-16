import React, { createContext, useState } from 'react'

const FormularioContext = createContext();

const FormularioProvider = ({children}) => {
    const [objetoEditar, setObjetoEditar] = useState({});

  return (
    <FormularioContext.Provider value={{
        objetoEditar,
        setObjetoEditar
    }}>
        {children}
    </FormularioContext.Provider>
  )
}

export {FormularioProvider}

export default FormularioContext;