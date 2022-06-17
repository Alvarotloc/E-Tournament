import React, { createContext, useState } from "react";
const IdiomaContext = createContext();

const IdiomaProvider = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState(true);
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
