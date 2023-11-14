
//================================== EX1 - parte 1
const olaNome = (nome) => {
    return console.log(`Olá, ${nome}`)

}

olaNome("Luiz");
olaNome("Juliana");

//================================== EX1 - parte 2
let cont = 1;

//const tabuada = (num) =>{ //função arrow
const tabuada = function(num) {// expressão da função
    let resultado = num * cont;
    return console.log(`${num} x ${cont++} = ${resultado}`);

}

let numero = prompt("Digite um número para ver o resultado da tabuada");
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);
tabuada(numero);

