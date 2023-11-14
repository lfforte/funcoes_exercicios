const funcaoSoma = (num1,num2) => {
    return (num1 + num2);
}

const funcaoSubtracao = (num1,num2) => {
    return (num1 - num2);
}

const funcaoMultiplicacao = (num1,num2) => {
    return (num1 * num2);
}
const funcaoDivisao = (num1,num2) => {
    return (num1 / num2);
}

let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número: ");

let soma = funcaoSoma(Number(num1),Number(num2));
let subtracao = funcaoSubtracao(Number(num1),Number(num2));
let multiplicacao = funcaoMultiplicacao(Number(num1),Number(num2));
let divisao = funcaoDivisao(Number(num1),Number(num2));

console.log(`Os númeos digitados foram: ${num1} e ${num2}`)
console.log(`A soma dos valores é = ${soma}`)
console.log(`A subtração dos valores é = ${subtracao}`)
console.log(`A multiplicação dos valores é = ${multiplicacao}`)
console.log(`A divisão dos valores é = ${divisao}`)