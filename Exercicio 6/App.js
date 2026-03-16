//Função tradicional
function saudacao(nome, idade) {

    console.log(`Olá ${nome}, vc tem ${idade} anos de idade`);   
    
}
//Função anônima
const dobro = function(a) {
    return a * 2
}

//Arrow function
const soma =  (b,c) => b + c;


saudacao("Luiz", 18)

console.log( "Dobro de 123:", dobro(123));

console.log("Soma:", soma(5,7));
