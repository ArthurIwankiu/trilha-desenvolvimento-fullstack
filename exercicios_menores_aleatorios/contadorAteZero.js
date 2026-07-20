
let numeroinicial = Number(prompt("Insira o numero para o contador inicial"));
let numeroiteracoes = numeroinicial


if(numeroiteracoes < 0){
    numeroiteracoes = numeroiteracoes * -1
}


while (numeroiteracoes > 0){
    if (numeroinicial > 0){
        console.log(numeroinicial);
        numeroinicial--;
    }else if(numeroinicial == 0){
        console.log("o numero inicial e zero onde o contador para!");
    }   else{
        console.log(numeroinicial);
        numeroinicial++;
    }
    numeroiteracoes--;
}
console.log("encerrou com sucesso!")