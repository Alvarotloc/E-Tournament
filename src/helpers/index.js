import useIdioma from "../hooks/useIdioma";

export const generarDias = (dias) => {
  let diasTotal = [];
  for (let i = 2; i <= dias; i++) {
    diasTotal.push(i);
  }
  return diasTotal;
};

export const conseguirNombreMes = (anio, mes) => {
  const { isSpanish } = useIdioma();
  if (isSpanish) {
    return new Date(anio, mes, 0).toLocaleString("es-ES", { month: "long" });
  }
  return new Date(anio, mes, 0).toLocaleString("en-EN", { month: "long" });
};
