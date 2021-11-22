const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
  let datosPorGas = [
    [limiteCO, valorCO, "porcentajeCO"],
    [limiteCO2, valorCO2, "porcentajeCO2"],
    [limiteHC, valorHC, "porcentajeHC"],
    [limiteO2, valorO2, "porcentajeO2"],
  ];
  let resultado = {};

  datosPorGas.forEach((element) => {
    if (element[0] == 0) {
      resultado[element[2]] = 0;
    } else {
      resultado[element[2]] = (element[1] * 100) / element[0];
    }
  });
  return resultado;
};

console.log(calcularPocentajes(limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2));

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
