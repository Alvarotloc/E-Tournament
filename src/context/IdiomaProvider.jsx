import React, { createContext, useState } from "react";
const IdiomaContext = createContext();

const IdiomaProvider = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState(true); //Creamos un state para saber si es español o no y que todos los componentes tengan acceso a esa información
  return (
    <IdiomaContext.Provider
      value={{
        isSpanish,
        setIsSpanish,
      }}
    >
      {children}
    </IdiomaContext.Provider>
  );
};

export { IdiomaProvider };

export default IdiomaContext;
