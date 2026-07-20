let contador = Number(prompt('insira o numero inicial do contador progressivo de zero a x'))
console.log('o numero escolhido foi '+ contador)

let numeroIteracoes = 0

if(contador > 0){
    while(numeroIteracoes <= contador){
    console.log(numeroIteracoes)
    numeroIteracoes = numeroIteracoes + 1
}

}else if(contador == 0){
    console.log('0! ')
}

else{
    while(numeroIteracoes >= contador){
    console.log(numeroIteracoes)
    numeroIteracoes = numeroIteracoes -1
}
}



console.log('programa encerrou com sucesso!')