import useIdioma from "../hooks/useIdioma";
//Creamos un archivo con funciones helper para sacar lógica de componentes

export const generarDias = (dias) => { //Genera un array con los dias del mes
  let diasTotal = [];
  for (let i = 1; i <= dias; i++) {
    diasTotal.push(i);
  }
  return diasTotal;
};

export const conseguirNombreMes = (anio, mes) => { //Conseguimos el nombre del mes y lo mostramos dependiendo del idioma
  const { isSpanish } = useIdioma();
  if (isSpanish) {
    return new Date(anio, mes, 0).toLocaleString("es-ES", { month: "long" });
  }
  return new Date(anio, mes, 0).toLocaleString("en-EN", { month: "long" });
};
