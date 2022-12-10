/* Faça um programa para calcular o valor gasto de combustível em uma viagem.
 Você terá 3 variáveis. Sendo elas
     1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem.
Imprima o valor gasto para realizar essa viagem.
*/

console.log ('Olá');

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm  = 100;

const litrosConsumidos = distanciaEmKm/kmPorLitro;
const totalGastos = litrosConsumidos*precoCombustivel;

console.log('O total gasto será', totalGastos.toFixed(2));
