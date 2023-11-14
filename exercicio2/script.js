
//#=============================== EX2 parte 1
const funcaoSoma = (num1, num2) =>{
    return console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
funcaoSoma(2,2);

//#=============================== EX2 parte 2
const verificaNum = (num1, num2) => {
    return console.log(`${num1} >= ${num2} = ${num1 >= num2}`);
}
verificaNum(5,2);

//#=============================== EX2 parte 3
const funcaoParImpar = (num) => {
    return console.log(`O número ${num} é par?\n ${(num%2 === 0)}`);
}
funcaoParImpar(4)

//#=============================== EX2 parte 4
const descontaInss = (salarioBruto) => {
    inss = ( salarioBruto * 0.10 );
    return console.log(`Salário liquido R$${salarioBruto - inss} `);
}

descontaInss(3500.00)