// Programa para calcular o valor de viagem com 5 variáveis e usando If/Else


console.log ('Olá, mundo!');

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitro = 10;
const distanciaEmKm  = 100;
const tipoCombustivel = 'Gasolina';


if(tipoCombustivel === 'Etanol'){
    const litrosConsumidos = distanciaEmKm/kmPorLitro;
    const totalGastos = litrosConsumidos*precoEtanol;
    console.log('O total gasto em etanol é', totalGastos.toFixed(2));

} else {
    const litrosConsumidos = distanciaEmKm/kmPorLitro;
    const totalGastos = litrosConsumidos*precoGasolina;
    console.log('O total gasto em gasolina é', totalGastos.toFixed(2));}