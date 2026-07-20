let numero1 = Math.floor(Math.random() * 1000) + 1;
let numero2 = Math.floor(Math.random() * 1000) + 1;
let numero3 = Math.floor(Math.random() * 1000) + 1;
let maiornumero = 0;

if (numero1 > numero2){
    maiornumero = numero1;
}else maiornumero = numero3 > numero2 ? numero3 : numero2;

console.log("o maiornumero e :"+ maiornumero);