let nome = "ze"
let senha = 1234
let saldo = 1600

let nomeinput = prompt('porfavor insira seu nome')
let senhainput = Number(prompt('porfavor insira sua senha'))

if(nome === nomeinput && senha === senhainput ){
    alert('bem vindo ${nome}!')
} else{
    alert('usuario e/ou senha invalidos')
}