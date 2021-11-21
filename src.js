/*  Calcular los porcentajes de concentración de cada gas
    Recibe los límites superiores de cada gas (100%) a ser analizado y los valores reportados de los mismos
    Retorna un objeto con el porcentaje que indica el nivel de concentración de cada gas
*/
const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    let datosPorGas = [[limiteCO,valorCO,'porcentajeCO'],[limiteCO2,valorCO2,'porcentajeCO2'],[limiteHC,valorHC,'porcentajeHC'],[limiteO2,valorO2,'porcentajeO2']];
    let nivelEmisiones = {};

    for(let i=0; i<datosPorGas.length; i++){
        let porcentaje = datosPorGas[i][0]===0?0:datosPorGas[i][1]/(datosPorGas[i][0]/100);
        Object.defineProperty(nivelEmisiones,datosPorGas[i][2],{value:porcentaje,writable:true,enumerable: true,
            configurable: true}); 
    }
    return nivelEmisiones;
}

module.exports.calcularPocentajes = calcularPocentajes;