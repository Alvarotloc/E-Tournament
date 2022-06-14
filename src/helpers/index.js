export const generarDias = (dias) => {
  let diasTotal = [];
  for (let i = 2; i <= dias; i++) {
    diasTotal.push(i);
  }
  return diasTotal;
};
export const conseguirNombreMes = (anio, mes) =>
  new Date(anio, mes, 0).toLocaleString("default", { month: "long" });

    // export const conseguirDiasSemana = (anio, mes) => new Date(anio,mes,1).toLocaleDateString("default", { weekday: "long" });