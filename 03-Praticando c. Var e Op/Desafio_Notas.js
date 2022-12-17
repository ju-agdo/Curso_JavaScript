// Desafio média notas, aprovado, recuperação e reprovado;

const media1 = 10
const media2 = 10
const media3 = 10

medianotas = (media1+media2+media3)/3

console.log('A média foi:' ,medianotas)

if(medianotas < 5){
    console.log('Reprovado')

} else if(medianotas >=5 && medianotas < 7){
    console.log('Recuperação')

} else { console.log('Parabéns, aprovado!')

}

