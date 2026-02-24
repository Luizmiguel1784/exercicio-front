let dados = {
    nome : "Luiz miguel santos almeida",
    idade : 18,
    cidade : "Alagoas"
}
let numeros = {
    x : 5,
    y : 10
}
function print() {
    
    console.log("Meu nome é " + dados.nome + " e tenho " +dados.idade 
        +". O resultado da soma é:" + (numeros.x + numeros.y) + 
        ". O resultado da subtração é: " + (numeros.x - numeros.y) + ". O resultado da multiplicação é:" + (numeros.x * numeros.y) + ". O resultado da divisão é:" + (numeros.x / numeros.y) );
    
    console.log(
    `Meu nome é ${dados.nome} e tenho ${dados.idade} 
    O resultado da soma é ${(numeros.x + numeros.y)} 
    O resultado da subtração é ${(numeros.x - numeros.y)}  
    O resultado da multiplicação é ${(numeros.x * numeros.y)}  
    O resultado da divisão é ${(numeros.x / numeros.y)}`);
    


}
print()