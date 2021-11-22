var objeto = {};

const calcularPocentajes = (
  limiteCO,
  limiteCO2,
  limiteHC,
  limiteO2,
  valorCO,
  valorCO2,
  valorHC,
  valorO2
) => {
  if (limiteCO == 0) {
    objeto.porcentajeCO = 0;
  } else {
    let porcentajeCO = (valorCO * 100) / limiteCO;
    objeto.porcentajeCO = porcentajeCO;
  }

  if (limiteCO2 == 0) {
    objeto.porcentajeCO2 = 0;
  } else {
    let porcentajeCO2 = (valorCO2 * 100) / limiteCO2;
    objeto.porcentajeCO2 = porcentajeCO2;
  }

  if (limiteHC == 0) {
    objeto.porcentajeHC = 0;
  } else {
    let porcentajeHC = (valorHC * 100) / limiteHC;
    objeto.porcentajeHC = porcentajeHC;
  }

  if (limiteO2 == 0) {
    objeto.porcentajeO2 = 0;
  } else {
    let porcentajeO2 = (valorO2 * 100) / limiteO2;
    objeto.porcentajeO2 = porcentajeO2;
  }

  return objeto;
};

const registrarCO = (valorCO) => {
  if (valorCO < 0) {
    return "fuera_de_rango";
  } else {
    const etiqueta =
      valorCO >= rangosCO[0].de && valorCO <= rangosCO[0].hasta
        ? "Parametro CO en rango estandar"
        : "Parametro CO fuera de rango";
    return etiqueta;
  }
};

const registrarCO2 = (valorCO2) => {
  if (valorCO2 < 0) {
    return "fuera_de_rango";
  } else {
    const etiqueta =
      valorCO2 >= rangosCO2[0].de && valorCO2 <= rangosCO2[0].hasta
        ? "Parametro CO2 en rango estandar"
        : "Parametro CO2 fuera de rango";
    return etiqueta;
  }
};

const registrarHC = (valorHC) => {
  if (valorHC < 0) {
    return "fuera_de_rango";
  } else {
    const etiqueta =
      valorHC >= rangosHC[0].de && valorHC <= rangosHC[0].hasta
        ? "Parametro HC en rango estandar"
        : "Parametro HC fuera de rango";
    return etiqueta;
  }
};

const registrarO2 = (valorO2) => {
  if (valorO2 < 0) {
    return "fuera_de_rango";
  } else {
    const etiqueta =
      valorO2 >= rangosO2[0].de && valorO2 <= rangosO2[0].hasta
        ? "Parametro O2 en rango estandar"
        : "Parametro O2 fuera de rango";
    return etiqueta;
  }
};

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;

module.exports.calcularPocentajes = calcularPocentajes;
