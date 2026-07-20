let saldo = 1000;
let saldoh2 = document.querySelector('h2')

function consultarSaldo(){
    saldoh2.innerHTML = "Saldo: R$ " + saldo;
}
function depositar(){
    saldo = saldo +(Number(prompt("porfavor insira o valor a depositar")));
    consultarSaldo();
}
function sacar(){
    saldo = saldo - (Number(prompt("favor inserir valor a sacar")));
    consultarSaldo();
}
function transferir(){
    saldo = saldo - (Number(prompt("favor inserir valor a transferir")));
    consultarSaldo();
}
function sair(){

}